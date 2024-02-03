"use client"
import React from "react"
import Image from "next/image"
import Wrapper from "./Wrapper"
import { useInView } from "react-intersection-observer"
import { animated, useSprings } from "@react-spring/web"

const Introduction = () => {
  const icons = [
    { id: 1, src: "/icons/four-wheel-drive-on-mountain.webp", alt: "4x4 icon" },
    { id: 2, src: "/icons/snowy-mountains.webp", alt: "mountains icon" },
    {
      id: 3,
      src: "/icons/horse-raising-one-foot-silhouette.webp",
      alt: "wild horse icon",
    },
    { id: 4, src: "/icons/picnic-table.webp", alt: "picnic table icon" },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const springs = useSprings(
    icons.length,
    icons.map((_, index) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(-10px)",
      delay: index * 150, // 150ms delay for each subsequent item
    }))
  )

  return (
    <div className="bg-white py-28">
      <Wrapper className="flex items-center flex-col">
        <p className="text-black text-[#304754] text-xl text-center font-medium max-w-[700px]">
          Ready for an unforgettable day out? Hop into our Land Rover Defender
          and let's hit the road! We've got scenic drives, wild horses, and even
          a walk in the clouds waiting for you.
        </p>
        <ul ref={ref} className="flex justify-center gap-20 pt-16">
          {springs.map((props, index) => (
            <animated.li
              key={icons[index].id}
              style={props}
              className="border-2 border-[#304754] rounded-[25px] p-5"
            >
              <div className="relative w-14 h-14">
                <Image
                  src={icons[index].src}
                  alt={icons[index].alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </animated.li>
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Introduction
