import React from 'react';
import styled from 'styled-components';

interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info', onClose }) => {
  const alertType = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <PopupContainer>
      <div className={`${alertType[type]} p-4 rounded-lg flex justify-between items-center`}>
        <span>{message}</span>
        <button onClick={onClose} className="font-bold text-lg">&times;</button>
      </div>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 1000;
  max-width: 400px;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export default Alert;
