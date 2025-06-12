'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section id="showrooms" className="py-16">
      <div className="mx-auto lg:mx-96 px-4 lg:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Tarjeta de imagen */}
          <div className="relative w-[35rem] h-[21rem] flex flex-col justify-end">
            <Link href={'/'}>
              <Image
                src="/images/photo-bgh.jpg"         // Coloca aquí tu image-40.jpg renombrada a showroom1.jpg
                width={560}
                height={315}
                alt="Showroom BGH"
                className="rounded-xl mb-5"
              />
            </Link>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                         bg-red-600 text-white uppercase text-xs font-semibold tracking-wider
                         px-3 py-2 rounded-br-full rounded-tl-full"
            >
              Showroom BGH
            </div>
          </div>

          {/* Tarjeta de vídeo */}
          <div className="relative w-[35rem] h-[21rem]">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/q7rA6Mofx94?si=ALEQP7B_eMs0x_61&amp;controls=0" title={"YouTube video player"}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                         bg-red-600 text-white uppercase text-xs font-semibold tracking-wider
                         px-3 py-2 rounded-br-full rounded-tl-full"
            >
              Showroom BGH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
