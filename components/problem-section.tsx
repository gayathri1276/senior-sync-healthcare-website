import { Card } from "@/components/ui/card"
import { AlertCircle, Smartphone, Clock, HeartPulse } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Memory Loss & Cognitive Decline",
    description:
      "Seniors often forget to take medications or accidentally take double doses, leading to serious health risks.",
  },
  {
    icon: Smartphone,
    title: "Apps Too Complex",
    description:
      "Existing medication apps have tiny buttons, confusing menus, and overwhelming interfaces that seniors struggle to use.",
  },
  {
    icon: AlertCircle,
    title: "Caregiver Anxiety",
    description:
      "Family members worry constantly without real-time visibility into whether medications are being taken correctly.",
  },
  {
    icon: HeartPulse,
    title: "Serious Health Consequences",
    description:
      "Missed or incorrect medication doses can lead to hospital visits, health complications, and preventable emergencies.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Challenges Seniors & Families Face
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Managing medications shouldn't be stressful. But for millions of elderly individuals and their loved ones,
            it is.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 bg-card border-2 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <problem.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{problem.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
