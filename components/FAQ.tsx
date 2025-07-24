'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTimes } from 'react-icons/fa';
import faqItems from '../bbdd/FAQ_QUESTION_ANSWER.json'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 overflow-hidden">
      <div
        className="text-center mb-12 px-4 sm:px-6 lg:px-0"
        data-aos="fade-left">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black "
          data-aos="fade-down">
          Preguntas frecuentes
        </h2>
        {/* <p className="mt-2 text-base text-white max-w-2xl mx-auto">
          No te quedes con dudas; en esta sección podrás ver las consultas más
          frecuentes que recibimos para que tengas toda la información sobre
          nuestra forma de trabajar.
        </p> */}
        <div className="mt-1 w-60 h-1 bg-[#E22128] mx-auto rounded" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start"
          data-aos="fade-left"
          data-aos-delay="200">
          <div
            className="relative w-full aspect-[4/3] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border border-gray-200 mx-auto"
            data-aos="fade-left"
            data-aos-delay="300">
            <Image
              src="/images/products.jpg"
              fill
              alt="FAQs"
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"/>
          </div>
          <div
            className="w-full border border-gray-200 rounded-lg overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="400">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition">
                    <span
                      className={`flex items-center text-lg font-semibold ${
                        isOpen ? 'text-[#E22128]' : 'text-gray-800'
                      }`}>
                      {isOpen ? (
                        <FaTimes className="mr-4" />
                      ) : (
                        <FaPlus className="mr-4" />
                      )}
                      {item.question}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden bg-white text-gray-700 transition-[max-height,padding] duration-300 ease-in-out px-6 ${
                      isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
                    }`}>
                    <div className="text-base">{item.answer}</div>
                  </div>
                  {idx < faqItems.length - 1 && (
                    <div className="border-t border-gray-200" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
};