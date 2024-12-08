import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
}

export function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
      <CardFooter>
        <p className="font-medium">{name}</p>
      </CardFooter>
    </Card>
  )
}

