import Header from '../components/Header';
import Footer from '../components/Footer';

const lugsSteps = [
  {
    img: '/images/lugs-cad-drawing.jpg',
    step: '01',
    title: 'CAD & Technical Drawing',
    en: 'Lug geometry designed in CAD with technical drawings, dimensions, and tolerance specs.',
    np: 'क्याड र टेक्निकल ड्राइङ — आयाम र टलरेन्स निर्धारण।',
  },
  {
    img: '/images/shock-lug-mold.png',
    step: '02',
    title: 'Mold Design',
    en: 'Split-mold design with main core, cavity, and side core (slide). Engineered for lug bracket geometry.',
    np: 'मुख्य कोर, क्याभिटी र साइड कोर (स्लाइड) को मल डिजाइन।',
  },
  {
    img: '/images/lugs-mold-halves.png',
    step: '03',
    title: 'Mold Assembly',
    en: 'Mold halves closed with green inserts and side cores positioned for cavity filling.',
    np: 'हरियो इन्सर्ट र साइड कोरले मल बनाइन्छ।',
  },
  {
    img: '/images/lugs-casting-pour.png',
    step: '04',
    title: 'Pouring',
    en: 'Molten metal (orange-yellow) pours into the closed mold. Controlled flow for defect-free casting.',
    np: 'पिघ्लिएको धातु मलमा हालिन्छ।',
  },
  {
    img: '/images/casting-process.png',
    step: '05',
    title: 'Casting Process',
    en: 'Mold closed, aluminum poured, cooling, mold opened.',
    np: 'मल बनाइन्छ, एलुमिनियम हालिन्छ, ठण्डा, खोलिन्छ।',
  },
  {
    img: '/images/lugs-components.png',
    step: '06',
    title: 'Casted Lugs',
    en: 'Two cast lug components with central bore, mounting arm, and screw holes — ready for machining.',
    np: 'बोर र स्क्रु ढाका लगहरू — मेसिनिङ तयार।',
  },
  {
    img: '/images/lug-machining.png',
    step: '07',
    title: 'CNC Lug Machining',
    en: 'CNC drilling bores, faces, and slots to precise tolerance. Coolant carries away chips.',
    np: 'बोर, सतह र स्लट सटीक ड्रिल तथा मिलिङ गरिन्छ।',
  },
];

const cartridgeSteps = [
  {
    img: '/images/cartridge-cylinder.png',
    step: '01',
    title: 'Cartridge Cylinder',
    en: 'CAD model + CNC machining of hollow cylinder with internal holes. Text reads “CARTRIDGE CYLINDER”.',
    np: 'क्याड मोडेल + सीएनसी मेसिनिङ — हलो वाला सिलिन्डर।',
  },
  {
    img: '/images/damper-rod.png',
    step: '02',
    title: 'Damper Rod',
    en: 'Cylindrical damper rod in 3 views: 3D model, CNC turning to tight tolerance, finished quality-checked.',
    np: 'ड्याम्पर रड — ३अवस्था: क्याड, सीएनसी ढिल्लो, फिनिश।',
  },
  {
    img: '/images/cartridge-piston.png',
    step: '03',
    title: 'Mid-Valve Piston',
    en: 'Three stages: CAD model, CNC drilling, finished piston with polished internal threading.',
    np: 'तीन अवस्था: क्याड, सीएनसी ढिल्लो, फिनिष्ड पिस्टन।',
  },
  {
    img: '/images/cartridge-base-valve.png',
    step: '04',
    title: 'Base Valve',
    en: 'Circular component CAD + CNC drilling with coolant flow, then polished to consistent thickness.',
    np: 'सर्कुलर कम्पोनेन्ट — क्याड, सीएनसी ढिल्लो, पोलिशेड।',
  },
  {
    img: '/images/cartridge-top-cap.png',
    step: '05',
    title: 'Top Cap',
    en: 'Gold-plated cartridge top cap with precision concentric rings. CAD, CNC, polished finish.',
    np: 'गल्ड प्लेटेड टप क्याप — सीएनसी मेसिनिङ, पोलिशेड।',
  },
];

const forkSteps = [
  {
    img: '/images/outer-collar.png',
    step: '01',
    title: 'Outer Collar',
    en: 'CNC turning collar: CAD model → lathe turning → finished matte gold surface.',
    np: 'आउटर कलर — क्याड, सीएनसी ढिल्लो, म्याट गोल्ड।',
  },
  {
    img: '/images/front-forks-a.png',
    step: '02',
    title: 'Front Forks - SHOWA',
    en: 'Gold SHOWA front forks with red accents, tested on dirt terrain.',
    np: 'शोवा फ्रन्ट फर्क् — माटोमा परीक्षण।',
  },
  {
    img: '/images/front-forks-b.png',
    step: '03',
    title: 'SFF Air Forks',
    en: 'SHOWA SFF AIR front forks — Separate Function Fork. Race-proven, precise control.',
    np: 'शोवा एसएफएफ एयर — रेस-प्रुभ्ड, प्रिसिस कन्ट्रोल।',
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
          <p className="text-gray-500 max-w-2xl text-lg mb-4">End-to-end: lugs casting, CNC machining, cartridge assembly.</p>
          <p className="text-gray-400 max-w-2xl mb-16">शक-सस्टम निर्माण: लग कास्टिङ, सीएनसी मेसिनिङ, क्याबिनेट असेम्बली।</p>

          <h2 className="text-2xl font-bold text-xxl mb-6">01 — Lugs Manufacturing</h2>
          <div className="space-y-12 mb-16">
            {lugsSteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">{s.step}</span>
                  <h3 className="mt-2 text-xl font-extrabold text-xxl">{s.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{s.en}</p>
                  <p className="mt-2 text-gray-500 leading-relaxed text-sm">{s.np}</p>
                </div>
                <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img src={s.img} alt={s.title} className="w-full h-auto block" />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-xxl mb-6">02 — Cartridge Assembly</h2>
          <div className="space-y-12">
            {cartridgeSteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">C-{s.step}</span>
                  <h3 className="mt-2 text-xl font-extrabold text-xxl">{s.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{s.en}</p>
                  <p className="mt-2 text-gray-500 leading-relaxed text-sm">{s.np}</p>
                </div>
                <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img src={s.img} alt={s.title} className="w-full h-auto block" />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-xxl mb-6 mt-20">03 — Fork Tubes</h2>
          <div className="space-y-12">
            {forkSteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">F-{s.step}</span>
                  <h3 className="mt-2 text-xl font-extrabold text-xxl">{s.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{s.en}</p>
                  <p className="mt-2 text-gray-500 leading-relaxed text-sm">{s.np}</p>
                </div>
                <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img src={s.img} alt={s.title} className="w-full h-auto block" />
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