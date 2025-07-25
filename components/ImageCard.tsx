'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

export interface ImageCardProps {
  imageSrc: string
  srcLink: string      // enlace al PDF
  alt?: string
  name: string         // título
  description: string  // descripción
  counts: number       // cantidad de productos
};

const ImageCard: FC<ImageCardProps> = ({
  imageSrc,
  srcLink,
  alt = 'Imagen',
  name,
  description,
  counts
}) => {
  return (
    <>
      <div className=" xl:block hidden group relative w-full sm:w-80 md:w-72 hover:bg-black bg-transparent rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl ">
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className=" absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-2">
          <h3 className=" text-lg font-semibold text-transparent group-hover:text-white transition-colors duration-300">
            {name}
          </h3>
          <p className=" text-sm text-transparent group-hover:text-white transition-colors duration-300 line-clamp-2">
            {description}
          </p>
          <p className=" text-xs font-light text-transparent group-hover:text-white transition-colors duration-300">
            {counts} {counts === 1 ? 'Foto' : 'Fotos'}
          </p>
          <Link
            href={srcLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center bg-white text-black py-2 rounded opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-colors duration-300 hover:bg-black hover:text-white">
            Ver Proyecto
          </Link>
        </div>
      </div>
      <div className="xl:hidden group relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black opacity-0 md:group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <div className="p-4 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-black md:group-hover:text-white transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-700 md:group-hover:text-white transition-colors duration-300 line-clamp-2">
            {description}
          </p>

          <p className="text-xs font-light text-gray-600 md:group-hover:text-white transition-colors duration-300">
            {counts} {counts === 1 ? 'Foto' : 'Fotos'}
          </p>
          <Link
            href={srcLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto block w-full text-center bg-black text-white py-2 rounded transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-gray-800">
            Descargar Catálogo
          </Link>
        </div>
      </div>
    </>
  )
};

export default ImageCard;