export default function Hero() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Nepal&apos;s Moto Forge</p>
        <h1 className="text-5xl sm:text-8xl font-extrabold tracking-tight text-xxl leading-none">
          BUILD.<br/>RIDE.<br/>REPEAT.
        </h1>
        <p className="mt-8 text-xl sm:text-3xl font-medium text-gray-500 max-w-2xl mx-auto">
          Custom Fairings · Injection Molding · Vacuum Forming
        </p>
        <a href="#process" className="inline-block mt-10 px-10 py-4 bg-accent text-white font-bold rounded text-lg hover:bg-red-700 transition tracking-wide">
          SEE THE PROCESS
        </a>
      </div>
    </section>
  );
}
