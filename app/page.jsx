import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import Banner from "@/components/HeroBanner"
import React from "react"
import About from "@/components/About"
import Introduction from "@/components/Introduction"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  return (
    <React.Fragment>
      <Header className={inter.className} />
      <main className={inter.className}>
        <Banner />
        <Introduction />
        <About />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer className={inter.className} />
    </React.Fragment>
  )
}
