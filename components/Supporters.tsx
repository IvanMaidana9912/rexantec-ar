'use client'

import Image from 'next/image';
import Link from 'next/link';

export interface Supporter {
  src: string;
  alt: string;
  href: string;
}

const SUPPORTERS: Supporter[] = [
  { src: '/images/supporters/alto-palermo.jpeg', alt: 'Alto Palermo', href: 'https://www.altopalermo.com.ar/' },
  { src: '/images/supporters/gentec.jpeg', alt: 'GenTec', href: 'https://www.gentecinstalaciones.com.ar/' },
  { src: '/images/supporters/cmr.jpeg', alt: 'CMR', href: 'http://countrymirefugio.com/#!/-bienvenido/' },
  { src: '/images/supporters/airmz.jpeg', alt: 'AirMZ', href: 'https://www.instagram.com/airmzrefrigeracion?igsh=MTdzMjVraGzsMm44aA==' },
  { src: '/images/supporters/edelap.jpg', alt: 'Edelap', href: 'https://www.edelap.com.ar/' },
  { src: '/images/supporters/ingem.jpg', alt: 'Logo XYZ', href: 'https://www.instagram.com/ingemaireacondicionado?igsh=Y3EzeWlwY3J2bGxu' },
  { src: '/images/supporters/bsvrv.png', alt: 'BSVRV', href: 'https://www.instagram.com/buenosairesvrv?igsh=dnJsdHpoYTlyMzl4' },
];

export default function Supporters() {
  return (
    <section
      id="supporters"
      className="py-16 bg-[#0f446ca1]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-20 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-20"
          data-aos="fade-down"
        >

          Empresas que nos apoyan
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
        >
          {SUPPORTERS.map(({ src, alt, href }, i) => (
            <Link
              target='_blank'
              href={href}
              key={i}
              className="
               w-32 h-32 
               bg-white rounded-full overflow-hidden 
               shadow-sm transition-transform hover:scale-105 
               flex items-center justify-center
             "
              data-aos="zoom-in"
              data-aos-delay={i * 250}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
