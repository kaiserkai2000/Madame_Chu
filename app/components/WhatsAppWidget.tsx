"use client"

import { useState, useEffect } from "react"
import { PhoneIcon as WhatsappLogo } from "lucide-react"

interface WhatsAppWidgetProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppWidget({
  phoneNumber,
  message = "Hello, I have a question about Madame Chu.",
}: WhatsAppWidgetProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappLogo size={24} />
    </button>
  )
}
