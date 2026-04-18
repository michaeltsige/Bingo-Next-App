import { Star } from "lucide-react";
import { cn } from "@/utils/cn";
import { BINGO_LETTERS } from "@/lib/constants";

export function BingoCard({ card, onCellClick, disabled }) {
  return (
    <div className="bg-black/20 p-2 rounded-xl border border-white/5">
      <p className="text-center text-[8px] font-bold text-gray-500 uppercase mb-2 tracking-widest">
        Cartela #410
      </p>

      <div className="grid grid-cols-5 gap-1">
        {/* Header letters */}
        {BINGO_LETTERS.map((letter) => (
          <div
            key={letter}
            className="aspect-square bg-blue-600 rounded flex items-center justify-center text-[10px] font-black text-white"
          >
            {letter}
          </div>
        ))}

        {/* Card cells */}
        {card.map((row, r) =>
          row.map((cell, c) => (
            <button
              key={`${r}-${c}`}
              onClick={() => onCellClick(r, c)}
              disabled={disabled}
              className={cn(
                "aspect-square rounded flex items-center justify-center text-[10px] font-bold transition-all",
                cell.marked
                  ? "bg-bingo-gold text-black shadow-inner shadow-black/20"
                  : "bg-white/10 text-white border border-white/5",
                cell.number === "FREE" && "bg-bingo-accent text-white",
              )}
            >
              {cell.number === "FREE" ? (
                <Star size={10} fill="white" />
              ) : (
                cell.number
              )}
            </button>
          )),
        )}
      </div>
    </div>
  );
}
