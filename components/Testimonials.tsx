import Image from 'next/image';

const testimonials = [
  { name: 'María López', text: 'Excelente servicio, resolvieron mi problema rápidamente.', image: 'client1.jpg' },
  { name: 'Juan Pérez', text: 'Técnicos muy profesionales y amables.', image: 'client2.jpg' },
];

export default function Testimonials() {
  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Testimonios</h2>
      <div className="space-y-8">
        {testimonials.map(item => (
          <div key={item.name} className="flex items-center space-x-4 p-6 bg-white shadow rounded">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src={`/images/testimonials/${item.image}`} alt={item.name} fill className="object-cover" />
            </div>
            <div>
              <p className="italic">“{item.text}”</p>
              <p className="mt-2 font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}