import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import Banner from "../components/HeroBanner"
import React from "react"
import About from "../components/About"
import Introduction from "../components/Introduction"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { pick } from "lodash"
import { useMessages, useTranslations } from "next-intl"
import { NextIntlClientProvider } from "next-intl"

export default function Home() {
  const messages = useMessages()
  const introductionText = messages.Introduction?.text
  const bookButtonText = messages.BookButton

  return (
    <NextIntlClientProvider>
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
    </NextIntlClientProvider>
  )
}
