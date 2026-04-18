import { motion } from "framer-motion";
import { getNumberPrefix } from "@/lib/gameLogic";

export function CalledNumbers({ numbers, latest }) {
  const recentNumbers = numbers.slice(1, 4);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex space-x-1">
        {recentNumbers.map((n, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-bingo-purple/80 border border-white/10 flex items-center justify-center text-[8px] font-bold text-gray-300"
          >
            {getNumberPrefix(n)}-{n}
          </div>
        ))}
      </div>

      {latest !== undefined && (
        <motion.div
          key={latest}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-bingo-gold to-yellow-600 flex items-center justify-center border-4 border-white/20 shadow-xl"
        >
          <div className="text-center">
            <p className="text-black/60 text-xs font-bold leading-none">
              {getNumberPrefix(latest)}
            </p>
            <p className="text-black text-3xl font-extrabold">{latest}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
