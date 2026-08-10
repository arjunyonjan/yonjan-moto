import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    img: '/images/casting-process.png',
    step: '01',
    title: 'Aluminum Casting',
    desc: 'The lug starts as a casting. Molten aluminum is poured into a closed mold, cooled, and ejected. This gives the lug its raw structural shape before any precision machining.',
  },
  {
    img: '/images/shock-lug-mold.png',
    step: '02',
    title: 'Mold Design',
    desc: 'The mold is engineered with a main core, cavity, and side core (slide). These form the lug geometry — the mounting bore, faces, and bracket profile that will later be machined to tolerance.',
  },
  {
    img: '/images/lug-machining.png',
    step: '03',
    title: 'CNC Machining',
    desc: 'After casting, the lug goes to CNC. Critical surfaces — mounting faces, bore holes, alignment slots — are drilled and milled to precise dimensions. Cooling fluid carries away chips and heat.',
  },
];

export default function Shocks() {
  return (
    <main>
      <Header />
      <section className="bg-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">How It&apos;s Made</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-xxl tracking-tight mb-6">Dirt Bike Shock Lugs</h1>
          <p className="text-gray-500 max-w-2xl text-lg mb-16">The shock lug is the mounting bracket that connects the shock absorber to the swingarm and frame. Here&apos;s how it&apos;s manufactured — from casting to finished part.</p>

          <div className="space-y-20">
            {steps.map((s) => (
              <div key={s.step} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img src={s.img} alt={s.title} className="w-full h-auto block" />
                </div>
                <div>
                  <span className="text-sm font-bold text-accent tracking-widest">{s.step}</span>
                  <h2 className="mt-3 text-3xl font-extrabold text-xxl">{s.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">{s.desc}</p>
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
