import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import Banner from "./components/Banner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Compass",
  description: "E-Commerce criado para o programa de bolsas da Compass",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  return (
      <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <Banner/>
          <main className="bg-white h-screen p-16">{children}</main>
        </body>
      </html>
      </ClerkProvider>
  );
}
