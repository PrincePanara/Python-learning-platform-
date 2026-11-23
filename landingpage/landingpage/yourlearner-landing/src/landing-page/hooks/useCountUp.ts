import { useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, isInView])

  return { count, ref }
}
