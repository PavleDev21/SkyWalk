import React from "react"
import Image from "next/image"

const TimelineCard = ({ imgSrc, imgAlt, title, text, reversed }) => {
  return (
    // <div className="py-10">
    //   <div className="w-[70%] min-h-[400px] relative rounded overflow-hidden">
    //     <Image alt={imgAlt} src={imgSrc} fill style={{ objectFit: "cover" }} />
    //   </div>
    //   <div className="">
    //     <h2 className="text-4xl font-bold pt-8">{title}</h2>
    //     <p className="text-lg text-white pt-8 max-w-[90%]">{text}</p>
    //   </div>
    // </div>
    <div className="py-10 px-10 flex justify-between items-center gap-20">
      {reversed ? (
        <>
          <div className="w-1/2 flex justify-end">
            <div className="min-h-[300px] max-w-[500px] grow relative rounded overflow-hidden">
              <Image
                alt={imgAlt}
                src={imgSrc}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold pt-8">{title}</h2>
            <p className="text-lg text-white pt-8 max-w-[90%]">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 flex items-end text-right flex-col">
            <h2 className="text-4xl font-bold pt-8">{title}</h2>
            <p className="text-lg text-white pt-8 max-w-[90%]">{text}</p>
          </div>
          <div className="w-1/2">
            <div className="min-h-[300px] max-w-[500px] relative rounded overflow-hidden">
              <Image
                alt={imgAlt}
                src={imgSrc}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TimelineCard
