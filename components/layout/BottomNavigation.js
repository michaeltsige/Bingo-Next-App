import { Gamepad2, Trophy, History, Wallet, User } from "lucide-react";
import { cn } from "@/utils/cn";
import { TABS } from "@/lib/constants";

const ICONS = {
  game: Gamepad2,
  scores: Trophy,
  history: History,
  wallet: Wallet,
  profile: User,
};

export function BottomNavigation({ activeTab, onTabChange }) {
  return (
    <div className="absolute bottom-0 w-full bg-bingo-purple/90 backdrop-blur-2xl border-t border-white/10 px-4 py-2 flex justify-between items-center z-40">
      {TABS.map((tab) => {
        const Icon = ICONS[tab.id];
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 w-14 transition-all",
              isActive ? "text-bingo-green scale-110" : "text-gray-500",
            )}
          >
            <div
              className={cn(
                "transition-all",
                isActive && "drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]",
              )}
            >
              <Icon size={24} />
            </div>
            <span className="text-[7px] font-black uppercase tracking-widest">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
