export default function Contact() {
  return (
    <section id="contacto" className="py-16 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Contacto</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block mb-1">Nombre</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="tucorreo@dominio.com" />
        </div>
        <div>
          <label className="block mb-1">Mensaje</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Tu mensaje..." />
        </div>
        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}