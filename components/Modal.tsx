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
      className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a] bg-opacity-90 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#eeeeee] p-5 rounded shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl text-[#2e2e2e] font-bold mb-4">{message}</div>
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
