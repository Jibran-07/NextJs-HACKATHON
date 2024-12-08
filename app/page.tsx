import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/layout/Site-Header";
import { ProductCard } from "@/components/layout/Product-Card";
import { CategoryCard } from "@/components/layout/Card-Category";
import { TestimonialCard } from "@/components/layout/Testimonial-Card";
import { Newsletter } from "@/components/layout/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-black text-white text-center text-sm py-2">
        Sign up and get 20% off to your first order.{" "}
        <Link href="/signup">Sign Up Now</Link>
      </div>

      <SiteHeader />

      <section className="relative bg-[#F2F0F1]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-4 items-center">
          <div className="py-16 lg:py-24 space-y-8">
            <h1 className="text-[64px] leading-[1.1] font-heading">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed
              <br />
              to bring out your individuality and cater to your sense of style.
            </p>
            <Link href="/category/all">
              <Button
                size="lg"
                className="rounded-full px-12 h-12 mt-4 text-body text-white bg-black hover:bg-black/90"
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="relative h-[600px] w-full">
            <Image
              src="/img.png?height=800&width=600"
              alt="Fashion Models"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_70%)]" />
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-8 bg-background">
        <div className="container mx-auto flex justify-between items-center">
          {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map(
            (brand) => (
              <div
                key={brand}
                className="text-xl font-semibold text-muted-foreground"
              >
                {brand}
              </div>
            )
          )}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading text-center mb-12">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/product/t-shirt-with-tape-details">
              <ProductCard
                title="T-shirt with Tape Details"
                price={120}
                rating={4.5}
                reviews={145}
                image="/img1.png"
              />
            </Link>
            <Link href="/product/skinny-fit-jeans">
              <ProductCard
                title="Skinny Fit Jeans"
                price={240}
                originalPrice={260}
                rating={4.8}
                reviews={230}
                image="/img2.png"
              />
            </Link>
            <Link href="/product/checkered-shirt">
              <ProductCard
                title="Checkered Shirt"
                price={180}
                rating={4.9}
                reviews={450}
                image="/img3.png"
              />
            </Link>
            <Link href="/product/sleeve-striped-t-shirt">
              <ProductCard
                title="Sleeve Striped T-shirt"
                price={130}
                originalPrice={160}
                rating={4.7}
                reviews={245}
                image="/img4.png"
              />
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/category/new-arrivals">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading text-center mb-12">
            TOP SELLING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/product/vertical-striped-shirt">
              <ProductCard
                title="Vertical Striped Shirt"
                price={212}
                originalPrice={232}
                rating={4.8}
                reviews={435}
                image="/img5.png"
              />
            </Link>
            <Link href="/product/courage-graphic-t-shirt">
              <ProductCard
                title="Courage Graphic T-shirt"
                price={145}
                rating={4.7}
                reviews={427}
                image="/img6.png"
              />
            </Link>
            <Link href="/product/loose-fit-bermuda-shorts">
              <ProductCard
                title="Loose Fit Bermuda Shorts"
                price={80}
                rating={4.5}
                reviews={145}
                image="/img7.png"
              />
            </Link>
            <Link href="/product/faded-skinny-jeans">
              <ProductCard
                title="Faded Skinny Jeans"
                price={210}
                rating={4.8}
                reviews={435}
                image="/img8.png"
              />
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/category/top-selling">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <Link href="/category/casual">
              <CategoryCard title="Casual" image="/img9.png" />
            </Link>
            <Link href="/category/formal">
              <CategoryCard title="Formal" image="/img10.png" />
            </Link>
            <Link href="/category/party">
              <CategoryCard title="Party" image="/img11.png" />
            </Link>
            <Link href="/category/gym">
              <CategoryCard title="Gym" image="/img12.png" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading text-center mb-12">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah M."
              rating={5}
              text="The clothes are both stylish and high-quality. I received them quickly and in perfect condition. I'm really happy with my purchase!"
            />
            <TestimonialCard
              name="Alex K."
              rating={5}
              text="Shopping online has never been easier with my personal stylist. I discovered amazing pieces that match my style perfectly."
            />
            <TestimonialCard
              name="James L."
              rating={5}
              text="The customer service was always on top! Helped me find the perfect size and style. Will definitely shop here again!"
            />
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Footer */}
      <footer className="bg-secondary border-t">
        <div className="container mx-auto py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading">SHOP.CO</h3>
              <p className="text-sm text-body text-muted-foreground ">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex items-center space-x-4">
                <Image src="/img18.png" alt="Twitter" width={30} height={18} />
                <Image src="/img19.png" alt="Facebook" width={30} height={18} />
                <Image
                  src="/img20.png"
                  alt="Instagram"
                  width={30}
                  height={18}
                />
                <Image src="/img21.png" alt="GitHub" width={30} height={18} />
              </div>
            </div>
            <div>
              <h4 className="font-body mb-4 pl-8">COMPANY</h4>
              <div className="space-y-2 pl-8">
                <Link
                  href="/about"
                  className="block text-sm text-muted-foreground"
                >
                  About
                </Link>
                <Link
                  href="/features"
                  className="block text-sm text-muted-foreground"
                >
                  Features
                </Link>
                <Link
                  href="/works"
                  className="block text-sm text-muted-foreground"
                >
                  Works
                </Link>
                <Link
                  href="/careers"
                  className="block text-sm text-muted-foreground"
                >
                  Career
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-body mb-4">HELP</h4>
              <div className="space-y-2">
                <Link
                  href="/support"
                  className="block text-sm font-body text-muted-foreground"
                >
                  Customer Support
                </Link>
                <Link
                  href="/delivery"
                  className="block text-sm font-body text-muted-foreground"
                >
                  Delivery Details
                </Link>
                <Link
                  href="/terms"
                  className="block text-sm font-body text-muted-foreground"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/policy"
                  className="block text-sm font-body text-muted-foreground"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-body mb-4">FAQ</h4>
              <div className="space-y-2">
                <Link
                  href="/account"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Account
                </Link>
                <Link
                  href="/deliveries"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Manage Deliveries
                </Link>
                <Link
                  href="/orders"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Orders
                </Link>
                <Link
                  href="/payments"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Payments
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-body mb-4">RESOURCES</h4>
              <div className="space-y-2">
                <Link
                  href="/free-books"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Free eBooks
                </Link>
                <Link
                  href="/documentation"
                  className="block font-body text-sm text-muted-foreground"
                >
                  Development Tutorial
                </Link>
                <Link
                  href="/blogs"
                  className="block text-sm font-body text-muted-foreground"
                >
                  How to - Blog
                </Link>
                <Link
                  href="/videos"
                  className="block text-sm font-body text-muted-foreground"
                >
                  Youtube Playlist
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container mx-auto py-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              SHOP.CO © 2000-2023, All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Image src="/img13.png" alt="Visa" width={32} height={20} />
              <Image src="/img14.png" alt="Mastercard" width={32} height={20} />
              <Image src="/img15.png" alt="PayPal" width={32} height={20} />
              <Image src="/img16.png" alt="ApplePay" width={32} height={20} />
              <Image src="/img17.png" alt="GooglePay" width={32} height={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
