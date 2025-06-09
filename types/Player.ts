export type SymbolType = "X" | "O";

export interface Player {
  id: number;
  name: string;
  symbol: SymbolType;
  wins: number;
}
