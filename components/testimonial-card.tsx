import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  image: string
}

export default function TestimonialCard({ name, role, testimonial, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}
