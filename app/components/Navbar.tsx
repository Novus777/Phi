"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "./ToastProvider";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const { showToast } = useToast();
  const [connected, setConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const fakeConnect = () => {
    showToast("Wallet connection coming soon.");
    setConnected(true);
  };

  const fakeLogout = () => {
    setConnected(false);
    setMenuOpen(false);
    showToast("Disconnected.");
  };

  return (
    <nav className="w-full border-b border-white/10 bg-black/40 backdrop-blur-xl py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-semibold">PHI</Link>

      <div className="relative">

        {!connected ? (
          <button
            onClick={fakeConnect}
            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition"
          >
            Connect Wallet
          </button>
        ) : (
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              1.000 TEST ▾
            </button>

            {menuOpen && (
              <ProfileMenu onLogout={fakeLogout} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
