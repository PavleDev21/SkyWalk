import React from "react"
import Image from "next/image"
import Wrapper from "./Wrapper"

const Introduction = () => {
  return (
    <div className="bg-white py-28">
      <Wrapper className="flex items-center flex-col">
        <p className="text-black text-[#304754] text-xl text-center font-medium max-w-[700px]">
          Ready for an unforgettable day out? Hop into our Land Rover Defender
          and let's hit the road! We've got scenic drives, wild horses, and even
          a walk in the clouds waiting for you.
        </p>
        <ul className="flex justify-center gap-20 pt-16">
          <li className="border-2 border-[#304754] rounded-[25px] p-5">
            <div className="relative w-14 h-14">
              <Image
                src="/icons/four-wheel-drive-on-mountain.webp"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </li>
          <li className="border-2 border-[#304754] rounded-[25px] p-5">
            <div className="relative w-14 h-14">
              <Image
                src="/icons/snowy-mountains.webp"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </li>
          <li className="border-2 border-[#304754] rounded-[25px] p-5">
            <div className="relative w-14 h-14">
              <Image
                src="/icons/horse-raising-one-foot-silhouette.webp"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </li>
          <li className="border-2 border-[#304754] rounded-[25px] p-5">
            <div className="relative w-14 h-14">
              <Image
                src="/icons/picnic-table.webp"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </li>
        </ul>
      </Wrapper>
    </div>
  )
}

export default Introduction
