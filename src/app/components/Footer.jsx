import Image from "next/image"
import Link from "next/link"
import React from "react"
import Wrapper from "./Wrapper"
import { useTranslations } from "next-intl"

const Footer = ({ className }) => {
  const t = useTranslations("Footer")
  return (
    <footer className={`${className} bg-white py-5 md:py-2`}>
      <Wrapper className="flex justify-between items-center flex-col md:flex-row gap-[5px] md:gap-0">
        <Link href="#" className="relative w-[165px] h-[40px]">
          <Image
            src="/images/skywalk_logo.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
        <p className="text-black text-base md:text-sm">
          {t("made_by")}:{" "}
          <a href="mailto:pavle.barackov@gmail.com" className="underline">
            Pavle Baračkov
          </a>
        </p>
        <p className="md:w-[165px] md:text-right text-black text-base md:text-sm ">
          {t("copyright")} &copy; 2024
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
