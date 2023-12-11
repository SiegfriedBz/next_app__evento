import "server-only"

import { unstable_cache } from "next/cache"
import { EventoEvent } from "@prisma/client"
import prisma from "@/lib/db"
import { notFound } from "next/navigation"
import { RESULTS_PER_PAGE } from "./constants"

/** Server Components - Prisma */
type TGetEvents = {
  city: string
  page: number
}

export const getEvents = unstable_cache(
  async ({ city, page = 1 }: TGetEvents) => {
    const SKIP = (page - 1) * RESULTS_PER_PAGE

    try {
      const cityEvents: EventoEvent[] = await prisma.eventoEvent.findMany({
        where:
          city === "all"
            ? {}
            : {
                city: {
                  equals: city,
                  mode: "insensitive",
                },
              },
        take: RESULTS_PER_PAGE,
        skip: SKIP,
        orderBy: { date: "asc" },
      })

      const totalCityEvents = await prisma.eventoEvent.count({
        where:
          city === "all"
            ? {}
            : {
                city: {
                  equals: city,
                  mode: "insensitive",
                },
              },
      })

      return { cityEvents, totalCityEvents }
    } catch (error) {
      console.log("error", error)
    }
  }
)

export const getEvent = unstable_cache(async (slug: string) => {
  try {
    const event: EventoEvent | null = await prisma.eventoEvent.findUnique({
      where: { slug: slug },
    })

    if (!event) {
      return notFound()
    }

    return event
  } catch (error) {
    console.log("error", error)
  }
})
