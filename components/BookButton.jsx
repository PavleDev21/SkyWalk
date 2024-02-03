import React from "react"

const BookButton = ({ className, dark, size = "lg" }) => {
  const sizeStyles = {
    lg: "text-2xl px-5 py-3 min-w-60",
    md: "text-xl px-4 py-3 min-w-48",
  }

  const sizeClass = sizeStyles[size] || sizeStyles.lg

  return (
    <button
      className={`${sizeClass} font-bold ${
        dark ? "text-white bg-black" : "text-black bg-white"
      } rounded-full ${className}`}
    >
      BOOK NOW
    </button>
  )
}

export default BookButton
