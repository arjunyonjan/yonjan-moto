import Header from '../components/Header';
import Footer from '../components/Footer';

const assemblySteps = [
  {
    img: '/images/hydraulic/frame_001.jpg',
    step: '01',
    title: 'Bearing Preparation & Sorting',
    en: 'Worker in white gloves sorts bearings from organized bins. Large and small bearings paired for crankshaft journals. Teeth rings stacked in cardboard boxes to the right. Multiple crankshafts staged on worktables behind.',
    np: 'सफेद ग्लभ लगाएर कामदारले बेअरिङहरू छाँट्दै। ठूला र साना बेअरिङहरू क्रैंकशाफ्ट जर्नलका लागि जोडी। दाँत रिङहरू दायाँतिर कार्डबोर्ड बक्समा।',
  },
  {
    img: '/images/hydraulic/frame_002.jpg',
    step: '02',
    title: 'Hydraulic Press — Bearing Installation',
    en: 'Grey and red hydraulic press with cylindrical clamping mechanism. Bearing positioned on crankshaft journal using fixture table. Worker guides bearing into place with tool underneath. Manual precision control for tight tolerance fit.',
    np: 'खैरो र रातो हाइड्रोलिक प्रेस — सिलिन्डर क्लाम्पिङ मेकानिज्म। बेअरिङ क्रैंकशाफ्ट जर्नलमा फिक्स्चर टेबलमा राखिएको। कामदारले तलबाट टुलले गाइड गर्दै।',
  },
  {
    img: '/images/hydraulic/frame_003.jpg',
    step: '03',
    title: 'Robotic Arm — Crankshaft Positioning',
    en: 'Robotic arm with blue and white claw grippers lifts crankshaft from orange bracket. Motor assembly suspended from above with red bracket and yellow stripe. Bearing set of four visible bottom-left, teeth rings in box bottom-right.',
    np: 'रोबोटिक आर्मले नारिङ्गी ब्र्याकेटबाट क्रैंकशाफ्ट उठाउँदै। नीलो र सेतो क्ल ग्रिपरहरू। तल बायाँति चार बेअरिङ, दायाँति दाँत रिङ बक्स।',
  },
  {
    img: '/images/hydraulic/frame_004.jpg',
    step: '04',
    title: 'Assembly & Inspection Station',
    en: 'Multi-station setup: large press for forging, workstation with vice for holding, measuring instruments for tolerance checks. Conveyor system transports parts. Lubrication applied to prevent wear. Quality inspection at each stage.',
    np: 'बहु-स्टेसन सेटअप: फोर्जिङका लागि ठूलो प्रेस, भाइसमा पार्टहरू बाँध्ने, टलरेन्स जाँचका लागि मापन उपकरण। कनभेयरले पार्टहरू लैजान्छ।',
  },
  {
    img: '/images/hydraulic/frame_005.jpg',
    step: '05',
    title: 'Torque Wrench & Digital Readout',
    en: 'Silver horizontal press with two vertical orange fixtures. Yellow and black torque wrench hanging from fixtures. Digital torque reader for precise fastening. Crankshafts exit cylinder and get flipped for next assembly stage.',
    np: 'चाँदी हरिजन्टल प्रेस दुई ऊर्ध्वाधर नारिङ्गी फिक्स्चरसहित। पीलो-कालो टर्क रेन्च। डिजिटल टर्क रिडर। क्रैकशाफ्ट सिलिन्डरबाट बाहिर आएर पल्टिइन्छ।',
  },
  {
    img: '/images/hydraulic/frame_006.jpg',
    step: '06',
    title: 'Hydraulic Press — Journal Fitting',
    en: 'Worker operates hydraulic press designed for crankshaft assembly. Hydraulic arms apply significant pressure. Bearings and tooth rings pressed onto crankshaft journals under high pressure. Complex fixtures ensure precise alignment. Tight tolerances for automotive grade.',
    np: 'कामदारले क्रैंकशाफ्ट असेम्बलीका लागि बनाइएको हाइड्रोलिक प्रेस सञ्चालन गर्दै। हाइड्रोलिक आर्मले उच्च दबाब लगाउँदै। बेअरिङ र दाँत रिङहरू जर्नलमा प्रेस गरिएको।',
  },
  {
    img: '/images/hydraulic/frame_007.jpg',
    step: '07',
    title: 'Drill & Spindle — Hole Machining',
    en: 'Cutting machine with drill region and spindle. Drilling holes into crankshaft for oil passages and assembly pins. Vise holds crankshaft securely. Bearing shells in box nearby. Worker flips crankshaft for multi-side drilling.',
    np: 'कटिङ मेसिनमा ड्रिल क्षेत्र र स्पिन्डल। क्रैकशाफ्टमा तेल मार्ग र असेम्बली पिनका लागि छेद। भाइसले क्रैकशाफ्ट बाँध्छ। कामदारले बहु-छेम ड्रिलिङका लागि पल्टाउँदै।',
  },
  {
    img: '/images/hydraulic/frame_008.jpg',
    step: '08',
    title: 'Loading Conveyor & Final Press',
    en: 'Specialized liquid pressure machine — main equipment for high-quality crankshaft production. Loading conveyor above for continuous operation. Hydraulic press fits bearings onto shafts with accuracy. Red carbon steel part on fixing device.',
    np: 'विशेष तरल दबाब मेसिन — उच्च गुणस्तर क्रैकशाफ्ट उत्पादनको मुख्य उपकरण। माथि लोडिङ कनभेयर। हाइड्रोलिक प्रेसले बेअरिङ शाफ्टमा सटीकतापूर्वक राख्छ।',
  },
  {
    img: '/images/hydraulic/frame_009.jpg',
    step: '09',
    title: 'Quality Check & Measurement',
    en: 'Crankshaft undergoes precision measurement. Micrometers, calipers, and gauges verify tolerances. Visual inspection for surface finish. Each journal checked for bearing clearance and runout.',
    np: 'क्रैकशाफ्टको सटीक मापन। माइक्रोमिटर, क्यालिपर, र गेजले टलरेन्स प्रमाणित गर्छ। सतह फिनिशका लागि दृश्य निरीक्षण। प्रत्येक जर्नलमा बेअरिङ क्लियरेन्स जाँचिएको।',
  },
  {
    img: '/images/hydraulic/frame_010.jpg',
    step: '10',
    title: 'Polishing & Final Assembly',
    en: 'Polishing and flattening surface for final finish. Crankshaft flipped and rotated mechanically — not by hand. Inner and outer bearing rings interlock with teeth rings. Final quality check with sensors before packaging.',
    np: 'अन्तिम फिनिशका लागि पोलिसिङ र समतलीकरण। क्रैकशाफ्ट मेकानिकल रूपमा पल्टिइन्छ — हातले होइन। भित्री र बाहिरी बेअरिङ रिङहरू दाँत रिङसँग जोडिन्छ। सेन्सरले अन्तिम गुणस्तर जाँच।',
  },
];

const toolsUsed = [
  { name: 'Hydraulic Press', desc: 'Primary press-fit tool — applies controlled force to seat bearings onto crankshaft journals with tight tolerances.', icon: '⚙️' },
  { name: 'Robotic Arm', desc: 'Automated crankshaft positioning with claw grippers. Blue and white grippers handle heavy crankshafts.', icon: '🤖' },
  { name: 'Torque Wrench', desc: 'Yellow and black digital torque wrench with readout for precise fastening torque.', icon: '🔧' },
  { name: 'Drill Press / Spindle', desc: 'Machining oil passages and assembly pin holes into crankshaft body.', icon: '🔩' },
  { name: 'Fixtures & Jigs', desc: 'Custom fixtures hold crankshaft in precise alignment during press operations.', icon: '📐' },
  { name: 'Micrometers & Gauges', desc: 'Precision measurement of journal diameter, bearing clearance, and runout.', icon: '📏' },
  { name: 'Vise', desc: 'Secures crankshaft during drilling and manual operations.', icon: '🗄️' },
  { name: 'Loading Conveyor', desc: 'Continuous part feeding for high-volume production line.', icon: '🔄' },
];

const partsList = [
  { name: 'Crankshaft', desc: 'Main shaft converting piston reciprocating motion to rotational motion. Multiple journals for bearing seats.', en: 'Crankshaft', np: 'क्रैंकशाफ्ट' },
  { name: 'Bearings', desc: 'Steel ring bearings — inner and outer rings. Reduce friction, distribute load, enable smooth rotation.', en: 'Bearings', np: 'बेअरिङ' },
  { name: 'Teeth Rings', desc: 'Gear teeth rings interlocking with crankshaft. Transmit power from engine to transmission.', en: 'Teeth Rings', np: 'दाँत रिङ' },
  { name: 'Spindle', desc: 'Rotating shaft driving the crankshaft assembly. Used in manufacturing bearing press operations.', en: 'Spindle', np: 'स्पिन्डल' },
  { name: 'Bearing Shells', desc: 'Half-shell bearings for connecting rod and main journal seats.', en: 'Bearing Shells', np: 'बेअरिङ शेल' },
];

export default function HydraulicAssembly() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Manufacturing Documentation</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-xxl leading-none">
            CRANKSHAFT<br />HYDRAULIC ASSEMBLY
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-medium text-gray-500 max-w-2xl mx-auto">
            Bearing Press-Fit &middot; Teeth Ring Installation &middot; Quality Inspection
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="px-4 py-2 bg-red-50 text-accent text-sm font-semibold rounded-full">10 Manufacturing Steps</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">Suzuki · Honda · Yamaha</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">Source: Crankshaft Factory</span>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">The Process</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">From Bearing Box to Finished Shaft</h2>
          <div className="space-y-8">
            {assemblySteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest">STEP {s.step}</span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-xxl mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{s.en}</p>
                  <p className="text-sm text-gray-400 leading-relaxed italic">{s.np}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Tools & Equipment</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">Factory Floor Arsenal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolsUsed.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <span className="text-2xl">{t.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-xxl">{t.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Reference */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">Parts Reference</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">What Goes Into the Assembly</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partsList.map((p) => (
              <div key={p.name} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-xxl">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{p.en}</span>
                  <span className="text-xs bg-red-50 text-accent px-2 py-1 rounded">{p.np}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Observations */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3">VLM Analysis Notes</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-xxl tracking-tight mb-12">AI Vision Observations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-3">Crankshaft Flipping</h3>
              <p className="text-gray-600 leading-relaxed">The crankshaft is flipped and rotated mechanically — not by hand — at multiple stages (frames 5, 7, 10). This allows multi-side drilling, bearing installation on both ends, and quality inspection from all angles.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-3">Bearing Press-Fit</h3>
              <p className="text-gray-600 leading-relaxed">Hydraulic press applies controlled force to seat steel ring bearings onto crankshaft journals. Tight tolerances require precise alignment via custom fixtures and jigs. Worker guides with tool underneath for manual precision.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-3">Teeth Ring Assembly</h3>
              <p className="text-gray-600 leading-relaxed">Gear teeth rings interlock with the crankshaft to transmit power from engine to transmission. Stacked in cardboard boxes, manually positioned before hydraulic press seating.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-xxl mb-3">Brand Compatibility</h3>
              <p className="text-gray-600 leading-relaxed">Factory produces crankshafts for Suzuki, Honda, and Yamaha engines. Signs and logos visible throughout the production line. Mandarin text on operational instructions indicates Chinese manufacturing origin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            Source: <a href="https://www.instagram.com/reel/DbQfdZExtmz/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram Reel — Crankshaft Factory</a> &middot; Analyzed with NVIDIA VLM Nemotron-12B &middot; 10 frames extracted at 2s intervals
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
