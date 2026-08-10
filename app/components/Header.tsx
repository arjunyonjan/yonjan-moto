'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-gray-100' : 'bg-transparent')}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className={'text-xl font-extrabold tracking-tight transition-colors ' + (scrolled ? 'text-xxl' : 'text-white')}>YONJAN</span>
          <span className="text-xl font-extrabold tracking-tight text-accent">MOTO</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-sm font-medium">
          <a href="#process" className={'hover:text-accent transition ' + (scrolled ? 'text-gray-600' : 'text-white/90')}>Process</a>
          <a href="#gallery" className={'hover:text-accent transition ' + (scrolled ? 'text-gray-600' : 'text-white/90')}>Gallery</a>
          <a href="#contact" className={'hover:text-accent transition ' + (scrolled ? 'text-gray-600' : 'text-white/90')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
