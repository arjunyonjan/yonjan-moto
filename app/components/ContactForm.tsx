export default function ContactForm() {
  return (
    <section id="contact" className="bg-card py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-2xl sm:text-4xl font-bold text-xxl mb-10">Let&apos;s Build Your Parts</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
          <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent" />
          <button type="submit" className="w-full px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-red-700 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
