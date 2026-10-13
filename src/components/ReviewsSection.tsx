import React from 'react';
import { Star, ExternalLink, MapPin, Quote } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';

interface ReviewsSectionProps {
  config: BusinessConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#242424] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Public Google Snapshot & Direct Verified Action */}
          <div className="lg:col-span-5 bg-[#F8F4EE] p-8 sm:p-10 rounded-lg border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold mb-3">
              <span>Public Verification</span>
              <span aria-hidden="true">·</span>
              <span>Google Maps</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171717] mb-4">
              Local Client Feedback
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
              Our studio listing in Sikandra, Agra holds an observed public rating of <strong>{config.reviewSnapshot.rating} out of 5 stars</strong> across <strong>{config.reviewSnapshot.reviewCount} customer reviews</strong> on Google.
            </p>

            {/* Score box */}
            <div className="bg-white p-5 rounded border border-stone-200 mb-6 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-bold text-[#171717] tabular-nums">
                    {config.reviewSnapshot.rating}
                  </span>
                  <span className="text-sm text-stone-500 font-sans">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[#B89152]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B89152]" />
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="font-serif text-xl font-bold text-[#171717] tabular-nums">
                  {config.reviewSnapshot.reviewCount}
                </span>
                <p className="text-xs text-stone-500 font-sans">Google Reviews</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={config.links.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#171717] text-[#F8F4EE] hover:bg-[#333333] font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 border border-[#B89152]/30 focus-visible:outline-2 focus-visible:outline-[#B89152]"
              >
                <span>Read Verified Reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B89152]" />
              </a>

              <p className="text-[11px] text-stone-500 text-center font-sans">
                Snapshot observed from public Google listing data. Real reviews subject to live updates.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Appreciation / Philosophy on Client Stories */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold">
              <Quote className="w-3.5 h-3.5 text-[#B89152]" />
              <span>Client Relationships</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] text-balance">
              Kind Words from Our Clients
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              <p>
                Weddings are deeply personal family events. The greatest compliment our studio receives is when families say we felt less like photographers and more like calm, attentive storytellers walking alongside them.
              </p>
              <p>
                From capturing timely family formal group shots with grandparents to staying alert during midnight vidaai tears, we pride ourselves on punctuality, respectful conduct, and genuine care.
              </p>
            </div>

            {/* Note on Authenticity */}
            <div className="bg-[#F8F4EE] p-5 rounded border border-stone-200 text-xs text-stone-600 font-sans space-y-2">
              <div className="flex items-center gap-2 text-stone-800 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#B89152]" />
                <span>Verified Studio Presence in Agra</span>
              </div>
              <p>
                We do not publish unverified or fabricated testimonials. Every review referenced here originates directly from verified clients on our registered Google Maps business profile in Sikandra, Agra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
