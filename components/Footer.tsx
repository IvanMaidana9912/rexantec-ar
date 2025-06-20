'use client'

import Link from 'next/link';
import { FaFacebookF, FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp, FaInfo, FaYoutube } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative bg-[#E22128] text-white pt-12">
      {/* Divisor curvo blanco */}
      <div className="absolute top-0 left-0 right-0 -mt-1 overflow-hidden pointer-events-none">
        <svg
          className="block w-full h-8"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#0f446c" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">
        {/* 1: Contacto */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Info de contacto</h3>
          <p className='inline-flex items-center'><FaLocationPin className="mr-2" /> Bernal Oeste, Zona Sur, Argentina.</p>
          <p>
            <Link
              href="mailto:rexantecservicios@gmail.com.ar"
              className="hover:text-red-100 transition"
            >
              <FaInfo className="mr-2 inline-flex items-center" />rexantecservicios@gmail.com.ar
            </Link>
          </p>
          <p>
            <Link
              href="https://wa.me/5491158947428?text=Hola%20Rexantec%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sobre%3A%20%0AY%20estas%20son%20las%20fotos7videos%3A"
              className="inline-flex items-center hover:text-red-100 transition"
            >
              <FaWhatsapp className="mr-2 " /> +54 9 11 5894 7428
            </Link>
          </p>
        </div>

        {/* 2: Servicios */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Servicios</h3>
          <ul className="space-y-2">
            {[
              { href: '#instalaciones', text: 'Instalaciones' },
              { href: '#mantenimiento', text: 'Mantenimiento' },
              { href: '#reparaciones', text: 'Reparaciones' },
              // { href: '#productos', text: 'Productos' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block pb-1 border-b-2 border-transparent hover:border-[#0f446ca1] transition"
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
              { icon: FaFacebookF, href: 'https://m.facebook.com/100083022592038/', label: 'Facebook' },
              { icon: FaEnvelope, href: 'mailto:rexantecservicios@gmail.com.ar', label: 'Email' },
              { icon: FaInstagram, href: 'https://www.instagram.com/rexantec_servicios?igsh=bDF1ZHA3dGo4cGY0', label: 'Instagram' },
              { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
              { icon: FaYoutube, href: 'https://youtube.com/@rexantec-f8x?si=4FjJfx9Di63LNzD1', label: 'Youtube' },
            ].map(({ icon: Icon, href, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E22128] hover:bg-[#0f446c] transition"
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-[#E22128] opacity-50"></div>
      <div className="text-center text-sm text-red-200 py-6">
        © {new Date().getFullYear()} Rexantec. Todos los derechos reservados.
      </div>
    </footer>
  );
}
