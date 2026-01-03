import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Give Your Family Peace of Mind?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Join thousands of families who trust SeniorSync to keep their loved ones safe and healthy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Request a free demo and see how easy medication management can be. No credit card required.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="text-lg font-medium text-foreground">support@seniorsync.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-lg font-medium text-foreground">1-800-SENIOR-SYNC</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us</p>
                  <p className="text-lg font-medium text-foreground">123 Healthcare Blvd, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="p-8 bg-card border border-border shadow-xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium">
                  Full Name
                </Label>
                <Input id="name" placeholder="John Smith" className="text-base h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" className="text-base h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-medium">
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" className="text-base h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-medium">
                  Message (Optional)
                </Label>
                <Textarea id="message" placeholder="Tell us about your needs..." className="text-base min-h-32" />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Request a Demo
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours. No spam, ever.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
