import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-tools.png"
          alt="Automotive tools and equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">IM</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">India Motors & Garage</h3>
                  <p className="text-sm text-white/70">Expert Automotive Services</p>
                </div>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Your trusted partner for all automotive electronic services. We specialize in vehicle diagnostics,
                ECM/BCM repair, and key programming with over a decade of experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+91 98221 95886</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>Nira Road, Baramati - 413102</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#home" className="hover:text-secondary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#brands" className="hover:text-secondary transition-colors">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Our Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Vehicle Diagnostics</li>
                <li>ECM/BCM Repair</li>
                <li>Key Programming</li>
                <li>Electronic Repairs</li>
                <li>Digital Systems</li>
                <li>Preventive Maintenance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 India Motors & Garage. All rights reserved. | Expert automotive services in Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
