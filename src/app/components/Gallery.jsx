"use client"
import { useState, useEffect } from "react"
import LightBox from "./LightBox"
import Wrapper from "./Wrapper"
import Image from "next/image"
import Link from "next/link"

const Gallery = ({ messages }) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      src: "/images/gallery/IMG_20220910_094015.webp",
      alt: messages.Gallery.images.img01,
    },
    {
      src: "/images/gallery/IMG_20220910_094141.webp",
      alt: messages.Gallery.images.img02,
    },
    {
      src: "/images/gallery/1689626884002.jpg",
      alt: messages.Gallery.images.img03,
    },
    {
      src: "/images/gallery/IMG_20220712_110122.webp",
      alt: messages.Gallery.images.img04,
    },
    {
      src: "/images/gallery/IMG_20220811_085815.webp",
      alt: messages.Gallery.images.img05,
    },
    {
      src: "/images/gallery/1689626883996.jpg",
      alt: messages.Gallery.images.img06,
    },
    {
      src: "/images/gallery/IMG_20220612_180741.webp",
      alt: messages.Gallery.images.img07,
    },
    {
      src: "/images/gallery/1689627253644.webp",
      alt: messages.Gallery.images.img08,
    },
    {
      src: "/images/gallery/1689627216867.webp",
      alt: messages.Gallery.images.img09,
    },
    {
      src: "/images/gallery/1689626786436.webp",
      alt: messages.Gallery.images.img10,
    },
    {
      src: "/images/gallery/1689626807655.webp",
      alt: messages.Gallery.images.img11,
    },
    {
      src: "/images/gallery/IMG_20221025_173807.webp",
      alt: messages.Gallery.images.img12,
    },
  ]

  useEffect(() => {
    if (isLightBoxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLightBoxOpen])

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
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  onClick={() => openLightBox(idx)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-12">
          <Link
            target="_blank"
            href="https://www.facebook.com/skywalkbiokovosinjal"
            className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
          >
            <img src="/icons/facebook.png" className="w-10" alt="viber icon" />
            {messages.Gallery.facebook}
          </Link>
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
