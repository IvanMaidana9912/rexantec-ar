'use client';

import Image from 'next/image';
import WppButtom from './WppButtom';

interface HeroProps {
  imgHREF: string;
  title: string;
  description: string;
};

export default function Hero({
  imgHREF,
  title,
  description,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden h-[75vh] md:h-screen min-h-[500px] rounded-br-[200px] bg-[#0f446ca1]">
      <Image
        src={imgHREF}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 text-center md:text-left">
        <p className="text-[#E22128] uppercase tracking-widest text-xs sm:text-sm font-extrabold mb-2">
          Profesionales de confianza
        </p>
        <h1 className="text-white font-bold leading-snug max-w-3xl mx-auto md:mx-0 mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-white mb-6 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base">
          {description}
        </p>
        <WppButtom/>
      </div>
    </section>
  )
};