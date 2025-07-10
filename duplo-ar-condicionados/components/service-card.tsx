import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-primary-medium/90 p-3 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
