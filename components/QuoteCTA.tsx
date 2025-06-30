'use client';

import Image from 'next/image';
import WppButtom from './WppButtom';

export default function QuoteCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-[#E22128] w-auto overflow-hidden py-16">
      <div className="hidden md:block h-48 lg:h-60 w-full bg-[#0f446c] absolute top-0" />
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row-reverse md:flex-row items-center bg-transparent"
        data-aos="fade-right"
        data-aos-delay="200">
        <div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          data-aos="fade-right"
          data-aos-delay="300">
          <div className="relative w-[19rem] h-[40rem]">
            <Image
              src="/images/iphone-frame02.png"
              alt="iPhone 16 Frame"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div
          className="md:w-full justify-center text-white px-8 md:pl-48 flex flex-col"
          data-aos="fade-right"
          data-aos-delay="400">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitás un presupuesto?
          </h2>
          <p className="mb-6">
            Hacenos tu consulta online por cualquiera de nuestras vías de
            comunicación. Estamos disponibles todos los días de 9 AM a 18 PM.
          </p>
          <div className="flex justify-center md:justify-start" data-aos="fade-right" data-aos-delay="400">
            <WppButtom />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-[#0f446c] h-32 lg:h-60 sm:h-36" />
    </section>
  )
};