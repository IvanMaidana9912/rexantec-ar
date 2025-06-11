'use client';
import Link from 'next/link';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50">
      <div className="flex items-center justify-between p-4 mx-8">
        <div className="text-xl font-bold text-white">Rexantec</div>
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-8">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white pb-1 border-b-2 border-transparent hover:border-red-500 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contacto"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
    </nav>
  );
}