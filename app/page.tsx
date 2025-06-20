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
  { src: '/images/supporters/alto-palermo.jpeg', alt: 'Alto Palermo', href: 'https://www.altopalermo.com.ar/'},
  { src: '/images/supporters/gentec.jpeg', alt: 'GenTec', href: 'https://www.gentecinstalaciones.com.ar/'},
  { src: '/images/supporters/cmr.jpeg', alt: 'CMR', href: 'http://countrymirefugio.com/#!/-bienvenido/' },
  { src: '/images/supporters/airmz.jpeg', alt: 'AirMZ', href: 'https://www.instagram.com/airmzrefrigeracion?igsh=MTdzMjVraGzsMm44aA==' },
  { src: '/images/supporters/edelap.jpg', alt: 'Edelap', href: 'https://www.edelap.com.ar/' },
  { src: '/images/supporters/ingem.jpg', alt: 'Logo XYZ', href: 'https://www.instagram.com/ingemaireacondicionado?igsh=Y3EzeWlwY3J2bGxu' },
  { src: '/images/supporters/bsvrv.png', alt: 'BSVRV', href: 'https://www.instagram.com/buenosairesvrv?igsh=dnJsdHpoYTlyMzl4' },
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
