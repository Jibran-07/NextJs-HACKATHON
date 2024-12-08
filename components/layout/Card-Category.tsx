import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  image: string
}

export function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

