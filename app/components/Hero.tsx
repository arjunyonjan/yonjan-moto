export default function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-xxl">BUILD. RIDE. REPEAT.</h1>
        <p className="mt-6 text-2xl sm:text-4xl font-semibold text-gray-600">
          Custom Fairings · Injection Molding · Vacuum Forming
        </p>
        <a
          href="#process"
          className="inline-block mt-10 px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-red-700 transition"
        >
          Explore Process
        </a>
      </div>
    </section>
  );
}
