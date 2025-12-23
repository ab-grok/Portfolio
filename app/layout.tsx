import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sule Abraham",
  description:
    "Portfolio website showcasing previous works and serving as a contact card for software development jobs",
  keywords: [
    "portfolio",
    "software developer",
    "software engineer",
    "coding projects",
    "programmer",
    "ab.grok",
    "sule abraham",
  ],
  icons: { icon: "/logo.png" },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Software engineer",
    description: "Portforlio website for Sule Abraham",
    creator: "@ab_grok",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
