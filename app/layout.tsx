import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Chakra-provider";
import Loader from "@/components/Home/loader";
import { useState } from "react";

const oxaniumFont = Oxanium({weight: ['400', '500', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "PANDABRO",
  description: "Harness the unmatched power of the PANDABRO Bot to dominate the trading landscape",
  icons: {
    icon: "/panda.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
          display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background:"#0c0f12", color: '#fff'
        }} className={`${oxaniumFont.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
