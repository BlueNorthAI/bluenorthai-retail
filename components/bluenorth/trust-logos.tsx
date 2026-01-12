"use client"

import { Shield, Award, Users } from "lucide-react"

const trustedByLogos = [
  { name: "Fortune 500 Retailers", count: "50+" },
  { name: "Global CPG Companies", count: "30+" },
  { name: "Distribution Networks", count: "100+" },
  { name: "Countries Served", count: "25+" }
]

const recognitions = [
  {
    title: "Gartner Magic Quadrant",
    description: "Leader in Supply Chain Planning",
    year: "2024"
  },
  {
    title: "Nucleus Research",
    description: "ROI Award Winner",
    year: "2024"
  },
  {
    title: "IDC MarketScape",
    description: "Leader in Retail Analytics",
    year: "2024"
  }
]

export function TrustLogos() {
  return (
    <section className="relative py-16 border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trusted By Stats */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustedByLogos.map((item) => (
            <div key={item.name} className="text-center">
              <div className="text-4xl font-bold gradient-text-blue">{item.count}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.name}</div>
            </div>
          ))}
        </div>

        {/* Recognition Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title}
              className="flex items-center gap-4 rounded-xl border bg-card px-6 py-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{recognition.title}</div>
                <div className="text-sm text-muted-foreground">
                  {recognition.description} • {recognition.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>ISO 27001 Compliant</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>GDPR Ready</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>24/7 Enterprise Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
