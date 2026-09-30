import type { Metadata } from 'next';
import { Instrument_Sans, Syne } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tiag0ss — Portfolio',
  description:
    "Tiag0ss' personal portfolio showcasing open-source projects, tools, and experiments in software development.",
  icons: {
    icon: '/icons8-portfolio-96.png',
    shortcut: '/icons8-portfolio-96.png',
    apple: '/icons8-portfolio-96.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
