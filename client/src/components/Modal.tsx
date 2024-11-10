import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-1/3 p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold">&times;</button>
      </div>
    </div>
  );
};

export default Modal;
