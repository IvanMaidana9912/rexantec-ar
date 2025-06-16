'use client';

import { useRef } from 'react';
import { useCountUp } from './hooks/useCountUp';
import { useInView } from './hooks/useInView';


export default function Stats() {
  const items = [
    { value: '+190', label: 'Instalaciones' },
    { value: '+54', label: 'Clientes satisfechos' },
    { value: '20',  label: 'Reseñas en Google' },
    { value: '+14', label: 'Empresas corporativas' },
  ];

  // Ref para la sección y detectar cuando entra en viewport
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.3, triggerOnce: true });

  return (
    <section id="stats" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="bg-[#D6002E] rounded-2xl p-8 md:p-12 mx-auto max-w-5xl"
          style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center text-white">
            {items.map(({ value, label }, i) => {
              // Extraemos el número y el sufijo
              const end = parseInt(value.replace(/\D/g, ''), 10);
              const suffixMatch = value.match(/[^0-9]+$/);
              const suffix = suffixMatch ? suffixMatch[0] : '';

              // Hook count-up
              const count = useCountUp(end, 2000, inView);

              return (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-extrabold leading-none">
                    {inView ? `+${count}` : 0}
                    {suffix}
                  </div>
                  <div className="mt-2 text-sm md:text-base font-medium">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}