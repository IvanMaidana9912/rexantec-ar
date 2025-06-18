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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tuTwitter',
    title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
    description:
      'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica para el sector de la construcción: aire acondicionado (chiller, mini split, VRV/VRF) de las principales marcas.',
    images: ['https://tusitio.com/images/twitter-card.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="es-419">
      <head>
        <link rel="apple-touch-icon" href="https://i.imgur.com/oRe3rLg.png" />
      </head>
      <body className="bg-[#0f446ca1]">
        <ClientAOS />
        {children}
      </body>
    </html>
  );
}