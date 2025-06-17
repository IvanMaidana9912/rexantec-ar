import {
  Navbar,
  Hero,

  Footer,
  Gallery,
} from '../../components';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero  imgHREF='Group-200.png'/>
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
