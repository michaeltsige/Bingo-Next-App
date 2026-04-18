import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function Toggle({ enabled, onChange, label, className }) {
  return (
    <div
      className={cn(
        "w-full bg-white/5 p-3 rounded-xl flex items-center justify-between border border-white/5 cursor-pointer",
        className,
      )}
      onClick={onChange}
    >
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-gray-500 uppercase">
          {label}
        </span>
        <span
          className={cn(
            "text-[10px] font-black",
            enabled ? "text-bingo-green" : "text-gray-400",
          )}
        >
          {enabled ? "ON" : "OFF"}
        </span>
      </div>
      <div
        className={cn(
          "w-10 h-5 rounded-full relative transition-colors p-1",
          enabled ? "bg-bingo-green" : "bg-gray-700",
        )}
      >
        <motion.div
          animate={{ x: enabled ? 20 : 0 }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </div>
    </div>
  );
}
