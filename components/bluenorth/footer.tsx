"use client"

import Link from "next/link"
import { Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const navigation = {
  platform: [
    { name: "Supply Chain Analytics", href: "#supply-chain" },
    { name: "Retail Analytics", href: "#retail" },
    { name: "Control Tower", href: "#perform" },
    { name: "Probe - Diagnostics", href: "#probe" },
    { name: "Plan - Optimization", href: "#plan" },
    { name: "Perform - Execution", href: "#perform" },
  ],
  solutions: [
    { name: "Network Optimization", href: "#" },
    { name: "Inventory Optimization", href: "#" },
    { name: "Demand Forecasting", href: "#" },
    { name: "Pricing Analytics", href: "#" },
    { name: "Assortment Planning", href: "#" },
    { name: "S&OP Excellence", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image src="/logo.png" alt="BlueNorth AI" fill className="object-contain" />
              </div>
              <div className="relative h-8 w-auto flex-shrink-0">
                <Image src="/Bluenorthai.png" alt="BlueNorth AI" width={80} height={80} className="object-contain h-8 w-auto object-left-top" />
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              End-to-end Supply Chain & Retail Analytics Platform for Enterprises.
              ML models, optimization engines, simulation tools, and Gen AI-powered agents.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@bluenorth-ai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (800) BLUENORTH</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold">Platform</h3>
            <ul className="mt-4 space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlueNorth AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
