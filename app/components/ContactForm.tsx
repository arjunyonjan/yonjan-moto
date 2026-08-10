'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="contact" className="bg-card py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-2xl sm:text-4xl font-bold text-xxl mb-10">Let&apos;s Build Your Parts</p>
        {sent ? (
          <p className="text-xl text-green-600 font-semibold">Thanks! We&apos;ll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
            <textarea placeholder="Message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" className="w-full px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-red-700 transition">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
