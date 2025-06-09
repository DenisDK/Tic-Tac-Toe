import React from "react";

interface NewGameButtonProps {
  onClick: () => void;
}

const NewGameButton: React.FC<NewGameButtonProps> = ({ onClick }) => (
  <button
    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 duration-300"
    onClick={onClick}
  >
    Нова гра
  </button>
);

export default NewGameButton;
