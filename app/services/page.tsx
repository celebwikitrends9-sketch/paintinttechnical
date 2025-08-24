"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

// Centralized services data
const services = [
  {
    id: "painting",
    title: "Painting Services",
    description: "Professional interior and exterior painting services with premium quality paints and finishes.",
    image: "/professional-painting-service.png",
    features: ["Interior painting", "Exterior painting", "Decorative finishes", "Wall texture applications"],
    whatsappMessage: "Hello, I'm interested in your painting services. Can you provide more information?",
  },
  {
    id: "ac-services",
    title: "AC Repair & Installation",
    description: "Expert AC installation, maintenance, and repair services for all brands and models.",
    image: "/ac-technician-working.png",
    features: ["AC installation", "AC repair and troubleshooting", "Regular maintenance", "Duct cleaning"],
    whatsappMessage:
      "Hello, I'm interested in your AC repair and installation services. Can you provide more information?",
  },
  {
    id: "electrical",
    title: "Electrical Work",
    description:
      "Complete electrical services including installation, repair, and maintenance for residential and commercial properties.",
    image: "/electrical-components.png",
    features: ["Electrical installations", "Wiring and rewiring", "Circuit breaker services", "Lighting installation"],
    whatsappMessage: "Hello, I'm interested in your electrical services. Can you provide more information?",
  },
  {
    id: "plumbing",
    title: "Plumbing Work",
    description: "Professional plumbing solutions for leaks, blockages, installations, and all plumbing emergencies.",
    image: "/plumbing-tools.png",
    features: ["Leak detection and repair", "Drain cleaning", "Pipe installation", "Fixture installation"],
    whatsappMessage: "Hello, I'm interested in your plumbing services. Can you provide more information?",
  },
  {
    id: "carpentry",
    title: "Carpentry Work",
    description: "Custom carpentry services including furniture assembly, repairs, and custom woodwork.",
    image: "/carpentry-workshop.png",
    features: ["Custom furniture making", "Furniture repair", "Cabinet installation", "Door installation"],
    whatsappMessage: "Hello, I'm interested in your carpentry services. Can you provide more information?",
  },
  {
    id: "gypsum",
    title: "Gypsum Work",
    description: "Expert gypsum ceiling and partition installation, repairs, and decorative elements.",
    image: "/gypsum-ceiling.png",
    features: ["Gypsum ceiling installation", "Partition walls", "Decorative designs", "Repairs"],
    whatsappMessage: "Hello, I'm interested in your gypsum work services. Can you provide more information?",
  },
  {
    id: "tiles",
    title: "Tiles Work",
    description: "Professional tile installation, repair, and replacement for floors, walls, and backsplashes.",
    image: "/colorful-geometric-tiles.png",
    features: ["Floor tile installation", "Wall tile installation", "Backsplash installation", "Tile repair"],
    whatsappMessage: "Hello, I'm interested in your tiles work services. Can you provide more information?",
  },
  {
    id: "handyman",
    title: "Handyman Services",
    description: "General maintenance and repair services for all your home and office needs.",
    image: "/handyman-fixing-sink.png",
    features: ["General repairs", "Furniture assembly", "Door and window repairs", "Minor electrical and plumbing"],
    whatsappMessage: "Hello, I'm interested in your handyman services. Can you provide more information?",
  },
]

export default function ServicesPage() {
  const router = useRouter()

  const handleCardClick = (path: string, e: React.MouseEvent) => {
    // Only navigate if the click wasn't on a button or link
    if (!(e.target as HTMLElement).closest("button") && !(e.target as HTMLElement).closest("a")) {
      router.push(path)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-gray-600">
          We provide a comprehensive range of technical and maintenance services to meet all your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={(e) => handleCardClick(`/services/${service.id}`, e)}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col h-full"
          >
            {/* Image */}
            <div className="aspect-video relative overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <h3 className="font-semibold text-sm text-gray-700 mb-2">Services Include:</h3>
              <ul className="mb-6 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="p-6 pt-0 mt-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  Learn More
                </Button>
                <div className="flex gap-2 w-full">
                  <WhatsAppButton phoneNumber="+971568480376" message={service.whatsappMessage} className="flex-1" />
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
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Don't see exactly what you're looking for? Contact us to discuss your specific requirements. We offer
          customized solutions to meet your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <div className="flex gap-3">
            <WhatsAppButton
              phoneNumber="+971568480376"
              message="Hello, I need a custom service not listed on your website. Can you help?"
              className="sm:px-6 sm:py-3 text-base font-medium"
            />
            <a
              href="tel:+971568480376"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
