import { useState } from "react";

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
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-6">Join the CONNEXT waitlist</h1>
      {submitted ? (
        <p className="text-green-400 text-lg">You're on the list, {name.split(" ")[0]} 👀</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="p-3 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
          >
            Join the Waitlist
          </button>
        </form>
      )}
    </div>
  );
}
