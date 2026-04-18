"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { LoadingModal } from "@/components/modals/LoadingModal";
import { WinModal } from "@/components/modals/WinModal";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { GameScreen } from "@/components/screens/GameScreen";
import { ScoresScreen } from "@/components/screens/ScoresScreen";
import { HistoryScreen } from "@/components/screens/HistoryScreen";
import { WalletScreen } from "@/components/screens/WalletScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { useBingoGame } from "@/hooks/useBingoGame";
import { useSound } from "@/hooks/useSound";

export default function Home() {
  const [activeTab, setActiveTab] = useState("game");
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const bingo = useBingoGame();
  const sound = useSound();

  const handleStartGame = () => {
    setLoading(true);
    setTimeout(() => {
      bingo.startGame();
      setIsPlaying(true);
      setLoading(false);
    }, 1000);
  };

  const handleWatchGame = () => {
    setLoading(true);
    setTimeout(() => {
      bingo.watchGame();
      setIsPlaying(true);
      setLoading(false);
    }, 500);
  };

  const handleLeaveGame = () => {
    setIsPlaying(false);
    bingo.setGameStarted(false);
    bingo.setIsWatching(false);
  };

  const handleRefresh = () => {
    bingo.resetGame();
  };

  const handleWinModalClose = () => {
    bingo.setShowWinModal(false);
    setIsPlaying(false);
    bingo.resetGame();
  };

  const handleLogout = () => {
    setIsPlaying(false);
    setActiveTab("game");
    bingo.resetGame();
  };

  return (
    <div className="flex flex-col h-screen w-full bg-bingo-deep-purple font-sans select-none max-w-[430px] mx-auto overflow-hidden relative border-x border-white/5">
      {/* Header (only shown when not playing) */}
      {!isPlaying && (
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-display font-bold text-white">
              DIL BINGO
            </h1>
            <button className="bg-white/10 px-4 py-1 rounded-full text-xs font-medium border border-white/10 backdrop-blur-md">
              Rules
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <ScreenWrapper screenKey={activeTab}>
            {activeTab === "game" && (
              <HomeScreen onPlay={handleStartGame} onWatch={handleWatchGame} />
            )}
            {activeTab === "scores" && <ScoresScreen />}
            {activeTab === "history" && <HistoryScreen />}
            {activeTab === "wallet" && <WalletScreen />}
            {activeTab === "profile" && (
              <ProfileScreen
                soundEnabled={sound.enabled}
                onToggleSound={sound.toggle}
                onLogout={handleLogout}
              />
            )}
          </ScreenWrapper>
        ) : (
          <GameScreen
            gameStats={bingo.gameStats}
            card={bingo.card}
            calledNumbers={bingo.calledNumbers}
            automatic={bingo.automatic}
            isWatching={bingo.isWatching}
            soundEnabled={sound.enabled}
            onToggleSound={sound.toggle}
            onToggleAutomatic={bingo.toggleAutomatic}
            onCellClick={bingo.handleCellClick}
            onLeave={handleLeaveGame}
            onRefresh={handleRefresh}
            onCallNext={bingo.callNextNumber}
          />
        )}
      </AnimatePresence>

      {/* Bottom Navigation (only when not playing) */}
      {!isPlaying && (
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* Modals */}
      <LoadingModal isOpen={loading} />
      <WinModal
        isOpen={bingo.showWinModal}
        onClose={handleWinModalClose}
        card={bingo.card}
      />
    </div>
  );
}
