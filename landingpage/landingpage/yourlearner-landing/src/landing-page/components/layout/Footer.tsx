import { PythonLogo } from "../shared/PythonLogo"
import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative z-20 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Brand */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-primary/5 rounded-2xl border border-primary/10">
            <PythonLogo className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-foreground tracking-tight">YourLearner</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Master Python. Build Your Future. Interactive lessons, real-world projects, and AI-powered guidance — all in one platform.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm font-medium text-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#courses" className="hover:text-primary transition-colors">Courses</a>
          <a href="#journey" className="hover:text-primary transition-colors">Roadmap</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-12 text-muted-foreground">
          <a href="#" className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <TwitterLogoIcon className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <GitHubLogoIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <LinkedInLogoIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} YourLearner. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
