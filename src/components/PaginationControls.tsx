import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type TProps = {
  previousPath: string | null
  nextPath: string | null
}

const linkClasses =
  "hover:text-accent items-center flex gap-x-2 rounded-md border border-white/50 hover:border-accent px-4 py-2 custom-scale"

const PaginationControls = ({ previousPath, nextPath }: TProps) => {
  return (
    <section className='my-2 flex w-full items-center'>
      {previousPath ? (
        <Link href={previousPath} className={linkClasses}>
          <ArrowLeftIcon />
          Back
        </Link>
      ) : null}

      {nextPath ? (
        <Link href={nextPath} className={`${linkClasses} ms-auto`}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : null}
    </section>
  )
}

export default PaginationControls
