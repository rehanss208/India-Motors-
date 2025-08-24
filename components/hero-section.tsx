"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall%202.jpg-oyZKYCGqkghpFSJH7WlSjmNMWfZFuz.jpeg"
          alt="Professional automotive garage with blue GT-R on lift"
          className="w-full h-full object-cover scale-105 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-red-500 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)]">INDIA Motors And Garage</span>{" "}
            <span className="text-white animate-pulse drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)]">Baramati</span>{" "}
            <span className="text-base text-white/80 font-extrabold">By Azam Pathan</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay">
            Expert vehicle diagnostics, ECM/BCM repair, sensor key programming, and complete electronic services.
            Trusted by customers across Maharashtra for over a decade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="text-lg px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-subtle"
              onClick={() => window.open("tel:+919822195886")}
            >
              <Phone className="w-5 h-5 mr-2 animate-pulse" />
              Call Now: +91 98221 95886
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              onClick={scrollToServices}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
            <div className="flex items-center space-x-2 hover:text-secondary transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-secondary animate-pulse" />
              <span>Nira Road, Baramati</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <Clock className="w-5 h-5 text-secondary animate-pulse" />
              <span>Mon-Sat: 9AM-7PM</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <Phone className="w-5 h-5 text-secondary animate-pulse" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2">Explore Services</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-secondary" />
        </button>
      </div>
    </section>
  )
}
