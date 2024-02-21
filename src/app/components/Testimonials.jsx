"use client"
import React from "react"
import Wrapper from "./Wrapper"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Testimonials = ({ messages }) => {
  return (
    <div className="bg-white py-16">
      <Wrapper>
        <h2 className="text-center text-black text-4xl font-bold pb-16 md:pb-24">
          {messages.Reviews.title}
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
          <SwiperSlide className="flex-important gap-[10px] md:gap-9">
            <div className="w-[18px] md:w-[65px] h-[30px] md:h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div className="w-[90%] md:w-auto">
              <p className="text-xl md:text-lg text-black pb-4">
                {messages.Reviews.items.first.text}
              </p>
              <p className="text-xl md:text-lg text-black font-medium pb-10">
                {messages.Reviews.items.first.author}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-important gap-[10px] md:gap-9">
            <div className="w-[18px] md:w-[65px] h-[30px] md:h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div className="w-[90%] md:w-auto">
              <p className="text-xl md:text-lg text-black pb-4">
                {messages.Reviews.items.second.text}
              </p>
              <p className="text-xl md:text-lg text-black font-medium pb-10">
                {messages.Reviews.items.second.author}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-important gap-[10px] md:gap-9">
            <div className="w-[18px] md:w-[65px] h-[30px] md:h-[40px] relative">
              <Image
                src="/icons/quotation.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div className="w-[90%] md:w-auto">
              <p className="text-xl md:text-lg text-black pb-4">
                {messages.Reviews.items.third.text}
              </p>
              <p className="text-xl md:text-lg text-black font-medium pb-10">
                {messages.Reviews.items.third.author}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </div>
  )
}

export default Testimonials
