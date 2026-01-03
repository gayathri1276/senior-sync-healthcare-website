import { Card } from "@/components/ui/card"
import { Settings, Bell, CheckCircle2, MessageSquare } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Caregiver Sets Schedule",
    description:
      "Family members or nurses set up the medication schedule remotely through a simple web dashboard. No technical knowledge required.",
  },
  {
    number: "02",
    icon: Bell,
    title: "Senior Receives Reminders",
    description:
      "At the right time, seniors get clear visual and audible reminders on their device. Loud, clear, and impossible to miss.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "One-Tap Confirmation",
    description: 'Senior taps one large "Confirm Taken" button. That\'s it. No menus, no complexity, no confusion.',
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Automatic Alert (If Needed)",
    description:
      "If a dose is missed, caregivers are automatically notified. Otherwise, everything is silent - no unnecessary anxiety.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How SeniorSync Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four simple steps to ensure medication compliance and peace of mind for everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 bg-card border-2 border-border hover:border-primary/30 transition-colors h-full">
                <div className="space-y-6">
                  {/* Step Number */}
                  <div className="flex items-start gap-6">
                    <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>

              {/* Connector Line (hidden on last item in each column) */}
              {index < steps.length - 2 && (
                <div className="hidden md:block absolute left-1/2 -bottom-8 w-0.5 h-8 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
