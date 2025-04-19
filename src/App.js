import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const queueNumber = Math.floor(Math.random() * 500) + 50;
    window.location.href = `/waitlisted?number=${queueNumber}`;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, delay: 0 }}
            >
              CONNEXT
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (<main>
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-8 pt-[20vh]">
            <div className="fixed top-0 left-0 w-full h-[20vh] flex items-center justify-center bg-black z-40 border-b border-gray-800">
              <h1 className="text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>CONNEXT</h1>
            </div>
            <h1 className="text-4xl font-bold mb-4">The networking app that doesn’t suck</h1>
            <p className="text-lg text-gray-300 max-w-xl mb-6">
              For students, builders, and mentors who want to connect without the corporate cosplay.
            </p>
            <h2 className="text-2xl font-semibold text-gray-100">
              Not that blue-logo platform. This one actually helps you meet people.
            </h2>
            <a onClick={() => document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' })} className="mt-10 text-gray-500 hover:text-white cursor-pointer">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </section>

        <section id="section2" className="min-h-[120vh] pt-40 flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-black via-zinc-900 to-black">
          <h3 className="text-2xl font-bold mb-4">So how does this not suck?</h3>
          <ul className="mt-4 space-y-6 text-lg text-gray-300 max-w-2xl mx-auto text-left list-disc list-inside">
            <li><strong>Pick who you are</strong> – builder, mentor, student, explorer. Please don't pick all four. Unless you're having an identity crisis.</li>
            <li><strong>Scroll the feed</strong> – it’s like Pinterest, but for people who code and overshare.</li>
            <li><strong>Find someone that matches your vibe</strong> – vibes are the new résumés.</li>
            <li><strong>Press connect</strong> – it’s one button. Don’t overthink it.</li>
            <li><strong>Build something cool</strong> – or collab on something mid. No judgment.</li>
            <li><strong>Reflect and grow</strong> – even if your project flops. That's still progress, not failure.</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-400 text-center mt-16 mb-2">
            Here’s what your profile will look like on the feed. Scroll. Connect. Repeat.
          </h4>
          <p className="text-sm text-gray-500 text-center italic">they’ll be better than this obv but you get the idea, relax</p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-12 bg-zinc-900 rounded-xl p-6 shadow-inner">
            <div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col justify-between h-full">
  <p className="font-semibold text-white">Your Name</p>
  <p className="text-sm text-gray-400 mb-2">Builder</p>
  <p className="text-gray-300 text-sm mb-2">Shipping small tools & big dreams.</p>
  <p className="text-xs text-gray-400"><span className="text-white font-semibold">Has:</span> React, Firebase, UX</p>
  <p className="text-xs text-gray-400 mb-3"><span className="text-white font-semibold">Wants:</span> Partnerships, Community</p>
  <div className="mt-auto pt-4">
    <div className="text-sm bg-white text-black px-3 py-1 rounded w-full text-center select-none pointer-events-none">Connect</div>
  </div>
</div>

<div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col justify-between h-full">
  <p className="font-semibold text-white">Your Name</p>
  <p className="text-sm text-gray-400 mb-2">Mentor</p>
  <p className="text-gray-300 text-sm mb-2">Ex-founder helping early teams avoid my mistakes.</p>
  <p className="text-xs text-gray-400"><span className="text-white font-semibold">Has:</span> Fundraising, Go-to-Market, Pitch Coaching</p>
  <p className="text-xs text-gray-400 mb-3"><span className="text-white font-semibold">Wants:</span> Cool projects, Motivated founders</p>
  <div className="mt-auto pt-4">
    <div className="text-sm bg-white text-black px-3 py-1 rounded w-full text-center select-none pointer-events-none">Connect</div>
  </div>
</div>

<div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col justify-between h-full">
  <p className="font-semibold text-white">Your Name</p>
  <p className="text-sm text-gray-400 mb-2">Student</p>
  <p className="text-gray-300 text-sm mb-2">CS undergrad looking to join something weird and fun.</p>
  <p className="text-xs text-gray-400"><span className="text-white font-semibold">Has:</span> Python, Figma, Enthusiasm</p>
  <p className="text-xs text-gray-400 mb-3"><span className="text-white font-semibold">Wants:</span> Startup experience, Tech cofounder</p>
  <div className="mt-auto pt-4">
    <div className="text-sm bg-white text-black px-3 py-1 rounded w-full text-center select-none pointer-events-none">Connect</div>
  </div>
</div>

<div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col justify-between h-full">
  <p className="font-semibold text-white">Your Name</p>
  <p className="text-sm text-gray-400 mb-2">Explorer</p>
  <p className="text-gray-300 text-sm mb-2">Dabbling in Web3, climate tech, and chaotic ideas.</p>
  <p className="text-xs text-gray-400"><span className="text-white font-semibold">Has:</span> No-Code, Community Building, Pitch Decks</p>
  <p className="text-xs text-gray-400 mb-3"><span className="text-white font-semibold">Wants:</span> Technical Cofounder, AI Tools, Product Validation</p>
  <div className="mt-auto pt-4">
    <div className="text-sm bg-white text-black px-3 py-1 rounded w-full text-center select-none pointer-events-none">Connect</div>
  </div>
</div>
          </div>

          <a onClick={() => document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth' })} className="mt-10 text-gray-500 hover:text-white block text-center cursor-pointer">
            <ChevronDown className="w-6 h-6 animate-bounce inline" />
          </a>
        </section>

        <section id="section3" className="min-h-[75vh] flex flex-col justify-center items-center text-center px-8 bg-black">
          <h3 className="text-xl mb-4 text-gray-200">
            This isn’t a platform. It’s a place. For people who build, ask, explore, and maybe overshare a little.
          </h3>

          <button
            onClick={() => window.location.href = '/signup'}
            className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition mt-6"
          >
            → F*ck It, I’m In
          </button>
        </section>

        <footer className="mt-24 py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 CONNEXT. Built for weirdos. <a href="#" className="underline">Privacy</a> • <a href="#" className="underline">Terms</a> • <a href="#" className="underline">Twitter</a></p>
        </footer>
      </main>)}
    </div>
  );
}

export function Waitlisted({ searchParams }) {
  const number = searchParams.get("number") || "[insert fake number here]";
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl">You're #{number} on the waitlist. We'll be in touch 👀</h1>
    </div>
  );
}
