import { Metadata } from "next"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import CustomButton from "@/components/CustomButton"

import type { EventoEvent } from "@prisma/client"
import { capitalize } from "@/lib/utils"
import { getEvent } from "@/lib/server-utils"

type TProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: TProps): Metadata | undefined {
  const { slug } = params
  if (!slug) return

  return {
    title: capitalize(slug),
  }
}

export async function generateStaticParams() {
  return [
    { slug: "harmony-festival" },
    { slug: "3d-animation-workshop" },
    { slug: "jazz-fusion-night" },
  ]
}

const EventPage = async ({ params }: TProps) => {
  const { slug } = params
  const eventItem = (await getEvent(slug)) as EventoEvent

  const date = new Date(eventItem.date)
  const formattedDate = `${date.toLocaleString("en-US", {
    weekday: "long",
  })}, ${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()}`

  return (
    <main className='main'>
      <section>
        <div className='w-full min-h-[24rem] relative overflow-hidden flex justify-center items-center'>
          <Image
            src={eventItem.imageUrl}
            fill
            sizes='(max-width: 1280px) 100vw, 1280px'
            priority
            quality={50}
            className='object-cover blur-3xl'
            alt={eventItem.name}
          />

          <section className='relative flex flex-col justify-center md:flex-row items-center gap-x-8 md:gap-x-16 h-[200px]'>
            <Image
              src={eventItem.imageUrl}
              width={300}
              height={200}
              priority
              className='object-cover rounded-md border border-gray-500 custom-scale'
              alt={eventItem.name}
            />
            <div className='flex flex-col justify-between h-full w-full mt-4 md:my-auto'>
              <div className='flex flex-col'>
                <span className='text-white/75'>{formattedDate}</span>
                <h1
                  className={twMerge(
                    "h1",
                    "text-xl text-white md:text-4xl lg:text-5xl font-semibold md:mt-4 md:mb-2 whitespace-nowrap"
                  )}
                >
                  {eventItem.name}
                </h1>
                <p className='text-white/75'>
                  Organized by{" "}
                  <span className='italic'>{eventItem.organizerName}</span>
                </p>
              </div>
              <CustomButton className='mt-2 text-white/75 md:mt-0 w-full md:w-11/12 lg:w-full'>
                Get Tickets
              </CustomButton>
            </div>
          </section>
        </div>
      </section>

      <div className='min-h-[50vh]'>
        <Section>
          <Section.H2>About this event</Section.H2>
          <Section.P>{eventItem.description}</Section.P>
        </Section>

        <Section>
          <Section.H2>Location</Section.H2>
          <Section.P>{eventItem.location}</Section.P>
        </Section>
      </div>
    </main>
  )
}

export default EventPage

const Section = ({
  children,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section className='flex flex-col items-center my-8 gap-y-4 max-w-4xl mx-auto'>
      {children}
    </section>
  )
}

Section.H2 = H2
Section.P = P

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className='text-lg text-white md:text-2xl'>{children}</h2>
}
function P({ children }: { children: React.ReactNode }) {
  return <p className='text-white/75 text-center leading-8'>{children}</p>
}
