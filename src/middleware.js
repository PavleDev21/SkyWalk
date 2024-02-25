import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["hr", "en", "de"],

  // Used when no locale matches
  defaultLocale: "hr",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hr|en|de)/:path*"],
}
