import Link from "next/link"
import { CheckCircle, Phone, Star, Clock, Shield, PenToolIcon as Tool, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ElectricalServicePage() {
  const service = {
    title: "Electrical Services",
    description:
      "Complete electrical services including installation, repair, and maintenance for residential and commercial properties.",
    image: "/electrical-components.png",
    features: [
      "Electrical installations",
      "Wiring and rewiring",
      "Circuit breaker installation and repair",
      "Lighting installation",
      "Electrical troubleshooting",
      "Electrical safety inspections",
      "Electrical upgrades",
      "Emergency electrical services",
    ],
    benefits: [
      "Enhanced electrical safety",
      "Improved energy efficiency",
      "Reliable electrical systems",
      "Professional and code-compliant work",
    ],
    whatsappMessage: "Hello, I'm interested in your electrical services. Can you provide more information?",
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-800/90 z-10"></div>
        <div className="absolute inset-0">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm px-4 py-1 rounded-full text-blue-100 text-sm font-medium mb-4 border border-blue-500/30">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{service.title}</h1>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 shadow-lg"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <div className="flex gap-3">
                <WhatsAppButton
                  phoneNumber="+971568480376"
                  message={service.whatsappMessage}
                  className="px-6 py-3 text-base font-medium shadow-lg"
                />
                <a
                  href="tel:+971568480376"
                  className="bg-blue-500/80 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Overview */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Tool className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Professional Electrical Services</h2>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  At Bilal Technical Services, we provide comprehensive electrical services for residential and
                  commercial properties throughout Dubai. Our team of licensed electricians is committed to delivering
                  safe, reliable, and efficient electrical solutions.
                </p>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Whether you need new installations, repairs, upgrades, or maintenance for your home or business, we
                  have the expertise and equipment to handle projects of any size. We follow all safety codes and
                  regulations to ensure your electrical systems are safe and reliable.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-gray-700 font-medium">Fast Service</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-gray-700 font-medium">Licensed</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                    <Tool className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-gray-700 font-medium">Expert Team</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                    <Award className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-gray-700 font-medium">Guaranteed</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <div className="flex gap-2">
                    <WhatsAppButton phoneNumber="+971568480376" message={service.whatsappMessage} />
                    <a
                      href="tel:+971568480376"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
                      aria-label="Call us"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Tool className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Our Services Include</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Benefits</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Why Choose Us</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Licensed and insured electricians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quality materials and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Competitive and transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Timely completion of projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Excellent customer service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Satisfaction guaranteed</span>
                  </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Get a Free Quote</h4>
                  <p className="text-gray-700 mb-4">
                    Contact us today to schedule your service or request a free quote.
                  </p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-lg mb-3">Contact Us</h4>
                  <div className="space-y-3">
                    <a href="tel:+971568480376" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <Phone className="w-4 h-4" />
                      <span>+971568480376</span>
                    </a>
                    <a
                      href="mailto:info@bilaltechnical.services"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>info@bilaltechnical.services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>

          <div className="relative z-10 px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Contact us today for a free consultation and quote on your electrical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-lg"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <div className="flex gap-3">
                <WhatsAppButton
                  phoneNumber="+971568480376"
                  message={service.whatsappMessage}
                  className="sm:px-6 sm:py-3 text-base font-medium shadow-lg"
                />
                <a
                  href="tel:+971568480376"
                  className="bg-blue-500/80 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
