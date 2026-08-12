import Header from '../components/Header';
import Footer from '../components/Footer';

const castSteps = [
  {
    img: '/images/rear-split-mold.png',
    step: '01',
    title: 'Split Mold Design',
    en: 'Front view of the closed split mold for the rear shock absorber cylinder body — dark steel halves with a gold inner core and central passage for the tube.',
    np: 'रियर शक सिलिन्डर बडीको स्प्लिट मल — गाढा स्टिल, गोल्ड कोर, केन्द्रीय प्यासेज।',
  },
  {
    img: '/images/rear-core-mold-drawing.png',
    step: '02',
    title: 'Sand Core & Mold Engineering Drawing',
    en: 'Four-view technical drawing of the sand core split mold for the shock absorber cylinder with reservoir — top, front, and side views with dimensions.',
    np: 'सान्ड कोर स्प्लिट मलको टेक्निकल ड्राइङ — टप, फ्रन्ट, साइड भ्यू।',
  },
  {
    img: '/images/rear-cast-cylinder.png',
    step: '03',
    title: 'Casting the Cylinder Body',
    en: 'The raw cast aluminum cylinder body, suspended from a chain in the foundry, still holding loose sand and debris before cleaning.',
    np: 'फाउन्ड्रीमा कास्ट एलुमिनियम सिलिन्डर बडी — सफाइअघिको अवस्था।',
  },
  {
    img: '/images/rear-molten-pour.png',
    step: '04',
    title: 'Molten Metal Pouring',
    en: 'Glowing molten aluminum cascades into the mold, illuminating the dark foundry — the controlled-temperature pour that fills the cylinder cavity.',
    np: 'पिघ्लिएको एलुमिनियम मलमा हालिँदै — नियन्त्रित तापक्रम पोर।',
  },
];

const assemblySteps = [
  {
    img: '/images/rear-suspension-3d.png',
    step: '01',
    title: 'Suspension System — 3D Anatomy',
    en: '3D model of the complete rear suspension unit: coil spring, shock absorber, control arm, cylinder, and mounting bracket assembled.',
    np: 'पूरा रियर सस्पेन्सनको ३डी मोडेल — कोइल स्प्रिङ, शक, कन्ट्रोल आर्म।',
  },
  {
    img: '/images/rear-components-3d.png',
    step: '02',
    title: 'Component Breakdown',
    en: 'Exploded view of the shock absorber with its internal parts — piston assembly, rod, seals, and reservoir components laid out.',
    np: 'शकका सबै कम्पोनेन्ट — पिस्टन, रड, सिल, रिजर्भोयर।',
  },
  {
    img: '/images/rear-xapro-product.png',
    step: '03',
    title: 'Finished Rear Shock Absorber',
    en: 'The finished XAP Pro rear shock absorber — silver body, red accents, white coil spring, and red valve cap, assembly-ready.',
    np: 'फिनिश्ड XAP Pro रियर शक — सिल्भर बडी, रातो एक्सेन्ट, वाइट स्प्रिङ।',
  },
];

export default function RearShock() {
  return (
    <main>
      <Header />
      <section className="bg-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">How It&apos;s Made</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-xxl tracking-tight mb-4">Rear Shock — Manufacturing Exposé</h1>
          <p className="text-gray-500 max-w-2xl text-lg mb-4">Inside the factory: how a rear shock absorber cylinder is cast, then how the unit comes together.</p>
          <p className="text-gray-400 max-w-2xl mb-16">रियर शक निर्माण प्रक्रिया: कास्टिङदेखि असेम्ब्लीसम्म।</p>

          <div className="mb-16">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img src="/images/rear-suspension-3d.png" alt="Rear Suspension 3D" className="w-full h-auto block" />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">Rear suspension unit — the shock absorber at the center of the system</p>
          </div>

          <h2 className="text-2xl font-bold text-xxl mb-6">01 — Casting the Cylinder Body</h2>
          <div className="space-y-12 mb-16">
            {castSteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">R-{s.step}</span>
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

          <h2 className="text-2xl font-bold text-xxl mb-6">02 — From Parts to a Working Unit</h2>
          <div className="space-y-12">
            {assemblySteps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 order-1 lg:order-none">
                  <span className="text-sm font-bold text-accent tracking-widest">A-{s.step}</span>
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
