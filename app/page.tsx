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
      <main>
        <Hero />
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
