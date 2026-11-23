import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Target, BookOpen, Code, Award, Check } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"

const steps = [
  {
    icon: Target,
    title: "Assess",
    description: "Take a quick skill assessment to find your perfect starting point, whether you're a total beginner or an intermediate coder.",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Master Python fundamentals through bite-sized, interactive lessons designed to make complex concepts easy to grasp.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Apply your knowledge immediately by building real-world projects, from web scrapers to machine learning models.",
  },
  {
    icon: Award,
    title: "Master",
    description: "Get certified, join our global alumni network, and land your dream job with interview prep and portfolio reviews.",
  },
]

export function LearningJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Map progress to height (mobile) and width (desktop)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="journey" className="bg-muted/30 border-y border-border">
      {/* Outer container provides scroll height */}
      <div ref={containerRef} className="h-[300vh] relative">
        
        {/* Sticky container stays on screen while user scrolls through the 300vh */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-20">
          <Container>
            <SectionHeader 
              title="Your Path to Python Mastery"
              subtitle="Scroll down to follow a proven, structured curriculum designed to guarantee your success."
            />

            <div className="relative mt-16 md:mt-24 h-[60vh] md:h-auto max-w-4xl mx-auto flex items-center justify-center">
              
              {/* Background Line (Empty State) */}
              <div className="absolute top-0 bottom-0 left-10 md:left-0 md:right-0 md:top-1/2 md:bottom-auto w-1 md:w-full md:h-1 bg-border rounded-full -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2" />
              
              {/* Animated Progress Line */}
              <motion.div 
                className="absolute top-0 bottom-auto left-10 md:left-0 md:right-auto md:top-1/2 md:bottom-auto w-1 md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-primary via-primary to-secondary rounded-full -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 origin-top md:origin-left z-0"
                style={{ 
                  height: "var(--line-height)",
                  width: "var(--line-width)" 
                } as any}
                // We use a neat trick to map motion values to CSS variables for responsive handling
              >
                <motion.style>{`
                  @media (min-width: 768px) {
                    .bg-gradient-to-r {
                      width: ${lineWidth.get()} !important;
                      height: 4px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .bg-gradient-to-b {
                      height: ${lineHeight.get()} !important;
                      width: 4px !important;
                    }
                  }
                `}</motion.style>
              </motion.div>

              <div className="flex flex-col md:flex-row justify-between w-full h-full md:h-auto gap-8 md:gap-4 relative z-10 pl-24 md:pl-0">
                {steps.map((step, index) => {
                  const stepProgressStart = index / (steps.length - 1) - 0.15;
                  const stepProgressEnd = index / (steps.length - 1) + 0.15;
                  
                  // Compute visual states driven purely by scroll progress
                  const opacity = useTransform(
                    smoothProgress,
                    [stepProgressStart - 0.2, stepProgressStart, stepProgressEnd, stepProgressEnd + 0.2],
                    [0.4, 1, 1, 0.4]
                  )
                  
                  const scale = useTransform(
                    smoothProgress,
                    [stepProgressStart - 0.1, stepProgressStart, stepProgressEnd, stepProgressEnd + 0.1],
                    [0.9, 1.1, 1.1, 0.9]
                  )

                  const isCompleted = useTransform(smoothProgress, (p) => p > stepProgressEnd)
                  const isActive = useTransform(smoothProgress, (p) => p >= stepProgressStart && p <= stepProgressEnd)

                  return (
                    <motion.div 
                      key={step.title}
                      style={{ opacity, scale }}
                      className="flex md:flex-col items-start md:items-center gap-4 md:gap-6 flex-1 relative"
                    >
                      {/* Step Node */}
                      <div className="relative flex-shrink-0 -ml-[72px] md:ml-0 mt-2 md:mt-0">
                        <motion.div 
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border-4 flex items-center justify-center relative z-10 shadow-xl transition-colors duration-300"
                          style={{
                            borderColor: useTransform(smoothProgress, (p) => {
                              if (p > stepProgressEnd) return "#FFD343" // Completed (Python Yellow)
                              if (p >= stepProgressStart) return "#3776AB" // Active (Python Blue)
                              return "hsl(var(--border))" // Upcoming
                            })
                          }}
                        >
                          <motion.div
                            style={{
                              color: useTransform(smoothProgress, (p) => {
                                if (p > stepProgressEnd) return "#FFD343"
                                if (p >= stepProgressStart) return "#3776AB"
                                return "hsl(var(--muted-foreground))"
                              })
                            }}
                          >
                            <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                          </motion.div>
                        </motion.div>
                        
                        {/* Pulse Effect for Active State */}
                        <motion.div 
                          className="absolute inset-0 rounded-full border-2 border-primary"
                          style={{
                            opacity: useTransform(isActive, (active) => active ? 1 : 0),
                            scale: useTransform(isActive, (active) => active ? [1, 1.5] : 1)
                          }}
                          animate={{ 
                            scale: [1, 1.5], 
                            opacity: [0.8, 0] 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeOut" 
                          }}
                        />
                        
                        {/* Checkmark for Completed State */}
                        <motion.div 
                          className="absolute -right-2 -top-2 md:-right-1 md:-top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary text-background flex items-center justify-center shadow-md z-20"
                          style={{
                            scale: useTransform(isCompleted, (completed) => completed ? 1 : 0)
                          }}
                        >
                          <Check className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="md:text-center w-full">
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 flex items-center md:justify-center gap-2">
                          <span className="text-primary font-mono text-xs md:text-sm">0{index + 1}</span>
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-[200px] md:max-w-[240px] mx-auto hidden sm:block">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
