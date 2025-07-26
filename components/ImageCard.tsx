'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface ImagesArray {
  SrcI: string;
  AltI: string;
}

export interface ImageCardProps {
  images: ImagesArray[];      // array de imágenes del proyecto
  dynamicRoute: string;       // ruta dinámica, e.g. `/proyectos/p/001`
  alt?: string;
  title: string;
  Sdescription: string;
}

export default function ImageCard({ images, dynamicRoute, alt, title, Sdescription }: ImageCardProps) {
  const [selected, setSelected] = useState<number | null>(null);

  // Abrir modal en primera imagen
  const openModal = useCallback((idx = 0) => {
    setSelected(idx);
    document.body.style.overflow = 'hidden';
  }, []);

  // Cerrar modal
  const closeModal = useCallback(() => {
    setSelected(null);
    document.body.style.overflow = '';
  }, []);

  // Navegar entre imágenes
  const showPrev = () => {
    if (selected === null) return;
    setSelected((selected + images.length - 1) % images.length);
  };
  const showNext = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  return (
    <div className='min-h-screen mt-10'>
      {/* CARD Desktop */}
      <div className="xl:block hidden group relative w-full sm:w-80 md:w-72 rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={images[0].SrcI}
            alt={alt || images[0].AltI}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-2">
          <h3 className="text-lg font-semibold text-transparent group-hover:text-white">
            {title}
          </h3>
          <p className="text-sm text-transparent group-hover:text-white line-clamp-2">
            {Sdescription}
          </p>
          <button
            onClick={() => openModal(0)}
            className="mt-2 w-full text-center bg-white text-black py-2 rounded transition hover:bg-black hover:text-white group-hover:visible invisible">
            Ver Proyecto
          </button>
        </div>
      </div>

      {/* CARD Mobile */}
      <div className="xl:hidden group relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
        <div className="relative w-full h-48">
          <Image
            src={images[0].SrcI}
            alt={alt || images[0].AltI}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-black">
            {title}
          </h3>
          <p className="text-sm text-gray-700 line-clamp-2">
            {Sdescription}
          </p>
          <button
            onClick={() => openModal(0)}
            className="mt-auto block w-full text-center bg-black text-white py-2 rounded hover:bg-gray-800">
            Ver Proyecto
          </button>
        </div>
      </div>

      {/* MODAL GALLERY */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-15 z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <FaTimes size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-15 top-1/2 z-50 text-white bg-black/30 p-2 rounded-full hover:bg-black"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-15 top-1/2 z-50 text-white bg-black/30 p-2 rounded-full hover:bg-black"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Imagen */}
            <div className="w-4xl h-[30rem] flex items-center justify-center">
              <Image
                src={images[selected].SrcI}
                alt={images[selected].AltI}
                width={800}
                height={600}
                className="object-contain"
              />
            </div>
            {/* Botón dinámico */}
            <div className="mt-4 text-center">
              <Link
                href={dynamicRoute}
                className="inline-block bg-black text-gray-200 py-2 px-4 rounded hover:text-black hover:bg-gray-200">
                Ir al detalle del proyecto
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};