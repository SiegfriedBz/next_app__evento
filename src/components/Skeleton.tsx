import { twMerge } from "tailwind-merge"

type TProps = {
  className?: string
  children?: React.ReactNode
}

const Skeleton = ({ className, children }: TProps) => {
  return (
    <div
      className={twMerge("my-2 rounded-md bg-white/5 animate-pulse", className)}
    >
      {children}
    </div>
  )
}

export default Skeleton
