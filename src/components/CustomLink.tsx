"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  link: {
    href: string
    name: string
  }
}

const CustomLink = ({ link }: Props) => {
  const pathName = usePathname()
  const isActive = pathName === link.href

  return (
    <li
      className={twMerge(
        `text-white/50 h-full hover:text-white transition duration-300 ease-in-out relative flex items-center
            `,
        `${isActive ? `text-white` : ""}`
      )}
    >
      <Link href={link.href}>{link.name}</Link>

      {isActive ? (
        <motion.div
          layoutId='header-active-link'
          className='bg-accent absolute w-full bottom-0 h-1 rounded-lg'
        />
      ) : null}
    </li>
  )
}

export default CustomLink
