"use client"
import React, { useEffect, useRef, useState } from "react"
import Wrapper from "./Wrapper"
import TimelineCard from "./TimelineCard"

const About = ({ messages }) => {
  const [circlePosition, setCirclePosition] = useState()
  const timelineRef = useRef(null)

  const handleScroll = () => {
    if (timelineRef.current) {
      const timelineBounds = timelineRef.current.getBoundingClientRect()
      const timelineTopRelativeToDocument = window.scrollY + timelineBounds.top
      const windowHeight = window.innerHeight
      const timelineHeight = timelineRef.current.offsetHeight

      // Calculate the scroll position relative to the timeline's top position
      let newCirclePosition =
        window.scrollY - timelineTopRelativeToDocument + windowHeight / 2

      // Adjust the circle's position to stay within the bounds of the timeline
      if (newCirclePosition < 0) newCirclePosition = 0
      if (newCirclePosition > timelineHeight - 20)
        newCirclePosition = timelineHeight - 20 // 20 is the height of the circle

      setCirclePosition(newCirclePosition)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      id="timeline"
      style={{
        backgroundImage: "url('/images/vertical_backgorund_test.webp')",
      }}
      className="relative bg-no-repeat	bg-cover bg-center blured-bg py-24 overflow-hidden"
    >
      <Wrapper className="text-center">
        <h2 className="text-5xl font-bold text-center relative z-10 pb-16 pt-8">
          {messages.AdventureTimeline.title}
        </h2>
        <div className="relative z-10">
          <div ref={timelineRef} className="timeline-box">
            <span className="timeline-line"></span>
            <span
              className="timeline-circle"
              style={{ top: `${circlePosition}px` }}
            ></span>
          </div>
          <TimelineCard
            imgSrc="/images/_DSC0293.webp"
            imgAlt="land rover defender safari car"
            title={messages.AdventureTimeline.cards.land_rover.title}
            text={messages.AdventureTimeline.cards.land_rover.text}
          />
          <TimelineCard
            reversed
            imgSrc="/images/biokovo.webp"
            imgAlt="biokovo mountain landscape"
            title={messages.AdventureTimeline.cards.biokovo.title}
            text={messages.AdventureTimeline.cards.biokovo.text}
          />
          <TimelineCard
            imgSrc="/images/horses.webp"
            imgAlt="wild horses on mountain"
            title={messages.AdventureTimeline.cards.horses.title}
            text={messages.AdventureTimeline.cards.horses.text}
          />
          <TimelineCard
            reversed
            imgSrc="/images/skywalk.webp"
            imgAlt="view from sky walk biokovo makarska"
            title={messages.AdventureTimeline.cards.skywalk.title}
            text={messages.AdventureTimeline.cards.skywalk.text}
          />
          <TimelineCard
            imgSrc="/images/sv_jure.jpeg"
            imgAlt="view from st. george peak"
            title={messages.AdventureTimeline.cards.st_george.title}
            text={messages.AdventureTimeline.cards.st_george.text}
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default About
