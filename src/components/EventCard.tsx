import type { EventoEvent } from "@prisma/client"
import Image from "next/image"
import MotionLinkWrapper from "./MotionLinkWrapper"
import { getDay, getMonth } from "@/lib/utils"

type Props = {
  eventItem: EventoEvent
}

const EventCard = ({ eventItem }: Props) => {
  return (
    <MotionLinkWrapper
      href={`/event/${eventItem.slug}`}
      className='h-80 flex-1 basis-[20rem] max-w-[22rem]'
    >
      <section
        className='h-full w-full
          flex flex-col justify-center items-center
          border border-gray-500
          rounded-md
          overflow-hidden
          custom-scale
        '
      >
        <div className='flex-1 w-full relative'>
          <section className='flex flex-col items-center absolute z-50 top-4 left-4'>
            <span className='text-white text-xl font-bold'>
              {getDay(eventItem.date)}
            </span>
            <span className='text-accent/80 -mt-2'>
              {getMonth(eventItem.date)}
            </span>
          </section>
          <Image
            src={eventItem.imageUrl}
            fill
            className='object-cover rounded-t-md h-[60%]'
            alt={eventItem.name}
          />
        </div>
        <div className='flex h-[40%] flex-col items-center justify-center'>
          <h2 className='mb-1 text-2xl font-semibold'>{eventItem.name}</h2>
          <p className='italic text-white/75'>By {eventItem.organizerName}</p>
          <p className='mt-4 text-sm text-white/50'>{eventItem.location}</p>
        </div>
      </section>
    </MotionLinkWrapper>
  )
}

export default EventCard
