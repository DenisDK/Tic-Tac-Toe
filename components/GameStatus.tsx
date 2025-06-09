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
  <>
    <div className="text-lg font-semibold">
      Загальна кількість зіграних ігор: {gamesPlayed}
    </div>
    <div className="text-lg font-semibold">
      Ходить: {players.find((p) => p.symbol === currentPlayer)?.name}
    </div>
  </>
);

export default GameStatus;
