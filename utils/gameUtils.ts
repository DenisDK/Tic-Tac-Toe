import { CellValue } from "@/types/CellValue";
import { SymbolType } from "@/types/Player";

export function checkWinner(board: CellValue[][], symbol: SymbolType): boolean {
  const size = board.length;
  for (let i = 0; i < size; i++) {
    if (board[i].every((cell) => cell === symbol)) return true;
  }
  for (let j = 0; j < size; j++) {
    if (board.every((row) => row[j] === symbol)) return true;
  }
  if (board.every((row, idx) => row[idx] === symbol)) return true;
  if (board.every((row, idx) => row[size - 1 - idx] === symbol)) return true;
  return false;
}

export function initBoard(size: number): CellValue[][] {
  return Array.from({ length: size }, () => Array(size).fill(null));
}

export function isDraw(board: CellValue[][]): boolean {
  return board.flat().every((cell) => cell !== null);
}
