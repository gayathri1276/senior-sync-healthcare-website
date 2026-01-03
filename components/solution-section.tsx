import { Card } from "@/components/ui/card"
import { CheckCircle2, Volume2, Bell, Shield, Smartphone, Users } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Oversized, Senior-Friendly Interface",
    description:
      "Extra-large buttons, high-contrast text, and simple navigation designed specifically for elderly users.",
  },
  {
    icon: CheckCircle2,
    title: "One-Tap Confirmation",
    description: 'Just one large "Confirm Taken" button. No complex menus, no confusion, no stress.',
  },
  {
    icon: Volume2,
    title: "Loud Audio + Vibration Alerts",
    description: "Impossible-to-miss reminders with clear sounds and vibration for those with hearing difficulties.",
  },
  {
    icon: Bell,
    title: "Smart Caregiver Alerts",
    description: "Family members are notified only when a dose is missed - no unnecessary noise or anxiety.",
  },
  {
    icon: Shield,
    title: "Fail-Safe Reliability",
    description: "Built with redundancy and reliability as top priorities. Your health matters.",
  },
  {
    icon: Users,
    title: "Remote Setup & Monitoring",
    description: "Caregivers can set schedules and monitor remotely without bothering their loved ones.",
  },
]

export function SolutionSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-base font-medium text-primary">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Introducing SeniorSync
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A medication reminder system built from the ground up for seniors and their caregivers. Simple, reliable,
            and reassuring.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
