// components/SupportersLoader.tsx
'use client';

import dynamic from 'next/dynamic';

// Importamos Supporters **solo en cliente**, sin SSR
const Supporters = dynamic(
  () => import('./Supporters'),
  { ssr: false }
);

export default function SupportersLoader({ items }: { items: any[] }) {
  return <Supporters />;
};