"use client"
import { useTransition, animated } from "@react-spring/web"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Wrapper from "./Wrapper"

const Header = ({ className }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setIsTouch(true)
    }
    if (isNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isNavOpen])

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setIsTouch(true)
    }
  }, [])

  const transitions = useTransition(isNavOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isNavOpen,
    config: { duration: 100 },
  })

  return (
    <header className={`${className} absolute top-0 left-0 w-full z-10`}>
      <Wrapper className="flex justify-between items-center px-4 py-6 md:py-10 md:px-12">
        <Link
          href="#"
          className="relative w-[155px] md:w-[165px] h-[55px] md:h-[60px]"
        >
          <Image
            src="/images/skywalk_logo.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
        {isTouch ? (
          transitions(
            (styles, item) =>
              item && (
                <animated.nav
                  style={styles}
                  className="fixed top-0 left-0 nav-blur h-screen w-full"
                >
                  <ul className="text-center absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-16">
                    <li>
                      <Link href="#about" className="text-2xl">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#pricing" className="text-2xl">
                        {" "}
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#gallery" className="text-2xl">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-2xl">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </animated.nav>
              )
          )
        ) : (
          <nav>
            <ul className="flex gap-16">
              <li>
                <Link href="#about" className="text-xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-xl">
                  {" "}
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
        )}
        <button
          className="w-12 h-12 relative md:hidden"
          onClick={() => setIsNavOpen((p) => !p)}
        >
          <span className="hamburger-icon"></span>
        </button>
      </Wrapper>
    </header>
  )
}

export default Header
