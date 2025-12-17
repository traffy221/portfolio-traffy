import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Papa Daouda NDIAYE - Architecte Logiciel & Stratège Digital",
  description: "Développeur Full Stack passionné par le clean code, l'architecture logicielle et l'innovation digitale. Basé au Sénégal.",
  keywords: ["Papa Daouda NDIAYE", "Architecte Logiciel", "Développeur Full Stack", "Next.js", "React", "Sénégal", "Dakar"],
  authors: [{ name: "Papa Daouda NDIAYE" }],
  creator: "Papa Daouda NDIAYE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Papa Daouda NDIAYE - Architecte Logiciel & Stratège Digital",
    description: "Développeur Full Stack passionné par le clean code et l'innovation digitale.",
    siteName: "Papa Daouda NDIAYE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papa Daouda NDIAYE - Architecte Logiciel",
    description: "Développeur Full Stack passionné par le clean code et l'innovation digitale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
