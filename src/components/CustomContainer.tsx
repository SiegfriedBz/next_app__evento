import React from "react"

type Props = {
  children: React.ReactNode
}

const CustomContainer = ({ children }: Props) => {
  return <div className='custom-container'>{children}</div>
}

export default CustomContainer
