"use client";

export default function ProfileMenu({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-black/70 border border-white/10 rounded-xl backdrop-blur-xl py-2 text-sm text-white shadow-lg">
      <div className="px-4 py-2 hover:bg-white/10 cursor-pointer">Profile</div>
      <div className="px-4 py-2 hover:bg-white/10 cursor-pointer">Settings</div>
      <div onClick={onLogout} className="px-4 py-2 hover:bg-red-500/20 text-red-400 cursor-pointer">
        Logout
      </div>
    </div>
  );
}
