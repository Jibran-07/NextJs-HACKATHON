import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/img23.png?height=600&width=600"
              alt="Product image"
              className="object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/img24.png?height=150&width=150"
                  alt={`Product thumbnail ${i + 1}`}
                  className="object-cover"
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="mt-2 flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-500">4.5/5</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$260</span>
                <span className="text-lg text-gray-500 line-through">$300</span>
              </div>
              <span className="text-sm text-red-600">-40% OFF</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Select Color</h3>
              <div className="flex gap-2">
                {['bg-olive-800', 'bg-emerald-800', 'bg-navy-800'].map((color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full ${color} ring-2 ring-offset-2`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Choose Size</h3>
              <div className="flex gap-2">
                {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                  <Button
                    key={size}
                    variant={size === 'Large' ? 'default' : 'outline'}
                    className="px-6"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Add to Cart
          </Button>

          <p className="text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="mt-6 grid gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="mt-2 font-semibold">Great Product!</h3>
                  <p className="mt-2 text-gray-600">
                    The t-shirt exceeded my expectations! The design is unique and the fabric feels so
                    comfortable.
                  </p>
                </div>
                <span className="text-sm text-gray-500">Posted on August 14, 2023</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

