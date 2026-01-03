import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-base font-medium text-accent">Trusted by thousands of families</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Never Miss a Dose. Peace of Mind for Families.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              SeniorSync helps seniors take their medicines on time and automatically informs caregivers only when
              attention is needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-xl px-8 py-8 h-auto">
                See How It Works
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-8 h-auto bg-transparent">
                Request a Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-muted border-2 border-background" />
                ))}
              </div>
              <div className="text-base text-muted-foreground">
                <p className="font-semibold text-foreground">10,000+ families</p>
                <p>using SeniorSync daily</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl">
              <img src="/elderly-person-smiling-while-looking-at-large-tabl.jpg" alt="Senior using SeniorSync app" className="w-full h-auto" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">99.8%</p>
                  <p className="text-sm text-muted-foreground">Dose compliance rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
