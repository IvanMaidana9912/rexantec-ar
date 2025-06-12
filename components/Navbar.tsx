// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed inset-x-0 top-0 z-50 transition-colors duration-300
          ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Rexantec
          </Link>

          {/* Desktop / Tablet Menu */}
          <div className="hidden md:flex items-center lg:space-x-12 md:space-x-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  px-2 py-1 font-medium border-b-2 border-transparent
                  transition-border duration-[330ms]
                  ${scrolled
                    ? 'text-gray-800 hover:border-gray-800'
                    : 'text-white hover:border-white'}
                `}
              >
                {label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5491158947428"
              target="_blank"
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold rounded-lg"
            >
              Chatear con Rexantec
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white z-50"
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 transition-transform duration-300
          md:hidden bg-black bg-opacity-70 backdrop-blur-sm
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col">
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end mb-8 text-gray-700"
            aria-label="Cerrar menú"
          >
            <FaTimes size={24} />
          </button>

          {/* Links */}
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-gray-600 transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Button */}
          <Link
            href="https://wa.me/5491158947428"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Chatear con Rexantec
          </Link>
        </div>
      </div>
    </>
  );
}
