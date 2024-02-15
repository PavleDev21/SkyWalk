import Image from "next/image"
import React from "react"
import BookButton from "./BookButton"
import Wrapper from "./Wrapper"

const Banner = () => {
  return (
    <div className="h-full-140px w-full relative">
      <Wrapper className="h-full">
        <div className="flex w-full lg:w-1/2 flex-col justify-center h-full items-start md:pl-14">
          <h1 className="text-6xl lg:text-7xl max-w-full font-bold">
            SKYWALK 4X4 TOUR
          </h1>
          <p className="w-[90%] lg:w-2/3 text-xl font-normal pb-12 pt-4">
            Experience the magnificent beauty of the mountain in Biokovo Nature
            Park.
          </p>
          <BookButton />
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
