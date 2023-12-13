import { ImageResponse } from "next/og"
import Image from "next/image"
import { getEvent } from "@/lib/server-utils"
import { capitalize } from "@/lib/utils"
import type { EventoEvent } from "@prisma/client"

// Image metadata
export const alt = "Evento event"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

type TProps = {
  params: { slug: string }
}

export default async function OgImage({ params }: TProps) {
  let eventItem: EventoEvent | undefined = undefined

  try {
    eventItem = await getEvent(params.slug)
  } catch (e) {
    console.log(e)
  }

  return new ImageResponse(
    (
      <section>
        {eventItem != undefined && (
          <Image src={eventItem.imageUrl} {...size} alt={alt} />
        )}
        <div>
          <h1>{capitalize(params.slug)}</h1>
          <p>Evento - Browse events around you</p>
        </div>
      </section>
    )
  )
}
