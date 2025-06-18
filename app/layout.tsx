import { ClientAOS } from "@/components";
import "./globals.css";

export const metadata = {
  title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
  description:
    'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica para el sector de la construcción: aire acondicionado (chiller, mini split, VRV/VRF) de las principales marcas.',
  keywords: [
    'Rexantec',
    'climatización',
    'termomecánica',
    'aire acondicionado',
    'chiller',
    'mini split',
    'VRV',
    'VRF',
    'instalaciones',
    'soluciones integrales',
    'construcción',
    'CABA',
    'Argentina',
  ],
  openGraph: {
    title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
    description:
      'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica para el sector de la construcción: aire acondicionado (chiller, mini split, VRV/VRF) de las principales marcas.',
    type: 'website',
    url: 'https://www.rexantec.com.ar/',
    siteName: 'Rexantec',
    locale: 'es_AR',
    images: [
      {
        url: 'https://tusitio.com/images/og-image.png',
        alt: 'Rexantec – Climatización y termomecánica',
      },
    ],
    // para Facebook Publisher
    article: {
      publisher: 'https://m.facebook.com/100083022592038/',
    },
  },
  twitter: {
    // dejamos la sección por si en el futuro la activas,
    // pero vacía para no generar datos erróneos hoy
    card: '',
    site: '',
    title: '',
    description: '',
    images: [],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-419">
      <head>
        {/* Favicon / apple-touch-icon */}
        <link
          rel="apple-touch-icon"
          href="https://i.imgur.com/oRe3rLg.png"
        />
        <link
          rel="icon"
          href="https://i.imgur.com/oRe3rLg.png"
          type="image/x-png"
        />

        {/* Enlaces rel=me para identificar tus perfiles */}
        <link
          rel="me"
          href="https://www.instagram.com/rexantec_servicios?igsh=bDF1ZHA3dGo4cGY0"
        />
        <link
          rel="me"
          href="https://m.facebook.com/100083022592038/"
        />
        <link
          rel="me"
          href="https://youtube.com/@rexantec-f8x?si=4FjJfx9Di63LNzD1"
        />
      </head>
      <body className="bg-[#0f446ca1] overflow-x-hidden">
        <ClientAOS />
        {children}
      </body>
    </html>
  );
}
