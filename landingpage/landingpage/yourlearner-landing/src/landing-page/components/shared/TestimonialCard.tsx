import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  beforeSkill: string
  afterSkill: string
  index: number
}

export function TestimonialCard({
  name,
  role,
  company,
  avatar,
  quote,
  beforeSkill,
  afterSkill,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 h-full min-w-[320px] md:min-w-[400px]"
    >
      <div className="flex text-amber-400 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-current" />
        ))}
      </div>
      
      <p className="text-foreground text-lg mb-8 flex-1 italic">
        "{quote}"
      </p>
      
      <div className="bg-muted rounded-xl p-4 mb-6 flex items-center justify-between text-sm">
        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider">Before</span>
          <span className="font-semibold">{beforeSkill}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-primary" />
        <div className="flex flex-col text-right">
          <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider">After</span>
          <span className="font-semibold text-emerald-500">{afterSkill}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-background shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {role} @ <span className="font-medium text-foreground">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
