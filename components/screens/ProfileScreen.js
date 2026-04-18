import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Wallet,
  ArrowLeft,
  Volume2,
  Smartphone,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { MOCK_USER } from "@/lib/mockData";

export function ProfileScreen({ soundEnabled, onToggleSound, onLogout }) {
  const stats = [
    {
      label: "Games Won",
      value: MOCK_USER.gamesWon,
      color: "text-bingo-gold",
      icon: Trophy,
    },
    {
      label: "Total Invite",
      value: MOCK_USER.totalInvite,
      color: "text-orange-400",
      icon: Users,
    },
    {
      label: "Total Earned",
      value: MOCK_USER.totalEarned,
      color: "text-bingo-green",
      icon: Wallet,
    },
    {
      label: "Main Balance",
      value: MOCK_USER.mainWallet,
      color: "text-blue-400",
      icon: ArrowLeft,
    },
  ];

  return (
    <>
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bingo-accent to-indigo-600 flex items-center justify-center mb-4 border-4 border-white/10 shadow-xl">
          <span className="text-3xl font-black text-white">
            {MOCK_USER.name.charAt(1)}
          </span>
        </div>
        <h2 className="text-2xl font-display font-bold">{MOCK_USER.name}</h2>
        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">
          Verified Player
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center",
                  item.color,
                )}
              >
                <Icon size={16} className={idx === 3 ? "rotate-180" : ""} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase">
                  {item.label}
                </span>
                <span className={cn("text-lg font-mono font-bold", item.color)}>
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Settings */}
      <p className="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">
        Settings
      </p>
      <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
        {/* Sound Toggle */}
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-bingo-green/10 flex items-center justify-center text-bingo-green">
              <Volume2 size={18} />
            </div>
            <span className="text-sm font-semibold">Sound Effects</span>
          </div>
          <button
            onClick={onToggleSound}
            className={cn(
              "w-12 h-6 rounded-full relative transition-colors p-1",
              soundEnabled ? "bg-bingo-green" : "bg-gray-700",
            )}
          >
            <motion.div
              animate={{ x: soundEnabled ? 24 : 0 }}
              className="w-4 h-4 bg-white rounded-full"
            />
          </button>
        </div>

        {/* Join Group */}
        <button className="w-full p-4 flex items-center justify-between group active:bg-white/5 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Smartphone size={18} />
            </div>
            <span className="text-sm font-semibold">Join Local Group</span>
          </div>
          <ChevronRight
            size={18}
            className="text-gray-600 group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full p-4 flex items-center justify-between group text-bingo-red active:bg-red-500/5 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <LogOut size={18} />
            </div>
            <span className="text-sm font-semibold">Logout Player</span>
          </div>
        </button>
      </div>
    </>
  );
}
