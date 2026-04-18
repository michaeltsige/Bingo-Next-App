import { User, History } from "lucide-react";
import { MOCK_USER } from "@/lib/mockData";

export function WalletScreen() {
  return (
    <>
      <h2 className="text-xl font-display font-bold mb-6">My Wallet</h2>

      <div className="bg-white/5 rounded-3xl border border-white/10 p-4 mb-6 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <User size={16} className="text-gray-400" />
            <span className="text-xs font-semibold text-gray-400">
              {MOCK_USER.phone}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-bingo-green/20 text-bingo-green text-xs font-bold uppercase">
            Verified
          </span>
        </div>

        <div className="flex pb-6">
          <button className="flex-1 py-2 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/5">
            Balance
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                Main Wallet
              </p>
              <p className="text-3xl font-mono font-bold">
                {MOCK_USER.mainWallet}{" "}
                <span className="text-xs text-gray-500">ETB</span>
              </p>
            </div>
          </div>

          <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                Play Wallet
              </p>
              <p className="text-3xl font-mono font-bold text-bingo-green">
                {MOCK_USER.playWallet}.0{" "}
                <span className="text-xs text-gray-500">ETB</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-4 opacity-30 mt-8">
        <History size={64} className="text-gray-600" />
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          No Activity Found
        </p>
      </div>
    </>
  );
}
