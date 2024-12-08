import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold">Filters</h2>
            <div className="mt-4 space-y-4">
              {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox id={category} />
                  <label htmlFor={category} className="ml-2">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Price Range</h2>
            <div className="mt-4">
              <Slider defaultValue={[50]} max={200} step={1} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Colors</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map(
                (color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full ${color} ring-2 ring-offset-2`}
                  />
                )
              )}
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Products Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Casual</h1>
            <select className="rounded-md border p-2">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <Link key={i} href={`/product/${i}`}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/img22.png?height=400&width=400"
                      alt="Product image"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Gradient Graphic T-shirt</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold">$145</span>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-500">4.5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <Button variant="outline">Previous</Button>
            {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
              <Button
                key={i}
                variant={page === 1 ? 'default' : 'outline'}
                className={page === '...' ? 'cursor-default' : ''}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

