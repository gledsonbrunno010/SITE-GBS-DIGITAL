import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  showIcon = true
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg px-8 py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gbs-black focus:ring-gbs-green";
  
  const variants = {
    primary: "bg-gbs-green text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-gbs-green text-gbs-green hover:bg-gbs-green hover:text-black"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className} group`}
    >
      {showIcon && <MessageCircle className="w-5 h-5 mr-2" />}
      {text}
      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
    </a>
  );
};