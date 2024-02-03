import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import Banner from "@/components/HeroBanner"
import Navigation from "@/components/Navigation"
import React from "react"
import About from "@/components/About"
import Introduction from "@/components/Introduction"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Gallery from "@/components/Gallery"

export default function Home() {
  return (
    <React.Fragment>
      <header
        className={inter.className + " absolute top-0 left-0 w-full z-10"}
      >
        <Navigation />
      </header>
      <main className={inter.className}>
        <Banner />
        <Introduction />
        <About />
        <Pricing />
        <Gallery />
        <Testimonials />
      </main>
    </React.Fragment>
  )
}
