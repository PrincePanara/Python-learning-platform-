import { Navbar } from "@/landing-page/components/layout/Navbar"
import { Footer } from "@/landing-page/components/layout/Footer"
import { HeroSection } from "@/landing-page/components/sections/HeroSection"
import { FeaturesSection } from "@/landing-page/components/sections/FeaturesSection"
import { LearningJourneySection } from "@/landing-page/components/sections/LearningJourneySection"
import { CodePlaygroundSection } from "@/landing-page/components/sections/CodePlaygroundSection"
import { GamificationSection } from "@/landing-page/components/sections/GamificationSection"
import { TestimonialsSection } from "@/landing-page/components/sections/TestimonialsSection"
import { PricingSection } from "@/landing-page/components/sections/PricingSection"
import { FAQSection } from "@/landing-page/components/sections/FAQSection"
import { CTASection } from "@/landing-page/components/sections/CTASection"
import { GlobalDecorators } from "@/landing-page/components/animations/GlobalDecorators"

function LandingPage() {
  return (
    <div className="min-h-screen bg-background bg-dot-pattern font-sans text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground relative">
      <GlobalDecorators />
      {/* Light theme enabled */}
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LearningJourneySection />
        <CodePlaygroundSection />
        <GamificationSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
