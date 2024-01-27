import React from "react"
import Wrapper from "./Wrapper"
import TimelineCard from "./TimelineCard"

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/vertical_backgorund_test.jpeg')",
      }}
      className="relative bg-no-repeat	bg-cover bg-center blured-bg"
    >
      <Wrapper>
        <div className="pl-[30%] relative z-10">
          <span className="timeline-line"></span>
          <TimelineCard
            imgSrc="/images/_DSC0293.jpg"
            imgAlt="land rover defender safari car"
            title="Tour in Land Rover Defender"
            text="This 4X4 half-day tour with air conditioned Land Rover defender
            will take you on a scenic drive passing through the picturesque
            Adriatic coast into the Biokovo Nature Park."
          />
          <TimelineCard
            imgSrc="/images/biokovo.webp"
            imgAlt="biokovo mountain landscape"
            title="Biokovo Mountain"
            text="Biokovo is a mountain with roots in the sea, and forehead in the clouds."
          />
          <TimelineCard
            imgSrc="/images/horses.jpg"
            imgAlt="wild horses on mountain"
            title="Wild horses"
            text="In addition to numerous wild animals, small herds of wild horses also live on mount Biokovo.With a little bit of visitor’s luck, one might also come across wild horses.They got used to visitors ,and do not run away from people."
          />
          <TimelineCard
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
