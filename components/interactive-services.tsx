"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Vehicle Diagnostics",
      description: "Advanced computer diagnostics for all vehicle systems",
      image: "/placeholder-m7qnr.png",
      features: ["Engine Scanning", "Real-time Data", "Error Code Reading", "Performance Analysis"],
    },
    {
      title: "Remote Programming",
      description: "Professional key and remote programming services",
      image: "/placeholder-uvrgw.png",
      features: ["Smart Keys", "Remote Controls", "Transponder Programming", "Key Cutting"],
    },
    {
      title: "ECM Programming",
      description: "Electronic control module programming and repair",
      image: "/placeholder-dmd5h.png",
      features: ["Module Programming", "Software Updates", "Parameter Setting", "Calibration"],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Advanced Automotive Technology</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge diagnostic and programming services with state-of-the-art equipment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Interactive Service Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeService === index
                    ? "bg-red-600 border-red-500 shadow-2xl shadow-red-500/20"
                    : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={`${activeService === index ? "bg-white text-red-600" : "bg-gray-700 text-gray-300"}`}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dynamic Image Display */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={services[activeService].image || "/placeholder.svg"}
                alt={services[activeService].title}
                className="w-full h-96 object-cover transition-all duration-500 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-bold text-white mb-2">{services[activeService].title}</h4>
                <p className="text-gray-200">{services[activeService].description}</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white font-bold text-sm">NEW</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔧</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300">Cars Diagnosed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">200+</div>
            <div className="text-gray-300">Keys Programmed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-gray-300">ECM Repairs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}
