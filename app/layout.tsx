import { Metadata } from 'next';
import { CatchAllErrors, ClientAOS } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
  description:
    'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica para el sector de la construcción.',
  keywords: [
    'Rexantec', 'climatización', 'termomecánica', 'aire acondicionado',
    'chiller', 'mini split', 'VRV', 'VRF', 'instalaciones', 'CABA', 'Argentina'
  ],
  manifest: '/manifest.webmanifest',
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
    type: 'website',
    url: 'https://www.rexantec.com.ar/',
    title: 'Rexantec – Soluciones integrales de climatización y termomecánica',
    description:
      'Rexantec ofrece instalaciones y soluciones integrales de climatización y termomecánica para el sector de la construcción.',
    siteName: 'Rexantec',
    locale: 'es_AR',
    images: [
      {
        url: 'https://www.rexantec.com.ar/images/og-image.png',
        alt: 'Climatización y termomecánica',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tu_handle',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/og-image.png',
    shortcut: '/images/og-image.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-419">
      <head>
        <meta property="article:publisher" content="https://m.facebook.com/100083022592038/" />
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
                'https://youtube.com/@rexantec-f8x',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0f446ca1] overflow-x-hidden">
        <CatchAllErrors>
          <ClientAOS />
          {children}
        </CatchAllErrors>
      </body>
    </html>
  )
};