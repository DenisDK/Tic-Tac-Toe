import React from "react";
import SettingsPanel from "./SettingsPanel";

interface GameControlsProps {
  selectedSize: number;
  onSizeChange: (size: number) => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  selectedSize,
  onSizeChange,
}) => (
  <div className="flex flex-col items-center mt-4 bg-[#2b2b2b] rounded-lg shadow-md">
    <SettingsPanel size={selectedSize} onSizeChange={onSizeChange} />
  </div>
);

export default GameControls;
