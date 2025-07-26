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
    const isSingle = images.length <= 1;

    // Abrir modal y seleccionar imagen inicial
    const openModal = useCallback((idx = 0) => {
        setSelected(idx);
        document.body.style.overflow = 'hidden';
        // tras montar el modal, forzamos scroll a la imagen 0 para que no se recorte
        setTimeout(() => {
            if (itemRefs.current[idx]) {
                itemRefs.current[idx]!.scrollIntoView({ behavior: 'auto', inline: 'start' });
            }
        }, 0);
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
        setSelected(prev => (prev! + images.length - 1) % images.length);
    }, [selected, images.length]);

    const showNext = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (selected === null) return;
        setSelected(prev => (prev! + 1) % images.length);
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
                <div className="relative w-full h-full z-10">
                    <Image
                        src={images[0].SrcI}
                        alt={alt || images[0].AltI}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-20" />
                </div>
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
                        className="w-full text-center bg-black hover:text-black text-gray-200 hover:bg-gray-200 py-2 rounded"
                    >
                        Ver Proyecto
                    </button>
                </div>
            </div>

            {/* CARD Mobile */}
            <div className="xl:hidden group relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl h-80">
                <div className="relative w-full h-48">
                    <Image
                        src={images[0].SrcI}
                        alt={alt || images[0].AltI}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                        className="w-full text-center py-2 rounded bg-black hover:text-black text-gray-200 hover:bg-gray-200"
                    >
                        Ver Proyecto
                    </button>
                </div>
            </div>

            {/* MODAL GALLERY */}
            {selected !== null && (
                <div
                    className="fixed inset-0 z-50 flex flex-col sm:flex-row items-center sm:justify-center bg-black/70 p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-hidden"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full sm:w-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl bg-transparent rounded-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 bg-black hover:text-black text-gray-200 hover:bg-gray-200 p-2 sm:p-3 md:p-4 rounded-full"
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Prev */}
                        {!isSingle && (
                            <button
                                onClick={showPrev}
                                className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-50 bg-black hover:text-black text-gray-200 hover:bg-gray-200 p-2 sm:p-3 md:p-4 rounded-full"
                            >
                                <FaChevronLeft size={24} />
                            </button>
                        )}

                        {/* Next */}
                        {!isSingle && (
                            <button
                                onClick={showNext}
                                className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 bg-black hover:text-black text-gray-200 hover:bg-gray-200 p-2 sm:p-3 md:p-4 rounded-full">
                                <FaChevronRight size={24} />
                            </button>
                        )}

                        {/* Scrollable Images */}
                        <div
                            ref={containerRef}
                            className={isSingle
                                ? "w-full h-40 sm:h-60 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden"
                                : "w-full h-40 sm:h-60 md:h-80 lg:h-96 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth touch-pan-x"
                            }
                        >
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    ref={el => { itemRefs.current[i] = el ?? null; }}
                                    className="inline-flex w-full sm:w-auto flex-shrink-0 h-full items-center justify-center"
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
                                className="inline-block bg-black hover:text-black text-gray-200 hover:bg-gray-200 py-2 px-4 md:py-3 md:px-6 rounded"
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
