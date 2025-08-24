"use client"

import { Phone } from "lucide-react"

interface CallButtonProps {
  phoneNumber: string
  className?: string
  iconOnly?: boolean
}

export default function CallButton({ phoneNumber, className = "", iconOnly = false }: CallButtonProps) {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, "")}`
  }

  return (
    <button
      onClick={handleClick}
      className={`${
        iconOnly
          ? "bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          : "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 flex items-center gap-2"
      } ${className}`}
      aria-label="Call us"
    >
      <Phone className={iconOnly ? "w-6 h-6" : "w-5 h-5"} />
      {!iconOnly && <span>Call Us</span>}
    </button>
  )
}
