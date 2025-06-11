export default function Services() {
  const items = [
    { title: 'Instalación de equipos', description: 'Aires acondicionados centrales y VRV.' },
    { title: 'Arreglos generales', description: 'Resolvemos cualquier imprevisto técnico.' },
    { title: 'Mantenimiento', description: 'Servicio de mantenimiento integral.' },
    { title: 'Abono mensual', description: 'Pago mensual para el mantenimiento acorde a tus necesidades.' },
  ];
  return (
    <section id="servicios" className="py-16 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Nuestros servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map(item => (
          <div key={item.title} className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}