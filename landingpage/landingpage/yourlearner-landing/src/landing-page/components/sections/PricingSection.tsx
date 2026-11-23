import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for exploring the platform and learning basics.",
    features: [
      "Basic Python lessons",
      "Community forum access",
      "Mobile app access",
      "Basic progress tracking"
    ],
    limitations: [
      "No AI Tutor",
      "No real-world projects",
      "No certificate of completion"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "Everything you need to master Python and get hired.",
    features: [
      "All Python courses & lessons",
      "24/7 AI-Powered Tutor",
      "Real-world portfolio projects",
      "Advanced analytics & tracking",
      "Certificate of completion",
      "Priority community support"
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "For teams and organizations looking to upskill.",
    features: [
      "Everything in Pro",
      "Team analytics dashboard",
      "Custom learning paths",
      "Dedicated success manager",
      "SSO & advanced security",
      "API access"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative z-10">
      <Container>
        <SectionHeader 
          title="Invest in Your Future"
          subtitle="Simple, transparent pricing. Cancel anytime."
        />

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-muted p-1 rounded-full flex items-center relative">
            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 20%</span>
            </button>
            
            {/* Sliding Background */}
            <motion.div 
              className="absolute top-1 bottom-1 w-[45%] bg-background rounded-full shadow-sm"
              animate={{ left: isYearly ? '50%' : '4px', width: isYearly ? '48%' : '48%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-3xl p-8 border ${
                tier.popular 
                  ? "border-primary shadow-2xl shadow-primary/10 md:scale-105 z-10" 
                  : "border-border shadow-sm"
              } flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="px-3 py-1 text-xs uppercase tracking-wider bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {typeof tier.monthlyPrice === "number" ? (
                    <>
                      <span className="text-4xl font-extrabold text-foreground">
                        ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold text-foreground">{tier.monthlyPrice}</span>
                  )}
                </div>
                {typeof tier.monthlyPrice === "number" && typeof tier.yearlyPrice === "number" && isYearly && tier.monthlyPrice > 0 && (
                  <p className="text-emerald-500 text-sm font-medium mt-2">
                    Billed ${tier.yearlyPrice * 12} yearly
                  </p>
                )}
                {typeof tier.monthlyPrice === "number" && !isYearly && tier.monthlyPrice > 0 && (
                  <p className="text-transparent text-sm font-medium mt-2 select-none">
                    Spacer
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {tier.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                asChild
              >
                <Link to="/signup">{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
