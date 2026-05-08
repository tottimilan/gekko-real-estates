import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gekko Real Estates | Inversión Inmobiliaria en Madrid",
    template: "%s | Gekko Real Estates",
  },
  description:
    "Gekko Real Estate Investment & Properties Management. Compra, vende, alquila con confianza. Especialistas en inversión inmobiliaria, gestión de propiedades y reformas en Madrid.",
  keywords: [
    "inmobiliaria Madrid",
    "inversión inmobiliaria",
    "real estate Madrid",
    "comprar casa Madrid",
    "alquiler Madrid",
    "gestión propiedades",
    "reformas",
    "home staging",
  ],
  authors: [{ name: "Gekko Real Estates" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gekkorealestates.com",
    siteName: "Gekko Real Estates",
    title: "Gekko Real Estates | Inversión Inmobiliaria en Madrid",
    description:
      "Compra, vende, alquila con confianza. Especialistas en inversión inmobiliaria y gestión de propiedades en Madrid.",
    images: [
      {
        url: "/images/logo-gekko.webp",
        width: 480,
        height: 417,
        alt: "Gekko Real Estates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gekko Real Estates | Inversión Inmobiliaria en Madrid",
    description:
      "Compra, vende, alquila con confianza. Especialistas en inversión inmobiliaria y gestión de propiedades en Madrid.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
