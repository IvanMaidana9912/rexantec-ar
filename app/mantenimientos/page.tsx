import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery from '@/components/Gallery';
import images from '@/bbdd/IMAGE_SRC_M.json'; 

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mantenimientos | Rexantec',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          imgHREF='https://i.imgur.com/oUyrIZi.jpeg'
          title="Mantenimientos"
          description="Mantenemos tus equipos al 100 %: realizamos service completos de chiller, VRV/VRF y heladeras (incluyendo recambio de compresores), limpieza profunda de intercambiadores, revisión y ajuste de placas electrónicas y cambio de forzadores. Con nuestro plan de mantenimiento preventivo y correctivo, prolongamos la vida útil de tus sistemas, garantizando su rendimiento óptimo y eficiencia energética." />
        <Gallery images={images} />
        <Footer />
      </main>
    </>
  )
};