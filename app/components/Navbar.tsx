"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
        <Image src="/phi-logo.png" width={40} height={40} alt="PHI" />
        <span className="text-xl font-semibold">PHI</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gray-300">
        <Link href="/" className="hover:text-white transition">Home</Link>
        <Link href="/games" className="hover:text-white transition">Games</Link>
        <Link href="/wallet" className="hover:text-white transition">Wallet</Link>
        <Link href="/vip" className="hover:text-white transition">VIP</Link>
        <Link href="/profile" className="hover:text-white transition">Profile</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="md:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="block w-6 h-1 bg-white mb-1" />
        <span className="block w-6 h-1 bg-white mb-1" />
        <span className="block w-6 h-1 bg-white" />
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 bg-black/90 border border-white/10 rounded-xl p-6 flex flex-col gap-4 md:hidden z-40">
          <Link href="/" className="hover:text-white" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/games" className="hover:text-white" onClick={() => setOpen(false)}>Games</Link>
          <Link href="/wallet" className="hover:text-white" onClick={() => setOpen(false)}>Wallet</Link>
          <Link href="/vip" className="hover:text-white" onClick={() => setOpen(false)}>VIP</Link>
          <Link href="/profile" className="hover:text-white" onClick={() => setOpen(false)}>Profile</Link>
        </div>
      )}

    </nav>
  );
}
