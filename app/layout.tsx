import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PHI Casino",
  description: "AI-powered crypto casino",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
