import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function GameControls({ isWatching, onLeave, onRefresh, onCallNext }) {
  return (
    <div className="p-4 grid grid-cols-3 gap-2 border-t border-white/10 bg-bingo-purple/50 backdrop-blur-xl">
      <Button variant="danger" onClick={onLeave}>
        LEAVE
      </Button>

      <Button variant="secondary" onClick={onRefresh}>
        <RefreshCw size={14} />
        <span>REFRESH</span>
      </Button>

      {isWatching ? (
        <Button variant="primary">WATCHING</Button>
      ) : (
        <Button variant="primary" onClick={onCallNext}>
          NEXT NO.
        </Button>
      )}
    </div>
  );
}
