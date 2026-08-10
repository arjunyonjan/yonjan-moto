export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-extrabold tracking-tight text-xxl">YONJAN</span>
          <span className="font-extrabold tracking-tight text-accent">MOTO</span>
        </div>
        <p className="text-sm text-gray-400">© 2026 · Made in Nepal 🇳🇵</p>
      </div>
    </footer>
  );
}
