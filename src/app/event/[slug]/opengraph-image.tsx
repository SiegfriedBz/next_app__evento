import { ImageResponse } from "next/og"
import { capitalize } from "../../../lib/utils"
import { getEvent } from "@/lib/server-utils"
import { EventoEvent } from "@prisma/client"
import Image from "next/image"

// Image metadata
export const alt = "Evento event"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  let eventItem: EventoEvent | undefined = undefined

  try {
    eventItem = await getEvent(params.slug)
  } catch (e) {
    console.log(e)
  }

  return new ImageResponse(
    (
      <section className='relative'>
        {eventItem != undefined && (
          <Image src={eventItem.imageUrl} {...size} alt={alt} />
        )}
        <div className='absolute bottom-2 right-2 z-50 text-white/90'>
          <h1 className='h1'>{capitalize(params.slug)}</h1>
          <p>Evento - Browse events around you</p>
        </div>
      </section>
    )
  )
}
