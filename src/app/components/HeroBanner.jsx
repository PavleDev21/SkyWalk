"use client"
import Image from "next/image"
import React from "react"
import BookButton from "./BookButton"
import Wrapper from "./Wrapper"

const Banner = ({ messages, bookButtonText }) => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    })
  }

  return (
    <div className="h-full-140px w-full relative">
      <Wrapper className="h-full">
        <div className="flex w-full lg:w-1/2 flex-col justify-center h-full items-start md:pl-14">
          <h1 className="text-6xl lg:text-7xl max-w-full font-bold">
            {messages.HeroBanner.title}
          </h1>
          <p className="w-[90%] lg:w-2/3 text-xl font-normal pb-12 pt-4">
            {messages.HeroBanner.text}
          </p>
          <BookButton
            onClick={() => scrolltoHash("contact")}
            text={bookButtonText}
          />
        </div>
      </Wrapper>
      <div className="absolute dark-overlay top-0 left-0 z-[-1] h-full w-full">
        <Image
          alt="View from skywalk"
          src="/images/hero-banner-image.jpeg"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="bg-bottom lg:bg-top bg-no-repeat lg:bg-repeat bg-contain lg:bg-auto absolute bottom-0 lg:bottom-[-40px] left-0 w-full h-[200px]"
        style={{ backgroundImage: 'url("/images/bottom_new.png")' }}
      ></div>
    </div>
  )
}

export default Banner
