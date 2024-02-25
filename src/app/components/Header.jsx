"use client"
import { useTransition, animated } from "@react-spring/web"
import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import Wrapper from "./Wrapper"
import LocaleSwitcher from "./LocaleSwitcher"
import { TouchContext } from "../[locale]/page"

const Header = ({ className, messages }) => {
  const { isTouch } = useContext(TouchContext)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    })
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isNavOpen])

  const transitions = useTransition(isNavOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isNavOpen,
    config: { duration: 100 },
  })

  return (
    <header
      className={`${className} absolute top-0 left-0 w-full z-10 max-w-full`}
    >
      <Wrapper className="flex justify-between items-center px-4 py-6 md:py-10 md:px-12">
        <Link
          href="#"
          className="relative w-[155px] md:w-[165px] h-[55px] md:h-[60px]"
        >
          <Image
            src="/images/skywalk_logo.png"
            fill
            alt="skywalk logo"
            style={{ objectFit: "contain" }}
          />
        </Link>
        {isTouch ? (
          <>
            <div className="flex items-center gap-3">
              <LocaleSwitcher />
              <button
                className="w-12 h-12 z-10 relative lg:hidden"
                onClick={() => setIsNavOpen((p) => !p)}
              >
                <span className="hamburger-icon"></span>
              </button>
            </div>
            {transitions(
              (styles, item) =>
                item && (
                  <animated.nav
                    style={styles}
                    className="fixed top-0 left-0 nav-blur h-screen w-full z-[1]"
                  >
                    <ul className="text-center absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-16">
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            scrolltoHash("about")
                            setIsNavOpen((p) => !p)
                          }}
                          href="#about"
                          className="text-2xl"
                        >
                          {messages.Navigation.about}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            scrolltoHash("timeline")
                            setIsNavOpen((p) => !p)
                          }}
                          href="#timeline"
                          className="text-2xl"
                        >
                          {messages.Navigation.tour_plan}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            scrolltoHash("pricing")
                            setIsNavOpen((p) => !p)
                          }}
                          href="#pricing"
                          className="text-2xl"
                        >
                          {" "}
                          {messages.Navigation.pricing}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            scrolltoHash("gallery")
                            setIsNavOpen((p) => !p)
                          }}
                          href="#gallery"
                          className="text-2xl"
                        >
                          {messages.Navigation.gallery}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            scrolltoHash("contact")
                            setIsNavOpen((p) => !p)
                          }}
                          href="#contact"
                          className="text-2xl"
                        >
                          {messages.Navigation.contact}
                        </a>
                      </li>
                    </ul>
                  </animated.nav>
                )
            )}
          </>
        ) : (
          <nav className="flex gap-16 items-center">
            <ul className="flex gap-16">
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    scrolltoHash("about")
                  }}
                  href="#about"
                  className="text-xl"
                >
                  {messages.Navigation.about}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    scrolltoHash("timeline")
                  }}
                  href="#timeline"
                  className="text-xl"
                >
                  {messages.Navigation.tour_plan}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    scrolltoHash("pricing")
                  }}
                  href="#pricing"
                  className="text-xl"
                >
                  {" "}
                  {messages.Navigation.pricing}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    scrolltoHash("gallery")
                  }}
                  href="#gallery"
                  className="text-xl"
                >
                  {messages.Navigation.gallery}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    scrolltoHash("contact")
                  }}
                  href="#contact"
                  className="text-xl"
                >
                  {messages.Navigation.contact}
                </a>
              </li>
            </ul>
            <LocaleSwitcher />
          </nav>
        )}
      </Wrapper>
    </header>
  )
}

export default Header
