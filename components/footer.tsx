import Link from "next/link"
import { Frame, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Frame className="h-8 w-8" />
              <span className="font-bold text-xl">Bilal Technical</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for all technical and maintenance services in Dubai.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div> */}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/painting" className="text-gray-400 hover:text-white transition-colors">
                  Painting Services
                </Link>
              </li>
              <li>
                <Link href="/services/ac-services" className="text-gray-400 hover:text-white transition-colors">
                  AC Repair & Installation
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-gray-400 hover:text-white transition-colors">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-gray-400 hover:text-white transition-colors">
                  Plumbing Work
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry" className="text-gray-400 hover:text-white transition-colors">
                  Carpentry Work
                </Link>
              </li>
              <li>
                <Link href="/services/gypsum" className="text-gray-400 hover:text-white transition-colors">
                  Gypsum Work
                </Link>
              </li>
              <li>
                <Link href="/services/tiles" className="text-gray-400 hover:text-white transition-colors">
                  Tiles Work
                </Link>
              </li>
              <li>
                <Link href="/services/handyman" className="text-gray-400 hover:text-white transition-colors">
                  Handyman Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <a href="tel:+971568480376" className="text-gray-400 hover:text-white transition-colors">
                    +971568480376
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@bilaltechnical.services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@bilaltechnical.services
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <address className="text-gray-400 not-italic">International City, Dubai, UAE</address>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bilal Technical Services. All rights reserved | Powered by <a href="https://mindoxa.com">Mindoxa</a></p>
        </div>
      </div>
    </footer>
  )
}
