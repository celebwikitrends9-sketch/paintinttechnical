import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import WhatsAppButton from "@/components/whatsapp-button"
import CallButton from "@/components/call-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Technical Services in Dubai</h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner for all home maintenance and technical services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of technical and maintenance services to keep your home and business
            running smoothly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Painting Services"
            description="Professional interior and exterior painting services with premium quality paints and finishes."
            icon="/abstract-colorful-painting.png"
            href="/services/painting"
          />
          <ServiceCard
            title="AC Repair & Installation"
            description="Expert AC installation, maintenance, and repair services for all brands and models."
            icon="/home-air-conditioner.png"
            href="/services/ac-services"
          />
          <ServiceCard
            title="Electrical Work"
            description="Complete electrical services including installation, repair, and maintenance for residential and commercial properties."
            icon="/electrical-components.png"
            href="/services/electrical"
          />
          <ServiceCard
            title="Plumbing Work"
            description="Professional plumbing solutions for leaks, blockages, installations, and all plumbing emergencies."
            icon="/plumbing-tools.png"
            href="/services/plumbing"
          />
          <ServiceCard
            title="Carpentry Work"
            description="Custom carpentry services including furniture assembly, repairs, and custom woodwork."
            icon="/carpentry-workshop.png"
            href="/services/carpentry"
          />
          <ServiceCard
            title="Gypsum Work"
            description="Expert gypsum ceiling and partition installation, repairs, and decorative elements."
            icon="/gypsum-ceiling.png"
            href="/services/gypsum"
          />
          <ServiceCard
            title="Tiles Work"
            description="Professional tile installation, repair, and replacement for floors, walls, and backsplashes."
            icon="/colorful-geometric-tiles.png"
            href="/services/tiles"
          />
          <ServiceCard
            title="Handyman Services"
            description="General maintenance and repair services for all your home and office needs."
            icon="/handyman-fixing-sink.png"
            href="/services/handyman"
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services" className="flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bilal Technical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing high-quality services with customer satisfaction as our top priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
              <p className="text-gray-600">
                Our team consists of highly skilled and experienced technicians who deliver quality workmanship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                We offer competitive rates without compromising on the quality of our services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-gray-600">
                We understand the urgency of technical issues and respond promptly to all service requests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We use only high-quality materials and equipment to ensure lasting results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction and strive to exceed expectations with every service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty on Services</h3>
              <p className="text-gray-600">We stand behind our work with service warranties for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Ahmed Hassan"
            role="Homeowner"
            testimonial="The AC repair service was excellent. The technician was professional, diagnosed the issue quickly, and fixed it at a reasonable price."
            image="/diverse-group.png"
          />
          <TestimonialCard
            name="Sara Khan"
            role="Business Owner"
            testimonial="We hired Bilal Technical Services for our office renovation. Their work on electrical, plumbing, and painting was outstanding. Highly recommended!"
            image="/diverse-woman-portrait.png"
          />
          <TestimonialCard
            name="Mohammed Ali"
            role="Property Manager"
            testimonial="Their handyman services are reliable and professional. They've become our go-to for all maintenance needs across our properties."
            image="/thoughtful-man.png"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your technical service needs
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
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
              <a href="tel:+971568480376" className="text-blue-600 font-medium mb-3">
                +971568480376
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us your inquiries</p>
              <a href="mailto:bb0213455@gmail.com" className="text-blue-600 font-medium">
                info@bilaltechnical.services
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <address className="text-blue-600 font-medium not-italic">International City, Dubai, UAE</address>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-2">We're available</p>
              <p className="text-blue-600 font-medium">7 days a week, 8AM - 8PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp and Call Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+971568480376"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <WhatsAppButton phoneNumber="+971568480376" iconOnly={true} className="shadow-lg" />
      </div>
    </div>
  )
}
