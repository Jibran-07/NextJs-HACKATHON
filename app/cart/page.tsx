import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">YOUR CART</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Cart Items */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="relative h-24 w-24">
                  <Image
                    src="/img22.png?height=96&width=96"
                    alt="Product image"
                    className="rounded-md object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">Gradient Graphic T-shirt</h3>
                      <p className="text-sm text-gray-500">Size: Large</p>
                      <p className="text-sm text-gray-500">Color: White</p>
                    </div>
                    <button className="text-red-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        -
                      </Button>
                      <span>1</span>
                      <Button variant="outline" size="icon">
                        +
                      </Button>
                    </div>
                    <span className="font-semibold">$145</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$565</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount (-20%)</span>
                  <span>-$113</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$15</span>
                </div>
                <div className="flex justify-between border-t pt-4 font-semibold">
                  <span>Total</span>
                  <span>$467</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Add promo code" />
                  <Button>Apply</Button>
                </div>
                <Button className="w-full" size="lg">
                  Go to Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

