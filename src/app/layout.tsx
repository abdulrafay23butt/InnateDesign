// import type { Metadata } from "next";

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
