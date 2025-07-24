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
    site: '',
  },
  icons: {
    icon: [
      //! Android Icons
      { rel: "icon", type: "image/png", sizes: "36x36", url: "/favicon/android-icon-36x36.png", },
      { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon/android-icon-48x48.png", },
      { rel: "icon", type: "image/png", sizes: "72x72", url: "/favicon/android-icon-72x72.png", },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon/android-icon-96x96.png", },
      { rel: "icon", type: "image/png", sizes: "144x144", url: "/favicon/android-icon-144x144.png", },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicon/android-icon-192x192.png", },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicon/android-icon-512x512.png", },

      //! Apple Icons
      { rel: "apple-touch-icon", type: "image/ico", url: "/favicon/apple-icon.png", },
      { rel: "apple-touch-icon", sizes: "57x57", url: "/favicon/apple-icon-57x57.png", },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/favicon/apple-icon-60x60.png", },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/favicon/apple-icon-72x72.png", },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/favicon/apple-icon-76x76.png", },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/favicon/apple-icon-114x114.png", },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/favicon/apple-icon-120x120.png", },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/favicon/apple-icon-144x144.png", },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/favicon/apple-icon-152x152.png", },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-icon-180x180.png", },

      //! Favion Icons
      { rel: "icon", type: "image/ico", url: "/favicon/favicon.ico", },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png", },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png", },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon/favicon-96x96.png", },
    ],

    //! Other Icons
    other: [{ rel: 'apple-touch-icon-precomposed', url: '/favicon/apple-icon-precomposed.png', },],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-419">
      <head>
        <meta property="article:publisher" content="https://m.facebook.com/100083022592038/" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="me" href="https://www.instagram.com/rexantec_servicios" />
        <link rel="me" href="https://m.facebook.com/100083022592038/" />
        <link rel="me" href="https://youtube.com/@rexantec-f8x" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rexantec',
              url: 'https://www.rexantec.com.ar/',
              logo: 'https://i.imgur.com/Cgf5Wnx.png',
              sameAs: [
                'https://m.facebook.com/100083022592038/',
                'https://www.instagram.com/rexantec_servicios',
                'https://youtube.com/@rexantec-f8x',
                'mailto:rexantecservicios@gmail.com',
                'https://api.whatsapp.com/send/?phone=5491158947428&text=Hola+Rexantec%2C+me+gustar%C3%ADa+solicitar+un+presupuesto+sobre%3A+%0AEstas+son+las+fotos+y%2Fo+videos%3A&type=phone_number&app_absent=0'
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0f446ca1] overflow-x-hidden select-none">
        <CatchAllErrors>
          <ClientAOS />
          {children}
        </CatchAllErrors>
      </body>
    </html>
  )
};