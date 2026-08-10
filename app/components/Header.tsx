export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-extrabold tracking-tight text-xxl">YONJAN</span>
          <span className="text-xl font-extrabold tracking-tight text-accent">MOTO</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#process" className="hover:text-accent transition">Process</a>
          <a href="#gallery" className="hover:text-accent transition">Gallery</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
