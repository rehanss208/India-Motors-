import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
// <CHANGE> Removed imports for new interactive components
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <CHANGE> Removed EmergencyBanner component */}
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* <CHANGE> Removed TestimonialsCarousel component */}
      <ContactSection />
      <Footer />
      {/* <CHANGE> Removed FloatingWhatsApp component */}
    </main>
  )
}
