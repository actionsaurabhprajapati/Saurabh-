import React from 'react';
import { Calendar, Image as ImageIcon, MapPin, Star } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { BusinessConfig } from '../config/businessConfig';

interface HeroSectionProps {
  config: BusinessConfig;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onOpenBooking,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 bg-[#171717] text-[#F8F4EE] overflow-hidden"
    >
      {/* Background Cinematic Backdrop with Scrim */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Indian wedding couple during royal golden hour rituals in Agra"
          fallbackTitle="The Wedding Nazare Productions"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center opacity-45 scale-105 motion-safe:transition-transform motion-safe:duration-[10000ms] motion-safe:scale-100"
        />
        {/* Editorial Double Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-[#171717]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#171717]/40 to-[#171717]/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-auto w-full">
        <div className="max-w-3xl">
          {/* Subtle Location Kicker - Clean unboxed text, zero pills */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89152] font-medium mb-4 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#B89152]" />
            <span>Sikandra, Agra</span>
            <span aria-hidden="true">·</span>
            <span>Cinematic Wedding Stories</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F8F4EE] leading-[1.12] mb-6 sm:mb-8 text-balance">
            Your Wedding. Your Story. <span className="italic font-normal text-[#E8D7B8]">Beautifully Remembered.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-sans font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance">
            Explore wedding photography crafted around real emotions, meaningful traditions and the moments that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-7 py-4 text-sm sm:text-base font-semibold text-[#171717] bg-[#B89152] hover:bg-[#8A6734] hover:text-[#F8F4EE] transition-all rounded shadow-md flex items-center justify-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89152]"
            >
              <Calendar className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
              <span>Check Your Wedding Date</span>
            </button>

            <a
              href="#portfolio"
              className="px-7 py-4 text-sm sm:text-base font-medium text-stone-200 border border-stone-600 hover:border-[#B89152] hover:text-white transition-all rounded flex items-center justify-center gap-2.5 bg-black/30 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89152]"
            >
              <ImageIcon className="w-4 h-4 shrink-0 text-[#B89152]" />
              <span>Explore Our Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust & Proof Metric Strip (Full-width row below hero content, tabular nums, unboxed) */}
      <div className="relative z-10 border-t border-white/10 bg-[#171717]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-stone-300">
            {/* Google Rating Snapshot */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#B89152]/30 flex items-center justify-center text-[#B89152] bg-[#1F1D19] shrink-0">
                <Star className="w-5 h-5 fill-[#B89152]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-lg font-bold text-white tabular-nums">4.5</span>
                  <span className="text-xs text-stone-400">/ 5</span>
                </div>
                <span className="text-xs text-stone-400">
                  172 Google Reviews
                </span>
              </div>
            </div>

            {/* Sikandra, Agra Heritage */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#B89152]/30 flex items-center justify-center text-[#B89152] bg-[#1F1D19] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-semibold text-white">Sikandra, Agra</span>
                <span className="text-xs text-stone-400">Shop No. 2, Radha Nagar</span>
              </div>
            </div>

            {/* Direct Studio Line */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#B89152]/30 flex items-center justify-center text-[#B89152] bg-[#1F1D19] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-semibold text-white">2026–2027 Season</span>
                <span className="text-xs text-stone-400">Dates Currently Open</span>
              </div>
            </div>

            {/* Candid & Cinematic */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#B89152]/30 flex items-center justify-center text-[#B89152] bg-[#1F1D19] shrink-0">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-semibold text-white">Documentary Art</span>
                <span className="text-xs text-stone-400">Unscripted & Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
