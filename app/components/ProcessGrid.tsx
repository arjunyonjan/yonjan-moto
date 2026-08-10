const steps = [
  { title: 'CAD Design', desc: 'Precision 3D modeling & engineering', icon: '📐' },
  { title: 'Mold Making', desc: 'CNC-machined injection molds', icon: '🛠️' },
  { title: 'Form & Finish', desc: 'Vacuum forming + paint & decals', icon: '🎨' },
];

export default function ProcessGrid() {
  return (
    <section id="process" className="bg-card py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-14">
          Design → Manufacture → Deliver
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-xxl">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
