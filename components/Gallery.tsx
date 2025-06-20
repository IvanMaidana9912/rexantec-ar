'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export interface ImagesArray {
  SrcI: string;
  AltI: string;
}

interface GalleryProps {
  images: ImagesArray[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const openModal = useCallback((idx: number) => {
    setSelected(idx);
    setScale(1);
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    setScale(prev => Math.min(3, Math.max(1, prev + delta)));
  }, []);

  return (
    <>
      <section className="container mx-auto my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden lg:rounded-2xl shadow-lg"
            onClick={() => openModal(i)}>
            <Image
              src={img.SrcI}
              alt={img.AltI}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </section>
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}>
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-[51] text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">
              <FaTimes size={20} />
            </button>
            <div
              className="w-full h-full flex items-center justify-center"
              onWheel={onWheel}>
              <Image
                src={images[selected].SrcI}
                alt={images[selected].AltI}
                width={800}
                height={600}
                className="object-contain rounded-2xl"
                style={{
                  transform: `scale(${scale})`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
};