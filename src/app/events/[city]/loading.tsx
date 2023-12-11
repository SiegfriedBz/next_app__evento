import EventCardSkeleton from "@/components/EventCardSkeleton"

const Loading = () => {
  return (
    <div className='flex flex-wrap justify-center gap-12'>
      {Array.from({ length: 6 }).map((_, index) => {
        return <EventCardSkeleton key={index} />
      })}
    </div>
  )
}

export default Loading
