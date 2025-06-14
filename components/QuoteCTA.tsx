'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function QuoteCTA() {
  return (
    <section className="relative bg-[#D6002E] overflow-hidden rounded-xl py-16">
      {/* White overlay top: solo en md+ */}
      <div className="hidden md:block h-48 lg:h-60 w-full bg-white absolute top-0" />

      {/* Invertimos en móvil y mantenemos fila en md+ */}
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse md:flex-row items-center bg-[#D6002E]">
        {/* Mockup celular: primero en móvil, segundo en desktop */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
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

        {/* Texto y botón */}
        <div className="md:w-full justify-center text-white md:pl-48 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">¿Necesitás un presupuesto?</h2>
          <p className="mb-6">
            Hacenos tu consulta online por cualquiera de nuestras vías de
            comunicación. Estamos disponibles todos los días de 9 AM a 18 PM.
          </p>
          {/* Centrado en móvil, alineado a la izquierda en md+ */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="https://wa.me/5491158947428"
              target="_blank"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-lg text-white"
            >
              <FaWhatsapp className="mr-3" /> Chatear con Rexantec
            </Link>
          </div>
        </div>
      </div>

      {/* White overlay bottom: siempre, pero menor en móvil */}
      <div className="absolute bottom-0 w-full bg-white h-32 lg:h-60 sm:h-36" />
    </section>
  );
}
