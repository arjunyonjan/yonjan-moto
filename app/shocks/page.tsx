import Header from '../components/Header';
import Footer from '../components/Footer';

const lugsSteps = [
  {
    img: '/images/lugs-cad-drawing.jpg',
    step: '01',
    title: 'CAD & Technical Drawing',
    en: 'Lug geometry designed in CAD with full technical drawings, dimensions, and tolerance stack-ups.',
    np: 'क्याड र टेक्निकल ड्राइङ — आयाम र टलरेन्स निर्धारण।',
  },
  {
    img: '/images/lugs-split-mold.png',
    step: '02',
    title: 'Split Mold Design',
    en: 'Front shocks lug split mold: main core, cavity, and side core (slide) with green connector alignment pins.',
    np: 'फ्रन्ट शक लगको स्प्लिट मल — मुख्य कोर, क्याभिटी, साइड स्लाइड।',
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
    title: 'Molten Metal Pouring',
    en: 'Orange-yellow molten aluminum flows into the closed mold at controlled temperature.',
    np: 'पिघ्लिएको एलुमिनियम मलमा हालिन्छ।',
  },
  {
    img: '/images/lugs-casting-process.png',
    step: '05',
    title: 'Casting Cycle',
    en: 'Four-stage casting: mold closed, aluminum poured, cooling phase, mold opened.',
    np: 'मल बनाइन्छ, ढलाइन्छ, थण्डा हुन्छ, खोलिन्छ।',
  },
  {
    img: '/images/lugs-components.png',
    step: '06',
    title: 'Raw Casted Lugs',
    en: 'Two as-cast lug components with central bore, mounting arm, and screw holes — sandblasted, ready for CNC.',
    np: 'बोर र स्क्रु ढाका लगहरू — स्यान्डब्लास्ट गरिएका।',
  },
  {
    img: '/images/lug-machining.png',
    step: '07',
    title: 'CNC Precision Machining',
    en: 'CNC drilling bores, faces, and mounting slots to ±0.01mm tolerance. Coolant clears chips.',
    np: 'बोर, सतह र स्लट सटीक ड्रिल — ±०.०१mm टलरेन्स।',
  },
  {
    img: '/images/lug-drill-cutting.png',
    step: '08',
    title: '5-Axis Drilling',
    en: 'Multi-axis drill cutting into mold cavity with coolant spray — precision for complex lug geometry.',
    np: '५-अक्सिस ढिल्लो — जटिल लग ज्यामिति।',
  },
];

const cartridgeSteps = [
  {
    img: '/images/cartridge-cylinder.png',
    step: '01',
    title: 'Cartridge Cylinder',
    en: 'CAD model + CNC boring of hollow cylinder with precision internal holes.',
    np: 'क्याड + सीएनसी — हलो वाला सिलिन्डर।',
  },
  {
    img: '/images/cartridge-cylinder-new.png',
    step: '02',
    title: 'Cylinder Machining',
    en: 'CNC drilling of threaded opening with dual cutting tools (orange + blue) — internal hole honing.',
    np: 'ढुङ्गा र बेलुवा ढिल्लो — अन्तरआँखी।',
  },
  {
    img: '/images/damper-rod.png',
    step: '03',
    title: 'Damper Rod',
    en: 'Cylindrical damper rod in 3 views: 3D model, CNC threading/length to tolerance, finished QC-checked.',
    np: 'ड्याम्पर रड — ३ अवस्था: क्याड, सीएनसी, फिनिश।',
  },
  {
    img: '/images/damper-rod-new.png',
    step: '04',
    title: 'Damper Rod — Precision',
    en: 'Gold damper rod: CAD with dimensions, CNC turning/facing, machine-cleaned + quality verified.',
    np: 'सुनौलो ड्याम्पर रड — आयाम, सीएनसी, QC।',
  },
  {
    img: '/images/mid-valve-piston.png',
    step: '05',
    title: 'Mid-Valve Piston',
    en: 'Three stages: CAD model, CNC drilling, polished piston with precision internal threading.',
    np: 'तीन अवस्था: क्याड, सीएनसी, फिनिश्ड पिस्टन।',
  },
  {
    img: '/images/mid-valve-piston-new.png',
    step: '06',
    title: 'Mid-Valve Piston — Drilling',
    en: 'CNC drilling shows cutters working on circular piston with ring grooves — coolant visible.',
    np: 'सर्कुलर पिस्टनमा ढिल्लो — कूलर्यान्टको बूँद।',
  },
  {
    img: '/images/cartridge-base-valve.png',
    step: '07',
    title: 'Base Valve',
    en: 'Circular base valve: CAD + CNC drilling with coolant flow, polished to consistent thickness.',
    np: 'सर्कुलर बेस व्यालभे — क्याड, सीएनसी, पोलिशेड।',
  },
  {
    img: '/images/shims-stacking.png',
    step: '08',
    title: 'Shim Stack',
    en: 'Precision metal shims — CAD layout, stamping process revealing internal rings, finished stack arrangement.',
    np: 'सिम श्याक — क्याड, स्ट्याम्पिङ, फिनिश।',
  },
  {
    img: '/images/top-cap-upper.png',
    step: '09',
    title: 'Upper Cartridge Top Cap',
    en: 'Gold-plated upper cartridge top cap: CAD, CNC machining with concentric rings, finished polished surface.',
    np: 'गल्ड प्लेटेड टप क्याप — सीएनसी, पोलिशेड।',
  },
  {
    img: '/images/cartridge-top-cap.png',
    step: '10',
    title: 'Lower Cartridge Top Cap',
    en: 'Lower cartridge top cap with precision concentric machining rings — final assembly-ready.',
    np: 'तल्लो टप क्याप — असेम्बली तयार।',
  },
];

const forkSteps = [
  {
    img: '/images/inner-fork-tube.png',
    step: '01',
    title: 'Precision Inner Fork Tube',
    en: 'CNC turning of inner fork tube: CAD with dimensions, lathe threading + diameter, finished smooth surface.',
    np: 'इनर फर्क ट्यूब — क्याड, सीएनसी, समत सतह।',
  },
  {
    img: '/images/inner-tube-fork-model.png',
    step: '02',
    title: 'Inner Fork Assembly — CAD & Simulation',
    en: '3D CAD model of fork inner tube with dimension labels, performance simulation graph below.',
    np: 'फर्क इनर ट्यूबको ३डी मोडेल + सिमुलेसन।',
  },
  {
    img: '/images/inner-tube-waterjet.png',
    step: '03',
    title: 'Water Jet Cutting',
    en: 'High-pressure water jet cutting cylindrical inner tube component inside precision machine housing.',
    np: 'वाटर जेट कटिङ — सिलिन्डर ट्यूब।',
  },
  {
    img: '/images/outer-collar.png',
    step: '04',
    title: 'Outer Collar',
    en: 'CNC turning of outer collar: CAD → lathe turning → finished matte gold surface.',
    np: 'आउटर कलर — क्याड, सीएनसी, म्याट गोल्ड।',
  },
  {
    img: '/images/front-forks-a.png',
    step: '05',
    title: 'SHOWA Front Forks',
    en: 'Gold SHOWA front forks with red accents — tested on dirt terrain for damping response.',
    np: 'शोवा फ्रन्ट फर्क् — माटोमा परीक्षण।',
  },
  {
    img: '/images/front-forks-b.png',
    step: '06',
    title: 'SFF-Air Front Forks',
    en: 'SHOWA SFF Air — Separate Function Fork. Race-proven cartridge design with precise compression/rebound.',
    np: 'शोवा एसएफएफ एयर — रेस-प्रुभ्ड।',
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
          <p className="text-gray-500 max-w-2xl text-lg mb-4">End-to-end: lugs casting, CNC machining, cartridge assembly, fork tuning.</p>
          <p className="text-gray-400 max-w-2xl mb-16">शक-सस्टम निर्माण: लग कास्टिङ, सीएनसी मेसिनिङ, क्याबिनेट असेम्बली।</p>

          <div className="mb-16">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 group">
              <div className="relative">
                <img src="/images/front-shock-video.jpg" alt="Front Shock Overview" className="w-full h-auto block grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">Factory Overview — SHOWA</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">Factory overview of complete front shock assembly line</p>
          </div>

          <h2 className="text-2xl font-bold text-xxl mb-6">01 — Lugs Manufacturing</h2>
          <div className="space-y-12 mb-16">
            {lugsSteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">L-{s.step}</span>
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
          <div className="space-y-12 mb-16">
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

          <h2 className="text-2xl font-bold text-xxl mb-6">03 — Fork Tubes</h2>
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
