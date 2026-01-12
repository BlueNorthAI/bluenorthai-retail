"use client"

import {
  Eye,
  Bell,
  Cpu,
  BarChart3,
  Gauge,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

const controlTowerFeatures = [
  {
    title: "Real-Time Monitoring",
    description: "End-to-end visibility across your entire supply chain with live dashboards and alerts.",
    icon: Eye
  },
  {
    title: "Automated Alerts",
    description: "Intelligent exception detection with prioritized alerts based on business impact.",
    icon: Bell
  },
  {
    title: "Gen AI Recommendations",
    description: "AI-powered agents that analyze situations and provide actionable recommendations.",
    icon: Sparkles
  },
  {
    title: "Predictive Insights",
    description: "Anticipate disruptions before they happen with ML-powered predictive analytics.",
    icon: Cpu
  }
]

const scorecardFeatures = [
  {
    title: "Cascaded KPIs",
    description: "Multi-level performance tracking from executive to operational metrics.",
    icon: BarChart3
  },
  {
    title: "Performance Benchmarking",
    description: "Compare performance across regions, categories, and time periods.",
    icon: Gauge
  },
  {
    title: "Goal Alignment",
    description: "Ensure organizational alignment with cascaded targets and accountability.",
    icon: Target
  },
  {
    title: "Action Tracking",
    description: "Track initiatives and their impact on key performance indicators.",
    icon: Zap
  }
]

export function ControlTower() {
  return (
    <section id="perform" className="relative py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Perform - Execution Analytics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text-blue">Gen AI</span> Control Tower
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform strategy into action with real-time monitoring, intelligent alerts, and AI-powered recommendations.
          </p>
        </div>

        {/* Control Tower Section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left - Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Intelligent Command Center</h3>
            <div className="space-y-6">
              {controlTowerFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4 p-4 rounded-xl border bg-card card-hover">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Visual Mockup */}
          <div className="relative rounded-2xl border-2 border-primary/20 bg-card p-6 lg:p-8">
            {/* Simulated Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Supply Chain Control Tower</h4>
                  <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-accent">Live</span>
              </div>
            </div>

            {/* Mock Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="rounded-xl bg-primary/5 p-4 text-center">
                <div className="text-2xl font-bold text-primary">98.5%</div>
                <div className="text-xs text-muted-foreground">OTIF Rate</div>
              </div>
              <div className="rounded-xl bg-secondary/5 p-4 text-center">
                <div className="text-2xl font-bold text-secondary">2.3M</div>
                <div className="text-xs text-muted-foreground">Orders Today</div>
              </div>
              <div className="rounded-xl bg-accent/5 p-4 text-center">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-xs text-muted-foreground">Active Alerts</div>
              </div>
            </div>

            {/* Mock AI Recommendation */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary">AI Recommendation</span>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                  <p className="text-sm">
                    Detected potential stockout risk for SKU-2847 in East region. Recommend expediting transfer from West DC.
                    <span className="text-primary font-medium cursor-pointer ml-1">Take Action →</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scorecard Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Cascaded KPI Scorecard</h3>
            <p className="mt-2 text-muted-foreground">
              Multi-level performance tracking with organizational alignment
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scorecardFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center p-6 rounded-2xl border bg-card card-hover">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-4">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Impact Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="metric-card text-center">
              <div className="text-3xl font-bold text-primary">7%</div>
              <div className="text-sm text-muted-foreground">Admin Cost Reduction</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-3xl font-bold text-secondary">10%</div>
              <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-3xl font-bold text-accent">35%</div>
              <div className="text-sm text-muted-foreground">Service Improvement</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
