import {
  Hero,
  PlatformOverview,
  SupplyChainFeatures,
  RetailFeatures,
  ControlTower,
  Results,
  TrustLogos,
  CTA,
  Footer
} from "@/components/bluenorth"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Main value proposition */}
      <Hero />

      {/* Trust Logos - Social proof
      <TrustLogos /> */}

      {/* Platform Overview - Three Pillar Framework */}
      <PlatformOverview />
           {/* Retail Analytics Features */}
      <RetailFeatures />

      {/* Supply Chain Analytics Features */}
      <SupplyChainFeatures />

   
      {/* Gen AI Control Tower & Scorecard */}
      <ControlTower />

      {/* Results & Testimonials */}
      <Results />

      {/* Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
