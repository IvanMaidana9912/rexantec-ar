'use client'

import Image from 'next/image';

export default function Hero({imgHREF}: {imgHREF: string}) {
  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden 
        h-[75vh] md:h-screen min-h-[500px] 
        rounded-br-[200px] bg-[#0f446ca1]
      "
    >
      {/* Imagen de fondo */}
      <Image
        src={`${imgHREF}`}
        alt="Climatización MCE Hero"
        fill
        className="object-cover"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div
        className="
          relative container mx-auto h-full 
          flex flex-col justify-center 
          px-4 sm:px-6 lg:px-12
          text-center md:text-left
        "
      >
        <p
          className="
            text-white uppercase tracking-widest 
            text-xs sm:text-sm font-extrabold mb-2
          "
        >
          Profesionales de confianza
        </p>

        <h1
          className="
            text-white font-bold leading-snug 
            max-w-3xl mx-auto md:mx-0 
            mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          "
        >
          Servicio técnico especializado en Aire Acondicionado y Calefacción Central.
        </h1>

        <p
          className="
            text-white mb-6 max-w-2xl 
            mx-auto md:mx-0
            text-sm sm:text-base
          "
        >
          Proveemos garantía total de los equipos y servicios prestados, junto al mejor servicio de atención al cliente, poniendo a su disposición toda nuestra experiencia.
        </p>

        <a
          href="https://wa.me/5491158947428?text=%C2%A1Hola!%20Te%20saluda%20Rexantec%20%C2%BFC%C3%B3mo%20te%20puedo%20ayudar%3F"
          className="
            inline-block bg-green-600 hover:bg-green-700 
            text-white font-medium rounded
            px-5 py-2
            text-base sm:text-lg
            transition
            w-1/2
            mx-auto
            lg:mx-0
            lg:w-1/6
            text-center
          "
          target="_blank"
        >
          Chatear con Rexantec
        </a>
      </div>
    </section>
  );
}
