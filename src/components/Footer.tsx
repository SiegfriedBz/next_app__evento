import { FOOTER_LINKS } from "@/lib/constants"
import Link from "next/link"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <small className='max-sm:absolute max-sm:bottom-0'>
        &copy; {currentYear} Evento | All rights reserved.
      </small>
      <ul className='flex mx-auto sm:ms-auto sm:me-0 space-x-4 max-sm:-mt-2'>
        {FOOTER_LINKS.map((link, index) => {
          return (
            <li key={index} className='text-white/50 hover:text-white'>
              <Link href={link.href}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
