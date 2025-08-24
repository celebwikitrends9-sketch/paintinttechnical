"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface ServiceSelectionProps {
  onSelectionChange?: (selectedServices: string[]) => void
}

export default function ServiceSelection({ onSelectionChange }: ServiceSelectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["painting"])

  const services = [
    { id: "painting", label: "Painting" },
    { id: "electrical", label: "Electrical" },
    { id: "carpentry", label: "Carpentry" },
    { id: "tiles", label: "Tiles" },
    { id: "ac", label: "AC Services" },
    { id: "plumbing", label: "Plumbing" },
    { id: "gypsum", label: "Gypsum" },
    { id: "handyman", label: "Handyman" },
  ]

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    let updatedServices: string[]

    if (checked) {
      updatedServices = [...selectedServices, serviceId]
    } else {
      updatedServices = selectedServices.filter((id) => id !== serviceId)
    }

    setSelectedServices(updatedServices)

    if (onSelectionChange) {
      onSelectionChange(updatedServices)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Service Required</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
        {services.slice(0, 4).map((service) => (
          <div key={service.id} className="flex items-center space-x-2">
            <Checkbox
              id={service.id}
              checked={selectedServices.includes(service.id)}
              onCheckedChange={(checked) => handleServiceChange(service.id, checked === true)}
              className="h-5 w-5 border-2 border-blue-500 text-blue-500 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
            />
            <Label htmlFor={service.id} className="text-base font-medium">
              {service.label}
            </Label>
          </div>
        ))}
        {services.slice(4).map((service) => (
          <div key={service.id} className="flex items-center space-x-2">
            <Checkbox
              id={service.id}
              checked={selectedServices.includes(service.id)}
              onCheckedChange={(checked) => handleServiceChange(service.id, checked === true)}
              className="h-5 w-5 border-2 border-blue-500 text-blue-500 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
            />
            <Label htmlFor={service.id} className="text-base font-medium">
              {service.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}
