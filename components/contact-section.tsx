"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const whatsappMessage = `*New Service Inquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Service Required:* ${formData.service || "General inquiry"}

*Message:*
${formData.message || "No additional message"}

---
Sent from India Motors & Garage website`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/919822195886?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")

    setIsSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-garage.png"
          alt="Contact India Motors Garage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-delay">
            Ready to service your vehicle? Contact us today for expert automotive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-black/40 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-white">Visit Our Garage</CardTitle>
                <CardDescription className="text-white/70">
                  Located in the heart of Baramati for your convenience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors">
                  <MapPin className="w-6 h-6 text-secondary mt-1 group-hover:animate-bounce" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-secondary transition-colors">Address</h4>
                    <p className="text-white/70">
                      Near Tata Showroom, Shitole Vasti, Nira Road, Baramati (MH)
                      <br />
                      Pin - 413102
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 group cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors"
                  onClick={() => window.open("tel:+919822195886")}
                >
                  <Phone className="w-6 h-6 text-secondary mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-secondary transition-colors">
                      Phone Numbers
                    </h4>
                    <p className="text-white/70">
                      +91 9822195886
                      <br />
                      +91 9921048837
                      <br />
                      +91 9766646634
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-white/10 p-2 rounded-lg transition-colors">
                  <Clock className="w-6 h-6 text-secondary mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-white">Working Hours</h4>
                    <p className="text-white/70">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Emergency Service: 24/7
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 group cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors"
                  onClick={() => window.open("https://wa.me/919822195886")}
                >
                  <Mail className="w-6 h-6 text-secondary mt-1 group-hover:animate-bounce" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-secondary transition-colors">WhatsApp</h4>
                    <p className="text-white/70">Available on +91 98221 95886</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-xl transition-all duration-500 animate-slide-in-right bg-black/40 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-white">Send Us a Message</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-white/70">Thank you for your inquiry. We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Required
                    </label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g., Vehicle Diagnostics, Key Programming"
                      className="transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your vehicle issue or service requirements..."
                      className="transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full transform hover:scale-105 transition-all duration-300"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
