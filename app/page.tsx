'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const processImages = [
  { img: '/images/cad-render.png', step: '01', title: 'CAD & Simulation', desc: '3D modeling, flow analysis, fill simulation. Verify fit before cutting metal.' },
  { img: '/images/mold-simulation.png', step: '02', title: 'Mold Flow Analysis', desc: 'Simulate temperature, flow front, fill time. Optimize the mold digitally.' },
  { img: '/images/fender-assembly.png', step: '03', title: 'Fender Assembly CAD', desc: 'Wireframe model with labeled components: cavity, core, guide pillars, ejectors.' },
  { img: '/images/cnc-cavity.png', step: '04', title: 'CNC Machining', desc: 'Roughing, finishing, polishing, texturing. Precision cavity machining.' },
  { img: '/images/mold-polishing.png', step: '05', title: 'Mold Polishing', desc: 'Hand-polished to perfection. Every surface inspected for flow marks.' },
  { img: '/images/injection-mold.png', step: '06', title: 'Injection Mold', desc: 'Steel molds rated for production runs. Engineered for material flow.' },
  { img: '/images/body-plastics.png', step: '07', title: 'Body Plastics', desc: 'Molded panels, CNC texturing, paint-ready. KTM, Yamaha, universal fit.' },
  { img: '/images/robotic-fender.png', step: '08', title: 'Robotic Finishing', desc: 'Automated trimming, water-jet, surface prep. Consistent every time.' },
];

const galleryImages = [
  { img: '/images/cnc-mold.png', cap: 'CNC Mold Machining' },
  { img: '/images/dirt-bike-plastics.png', cap: 'Dirt Bike Plastics Production' },
  { img: '/images/rayzr-fender.png', cap: 'Yamaha RAYZR Fender Diagram' },
  { img: '/images/mold-halves.png', cap: 'Cavity & Core Halves' },
  { img: '/images/robotic-mold.png', cap: 'Robotic Mold Tending' },
  { img: '/images/helmet-sls.png', cap: 'SLS Helmet Prototype' },
  { img: '/images/character-panels.png', cap: 'Character Design Panels' },
  { img: '/images/warrior-sword.png', cap: 'Digital Artwork' },
  { img: '/images/cad-render.png', cap: 'CAD Process Collage' },
  { img: '/images/injection-mold.png', cap: 'Injection Mold Assembly' },
  { img: '/images/body-plastics.png', cap: 'KTM Body Plastics' },
  { img: '/images/fender-assembly.png', cap: 'Fender Wireframe Model' },
];

export default function Home() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main>
      <Header />

      <section className="bg-white pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Nepal&apos;s Moto Forge</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-xxl leading-none">
            BUILD. RIDE. REPEAT.
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-medium text-gray-500 max-w-2xl mx-auto">
            Custom Fairings &middot; Injection Molding &middot; Vacuum Forming
          </p>
          <a href="#process" className="inline-block mt-10 px-10 py-4 bg-accent text-white font-bold rounded text-lg hover:bg-red-700 transition tracking-wide">
            Explore the Process
          </a>
        </div>
      </section>

      <section id="process" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">The Process</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">From Digital to Physical</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processImages.map((s) => (
              <div key={s.step} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img src={s.img} alt={s.title} className="w-full h-auto block" />
                <div className="p-5">
                  <span className="text-xs font-bold text-accent tracking-widest">{s.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-xxl">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Gallery</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">From the Floor</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((s, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition bg-white" onClick={() => setLightbox(i)}>
                <img src={s.img} alt={s.cap} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white text-sm font-medium hover:text-gray-300 transition">&times; Close</button>
            <img src={galleryImages[lightbox].img} alt={galleryImages[lightbox].cap} className="max-h-[80vh] w-auto object-contain rounded shadow-2xl" />
            <p className="mt-4 text-white text-sm">{galleryImages[lightbox].cap}</p>
            <div className="flex gap-6 mt-4">
              <button onClick={() => setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length)} className="text-white/70 text-sm hover:text-white transition">&larr; Prev</button>
              <span className="text-white/50 text-sm">{lightbox + 1} / {galleryImages.length}</span>
              <button onClick={() => setLightbox((lightbox + 1) % galleryImages.length)} className="text-white/70 text-sm hover:text-white transition">Next &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
