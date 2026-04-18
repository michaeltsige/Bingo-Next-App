import { cn } from "@/utils/cn";
import { BINGO_LETTERS } from "@/lib/constants";

export function MasterBoard({ calledNumbers }) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {BINGO_LETTERS.map((letter) => (
        <div
          key={letter}
          className="aspect-square flex items-center justify-center text-[10px] font-black text-gray-400"
        >
          {letter}
        </div>
      ))}

      {Array.from({ length: 15 }).map((_, rowIndex) =>
        [0, 1, 2, 3, 4].map((colIndex) => {
          const num = rowIndex + 1 + colIndex * 15;
          const isCalled = calledNumbers.includes(num);

          return (
            <div
              key={num}
              className={cn(
                "aspect-square rounded-[4px] flex items-center justify-center text-[9px] font-bold border transition-colors",
                isCalled
                  ? "bg-bingo-gold border-bingo-gold text-black shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                  : "bg-white/5 border-white/5 text-gray-600",
              )}
            >
              {num}
            </div>
          );
        }),
      )}
    </div>
  );
}
