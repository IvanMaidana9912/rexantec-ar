'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaSearchPlus, FaSearchMinus, FaTimes } from 'react-icons/fa';

export interface ImagesArray {
  SrcI: string;
  AltI: string;
}

interface PaginatedGalleryProps {
  images: ImagesArray[];
}

export default function Gallery({ images }: PaginatedGalleryProps) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const open = (src: string) => {
    setModalSrc(src);
    setZoom(1);
  };
  const close = () => setModalSrc(null);

  return (
    <div className='min-h-screen'>
      <section className="container mx-auto my-16 lg:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-lg border-2 border-red-800"
            onClick={() => open(img.SrcI)}
          >
            <Image
              src={img.SrcI}
              alt={img.AltI}
              width={400}
              height={300}
              className="object-cover w-full h-48 sm:h-56 md:h-64"
            />
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
          onClick={close}
        >
          <div
            className="relative max-w-auto max-h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={close}
              className="absolute top-2 right-2 text-black text-2xl p-1 z-[51] bg-gray-200/70 rounded-full cursor-pointer"
              aria-label="Cerrar"
            >
              <FaTimes />
            </button>

            {/* Imagen con zoom */}
            <div className="overflow-hidden">
              <Image
                src={modalSrc}
                alt="Ampliada"
                width={400}
                height={400}
                className="transition-transform"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* Controles de zoom */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition"
                aria-label="Zoom in"
              >
                <FaSearchPlus />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition"
                aria-label="Zoom out"
              >
                <FaSearchMinus />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
