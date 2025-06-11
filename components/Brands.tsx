import Image from 'next/image';
export default function Brands() {
  const logos = [
    'blue-star', 'westric', 'hisense', 'toshiba', 'carrier', 'hitachi', 'daikin', 'tadiran', 'lg'
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Marcas que nos acompañan</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map(name => (
            <div key={name} className="w-24 h-24 relative">
              <Image src={`/images/brands/${name}.png`} alt={name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}