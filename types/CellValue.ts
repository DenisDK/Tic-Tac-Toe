export type CellValue = "X" | "O" | null;

export interface GameState {
  board: CellValue[][];
  size: number;
  currentPlayer: "X" | "O";
}
