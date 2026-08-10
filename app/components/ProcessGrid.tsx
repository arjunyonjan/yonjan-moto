const steps = [
  {
    img: '/images/cad-render.png',
    title: '01 — CAD & Render',
    desc: '3D modeling, rendering, and simulation. Every panel, fender, and fairing starts as a digital prototype — verified for fit before any metal is cut.',
  },
  {
    img: '/images/cnc-mold.png',
    title: '02 — Mold Machining',
    desc: 'CNC machining of metal molds with internal channels. Precision drilling and cutting to form cavity and core geometry.',
  },
  {
    img: '/images/injection-mold.png',
    title: '03 — Injection Mold',
    desc: 'Steel injection molds rated for production runs. Each mold engineered for specific body panel geometry and material flow.',
  },
  {
    img: '/images/robotic-fender.png',
    title: '04 — Form & Finish',
    desc: 'Robotic trimming, water-jet finishing, and surface prep. Every fender inspected before it leaves the floor.',
  },
];

export default function ProcessGrid() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-4">Design → Manufacture → Deliver</p>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Every fairing starts as a digital model and ends as a production-grade part. Here&apos;s how.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition">
              <img src={s.img} alt={s.title} className="w-full h-auto block bg-gray-50" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-xxl">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
