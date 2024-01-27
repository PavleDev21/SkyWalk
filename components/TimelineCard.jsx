import React from "react"
import Image from "next/image"

const TimelineCard = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className="py-10">
      <div className="w-[70%] min-h-[400px] relative rounded overflow-hidden">
        <Image alt={imgAlt} src={imgSrc} fill style={{ objectFit: "cover" }} />
      </div>
      <h2 className="text-4xl font-bold pt-8">{title}</h2>
      <p className="text-lg text-white pt-8 max-w-[90%]">{text}</p>
    </div>
  )
}

export default TimelineCard
