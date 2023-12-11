import Link from "next/link"
import { twMerge } from "tailwind-merge"

const notFound = () => {
  return (
    <main className={twMerge("main", "flex flex-col items-center pt-32")}>
      <h1 className={twMerge("h1", "mb-16")}>Ooops.. page not found</h1>
      <Link href='/' className='text-xl'>
        Back to Home page
      </Link>
    </main>
  )
}

export default notFound
