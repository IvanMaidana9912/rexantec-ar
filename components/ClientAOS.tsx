'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientAOS() {
  const path = usePathname();
  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: () => window.innerWidth < 640 });
    AOS.refresh();
  }, [path]);

  return null;
};