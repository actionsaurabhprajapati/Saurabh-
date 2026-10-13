import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'monogram';
  theme?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-[#F8F4EE]' : 'text-[#171717]';
  const subColor = isDark ? 'text-[#B89152]' : 'text-[#8A6734]';
  const frameStroke = '#B89152';

  if (variant === 'monogram') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          aria-label="The Wedding Nazare Monogram"
        >
          {/* Subtle camera view-finder corners */}
          <path d="M6 12V6H12" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M38 12V6H32" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 32V38H12" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M38 32V38H32" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
          {/* Elegant geometric N monogram */}
          <path
            d="M15 31V13L29 31V13"
            stroke={frameStroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 shrink-0"
          aria-hidden="true"
        >
          <rect width="36" height="36" rx="6" fill={isDark ? '#1F1D19' : '#F0EAE1'} />
          <circle cx="18" cy="18" r="11" stroke={frameStroke} strokeWidth="1.5" />
          <circle cx="18" cy="18" r="5" stroke={frameStroke} strokeWidth="1.2" />
          <path d="M12 12L14 12" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col">
          <span className={`font-serif tracking-tight font-semibold text-base leading-none ${textColor}`}>
            NAZARE
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#B89152] font-sans font-medium mt-0.5">
            Agra
          </span>
        </div>
      </div>
    );
  }

  // Horizontal logo for desktop
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 shrink-0"
        aria-hidden="true"
      >
        {/* Subtle camera view-finder motif */}
        <circle cx="19" cy="19" r="14" stroke={frameStroke} strokeWidth="1.5" />
        <circle cx="19" cy="19" r="6" stroke={frameStroke} strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M10 10V14" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 10H14" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 28V24" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 28H24" stroke={frameStroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col text-left">
        <span className={`font-serif font-bold text-base tracking-wider uppercase leading-tight ${textColor}`}>
          The Wedding Nazare
        </span>
        <span className={`text-[9px] tracking-[0.25em] uppercase font-sans font-medium ${subColor}`}>
          Productions · Agra
        </span>
      </div>
    </div>
  );
};
