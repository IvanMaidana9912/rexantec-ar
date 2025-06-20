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





export default function Home() {
  return (
    <>
      <Navbar />
      <main className=''>
        <Hero imgHREF='https://i.imgur.com/iOcwLpQ.jpeg' />
        <Services />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <FAQ />
        <Supporters />
        <QuoteCTA />
        <Footer />
      </main>
    </>
  );
}
