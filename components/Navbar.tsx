'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import WppButtom from './WppButtom';

interface NavLink {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    });
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled && !menuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <div className={`${!menuOpen ? 'hidden' : 'block'}`} />
          <Link
            href="/#"
            className="text-2xl font-bold transition-all duration-500 bg-gradient-to-r from-[#0F446C] via-[#8F7D81] to-[#E22128] bg-[length:200%_100%] bg-left bg-clip-text text-transparent hover:bg-right"
            onClick={() => setMenuOpen(false)}>
            Rexantec
          </Link>
          <div className="hidden md:flex items-center lg:space-x-12 md:space-x-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-2 py-1 font-medium border-b-2 border-transparent transition-all duration-[330ms] ${!mounted || !scrolled ? 'text-white' : 'text-gray-800'} hover:text-[#E22128] hover:border-[#E22128]`}>
                {label}
              </Link>
            ))}
            <WppButtom />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className={`md:hidden z-50 transition-colors duration-300 ${menuOpen ? 'text-transparent' : !mounted || !scrolled ? 'text-white' : 'text-gray-900'}`}>
            {menuOpen
              ?
              <FaTimes size={24} />
              :
              <FaBars size={24} />}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden bg-black/30 backdrop-blur-sm select-none ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link
          href="/#inicio"
          className="absolute inset-0 bg-transparent"
          onClick={() => setMenuOpen(false)}/>
        <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end mb-8 text-gray-700"
            aria-label="Cerrar menú">
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-gray-600 transition">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex-1" />
          <Link
            href="https://wa.me/5491158947428?text=Hola%20Rexantec%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sobre%3A%20%0AEstas%20son%20las%20fotos%20y/o%20videos%3A"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">
            <FaWhatsapp className="mr-3" />Chatear con Rexantec
          </Link>
        </div>
      </div>
    </>
  )
};