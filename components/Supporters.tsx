'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import SUPPORTERS from '../bbdd/SUPPORTERS.json'

export default function Supporters() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      id="supporters"
      className="py-16 bg-[#0f446ca1]">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-20 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-20"
          data-aos="fade-down">
          Empresas que nos apoyan
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-items-center">
          {SUPPORTERS.map(({ src, alt, href }, i) => (
            <div 
              key={i}
              className="w-32 h-32"
              data-aos="zoom-in"
              data-aos-delay={i * 200}>
              <Link
                href={href}
                target="_blank"
                className="block w-full h-full">
                  <div  className="relative w-full h-full bg-white rounded-full overflow-hidden shadow-sm transition-transform hover:scale-105">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain w-full h-full"
                      sizes="128px"
                    />
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};