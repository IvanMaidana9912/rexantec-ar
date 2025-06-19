'use client'

import Image from 'next/image';

export interface Supporter {
  src: string;
  alt: string;
}

interface SupportersProps {
  items: Supporter[];
}

export default function Supporters({ items }: SupportersProps) {
  return (
    <section
      id="supporters"
      className="py-16 bg-[#0f446ca1]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold text-black mb-8"
          data-aos="fade-down"
        >
          Empresas que nos apoyan
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
        >
          {items.map(({ src, alt }, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-full shadow-sm transition-transform hover:scale-105 flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <Image
                src={src}
                alt={alt}
                width={120}
                height={80}
                className="object-contain rounded-full w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
