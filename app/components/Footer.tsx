"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t border-white/10 bg-black/40 backdrop-blur-xl py-12 px-6 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        <div className="flex items-center gap-3">
          <Image src="/phi-logo.png" width={40} height={40} alt="PHI" />
          <span className="text-white font-semibold text-lg">PHI</span>
        </div>

        <div className="flex gap-8 text-sm">
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/support" className="hover:text-white transition">Support</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} PHI Casino — All rights reserved.
        </p>

      </div>
    </footer>
  );
}
