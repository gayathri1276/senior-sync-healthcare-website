import { Card } from "@/components/ui/card"
import { Shield, Heart, Lock, Award } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Built on Trust, Reliability & Dignity
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                SeniorSync isn't surveillance. It's a support system that respects independence while providing safety
                and reassurance.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe seniors deserve technology that empowers them, not frustrates them. Every design decision
                prioritizes dignity, simplicity, and reliability.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card border border-border">
                <p className="text-4xl font-bold text-primary mb-2">99.8%</p>
                <p className="text-base text-muted-foreground">Compliance rate</p>
              </Card>
              <Card className="p-6 bg-card border border-border">
                <p className="text-4xl font-bold text-accent mb-2">10k+</p>
                <p className="text-base text-muted-foreground">Families helped</p>
              </Card>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "HIPAA-compliant with bank-level encryption. Your health data is protected.",
              },
              {
                icon: Heart,
                title: "Meaningful Alerts Only",
                description: "Caregivers are notified only when action is needed, not constantly bothered.",
              },
              {
                icon: Lock,
                title: "Privacy Respected",
                description: "No tracking, no surveillance. Just medication reminders and missed-dose alerts.",
              },
              {
                icon: Award,
                title: "Clinically Validated",
                description: "Tested with real seniors and healthcare professionals to ensure effectiveness.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
