"use client"
import React, { useState, useRef, useEffect } from "react"
import { useTransition, animated } from "@react-spring/web"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Zoom } from "swiper/modules"
import Image from "next/image"

const LightBox = ({ slides, isOpened, setIsOpened, activeIndex }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeThumbIndex, setActiveThumbIndex] = useState(activeIndex)
  const swiperRef = useRef()

  const transitions = useTransition(isOpened, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useEffect(() => {
    // This function will be called when the component unmounts or isOpened changes
    return () => {
      if (thumbsSwiper) {
        // Explicitly destroy the swiper instance
        thumbsSwiper.destroy()
        setThumbsSwiper(null)
      }
    }
  }, [isOpened, thumbsSwiper])

  return transitions(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed top-0 pt-[65px] pb-[130px] left-0 bg-black-transparent h-screen w-full"
        >
          <div className="absolute top-5 right-5 flex justify-center items-center gap-5">
            <button
              onClick={() => swiperRef.current.zoom.out()}
              className="relative w-7 h-7"
            >
              <Image src="/icons/zoom-out.png" alt="zoom out button" fill />
            </button>
            <button
              onClick={() => swiperRef.current.zoom.in()}
              className="relative w-7 h-7"
            >
              <Image alt="zoom in button" src="/icons/zoom-in.png" fill />
            </button>
            <button
              className="relative ml-[15px] close-icon"
              onClick={() => setIsOpened(false)}
            ></button>
          </div>

          <Swiper
            onSwiper={(swiperInstance) => {
              swiperRef.current = swiperInstance // Assign the Swiper instance to your ref
            }}
            onSlideChange={(swiper) => {
              setActiveThumbIndex(swiper.realIndex)
            }}
            spaceBetween={50}
            slidesPerView={1}
            className="h-full"
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Zoom]}
            loop={true}
            zoom={{ maxRatio: 1.5 }}
            speed={600}
            initialSlide={activeIndex}
          >
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center z-[10]"
            >
              <span className="text-xl">❮</span>
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center z-[10]"
            >
              <span className="text-xl">❯</span>
            </button>
            {slides.map((slide) => {
              return (
                <SwiperSlide className="relative w-full h-full">
                  <div className="relative w-full h-full swiper-zoom-container">
                    <Image
                      src={slide.src}
                      fill
                      style={{ objectFit: "contain" }}
                      className="ss:max-w-[80%] max-w-[800px] mx-auto"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesOffsetAfter={10}
            slidesOffsetBefore={10}
            slidesPerView="auto"
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="w-full h-[80px] md:h-[70px] absolute-important bottom-6 left-0 justify-center thumbs-swiper"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide
                  className={`relative max-w-[80px] h-[80px] md:h-[70px] thumb-slide ${
                    index === activeThumbIndex ? "thumb-slide-active" : ""
                  }`}
                >
                  <Image
                    src={slide.src}
                    className="rounded-lg cursor-pointer"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </animated.div>
      )
  )
}

export default LightBox
