"use client";

import "./globals.css";
import SolanaWalletProvider from "./providers/WalletProvider";
import ToastProvider from "./components/ToastProvider";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
