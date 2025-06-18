'use client'

import Image from 'next/image';

export interface ImagesArray {
  SrcI: string;
  AltI: string;
}

interface GalleryProps {
  images: ImagesArray[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section className="container mx-auto my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center text-white font-bold">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.SrcI}
          alt={img.AltI}
          width={200}
          height={130}
          className="w-full rounded-2xl border-2 border-red-800"
        />
      ))}
    </section>
  );
}