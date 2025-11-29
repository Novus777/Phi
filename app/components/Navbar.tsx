"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useToast } from "./ToastProvider";
import Balance from "./Balance";

export default function Navbar() {
  const { publicKey, connected, connect, disconnect } = useWallet();
  const { showToast } = useToast();
  const [shortAddress, setShortAddress] = useState("");

  useEffect(() => {
    if (publicKey?.toBase58) {
      const s = publicKey.toBase58();
      setShortAddress(s.slice(0, 4) + "…" + s.slice(-4));
    } else {
      setShortAddress("");
    }
  }, [publicKey]);

  const handleConnect = async () => {
    if (!connect) {
      showToast("No wallet adapter available");
      return;
    }
    try {
      await connect();
    } catch (err) {
      showToast("Phantom Wallet not detected or connection rejected");
    }
  };

  const handleDisconnect = async () => {
    if (!disconnect) {
      showToast("No wallet adapter available");
      return;
    }
    try {
      await disconnect();
      showToast("Wallet disconnected");
    } catch (err) {
      showToast("Error disconnecting wallet");
    }
  };

  return (
    <nav className="w-full border-b border-white/10 bg-black/40 backdrop-blur-xl py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-semibold">PHI</Link>

      <div className="flex items-center">
        {connected && <Balance />}

        {!connected ? (
          <button
            onClick={handleConnect}
            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition ml-3"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={handleDisconnect}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 hover:border-red-400 hover:text-red-300 transition ml-3"
          >
            {shortAddress || "Wallet"} ▾
          </button>
        )}
      </div>
    </nav>
  );
}
