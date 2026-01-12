"use client"

import {
  Package,
  Warehouse,
  Truck,
  Boxes,
  Network,
  Factory,
  Users,
  GitBranch,
  TrendingUp,
  ArrowRight,
  Eye,
  BarChart3,
  Sparkles,
  Rocket
} from "lucide-react"
import { Button } from "@/components/ui/button"

const probeFeatures = [
  {
    title: "Order Management",
    description: "Improve order fulfillment, reduce costs, and increase productivity across your order lifecycle.",
    icon: Package,
    metrics: [
      { label: "Cost Reduction", value: "30%" },
      { label: "Productivity", value: "+12%" },
      { label: "Accuracy", value: "95%" }
    ]
  },
  {
    title: "Warehousing",
    description: "Optimize space utilization, enhance picking and packing operations, and reduce operational costs.",
    icon: Warehouse,
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Accuracy", value: "94%" },
      { label: "Utilization", value: "+25%" }
    ]
  },
  {
    title: "Transportation",
    description: "Route optimization, carrier performance analysis, and reduce empty miles for logistics excellence.",
    icon: Truck,
    metrics: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Empty Miles", value: "-20%" },
      { label: "Accuracy", value: "92%" }
    ]
  },
  {
    title: "Inventory Diagnostics",
    description: "Identify root causes of inventory issues with visibility across all locations and channels.",
    icon: Boxes,
    metrics: [
      { label: "Visibility", value: "100%" },
      { label: "Root Cause", value: "Real-time" },
      { label: "Alerts", value: "Automated" }
    ]
  }
]

const planFeatures = [
  {
    title: "Network Optimization",
    description: "Design optimal facility locations, types, and flows to maximize ROI and reduce logistics costs.",
    icon: Network,
    metrics: [
      { label: "ROI", value: "200%+" },
      { label: "Logistics Cost", value: "-25%" },
      { label: "Service Level", value: "+30%" }
    ]
  },
  {
    title: "Production Planning",
    description: "Reduce changeover time, optimize scheduling, and minimize inventory holding costs.",
    icon: Factory,
    metrics: [
      { label: "Changeover", value: "-18%" },
      { label: "Schedule Time", value: "-42%" },
      { label: "Inventory", value: "-29%" }
    ]
  },
  {
    title: "S&OP Excellence",
    description: "Cross-functional collaboration, scenario analysis, and faster consensus building.",
    icon: Users,
    metrics: [
      { label: "Margins", value: "+12%" },
      { label: "Consensus", value: "+40%" },
      { label: "Cycle Time", value: "-35%" }
    ]
  },
  {
    title: "Distribution Planning",
    description: "Optimized replenishment, improved fill rates, and reduced lead times across the network.",
    icon: GitBranch,
    metrics: [
      { label: "Fill Rate", value: "+18%" },
      { label: "Lead Time", value: "-25%" },
      { label: "Transport Cost", value: "-22%" }
    ]
  }
]

const performFeatures = [
  {
    title: "Gen AI Control Tower",
    description: "Real-time monitoring with end-to-end visibility, automated alerts, and AI-powered recommendations.",
    icon: Eye,
    metrics: [
      { label: "Revenue Lift", value: "+15%" },
      { label: "Visibility", value: "100%" },
      { label: "Response Time", value: "Real-time" }
    ]
  },
  {
    title: "Cascaded KPI Scorecard",
    description: "Multi-level performance tracking from executive to operational metrics with goal alignment.",
    icon: BarChart3,
    metrics: [
      { label: "Admin Cost", value: "-7%" },
      { label: "Annual Savings", value: "10%" },
      { label: "Service", value: "+35%" }
    ]
  },
  {
    title: "Exception Management",
    description: "Intelligent exception detection with prioritized alerts based on business impact.",
    icon: Sparkles,
    metrics: [
      { label: "Detection", value: "Automated" },
      { label: "Priority", value: "AI-ranked" },
      { label: "Resolution", value: "-60%" }
    ]
  },
  {
    title: "Execution Intelligence",
    description: "Translate strategy into action with automated recommendations and action tracking.",
    icon: Rocket,
    metrics: [
      { label: "Execution", value: "Automated" },
      { label: "Tracking", value: "Real-time" },
      { label: "ROI", value: "220%" }
    ]
  }
]

export function SupplyChainFeatures() {
  return (
    <section id="supply-chain" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Supply Chain Analytics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            End-to-End <span className="gradient-text-blue">Supply Chain</span> Intelligence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive analytics covering every aspect of your supply chain operations, from diagnostics through optimization to execution.
          </p>
        </div>

        {/* PROBE Features */}
        <div className="mt-16" id="probe">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <span className="text-sm font-bold">P</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Probe</h3>
              <p className="text-sm text-muted-foreground">Diagnostic Analytics</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {probeFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="feature-card group">
                  <div className="icon-wrapper mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>

                  <div className="mt-6 space-y-3">
                    {feature.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="text-sm font-bold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* PLAN Features */}
        <div className="mt-20" id="plan">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-white">
              <span className="text-sm font-bold">P</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Plan</h3>
              <p className="text-sm text-muted-foreground">Optimization Analytics</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {planFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="feature-card group">
                  <div className="icon-wrapper mb-4" style={{ background: 'linear-gradient(135deg, var(--secondary), var(--accent))' }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>

                  <div className="mt-6 space-y-3">
                    {feature.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="text-sm font-bold text-secondary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* PERFORM Features */}
        <div className="mt-20" id="perform">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
              <span className="text-sm font-bold">P</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Perform</h3>
              <p className="text-sm text-muted-foreground">Execution Analytics</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {performFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="feature-card group">
                  <div className="icon-wrapper mb-4" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>

                  <div className="mt-6 space-y-3">
                    {feature.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="text-sm font-bold text-accent">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="btn-gradient group rounded-full px-8">
            Explore Supply Chain Solutions
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
