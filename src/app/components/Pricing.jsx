"use client"
import React from "react"
import Wrapper from "./Wrapper"
import BookButton from "./BookButton"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { animated, useSprings } from "@react-spring/web"

const Pricing = ({ messages, bookButtonText }) => {
  const pricing_items = Object.values(messages.Pricing.incl_list)

  const itk_items = Object.values(messages.Pricing.itk_list)

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [itkRef, itkInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const pricingSprings = useSprings(
    pricing_items.length,
    pricing_items.map((_, index) => ({
      opacity: pricingInView ? 1 : 0,
      transform: pricingInView ? "translateY(0)" : "translateY(-5px)",
      delay: index * 150,
    }))
  )

  const itkSprings = useSprings(
    itk_items.length,
    itk_items.map((_, index) => ({
      opacity: itkInView ? 1 : 0,
      transform: itkInView ? "translateY(0)" : "translateY(-5px)",
      delay: index * 150,
    }))
  )

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    })
  }
  return (
    <div id="pricing" className="bg-white py-16">
      <Wrapper className="max-w-[900px] flex-wrap md:flex-nowrap flex items-center justify-center">
        <h3 className="w-full text-center text-4xl font-semibold text-black pb-10 md:hidden">
          {messages.Pricing.title}
        </h3>
        <div className="pb-12 md:pb-0 md:w-1/2">
          <div className="rounded-lg h-[500px] w-[350px] overflow-hidden">
            <iframe
              sandbox="allow-same-origin allow-scripts allow-popups"
              className="w-full h-full"
              src="https://player.vimeo.com/video/916495403?autoplay=1&muted=1&loop=1&background=1&?api=1"
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-5xl md:text-4xl font-semibold text-black pb-10 hidden md:flex">
            {messages.Pricing.title}
          </h3>
          <ul ref={pricingRef}>
            {pricingSprings.map((props, index) => (
              <animated.li
                key={index}
                style={props}
                className="text-black text-xl md:text-lg py-[3px] relative pl-5"
              >
                {pricing_items[index]}
                <Image
                  src="/icons/checked.png"
                  width={15}
                  height={15}
                  className="absolute left-0 top-2.5"
                  alt="checked icon"
                />
              </animated.li>
            ))}
          </ul>
          <p className="text-2xl md:text-xl text-black font-medium pt-5 pb-2">
            {messages.Pricing.itk_title}
          </p>
          <ul ref={itkRef}>
            {itkSprings.map((props, index) => (
              <animated.li
                key={index}
                style={props}
                className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet"
              >
                {itk_items[index]}
              </animated.li>
            ))}
          </ul>
          <div className="ss:text-center pt-10 pb-6">
            <p className="text-4xl md:text-3xl text-black font-semibold py-5">
              {messages.Pricing.itk_price}: 50 €
            </p>
            <BookButton
              onClick={() => scrolltoHash("contact")}
              dark
              size="md"
              text={bookButtonText}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Pricing
