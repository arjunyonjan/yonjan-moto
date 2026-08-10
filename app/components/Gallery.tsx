'use client';

import { useState } from 'react';

const shots = [
  { img: '/images/cad-render.png', cap: 'CAD collage — parts, molds, machining, finished bike' },
  { img: '/images/body-plastics.png', cap: 'KTM Mid Body Plastics — molded & textured' },
  { img: '/images/rayzr-fender.png', cap: 'Yamaha RAYZR 125 fender — mold key diagram' },
  { img: '/images/mold-halves.png', cap: 'Cavity & Core halves — fender mold assembly' },
  { img: '/images/robotic-mold.png', cap: 'Robotic arm — mold tending & cooling' },
  { img: '/images/helmet-sls.png', cap: 'SLS 3D print — helmet prototype stage' },
  { img: '/images/robotic-fender.png', cap: 'Automated fender trimming & finishing' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-card py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-4">From Nepal, For the World</p>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Production shots from the floor. Tap to enlarge.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <figure
              key={s.cap}
              className="rounded-lg overflow-hidden border border-gray-100 bg-white cursor-pointer hover:border-gray-300 transition"
              onClick={() => setActive(i)}
            >
              <img src={s.img} alt={s.cap} className="w-full h-auto block" />
              <figcaption className="px-4 py-3 text-xs text-gray-500 border-t border-gray-50">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-white text-sm font-medium hover:text-gray-300 transition"
            >
              ✕ Close
            </button>
            <img
              src={shots[active].img}
              alt={shots[active].cap}
              className="max-h-[80vh] w-auto object-contain rounded shadow-2xl"
            />
            <p className="mt-4 text-white text-sm">{shots[active].cap}</p>
            <div className="flex gap-6 mt-4">
              <button
                onClick={() => setActive((active - 1 + shots.length) % shots.length)}
                className="text-white/70 text-sm hover:text-white transition"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActive((active + 1) % shots.length)}
                className="text-white/70 text-sm hover:text-white transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
