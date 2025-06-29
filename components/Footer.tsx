'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaMailBulk
} from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

interface Social {
  href: string;
  text: string;
}

const SOCIAL_LINK: Social[] = [
  { href: '#I', text: 'Instalaciones' },
  { href: '#M', text: 'Mantenimiento' },
  { href: '#R', text: 'Reparaciones' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#E22128] text-white pt-12">
      <div className="absolute top-0 left-0 right-0 -mt-1 overflow-hidden pointer-events-none">
        <svg
          className="block w-full h-8"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#0f446c" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Info de contacto</h3>
          <p className='inline-flex items-center'>
            <Link
              href="https://www.google.com.ar/maps/place/Tri%C3%A1ngulo+de+Bernal/@-34.7039116,-58.2940377,14z/data=!4m15!1m8!3m7!1s0x95a331fdc70bdd5d:0x6c702cf3f15dabac!2sBernal,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.7088552!4d-58.2826616!16s%2Fm%2F02wwlws!3m5!1s0x95a333c2cc669579:0xd3c0969cdbb40ce2!8m2!3d-34.7104272!4d-58.3103996!16s%2Fg%2F11h70hc9mk?hl=es&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-white hover:text-red-100 transition"
            >
              <FaLocationPin className="mr-2 inline-flex items-center" />Bernal Oeste, Zona Sur, Argentina.
            </Link>
          </p>
          <p>
            <Link
              href="mailto:rexantecservicios@gmail.com.ar"
              className="hover:text-red-100 transition">
              <FaMailBulk className="mr-2 inline-flex items-center" />rexantecservicios@gmail.com.ar
            </Link>
          </p>
          <p>
            <Link
              href="https://wa.me/5491158947428?text=Hola%20Rexantec%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sobre%3A%20%0AEstas%20son%20las%20fotos%20y/o%20videos%3A"
              className="inline-flex items-center hover:text-red-100 transition">
              <FaWhatsapp className="mr-2 " />+54 9 11 5894 7428
            </Link>
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Servicios</h3>
          <ul className="space-y-2">
            {SOCIAL_LINK.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block pb-1 border-b-2 cursor-default border-transparent"> {/* hover:border-[#0f446ca1] transition">*/}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <div className="transition-transform duration-300 hover:scale-105 w-[90px] h-[90px] mx-auto md:mx-0 rounded-full bg-white/80">
            <Image
              src="/logo_sin_fondo_desde_negro.png"
              alt="Logo Rexantec"
              width={90}
              height={90}
              className="w-full h-full object-contain p-3"
              priority
            />
          </div>
          <p>
            Encontranos en redes sociales:
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, href: 'https://m.facebook.com/100083022592038/', label: 'Facebook' },
              { icon: FaEnvelope, href: 'mailto:rexantecservicios@gmail.com.ar', label: 'Email' },
              { icon: FaInstagram, href: 'https://www.instagram.com/rexantec_servicios?igsh=bDF1ZHA3dGo4cGY0', label: 'Instagram' },
              { icon: FaTiktok, href: 'https://www.tiktok.com/@rexantec1?lang=en', label: 'TikTok' },
              { icon: FaYoutube, href: 'https://youtube.com/@rexantec-f8x?si=4FjJfx9Di63LNzD1', label: 'Youtube' },
            ].map(({ icon: Icon, href, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E22128] hover:bg-[#0f446c] transition"
                target={href.startsWith('http') ? '_blank' : undefined}>
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#E22128] opacity-50" />
      <div className="mx-4 text-center text-sm text-red-200 py-6">
        <div className='flex flex-col'>
          © {new Date().getFullYear()} REXANTEC || Todos los derechos reservados.&nbsp;
          <Link
            href="https://github.com/Ivan9912"
            target="_blank"
            className="text-white font-semibold transition-opacity duration-200 hover:text-[#0f446c]">
            By Ivan Maidana
          </Link>
        </div>
      </div>
    </footer>
  )
};