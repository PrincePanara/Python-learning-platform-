import { motion } from "framer-motion"
import { ShieldCheck, CalendarX, CreditCard } from "lucide-react"
import { Container } from "../layout/Container"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { PythonLogo } from "../shared/PythonLogo"

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <PythonLogo className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] text-primary/5 opacity-5 pointer-events-none -rotate-12 translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Ready to Start Your Python Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Join thousands of learners who transformed their careers.
            Sign up today and get your first week absolutely free.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto mb-10 relative"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none text-muted-foreground">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-xs font-bold text-primary">&gt;&gt;&gt;</span>
              </div>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 text-base rounded-full pl-20 pr-6 bg-background/80 backdrop-blur-sm border-border focus-visible:ring-primary shadow-sm font-mono text-sm"
                required
              />
            </div> */}
            <Button size="lg" className="h-12 rounded-full px-8 shrink-0 hover:scale-105 transition-transform shadow-lg shadow-primary/25" asChild>
              <Link to="/signup">Get start with me</Link>
            </Button>
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarX className="w-4 h-4 text-emerald-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>7-day free trial</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
