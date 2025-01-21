import type { Metadata } from "next";

import {
  Inter,
  Montserrat,
  Rajdhani,
  Inknut_Antiqua,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import { TabProvider } from "@/context/TabContsxt";
import MyProvider from "@/components/MyProvider";

export const metadata: Metadata = {
  title: "Innate Design - Innovative Web Solutions",
  description: "Explore cutting-edge web design and development solutions at Innate Design. Transform your ideas into engaging digital experiences with our expert team.",
  keywords: "web design, web development, digital solutions, innovative design, UX/UI, modern websites",
  icons :{
    icon: "/favicon.ico"
  }
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const inknut = Inknut_Antiqua({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inknut",
});

const Bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Bodoni",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/logo-innate.png" /></head>
      <body
        className={`gradient ${inter.variable}  ${monts.variable} ${rajdhani.variable} ${inknut.variable} ${Bodoni.variable} bg-[#000]`}
      >
        <MyProvider>
          <TabProvider>

            {children}
            <Footer />
          </TabProvider>
        </MyProvider>

      </body>
      
    </html>
  );
}
