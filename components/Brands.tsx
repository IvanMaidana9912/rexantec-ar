'use client'
import Image from 'next/image';

const logos = [
  'blue-star',
  'westric',
  'hisense',
  'toshiba',
  'carrier',
  'hitachi',
  'daikin',
  'tadiran',
  'lg',
];

export default function Brands() {
  return (
    <section id="marcas" className="py-16 bg-gray-100">
      <div className="mx-auto px-4 sm:px-8 lg:px-0 overflow-hidden">
        <div
          className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 w-max"
          style={{ animation: 'scroll 20s linear infinite' }}
        >
          {/* Duplicamos el array para loop continuo */}
          {[...logos, ...logos].map((name, idx) => (
            <div key={idx} className="flex-shrink-0 relative w-32 sm:w-40 md:w-52 h-16 sm:h-20 md:h-28 ">
              <Image
                src={`/images/brands/${name}.png`}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes para la animación */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
