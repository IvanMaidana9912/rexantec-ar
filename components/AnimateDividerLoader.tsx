'use client';

import dynamic from 'next/dynamic';

// este componente sólo vive en el cliente,
// por eso aquí sí permitimos ssr: false
const AnimateDivider = dynamic(
  () => import('./AnimateDivider'),
  { ssr: false }
);

export default function AnimateDividerLoader() {
  return <AnimateDivider />;
};