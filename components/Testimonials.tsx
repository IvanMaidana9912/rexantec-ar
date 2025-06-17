'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section id="showrooms" className="py-16">
       <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:mx-96 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          
          {/* Tarjeta de imagen */}
          <div className="
              w-full
              max-w-[20rem]    /* móvil */
              sm:max-w-[25rem] /* ≥640px */
              md:max-w-[30rem] /* ≥768px */
              lg:max-w-[35rem] /* ≥1024px */
              relative aspect-[560/315]
            "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Link href="/" className="block w-full h-full">
              <Image
                src="/images/photo-m.jpg"
                alt="Mantenimientos"
                fill
                className="object-cover rounded-xl"
              />
            </Link>
            <div
              className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                bg-[#E22128] text-white uppercase text-xs font-semibold tracking-wider
                px-6 py-2 rounded-br-full rounded-tl-full
              "
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Mantenimientos
            </div>
          </div>
          {/* Tarjeta de vídeo */}
          <div
            className="
              w-full
              max-w-[20rem]
              sm:max-w-[25rem]
              md:max-w-[30rem]
              lg:max-w-[35rem]
              relative aspect-video
            "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/1vsaX-envBY?si=koqRBwcCrKRm7sSu"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div
              className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                bg-[#E22128] text-white uppercase text-xs font-semibold tracking-wider
                px-6 py-2 rounded-br-full rounded-tl-full
              "
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Canal YT
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
