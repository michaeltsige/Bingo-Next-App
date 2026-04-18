export function GameHeader({ stats }) {
  const statItems = [
    { label: "Game ID", value: stats.gameId },
    { label: "Players", value: stats.players },
    { label: "Bet", value: stats.bet },
    { label: "Derash", value: stats.derash },
    { label: "Called", value: stats.calledCount },
  ];

  return (
    <div className="grid grid-cols-5 bg-bingo-purple/80 backdrop-blur-md border-b border-white/10 py-2 px-1 gap-1">
      {statItems.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-black/20 rounded py-1"
        >
          <span className="text-[8px] text-gray-400 uppercase font-bold">
            {stat.label}
          </span>
          <span className="text-[10px] font-mono font-bold truncate max-w-full px-1">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}
