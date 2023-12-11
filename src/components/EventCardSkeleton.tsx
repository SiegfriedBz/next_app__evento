import Skeleton from "./Skeleton"

const EventCardSkeleton = () => {
  return (
    <Skeleton className='h-80 w-[20rem] max-w-[22rem]'>
      <div
        className='h-full w-full
          flex flex-col justify-center items-center
          border border-gray-500
          rounded-md
        '
      >
        <Skeleton className='h-[60%] w-full' />

        <section className='flex h-[40%] flex-col items-center justify-center'>
          <Skeleton className='w-[16rem] h-32' />
          <Skeleton className='h-16 w-[8rem]' />
          <Skeleton className='h-16 w-[4rem]' />
        </section>
      </div>
    </Skeleton>
  )
}

export default EventCardSkeleton
