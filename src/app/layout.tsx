import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title:
    "TMS AI Conference 2025: AI in Materials & Manufacturing | TMS Specialty Congress",
  description:
    "Join the TMS AI Conference (AIM 2025), a key event within the TMS Specialty Congress in Anaheim, CA. Explore the latest in AI, machine learning, and manufacturing processes with global experts in materials science.",
};

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full " suppressHydrationWarning>
      <body className={` antialiased flex flex-col min-h-full `}>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
