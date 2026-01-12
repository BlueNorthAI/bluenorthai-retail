"use client"

import { TrendingUp, CheckCircle, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const impactMetrics = [
  {
    category: "Cost Reduction",
    metrics: [
      { label: "Warehousing Costs", value: "40%", description: "reduction in operational costs" },
      { label: "Transportation Costs", value: "35%", description: "savings through route optimization" },
      { label: "Inventory Holding", value: "38%", description: "reduction in carrying costs" },
      { label: "Administrative", value: "7%", description: "cost reduction through automation" }
    ]
  },
  {
    category: "Performance Improvement",
    metrics: [
      { label: "Forecast Accuracy", value: "95%", description: "prediction accuracy" },
      { label: "Service Levels", value: "+35%", description: "improvement in customer service" },
      { label: "Fill Rates", value: "+18%", description: "improvement in order fulfillment" },
      { label: "Productivity", value: "+12%", description: "operational efficiency gain" }
    ]
  },
  {
    category: "Return on Investment",
    metrics: [
      { label: "Network Optimization", value: "200%+", description: "ROI on implementation" },
      { label: "Inventory Optimization", value: "220%", description: "return on analytics investment" },
      { label: "S&OP Implementation", value: "180%", description: "ROI from process improvement" },
      { label: "Retail Analytics", value: "250%", description: "return from category management" }
    ]
  }
]

const testimonials = [
  {
    quote: "BlueNorth AI transformed our supply chain visibility. We went from firefighting daily issues to proactively preventing them.",
    author: "VP Supply Chain",
    company: "Fortune 500 Retailer",
    metric: "40% reduction in stockouts"
  },
  {
    quote: "The AI-powered recommendations have fundamentally changed how we make decisions. ROI exceeded our expectations within 6 months.",
    author: "Chief Operations Officer",
    company: "Global CPG Company",
    metric: "25% cost reduction"
  },
  {
    quote: "Finally, a platform that integrates our supply chain and retail analytics. The unified view is game-changing.",
    author: "Director of Analytics",
    company: "Leading Grocery Chain",
    metric: "15% margin improvement"
  }
]

export function Results() {
  return (
    <section id="results" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Proven Results</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Measurable <span className="gradient-text-blue">Business Impact</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our clients consistently achieve significant improvements across cost, performance, and ROI metrics.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 space-y-12">
          {impactMetrics.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                {category.category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <div className="text-3xl font-bold gradient-text-blue">{metric.value}</div>
                    <div className="mt-1 font-medium">{metric.label}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">What Our Clients Say</h3>
            <p className="mt-2 text-muted-foreground">
              Hear from industry leaders who have transformed their operations
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative rounded-2xl border bg-card p-8 card-hover">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                <p className="text-lg leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-white">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold md:text-3xl">
                Ready to Achieve Similar Results?
              </h3>
              <p className="mt-2 text-white/80">
                Join leading enterprises transforming their supply chain and retail operations.
              </p>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 group rounded-full px-8">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
