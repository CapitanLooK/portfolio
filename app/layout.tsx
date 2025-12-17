import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import PageTransition from "@/components/motion/PageTransition";
import StairTransition from "@/components/motion/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono' });

export const metadata: Metadata = {
  title: "Alejandro Maure Software Engineer",
  description: "Portfolio de Alejandro Maure",
  keywords: "software engineer, desarrollador, portfolio, react, nextjs, typescript",
  authors: [{ name: "Alejandro Maure" }],
  creator: "Alejandro Maure",
  publisher: "Alejandro Maure",
  metadataBase: new URL('https://alejandromaure.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Alejandro Maure Software Engineer",
    description: "Portfolio de Alejandro Maure",
    url: 'https://alejandromaure.com.ar',
    siteName: 'Alejandro Maure Portfolio',
    images: [
      {
        url: '/assets/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Alejandro Maure Portfolio',
      },
    ],
    locale: 'es_AR',
    type: 'website',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        {/* Prevenir inyección automática de scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevenir errores de Cloudflare Insights
              window.addEventListener('error', function(e) {
                if (e.filename && e.filename.includes('cloudflareinsights.com')) {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
