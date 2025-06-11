import { useState } from 'react';

const faqs = [
  { question: '¿Ofrecen garantía en los servicios?', answer: 'Sí, nuestras reparaciones tienen garantía de 3 meses.' },
  { question: '¿Atienden en toda el área metropolitana?', answer: 'Si, cubrimos CABA y Gran Buenos Aires.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border rounded">
              <button
                className="w-full text-left p-4 font-medium"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.question}
              </button>
              {openIndex === idx && <p className="p-4 border-t">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}