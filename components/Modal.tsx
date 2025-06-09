import React from "react";

interface ModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, message, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl font-bold mb-4">{message}</div>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
