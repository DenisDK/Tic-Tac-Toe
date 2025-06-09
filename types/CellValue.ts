type CellValue = "X" | "O" | null;

interface GameState {
  board: CellValue[][];
  size: number;
  currentPlayer: "X" | "O";
}
