'use client';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="mx-auto px-6 lg:px-0 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
        <p className="max-w-4xl mx-auto text-gray-700 mb-6 font-semibold text-xl">
          Porque no solo te garantizamos compromiso con tu tiempo y presupuesto, sino que gestionamos un trabajo prolijo con la garantía de un acabado que no dañe tu decoración.
        </p>
        <div className="h-1 bg-red-600 w-72 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-[35rem]">
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-lg transition">
            <Image src="/images/icons/Assignment-turned-in.png" alt="Garantía" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Garantía</h3>
            <p className="text-gray-600 text-sm">
              Proveemos en todos nuestros equipos y servicios garantía total con el mejor servicio de atención al cliente.
            </p>
          </div>
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-lg transition">
            <Image src="/images/icons/Build.png" alt="Profesionales" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Profesionales</h3>
            <p className="text-gray-600 text-sm">
              Contarás con un equipo de profesionales para diseñar y presupuestar la climatización de tu espacio.
            </p>
          </div>
          <div className="border-2 border-red-600 rounded-xl p-6 hover:shadow-lg transition">
            <Image src="/images/icons/Verified-Account.png" alt="Trayectoria" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trayectoria</h3>
            <p className="text-gray-600 text-sm">
              Nos dedicamos a la climatización de espacios desde 1999, tendrás a tu disposición toda nuestra experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}