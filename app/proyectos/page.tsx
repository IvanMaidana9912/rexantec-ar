import {
  Navbar,
  Hero,
  Footer,
  ImageCard as Image
} from '../../components';
import Gallery from '@/components/Gallery';
import images from '@/bbdd/IMAGE_SRC_P.json';
import card from '@/bbdd/IMG_P.json'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos | Rexantec',
};

interface ListItem { name: string; route: string };
interface ListOfType { name: string; route: string; content: string[]; list_of_items?: Record<string, ListItem> };
interface Category { name: string; downloadUrl: string; content: string[]; list_of_types: Record<string, ListOfType>; img: string, description: string };
type ProductsImage = Record<string, Category>[];

export default function Home() {
  const dataArray = (card as unknown) as ProductsImage
  const categoriesMap = dataArray[0]
  const categoriesEntries = Object.entries(categoriesMap) as [string, Category][]
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero
          imgHREF='https://i.imgur.com/K89bY0o.jpeg'
          title="Proyectos"
          description="En Rexantec llevamos a cabo proyectos integrales de instalaciones eléctricas y climatización, abarcando desde electricidad domiciliaria y sistemas de iluminación hasta soluciones de calefacción central: colocación de losas radiantes, calderas murales y termotanques. Somos expertos en el montaje de sistemas de aire acondicionado de todas las gamas (VRV/VRF, minisplits, splits, multi–split, piso–techo y bajo silueta), y también realizamos desmantelamientos y traslados de equipos, diseño y armados de tableros eléctricos, instalación de cámaras de seguridad, portero eléctrico y proyectos de energía renovable." />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
          {categoriesEntries.map(([, cat]) => {
            const count = Array.isArray(cat.content) ? cat.content.length : 0
            return (
              <div key={`${cat.name}${cat.description}`} className="flex justify-center ">
                <Image
                  description={cat.description}
                  name={cat.name}
                  imageSrc={`${cat.img}`}
                  // aquí usamos el slug correcto
                  srcLink={`${cat.downloadUrl}`}
                  counts={count}
                />
              </div>
            )
          })}
        </section>
        <Gallery images={images} />
        <Footer />
      </main>
    </>
  )
};