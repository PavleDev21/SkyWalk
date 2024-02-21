import React from "react"

const Wrapper = ({ children, className }) => {
  return (
    <div className={`max-w-[1700px] mx-auto px-5 relative ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper
