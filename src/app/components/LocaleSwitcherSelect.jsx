"use client"

import { useParams } from "next/navigation"
import { ChangeEvent, ReactNode, useTransition } from "react"
import { useRouter, usePathname } from "../../navigation"

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <div className="language-selector__container">
      <label>
        <p className="sr-only">{label}</p>
        <select defaultValue={defaultValue} onChange={onSelectChange}>
          {children}
        </select>
      </label>
    </div>
  )
}
