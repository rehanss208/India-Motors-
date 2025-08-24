"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Key, Settings, Zap, Truck } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Cpu,
    title: "Vehicle Scanning & Diagnostics",
    features: ["Engine Scanning", "Injector Coding", "ABS System Check", "Airbag Diagnostics"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Key,
    title: "Sensor Key & Remote Programming",
    features: ["Sensor Keys", "Remote Programming", "Fancy Flip Keys", "Optional Keys"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Truck,
    title: "Commercial & Heavy Vehicles",
    features: ["BS IV,BS VI Vehicles", "Scanning", "Wiring Issues", "Guidance"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Settings,
    title: "ECM & BCM Repair",
    features: ["ECM Programming", "BCM Repair", "Module Replacement", "Software Update"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Zap,
    title: "Electronics & Electrical",
    features: ["Wiring Repairs", "Electrical Diagnostics", "Component Replacement", "Digital Meter Repair"],
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KBtyaVS0W0zUZp7MlHxScoMmbZ0r4O.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Our Specialized Services
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-red-500 mb-2 animate-fade-in-delay drop-shadow-2xl shadow-red-500/70 bg-red-500/10 px-6 py-3 rounded-lg border-2 border-red-500/50 backdrop-blur-sm animate-[blink_1s_infinite] tracking-wide uppercase">
            Break Down Services Available
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-delay">
            We provide comprehensive automotive electronic services using state-of-the-art equipment and years of
            expertise in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-white/20 cursor-pointer transform hover:-translate-y-2 bg-black/40 backdrop-blur-md hover:bg-black/60 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              ></div>

              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 border border-white/20">
                  <service.icon className="w-6 h-6 text-secondary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-secondary transition-colors text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-white/60 group-hover:text-white/90 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-black transition-all duration-300 bg-transparent border-white/30 text-white hover:border-secondary transform group-hover:scale-105"
                  onClick={() => window.open("tel:+919822195886")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}
