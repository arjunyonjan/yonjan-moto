const steps = [
  {
    title: 'CAD Design',
    desc: 'Precision 3D modeling & engineering',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 3v18"/>
      </svg>
    ),
  },
  {
    title: 'Mold Making',
    desc: 'CNC-machined injection molds',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Form & Finish',
    desc: 'Vacuum forming + paint & decals',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/><path d="m6.8 6.8 2.8 2.8"/><path d="M2 12h4"/><path d="m6.8 17.2 2.8-2.8"/><path d="M12 18v4"/><path d="m17.2 17.2-2.8-2.8"/><path d="M18 12h4"/><path d="m17.2 6.8-2.8 2.8"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
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
              <div className="text-accent mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-bold text-xxl">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
