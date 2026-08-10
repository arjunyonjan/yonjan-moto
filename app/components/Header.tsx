export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold tracking-tight text-primary">YONJAN MOTO</div>
          <div className="text-xs text-gray-500 tracking-wide">Nepal&apos;s Moto Forge</div>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-primary">
          <a href="#process" className="hover:text-accent transition">Process</a>
          <a href="#gallery" className="hover:text-accent transition">Gallery</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
