import { TerminalSquare, BrainCircuit, Rocket, Trophy, LineChart, Users } from "lucide-react"
import { Container } from "../layout/Container"
import { SectionHeader } from "../shared/SectionHeader"
import { FeatureCard } from "../shared/FeatureCard"

const features = [
  {
    icon: TerminalSquare,
    title: "Interactive Code Editor",
    description: "Write, run, and debug Python code directly in your browser. No installation or configuration required.",
    codeSnippet: "def execute(code):\n    return eval(code)\n\nprint('Hello World')",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Tutor",
    description: "Get instant help, personalized explanations, and code reviews from our intelligent AI assistant 24/7.",
    codeSnippet: "import openai\n\nresponse = openai.ChatCompletion.create(\n    model='gpt-4',\n    messages=[...]\n)",
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description: "Build a professional portfolio with hands-on projects ranging from web scraping to machine learning.",
    codeSnippet: "from bs4 import BeautifulSoup\nimport requests\n\nres = requests.get(url)\nsoup = BeautifulSoup(res.text)",
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    description: "Stay motivated with streaks, earn achievement badges, and climb the global leaderboards as you learn.",
    codeSnippet: "class User:\n    def add_points(self, p):\n        self.score += p\n        self.check_level()",
  },
  {
    icon: LineChart,
    title: "Progress Analytics",
    description: "Track your growth with detailed insights, identify weak points, and get tailored recommendations.",
    codeSnippet: "import pandas as pd\n\ndf = pd.read_csv('stats.csv')\ndf.plot(kind='line')",
  },
  {
    icon: Users,
    title: "Community & Mentorship",
    description: "Connect with peers, participate in code reviews, and get guidance from industry experts.",
    codeSnippet: "def get_mentor(user):\n    return match_mentor(user)\n\nmentor = get_mentor(me)",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative z-10">
      <Container>
        <SectionHeader 
          title="Everything You Need to Master Python"
          subtitle="A comprehensive ecosystem designed to take you from absolute beginner to confident developer."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              codeSnippet={feature.codeSnippet}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
