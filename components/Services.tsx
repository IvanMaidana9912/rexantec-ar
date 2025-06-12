'use client';
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
      <div className="mx-80 px-6 lg:px-0 flex flex-col md:flex-row gap-12">
        {/* Imagen */}
        <div className="relative flex-shrink-0 w-[380px] h-[598px]  overflow-hidden mx-auto">
          <Link href={'/'} className='w-[380px] h-[555px] absolute rounded-xl'>
            <Image
              src="/images/image-40.jpg"
              alt="Instalación de equipos"
              fill
              className="object-cover rounded-2xl"
            />
          </Link>
          {/* Overlay Callout */}
          <div className="absolute bottom-0 left-1/2 transform w-64 h-auto -translate-x-1/2 bg-red-700/95 text-white uppercase text-sm font-bold tracking-wider px-12 py-8 rounded-br-full rounded-tl-full text-center">
            Proyecto Barrio Cerrado Canning
          </div>
        </div>
        {/* Texto de servicios */}
        <div className="w-full md:w-7/12 h-auto flex flex-col justify-between items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center gap-x-5">
            {items.map(item => (
              <div key={item.title}>
                <div className="w-16 h-1 bg-red-600 mb-2" />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600">
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