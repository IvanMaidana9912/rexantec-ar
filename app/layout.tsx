import { Metadata } from 'next';
import { ClientAOS } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
  description:
    'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica...',
  keywords: [
    'Rexantec','climatización','termomecánica','aire acondicionado','chiller','mini split','VRV','VRF','instalaciones','CABA','Argentina'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
    description:
      'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica...',
    type: 'website',
    url: 'https://www.rexantec.com.ar/',
    siteName: 'Rexantec',
    locale: 'es_AR',
    images: [
      {
        url: 'https://www.rexantec.com.ar/images/og-image.png',
        alt: 'Rexantec – Climatización y termomecánica',
      },
    ],
  },
  twitter: null,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-419">
      <head>
        <link rel="apple-touch-icon" href="https://i.imgur.com/oRe3rLg.png" />
        <link rel="icon" href="https://i.imgur.com/oRe3rLg.png" type="image/x-png" />
        <meta
          property="article:publisher"
          content="https://m.facebook.com/100083022592038/"
        />
        <link rel="me" href="https://www.instagram.com/rexantec_servicios" />
        <link rel="me" href="https://m.facebook.com/100083022592038/" />
        <link rel="me" href="https://youtube.com/@rexantec-f8x" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rexantec',
              url: 'https://www.rexantec.com.ar/',
              logo: 'https://i.imgur.com/oRe3rLg.png',
              sameAs: [
                'https://m.facebook.com/100083022592038/',
                'https://www.instagram.com/rexantec_servicios',
                'https://youtube.com/@rexantec-f8x'
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0f446ca1] overflow-x-hidden">
        <ClientAOS />
        {children}
      </body>
    </html>
  );
}
