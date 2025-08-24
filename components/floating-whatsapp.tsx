"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your automotive services. Can you help me?")
    window.open(`https://wa.me/919822195886?text=${message}`, "_blank")
  }

  const callNow = () => {
    window.open("tel:+919822195886")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 max-w-sm animate-slide-up border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-gray-800">Need Help?</h3>
              <p className="text-sm text-gray-600">We're here to assist you!</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <Button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button onClick={callNow} variant="outline" className="w-full bg-transparent" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
