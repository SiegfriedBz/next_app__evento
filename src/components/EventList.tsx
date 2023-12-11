import { Suspense } from "react"
import EventCard from "./EventCard"
import Loading from "@/app/events/[city]/loading"
import PaginationControls from "./PaginationControls"
import { RESULTS_PER_PAGE } from "@/lib/constants"
import { getEvents } from "@/lib/server-utils"
import type { EventoEvent } from "@prisma/client"

type Props = {
  city: EventoEvent["city"]
  page: number
}

const EventList = ({ city, page }: Props) => {
  return (
    <Suspense key={`${city}-${page}`} fallback={<Loading />}>
      <AsyncEventList city={city} page={page} />
    </Suspense>
  )
}

export default EventList

const AsyncEventList = async ({ city, page }: Props) => {
  const { cityEvents, totalCityEvents } = (await getEvents({
    city,
    page,
  })) as { cityEvents: EventoEvent[]; totalCityEvents: number }

  const cityEventsLeft = totalCityEvents - RESULTS_PER_PAGE * page

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : null
  const nextPath =
    cityEventsLeft > 0 ? `/events/${city}?page=${page + 1}` : null

  return (
    <EventCardsList
      cityEvents={cityEvents}
      previousPath={previousPath}
      nextPath={nextPath}
    />
  )
}

type TEventCardsList = {
  cityEvents: EventoEvent[]
  previousPath: string | null
  nextPath: string | null
}

const EventCardsList = ({
  cityEvents,
  previousPath,
  nextPath,
}: TEventCardsList) => {
  return (
    <>
      <section className='flex flex-wrap justify-center gap-12'>
        {cityEvents?.map((eventItem) => {
          return <EventCard key={eventItem.id} eventItem={eventItem} />
        })}
      </section>
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  )
}
