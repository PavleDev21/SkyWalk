import React from "react"

const BookButton = ({ className, dark, size = "lg", onClick, text }) => {
  const sizeStyles = {
    lg: "text-2xl px-5 py-3 min-w-60",
    md: "text-2xl md:text-xl px-5 md:px-4 py-3 min-w-60 md:min-w-48",
  }

  const sizeClass = sizeStyles[size] || sizeStyles.lg

  return (
    <button
      className={`${sizeClass} font-bold ${
        dark
          ? "text-white bg-black hover:bg-black/80"
          : "text-black bg-white hover:bg-white/80"
      } rounded-full transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BookButton
