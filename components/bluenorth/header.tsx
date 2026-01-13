"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  BarChart3,
  ShoppingCart,
  Cpu,
  Target,
  Search,
  Rocket
} from "lucide-react"

const navItems = [
  {
    name: "Platform",
    href: "#platform",
    children: [
      { name: "Probe - Diagnostics", href: "#probe", icon: Search, description: "Analyze past and present performance" },
      { name: "Plan - Optimization", href: "#plan", icon: Target, description: "Data-driven decision making" },
      { name: "Perform - Execution", href: "#perform", icon: Rocket, description: "Strategy to action" },
    ]
  },
  {
    name: "Supply Chain",
    href: "#supply-chain",
    children: [
      { name: "Order Management", href: "#supply-chain", icon: BarChart3, description: "Improve order fulfillment" },
      { name: "Warehousing", href: "#supply-chain", icon: BarChart3, description: "Optimize operations" },
      { name: "Transportation", href: "#supply-chain", icon: BarChart3, description: "Route optimization" },
      { name: "Network Optimization", href: "#supply-chain", icon: BarChart3, description: "Facility planning" },
    ]
  },
  {
    name: "Retail",
    href: "#retail",
    children: [
      { name: "Demand Forecasting", href: "#retail", icon: ShoppingCart, description: "ML-based predictions" },
      { name: "Pricing Optimization", href: "#retail", icon: ShoppingCart, description: "Price elasticity modeling" },
      { name: "Assortment Planning", href: "#retail", icon: ShoppingCart, description: "Data-driven SKU decisions" },
      { name: "Promo Effectiveness", href: "#retail", icon: ShoppingCart, description: "ROI measurement" },
    ]
  },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#cta" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const scrollToSection = (href: string) => {
    if (href && href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image src="/logo.png" alt="BlueNorth AI" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-auto flex-shrink-0">
              <Image src="/Bluenorthai.png" alt="BlueNorth AI" width={80} height={80} className="object-contain h-8 w-auto object-left-top" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-72 rounded-xl border bg-card shadow-xl p-2">
                      {item.children.map((child) => {
                        const Icon = child.icon
                        return (
                          <button
                            key={child.name}
                            onClick={() => scrollToSection(child.href)}
                            className="flex items-start gap-3 w-full p-3 rounded-lg hover:bg-muted/50 text-left transition-colors"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{child.name}</div>
                              <div className="text-xs text-muted-foreground">{child.description}</div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://winter-pricing-engine.vercel.app/sign-in">
              <Button variant="ghost" size="sm" className="text-sm">
                Sign In
              </Button>
            </Link>
            <CalendlyButton
              size="sm"
              className="btn-gradient group rounded-full px-6"
            >
              Request Demo
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </CalendlyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.children) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      } else {
                        scrollToSection(item.href)
                      }
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => scrollToSection(child.href)}
                          className="block w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground text-left rounded-lg hover:bg-muted/50"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="https://winter-pricing-engine.vercel.app/sign-in">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              </Link>
              <CalendlyButton className="btn-gradient w-full">
                Request Demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </CalendlyButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
