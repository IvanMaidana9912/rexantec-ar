'use client';

import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 bg-[#0f446ca1]">
      <div
        className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-0 text-center"
        data-aos="fade-left">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-20 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-20"
          data-aos="fade-left"
          data-aos-delay="100">
          ¿Por qué elegirnos?
        </h2>
        <p
          className="mx-auto max-w-3xl text-white mb-6 font-semibold text-base sm:text-lg"
          data-aos="fade-left"
          data-aos-delay="200">
          Porque no solo te garantizamos compromiso con tu tiempo y presupuesto, sino que
          gestionamos un trabajo prolijo con la garantía de un acabado que no dañe tu
          decoración.
        </p>
        <div
          className="mx-auto mb-16 h-1 bg-[#E22128] w-16 sm:w-32 md:w-48 lg:w-72"
          data-aos="fade-left"
          data-aos-delay="300"/>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-left"
          data-aos-delay="400">
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
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="border-2 border-[#E22128] rounded-xl p-6 hover:shadow-lg transition"
              data-aos="fade-left"
              data-aos-delay={`${500 + i * 100}`}>
              <Image
                src={`/images/icons/${icon}`}
                alt={title}
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-white">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};