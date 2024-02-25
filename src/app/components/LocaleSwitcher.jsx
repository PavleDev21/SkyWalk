import { useLocale, useTranslations } from "next-intl"
import { locales } from "../../config"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect"

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  const flags = {
    en: "🇺🇸",
    hr: "🇭🇷",
    de: "🇩🇪",
  }

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {flags[cur]} {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
