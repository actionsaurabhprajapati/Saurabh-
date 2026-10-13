import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Wedding photography',
  fallbackTitle = 'The Wedding Nazare Productions',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#171717] via-[#2A2620] to-[#171717] flex flex-col items-center justify-center text-center p-6 border border-[#B89152]/30 ${containerClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full border border-[#B89152]/40 flex items-center justify-center text-[#B89152] mb-3 bg-[#171717]/80">
          <Camera className="w-6 h-6 stroke-[1.5]" />
        </div>
        <p className="font-serif text-[#F8F4EE] text-sm tracking-wide max-w-[220px]">
          {fallbackTitle}
        </p>
        <span className="text-[11px] text-[#B89152] tracking-widest uppercase mt-1 font-sans">
          Agra Photography Archive
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1f1d19] ${containerClassName}`}>
      {/* Loading shimmer placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/60 animate-pulse pointer-events-none" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
    </div>
  );
};
