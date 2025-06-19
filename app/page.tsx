import {
  Navbar,
  Hero,
  Services,
  Brands,
  WhyChooseUs,
  Stats,
  Testimonials,
  FAQ,
  QuoteCTA,
  Footer,
} from '../components';

import Supporters, { Supporter } from '@/components/Supporters';

const SUPPORTERS: Supporter[] = [
  { src: '/images/supporters/alto-palermo.jpeg', alt: 'Alto Palermo' },
  { src: '/images/supporters/gentec.jpeg',       alt: 'GenTec' },
  { src: '/images/supporters/cmr.jpeg',          alt: 'CMR' },
  { src: '/images/supporters/airmz.jpeg',        alt: 'AirMZ' },
  { src: '/images/supporters/edelap.jpg',       alt: 'Edelap' },
  { src: '/images/supporters/ingem.jpg', alt: 'Logo XYZ' },
  { src: '/images/supporters/bsvrv.png',        alt: 'BSVRV' },
];



export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero imgHREF='https://i.imgur.com/iOcwLpQ.jpeg' />
        <Services />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <FAQ />
        <Supporters items={SUPPORTERS} />
        <QuoteCTA />
        <Footer />
      </main>
    </>
  );
}
