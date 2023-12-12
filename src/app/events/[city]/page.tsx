import { Metadata } from "next"
import { z } from "zod"
import { twMerge } from "tailwind-merge"
import EventList from "@/components/EventList"
import { capitalize } from "@/lib/utils"

type TProps = {
  params: {
    city: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export function generateMetadata({ params }: TProps): Metadata | undefined {
  const { city } = params
  if (!city) return

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  }
}

const searchParamsSchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
})

const CityEventsPage = ({ params, searchParams }: TProps) => {
  const { city } = params

  const parsedSearchParams = searchParamsSchema.safeParse(searchParams)
  if (!parsedSearchParams.success) {
    throw new Error("Please use a page number")
  }

  const pageNumber = parsedSearchParams.data.page

  const isAllEventsPage = city === "all"

  return (
    <main className={twMerge("main", "flex flex-col items-center pt-32")}>
      <h1 className={twMerge("h1", "mb-16")}>
        {isAllEventsPage ? (
          <>
            <span>All Events</span>
          </>
        ) : (
          <>
            <span>Events in </span>
            <span className='capitalize'>{city}</span>
          </>
        )}
      </h1>

      <EventList city={city} page={pageNumber} />
    </main>
  )
}

export default CityEventsPage
