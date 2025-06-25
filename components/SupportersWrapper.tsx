'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Supporters = dynamic(() => import('./Supporters'), { ssr: false, loading: () => <Skeleton /> });

function Skeleton() {
  return (
    <section className="py-16 bg-[#0f446ca1]">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-items-center overflow-x-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
              key={i}
              className="aspect-square rounded-full bg-gray-200 animate-pulse" />
            ))}
          </div> 
        </div>
      </section>
  )
};

function SupportersWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
    // esperamos un ciclo para que AOS se configure
    const t = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(t);
  }, []);

  return ready ? <Supporters /> : <Skeleton />;
};

export default SupportersWrapper;