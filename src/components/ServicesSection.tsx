import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Calendar, ArrowRight, Eye } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { BusinessConfig } from '../config/businessConfig';

interface ServicesSectionProps {
  config: BusinessConfig;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  config,
  onSelectService,
}) => {
  const [activeModalService, setActiveModalService] = useState<
    BusinessConfig['services'][0] | null
  >(null);

  // Display only confirmed services
  const confirmedServices = config.services.filter((s) => s.isConfirmed);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B89152]" />
            <span>Curated Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Agra Nuptials</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] mb-4 text-balance">
            Photography for Every Part of Your Celebration
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed text-balance">
            Crafted coverage for single-day nuptials, grand multi-day Indian ceremonies, and cinematic pre-wedding memories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {confirmedServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#F8F4EE] rounded-lg border border-stone-200/80 overflow-hidden flex flex-col hover:border-[#B89152]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  fallbackTitle={service.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Index marker */}
                <div className="absolute top-4 left-4 text-xs font-serif text-[#F8F4EE] tracking-widest bg-[#171717]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#B89152]/30">
                  0{index + 1}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#171717] mb-2 group-hover:text-[#8A6734] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8A6734] font-medium tracking-wide mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-8">
                    {service.inclusions.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B89152] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-300/60 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#B89152]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B89152]" />
                    <span>View Inclusions</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 text-xs font-semibold text-[#171717] bg-[#B89152] hover:bg-[#8A6734] hover:text-[#F8F4EE] rounded transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#B89152]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire for This</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div className="bg-[#FFFFFF] text-[#242424] max-w-lg w-full rounded-lg shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] bg-stone-900">
              <SafeImage
                src={activeModalService.image}
                alt={activeModalService.title}
                fallbackTitle={activeModalService.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 id="modal-service-title" className="font-serif text-2xl font-semibold text-[#171717] mb-1">
                {activeModalService.title}
              </h3>
              <p className="text-xs text-[#8A6734] font-medium tracking-wide mb-4">
                {activeModalService.subtitle}
              </p>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                {activeModalService.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
                  Scope of Service & Craft:
                </h4>
                <ul className="space-y-2">
                  {activeModalService.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B89152] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectService(title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-[#B89152] hover:bg-[#8A6734] hover:text-[#F8F4EE] rounded transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check Availability</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
