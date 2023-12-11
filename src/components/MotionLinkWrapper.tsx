"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

type TProps = {
  href: string
  className?: string
  children: React.ReactNode
}

const MotionLink = motion(Link)

const MotionLinkWrapper = ({ href, className, children }: TProps) => {
  const linkRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ["0 1", "1.5 1"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <MotionLink
      ref={linkRef}
      href={href}
      className={className}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 1, opacity: 0.1 }}
    >
      {children}
    </MotionLink>
  )
}

export default MotionLinkWrapper
