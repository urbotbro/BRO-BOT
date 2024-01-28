import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Chakra-provider";

const oxaniumFont = Oxanium({weight: ['400', '500', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "BRO BOT",
  description: "Harness the unmatched power of the BRO Bot to dominate the trading landscape",
  icons: {
    icon: "/Logo-min.png",
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
          display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", background:"#0c0f12", color: '#fff'
        }} className={`${oxaniumFont.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
