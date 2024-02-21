"use client"
import { useState } from "react"
import LightBox from "./LightBox"
import Wrapper from "./Wrapper"
import Image from "next/image"

const slides = [
  { src: "/images/gallery/IMG_20220910_094015.webp" },
  { src: "/images/gallery/IMG_20220910_094141.webp" },
  { src: "/images/gallery/1689626884002.jpg" },
  { src: "/images/gallery/IMG_20220712_110122.webp" },
  { src: "/images/gallery/IMG_20220811_085815.webp" },
  { src: "/images/gallery/1689626883996.jpg" },
  { src: "/images/gallery/IMG_20220612_180741.webp" },
  { src: "/images/gallery/1689627253644.webp" },
  { src: "/images/gallery/1689627216867.webp" },
  { src: "/images/gallery/1689626786436.webp" },
  { src: "/images/gallery/1689626807655.webp" },
  { src: "/images/gallery/IMG_20221025_173807.webp" },
]

const Gallery = ({ messages }) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightBox = (idx) => {
    setActiveIndex(idx)
    setIsLightBoxOpen(true)
  }
  return (
    <div
      id="gallery"
      style={{
        backgroundImage: "url('/images/vertical_backgorund_test.webp')",
      }}
      className="relative bg-no-repeat	bg-cover bg-center blured-bg py-24"
    >
      <Wrapper className="z-10">
        <h2 className="text-4xl text-white text-center font-semibold pb-14">
          {messages.Gallery.title}
        </h2>
        <div className="flex flex-wrap justify-center">
          {slides.map((slide, idx) => (
            <div
              className="relative w-1/3 md:w-1/4 lg:w-1/6 p-1 md:p-2"
              key={idx}
            >
              <div className="relative flex pb-[100%] w-full overflow-hidden rounded-lg">
                <Image
                  src={slide.src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
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
