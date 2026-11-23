import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../lib/firebase";

export function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (provider: any) => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      
      // Try to send token to backend, but don't block if it fails
      try {
        const response = await fetch("http://localhost:8000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`
          },
          body: JSON.stringify({
            uid: result.user.uid,
            email: result.user.email,
            name: result.user.displayName
          })
        });

        if (!response.ok) {
          console.warn("Backend authentication failed, continuing anyway for frontend flow.");
        }
      } catch (fetchErr) {
        console.warn("Could not reach backend:", fetchErr);
      }

      navigate("/onboarding");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">

      {/* Left Column: Branding / Marketing */}
      <div className="hidden md:flex md:w-1/2 bg-[#F8FAFC] relative overflow-hidden flex-col justify-between p-10 lg:p-16 xl:p-24 border-r border-slate-200">

        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-6 mb-16 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="YourLearner" className="h-32 md:h-40 w-auto object-contain drop-shadow-md" />
            <span className="font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900">YourLearner</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="my-auto max-w-lg"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-black tracking-tight mb-6 leading-[1.15] text-slate-900">
              Unlock Your Python Potential
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-12 font-medium leading-relaxed">
              Skip the boring lectures. Write real code, build actual projects, and let our AI buddy guide you every step of the way.
            </p>

            {/* Creative Code Snippet Element */}
            <div className="p-6 rounded-2xl bg-[#0F172A] shadow-2xl shadow-slate-900/10 border border-slate-800 overflow-hidden relative group transform transition-transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-yellow-400" />
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                <span className="text-pink-400 font-semibold">def</span> <span className="text-blue-400 font-semibold">start_learning</span>():<br />
                <span className="text-slate-400 italic">    """Begin your journey today."""</span><br />
                <span className="text-emerald-400">    print</span>(<span className="text-yellow-300">"Hello, Future Developer!"</span>)<br />
                <span className="text-pink-400 font-semibold">    return</span> <span className="text-purple-400 font-semibold">True</span>
              </pre>
            </div>
          </motion.div>

          {/* Footer of Left Column */}
          <div className="mt-20 text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} YourLearner Platform.
          </div>
        </div>
      </div>

      {/* Right Column: Sign Up Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 min-h-screen bg-white">
        <div className="w-full max-w-[400px] mx-auto">

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-4 mb-12">
            <img src="/logo.png" alt="YourLearner" className="h-32 w-auto object-contain" />
            <span className="font-extrabold text-4xl tracking-tight text-slate-900">YourLearner</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Create an account</h2>
              <p className="text-slate-500 font-medium text-[17px]">Start your Python journey today.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {error}
              </div>
            )}

            {/* Social Logins */}
            <div className="flex flex-col gap-4 mb-8">
              <button 
                onClick={() => handleAuth(googleProvider)}
                disabled={loading}
                className="flex items-center justify-center gap-3 w-full h-14 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[15px] transition-all hover:shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                {loading ? "Connecting..." : "Continue with Google"}
              </button>

              <button 
                onClick={() => handleAuth(githubProvider)}
                disabled={loading}
                className="flex items-center justify-center gap-3 w-full h-14 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[15px] transition-all hover:shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {loading ? "Connecting..." : "Continue with GitHub"}
              </button>

              <button className="flex items-center justify-center gap-3 w-full h-14 rounded-xl border border-slate-900 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[15px] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-1.15 2.14-.39 4.31.25 5.76 2.06-4.22 2.58-3.4 8.52.88 10.29-1.06 2.82-3.13 5.48-5.22 5.08v-.03M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* <p className="mt-8 text-center text-slate-600 text-sm font-medium">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline ml-1">
                Sign In
              </Link>
            </p> */}

            <p className="mt-8 text-center text-slate-400 text-xs font-medium px-4 leading-relaxed">
              By joining, you agree to our <a href="#" className="underline hover:text-slate-500">Terms of Service</a> and <a href="#" className="underline hover:text-slate-500">Privacy Policy</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
