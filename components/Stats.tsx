'use client'

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const items = [
    { end: 190, suffix: '+', label: 'Instalaciones' },
    { end: 54,  suffix: '+', label: 'Clientes satisfechos' },
    { end: 20,  suffix: '',  label: 'Reseñas en Google' },
    { end: 14,  suffix: '+', label: 'Empresas corporativas' },
  ];

  // Cuando el 30% de la sección sea visible, dispara solo una vez
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="stats" ref={ref} className="py-16 bg-[#0f446ca1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className="bg-[#E22128] rounded-2xl p-6 sm:p-8 md:p-12 mx-auto max-w-5xl shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {items.map(({ end, suffix, label }, i) => (
              <div key={i}>
                  <div
                    className="
                      text-4xl md:text-5xl font-extrabold leading-none
                      font-mono min-w-[4ch]
                    "
                  >
                  {inView ? (
                    <CountUp end={end} duration={2} suffix={suffix} />
                  ) : (
                    `0${suffix}`
                  )}
                </div>
                <div className="mt-2 text-sm sm:text-base font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
