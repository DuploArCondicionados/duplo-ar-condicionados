"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5562993835605"
    const message = "Olá! Gostaria de solicitar um orçamento para ar-condicionado."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Falar no WhatsApp</span>
    </Button>
  )
}
