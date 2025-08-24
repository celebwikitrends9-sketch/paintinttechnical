"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import WhatsAppButton from "@/components/whatsapp-button"
import CallButton from "@/components/call-button"
import ServiceSelection from "@/components/service-selection"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["painting"],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServicesChange = (selectedServices: string[]) => {
    setFormData((prev) => ({
      ...prev,
      services: selectedServices,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      // Format services array into a string for better email readability
      const servicesString = formData.services.join(", ")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b61bfa7b-29fd-4b7a-bda9-e6d806885a66",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: servicesString,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus("success")
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: ["painting"],
          message: "",
        })
      } else {
        setFormStatus("error")
        toast({
          title: "Error submitting form",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setFormStatus("error")
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us for a free quote or to discuss your project requirements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 mb-1">Call us for immediate assistance</p>
                  
                  <a href="mailto:info@bilaltechnical.services" className="text-blue-600 font-medium">
                    +971568480376
                  </a>
                  
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">Send us your inquiries</p>
                  <a href="mailto:info@bilaltechnical.services" className="text-blue-600 font-medium">
                    info@bilaltechnical.services
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600 mb-1">Visit our office</p>
                  <address className="text-blue-600 font-medium not-italic">International City, Dubai, UAE</address>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-600 mb-1">We're available</p>
                  <p className="text-blue-600 font-medium">7 days a week, 8AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.126089366561!2d55.40501017431642!3d25.16124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61f7a5a7a76d%3A0x3bd5792e8b89849e!2sInternational%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1653047724413!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bilal Technical Services Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
              <p className="text-green-700 mb-6">
                Thank you for contacting us. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setFormStatus("idle")} className="bg-green-600 hover:bg-green-700">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start mb-4">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Error submitting form</h3>
                    <p className="text-sm text-red-700">
                      Please try again or contact us directly via phone or WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <ServiceSelection onSelectionChange={handleServicesChange} />

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your requirements"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hidden honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
