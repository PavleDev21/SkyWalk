"use client"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import Banner from "../components/HeroBanner"
import React, { useState, useEffect, createContext } from "react"
import About from "../components/About"
import Introduction from "../components/Introduction"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { pick } from "lodash"
import { useMessages } from "next-intl"
import Loader from "../components/Loader"

export const TouchContext = createContext()

export default function Home() {
  const [width, setWidth] = useState()
  const messages = useMessages()
  const introductionText = messages.Introduction?.text
  const bookButtonText = messages.BookButton

  const [isLoading, setIsLoading] = useState(true)
  const isMobile = width < 768
  const isTouch = width < 1024

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    setIsLoading(false)
    document.body.overflow = ""
  }, [])

  return (
    <TouchContext.Provider value={{ isMobile, isTouch }}>
      {isLoading && <Loader />}
      <Header
        className={inter.className}
        messages={pick(messages, "Navigation")}
      />
      <main className={inter.className}>
        <Banner
          messages={pick(messages, "HeroBanner")}
          bookButtonText={bookButtonText}
        />
        <Introduction text={introductionText} />
        <About messages={pick(messages, "AdventureTimeline")} />
        <Pricing
          messages={pick(messages, "Pricing")}
          bookButtonText={bookButtonText}
        />
        <Gallery messages={pick(messages, "Gallery")} />
        <Testimonials messages={pick(messages, "Reviews")} />
        <Contact />
      </main>
      <Footer className={inter.className} />
    </TouchContext.Provider>
  )
}
