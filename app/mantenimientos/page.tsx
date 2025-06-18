import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: '/inicio',    AltI: 'M01' },
  { SrcI: '/servicios', AltI: 'M02' },
  { SrcI: '/nosotros',  AltI: 'M03' },
  { SrcI: '/contacto',  AltI: 'M04' },
  { SrcI: '/contacto',  AltI: 'M05' },
  { SrcI: '/contacto',  AltI: 'M06' },
  { SrcI: '/contacto',  AltI: 'M07' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero  imgHREF='Group-200.png'/>
        <Gallery images={IMAGE_SRC}/>
        <Footer />
      </main>
    </>
  );
}
