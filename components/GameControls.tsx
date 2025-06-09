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
  <div className="flex flex-col items-center gap-2">
    <SettingsPanel size={selectedSize} onSizeChange={onSizeChange} />
  </div>
);

export default GameControls;
