'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqItems = [
  {
    question: '¿Tiene garantía?',
    answer:
      'Sí, todos los equipos y trabajos realizados por nuestro equipo tienen garantía.',
  },
  {
    question: '¿Qué incluye el presupuesto?',
    answer:
      'Nuestro presupuesto incluye la mano de obra y el material de trabajo. Te brindamos nuestros productos para trabajar o podés gestionar la compra por tu cuenta.',
  },
  {
    question: '¿Se cobra la visita?',
    answer:
      'Nuestra primera visita es sin cargo dentro de Capital Federal. Si estás por los alrededores, evaluaremos tu caso de manera personalizada.',
  },
  {
    question: '¿Qué tipo de instalaciones hacemos?',
    answer:
      'Nos dedicamos al rubro termomecánico, por lo que no realizamos instalaciones domésticas tradicionales. Si contás con un espacio comercial o profesional amplio, consultanos sin problema.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16">
      <div
        className="text-center mb-12 px-4 sm:px-6 lg:px-0"
        data-aos="fade-left"
      >
        <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
        <p className="mt-2 text-base text-white max-w-2xl mx-auto">
          No te quedes con dudas; en esta sección podrás ver las consultas más
          frecuentes que recibimos para que tengas toda la información sobre
          nuestra forma de trabajar.
        </p>
        <div className="mt-4 w-60 h-1 bg-[#E22128] mx-auto rounded" />
      </div>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        {/* Imagen */}
        <div
          className="w-full max-w-md mx-auto lg:ml-auto md:mx-0 md:w-[30rem]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src="/images/products.jpg"
            width={600}
            height={450}
            alt="FAQs"
            className="
              w-full h-auto object-cover
              rounded-tr-[100px] rounded-bl-[100px]
              border border-gray-200
            "
          />
        </div>
        {/* Acordeón */}
        <div
          className="w-full max-w-md mx-auto md:mx-0 md:max-w-none border border-gray-200 rounded-lg overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                {/* Pregunta */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition"
                >
                  <span
                    className={`flex items-center text-lg font-semibold ${
                      isOpen ? 'text-[#E22128]' : 'text-gray-800'
                    }`}
                  >
                    {isOpen ? (
                      <FaTimes className="mr-2" />
                    ) : (
                      <FaPlus className="mr-2" />
                    )}
                    {item.question}
                  </span>
                </button>
                <div
                  className={`
                    overflow-hidden bg-white text-gray-700
                    transition-all duration-300 ease-in-out
                    px-6
                    ${isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'}
                  `}
                >
                  <div className="text-base">{item.answer}</div>
                </div>
                {idx < faqItems.length - 1 && (
                  <div className="border-t border-[#0f446ca1]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
