
import React from 'react';
import { useApp } from '../contexts/AppContext';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", size = 40 }) => {
  const { theme } = useApp();
  const nodeColor = theme === 'dark' ? '#E2E8F0' : '#1E2246';

  return (
    <svg 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: size, height: 'auto' }}
    >
      <defs>
        <linearGradient id="swooshGradient" x1="50" y1="10" x2="100" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E2246" />
          <stop offset="0.5" stopColor="#00A896" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g stroke={nodeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <path d="M10 25 L25 15 L45 15" />
        <path d="M10 25 L10 45 L25 55 L45 55" />
        <path d="M10 45 L25 35 L45 45" />
        <path d="M25 15 L25 35 L25 55" />
        <path d="M25 35 L45 15" />
        <path d="M45 15 L45 55" />
      </g>

      <g fill={nodeColor}>
        <circle cx="10" cy="25" r="3" />
        <circle cx="25" cy="15" r="3" />
        <circle cx="25" cy="35" r="3" />
        <circle cx="10" cy="45" r="3" />
        <circle cx="25" cy="55" r="3" />
        <circle cx="45" cy="15" r="3.5" />
        <circle cx="45" cy="45" r="3.5" />
        <circle cx="45" cy="65" r="3.5" />
      </g>

      <path 
        d="M45 15C55 10 65 15 75 25C85 35 95 30 95 45C95 60 85 75 70 75C55 75 45 65 45 45C45 35 55 30 45 15Z" 
        fill="url(#swooshGradient)"
        style={{ filter: 'url(#glow)' }}
      />
      
      <path 
        d="M50 25C55 20 65 25 70 35C75 45 80 40 80 50C80 60 70 65 60 65C50 65 50 55 50 45" 
        stroke="#10B981" 
        strokeWidth="1" 
        strokeOpacity="0.3" 
        fill="none" 
      />
    </svg>
  );
};

export default Logo;
