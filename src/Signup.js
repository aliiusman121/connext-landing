import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.airtable.com/v0/app4NjjZkLebYd1qj/tbl4awyeEddmlJgQt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patb9LTZVazshKkHW.d1724b219c5a73bd64d34d4e5ebac04ad8452e2159075166c1ef9178fb19e365`
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email
              }
            }
          ]
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const error = await res.json();
        console.error("Airtable error:", error);
        alert(`Yikes. Airtable says: ${error.error.type}`);
      }
    } catch (err) {
      console.error(err);
      alert("Double yikes. Network error?");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-16">
      <motion.div
        className="w-full max-w-md flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-8">
          {submitted ? (
            <>Congrats, you’re now contractually obligated to connect with people.</>
          ) : (
            <>Join the <span className="text-white">CONNEXT</span> waitlist</>
          )}
        </h1>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-400 text-lg">
              Your name is now in the sacred spreadsheet, <span className="font-semibold">{name.split(" ")[0]}</span>.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Sharing this is optional. But imagine how awkward it’ll be when your friend finds out you didn’t.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="you@cooldomain.com"
              className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
            >
              Get Early Access!
            </button>
          </form>
        )}

        {!submitted && (
          <p className="text-gray-300 text-base mt-4 text-center font-medium">
            250+ signed up. You should too.
          </p>
        )}
      </motion.div>
    </div>
  );
}
