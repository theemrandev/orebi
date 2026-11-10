import React from 'react';
import { useShop } from '../../context/useShop';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const Toast = () => {
  const { toast } = useShop();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#262626] text-white py-3 px-5 rounded-lg shadow-2xl font-dm text-sm animate-bounce-in">
      {toast.type === 'info' ? (
        <FaInfoCircle className="text-sky-400 text-base shrink-0" />
      ) : (
        <FaCheckCircle className="text-emerald-400 text-base shrink-0" />
      )}
      <span>{toast.message}</span>
    </div>
  );
};

export default Toast;
