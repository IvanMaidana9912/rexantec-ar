import {
  Navbar,
  Hero,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: 'https://i.imgur.com/pqcz6yO.jpeg', AltI: 'M01' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero
          imgHREF='https://i.imgur.com/pqcz6yO.jpeg'
          title="Momentos Rexantec"
          description="¡Gracias!" />
        <Gallery images={IMAGE_SRC} />
      </main>
    </>
  );
}
