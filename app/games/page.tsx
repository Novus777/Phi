import Link from "next/link";
import Image from "next/image";

const games = [
  { name: "VS", slug: "vs", img: "/games/coinflip.png", color: "from-emerald-500 to-cyan-500" },
  { name: "Flappy Phoenix", slug: "flappy-phoenix", img: "/games/slots.png", color: "from-purple-500 to-pink-500" },
  { name: "Plinko", slug: "plinko", img: "/games/plinko.png", color: "from-emerald-500 to-cyan-500" },
  { name: "Crash", slug: "crash", img: "/games/crash.png", color: "from-purple-500 to-pink-500" },
  { name: "Mines", slug: "mines", img: "/games/mines.png", color: "from-yellow-400 to-orange-500" },
  { name: "Slots", slug: "slots", img: "/games/slots.png", color: "from-red-500 to-rose-500" },
  { name: "Dice", slug: "dice", img: "/games/dice.png", color: "from-blue-500 to-indigo-500" },
  { name: "Coinflip", slug: "coinflip", img: "/games/coinflip.png", color: "from-gray-400 to-gray-600" }
];

export default function GamesLobby() {
  return (
    <main className="py-20 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Games Lobby</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f] hover:shadow-[0_0_35px_rgba(0,255,180,0.12)] transition"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${game.color} blur-xl transition`} />

              <div className="p-6 flex flex-col items-center justify-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image src={game.img} alt={game.name} fill className="object-contain" />
                </div>

                <h3 className="text-white font-medium text-lg">{game.name}</h3>

                <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300 transition">
                  Play
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
