import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
}

export function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

