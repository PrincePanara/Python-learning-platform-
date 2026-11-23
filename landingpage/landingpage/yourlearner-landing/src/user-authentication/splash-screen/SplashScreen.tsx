import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useRive } from "@rive-app/react-canvas"
import "./SplashScreen.css"

export function SplashScreen() {
  const { RiveComponent } = useRive({
    src: "/bot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Main Content Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">

        {/* Mascot Section */}
        <div className="relative flex flex-col items-center shrink-0">
          {/* Soft glowing background behind the circle */}
          <div className="absolute inset-0 bg-[#0066FF]/10 rounded-full blur-2xl animate-pulse"></div>
          
          <div className="relative z-10 origin-bottom w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full border-[8px] border-blue-50 shadow-2xl flex items-center justify-center overflow-hidden">
            <RiveComponent className="w-[120%] h-[120%] object-cover" />
          </div>
          {/* Dynamic Floor Shadow */}
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="w-40 h-6 bg-slate-400 rounded-[100%] blur-xl mt-6"
          />
        </div>

        {/* Speech Bubble Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-[500px] w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 z-20"
        >
          {/* Speech Bubble Tail - Points to the mascot */}
          {/* Desktop Tail (Left) */}
          <div className="absolute hidden md:block w-8 h-8 bg-white border-l border-b border-slate-100 -left-4 top-1/2 -translate-y-1/2 rotate-45" />
          {/* Mobile Tail (Top) */}
          <div className="absolute md:hidden w-8 h-8 bg-white border-l border-t border-slate-100 left-1/2 -top-4 -translate-x-1/2 rotate-45" />

          {/* Text Content */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 flex items-center gap-3">
            Hello!
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
              className="inline-block origin-bottom-right text-4xl md:text-5xl"
            >
              👋
            </motion.span>
          </h1>

          <div className="space-y-2 md:space-y-3 text-[17px] md:text-[19px] text-slate-600 font-medium leading-relaxed">
            <p>I'm your learning buddy.</p>
            <p>
              I'm here to help you master{' '}
              <span className="text-[#0066FF] font-bold">Python</span>{' '}
              in the easiest and most fun way!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50"
      >
        <Link
          to="/signup"
          className="flex items-center justify-center gap-3 px-8 md:px-10 py-4 rounded-2xl bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-lg md:text-xl shadow-[0_12px_35px_rgba(0,102,255,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,102,255,0.45)] active:scale-95"
        >
          Continue
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </Link>
      </motion.div>
    </div>
  )
}
