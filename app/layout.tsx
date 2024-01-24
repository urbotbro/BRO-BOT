import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Chakra-provider";
import { Box } from '@chakra-ui/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRO BOT",
  description: "Harness the unmatched power of the BRO Bot to dominate the trading landscape",
  icons: {
    icon: "/Logo.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Box as="body" className={inter.className} bg="#0c0f12" color='#fff'>{children}</Box>
      </Providers>
    </html>
  );
}
