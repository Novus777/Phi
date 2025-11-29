"use client";

import Link from "next/link";

const games = [
  { name: "VS", slug: "vs", tag: "New", color: "from-red-500 to-orange-500", icon: "VS" },
  { name: "Flappy Phoenix", slug: "flappy-phoenix", tag: "Hot", color: "from-yellow-400 to-red-500", icon: "🔥" },
  { name: "Plinko", slug: "plinko", tag: "Hot", color: "from-emerald-500 to-cyan-500", icon: "●" },
  { name: "Crash", slug: "crash", tag: "Volatile", color: "from-purple-500 to-pink-500", icon: "📉" },
  { name: "Mines", slug: "mines", tag: "Classic", color: "from-yellow-400 to-orange-500", icon: "💣" },
  { name: "Slots", slug: "slots", tag: "Jackpot", color: "from-red-500 to-rose-500", icon: "🎰" },
  { name: "Dice", slug: "dice", tag: "Stable", color: "from-blue-500 to-indigo-500", icon: "🎲" },
  { name: "Coinflip", slug: "coinflip", tag: "50/50", color: "from-gray-400 to-gray-600", icon: "🪙" }
];

export default function FeaturedGames() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10">
          Featured Games
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f] hover:shadow-[0_0_35px_rgba(0,255,180,0.25)] transition"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${game.color} blur-xl transition`}
              />

              <div className="p-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center text-2xl">
                  {game.icon}
                </div>

                <h3 className="text-white font-medium text-lg">
                  {game.name}
                </h3>

                <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300 group-hover:border-emerald-400/50 group-hover:text-emerald-300 transition">
                  {game.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
