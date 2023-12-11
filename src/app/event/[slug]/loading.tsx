import Skeleton from "@/components/Skeleton"

const Loading = () => {
  return (
    <div className='w-5/6 mx-auto min-h-[24rem] relative flex justify-center items-center'>
      <section className='flex flex-col justify-center md:flex-row items-center gap-x-8 md:gap-x-16 min-h-[200px] w-full'>
        <Skeleton className='w-[300px] h-[200px] rounded-md border border-gray-500' />
        <div className='flex flex-col justify-between h-full w-full sm:w-1/2 mt-4'>
          <Skeleton className='h-4 w-full sm:w-1/2' />
          <Skeleton className='h-16 w-full' />
          <Skeleton className='h-4 w-full sm:w-1/2' />
          <Skeleton className='h-8 w-full sm:w-3/4' />
        </div>
      </section>
    </div>
  )
}

export default Loading
