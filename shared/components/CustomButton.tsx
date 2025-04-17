import React from 'react';

type CustomButtonProps = {
  icon?: React.ReactNode; // Icono opcional
  text: string; // Texto del botón
  onClick: () => void; // Función de clic
  className?: string; // Clases personalizadas
};

const CustomButton = ({ icon, text, onClick, className = '' }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex space-x-2  ${className}`}
    >
      {/* Mostrar el icono si se pasa */}
      {icon && <span className="mr-6">{icon}</span>}
      <span >{text}</span>
    </button>
  );
};

export default CustomButton;
