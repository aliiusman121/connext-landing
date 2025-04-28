import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2000); // 2 seconds now
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // fade duration 1 second
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
              style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0 }}
            >
              CONNEXT
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <main>
          {/* Sticky Header */}
          <div className="fixed top-0 left-0 w-full h-[20vh] flex items-center justify-center bg-black z-40 border-b border-gray-800">
            <h1 className="text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              CONNEXT
            </h1>
          </div>

          {/* Hero Section */}
          <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-8 pt-[20vh]">
            <h1 className="text-4xl font-bold mb-6">The networking app that doesn’t suck</h1>
            <p className="text-lg text-gray-300 max-w-xl mb-6">
              For students, builders, and mentors who want to connect without the corporate cosplay.
            </p>
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">
              Not that blue-logo platform. This one actually helps you meet people.
            </h2>
            <a
              onClick={() => document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 text-gray-500 hover:text-white cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </section>

          {/* Section 2: Features */}
          <section
            id="section2"
            className="min-h-[120vh] pt-40 flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-black via-zinc-900 to-black"
          >
            <h3 className="text-2xl font-bold mb-4">So how does this not suck?</h3>

            <div className="mt-4 space-y-6 text-lg text-gray-300 max-w-2xl mx-auto text-left">
              <div className="relative pl-6">
                <span className="absolute left-0 top-1">•</span>
                <p><strong>Choose your vibe(s)</strong> — Are you a Builder? Mentor? Explorer? Student?</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1">•</span>
                <p><strong>Scroll the feed</strong> — part discovery, part digital stalking (in a good way).</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1">•</span>
                <p><strong>Find someone that matches your vibe</strong> — vibes are the new résumés.</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1">•</span>
                <p><strong>Hit connect</strong> — No awkward intros. Just instant access to cool humans.</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1">•</span>
                <p><strong>Start something</strong> — A call. A project. A friendship. A vibe. You choose.</p>
              </div>
            </div>

            <h4 className="text-lg font-medium text-gray-300 text-center mt-16 mb-2">
              Here’s what your profile will look like on the feed. Scroll. Connect. Repeat.
            </h4>
            <p className="text-base text-gray-400 text-center italic">
              they’ll be better than this obviously but you get the idea, relax
            </p>

            {/* User cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-12 bg-zinc-900 rounded-xl p-6 shadow-inner">
              {/* Each card manually updated below */}
              {[
                {
                  name: "Jordan",
                  role: "Builder",
                  quote: "Launched 3 weeks ago. Looking to stay consistent this time.",
                  has: "MVP of a social productivity app",
                  wants: "UI designer, marketer, co-founder"
                },
                {
                  name: "Michael",
                  role: "Mentor",
                  quote: "Prefer 30-min async audio calls. No fluff.",
                  has: "12 years in VC & product growth",
                  wants: "To help 1–2 ambitious Gen Z founders monthly"
                },
                {
                  name: "Ravi",
                  role: "Student",
                  quote: "Not sure where to start. Here to learn + explore.",
                  has: "Final-year comp sci + side project in fintech",
                  wants: "Exposure to real-world startup builders"
                },
                {
                  name: "Talia",
                  role: "Explorer",
                  quote: "Not building anything yet. Just wandering, absorbing, and seeing what clicks.",
                  has: "Curiosity, a half-finished Substack, and deep questions",
                  wants: "Conversations, collaborations, or chaos (TBD)"
                }
              ].map((profile, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl shadow-md flex flex-col justify-between h-full border"
                  style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5", borderColor: "#333333" }}
                >
                  <p className="font-semibold text-white text-lg">{profile.name}</p>
                  <p className="text-sm text-gray-400 mb-2">{profile.role}</p>
                  <p className="text-sm italic text-gray-300 mb-2">"{profile.quote}"</p>
                  <p className="text-xs text-gray-400"><span className="text-white font-semibold">Has:</span> {profile.has}</p>
                  <p className="text-xs text-gray-400 mb-3"><span className="text-white font-semibold">Wants:</span> {profile.wants}</p>
                  <div className="mt-auto pt-4">
                    <div className="text-sm bg-white text-black px-3 py-1 rounded w-full text-center select-none pointer-events-none">
                      Connext
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              onClick={() => document.getElementById("section3")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 text-gray-500 hover:text-white block text-center cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 animate-bounce inline" />
            </a>
          </section>

          {/* CTA Section */}
          <section
            id="section3"
            className="min-h-[75vh] flex flex-col justify-center items-center text-center px-8 bg-black"
          >
            <div className="text-center text-gray-200 mb-4">
              <p className="text-xl">
                A new kind of networking app — where people actually reply, collaborate, and build things together.
              </p>
              <p className="text-xl mt-2">
                No résumés. No corporate cosplay. Just vibes and action.
              </p>
            </div>

            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-black px-8 py-3 text-lg rounded font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 mt-10"
            >
              → Count Me In
            </button>
          </section>

          {/* Footer */}
          <footer className="mt-24 py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              © 2025 CONNEXT. Built for people who actually reply.{" "}
              <a href="#" className="underline">Privacy</a> •{" "}
              <a href="#" className="underline">Terms</a> •{" "}
              <a href="#" className="underline">Twitter</a>
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
