"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const brands = [
  { name: "Tata", logo: "T", color: "from-blue-500/20 to-blue-600/20" },
  { name: "Mahindra", logo: "M", color: "from-red-500/20 to-red-600/20" },
  { name: "Maruti Suzuki", logo: "MS", color: "from-orange-500/20 to-orange-600/20" },
  { name: "Hyundai", logo: "H", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Honda", logo: "H", color: "from-red-500/20 to-pink-500/20" },
  { name: "Toyota", logo: "T", color: "from-red-600/20 to-red-700/20" },
  { name: "Renault", logo: "R", color: "from-yellow-500/20 to-yellow-600/20" },
  { name: "Volkswagen", logo: "VW", color: "from-blue-600/20 to-blue-700/20" },
]

export default function BrandsSection() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null)

  return (
    <section id="brands" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/car-brands-bg.png" alt="Car brands showcase" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Supported Car Brands
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-delay">
            We service all major automotive brands with specialized diagnostic equipment and genuine parts support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 bg-black/40 backdrop-blur-md border-white/20 hover:bg-black/60 ${
                hoveredBrand === index ? "scale-110 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredBrand(index)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              ></div>

              <CardContent className="p-6 text-center relative z-10">
                <div className="w-12 h-12 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center text-2xl font-bold text-secondary group-hover:scale-125 transition-all duration-300 group-hover:animate-bounce border-2 border-secondary/30">
                  {brand.logo}
                </div>
                <h3 className="font-semibold text-sm text-white group-hover:text-secondary transition-colors group-hover:font-bold">
                  {brand.name}
                </h3>

                <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/50 rounded-lg transition-all duration-300 animate-glow opacity-0 group-hover:opacity-100"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-delay">
          <p className="text-white/70 mb-4">Don't see your brand? We work with many more manufacturers.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-secondary hover:text-secondary/80 font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
          >
            Contact us to confirm compatibility
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
