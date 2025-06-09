import React from "react";

interface BoardProps {
  board: (string | null)[][];
  onCellClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div
      className="grid gap-1 bg-[#2b2b2b] p-4 rounded-lg shadow-md"
      style={{
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
            className="w-12 h-12 border text-xl font-bold"
          >
            {cell}
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
