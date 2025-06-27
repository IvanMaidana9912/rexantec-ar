 //Acá...
import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';
import images from '@/bbdd/IMAGE_SRC_P.json'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos | Rexantec',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero
          imgHREF='https://i.imgur.com/K89bY0o.jpeg'
          title="Proyectos"
          description="En Rexantec llevamos a cabo proyectos integrales de instalaciones eléctricas y climatización, abarcando desde electricidad domiciliaria y sistemas de iluminación hasta soluciones de calefacción central: colocación de losas radiantes, calderas murales y termotanques. Somos expertos en el montaje de sistemas de aire acondicionado de todas las gamas (VRV/VRF, minisplits, splits, multi–split, piso–techo y bajo silueta), y también realizamos desmantelamientos y traslados de equipos, diseño y armados de tableros eléctricos, instalación de cámaras de seguridad, portero eléctrico y proyectos de energía renovable."/>
        <Gallery images={images} />
        <Footer />
      </main>
    </>
  )
};