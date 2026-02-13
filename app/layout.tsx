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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://luisysofia-regalos.vercel.app";

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
        url: "https://luisysofia.vercel.app/images/backgrounds/bg-5.png",
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
    images: ["https://luisysofia.vercel.app/images/backgrounds/bg-5.png"],
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
