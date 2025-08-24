import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Frame, Home, Phone, ArrowRight } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Frame className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>

          <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <Link href="/">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/services">
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
            <h3 className="font-bold text-lg mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">Contact us directly and we'll be happy to assist you.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                phoneNumber="+971568480376"
                message="Hello, I couldn't find what I was looking for on your website. Can you help me?"
                className="flex-1"
              />
              <a
                href="tel:+971568480376"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}