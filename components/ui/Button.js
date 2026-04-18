import { cn } from "@/utils/cn";

export function Button({ children, variant = "primary", className, ...props }) {
  const variants = {
    primary: "bg-bingo-accent text-white shadow-lg shadow-bingo-accent/20",
    secondary: "bg-white/5 text-gray-300 border border-white/10",
    danger: "bg-bingo-red/20 text-bingo-red border border-bingo-red/20",
    success:
      "bg-gradient-to-r from-bingo-green to-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    outline: "bg-transparent border border-white/20 text-white",
  };

  return (
    <button
      className={cn(
        "py-3 rounded-xl font-bold text-xs active:scale-[0.98] transition-all flex items-center justify-center space-x-1",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
