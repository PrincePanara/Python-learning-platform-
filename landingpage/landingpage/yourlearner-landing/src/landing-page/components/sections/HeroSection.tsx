import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Play, CheckCircle, Code2, Sparkles } from "lucide-react"
import { Container } from "../layout/Container"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { PythonLogo } from "../shared/PythonLogo"
import { AbstractSnakeCurve } from "../animations/AbstractSnakeCurve"

const CODE_SNIPPET = `def train_model(data, epochs=10):
    print("Initialize neural network...")
    model = NeuralNetwork(layers=[64, 32, 10])
    
    for epoch in range(epochs):
        loss = model.train_step(data)
        if epoch % 2 == 0:
            print(f"Epoch {epoch} | Loss: {loss:.4f}")
            
    return model

# AI Tutor: "Great job! Let's optimize the 
# learning rate for faster convergence."`

export function HeroSection() {
  const [displayedCode, setDisplayedCode] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayedCode(CODE_SNIPPET.slice(0, i))
      i++
      if (i > CODE_SNIPPET.length) {
        clearInterval(timer)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background elements */}
      <AbstractSnakeCurve />
      <div className="absolute top-0 inset-x-0 h-full bg-background/50 backdrop-blur-[1px] -z-10">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[100px] mix-blend-normal translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[100px] mix-blend-normal -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6 py-1.5 px-4 bg-secondary/20 text-yellow-600 hover:bg-secondary/30 border-secondary/30">
                <PythonLogo className="w-4 h-4 mr-2" /> #1 Python Learning Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              Master Python. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Build Your Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Interactive lessons, real-world projects, and AI-powered guidance — all in one platform designed for modern learners.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:scale-105 transition-transform" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base group hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Demo Mockup */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            className="relative lg:ml-auto w-full max-w-xl z-10"
          >
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-background rounded-full px-4 py-2 shadow-xl border border-border flex items-center gap-2 z-20"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-semibold">AI Assistant</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-8 bg-background rounded-full px-4 py-2 shadow-xl border border-border flex items-center gap-2 z-20"
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">Live Preview</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 left-12 bg-background rounded-full px-4 py-2 shadow-xl border border-border flex items-center gap-2 z-20"
            >
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold">Progress Tracking</span>
            </motion.div>

            {/* Code Editor Window */}
            <div className="rounded-2xl border border-border bg-[#0d1117] shadow-2xl overflow-hidden shadow-primary/10">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="mx-auto text-xs font-mono text-gray-400">main.py</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto min-h-[300px]">
                <pre className="text-gray-300">
                  <code>
                    {displayedCode}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                    />
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
