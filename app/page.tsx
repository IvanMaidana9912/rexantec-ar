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

// Nota: Crea los componentes restantes (WhyChooseUs.tsx, Stats.tsx, Testimonials.tsx, FAQ.tsx, Contact.tsx) en la carpeta components/ siguiendo la misma lógica de importación de imágenes desde public/images.
