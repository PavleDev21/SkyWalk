"use client"
import Image from "next/image"
import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import { useContext, useEffect, useState } from "react"
import { TouchContext } from "../[locale]/page"

const TimelineCard = ({ imgSrc, imgAlt, title, text, reversed }) => {
  const { isMobile } = useContext(TouchContext)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Customize this value based on when you want the animation to start
  })

  const translateSide = isMobile
    ? "translateX(100px)"
    : reversed
    ? "translateX(100px)"
    : "translateX(-100px)"

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : translateSide,
  })

  return (
    <animated.div
      ref={ref}
      style={props}
      className="pl-6 pr-0 md:p-10 mb-[30px] md:mb-0 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20"
    >
      {isMobile ? (
        <>
          <div className="w-full md:w-1/2 flex md:items-end text-left md:text-right flex-col">
            <h2 className="text-4xl font-bold pt-8">{title}</h2>
            <p className="text-lg text-white pt-8 md:max-w-[90%]">{text}</p>
          </div>
          <div className="w-full md:w-1/2">
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
      ) : reversed ? (
        <>
          <div className="w-full md:w-1/2 flex md:justify-end">
            <div className="min-h-[300px] max-w-[500px] grow relative rounded overflow-hidden">
              <Image
                alt={imgAlt}
                src={imgSrc}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-4xl font-bold pt-8">{title}</h3>
            <p className="text-lg text-white pt-8 md:max-w-[90%]">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 flex md:items-end text-left md:text-right flex-col">
            <h2 className="text-4xl font-bold pt-8">{title}</h2>
            <p className="text-lg text-white pt-8 md:max-w-[90%]">{text}</p>
          </div>
          <div className="w-full md:w-1/2">
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
    </animated.div>
  )
}

export default TimelineCard
