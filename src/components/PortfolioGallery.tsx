import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, X, Camera, MapPin, Maximize2, Calendar } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { PORTFOLIO_STORIES, PORTFOLIO_CATEGORIES, PortfolioItem } from '../data/portfolioData';

interface PortfolioGalleryProps {
  onOpenBookingForStory?: (storyTitle: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenBookingForStory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredStories = selectedCategory === 'all'
    ? PORTFOLIO_STORIES
    : PORTFOLIO_STORIES.filter((s) => s.category === selectedCategory);

  const activeStory: PortfolioItem | null =
    activeStoryIndex !== null ? filteredStories[activeStoryIndex] : null;

  const handlePrev = useCallback(() => {
    if (activeStoryIndex === null) return;
    setActiveStoryIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredStories.length - 1
    );
  }, [activeStoryIndex, filteredStories.length]);

  const handleNext = useCallback(() => {
    if (activeStoryIndex === null) return;
    setActiveStoryIndex((prev) =>
      prev! < filteredStories.length - 1 ? prev! + 1 : 0
    );
  }, [activeStoryIndex, filteredStories.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (activeStoryIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveStoryIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStoryIndex, handlePrev, handleNext]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (activeStoryIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeStoryIndex]);

  // Touch swipe listeners
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#171717] text-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89152] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B89152]" />
            <span>Visual Archive</span>
            <span aria-hidden="true">·</span>
            <span>Selected Works</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F8F4EE] leading-[1.2] mb-4 text-balance">
            Stories We’ve Had the Honour to Capture
          </h2>

          <p className="text-stone-300 text-base sm:text-lg font-sans leading-relaxed text-balance">
            Each celebration is an unrepeatable story. Browse our curated photographic chapters celebrating heritage, tenderness, and spontaneous joy across Agra and beyond.
          </p>
        </div>

        {/* Filter Tabs (Interactive buttons, not pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar" role="tablist">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B89152] ${
                  isSelected
                    ? 'bg-[#B89152] text-[#171717] font-semibold shadow-sm'
                    : 'bg-[#242424] text-stone-300 hover:text-white hover:bg-[#333333]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className={`group relative rounded-lg overflow-hidden bg-stone-900 border border-white/10 hover:border-[#B89152]/60 transition-all duration-300 flex flex-col justify-end cursor-pointer ${
                story.aspectRatio
              }`}
              onClick={() => setActiveStoryIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveStoryIndex(index);
                }
              }}
              aria-label={`View ${story.title}`}
            >
              <SafeImage
                src={story.image}
                alt={story.altText}
                fallbackTitle={story.title}
                containerClassName="w-full h-full absolute inset-0"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Metadata & Title */}
              <div className="relative z-10 p-5 sm:p-6 text-left">
                <div className="flex items-center gap-2 text-[11px] text-[#B89152] tracking-wider uppercase font-sans mb-1.5">
                  <span>{story.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.location}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug group-hover:text-[#E8D7B8] transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 font-sans opacity-90">
                  {story.storySnippet}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Camera className="w-3.5 h-3.5 text-[#B89152]" />
                    <span>View Story</span>
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#B89152] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Professional Disclaimer regarding demo curation */}
        <div className="mt-12 p-4 rounded bg-[#242424]/70 border border-white/10 text-xs text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            <span className="text-[#B89152] font-semibold">Curated Portfolio Note:</span> Demonstrating creative vision, lighting standards, and editorial color science. Studio client wedding archives are updated each season.
          </p>
          <span className="text-[11px] text-stone-500 whitespace-nowrap">
            Agra, UP · Est. Sikandra
          </span>
        </div>
      </div>

      {/* Full-Featured Accessible Lightbox */}
      {activeStory && activeStoryIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activeStory.title}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Bar: Controls */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#B89152] font-mono tracking-widest uppercase">
                {activeStoryIndex + 1} / {filteredStories.length}
              </span>
              <span className="text-stone-400 hidden sm:inline">|</span>
              <span className="text-xs text-stone-300 hidden sm:inline">
                {activeStory.categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveStoryIndex(null)}
                className="p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-[#B89152]"
                aria-label="Close lightbox (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Middle: Media & Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-[#B89152]"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="max-h-[72vh] max-w-full flex items-center justify-center overflow-hidden rounded-md shadow-2xl">
              <SafeImage
                src={activeStory.image}
                alt={activeStory.altText}
                fallbackTitle={activeStory.title}
                containerClassName="max-h-[72vh] max-w-full"
                className="max-h-[72vh] w-auto object-contain mx-auto rounded"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-[#B89152]"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Captions & Story Action */}
          <div className="border-t border-white/10 pt-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#B89152] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeStory.location}</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-400">{activeStory.cameraNotes}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                {activeStory.title}
              </h3>
              <p className="text-xs text-stone-300 max-w-2xl mt-0.5">
                {activeStory.storySnippet}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {onOpenBookingForStory && (
                <button
                  type="button"
                  onClick={() => {
                    const title = activeStory.title;
                    setActiveStoryIndex(null);
                    onOpenBookingForStory(title);
                  }}
                  className="px-4 py-2 bg-[#B89152] hover:bg-[#8A6734] text-[#171717] font-semibold text-xs rounded transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire for Similar Style</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
