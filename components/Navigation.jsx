import Image from "next/image"
import Link from "next/link"
import React from "react"
import Wrapper from "./Wrapper"

const Navigation = () => {
  return (
    <Wrapper>
      <nav className="flex justify-between py-10 px-10">
        <Link href="#">{/* <Image /> */}Logo</Link>
        <ul className="flex gap-16">
          <li>
            <Link href="#about" className="text-xl">
              About
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-xl">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="text-xl">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Navigation
