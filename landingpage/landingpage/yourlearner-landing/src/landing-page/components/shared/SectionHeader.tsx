import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
