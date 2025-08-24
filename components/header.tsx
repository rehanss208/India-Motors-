"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
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
              <h1 className="font-serif font-bold text-xl">
                <span className="text-white">India Motors & Garage</span> <span className="text-white">Baramati</span>
              </h1>
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
              <Phone className="w-4 h-4 text-secondary" />
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
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-white">+91 98221 95886</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
