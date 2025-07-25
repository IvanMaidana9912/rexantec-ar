import {
  Navbar,
  Hero,
  Footer,
  ImageCard
} from '../../components';
import rawData from '@/bbdd/IMG_P.json';
import { Project, ProjectsJSON } from '@/utils/types';

export const metadata = {
  title: 'Proyectos | Rexantec',
};

export default function Home() {
  // 1) Castea al tipo correcto
  const data = rawData as ProjectsJSON;
  // 2) Extrae el array de proyectos
  const proyectos: Project[] = data[0]?.proyectos ?? [];

  return (
    <>
      <div id="modal-products" />
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero
          imgHREF='https://i.imgur.com/K89bY0o.jpeg'
          title="Proyectos"
          description="En Rexantec llevamos a cabo proyectos integrales…"
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
          {proyectos.map((proy) => (
            <div key={proy.id} className="flex justify-center">
              <ImageCard
                title={proy.title}
                Sdescription={proy.Sdescription}
                // usa la URL del JSON
                imageSrc={proy.IMG}
                // si quieres que al click abra href:
                srcLink={proy.href}
                counts={proy.content.length}
              />
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
