"use client"

import { ArrowRight, Calendar, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"

export function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grid-pattern" style={{ backgroundSize: '60px 60px' }} />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Transform Your
              <br />
              Supply Chain & Retail Operations?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Join leading enterprises that have achieved 200%+ ROI with our AI-powered analytics platform.
              Get started with a personalized demo today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CalendlyButton
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group h-14 rounded-full px-8 text-base font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </CalendlyButton>
            
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full px-8 text-base font-semibold border-white/30 text-blue-500 hover:bg-white/10"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>

            {/* Contact Options */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Live Chat Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Email: contact@bluenorth-ai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6 text-center card-hover">
            <h3 className="font-semibold">For Supply Chain Leaders</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See how to optimize your end-to-end supply chain operations
            </p>
            <Button variant="link" className="mt-4 text-primary">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center card-hover">
            <h3 className="font-semibold">For Retail Executives</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover AI-powered retail analytics for category growth
            </p>
            <Button variant="link" className="mt-4 text-primary">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center card-hover">
            <h3 className="font-semibold">For Technology Teams</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore our platform architecture and integration options
            </p>
            <Button variant="link" className="mt-4 text-primary">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
