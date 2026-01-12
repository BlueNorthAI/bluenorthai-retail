"use client"

import {
  LayoutGrid,
  DollarSign,
  Megaphone,
  TrendingUp,
  LayoutPanelTop,
  RefreshCw,
  ShoppingCart,
  ArrowRight,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"

const retailFeatures = [
  {
    title: "Range & Assortment",
    description: "Data-driven SKU decisions with category profit lift and inventory efficiency optimization.",
    icon: LayoutGrid,
    metrics: [
      { label: "Category Profit", value: "+15-25%" },
      { label: "SKU Rationalization", value: "20-30%" },
      { label: "Inventory Efficiency", value: "+18%" }
    ],
    color: "accent"
  },
  {
    title: "Pricing Optimization",
    description: "Price elasticity modeling, competitive intelligence, and markdown optimization.",
    icon: DollarSign,
    metrics: [
      { label: "Margin Improvement", value: "8-15%" },
      { label: "Revenue Growth", value: "5-10%" },
      { label: "Price Accuracy", value: "95%" }
    ],
    color: "accent"
  },
  {
    title: "Promo Effectiveness",
    description: "True incremental lift measurement, cannibalization quantification, and halo effect analysis.",
    icon: Megaphone,
    metrics: [
      { label: "Promo ROI", value: "+25-40%" },
      { label: "Forecast Accuracy", value: "90%+" },
      { label: "Lift Measurement", value: "Real-time" }
    ],
    color: "accent"
  },
  {
    title: "Demand Forecasting",
    description: "ML-based forecasting with seasonality, promotional impact, and external signals at store-SKU level.",
    icon: TrendingUp,
    metrics: [
      { label: "Accuracy", value: "85-95%" },
      { label: "Stockout Reduction", value: "30-50%" },
      { label: "Granularity", value: "Store-SKU" }
    ],
    color: "accent"
  },
  {
    title: "Micro-Space Optimization",
    description: "Shelf space allocation, facing optimization, and planogram compliance monitoring.",
    icon: LayoutPanelTop,
    metrics: [
      { label: "Sales/Linear Ft", value: "+12-18%" },
      { label: "OOS Reduction", value: "25-35%" },
      { label: "Compliance", value: "Real-time" }
    ],
    color: "accent"
  },
  {
    title: "Replenishment Analytics",
    description: "Automated store orders, service level optimization, and safety stock calculation.",
    icon: RefreshCw,
    metrics: [
      { label: "On-Shelf", value: "97-99%" },
      { label: "Cost Reduction", value: "20-30%" },
      { label: "Automation", value: "100%" }
    ],
    color: "accent"
  }
]

export function RetailFeatures() {
  return (
    <section id="retail" className="relative py-24 gradient-bg-green">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <ShoppingCart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Retail Analytics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Complete <span className="gradient-text-green">Retail</span> Intelligence Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From assortment planning to in-store execution, optimize every aspect of your retail operations with AI-powered analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {retailFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="feature-card group">
                <div
                  className="icon-wrapper mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>

                <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-muted/50 p-4">
                  {feature.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-2xl border-2 border-accent/20 bg-card p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold md:text-3xl">
                Ready to Transform Your <span className="text-accent">Retail Operations</span>?
              </h3>
              <p className="mt-2 text-muted-foreground">
                See how leading retailers are achieving 15-25% category profit lift with our analytics platform.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-accent hover:bg-accent/90 group rounded-full px-8 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-accent text-accent hover:bg-accent/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
