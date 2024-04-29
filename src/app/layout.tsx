import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Compass",
  description: "E-Commerce criado para o programa de bolsas da Compass",
};

export default function RootLayout({
  children, pageType
}: {
  children: React.ReactNode;
  pageType: string;
}) {
  return (    
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </head>
        <body className={inter.className}>
          <Navbar />
          <Banner /> 
          <main>
            {children}
          </main>
          <Footer/>
        </body>
        
         
        
      </html>
   
  );
}
