'use client';

import dynamic from 'next/dynamic';

// Importamos Supporters **solo en cliente**, sin SSR
const Supporters = dynamic(
  () => import('../components/Supporters'),
    { ssr: false ,
      loading: () => (<div className='overflow-x-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]
      '/>)
    }
    );

    export default function SupportersLoader() {
      return ( <div className="overflow-x-hidden"><Supporters /></div>);