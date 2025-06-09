interface SettingsPanelProps {
  size: number;
  onSizeChange: (size: number) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  size,
  onSizeChange,
}) => {
  return (
    <div className="mb-4">
      <label className="mr-2">Розмір поля:</label>
      <select
        value={size}
        onChange={(e) => onSizeChange(Number(e.target.value))}
        className="p-1 border rounded"
      >
        {[3, 4, 5, 6, 7, 8, 9].map((n) => (
          <option key={n} value={n}>
            {n} x {n}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SettingsPanel;
