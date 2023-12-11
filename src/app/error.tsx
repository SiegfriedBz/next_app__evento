"use client" // Error components must be Client Components

import Link from "next/link"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className={twMerge("main", "flex flex-col items-center pt-32")}>
      <h1 className={twMerge("h1", "mb-16")}>Something went wrong!</h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='text-xl'
      >
        Try again
      </button>

      <Link href='/' className='my-4 text-xl'>
        Back to Home page
      </Link>
    </main>
  )
}
