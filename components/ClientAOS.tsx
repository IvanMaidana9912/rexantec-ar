'use client'

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientAOS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: () => window.innerWidth < 640,
    });
    AOS.refresh();
    window.addEventListener('resize', AOS.refresh);
    return () => window.removeEventListener('resize', AOS.refresh);
  }, []);

  return null;
}
