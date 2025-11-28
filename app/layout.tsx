import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastProvider from "./components/ToastProvider";
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
      <head />
      <body className="bg-black text-white">
        <ToastProvider>
          <Navbar />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
