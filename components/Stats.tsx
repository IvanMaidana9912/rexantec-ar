'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ITEMS_STATS from '../bbdd/ITEMS_STATS.json'

export default function Stats() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      id="stats"
      ref={ref}
      className="py-16 bg-[#0f446ca1] flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-[#E22128] rounded-2xl p-4 sm:p-6 md:p-16 shadow-lg mx-auto w-full max-w-5xl flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white w-full">
            {ITEMS_STATS.map(({ end, suffix, label }, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none font-mono">
                  {inView
                    ? (<CountUp end={end} duration={2} suffix={suffix} />)
                    :
                    (`0${suffix}`)}
                </div>
                <div className="mt-2 text-base sm:text-lg font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};