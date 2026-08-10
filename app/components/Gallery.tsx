const shots = [
  { img: '/images/body-plastics.png', cap: 'KTM Mid Body Plastics — molded & textured' },
  { img: '/images/rayzr-fender.png', cap: 'Yamaha RAYZR 125 fender — mold key diagram' },
  { img: '/images/mold-halves.png', cap: 'Cavity & Core halves — fender mold assembly' },
  { img: '/images/robotic-mold.png', cap: 'Robotic arm — mold tending & cooling' },
  { img: '/images/helmet-sls.png', cap: 'SLS 3D print — helmet prototype stage' },
  { img: '/images/robotic-fender.png', cap: 'Automated fender trimming & finishing' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-card py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-2xl sm:text-4xl font-bold text-center text-xxl mb-4">From Nepal, For the World</p>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Production shots from the floor. Real molds, real parts, real processes.</p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {shots.map((s) => (
            <figure key={s.cap} className="break-inside-avoid rounded-lg overflow-hidden border border-gray-100 bg-white">
              <img src={s.img} alt={s.cap} className="w-full h-auto block" />
              <figcaption className="px-4 py-3 text-xs text-gray-500 border-t border-gray-50">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
