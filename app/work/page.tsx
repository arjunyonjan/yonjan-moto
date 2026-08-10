'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const allImages = [
  { img: '/images/cad-render.png', cap: 'CAD Process Collage', cat: 'Design' },
  { img: '/images/mold-simulation.png', cap: 'Mold Flow Simulation', cat: 'Simulation' },
  { img: '/images/fender-assembly.png', cap: 'Fender Assembly Wireframe', cat: 'CAD' },
  { img: '/images/cnc-cavity.png', cap: 'CNC Cavity Machining', cat: 'Machining' },
  { img: '/images/mold-polishing.png', cap: 'Mold Polishing', cat: 'Finishing' },
  { img: '/images/cnc-mold.png', cap: 'CNC Mold Drilling', cat: 'Machining' },
  { img: '/images/injection-mold.png', cap: 'Injection Mold Assembly', cat: 'Mold' },
  { img: '/images/body-plastics.png', cap: 'KTM Body Plastics', cat: 'Product' },
  { img: '/images/rayzr-fender.png', cap: 'Yamaha RAYZR Fender Diagram', cat: 'Design' },
  { img: '/images/mold-halves.png', cap: 'Cavity & Core Halves', cat: 'Mold' },
  { img: '/images/robotic-mold.png', cap: 'Robotic Mold Tending', cat: 'Automation' },
  { img: '/images/robotic-fender.png', cap: 'Robotic Fender Finishing', cat: 'Automation' },
  { img: '/images/helmet-sls.png', cap: 'SLS Helmet Prototype', cat: 'Prototype' },
  { img: '/images/dirt-bike-plastics.png', cap: 'Dirt Bike Plastics Production', cat: 'Product' },
  { img: '/images/character-panels.png', cap: 'Character Design Panels', cat: 'Artwork' },
  { img: '/images/warrior-sword.png', cap: 'Digital Artwork', cat: 'Artwork' },
];

export default function Work() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(allImages.map((i) => i.cat)))];
  const filtered = filter === 'All' ? allImages : allImages.filter((i) => i.cat === filter);

  return (
    <main>
      <Header />
      <section className="bg-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-xxl tracking-tight mb-6">The Work</h1>
          <p className="text-gray-500 max-w-2xl mb-10">Every stage of the manufacturing pipeline — from digital prototypes to production-grade parts. All real shots from the floor.</p>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === c ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((s, i) => (
              <figure
                key={s.img}
                className="break-inside-avoid rounded-lg overflow-hidden border border-gray-200 shadow-sm cursor-pointer hover:shadow-lg transition bg-white group"
                onClick={() => setLightbox(allImages.indexOf(s))}
              >
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.cap} className="w-full h-auto block group-hover:scale-[1.03] transition duration-500" />
                </div>
                <figcaption className="px-4 py-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-xxl">{s.cap}</span>
                  <span className="text-xs text-gray-400">{s.cat}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white text-sm font-medium hover:text-gray-300 transition">&times; Close</button>
            <img src={allImages[lightbox].img} alt={allImages[lightbox].cap} className="max-h-[80vh] w-auto object-contain rounded shadow-2xl" />
            <p className="mt-4 text-white text-sm">{allImages[lightbox].cap}</p>
            <div className="flex gap-6 mt-4">
              <button onClick={() => setLightbox((lightbox - 1 + allImages.length) % allImages.length)} className="text-white/70 text-sm hover:text-white transition">&larr; Prev</button>
              <span className="text-white/50 text-sm">{lightbox + 1} / {allImages.length}</span>
              <button onClick={() => setLightbox((lightbox + 1) % allImages.length)} className="text-white/70 text-sm hover:text-white transition">Next &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
