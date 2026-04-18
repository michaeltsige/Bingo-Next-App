import { BINGO_COLUMNS } from "./constants";

/**
 * Generate a new bingo card
 */
export function generateBingoCard() {
  const card = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  Object.entries(BINGO_COLUMNS).forEach(([, [min, max]], colIndex) => {
    const columnNumbers = [];
    while (columnNumbers.length < 5) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!columnNumbers.includes(num)) {
        columnNumbers.push(num);
      }
    }
    columnNumbers
      .sort((a, b) => a - b)
      .forEach((num, rowIndex) => {
        if (colIndex === 2 && rowIndex === 2) {
          card[rowIndex][colIndex] = { number: "FREE", marked: true };
        } else {
          card[rowIndex][colIndex] = { number: num, marked: false };
        }
      });
  });

  return card;
}

/**
 * Check if a bingo card has a winning pattern
 */
export function checkBingo(card) {
  // Check rows
  for (let i = 0; i < 5; i++) {
    if (card[i].every((cell) => cell.marked)) return true;
  }

  // Check columns
  for (let j = 0; j < 5; j++) {
    let colWin = true;
    for (let i = 0; i < 5; i++) {
      if (!card[i][j].marked) {
        colWin = false;
        break;
      }
    }
    if (colWin) return true;
  }

  // Check diagonals
  let diag1 = true;
  let diag2 = true;
  for (let i = 0; i < 5; i++) {
    if (!card[i][i].marked) diag1 = false;
    if (!card[i][4 - i].marked) diag2 = false;
  }

  return diag1 || diag2;
}

/**
 * Get the letter prefix for a bingo number
 */
export function getNumberPrefix(num) {
  if (num <= 15) return "B";
  if (num <= 30) return "I";
  if (num <= 45) return "N";
  if (num <= 60) return "G";
  return "O";
}

/**
 * Auto-mark called numbers on a card
 */
export function autoMarkCard(card, calledNumber) {
  const newCard = card.map((row) => row.map((cell) => ({ ...cell })));
  let marked = false;

  newCard.forEach((row) => {
    row.forEach((cell) => {
      if (cell.number === calledNumber) {
        cell.marked = true;
        marked = true;
      }
    });
  });

  return { newCard, marked };
}

/**
 * Generate a random uncalled number
 */
export function getNextNumber(calledNumbers) {
  const available = [];
  for (let i = 1; i <= 75; i++) {
    if (!calledNumbers.includes(i)) {
      available.push(i);
    }
  }

  if (available.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}
