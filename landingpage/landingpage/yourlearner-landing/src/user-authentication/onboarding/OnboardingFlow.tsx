import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRive } from "@rive-app/react-canvas";
import { 
  ArrowRight, ArrowLeft, Megaphone, Camera, Video, Users, Briefcase, 
  MessageSquare, ThumbsUp, Search, Newspaper, Globe, Brain, Code2, 
  Rocket, Hammer, Bot, Target, Puzzle, Laptop, Sparkles, BadgeCheck, 
  Sprout, TrendingUp, CheckCircle2 
} from "lucide-react";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const SOURCE_OPTIONS = [
  { id: "instagram", label: "Instagram", icon: Camera, color: "text-pink-500" },
  { id: "youtube", label: "YouTube", icon: Video, color: "text-red-500" },
  { id: "family_friends", label: "Family & Friends", icon: Users, color: "text-emerald-500" },
  { id: "linkedin", label: "LinkedIn", icon: Briefcase, color: "text-blue-600" },
  { id: "twitter", label: "X (Twitter)", icon: MessageSquare, color: "text-slate-900" },
  { id: "facebook", label: "Facebook", icon: ThumbsUp, color: "text-blue-500" },
  { id: "google", label: "Google Search", icon: Search, color: "text-rose-500" },
  { id: "blog", label: "Blog / Article", icon: Newspaper, color: "text-amber-500" },
  { id: "advertisement", label: "Advertisement", icon: Megaphone, color: "text-purple-500" },
  { id: "other", label: "Other", icon: Globe, color: "text-slate-400" },
];

const GOAL_OPTIONS = [
  { id: "challenge", label: "Challenge my brain", icon: Brain, color: "text-indigo-500" },
  { id: "explore", label: "Explore coding", icon: Code2, color: "text-blue-500" },
  { id: "career", label: "Boost my career", icon: Rocket, color: "text-emerald-500" },
  { id: "projects", label: "Build real-world projects", icon: Hammer, color: "text-orange-500" },
  { id: "ai_ml", label: "Learn AI & Machine Learning", icon: Bot, color: "text-purple-600" },
  { id: "interviews", label: "Prepare for interviews", icon: Target, color: "text-red-500" },
  { id: "problem_solving", label: "Improve problem-solving skills", icon: Puzzle, color: "text-teal-500" },
  { id: "freelance", label: "Start freelancing", icon: Briefcase, color: "text-amber-600" },
  { id: "apps", label: "Build apps and websites", icon: Laptop, color: "text-cyan-500" },
  { id: "fun", label: "Just for fun", icon: Sparkles, color: "text-yellow-500" }
];

const EXPERIENCE_OPTIONS = [
  { id: "beginner", label: "Beginner", desc: "I'm new to Python and want to learn from the basics.", icon: Sprout, color: "text-emerald-500" },
  { id: "intermediate", label: "Intermediate", desc: "I know the fundamentals and want to build real-world projects.", icon: TrendingUp, color: "text-blue-600" }
];

export function OnboardingFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Start at Step 0 for Welcome Screen
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  // Form State
  const [source, setSource] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);

  // Initialize Rive Mascot
  const { RiveComponent } = useRive({
    src: "/bot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        // Extract the first name from the display name if available
        const firstName = user.displayName ? user.displayName.split(" ")[0] : "there";
        setUserName(firstName);
      } else {
        // Temporarily disabled so you can preview the screen!
        // navigate("/signup");
        setUserName("there"); // Default for preview mode
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final Step - Save to Firebase
      // if (!userId) return; // Temporarily comment this out so they can see success state if previewing
      try {
        setLoading(true);
        if (userId) {
          await setDoc(doc(db, "users", userId), {
            referralSource: source || "skipped",
            learningGoal: goal,
            experienceLevel: experience,
            onboardingCompleted: true,
            updatedAt: new Date()
          }, { merge: true });
        }
        navigate("/dashboard");
      } catch (error) {
        console.error("Error saving onboarding data:", error);
        alert("Failed to save progress. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const renderStep0 = () => (
    <motion.div
      key="step0"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      className="w-full max-w-xl text-center flex flex-col items-center"
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
        {/* Soft glowing background behind the circle */}
        <div className="absolute inset-0 bg-[#0066FF]/10 rounded-full blur-2xl animate-pulse"></div>
        
        {/* The actual circular container */}
        <div className="relative w-full h-full bg-white rounded-full border-[6px] border-blue-50 shadow-2xl flex items-center justify-center overflow-hidden">
          <RiveComponent className="w-[120%] h-[120%] object-cover" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        👋 Hello, <span className="text-[#0066FF]">{userName}</span>! <br /> Welcome to YourLearner.
      </h1>
      
      <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 px-4">
        We're thrilled to have you here. Let's personalize your learning experience by answering a few quick questions.
      </p>

      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-3 w-full md:w-auto md:min-w-[280px] h-14 rounded-2xl font-semibold text-lg transition-all duration-300 bg-[#0066FF] hover:bg-blue-600 text-white shadow-[0_12px_35px_rgba(0,102,255,0.35)]"
      >
        Let's Go!
        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
      </motion.button>
    </motion.div>
  );

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-2xl"
    >
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 shadow-sm border border-blue-100">
          <Megaphone className="w-8 h-8" strokeWidth={2} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          How did you hear about YourLearner?
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          We'd love to know where you found us so we can thank them!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {SOURCE_OPTIONS.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSource(option.id)}
            className={`flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
              source === option.id
                ? "border-[#0066FF] bg-blue-50/40 shadow-md shadow-blue-500/10"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 mr-4 shrink-0 ${source === option.id ? "bg-white shadow-sm" : ""}`}>
              <option.icon className={`w-6 h-6 ${source === option.id ? option.color : "text-slate-500"}`} strokeWidth={2} />
            </div>
            <span className={`font-semibold text-[15px] flex-1 ${source === option.id ? "text-slate-900" : "text-slate-700"}`}>
              {option.label}
            </span>
            {source === option.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#0066FF]" strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <motion.button
          onClick={handleNext}
          disabled={!source}
          whileHover={source ? { scale: 1.02, y: -2 } : {}}
          whileTap={source ? { scale: 0.98 } : {}}
          animate={{ opacity: source ? 1 : 0.6 }}
          className={`flex items-center justify-center gap-3 w-full md:w-auto md:min-w-[280px] h-14 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            source 
              ? "bg-[#0066FF] hover:bg-blue-600 text-white shadow-[0_12px_35px_rgba(0,102,255,0.35)]" 
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continue
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
        <button onClick={() => { setSource("skipped"); handleNext(); }} className="text-slate-400 hover:text-slate-600 font-medium text-sm underline-offset-4 hover:underline transition-colors">
          Skip this step
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-3xl"
    >
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm border border-indigo-100">
          <Brain className="w-8 h-8" strokeWidth={2} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Why are you learning Python?
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Select the goal that best describes your motivation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {GOAL_OPTIONS.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setGoal(option.id)}
            className={`flex items-center p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
              goal === option.id
                ? "border-[#0066FF] bg-blue-50/40 shadow-md shadow-blue-500/10"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 mr-4 shrink-0 ${goal === option.id ? "bg-white shadow-sm" : ""}`}>
              <option.icon className={`w-6 h-6 ${goal === option.id ? option.color : "text-slate-500"}`} strokeWidth={2} />
            </div>
            <span className={`font-semibold text-[15px] flex-1 ${goal === option.id ? "text-slate-900" : "text-slate-700"}`}>
              {option.label}
            </span>
            {goal === option.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#0066FF]" strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4 w-full">
          <button onClick={handleBack} className="flex items-center justify-center shrink-0 w-14 h-14 rounded-2xl border-2 border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <motion.button
            onClick={handleNext}
            disabled={!goal}
            whileHover={goal ? { scale: 1.02, y: -2 } : {}}
            whileTap={goal ? { scale: 0.98 } : {}}
            animate={{ opacity: goal ? 1 : 0.6 }}
            className={`flex items-center justify-center gap-3 w-full md:w-auto md:min-w-[280px] h-14 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              goal 
                ? "bg-[#0066FF] hover:bg-blue-600 text-white shadow-[0_12px_35px_rgba(0,102,255,0.35)]" 
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </motion.button>
        </div>
        <button onClick={() => { setGoal("skipped"); handleNext(); }} className="text-slate-400 hover:text-slate-600 font-medium text-sm underline-offset-4 hover:underline transition-colors mt-1">
          Skip this step
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-xl"
    >
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
          <BadgeCheck className="w-8 h-8" strokeWidth={2} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          What is your level of Python experience?
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          This helps us personalize your learning path.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        {EXPERIENCE_OPTIONS.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setExperience(option.id)}
            className={`flex items-center p-6 rounded-2xl border-2 transition-all duration-200 text-left ${
              experience === option.id
                ? "border-[#0066FF] bg-blue-50/40 shadow-md shadow-blue-500/10"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 mr-5 shrink-0 ${experience === option.id ? "bg-white shadow-sm" : ""}`}>
              <option.icon className={`w-7 h-7 ${experience === option.id ? option.color : "text-slate-500"}`} strokeWidth={2} />
            </div>
            <div className="flex flex-col flex-1">
              <span className={`text-lg font-bold mb-1 ${experience === option.id ? "text-slate-900" : "text-slate-800"}`}>
                {option.label}
              </span>
              <span className={`text-[15px] font-medium leading-snug ${experience === option.id ? "text-blue-700/80" : "text-slate-500"}`}>
                {option.desc}
              </span>
            </div>
            {experience === option.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0 ml-4">
                <CheckCircle2 className="w-7 h-7 text-[#0066FF]" strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4 w-full">
          <button onClick={handleBack} disabled={loading} className="flex items-center justify-center shrink-0 w-14 h-14 rounded-2xl border-2 border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors disabled:opacity-50">
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <motion.button
            onClick={handleNext}
            disabled={!experience || loading}
            whileHover={experience && !loading ? { scale: 1.02, y: -2 } : {}}
            whileTap={experience && !loading ? { scale: 0.98 } : {}}
            animate={{ opacity: experience ? 1 : 0.6 }}
            className={`flex items-center justify-center gap-3 w-full md:w-auto md:min-w-[280px] h-14 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              experience 
                ? "bg-[#0066FF] hover:bg-blue-600 text-white shadow-[0_12px_35px_rgba(0,102,255,0.35)] disabled:opacity-50" 
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Saving..." : "Start Learning"}
            {!loading && <ArrowRight className="w-5 h-5" strokeWidth={2.5} />}
          </motion.button>
        </div>
        <button onClick={() => { setExperience("skipped"); handleNext(); }} disabled={loading} className="text-slate-400 hover:text-slate-600 font-medium text-sm underline-offset-4 hover:underline transition-colors mt-1 disabled:opacity-50">
          Skip this step
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      {/* Progress Bar (Only show if past Step 0) */}
      <AnimatePresence>
        {step > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="w-full max-w-md px-6 z-20 mb-8"
          >
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#0066FF]"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <div className="text-center mt-3 text-sm font-bold tracking-wide text-slate-400 uppercase">
              Step {step} of 3
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full flex justify-center py-8 md:py-12">
        <AnimatePresence mode="wait">
          {step === 0 && renderStep0()}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </AnimatePresence>
      </div>
    </div>
  );
}
