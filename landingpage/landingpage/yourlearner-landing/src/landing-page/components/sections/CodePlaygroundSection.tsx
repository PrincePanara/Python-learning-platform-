import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Code2, CheckCircle2 } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"
import { Button } from "../ui/button"

const examples = {
  beginner: {
    title: "Beginner: Variables & Loops",
    code: `names = ["Alice", "Bob", "Charlie"]

for name in names:
    print(f"Hello, {name}! Welcome to YourLearner.")`,
    output: `Hello, Alice! Welcome to YourLearner.
Hello, Bob! Welcome to YourLearner.
Hello, Charlie! Welcome to YourLearner.`,
  },
  intermediate: {
    title: "Intermediate: List Comprehension",
    code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [n**2 for n in numbers if n % 2 == 0]

print("Even squares:", squares)`,
    output: `Even squares: [4, 16, 36, 64, 100]`,
  },
  advanced: {
    title: "Advanced: Decorators",
    code: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time: {end - start:.4f}s")
        return result
    return wrapper

@timer
def heavy_computation():
    return sum([i**2 for i in range(10000)])

print(heavy_computation())`,
    output: `Execution time: 0.0021s
333283335000`,
  }
}

type Level = keyof typeof examples

export function CodePlaygroundSection() {
  const [level, setLevel] = useState<Level>("beginner")
  const [isTyping, setIsTyping] = useState(false)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<string | null>(null)

  const currentExample = examples[level]

  useEffect(() => {
    setIsTyping(true)
    setOutput(null)
    setDisplayedCode("")
    let i = 0
    const code = currentExample.code
    
    const timer = setInterval(() => {
      setDisplayedCode(code.slice(0, i))
      i++
      if (i > code.length) {
        clearInterval(timer)
        setIsTyping(false)
      }
    }, 15)
    
    return () => clearInterval(timer)
  }, [level])

  const handleRunCode = () => {
    if (isTyping) return
    setIsRunning(true)
    setOutput(null)
    setTimeout(() => {
      setOutput(currentExample.output)
      setIsRunning(false)
    }, 800)
  }

  return (
    <section id="courses" className="py-20 md:py-32 bg-background relative z-10">
      <Container>
        <SectionHeader 
          title="Experience Interactive Learning"
          subtitle="Try our built-in code editor. No setup required. Write, run, and debug instantly."
        />

        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {(Object.keys(examples) as Level[]).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  level === l 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {examples[l].title.split(":")[0]}
              </button>
            ))}
          </div>

          {/* Editor Window */}
          <div className="rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row bg-[#0d1117] min-h-[400px]">
            
            {/* Code Area */}
            <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#161b22]">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                  <Code2 className="w-4 h-4" />
                  main.py
                </div>
                <Button 
                  size="sm" 
                  onClick={handleRunCode}
                  disabled={isTyping || isRunning}
                  className="h-7 text-xs bg-emerald-600 hover:bg-emerald-700 text-white border-0"
                >
                  {isRunning ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full mr-2"
                    />
                  ) : (
                    <Play className="w-3 h-3 mr-1" />
                  )}
                  Run Code
                </Button>
              </div>
              <div className="p-4 md:p-6 flex-1 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300 leading-relaxed">
                  <code>
                    {displayedCode}
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                      />
                    )}
                  </code>
                </pre>
              </div>
            </div>

            {/* Terminal Area */}
            <div className="w-full md:w-1/3 flex flex-col bg-[#010409]">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#161b22]">
                <div className="text-gray-400 text-xs font-mono uppercase tracking-wider">Terminal Output</div>
              </div>
              <div className="p-4 md:p-6 flex-1 font-mono text-sm text-gray-300">
                <AnimatePresence mode="wait">
                  {output ? (
                    <motion.div
                      key="output"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <pre className="text-emerald-400 whitespace-pre-wrap">{output}</pre>
                      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Process finished with exit code 0
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="waiting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-600 italic"
                    >
                      {isRunning ? "Executing..." : "Click 'Run Code' to see output"}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
