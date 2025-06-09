import React from "react";

interface SettingsPanelProps {
  size: number;
  onSizeChange: (size: number) => void;
}

const SIZES = [3, 4, 5, 6, 7, 8, 9];

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  size,
  onSizeChange,
}) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <label htmlFor="board-size" className="font-semibold text-base">
        Розмір поля:
      </label>
      <select
        id="board-size"
        value={size}
        onChange={(e) => onSizeChange(Number(e.target.value))}
        className="p-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-blue-50 text-blue-900 font-medium"
      >
        {SIZES.map((n) => (
          <option key={n} value={n}>
            {n} x {n}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SettingsPanel;
