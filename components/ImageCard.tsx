'use client';
import React, { useState, useCallback, useEffect, useRef, MouseEvent } from 'react';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

    // Abrir modal y seleccionar imagen inicial
    const openModal = useCallback((idx = 0) => {
        setSelected(idx);
        document.body.style.overflow = 'hidden';
    }, []);

    // Cerrar modal
    const closeModal = useCallback(() => {
        setSelected(null);
        document.body.style.overflow = '';
    }, []);

    // Prev / Next handlers
    const showPrev = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (selected === null) return;
        setSelected((prev) => (prev! + images.length - 1) % images.length);
    }, [selected, images.length]);

    const showNext = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (selected === null) return;
        setSelected((prev) => (prev! + 1) % images.length);
    }, [selected, images.length]);

    // Scroll to selected image
    useEffect(() => {
        if (selected !== null && itemRefs.current[selected]) {
            itemRefs.current[selected]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }, [selected]);

    return (
        <div className="min-h-screen mt-10">
            {/* CARD Desktop */}
            <div className="hidden xl:block group relative w-full max-w-xs h-80 rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
                {/* Image */}
                <div className="relative w-full h-full z-10">
                    <Image
                        src={images[0].SrcI}
                        alt={alt || images[0].AltI}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-20" />
                </div>
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                            {title}
                        </h3>
                        <p className="text-sm text-white h-16 overflow-hidden">
                            {Sdescription}
                        </p>
                    </div>
                    <button
                        onClick={() => openModal(0)}
                        className="w-full text-center bg-black text-gray-200 py-2 rounded hover:bg-gray-200 hover:text-black"
                    >
                        Ver Proyecto
                    </button>
                </div>
            </div>
            {/* CARD Mobile */}
            <div className="xl:hidden group relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl h-full">
                <div className="relative w-full h-48">
                    <Image
                        src={images[0].SrcI}
                        alt={alt || images[0].AltI}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                </div>
                <div className="p-4 flex flex-col justify-between h-32">
                    <div>
                        <h3 className="text-lg font-semibold text-black mb-2">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-700 line-clamp-3 overflow-hidden">
                            {Sdescription}
                        </p>
                    </div>
                    <button
                        onClick={() => openModal(0)}
                        className="w-full text-center bg-black text-white py-2 rounded hover:bg-gray-800"
                    >
                        Ver Proyecto
                    </button>
                </div>
            </div>

            {/* MODAL GALLERY */}
            {selected !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-3xl bg-transparent rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-50 text-black bg-white/80 p-2 rounded-full hover:bg-white"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-black bg-white/50 p-2 rounded-full hover:bg-white"
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={showNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-black bg-white/50 p-2 rounded-full hover:bg-white"
                        >
                            <FaChevronRight size={24} />
                        </button>

                        {/* Scrollable Images */}
                        <div
                            ref={containerRef}
                            className="w-full h-96 inline-flex items-center overflow-y-hidden overflow-x-auto whitespace-nowrap scroll-smooth touch-pan-x snap-x snap-mandatory"
                        >
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { itemRefs.current[i] = el; }}
                                    className="inline-flex w-full sm:w-auto flex-shrink-0 h-96 items-center justify-center snap-center"
                                >
                                    <Image
                                        src={img.SrcI}
                                        alt={img.AltI}
                                        width={800}
                                        height={600}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Botón dinámico */}
                        <div className="p-4 text-center">
                            <Link
                                href={dynamicRoute}
                                className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                            >
                                Ir al detalle del proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
