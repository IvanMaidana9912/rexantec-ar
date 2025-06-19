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
        <QuoteCTA />
        <Footer />
      </main>
    </>
  );
}
