'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const items = [
    { title: 'Instalación de equipos', description: 'Aires acondicionados centrales y VRV.' },
    { title: 'Arreglos generales', description: 'Resolvemos cualquier imprevisto técnico.' },
    { title: 'Mantenimiento', description: 'Servicio de mantenimiento integral.' },
    { title: 'Abono mensual', description: 'Te ofrecemos un pago mensual para el mantenimiento acorde a tus necesidades.' },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div
        className={`
          flex flex-col md:flex-row gap-12
          px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0
          mx-auto md:mx-0 lg:mx-80
        `}
      >
        {/* Imagen */}
        <div
          className={`
            relative flex-shrink-0
            w-full               /* móvil: 100% ancho */
            sm:w-[380px]         /* tablets: 380px ancho */
            h-64                 /* móvil: 16rem alto */
            sm:h-[598px]         /* tablets+: 598px alto */
            overflow-hidden mx-auto rounded-2xl
          `}
        >
          <Link href="/" className="w-[380px] h-[555px] absolute rounded-xl">
            <Image
              src="/images/image-40.jpg"
              alt="Instalación de equipos"
              fill
              className="object-cover rounded-2xl"
            />
          </Link>

          {/* Callout */}
          <div
            className={`
              absolute bottom-6 sm:bottom-10 left-1/2
              transform sm:-translate-x-1/2 -translate-x-48 translate-y-1/2
              bg-red-700/95 text-white uppercase text-sm font-bold tracking-wider
              px-6 sm:px-12 py-4 sm:py-8
              w-[240px] sm:w-64
              rounded-br-full rounded-tl-full
        
              text-center
            `}
          >
            Proyecto Barrio Cerrado Canning
          </div>
        </div>

        {/* Texto de servicios */}
        <div className="w-full md:w-7/12 flex h-auto flex-col justify-between items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8 h-full items-center">
            {items.map((item) => (
              <div key={item.title}>
                <div className="w-12 sm:w-16 h-1 bg-red-600 mb-2" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}