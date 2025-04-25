import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://sheetdb.io/api/v1/5eco2vhjrj1nl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [{ name, email }],
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Yikes. Something broke. Try again?");
      }
    } catch (err) {
      console.error(err);
      alert("Double yikes. Network error?");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-16">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {submitted ? (
          <>
            <h1 className="text-4xl font-extrabold text-center text-white mb-4">
              Congrats, you’re now <span className="text-white">contractually obligated</span> to connect with people.
            </h1>
            <p className="text-green-400 text-center mb-6">
              Your name is now in the <span className="font-semibold">sacred spreadsheet</span>, {name.split(" ")[0]}.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold text-center mb-6">
              Join the <span className="text-white underline underline-offset-4">CONNEXT</span> Waitlist
            </h1>
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@cooldomain.com"
                className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 rounded-md hover:bg-zinc-200 transition border border-zinc-800"
              >
                Join the Waitlist
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
