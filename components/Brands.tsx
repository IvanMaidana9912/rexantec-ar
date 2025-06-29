'use client';

import Image from 'next/image';
import Link from 'next/link';
import LOGOS from '../bbdd/LOGOS_BRANDS.json'

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