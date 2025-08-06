'use client'

import { useState } from "react";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Send email to API
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-white/10 backdrop-blur-md">
      {/* Glassmorphic overlay → bg-white/10 with backdrop-blur */}
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-black shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Join Our Waitlist</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-4xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="text-green-600">Thank you for joining! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black cursor-pointer text-white py-2 px-4 rounded-full hover:bg-gray-900 transition"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
