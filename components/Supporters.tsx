'use client'

import Image from 'next/image';
import Link from 'next/link';

export interface Supporter {
  src: string;
  alt: string;
  href: string;
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
          {items.map(({ src, alt ,href}, i) => (
            <Link
            target='__blank'
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
