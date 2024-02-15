import React from "react"
import Wrapper from "./Wrapper"
import BookButton from "./BookButton"
import Image from "next/image"

const Pricing = () => {
  return (
    <div className="bg-white py-16">
      <Wrapper className="max-w-[900px] flex-wrap md:flex-nowrap flex items-center justify-center">
        <h3 className="w-full text-center text-4xl font-semibold text-black pb-10 md:hidden">
          Tour Includes
        </h3>
        <div className="pb-12 md:pb-0 md:w-1/2">
          <video
            className="rounded-lg h-[500px] w-[350px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/1080p_SkyWalk_Short.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-5xl md:text-4xl font-semibold text-black pb-10 hidden md:flex">
            Tour Includes
          </h3>
          <ul>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Ticket to the Biokovo Nature Park
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Ride to Skywalk
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Sunset on Skywalk (only in the afternoon tours)
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Photo stop with breathtaking views
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Homemade brandy, cakes and honey
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
            <li className="text-black text-xl md:text-lg py-[3px] relative pl-5">
              Ride to St. George's Peak
              <Image
                src="/icons/checked.png"
                width={15}
                height={15}
                className="absolute left-0 top-2.5"
                alt="checked icon"
              />
            </li>
          </ul>
          <p className="text-2xl md:text-xl text-black font-medium pt-5 pb-2">
            Important to know
          </p>
          <ul>
            <li className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet">
              Not suitable for guests with back problems
            </li>
            <li className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet">
              Children up to 7 years pay half price, and from 7 years old they
              pay full price
            </li>
            <li className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet">
              Minimum age is 3 years
            </li>
            <li className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet">
              On a foggy or rainy day trip may not be possible
            </li>
            <li className="text-black text-lg md:text-base py-[2px] relative pl-3 list-bullet">
              Bring warm clothes
            </li>
          </ul>
          <div className="ss:text-center pt-10 pb-6">
            <p className="text-4xl md:text-3xl text-black font-semibold py-5">
              Price: 45 €
            </p>
            <BookButton dark size="md" />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Pricing
