'use client';

import dynamic from 'next/dynamic';

// Importamos Supporters **solo en cliente**, sin SSR
const Supporters = dynamic(
  () => import('../components/Supporters'),
    { ssr: false }
    );

    export default function SupportersLoader() {
      return <Supporters />;
      };