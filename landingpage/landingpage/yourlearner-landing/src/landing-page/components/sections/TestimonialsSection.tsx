import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"
import { TestimonialCard } from "../shared/TestimonialCard"
import { Button } from "../ui/button"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Data Scientist",
    company: "Netflix",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "The interactive exercises made complex machine learning concepts finally click for me. I went from struggling with basic scripts to deploying full models.",
    beforeSkill: "Beginner",
    afterSkill: "Advanced",
  },
  {
    name: "Marcus Chen",
    role: "Backend Engineer",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=11",
    quote: "The AI tutor is a game-changer. It didn't just give me the answers; it guided me to understand the underlying Pythonic principles. Best investment in my career.",
    beforeSkill: "Intermediate",
    afterSkill: "Expert",
  },
  {
    name: "Elena Rodriguez",
    role: "Web Developer",
    company: "Meta",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "I transitioned from frontend to full-stack because of YourLearner. The Django and FastAPI modules are the most practical, real-world focused tutorials I've ever seen.",
    beforeSkill: "Novice",
    afterSkill: "Senior",
  },
  {
    name: "David Kim",
    role: "Quant Analyst",
    company: "Citadel",
    avatar: "https://i.pravatar.cc/150?img=8",
    quote: "The pandas and numpy tracks are incredibly thorough. I recommend this platform to all new hires on my team. It saves us weeks of onboarding.",
    beforeSkill: "Intermediate",
    afterSkill: "Advanced",
  }
]

export function TestimonialsSection() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30 border-y border-border overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader 
            title="Loved by Learners Worldwide"
            subtitle="Don't just take our word for it. See how we've helped thousands transform their careers."
            align="left"
          />
          {/* We hide manual controls on desktop in favor of drag, but they can be added if needed */}
          <div className="hidden md:flex gap-2 mb-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Carousel */}
      <div className="pl-4 sm:pl-6 lg:pl-8 ml-auto max-w-7xl">
        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 pr-4 sm:pr-6 lg:pr-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
