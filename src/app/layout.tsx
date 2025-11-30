import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wondrous Mind Education | Math & Science Tuition Singapore",
    template: "%s | Wondrous Mind Education",
  },
  description: "Singapore's trusted tuition centre for Math and Science. Expert NIE-trained teachers helping students excel with fun, engaging lessons. Primary to Secondary levels.",
  keywords: [
    "tuition centre Singapore",
    "math tuition",
    "science tuition",
    "primary school tuition",
    "secondary school tuition",
    "O-level math",
    "O-level science",
    "Singapore tuition",
    "Wondrous Mind Education",
  ],
  authors: [{ name: "Wondrous Mind Education" }],
  creator: "Wondrous Mind Education",
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Wondrous Mind Education",
    title: "Wondrous Mind Education | Math & Science Tuition Singapore",
    description: "Singapore's trusted tuition centre for Math and Science. Expert NIE-trained teachers helping students excel with fun, engaging lessons.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wondrous Mind Education | Math & Science Tuition Singapore",
    description: "Singapore's trusted tuition centre for Math and Science. Expert NIE-trained teachers helping students excel.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
