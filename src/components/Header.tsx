import Link from "next/link"
import CustomLink from "./CustomLink"
import { HEADER_LINKS } from "@/lib/constants"

const Header = () => {
  return (
    <header>
      <Link href='/' className='text-2xl uppercase tracking-wide'>
        Evento
      </Link>

      <nav className='ms-auto h-full'>
        <ul className='flex space-x-4 text-sm font-semibold h-full'>
          {HEADER_LINKS.map((link, index) => {
            return <CustomLink key={index} link={link} />
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
