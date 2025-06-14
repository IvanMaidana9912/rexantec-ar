'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section id="showrooms" className="py-16">
      <div className="mx-auto px-4 lg:mx-96 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          
          {/* Tarjeta de imagen */}
          <div className="w-full max-w-[35rem] relative aspect-[560/315]">
            <Link href="/" className='block w-full h-full'>
                <Image
                  src="/images/photo-bgh.jpg"
                  alt="Showroom BGH"
                  fill
                  className="object-cover rounded-xl"
                />
            </Link>
            <div
              className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                bg-red-600 text-white uppercase text-xs font-semibold tracking-wider
                px-3 py-2 rounded-br-full rounded-tl-full
              "
            >
              Showroom BGH
            </div>
          </div>

          {/* Tarjeta de vídeo */}
          <div className="w-full max-w-[35rem] relative aspect-video">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/q7rA6Mofx94?si=ALEQP7B_eMs0x_61&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div
              className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                bg-red-600 text-white uppercase text-xs font-semibold tracking-wider
                px-3 py-2 rounded-br-full rounded-tl-full
              "
            >
              Showroom BGH
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
 