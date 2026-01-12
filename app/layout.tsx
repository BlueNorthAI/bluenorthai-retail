import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/bluenorth"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BlueNorth AI | End-to-End Supply Chain & Retail Analytics Platform",
  description:
    "Transform your supply chain and retail operations with AI-powered analytics. ML models, optimization engines, simulation tools, and Gen AI-powered agents for enterprise analytics.",
  keywords: [
    "supply chain analytics",
    "retail analytics",
    "AI supply chain",
    "demand forecasting",
    "inventory optimization",
    "pricing optimization",
    "S&OP",
    "network optimization"
  ],
  authors: [{ name: "BlueNorth AI" }],
  openGraph: {
    title: "BlueNorth AI | Supply Chain & Retail Analytics Platform",
    description: "End-to-end analytics platform combining ML, optimization, simulation, and Gen AI for enterprise supply chain and retail operations.",
    type: "website",
    locale: "en_US",
    siteName: "BlueNorth AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueNorth AI | Supply Chain & Retail Analytics",
    description: "Transform your operations with AI-powered analytics. 200%+ ROI guaranteed.",
    creator: "@bluenorth_ai",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${lexend.variable} antialiased`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
