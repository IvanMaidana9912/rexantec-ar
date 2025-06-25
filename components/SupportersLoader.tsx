'use client';

import dynamic from 'next/dynamic';
// import Supporters from '../components/Supporters';

// Importamos Supporters **solo en cliente**, sin SSR
const Supporters = dynamic(
  () => import('../components/Supporters'),
  {
    ssr: false,
    loading: () => (
      <section className="py-16 bg-[#0f446ca1]">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 items-center justify-items-center overflow-x-hidden">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-full bg-gray-200 animate-pulse"
              />
            ))}
          </div> 
        </div>
      </section>
    )
  }
);

export default function SupportersLoader() {
  return (<div className="overflow-x-hidden w-full"><Supporters /></div>);
};