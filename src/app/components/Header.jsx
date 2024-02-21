"use client"
import { useTransition, animated } from "@react-spring/web"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Wrapper from "./Wrapper"

const Header = ({ className, messages }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    })
  }

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
          scroll={false}
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
                      <Link
                        scroll={false}
                        onClick={() => {
                          scrolltoHash("about")
                          setIsNavOpen((p) => !p)
                        }}
                        href="#about"
                        className="text-2xl"
                      >
                        {messages.Navigation.about}
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        onClick={() => {
                          scrolltoHash("timeline")
                          setIsNavOpen((p) => !p)
                        }}
                        href="#timeline"
                        className="text-2xl"
                      >
                        {messages.Navigation.tour_plan}
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        onClick={() => {
                          scrolltoHash("pricing")
                          setIsNavOpen((p) => !p)
                        }}
                        href="#pricing"
                        className="text-2xl"
                      >
                        {" "}
                        {messages.Navigation.pricing}
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        onClick={() => {
                          scrolltoHash("gallery")
                          setIsNavOpen((p) => !p)
                        }}
                        href="#gallery"
                        className="text-2xl"
                      >
                        {messages.Navigation.gallery}
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        onClick={() => {
                          scrolltoHash("contact")
                          setIsNavOpen((p) => !p)
                        }}
                        href="#contact"
                        className="text-2xl"
                      >
                        {messages.Navigation.contact}
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
                <Link
                  scroll={false}
                  onClick={() => scrolltoHash("about")}
                  href="#about"
                  className="text-xl"
                >
                  {messages.Navigation.about}
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  onClick={() => scrolltoHash("timeline")}
                  href="#timeline"
                  className="text-xl"
                >
                  {messages.Navigation.tour_plan}
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  onClick={() => scrolltoHash("pricing")}
                  href="#pricing"
                  className="text-xl"
                >
                  {" "}
                  {messages.Navigation.pricing}
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  onClick={() => scrolltoHash("gallery")}
                  href="#gallery"
                  className="text-xl"
                >
                  {messages.Navigation.gallery}
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  onClick={() => scrolltoHash("contact")}
                  href="#contact"
                  className="text-xl"
                >
                  {messages.Navigation.contact}
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
