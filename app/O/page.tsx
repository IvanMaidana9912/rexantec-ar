import {
  Navbar,
  Hero,
  FireIceSection,
} from '../../components';
import { Metadata } from 'next';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: 'https://i.imgur.com/pqcz6yO.jpeg', AltI: 'M01' },
];

export const metadata: Metadata = {
  title: 'Material | Rexantec',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden h-screen'>
        <Hero
          imgHREF='https://i.imgur.com/pqcz6yO.jpeg'
          title="Momentos Rexantec"
          description="¡Gracias!" />
        <FireIceSection />
        <Gallery images={IMAGE_SRC} />
      </main>
    </>
  )
};