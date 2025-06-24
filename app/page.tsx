import dynamic from 'next/dynamic';
import {
  Navbar,
  Hero,
  Services,
  Brands,
  WhyChooseUs,
  Stats,
  Testimonials,
  FAQ,
  SupportersLoader,
  QuoteCTA,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          imgHREF='https://i.imgur.com/iOcwLpQ.jpeg'
          title="Servicio técnico especializado en Aire Acondicionado y Calefacción Central."
          description="Proveemos garantía total de los equipos y servicios prestados, junto al mejor servicio de atención al cliente, poniendo a su disposición toda nuestra experiencia."
        />
        <Services />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <FAQ />
        <SupportersLoader />
        <QuoteCTA />
        <Footer />
      </main>
    </>
  )
};