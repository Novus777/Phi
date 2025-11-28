"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-black via-[#050816] to-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI-Powered Crypto Casino
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              PHI Casino
            </span>
            <br />
            where AI hunts{" "}
            <span className="text-emerald-400">max EV</span> for you.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl">
            Let the PHI engine track RTP, volatility and hot games 24/7. 
            You focus on the wins — we handle the numbers.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/games"
              className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
            >
              Enter Casino
            </Link>

            <Link
              href="#how-it-works"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              How PHI works
            </Link>

            <p className="text-xs text-gray-400 w-full sm:w-auto">
              No real money yet — testnet & UX in progress.
            </p>
          </div>

          {/* TRUST / STATS ROW */}
          <div className="flex flex-wrap gap-8 pt-6 text-xs text-gray-400">
            <div>
              <p className="text-emerald-400 text-sm font-semibold">
                Live RTP tracking
              </p>
              <p>AI monitors game performance in real-time.</p>
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-semibold">
                Built for SOL
              </p>
              <p>Optimized for Solana & Phantom wallet first.</p>
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-semibold">
                24/7 grinding
              </p>
              <p>Agents never sleep, only chase edge.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: GLASS CARD / PREVIEW */}
        <div className="flex-1 w-full">
          <div className="relative mx-auto max-w-md">
            {/* Glow circle */}
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-purple-500/30 blur-3xl opacity-70" />

            {/* Glass card */}
            <div className="relative rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-400">AI Session</p>
                  <p className="text-sm font-semibold">Vault: Demo Wallet</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 border border-emerald-400/40">
                  +132% Today
                </span>
              </div>

              {/* Fake chart bars */}
              <div className="flex items-end gap-2 h-32 mb-6">
                <div className="flex-1 rounded-full bg-emerald-500/20" style={{ height: "35%" }} />
                <div className="flex-1 rounded-full bg-emerald-500/40" style={{ height: "60%" }} />
                <div className="flex-1 rounded-full bg-emerald-500/70" style={{ height: "85%" }} />
                <div className="flex-1 rounded-full bg-emerald-500/40" style={{ height: "55%" }} />
                <div className="flex-1 rounded-full bg-emerald-500/20" style={{ height: "30%" }} />
              </div>

              {/* Game list */}
              <div className="space-y-3">
                {[
                  { name: "Plinko Edge", rtp: "98.4%", status: "+ EV", tag: "Hot" },
                  { name: "Crash AI Beta", rtp: "96.9%", status: "Neutral", tag: "Stable" },
                  { name: "Mines v2", rtp: "94.2%", status: "- EV", tag: "Avoid" },
                ].map((game) => (
                  <div
                    key={game.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs"
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-100 font-medium">{game.name}</span>
                      <span className="text-gray-400 text-[11px]">
                        RTP: <span className="text-emerald-400">{game.rtp}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
                        {game.tag}
                      </span>
                      <span className="text-[11px] text-gray-300">{game.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[10px] text-gray-500 text-center">
                Simulated data. PHI engine UI preview — mainnet coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-black/40/40 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Connect wallet</h2>
            <p className="text-sm text-gray-400">
              Start with a Phantom wallet on Solana. We&apos;ll begin in devnet / testnet so you can
              feel the flow with zero risk.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Let PHI scout games</h2>
            <p className="text-sm text-gray-400">
              Our AI agents track volatility, RTP, and streaks across supported games, surfacing
              only the highest quality opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">3. You choose the vibes</h2>
            <p className="text-sm text-gray-400">
              Pick your risk level, let the engine suggest plays, and lock in your own strategy.
              You stay in control — PHI just feeds the edge.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
