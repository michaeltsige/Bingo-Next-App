import { Volume2, VolumeX } from "lucide-react";
import { GameHeader } from "@/components/game/GameHeader";
import { MasterBoard } from "@/components/game/MasterBoard";
import { BingoCard } from "@/components/game/BingoCard";
import { CalledNumbers } from "@/components/game/CalledNumbers";
import { GameControls } from "@/components/game/GameControls";
import { Toggle } from "@/components/ui/Toggle";

export function GameScreen({
  gameStats,
  card,
  calledNumbers,
  automatic,
  isWatching,
  soundEnabled,
  onToggleSound,
  onToggleAutomatic,
  onCellClick,
  onLeave,
  onRefresh,
  onCallNext,
}) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <GameHeader stats={gameStats} />

      <div className="flex-1 flex overflow-hidden">
        {/* Master Board */}
        <div className="w-[140px] bg-black/40 border-r border-white/5 p-2 overflow-y-auto custom-scrollbar">
          <MasterBoard calledNumbers={calledNumbers} />
        </div>

        {/* Main Game Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 flex flex-col items-center space-y-4">
            {/* Called Numbers Section */}
            <div className="flex items-center justify-between w-full">
              <CalledNumbers
                numbers={calledNumbers}
                latest={calledNumbers[0]}
              />
              <button
                onClick={onToggleSound}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
              >
                {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              </button>
            </div>

            {/* Automatic Toggle */}
            {!isWatching && (
              <Toggle
                enabled={automatic}
                onChange={onToggleAutomatic}
                label="Automatic"
              />
            )}

            {/* Bingo Card */}
            <div className="w-full flex-1 overflow-y-auto px-1 py-1">
              {isWatching ? (
                <div className="bg-bingo-accent/10 border border-bingo-accent/20 rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center space-x-2 text-bingo-accent font-black tracking-widest text-sm italic">
                    <div className="w-2 h-2 rounded-full bg-bingo-accent animate-ping" />
                    <span>WATCHING ONLY</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-bold">
                    የዚህ ዙር ጨዋታ ተጀምሯል:: አዲስ ዙር እስኪጀምር እዚህ ይጠብቁ::
                  </p>
                </div>
              ) : (
                <BingoCard
                  card={card}
                  onCellClick={onCellClick}
                  disabled={!isWatching}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <GameControls
        isWatching={isWatching}
        onLeave={onLeave}
        onRefresh={onRefresh}
        onCallNext={onCallNext}
      />
    </div>
  );
}
