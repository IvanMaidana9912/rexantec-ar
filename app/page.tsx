import {
  Navbar,
  Hero,
  Services,
  Brands,
  WhyChooseUs,
  Stats,
  Testimonials,
  FAQ,
  Supporters,
  QuoteCTA,
  Footer,
} from '../components';

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
  )
};