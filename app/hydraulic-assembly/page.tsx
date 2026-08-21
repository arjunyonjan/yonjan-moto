import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HydraulicAssembly() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Factory Floor</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-xxl leading-none">
            CRANKSHAFT<br />BEARING PRESS
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-medium text-gray-500 max-w-2xl mx-auto">
            Single-arm hydraulic press &middot; Bearing onto crankshaft &middot; Suzuki · Honda · Yamaha
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="px-4 py-2 bg-red-50 text-accent text-sm font-semibold rounded-full">Source: Crankshaft Factory (China)</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">Machine: CBO Single-Arm Hydraulic Press</span>
          </div>
        </div>
      </section>

      {/* The Operation */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">The Operation</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">One Machine. One Job. Done Right.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left — image grid */}
            <div className="grid grid-cols-2 gap-3">
              {[1,3,6,9].map((n) => (
                <div key={n} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img src={`/images/hydraulic/frame_${String(n).padStart(3,'0')}.jpg`} alt={`Frame ${n}`} className="w-full h-auto block" />
                </div>
              ))}
            </div>

            {/* Right — description */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-xxl mb-2">What You See</h3>
                <p className="text-gray-600 leading-relaxed">
                  One worker. One C-frame hydraulic press. A box of bearings on the table. He picks up a bearing, places it on the crankshaft journal, and the press pushes it down. That&apos;s it. Repeat for each journal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-xxl mb-2">The Machine</h3>
                <p className="text-gray-600 leading-relaxed">
                  CBO brand single-arm hydraulic press (单臂液压机). Spec plate visible: model YB-series, rated tonnage for bearing press-fit operations. Orange frame, chrome cylinder, yellow-black striped press head.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-xxl mb-2">The Parts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ball bearings (steel, sealed) in a cardboard box. Crankshafts — small displacement motorcycle type. The bearing gets pressed onto the crankshaft journal to create a tight interference fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by step — honest, short */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Frame by Frame</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">20 Seconds, Same Angle</h2>

          <div className="space-y-4">
            {[
              { frame: 1, t: '0s', desc: 'Worker positions crankshaft in the press fixture. Bearings on the table ready.' },
              { frame: 2, t: '2s', desc: 'Hand places bearing onto the crankshaft journal. Press head above.' },
              { frame: 3, t: '4s', desc: 'Press comes down. Bearing seats onto the journal with force.' },
              { frame: 4, t: '6s', desc: 'Crankshaft rotated. Next journal lined up for bearing.' },
              { frame: 5, t: '8s', desc: 'Another bearing placed. Same motion, different journal.' },
              { frame: 6, t: '10s', desc: 'Press down again. Bearing seated. Box of bearings getting smaller.' },
              { frame: 7, t: '12s', desc: 'Crankshaft flipped. Working the other side now.' },
              { frame: 8, t: '14s', desc: 'Press action. Steady rhythm — place, press, rotate.' },
              { frame: 9, t: '16s', desc: 'Nearly done. Last bearing being seated.' },
              { frame: 10, t: '18s', desc: 'Finished crankshaft. All bearings pressed. Ready for next stage.' },
            ].map((s) => (
              <div key={s.frame} className="flex gap-4 items-start bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                  <img src={`/images/hydraulic/frame_${String(s.frame).padStart(3,'0')}.jpg`} alt={`t=${s.t}`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent tracking-widest">t={s.t}</span>
                  <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Tells Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">For YonjanMoto</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">What This Means</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-2">Press-Fit Bearing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                This is how bearings go onto crankshafts — hydraulic press, tight tolerance, interference fit. No glue, no welding. Just force.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-2">Suzuki · Honda · Yamaha</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Factory makes crankshafts for all three brands. Same process, different dimensions per engine model.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-2">China Supply Chain</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                CBO press, Mandarin spec plate. This is the kind of supplier YonjanMoto sources parts from for Nepal rebuilds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            Source: <a href="https://www.instagram.com/reel/DbQfdZExtmz/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram Reel — Crankshaft Factory</a> &middot; 10 frames extracted at 2s intervals
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
