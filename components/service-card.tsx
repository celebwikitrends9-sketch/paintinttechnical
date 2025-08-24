import Link from "next/link"
import { Phone } from "lucide-react"
import { Card, CardFooter } from "@/components/ui/card"
import WhatsAppButton from "./whatsapp-button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  detailed?: boolean
}

export default function ServiceCard({ title, description, icon, href, detailed = false }: ServiceCardProps) {
  const whatsappMessage = `Hello, I'm interested in your ${title.toLowerCase()}. Please provide more information.`

  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <Link href={href} className="flex-grow cursor-pointer">
        <div className="w-full aspect-video relative overflow-hidden">
          <img src={icon || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600">{description}</p>

          {detailed && (
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-sm">Professional service</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-sm">Quality materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-sm">Competitive pricing</span>
              </li>
            </ul>
          )}
        </div>
      </Link>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex gap-2 w-full">
          <WhatsAppButton phoneNumber="+971568480376" message={whatsappMessage} className="w-1/2" />
          <a
            href={`tel:+971568480376`}
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
            <span>Call</span>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
