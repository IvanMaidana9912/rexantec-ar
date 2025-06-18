import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: '/inicio',    AltI: 'P01' },
  { SrcI: '/servicios', AltI: 'P02' },
  { SrcI: '/nosotros',  AltI: 'P03' },
  { SrcI: '/contacto',  AltI: 'P04' },
  { SrcI: '/contacto',  AltI: 'P05' },
  { SrcI: '/contacto',  AltI: 'P06' },
  { SrcI: '/contacto',  AltI: 'P07' },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero  imgHREF='Group-200.png'/>
        <Gallery images={IMAGE_SRC} />
        <Footer />
      </main>
    </>
  );
}
