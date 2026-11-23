import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"

const faqs = [
  {
    question: "Is this suitable for complete beginners?",
    answer: "Absolutely! Our platform is designed to take you from absolute zero to confident coder. We start with the very basics of programming logic before diving deep into advanced Python concepts."
  },
  {
    question: "How long does it take to learn Python?",
    answer: "While everyone learns at their own pace, most students who dedicate 3-5 hours a week can complete our core curriculum and start building their own projects within 2-3 months."
  },
  {
    question: "Do I need to install anything?",
    answer: "No installation is required to start! Our interactive code editor runs entirely in your browser, allowing you to write, run, and debug Python code instantly from any device."
  },
  {
    question: "What if I get stuck?",
    answer: "Our AI-Powered Tutor is available 24/7 to provide instant, personalized hints and explanations. If you need further help, our active community and expert mentors are always ready to assist."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 14-day no-questions-asked money-back guarantee on all our paid plans. We want you to be completely satisfied with your learning experience."
  },
  {
    question: "Can I get a certificate?",
    answer: "Yes! Upon successfully completing the curriculum and the final capstone projects, you'll receive a verified certificate of completion that you can add to your resume and LinkedIn profile."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30 border-y border-border">
      <Container>
        <SectionHeader 
          title="Got Questions? We've Got Answers"
          subtitle="Everything you need to know about YourLearner and our Python curriculum."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4 border border-border rounded-2xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-muted-foreground"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
