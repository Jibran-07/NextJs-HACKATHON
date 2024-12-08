'use client'
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navItems = [
  { title: "On Sale", href: "/on-sale" },
  { title: "New Arrivals", href: "/new-arrivals" },
  { title: "Brands", href: "/brands" },
];

const shopDropdownItems = [
  { title: "Men", href: "/shop/men" },
  { title: "Women", href: "/shop/women" },
  { title: "Kids", href: "/shop/kids" },
  { title: "Accessories", href: "/shop/accessories" },
];

export function MainNav() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="flex gap-6 md:gap-10 pl-[100px]">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-heading">SHOP.CO</span>
      </Link>
      <nav className="flex gap-6 relative">
        {/* Shop Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center text-sm font-medium text-body">
            Shop
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
              {shopDropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Other Nav Items */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium text-body",
              item.href === "/" && "text-primary"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}