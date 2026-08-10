const items = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  h: i % 2 === 0 ? 'h-64' : 'h-80',
}));

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-14">
          From Nepal, For the World
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((it) => (
            <div
              key={it.id}
              className={`${it.h} w-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 font-medium break-inside-avoid`}
            >
              Image {it.id}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
