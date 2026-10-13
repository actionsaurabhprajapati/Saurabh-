import React from 'react';
import { Camera, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F4EE] text-[#242424] border-b border-[#B89152]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with SafeImage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle frame border */}
              <div className="absolute -inset-3 rounded-lg border border-[#B89152]/30 pointer-events-none -rotate-1 hidden sm:block" />
              
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[3/4] bg-stone-900">
                <SafeImage
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                  alt="Traditional Indian bridal elegance captured with authentic emotional depth"
                  fallbackTitle="Bridal Portraiture — Agra"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Discreet Studio Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#171717] text-[#F8F4EE] p-5 rounded shadow-xl border border-[#B89152]/30 max-w-[240px] hidden sm:block">
                <p className="font-serif text-sm font-semibold tracking-wide text-[#E8D7B8]">
                  Sikandra, Agra Studio
                </p>
                <p className="text-xs text-stone-300 font-sans mt-1 leading-snug">
                  Documenting authentic North Indian wedding rituals & celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B89152]" />
              <span>Studio Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Visual Storytelling</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] text-balance">
              More Than Photographs. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#8A6734]">Memories to Return To.</span>
            </h2>

            {/* Editorial Body Prose */}
            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              <p>
                An Indian wedding is not an ordinary gathering—it is a tapestry of sacred promises, sacred agni pheras, vibrant family laughter, quiet glances across ceremonial mandaps, and heartfelt departures.
              </p>
              <p>
                At <strong>THE WEDDING NAZARE PRODUCTIONS</strong>, our visual approach is rooted in genuine observation rather than stage-directed intrusion. We believe the most timeless photographs are born when you are fully present with the people you cherish most, completely unbothered by cameras.
              </p>
              <p className="text-sm text-stone-600 bg-white/70 p-4 rounded border border-stone-200">
                <span className="font-semibold text-stone-800">Our Artistic Commitment:</span> Whether capturing intimate pre-wedding moments around historic Agra architectures or grand multi-day celebrations with hundreds of guests, we preserve every nuance in true-to-life color and cinematic depth.
              </p>
            </div>

            {/* Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#171717] text-[#B89152] rounded shrink-0">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-stone-900 text-sm">
                    Unobtrusive Documentation
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                    Preserving spontaneous laughter, genuine tears, and pure emotion without interrupting the ritual flow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#171717] text-[#B89152] rounded shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-stone-900 text-sm">
                    Heirloom Color Grading
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                    Warm, organic skin tones and regal wedding hues calibrated to look breathtaking for generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#171717] text-[#B89152] rounded shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-stone-900 text-sm">
                    Multi-Camera Precision
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                    Synchronized coverage ensuring neither family perspective nor key ritual moment is missed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#171717] text-[#B89152] rounded shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-stone-900 text-sm">
                    Agra & Destination Focus
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                    Deep familiarity with regional light, heritage venues, and sacred wedding customs across Uttar Pradesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
