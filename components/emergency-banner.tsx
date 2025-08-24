"use client"

import { useState } from "react"
import { AlertTriangle, Phone, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-red-600 text-white py-3 px-4 animate-slide-down">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          <div className="flex items-center space-x-4">
            <span className="font-semibold">🚨 24/7 Emergency Service Available</span>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>Round the clock support</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open("tel:+919822195886")}
            className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </Button>
          <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
