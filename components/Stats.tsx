export default function Stats() {
  const stats = [
    { label: 'Proyectos Completados', value: 1200 },
    { label: 'Clientes Satisfechos', value: 950 },
    { label: 'Técnicos Expertos', value: 15 },
    { label: 'Años de Experiencia', value: 10 },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-8">
        {stats.map(stat => (
          <div key={stat.label} className="p-6">
            <h3 className="text-3xl font-bold mb-2">{stat.value}+</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}