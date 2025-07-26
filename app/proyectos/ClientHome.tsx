'use client';
import {
    Navbar, Hero, Footer,
} from '../../components';
import ImageCard from '../../components/ImageCard';
import rawData from '../../bbdd/IMG_P.json';
import { Project, ProjectsJSON } from '../../utils/types';

export default function ClientHome() {
    const data = rawData as ProjectsJSON;
    const proyectos: Project[] = data[0]?.proyectos ?? [];

    return (
        <>
            <Navbar />
            <main className="overflow-x-hidden">
                <Hero
                    imgHREF='https://i.imgur.com/K89bY0o.jpeg'
                    title="Proyectos"
                    description="En Rexantec llevamos a cabo proyectos integrales de instalaciones eléctricas y climatización, abarcando desde electricidad domiciliaria y sistemas de iluminación hasta soluciones de calefacción central: colocación de losas radiantes, calderas murales y termotanques. Somos expertos en el montaje de sistemas de aire acondicionado de todas las gamas (VRV/VRF, minisplits, splits, multi–split, piso–techo y bajo silueta), y también realizamos desmantelamientos y traslados de equipos, diseño y armados de tableros eléctricos, instalación de cámaras de seguridad, portero eléctrico y proyectos de energía renovable." />

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                    {proyectos.map(proy => (
                        <ImageCard
                            key={proy.id}
                            title={proy.title}
                            Sdescription={proy.Sdescription}
                            dynamicRoute={proy.href}
                            images={proy.images.map(src => ({ SrcI: src, AltI: proy.title }))}/>
                    ))}
                </section>
                <Footer />
            </main>
        </>
    );
};