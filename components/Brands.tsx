'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Logos {
  name: string;
  href: string;
};

const LOGOS: Logos[] = [
  { name: 'bgh',       href: 'https://www.bgh.com.ar/climatizacion/aires-acondicionados-split' },
  { name: 'blue-star', href: 'https://www.bluestarcooking.com/' },
  { name: 'carrier',   href: 'https://www.carrier.com/residential/en/us/products/air-conditioners/' },
  { name: 'daikin',    href: 'https://daikin-argentina.com/' },
  { name: 'hisense',   href: 'https://global.hisense.com/air-conditioner' },
  { name: 'hitachi',   href: 'https://www.hitachiaircon.com/' },
  { name: 'lg',        href: 'https://www.lg.com/ar/aire-acondicionado' },
  { name: 'midea',     href: 'https://www.midea.com/cl/aireacondicionado' },
  { name: 'samsung',   href: 'https://www.samsung.com/ar/air-conditioners/all-air-conditioners/' },
  { name: 'tadiran',   href: 'https://www.tadiran-argentina.com/' },
  { name: 'toshiba',   href: 'https://www.toshiba-aircon.com.ar/' },
  { name: 'westric',   href: 'https://westric.com/' },
];

export default function Brands() {
  return (
    <section id="marcas" className="py-2 bg-gray-100">
      <div className="mx-auto px-4 sm:px-8 lg:px-0 overflow-hidden">
        <div
          className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 w-max"
          style={{ animation: 'scroll 20s linear infinite' }}>
          {[...LOGOS, ...LOGOS].map(({ name, href }, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 relative w-32 sm:w-40 md:w-52 h-16 sm:h-20 md:h-28">
              <Link href={href} target='_blank'> 
                <Image
                  src={`/images/brands/${name}.png`}
                  alt={name}
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
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
  )
};