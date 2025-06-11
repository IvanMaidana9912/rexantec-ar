'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden h-[75vh] min-h-[500px]  rounded-br-[200px]">
      {/* Background Image */}
      <Image
        src="/images/Group-200.png"
        alt="Climatización MCE Hero"
        fill
        className="object-cover"
      />
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative mx-auto h-full flex flex-col justify-center text-left lg:ml-20 ml-10 px-4 md:px-0">
        <p className="text-white uppercase tracking-widest text-sm mb-2 font-extrabold">Profesionales de confianza</p>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white max-w-3xl leading-snug my-4">
          Servicio técnico especializado en Aire Acondicionado y Calefacción Central.
        </h1>
        <p className="text-white my-4 max-w-2xl text-base">
          Proveemos garantía total de los equipos y servicios prestados, junto al mejor servicio de atención al cliente, poniendo a su disposición toda nuestra experiencia.
        </p>
        <a
          href="https://wa.me/+5491158947428"
          className="mt-6 max-w-60 inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-medium px-5 py-2 rounded"
        >
          Chatear con Rexantec
        </a>
      </div>
    </section>
  );
}