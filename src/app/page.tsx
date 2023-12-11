import SearchForm from "@/components/SearchForm"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export default function Home() {
  return (
    <main className={twMerge("main", "flex flex-col items-center pt-48")}>
      <h1 className={twMerge("h1", "mb-4")}>Find events around you</h1>
      <p className='text-2xl flex max-sm:flex-col max-sm:gap-y-1 md:text-3xl mb-2 text-center'>
        <span className=''>Browse more than </span>
        <span className='whitespace-nowrap italic font-bold text-accent mx-2 underline underline-offset-4'>
          10&apos;000 events
        </span>
        <span className=''> around you</span>
      </p>

      <SearchForm />

      <section className='flex space-x-8'>
        <p className='text-white/50'>Popular: </p>
        <div className='flex space-x-4 font-semibold'>
          <Link
            className='text-white/50 hover:text-white'
            href='/events/Austin'
          >
            Austin
          </Link>
          <Link
            className='text-white/50 hover:text-white'
            href='/events/Seattle'
          >
            Seattle
          </Link>
        </div>
      </section>
    </main>
  )
}
