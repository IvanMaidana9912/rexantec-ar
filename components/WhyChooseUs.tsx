'use client';

import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 bg-transparent">
      {/* fluid max-width wrapper */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-0 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-12 lg:mb-16 pb-6" data-aos="fade-down">
          ¿Por qué elegirnos?
        </h2>
        <p className="max-w-4xl mx-auto text-black mb-6 font-semibold text-xl">
          Porque no solo te garantizamos compromiso con tu tiempo y presupuesto, sino que gestionamos un trabajo prolijo con la garantía de un acabado que no dañe tu decoración.
        </p>
        <div className="mx-auto mb-16 h-1 bg-red-600 w-24 sm:w-48 md:w-64 lg:w-72" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* tarjeta 1 */}
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#0f446ca1] transition" data-aos="fade-right">
            <Image
              src="/images/icons/Assignment-turned-in.png"
              alt="Garantía"
              width={48}
              height={48}
              className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Garantía</h3>
            <p className="text-white text-sm">
              Te ofrecemos garantía total de los equipos y servicios brindados.
            </p>
          </div>
          {/* tarjeta 2 */}
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#0f446ca1] transition" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/images/icons/Build.png"
              alt="Profesionales"
              width={48}
              height={48}
              className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Profesionales</h3>
            <p className="text-white text-sm">
              Tenemos un equipo altamente capacitado para reparar, instalar y mantener la climatización de tu espacio.
            </p>
          </div>
          {/* tarjeta 3 */}
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#0f446ca1] transition" data-aos="fade-left">
            <Image
              src="/images/icons/Verified-Account.png"
              alt="Trayectoria"
              width={48}
              height={48}
              className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Trayectoria</h3>
            <p className="text-white text-sm">
              Nos dedicamos a la climatización de espacios desde 2020, tendrás a tu disposición toda nuestra experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};