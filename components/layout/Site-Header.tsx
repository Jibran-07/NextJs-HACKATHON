import { ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "./Main-Nav"
import { ThemeToggle } from "./Theme-Toggle"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="relative w-[550px]"> 
              
              <div className="absolute left-4 top-0 h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-11 pr-8 rounded-[50px] bg-[#F0F0F0]"  
              />
            </div>
            <Link href="/cart">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            </Link>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
