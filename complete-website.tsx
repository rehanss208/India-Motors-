// COMPLETE INDIA MOTORS & GARAGE WEBSITE
// Copy this entire file to create your automotive service website

// ==================== LAYOUT.TSX ====================
import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "India Motors & Garage - Professional Automotive Services",
  description:
    "Expert vehicle diagnostics, ECM/BCM repair, sensor key programming, and electronic services in Pune, Maharashtra. Serving all major car brands.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
import ServicesSection from "@/components/services-section"
import BrandsSection from "@/components/brands-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

// ==================== HEADER COMPONENT ====================
;("use client")

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, PhoneIcon } from "lucide-react"

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">IM</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-white">India Motors</h1>
              <p className="text-xs text-white/70">& Garage</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#services" className="text-white hover:text-secondary transition-colors">
              Services
            </a>
            <a href="#brands" className="text-white hover:text-secondary transition-colors">
              Brands
            </a>
            <a href="#about" className="text-white hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <PhoneIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">+91 98221 95886</span>
            </div>
            <Button size="sm" className="bg-secondary text-black hover:bg-secondary/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-black/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-secondary transition-colors">
                Home
              </a>
              <a href="#services" className="text-white hover:text-secondary transition-colors">
                Services
              </a>
              <a href="#brands" className="text-white hover:text-secondary transition-colors">
                Brands
              </a>
              <a href="#about" className="text-white hover:text-secondary transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-secondary transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-1 text-sm pt-2">
                <PhoneIcon className="w-4 h-4 text-secondary" />
                <span className="text-white">+91 98221 95886</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
// ==================== HERO SECTION COMPONENT ====================
;("use client")

import { Button } from "@/components/ui/button"
import { PhoneIcon, MapPinIcon, ClockIcon, ArrowDownIcon } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSectionComponent() {
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
          src="/images/garage-background.png"
          alt="Modern automotive garage with diagnostic equipment"
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
            Professional Automotive Services in <span className="text-secondary animate-pulse">Pune</span>
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
              <PhoneIcon className="w-5 h-5 mr-2 animate-pulse" />
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
              <MapPinIcon className="w-5 h-5 text-secondary animate-pulse" />
              <span>Nira Road, Baramati, Pune</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <ClockIcon className="w-5 h-5 text-secondary animate-pulse" />
              <span>Mon-Sat: 9AM-7PM</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <PhoneIcon className="w-5 h-5 text-secondary animate-pulse" />
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
          <ArrowDownIcon className="w-6 h-6 animate-bounce group-hover:text-secondary" />
        </button>
      </div>
    </section>
  )
}

function MainPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeaderComponent />
      <HeroSectionComponent />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default MainPage
