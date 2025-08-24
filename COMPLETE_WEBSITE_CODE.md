# India Motors & Garage - Complete Website Code

Copy each file below to create your automotive service website:

## 1. app/layout.tsx
\`\`\`tsx
import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
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
\`\`\`

## 2. app/page.tsx
\`\`\`tsx
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BrandsSection from "@/components/brands-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
\`\`\`

## 3. components/header.tsx
\`\`\`tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from 'lucide-react'

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
\`\`\`

## 4. components/hero-section.tsx
\`\`\`tsx
"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, ArrowDown } from 'lucide-react'
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
              <span>Nira Road, Baramati, Pune</span>
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
\`\`\`

## 5. app/globals.css
\`\`\`css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.27 0 0);
  --card: oklch(0.98 0.02 142);
  --card-foreground: oklch(0.27 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.27 0 0);
  --primary: oklch(0.45 0.15 142);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.75 0.18 85);
  --secondary-foreground: oklch(0.27 0 0);
  --muted: oklch(0.98 0.02 142);
  --muted-foreground: oklch(0.27 0 0);
  --accent: oklch(0.45 0.15 142);
  --accent-foreground: oklch(1 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.92 0 0);
  --input: oklch(0.98 0.02 142);
  --ring: oklch(0.75 0.18 85);
  --chart-1: oklch(0.45 0.15 142);
  --chart-2: oklch(0.75 0.18 85);
  --chart-3: oklch(0.577 0.245 27.325);
  --chart-4: oklch(0.7 0.15 85);
  --chart-5: oklch(0.5 0.12 85);
  --radius: 0.5rem;
  --sidebar: oklch(0.98 0.02 142);
  --sidebar-foreground: oklch(0.27 0 0);
  --sidebar-primary: oklch(0.45 0.15 142);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.75 0.18 85);
  --sidebar-accent-foreground: oklch(0.27 0 0);
  --sidebar-border: oklch(0.92 0 0);
  --sidebar-ring: oklch(0.75 0.18 85);
  --font-source-sans: "Source Sans Pro", sans-serif;
  --font-playfair: "Playfair Display", serif;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.75 0.18 85);
  --primary-foreground: oklch(0.145 0 0);
  --secondary: oklch(0.45 0.15 142);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.75 0.18 85);
  --accent-foreground: oklch(0.145 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.75 0.18 85);
  --chart-1: oklch(0.75 0.18 85);
  --chart-2: oklch(0.45 0.15 142);
  --chart-3: oklch(0.577 0.245 27.325);
  --chart-4: oklch(0.7 0.15 85);
  --chart-5: oklch(0.5 0.12 85);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.75 0.18 85);
  --sidebar-primary-foreground: oklch(0.145 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.75 0.18 85);
}

@theme inline {
  --font-sans: var(--font-source-sans);
  --font-serif: var(--font-playfair);
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-delay {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce-subtle {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0%,
    100% {
      box-shadow: 0 0 5px rgba(132, 204, 22, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(132, 204, 22, 0.6);
    }
  }

  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }

  .animate-fade-in-delay {
    animation: fade-in-delay 1s ease-out 0.3s both;
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out;
  }
}
\`\`\`

## Note:
You'll also need the remaining component files (services-section.tsx, brands-section.tsx, contact-section.tsx, footer.tsx) which are already created in your project. The UI components from shadcn/ui are also included automatically.

## Images Required:
- `/public/images/garage-background.png`
- `/public/images/automotive-workshop.png` 
- `/public/images/car-brands-bg.png`
- `/public/images/contact-garage.png`
- `/public/images/footer-tools.png`

Copy each section above into the corresponding file in your Next.js project structure.
