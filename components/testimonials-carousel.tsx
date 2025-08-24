"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rajesh Patil",
    location: "Baramati",
    rating: 5,
    text: "Excellent service! They diagnosed my car's ECM issue quickly and fixed it at a reasonable price. Highly recommended!",
    service: "ECM Repair",
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    rating: 5,
    text: "Best place for key programming in the area. They programmed my sensor key perfectly and the service was very professional.",
    service: "Key Programming",
  },
  {
    name: "Amit Desai",
    location: "Solapur",
    rating: 5,
    text: "24/7 emergency service saved my day! They came to help when my truck broke down on the highway. Great team!",
    service: "Emergency Service",
  },
  {
    name: "Sunita Jadhav",
    location: "Baramati",
    rating: 5,
    text: "Very knowledgeable staff. They explained the diagnostic results clearly and completed the repair work efficiently.",
    service: "Vehicle Diagnostics",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Maharashtra
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-md border-white/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="text-white hover:text-secondary hover:bg-white/10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <div className="flex-1 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-white/90 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-secondary text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-white/60 text-sm">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-white hover:text-secondary hover:bg-white/10"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-secondary scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
