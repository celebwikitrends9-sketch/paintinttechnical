import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import CallButton from "@/components/call-button"
import { Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Bilal Technical Services</h1>
        <p className="text-lg text-gray-600">
          Your trusted partner for all technical and maintenance services in Dubai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Bilal Technical Services was established with a vision to provide high-quality, reliable, and affordable
            technical services to residents and businesses in Dubai.
          </p>
          <p className="text-gray-600 mb-4">
            With years of experience in the industry, our team of skilled professionals is committed to delivering
            exceptional service and customer satisfaction.
          </p>
          <p className="text-gray-600 mb-6">
            We take pride in our attention to detail, prompt service, and the use of quality materials to ensure lasting
            results for all our projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <div className="flex gap-2 w-full sm:w-auto">
              <WhatsAppButton
                phoneNumber="+971568480376"
                message="Hello, I'd like to know more about Bilal Technical Services."
                className="flex-1 sm:flex-auto"
              />
              <CallButton phoneNumber="+971568480376" className="flex-1 sm:flex-auto" />
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/professional-maintenance-team.png"
            alt="Bilal Technical Services Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality workmanship and using premium materials for all our services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We operate with honesty, transparency, and ethical business practices in all our dealings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Reliability</h3>
            <p className="text-gray-600">
              We are dependable and consistent in our service delivery, ensuring timely completion of all projects.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Painting Services</h3>
            <p className="text-gray-600">Interior and exterior painting with premium quality paints and finishes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">AC Services</h3>
            <p className="text-gray-600">
              Installation, repair, and maintenance of all types of air conditioning systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Electrical Work</h3>
            <p className="text-gray-600">Complete electrical services for residential and commercial properties.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Plumbing Work</h3>
            <p className="text-gray-600">Professional plumbing solutions for all your water and drainage needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Carpentry Work</h3>
            <p className="text-gray-600">Custom carpentry services including furniture assembly and repairs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Gypsum Work</h3>
            <p className="text-gray-600">Expert gypsum ceiling and partition installation and decorative elements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Tiles Work</h3>
            <p className="text-gray-600">Professional tile installation for floors, walls, and backsplashes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Handyman Services</h3>
            <p className="text-gray-600">General maintenance and repair services for all your needs.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements and get a free quote
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <div className="flex gap-2 w-full sm:w-auto">
              <WhatsAppButton
                phoneNumber="+971568480376"
                message="Hello, I'd like to know more about Bilal Technical Services."
                className="flex-1 sm:flex-auto"
              />
              <CallButton phoneNumber="+971568480376" className="flex-1 sm:flex-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
