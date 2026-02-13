import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sofiayluis.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sofía & Luis - Regalos",
  description:
    "Queremos que seas parte de nuestros sueños. Aporta a lo que más anhelamos para nuestra vida juntos: cada detalle cuenta y tu regalo nos acerca un poco más. 💙",
  openGraph: {
    title: "Sofía & Luis - Regalos",
    description:
      "Queremos que seas parte de nuestros sueños. Aporta a lo que más anhelamos para nuestra vida juntos. 💙",
    url: siteUrl,
    siteName: "Sofía & Luis - Regalos",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sofía & Luis - Nuestra boda",
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofía & Luis - Regalos",
    description:
      "Queremos que seas parte de nuestros sueños. Aporta a lo que más anhelamos para nuestra vida juntos. 💙",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-wedding-cream text-wedding-deep`}
      >
        {children}
      </body>
    </html>
  );
}
