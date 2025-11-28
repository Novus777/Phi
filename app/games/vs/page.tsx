import Link from "next/link";

export default function GamePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#050816] to-black text-white px-6">
      <h1 className="text-4xl font-bold mb-4">VS</h1>
      <p className="text-gray-400 text-lg">This game is coming soon.</p>
      <Link href="/games" className="inline-block rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black">Back to Lobby</Link>
    </div>
  );
}
