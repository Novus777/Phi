export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-[#050018] text-white flex items-center justify-center px-6">
      <section className="w-full max-w-3xl text-center">

        {/* Announcement Tag */}
        <div className="mx-auto mb-8 inline-block rounded-2xl bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium text-white/90 border border-white/10">
          New — Crypto Casino Launch
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-6">
          PHI <span className="text-purple-400">CASINO</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
          Play with confidence — fast, fair, and powered by cutting-edge AI. 
          Join a blended human & crypto experience built for legendary wins.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 px-8 py-4 text-lg font-semibold shadow-lg hover:scale-[1.03] transform transition active:scale-95"
          >
            Enter Casino
            <span className="inline-block w-3 h-3 rounded-full bg-white/20" />
          </a>
        </div>

        {/* Small Badges */}
        <div className="mt-12 flex justify-center gap-6 text-sm text-gray-400">
          <span>Fast deposits</span>
          <span className="text-white/20">•</span>
          <span>Provably fair</span>
          <span className="text-white/20">•</span>
          <span>24/7 Support</span>
        </div>

      </section>
    </main>
  );
}

