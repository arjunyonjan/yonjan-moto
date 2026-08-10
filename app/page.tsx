// @ts-nocheck
'use client';

import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useScrollProgress, useCountUp } from './hooks/useScroll';

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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((c) => obs.observe(c));
  }, []);
  return ref;
}

export default function Home() {
  const progress = useScrollProgress();
  const revealRef = useReveal();
  const [lightbox, setLightbox] = useState(null);
  const molds = useCountUp(24, 2000);
  const years = useCountUp(3, 1500);
  const materials = useCountUp(8, 1800);
  const [heroY, setHeroY] = useState(0);

  useEffect(() => {
    const onScroll = () => setHeroY(window.scrollY * 0.4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((lightbox + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <main>
      <div className="scroll-progress" style={{ width: progress + '%' }} />
      <Header />

      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="parallax-bg absolute inset-0 -top-20 -bottom-20" style={{ transform: 'translateY(' + heroY + 'px)' }}>
          <img src="/images/cnc-mold.png" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="reveal text-sm font-semibold tracking-[0.4em] text-accent uppercase mb-6">Nepal&apos;s Moto Forge</p>
          <h1 className="reveal text-6xl sm:text-9xl font-extrabold tracking-tighter text-xxl leading-[0.9]" style={{ transitionDelay: '0.1s' }}>
            BUILD.<br/>RIDE.<br/><span className="gradient-text">REPEAT.</span>
          </h1>
          <p className="reveal mt-8 text-xl sm:text-2xl font-medium text-gray-500 max-w-xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Custom Fairings &middot; Injection Molding &middot; Vacuum Forming
          </p>
          <a href="#process" className="reveal inline-block mt-12 px-10 py-4 bg-accent text-white font-bold rounded text-lg hover:bg-red-700 transition tracking-wide" style={{ transitionDelay: '0.3s' }}>
            Explore the Process &darr;
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs tracking-widest animate-bounce">SCROLL</div>
      </section>

      <section className="bg-xxl py-16">
        <div ref={revealRef} className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div className="reveal">
            <span ref={molds.ref} className="text-4xl sm:text-5xl font-extrabold text-white">{molds.val}</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-accent">+</span>
            <p className="mt-2 text-sm text-gray-400 tracking-wide">Molds Designed</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span ref={years.ref} className="text-4xl sm:text-5xl font-extrabold text-white">{years.val}</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-accent">+</span>
            <p className="mt-2 text-sm text-gray-400 tracking-wide">Years Experience</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <span ref={materials.ref} className="text-4xl sm:text-5xl font-extrabold text-white">{materials.val}</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-accent">+</span>
            <p className="mt-2 text-sm text-gray-400 tracking-wide">Materials Mastered</p>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <p className="reveal text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">The Process</p>
          <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight" style={{ transitionDelay: '0.1s' }}>From Digital to Physical</h2>
          <p className="reveal mt-3 text-gray-500 max-w-xl" style={{ transitionDelay: '0.15s' }}>Scroll horizontally through the full manufacturing pipeline.</p>
        </div>
        <div className="h-scroll flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory">
          {processImages.map((s, i) => (
            <div key={s.step} className="snap-start shrink-0 w-[85vw] sm:w-[420px] bg-card rounded-xl overflow-hidden border border-gray-100 reveal-scale" style={{ transitionDelay: (i * 0.05) + 's' }}>
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent tracking-widest">{s.step}</span>
                <h3 className="mt-2 text-lg font-bold text-xxl">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="reveal text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Gallery</p>
          <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight" style={{ transitionDelay: '0.1s' }}>From the Floor</h2>
          <p className="reveal mt-3 text-gray-500 mb-12" style={{ transitionDelay: '0.15s' }}>Tap any image to view full size. Use arrow keys to navigate.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 stagger">
            {galleryImages.map((s, i) => (
              <div key={i} className="reveal cursor-pointer rounded-lg overflow-hidden border border-gray-100 img-zoom bg-white" onClick={() => setLightbox(i)}>
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
