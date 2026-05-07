"use client"

import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "554788641744" 
    const message = encodeURIComponent(
      "Olá! Vim através do site e gostaria de mais informações."
    )

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    )
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  )
}

export default WhatsAppButton