"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';

import { Frame, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import WhatsAppButton from "./whatsapp-button"
import CallButton from "./call-button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* <Frame className="h-6 w-6 text-blue-600" /> */}
             
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={40}
            priority
          />
        

          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
        {/* Desktop buttons section */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2">
            <WhatsAppButton
              phoneNumber="+971568480376"
              message="Hello, I'm interested in your services."
              className="px-3 py-1 text-sm"
            />
            {/* <a
              href="tel:+971568480376"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a> */}
            <CallButton phoneNumber="+971568480376" className="flex-1 justify-center" />
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700" size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium" onClick={closeSheet}>
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={closeSheet}>
                About
              </Link>
              <Link href="/services" className="text-lg font-medium" onClick={closeSheet}>
                Services
              </Link>
              <Link href="/contact" className="text-lg font-medium" onClick={closeSheet}>
                Contact
              </Link>
              <div className="pt-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" onClick={closeSheet}>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
              {/* Contact buttons in mobile menu */}
              <div className="pt-2 flex gap-2">
                <WhatsAppButton
                  phoneNumber="+971568480376"
                  message="Hello, I'm interested in your services."
                  className="flex-1 justify-center"
                />
                <CallButton phoneNumber="+971568480376" className="flex-1 justify-center" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
