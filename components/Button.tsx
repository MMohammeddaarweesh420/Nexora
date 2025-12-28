
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-[#0B0F19] shadow-lg shadow-emerald-500/20",
    secondary: "bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-blue-500/20",
    outline: "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-[#0B0F19]",
    ghost: "text-gray-400 hover:text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
