'use client'

import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-0 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="mx-auto max-w-3xl text-gray-700 mb-6 font-semibold text-base sm:text-lg">
          Porque no solo te garantizamos compromiso con tu tiempo y presupuesto, sino que
          gestionamos un trabajo prolijo con la garantía de un acabado que no dañe tu
          decoración.
        </p>
        <div className="mx-auto mb-16 h-1 bg-red-600 w-16 sm:w-32 md:w-48 lg:w-72" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'Assignment-turned-in.png',
              title: 'Garantía',
              desc:
                'Proveemos en todos nuestros equipos y servicios garantía total con el mejor servicio de atención al cliente.',
            },
            {
              icon: 'Build.png',
              title: 'Profesionales',
              desc:
                'Contarás con un equipo de profesionales para diseñar y presupuestar la climatización de tu espacio.',
            },
            {
              icon: 'Verified-Account.png',
              title: 'Trayectoria',
              desc:
                'Nos dedicamos a la climatización de espacios desde 1999, tendrás a tu disposición toda nuestra experiencia.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="border-2 border-red-600 rounded-xl p-6 hover:shadow-lg transition"
            >
              <Image
                src={`/images/icons/${icon}`}
                alt={title}
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
