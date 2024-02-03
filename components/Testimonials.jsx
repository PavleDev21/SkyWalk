"use client"
import React from "react"
import Wrapper from "./Wrapper"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <Wrapper>
        <h2 className="text-center text-black text-4xl font-bold pb-24">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="max-w-[600px] mx-auto"
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#304754",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
            "--swiper-pagination-bottom": "0",
          }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className="flex-important gap-9">
            <div className="w-[65px] h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div>
              <p className="text-lg text-black pb-4">
                Our tour of Biokovo Mountain was nothing short of magical. The
                Skywalk experience was breathtaking, and spotting wild horses
                was a dream come true. A must-do for any nature lover!
              </p>
              <p className="text-lg text-black font-medium pb-10">
                Elena & Marco, Italy
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-important gap-9">
            <div className="w-[65px] h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div>
              <p className="text-lg text-black pb-4">
                As a hiking enthusiast, I was thrilled with the trails on
                Biokovo Mountain. The panoramic views were stunning, and the
                guide was incredibly knowledgeable. Highly recommend!
              </p>
              <p className="text-lg text-black font-medium pb-10">
                Jovana, Serbia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-important gap-9">
            <div className="w-[65px] h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div>
              <p className="text-lg text-black pb-4">
                I've been on many tours, but this one stands out. The beauty of
                Makarska Riviera from the Skywalk is indescribable. It's a
                unique way to experience Croatia's natural wonders.
              </p>
              <p className="text-lg text-black font-medium pb-10">
                Rachel G., USA
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </div>
  )
}

export default Testimonials
