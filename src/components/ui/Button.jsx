import React from 'react';
const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";
  
  const variants = {
    default: "bg-[#8b5cf6] text-white hover:bg-[#7c3aed] px-4 py-2",
    outline: "border border-gray-700 text-white hover:bg-gray-800 px-4 py-2",
    ghost: "text-white hover:bg-gray-800 px-4 py-2"
  };
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;