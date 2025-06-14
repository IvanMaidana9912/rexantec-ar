'use client'

import Link from 'next/link';
import { FaFacebookF, FaEnvelope, FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#D6002E] text-white pt-12">
      {/* Divisor curvo blanco */}
      <div className="absolute top-0 left-0 right-0 -mt-1 overflow-hidden pointer-events-none">
        <svg
          className="block w-full h-8"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#ffffff" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">
        {/* 1: Contacto */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Info de contacto</h3>
          <p>CABA, Argentina</p>
          <p>
            <Link
              href="mailto:instalaciones@rexantec.com.ar"
              className="underline hover:text-red-100 transition"
            >
              instalaciones@rexantec.com.ar
            </Link>
          </p>
          <p>
            <Link
              href="tel:+5491158947428"
              className="inline-flex items-center underline hover:text-red-100 transition"
            >
              <FaPhone className="mr-2" /> +54 9 11 5894 7428
            </Link>
          </p>
        </div>

        {/* 2: Servicios */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Servicios</h3>
          <ul className="space-y-2">
            {[
              { href: '#reparaciones', text: 'Reparaciones' },
              { href: '#instalaciones', text: 'Instalaciones' },
              { href: '#mantenimiento', text: 'Mantenimiento' },
              { href: '#productos', text: 'Productos' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block pb-1 border-b-2 border-transparent hover:border-white transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3: Marca y redes */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <span className="text-3xl font-extrabold">Rexantec</span>
          <p>Encontranos en redes sociales:</p>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
              { icon: FaEnvelope, href: 'mailto:instalaciones@rexantec.com.ar', label: 'Email' },
              { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
              { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
            ].map(({ icon: Icon, href, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#D6002E] hover:bg-red-100 transition"
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-red-400 opacity-50"></div>
      <div className="text-center text-sm text-red-200 py-6">
        © {new Date().getFullYear()} Rexantec. Todos los derechos reservados.
      </div>
    </footer>
  );
}
