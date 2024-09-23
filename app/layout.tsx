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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
