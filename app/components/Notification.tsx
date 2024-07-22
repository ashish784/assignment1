import React from 'react';

interface NotificationProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, show, onClose }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      } bg-green-500 text-white py-2 px-4 rounded shadow-lg`}
    >
      {message}
      <button className="ml-4" onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
