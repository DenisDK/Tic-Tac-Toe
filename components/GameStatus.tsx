import React from "react";
import { Player, SymbolType } from "../types/Player";

interface GameStatusProps {
  players: Player[];
  gamesPlayed: number;
  currentPlayer: SymbolType;
}

const GameStatus: React.FC<GameStatusProps> = ({
  players,
  gamesPlayed,
  currentPlayer,
}) => (
  <div className="flex items-center gap-3 mt-4">
    <div className="text-lg font-semibold bg-[#2b2b2b] p-3 rounded-lg shadow-md">
      Загальна кількість зіграних ігор: {gamesPlayed}
    </div>
    <div className="text-lg font-semibold bg-[#2b2b2b] p-3 rounded-lg shadow-md">
      Ходить: {players.find((p) => p.symbol === currentPlayer)?.name}
    </div>
  </div>
);

export default GameStatus;
