export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white px-6 pb-20">
      
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center pt-20">
        
        {/* Center PHI Logo */}
        {/* logo removed */}

        <h1 className="text-4xl font-semibold tracking-wide text-center">
          Welcome to <span className="text-purple-400">PHI</span>
        </h1>

        <p className="mt-3 text-gray-400 text-lg text-center max-w-xl">
          The world’s first blended human & AI-powered crypto casino.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold">
            Play Now
          </button>

          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-xl font-semibold">
            Explore Games
          </button>
        </div>
      </section>

      <div className="w-full h-px bg-white/10 my-14"></div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Games</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { name: "PHI Plinko" },
            { name: "Mines" },
            { name: "Crash" },
            { name: "Phoenix" },
          ].map((game) => (
            <div
              key={game.name}
              className="bg-white/5 hover:bg-white/10 transition rounded-2xl p-4 flex flex-col items-center"
            >
              <div className="w-full h-28 rounded-xl overflow-hidden mb-3 bg-white/3" />
              
              <p className="font-semibold">{game.name}</p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

