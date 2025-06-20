import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: 'https://i.imgur.com/ikAu5lQ.jpeg', AltI: 'M01' },
  { SrcI: 'https://i.imgur.com/8I78qlw.jpeg', AltI: 'M02' },
  { SrcI: 'https://i.imgur.com/ZdASOKM.jpeg', AltI: 'M03' },
  { SrcI: 'https://i.imgur.com/waXFiLj.jpeg', AltI: 'M04' },
  { SrcI: 'https://i.imgur.com/i4MWNXq.jpeg', AltI: 'M05' },
  { SrcI: 'https://i.imgur.com/GyFuxea.jpeg', AltI: 'M06' },
  { SrcI: 'https://i.imgur.com/Li1eLdu.jpeg', AltI: 'M07' },
  { SrcI: 'https://i.imgur.com/NfjMnzC.jpeg', AltI: 'M08' },
  { SrcI: 'https://i.imgur.com/A0A70d7.jpeg', AltI: 'M09' },
  { SrcI: 'https://i.imgur.com/GBjHMrr.jpeg', AltI: 'M10' },
  { SrcI: 'https://i.imgur.com/uu8TlST.jpeg', AltI: 'M11' },
  { SrcI: 'https://i.imgur.com/aOjW6VJ.jpeg', AltI: 'M12' },
  { SrcI: 'https://i.imgur.com/17gO34j.jpeg', AltI: 'M13' },
  { SrcI: 'https://i.imgur.com/S46PBZ1.jpeg', AltI: 'M14' },
  { SrcI: 'https://i.imgur.com/xL9UbzM.jpeg', AltI: 'M15' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero imgHREF='https://i.imgur.com/oUyrIZi.jpeg' />
        <Gallery images={IMAGE_SRC} />
        <Footer />
      </main>
    </>
  )
};