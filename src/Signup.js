import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queueNumber = Math.floor(Math.random() * 500) + 50;

    // Send to SheetDB (your spreadsheet)
    await fetch("https://sheetdb.io/api/v1/5eco2vhjrj1nl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [{ email }] }),
    });

    // Navigate to waitlist page
    navigate(`/waitlisted?number=${queueNumber}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">You're this close.</h1>
      <p className="text-gray-400 mb-6 text-center">Drop your email. We'll drop the magic.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-gray-700 text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition font-semibold"
        >
          Join the waitlist →
        </button>
      </form>
    </div>
  );
}
