import { useState, useCallback } from "react";
import {
  generateBingoCard,
  checkBingo,
  autoMarkCard,
  getNextNumber,
} from "@/lib/gameLogic";
import { MOCK_GAME_STATS } from "@/lib/mockData";

export function useBingoGame() {
  const [card, setCard] = useState(() => generateBingoCard());
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [gameStats, setGameStats] = useState({
    ...MOCK_GAME_STATS,
    calledCount: 0,
  });
  const [automatic, setAutomatic] = useState(true);
  const [showWinModal, setShowWinModal] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const resetGame = useCallback(() => {
    setCard(generateBingoCard());
    setCalledNumbers([]);
    setGameStats((prev) => ({ ...prev, calledCount: 0 }));
    setShowWinModal(false);
  }, []);

  const startGame = useCallback(() => {
    setGameStarted(true);
    setIsWatching(false);
    resetGame();
  }, [resetGame]);

  const watchGame = useCallback(() => {
    setGameStarted(false);
    setIsWatching(true);
    setCalledNumbers([]);
    setGameStats((prev) => ({ ...prev, calledCount: 0 }));
  }, []);

  const handleCellClick = useCallback(
    (row, col) => {
      if (!gameStarted || isWatching) return;

      const cell = card[row][col];
      if (cell.number === "FREE") return;

      const newCard = card.map((r, i) =>
        r.map((c, j) =>
          i === row && j === col ? { ...c, marked: !c.marked } : c,
        ),
      );

      setCard(newCard);

      if (checkBingo(newCard)) {
        setShowWinModal(true);
      }
    },
    [card, gameStarted, isWatching],
  );

  const callNextNumber = useCallback(() => {
    const nextNum = getNextNumber(calledNumbers);
    if (!nextNum) return;

    const newCalled = [nextNum, ...calledNumbers];
    setCalledNumbers(newCalled);
    setGameStats((prev) => ({ ...prev, calledCount: prev.calledCount + 1 }));

    if (automatic && gameStarted && !isWatching) {
      const { newCard, marked } = autoMarkCard(card, nextNum);
      if (marked) {
        setCard(newCard);
        if (checkBingo(newCard)) {
          setShowWinModal(true);
        }
      }
    }
  }, [calledNumbers, automatic, card, gameStarted, isWatching]);

  const toggleAutomatic = useCallback(() => {
    setAutomatic((prev) => !prev);
  }, []);

  return {
    // State
    card,
    calledNumbers,
    gameStats,
    automatic,
    showWinModal,
    isWatching,
    gameStarted,

    // Actions
    startGame,
    watchGame,
    resetGame,
    handleCellClick,
    callNextNumber,
    toggleAutomatic,
    setShowWinModal,
    setGameStarted: (value) => setGameStarted(value),
    setIsWatching: (value) => setIsWatching(value),
  };
}
