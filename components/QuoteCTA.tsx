'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function QuoteCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-[#D6002E] overflow-hidden rounded-xl py-16"
    >
      <div
        className="hidden md:block h-48 lg:h-60 w-full bg-white absolute top-0"

      />
      <div
        className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse md:flex-row items-center bg-transparent"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="relative w-[20rem] h-[40rem]">
            <Image
              src="/images/iphone-frame.png"
              alt="iPhone 16 Frame"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div
          className="md:w-full justify-center text-white md:pl-48 flex flex-col"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitás un presupuesto?
          </h2>
          <p className="mb-6">
            Hacenos tu consulta online por cualquiera de nuestras vías de
            comunicación. Estamos disponibles todos los días de 9 AM a 18 PM.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="https://wa.me/5491158947428"
              target="_blank"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-lg text-white"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <FaWhatsapp className="mr-3" /> Chatear con Rexantec
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 w-full bg-white h-32 lg:h-60 sm:h-36"

      />
    </section>
  );
}
