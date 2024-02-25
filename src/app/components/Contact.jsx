import React from "react"
import Wrapper from "./Wrapper"
import { useTranslations } from "next-intl"

const Contact = () => {
  const t = useTranslations("Contact")
  return (
    <div id="contact" className="py-24 bg-[#304754]">
      <Wrapper>
        <h2 className="text-4xl text-white text-center font-semibold pb-14">
          {t("title")}
        </h2>
        <div className="flex flex-wrap justify-center align-center gap-4">
          <ul className="flex flex-wrap justify-center gap-4 align-center">
            <li>
              <a
                href="viber://chat?number=+385922870092"
                className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
              >
                <img src="/icons/viber.png" className="w-10" alt="viber icon" />
                {t("viber_label")}
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/385922870092"
                className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
              >
                <img
                  src="/icons/whatsapp.png"
                  className="w-10"
                  alt="viber icon"
                />
                {t("whatsapp_label")}
              </a>
            </li>
          </ul>
          <a
            href="tel:+385922870092"
            className="bg-white text-black flex gap-4 items-center px-4 py-2 rounded-lg"
          >
            <img
              src="/icons/phone-call.png"
              className="w-10"
              alt="viber icon"
            />
            {t("phone_label")}
          </a>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact
