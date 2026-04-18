import { Gamepad2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { MOCK_RECENT_GAMES } from "@/lib/mockData";

export function HistoryScreen() {
  const totalPlayed = MOCK_RECENT_GAMES.length;
  const totalWins = MOCK_RECENT_GAMES.filter((g) => g.status === "Win").length;

  return (
    <>
      <h2 className="text-xl font-display font-bold mb-6">Game History</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">
            Total Played
          </p>
          <p className="text-2xl font-mono font-bold">{totalPlayed}</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">
            Total Wins
          </p>
          <p className="text-2xl font-mono font-bold text-bingo-green">
            {totalWins}
          </p>
        </div>
      </div>

      <p className="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">
        Recent Activity
      </p>

      {/* Game List */}
      <div className="space-y-3">
        {MOCK_RECENT_GAMES.map((game, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-2xl p-4 border border-white/5"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-bingo-accent/20 flex items-center justify-center text-bingo-accent">
                  <Gamepad2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Game {game.id}</p>
                  <p className="text-[10px] text-gray-500">{game.date}</p>
                </div>
              </div>
              <span
                className={cn(
                  "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter",
                  game.status === "Win"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400",
                )}
              >
                {game.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Stake", value: game.stake },
                { label: "Cards", value: game.cards },
                { label: "Prize", value: game.prize },
                { label: "Winners", value: game.winners },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[8px] font-bold text-gray-500 uppercase">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-bold text-gray-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
