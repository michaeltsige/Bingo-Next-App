import { Play, Users, CreditCard, Info, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QUICK_MENU_ITEMS } from "@/lib/constants";
import { cn } from "@/utils/cn";

const MENU_ICONS = {
  Deposit: CreditCard,
  Instruction: Info,
  Transfer: Send,
  Withdraw: Download,
};

export function HomeScreen({ onPlay, onWatch, balance = 10 }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 space-y-8 -mt-20">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">Welcome to</p>
          <h2 className="text-4xl font-display font-bold text-bingo-gold tracking-wider">
            BESH BINGO
          </h2>
        </div>

        <div className="w-full bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl flex flex-col items-center space-y-6">
          <p className="text-gray-300 text-xs font-semibold uppercase tracking-[0.2em]">
            Choose Your Stake
          </p>

          <div className="flex flex-col w-full space-y-3">
            <button
              onClick={onPlay}
              className="w-full bg-gradient-to-r from-bingo-green to-emerald-400 py-4 rounded-2xl flex items-center justify-center space-x-3 text-white font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98] transition-all"
            >
              <Play size={24} fill="white" />
              <span>PLAY 10</span>
            </button>

            <button
              onClick={onWatch}
              className="w-full bg-white/5 py-4 rounded-2xl flex items-center justify-center space-x-3 text-white font-bold text-xl border border-white/10 active:scale-[0.98] transition-all"
            >
              <Users size={24} />
              <span>WATCH ONLY</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">
              Wallet Balance
            </p>
            <p className="text-white font-mono text-2xl font-bold">{balance}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {QUICK_MENU_ITEMS.map((item, idx) => {
          const Icon = MENU_ICONS[item.label];
          return (
            <button
              key={idx}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 space-y-2",
                item.color,
              )}
            >
              <Icon size={18} />
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
