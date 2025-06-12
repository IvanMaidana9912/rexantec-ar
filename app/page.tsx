import {
  Navbar,
  Hero,
  Services,
  Brands,
  WhyChooseUs,
  Stats,
  Testimonials,
  FAQ,
  Contact
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
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
