"use client"

import { CITIES } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"

const searchInputSchema = z
  .string()
  .trim()
  .min(5, { message: "Please enter at least 5 characters" })
  .refine(
    (val) =>
      CITIES.map((city) => city.toLowerCase()).includes(val.toLowerCase()),
    {
      message: "Please enter a listed city",
    }
  )

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const parsedSearchInput = searchInputSchema.safeParse(searchInput)
    if (!parsedSearchInput.success) {
      alert(
        parsedSearchInput?.error?.errors?.[0]?.message ||
          "Please enter a valid city"
      )
      setSearchInput("")
      return
    }

    const city = parsedSearchInput.data

    setSearchInput("")
    router.push(`/events/${city}`)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full sm:w-[24rem]'>
      <input
        type='text'
        name='name'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Search events'
        spellCheck={false}
        className='w-full my-4 px-8 py-4 bg-gray-700 focus:bg-gray-600 text-white/80 placeholder:text-white/80 ring-accent/80 focus:ring-2 outline-none border-0 border-gray-300 rounded-lg'
      />
    </form>
  )
}

export default SearchForm
