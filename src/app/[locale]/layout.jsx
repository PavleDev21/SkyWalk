import { Inter } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { getTranslations } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Index" })

  return {
    metadataBase: new URL("https://4x4skywalktour.com"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        de: "/de",
        hr: "/hr",
      },
    },
    openGraph: {
      images: "/images/hero-banner-image.jpeg",
    },
    icons: {
      icon: "/icons/favicon.ico",
      apple: "/icons/apple-touch-icon.png",
    },
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  }
}

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={inter.className} style={{ overflow: "hidden" }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
