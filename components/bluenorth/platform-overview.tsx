"use client"

import {
  Search,
  Target,
  Rocket,
  TrendingUp,
  Package,
  Truck,
  BarChart,
  LineChart,
  PieChart,
  Layers
} from "lucide-react"

const pillars = [
  {
    id: "probe",
    title: "Probe",
    subtitle: "Diagnostic Analytics",
    description: "Analyze past and present performance to identify inefficiencies, root causes, and opportunities across your supply chain operations.",
    icon: Search,
    color: "primary",
    features: [
      "Order Management Analysis",
      "Warehousing Diagnostics",
      "Transportation Performance",
      "Inventory Root Cause Analysis"
    ],
    metrics: { label: "Visibility", value: "360°" }
  },
  {
    id: "plan",
    title: "Plan",
    subtitle: "Optimization Analytics",
    description: "Make data-driven decisions with advanced modeling, simulation, and optimization to design your ideal supply chain network.",
    icon: Target,
    color: "secondary",
    features: [
      "Network Optimization",
      "Production Planning",
      "S&OP Excellence",
      "Inventory Optimization"
    ],
    metrics: { label: "ROI", value: "200%+" }
  },
  {
    id: "perform",
    title: "Perform",
    subtitle: "Execution Analytics",
    description: "Translate strategy into action with real-time monitoring, automated alerts, and Gen AI-powered recommendations.",
    icon: Rocket,
    color: "accent",
    features: [
      "Gen AI Control Tower",
      "Cascaded KPI Scorecard",
      "Exception Management",
      "Automated Recommendations"
    ],
    metrics: { label: "Efficiency", value: "+35%" }
  }
]

export function PlatformOverview() {
  return (
    <section id="platform" className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Three-Pillar Framework</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From <span className="gradient-text-blue">Insight</span> to <span className="gradient-text-green">Action</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our comprehensive framework takes you from diagnostic analysis through optimization planning to execution excellence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className={`pillar-card ${pillar.id} group`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-${pillar.color} text-${pillar.color}-foreground text-sm font-bold"
                  style={{
                    background: pillar.color === 'primary' ? 'var(--primary)' :
                               pillar.color === 'secondary' ? 'var(--secondary)' : 'var(--accent)',
                    color: 'white'
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${
                      pillar.color === 'primary' ? 'var(--primary)' :
                      pillar.color === 'secondary' ? 'var(--secondary)' : 'var(--accent)'
                    } 0%, ${
                      pillar.color === 'primary' ? 'var(--secondary)' :
                      pillar.color === 'secondary' ? 'var(--accent)' : 'var(--primary)'
                    } 100%)`
                  }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{pillar.subtitle}</p>
                <p className="mt-4 text-muted-foreground">{pillar.description}</p>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: pillar.color === 'primary' ? 'var(--primary)' :
                                     pillar.color === 'secondary' ? 'var(--secondary)' : 'var(--accent)',
                          opacity: 0.1
                        }}
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{
                            background: pillar.color === 'primary' ? 'var(--primary)' :
                                       pillar.color === 'secondary' ? 'var(--secondary)' : 'var(--accent)'
                          }}
                        />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metric Badge */}
                <div className="mt-8 flex items-center justify-between rounded-xl bg-muted/50 p-4">
                  <span className="text-sm text-muted-foreground">{pillar.metrics.label}</span>
                  <span
                    className="text-2xl font-bold"
                    style={{
                      color: pillar.color === 'primary' ? 'var(--primary)' :
                             pillar.color === 'secondary' ? 'var(--secondary)' : 'var(--accent)'
                    }}
                  >
                    {pillar.metrics.value}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connection Lines (Visual) */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span>Diagnose</span>
          </div>
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-3 w-3 rounded-full bg-secondary" />
            <span>Optimize</span>
          </div>
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <span>Execute</span>
          </div>
        </div>
      </div>
    </section>
  )
}
