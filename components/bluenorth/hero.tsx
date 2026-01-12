"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, BarChart3, Brain, Zap } from "lucide-react"
import { CalendlyButton } from "../calendly-button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 h-20 w-20 rounded-2xl bg-primary/10 float-animation" style={{ animationDelay: "0s" }} />
      <div className="absolute top-48 right-20 h-16 w-16 rounded-full bg-secondary/10 float-animation" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 h-12 w-12 rounded-xl bg-accent/10 float-animation" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-2">
        <div className="mx-auto max-w-7xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Supply Chain & Retail Analytics</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="gradient-text-blue">Transform</span> Your Supply Chain
            <br />
            <span className="text-foreground">& Retail Operations with</span>
            <br />
            <span className="text-highlight">Intelligent Analytics</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            End-to-end platform combining <span className="font-semibold text-foreground">ML models</span>,
            <span className="font-semibold text-foreground"> optimization engines</span>,
            <span className="font-semibold text-foreground"> simulation tools</span>, and
            <span className="font-semibold text-foreground"> Gen AI-powered agents</span> for enterprise analytics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalendlyButton
              size="lg"
              className="group h-14 w-full rounded-full px-8 text-base sm:w-auto"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CalendlyButton>
           
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-2 px-8 text-base sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Overview
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <span>25B+ AI Predictions Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                <Brain className="h-4 w-4 text-secondary" />
              </div>
              <span>Enterprise-Grade ML</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <span>Real-Time Optimization</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="metric-card text-center">
            <div className="text-4xl font-bold text-primary sm:text-5xl">200%+</div>
            <div className="mt-2 text-sm text-muted-foreground">Average ROI</div>
          </div>
          <div className="metric-card text-center">
            <div className="text-4xl font-bold text-secondary sm:text-5xl">40%</div>
            <div className="mt-2 text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="metric-card text-center">
            <div className="text-4xl font-bold text-accent sm:text-5xl">95%</div>
            <div className="mt-2 text-sm text-muted-foreground">Forecast Accuracy</div>
          </div>
          <div className="metric-card text-center">
            <div className="text-4xl font-bold text-primary sm:text-5xl">35%</div>
            <div className="mt-2 text-sm text-muted-foreground">Service Improvement</div>
          </div>
        </div>
      </div>
    </section>
  )
}
