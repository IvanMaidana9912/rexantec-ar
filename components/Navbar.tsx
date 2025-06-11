import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">MCE</div>
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/5491149912004" className="bg-green-500 text-white px-4 py-2 rounded">
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
