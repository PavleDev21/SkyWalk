"use client"
import React, { useEffect, useRef, useState } from "react"
import Wrapper from "./Wrapper"
import TimelineCard from "./TimelineCard"
import BookButton from "./BookButton"

const About = () => {
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
      style={{
        backgroundImage: "url('/images/vertical_backgorund_test.jpeg')",
      }}
      className="relative bg-no-repeat	bg-cover bg-center blured-bg py-24"
    >
      <Wrapper className="text-center">
        <h2 className="text-5xl font-bold text-center relative z-10 pb-16 pt-8">
          Your Adventure Timeline
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
            imgSrc="/images/_DSC0293.jpg"
            imgAlt="land rover defender safari car"
            title="Tour in Land Rover Defender"
            text="This 4X4 half-day tour with air conditioned Land Rover defender
            will take you on a scenic drive passing through the picturesque
            Adriatic coast into the Biokovo Nature Park."
          />
          <TimelineCard
            reversed
            imgSrc="/images/biokovo.webp"
            imgAlt="biokovo mountain landscape"
            title="Biokovo Mountain"
            text="Biokovo Mountain, a natural wonder where the sea meets the sky, offers a striking landscape of diverse flora and panoramic views. Its rugged peaks and rich biodiversity provide a mesmerizing backdrop for nature enthusiasts and hikers alike."
          />
          <TimelineCard
            imgSrc="/images/horses.jpg"
            imgAlt="wild horses on mountain"
            title="Wild horses"
            text="In addition to numerous wild animals, small herds of wild horses also live on mount Biokovo.With a little bit of visitor’s luck, one might also come across wild horses.They got used to visitors ,and do not run away from people."
          />
          <TimelineCard
            reversed
            imgSrc="/images/skywalk.jpg"
            imgAlt="view from sky walk biokovo makarska"
            title="Skywalk (1228m)"
            text="Driving along the highest asphalted road on Croatia,we reach a new attraction - Skywalk (1228 m. above sea level). When you step on, it will take your breath away. The view of the Makarska Riviera, the coastal cities, the islands and the horizon will leave you speechless."
          />
          <TimelineCard
            imgSrc="/images/sv_jure.jpeg"
            imgAlt="view from st. george peak"
            title="St. George (1762m)"
            text="Driving along the highest asphalted road on Croatia,we reach a new attraction - Skywalk (1228 m. above sea level). When you step on, it will take your breath away. The view of the Makarska Riviera, the coastal cities, the islands and the horizon will leave you speechless."
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default About
