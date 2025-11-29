"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function Balance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchBalance = async () => {
      try {
        if (publicKey && connection) {
          const lamports = await connection.getBalance(publicKey);
          if (mounted) setBalance(lamports / 1_000_000_000);
        } else {
          if (mounted) setBalance(null);
        }
      } catch (err) {
        if (mounted) setBalance(null);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 5000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [publicKey, connection]);

  if (!publicKey || balance === null) return null;

  return <div className="text-sm text-emerald-300 ml-3">{balance.toFixed(3)} SOL</div>;
}
