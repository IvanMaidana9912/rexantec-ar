'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function AnimateDivider() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('/animations/fire-ice.json')
      .then((res) => res.json())
      .then(setData)
  }, []);

  if (!data) return null;

  return (
    <section id="animation">
      <div className="relative w-full overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 transform -rotate-3 w-[150%] h-24 sm:h-32 md:h-40 lg:h-48 -translate-x-1/4">
          <Lottie animationData={data} loop autoplay style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
};