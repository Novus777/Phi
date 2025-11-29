"use client";

import "./globals.css";
import type { Metadata } from "next";
import SolanaWalletProvider from "./providers/WalletProvider";
import ToastProvider from "./components/ToastProvider";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "PHI Casino",
  description: "AI-powered crypto casino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SolanaWalletProvider>
          <ToastProvider>
            <Navbar />
            {children}
          </ToastProvider>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
