import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { generateStructuredData } from '@/lib/structured-data'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: {
    default: 'Metalúrgica Somoza | Soluciones Industriales a Medida desde 1959',
    template: '%s | Metalúrgica Somoza',
  },
  description: 'Empresa familiar con más de 65 años en el sector metalmecánico. Especialistas en mecanizado CNC, fresado, torneado, soldadura y fabricación de piezas industriales de alta precisión en Versalles, CABA. Atendemos a Ford, Toyota y Galileo. Cotizaciones en 24hs.',
  generator: 'v0.app',
  keywords: [
    // Servicios principales
    'metalúrgica Buenos Aires', 'mecanizado CNC CABA', 'fresado CNC Argentina', 'torneado CNC precisión',
    'soldadura industrial AMBA', 'taller metalúrgico Villa Luro', 'mecanizado de precisión',
    // RECIÉN AGREGADAS
    'metalúrgica Versalles', 'metalúriga Versalles', 'metalmecánica', 'metalmecanicas', 'metalúrgica CABA',
    'taller metalúrgico CABA', 'mecanizado industrial Argentina', 'piezas de precisión metalúrgica',
    // Long-tail keywords
    'fresado CNC 3 ejes', 'fresado CNC 4 ejes', 'fresado CNC 5 ejes', 'torneado CNC gran diámetro',
    'soldadura MIG TIG', 'soldadura acero inoxidable', 'rectificado industrial',
    // Productos/servicios específicos
    'dispositivos montaje automotriz', 'repuestos industriales a medida', 'fabricación piezas especiales',
    'piezas bajo plano', 'componentes CNC', 'herramientas industriales',
    'fabricación dispositivos medición', 'estructuras metálicas soldadas',
    // Clientes/industrias
    'mecanizado automotriz', 'repuestos Ford Toyota', 'mecanizado oil gas',
    'fabricación para industria', 'taller CNC empresas',
    // Ubicación
    'metalúrgica Villa Luro', 'taller CNC zona oeste', 'mecanizado AMBA',
    'fresado Buenos Aires urgente', 'torneado express CABA',
    // Familia/experiencia
    'empresa familiar metalúrgica', 'taller tradicional', '65 años experiencia mecanizado'
  ],
  authors: [{ name: 'Metalúrgica Somoza', url: 'https://metalurgicasomoza.com' }],
  creator: 'Metalúrgica Somoza',
  publisher: 'Metalúrgica Somoza',
  metadataBase: new URL('https://metalurgicasomoza.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://metalurgicasomoza.com',
    siteName: 'Metalúrgica Somoza',
    title: 'Metalúrgica Somoza | Soluciones Industriales a Medida desde 1959',
    description: 'Más de 65 años de experiencia en mecanizado CNC, fresado, torneado y soldadura. Atendemos Ford, Toyota, Galileo Technologies y +100 empresas. Cotización sin cargo.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Metalúrgica Somoza - Soluciones Industriales',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Metalúrgica Somoza | Soluciones Industriales desde 1959',
    description: 'Más de 65 años de experiencia en mecanizado CNC, fresado, torneado y soldadura.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1628' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${_inter.variable} ${_oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative z-10 min-h-screen pt-16 pb-32 bg-background shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
