'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientAOS() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
        disable: () => window.innerWidth < 640, // opcional, mantiene disable en móvil
      });
      AOS.refresh();
    };

    // Si ya se cargó la página
    if (document.readyState === 'complete') {
      initAOS();
    } else {
      // Espera al evento load
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }
  }, []);

  return null;
}
