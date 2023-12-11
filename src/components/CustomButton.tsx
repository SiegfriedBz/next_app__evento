"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  handleClick?: () => void
  children: React.ReactNode
}

const CustomButton = ({ className = "", handleClick, children }: Props) => {
  return (
    <button
      className={twMerge(
        "w-full border-2 border-white/10 px-4 py-2 rounded-md bg-white/20 text-gray-950 uppercase tracking-wide font-semibold custom-scale",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
