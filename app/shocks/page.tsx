import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    img: '/images/lugs-cad-drawing.jpg',
    step: '01',
    title: 'CAD & Technical Drawing',
    en: 'Lug geometry designed in CAD with technical drawings — dimensions, tolerances, material specs.',
    np: 'क्याड र टेक्निकल ड्राइङ — आयाम, टलरेन्स, सामग्री विशेषता।',
  },
  {
    img: '/images/casting-process.png',
    step: '02',
    title: 'Aluminum Casting',
    en: 'Molten aluminum is poured into a closed mold, cooled, then ejected. The lug gets its structural shape here.',
    np: 'पग्लिएको एलुमिनियम मोल्डमा हालिन्छ, चिसो बनाइन्छ, अनि निकालिन्छ।',
  },
  {
    img: '/images/shock-lug-mold.png',
    step: '03',
    title: 'Lug Mold Design',
    en: 'Engineered with a main core, cavity, and side core. Forms the mounting bore and bracket profile.',
    np: 'मुख्य कोर, क्याभिटी र साइड कोरबाट माउन्टिङ बोर बनाइन्छ।',
  },
  {
    img: '/images/lug-machining.png',
    step: '04',
    title: 'CNC Lug Machining',
    en: 'Critical surfaces — bores, faces, slots — are drilled and milled to precise tolerance.',
    np: 'बोर, सतह र स्लटहरू सटीक रूपमा ड्रिल तथा मिलिङ गरिन्छ।',
  },
];

export default function Shocks() {
  return (
    <main>
      <Header />
      <section className="bg-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">How It&apos;s Made</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-xxl tracking-tight mb-4">Shocks — Manufacturing</h1>
          <p className="text-gray-500 max-w-2xl text-lg mb-4">Lugs casting → mold design → CNC machining.</p>
          <p className="text-gray-400 max-w-2xl mb-16">लग कास्टिङ → मल्ड डिजाइन → सीएनसी मेसिनिङ।</p>

          <div className="space-y-16">
            {steps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img src={s.img} alt={s.title} className="w-full h-auto block" />
                </div>
                <div className="lg:col-span-2">
                  <span className="text-sm font-bold text-accent tracking-widest">{s.step}</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-xxl">{s.title}</h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">{s.en}</p>
                  <p className="mt-2 text-gray-500 leading-relaxed text-sm">{s.np}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}