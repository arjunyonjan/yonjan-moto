const tones = [
  'from-gray-100 to-gray-200',
  'from-stone-100 to-stone-200',
  'from-zinc-100 to-zinc-200',
  'from-gray-50 to-gray-150',
  'from-stone-50 to-stone-150',
  'from-zinc-50 to-zinc-150',
];
const h = ['h-56', 'h-72', 'h-64', 'h-80', 'h-60', 'h-76'];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-14">
          From Nepal, For the World
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {tones.map((t, i) => (
            <div
              key={i}
              className={`${h[i]} w-full rounded-xl bg-gradient-to-br ${t} flex items-center justify-center text-gray-300 text-sm tracking-widest uppercase break-inside-avoid border border-gray-100`}
            >
              Shot {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
