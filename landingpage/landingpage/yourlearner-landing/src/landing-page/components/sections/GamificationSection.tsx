import { motion } from "framer-motion"
import { Container } from "../layout/Container"
import { Flame, ChevronLeft, ChevronRight, Swords, Shield } from "lucide-react"

export function GamificationSection() {
  // Generate calendar days for visualization
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const streakEnd = 12 // 12 days streak

  return (
    <section id="community" className="py-20 md:py-32 bg-background relative overflow-hidden border-y border-border/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Interactive UI Cards (Left Side) */}
          <div className="relative order-2 lg:order-1">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

            <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
              
              {/* Main Calendar Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-2xl"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">12 days streak</h3>
                    <p className="text-muted-foreground text-sm">Return tomorrow to keep your streak!</p>
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-3 bg-secondary/10 rounded-2xl text-secondary"
                  >
                    <Flame className="w-8 h-8 fill-current" />
                  </motion.div>
                </div>

                {/* Calendar Controls */}
                <div className="flex justify-between items-center mb-6 text-sm font-semibold text-muted-foreground">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                  <span className="text-foreground">January 2026</span>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors"><ChevronRight className="w-4 h-4" /></button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 md:gap-3 text-center text-sm">
                  {/* Days of week (optional, omitted in user image but good for spacing) */}
                  {['S','M','T','W','T','F','S'].map((day, i) => (
                    <div key={i} className="text-muted-foreground/50 font-medium text-xs mb-2">{day}</div>
                  ))}
                  
                  {/* Empty slots for starting day of month */}
                  <div className="aspect-square" />
                  <div className="aspect-square" />
                  <div className="aspect-square" />

                  {days.map((day, i) => {
                    const isStreak = day < streakEnd
                    const isCurrent = day === streakEnd

                    return (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        key={day}
                        className={`aspect-square rounded-full flex items-center justify-center font-semibold text-xs md:text-sm transition-colors ${
                          isStreak 
                            ? "bg-secondary text-secondary-foreground" // Python Yellow for completed streak
                            : isCurrent
                            ? "border-2 border-primary text-primary" // Python Blue outline for current day
                            : "text-muted-foreground hover:bg-muted cursor-pointer"
                        }`}
                      >
                        {day}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Power-up Cards Container */}
              <div className="grid grid-cols-2 gap-6">
                {/* Double or Nothing */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-4 md:p-6 border border-border shadow-lg flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                    <Swords className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Double or Nothing</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">Day 5 of 7</p>
                  </div>
                </motion.div>

                {/* Syntax Shield */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card rounded-2xl p-4 md:p-6 border border-border shadow-lg flex items-center gap-4 hover:border-secondary/50 transition-colors cursor-pointer group"
                >
                  <div className="p-3 bg-muted rounded-xl group-hover:bg-secondary/10 transition-colors">
                    <Shield className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Syntax Shield</h4>
                    <div className="inline-block mt-1 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full uppercase tracking-wide">
                      2 Left
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text Content (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Build Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Python Streak
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Stay consistent and watch your skills compound! Track your daily coding habit, protect your streak with <span className="text-foreground font-semibold">Syntax Shields</span>, and earn exclusive Python badges for showing up every day.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
