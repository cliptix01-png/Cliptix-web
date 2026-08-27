import React from 'react';

interface CliptixLogoProps {
  className?: string;
  size?: number | string;
}

export const CliptixLogo: React.FC<CliptixLogoProps> = ({ className = 'w-8 h-8', size }) => {
  return (
    <svg
      viewBox="0 0 500 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <defs>
        {/* Vibrant Gradient matching user's logo image */}
        <linearGradient id="cliptix-outer-grad" x1="5%" y1="10%" x2="95%" y2="90%">
          <stop offset="0%" stopColor="#A018FF" />
          <stop offset="40%" stopColor="#6436FF" />
          <stop offset="70%" stopColor="#326DFF" />
          <stop offset="100%" stopColor="#20E6E6" />
        </linearGradient>

        <linearGradient id="cliptix-cyan-grad" x1="40%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1CB6FF" />
          <stop offset="50%" stopColor="#20E6E6" />
          <stop offset="100%" stopColor="#00F5D4" />
        </linearGradient>

        {/* Soft Ambient Glow */}
        <filter id="cliptix-brand-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter="url(#cliptix-brand-glow)">
        {/* Outer Circular Ring (C-shape) */}
        <path
          d="M 235 45 C 130 45 45 130 45 235 C 45 340 130 425 235 425 C 285 425 330 405 365 372 L 315 322 C 295 340 266 352 235 352 C 170 352 118 300 118 235 C 118 170 170 118 235 118 C 266 118 295 130 315 148 L 365 98 C 330 65 285 45 235 45 Z"
          fill="url(#cliptix-outer-grad)"
        />

        {/* Inner Chevron Interlock */}
        <path
          d="M 215 155 L 155 215 L 215 275 L 255 235 L 215 195 L 255 155 L 215 155 Z"
          fill="url(#cliptix-outer-grad)"
        />

        {/* Right Side Ticket Shape with Side Semi-Circle Notch */}
        <path
          d="M 255 45 L 390 45 L 390 145 C 375 145 362 157 362 172.5 C 362 188 375 200 390 200 L 390 300 L 255 300 L 300 255 L 330 255 L 330 90 L 300 90 L 255 45 Z"
          fill="url(#cliptix-cyan-grad)"
        />
        
        {/* Connecting angled accent bar */}
        <path
          d="M 235 118 L 320 45 L 375 45 L 270 135 Z"
          fill="url(#cliptix-cyan-grad)"
        />
      </g>
    </svg>
  );
};
