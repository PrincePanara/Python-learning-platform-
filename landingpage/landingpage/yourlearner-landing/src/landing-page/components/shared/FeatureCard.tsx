import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
  codeSnippet?: string
}

export function FeatureCard({ icon: Icon, title, description, index, codeSnippet }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {codeSnippet && (
        <div className="absolute -right-4 -bottom-4 text-[10px] md:text-xs font-mono text-primary/10 whitespace-pre pointer-events-none transform -rotate-12 select-none">
          {codeSnippet}
        </div>
      )}

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
