import Image from 'next/image';

const features = [
  { icon: 'quality.png', title: 'Calidad Garantizada', description: 'Solo trabajamos con repuestos originales y técnicos certificados.' },
  { icon: 'experience.png', title: 'Más de 10 Años de Experiencia', description: 'Trayectoria sólida en climatización residencial e industrial.' },
  { icon: 'support.png', title: 'Atención 24/7', description: 'Asistencia inmediata ante cualquier emergencia.' },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-16 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(feature => (
          <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-white shadow rounded">
            <div className="w-16 h-16 mb-4 relative">
              <Image src={`/images/icons/${feature.icon}`} alt={feature.title} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}