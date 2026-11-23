import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const decorators = [
  { text: "def", x: 10, y: 20, delay: 0 },
  { text: "class", x: 80, y: 15, delay: 2 },
  { text: "import", x: 15, y: 70, delay: 1 },
  { text: "()", x: 85, y: 80, delay: 3 },
  { text: "[]", x: 50, y: 90, delay: 1.5 },
  { text: "{}", x: 45, y: 10, delay: 2.5 },
  { text: "if __name__:", x: 70, y: 50, delay: 4 },
  { text: "yield", x: 25, y: 40, delay: 0.5 },
]

export function GlobalDecorators() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {decorators.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03], 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity, 
            delay: item.delay,
            ease: "linear"
          }}
          className="absolute font-mono font-bold text-2xl md:text-4xl text-primary select-none"
          style={{ top: `${item.y}%`, left: `${item.x}%` }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  )
}
