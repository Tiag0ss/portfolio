import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiag0ss Portfolio",
  description: "Tiag0ss' personal portfolio showcasing projects, skills, and experience in software development.",
  icons: {
    icon: "/icons8-portfolio-96.png",
    shortcut: "/icons8-portfolio-96.png",
    apple: "/icons8-portfolio-96.png",
  },
};

import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PrimeReactProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
