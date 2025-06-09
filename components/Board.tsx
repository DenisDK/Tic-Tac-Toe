import React from "react";

interface BoardProps {
  board: (string | null)[][];
  onCellClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div
      className="grid gap-1"
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
