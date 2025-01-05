import React from 'react';
const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`bg-gray-800 text-white rounded-md border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent ${className}`}
      {...props}
    />
  );
};
export default Input;