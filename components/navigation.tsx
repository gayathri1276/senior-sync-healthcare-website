import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navigation() {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground text-2xl font-bold">S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">SeniorSync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-lg text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-lg text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#contact" className="text-lg text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="lg" className="text-lg px-6 py-6">
              Request a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="lg" className="md:hidden">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
