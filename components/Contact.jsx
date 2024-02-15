import React from "react"
import Wrapper from "./Wrapper"

const Contact = () => {
  return (
    <div className="py-24 bg-[#304754]">
      <Wrapper>
        <h2 className="text-4xl text-white text-center font-semibold pb-14">
          Book A Tour
        </h2>
        <div className="flex flex-wrap justify-center align-center gap-4">
          <ul className="flex flex-wrap justify-center gap-4 align-center">
            <li>
              <a
                href="viber://chat?number=1234567894"
                className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
              >
                <img src="/icons/viber.png" className="w-10" alt="viber icon" />
                Chat on Viber
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/38163345344"
                className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
              >
                <img
                  src="/icons/whatsapp.png"
                  className="w-10"
                  alt="viber icon"
                />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
          <a
            href="tel:+4733378901"
            className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
          >
            <img
              src="/icons/phone-call.png"
              className="w-10"
              alt="viber icon"
            />
            Call Us
          </a>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact
