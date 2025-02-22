import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
