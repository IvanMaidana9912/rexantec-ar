'use client';

import Image from 'next/image';
import Link from 'next/link';
import SERVICES from '../bbdd/SERVICES.json'

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0f446ca1]">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          className={`relative flex-shrink-0 w-full sm:w-[380px] h-64 sm:h-[598px] overflow-hidden mx-auto rounded-2xl flex justify-center`}>
          <div className="w-[380px] h-[555px] absolute rounded-xl">
            <Image
              src="/images/image-40.jpg"
              alt="Instalación de equipos"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <Link href="/proyectos"
            data-aos="fade-up"
            data-aos-delay="200"
            className={`absolute bottom-6 sm:bottom-10 left-10/12 sm:left-1/2 transform sm:-translate-x-1/2 -translate-x-48 translate-y-1/2 bg-[#E22128] text-white uppercase text-sm font-bold tracking-wider px-6 sm:px-12 py-4 sm:py-8 w-[240px] sm:w-64 rounded-br-full rounded-tl-full text-center`}>
            Proyectos Realizados
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="w-full md:w-7/12 flex h-auto flex-col justify-between items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-20 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-20">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8 h-full items-start max-w-auto lg:max-w-full xl:max-w-9/12">
            {
              SERVICES.map((item, i) => (
                <div key={item.title} data-aos="fade-up" data-aos-delay={`${200 + i * 100}`}>
                  <div className="w-12 sm:w-16 h-1 bg-[#E22128] mb-2" />
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
};