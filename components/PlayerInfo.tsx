import React from "react";
import { Player } from "@/types/Player";

interface PlayerInfoProps {
  player: Player;
  time?: number;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ player, time }) => {
  return (
    <div className="p-4 bg-[#2b2b2b] rounded-lg shadow-2xs w-64">
      <h2 className="text-lg font-bold mb-2">ГРАВЕЦЬ {player.id}</h2>
      <p>
        Символ: <strong>{player.symbol}</strong>
      </p>
      <p>
        Кількість виграшів: <strong>{player.wins}</strong>
      </p>
      <p>
        Час: <strong>{time ?? 0} сек.</strong>
      </p>
    </div>
  );
};

export default PlayerInfo;
