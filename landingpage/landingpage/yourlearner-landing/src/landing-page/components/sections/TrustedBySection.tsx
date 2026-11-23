import { motion } from "framer-motion"
import { Container } from "../layout/Container"
import { useCountUp } from "@/landing-page/hooks/useCountUp"

const logos = [
  "Google", "Meta", "Netflix", "Amazon", "Microsoft", "Apple", "Spotify", "Stripe"
]

function StatItem({ end, suffix, label }: { end: number, suffix: string, label: string }) {
  const { count, ref } = useCountUp(end, 2000)
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  )
}

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-12">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 text-center w-full max-w-4xl">
            <StatItem end={50} suffix="K+" label="Active Learners" />
            <StatItem end={100} suffix="+" label="Interactive Courses" />
            <StatItem end={95} suffix="%" label="Success Rate" />
          </div>

          <div className="w-full h-px bg-border/50 max-w-4xl" />

          {/* Marquee */}
          <div className="w-full max-w-5xl overflow-hidden relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
              style={{ width: "200%" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="text-xl md:text-2xl font-bold text-muted-foreground/40 uppercase tracking-widest select-none">
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  )
}
