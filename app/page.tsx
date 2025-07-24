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
      <main>
        <Hero
          imgHREF='https://i.imgur.com/iOcwLpQ.jpeg'
          title="Servicio técnico especializado en Aire Acondicionado y Calefacción Central"
          description="Te ofrecemos garantía total de los equipos y servicios brindados. Te asesoramos y acompañamos durante todo el proceso. Tenes a tu disposición toda nuestra experiencia." />
        <Services />
        <Brands />
        <WhyChooseUs />
        <Supporters />
        <Testimonials />
        <Stats />
        <FAQ />
        <QuoteCTA />
        <Footer />
      </main>
    </>
  )
};