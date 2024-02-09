"use client"
import { useState } from "react"
import LightBox from "./LightBox"
import Wrapper from "./Wrapper"
import Image from "next/image"

const slides = [
  { src: "/images/gallery/1689626725061.jpg" },
  { src: "/images/gallery/IMG_20220612_180741.jpg" },
  { src: "/images/gallery/IMG_20220712_110122.jpg" },
  { src: "/images/gallery/IMG_20220811_085815.jpg" },
  { src: "/images/gallery/IMG_20220910_094015.jpg" },
  { src: "/images/gallery/IMG_20221005_182554.jpg" },
  { src: "/images/gallery/IMG_20221025_173807.jpg" },
]

const Gallery = () => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightBox = (idx) => {
    setActiveIndex(idx)
    setIsLightBoxOpen(true)
  }
  return (
    <div
      style={{
        backgroundImage: "url('/images/vertical_backgorund_test.jpeg')",
      }}
      className="relative bg-no-repeat	bg-cover bg-center blured-bg py-24"
    >
      <Wrapper className="z-10">
        <h2 className="text-4xl text-white text-center font-semibold pb-14">
          Gallery
        </h2>
        <div className="flex flex-wrap justify-center">
          {slides.map((slide, idx) => (
            <div
              className="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
              key={idx}
            >
              <div className="relative flex pb-[100%] w-full overflow-hidden rounded-lg">
                <Image
                  src={slide.src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  // id={`g-${idx}`}
                  onClick={() => openLightBox(idx)}
                />
              </div>
            </div>
          ))}
        </div>
        <LightBox
          slides={slides}
          isOpened={isLightBoxOpen}
          setIsOpened={setIsLightBoxOpen}
          activeIndex={activeIndex}
        />
      </Wrapper>
    </div>
  )
}

export default Gallery
