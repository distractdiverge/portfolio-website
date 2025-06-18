import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Astrid Lapinski | Software Engineer',
  description:
    'Portfolio of Astrid Lapinski - Software Engineer and Web Developer',
  keywords: [
    'portfolio',
    'software engineer',
    'web developer',
    'Astrid Lapinski',
  ],
  authors: [{ name: 'Astrid Lapinski' }],
  creator: 'Astrid Lapinski',
  publisher: 'Astrid Lapinski',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  openGraph: {
    title: 'Astrid Lapinski | Software Engineer',
    description:
      'Portfolio of Astrid Lapinski - Software Engineer and Web Developer',
    url: '/',
    siteName: 'Astrid Lapinski',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Astrid Lapinski - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrid Lapinski | Software Engineer',
    description:
      'Portfolio of Astrid Lapinski - Software Engineer and Web Developer',
    creator: '@yourtwitterhandle',
    images: ['/images/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-5H38H1LX1F';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} font-sans bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
