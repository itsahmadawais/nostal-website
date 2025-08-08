import type { Metadata } from "next";
import { Geist, Geist_Mono, Comfortaa, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  weight: ["400", "500", "600", "700"], // Added weights
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nostal",
  description:
    "Join nostal - the first Web3 powered social app where your posts pay. Drop content, bring your crew, and earn rewards while you scroll.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
