"use client";

import { createContext, useContext, useState } from "react";

const ToastContext = createContext<{ showToast: (msg: string) => void } | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string } | null>(null);

  const showToast = (message: string) => {
    setToast({ message });
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-xl shadow-lg animate-fadeIn">
          {toast.message}
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadein 0.28s ease-out;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </ToastContext.Provider>
  );
}
