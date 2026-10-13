import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';

interface CTASectionProps {
  config: BusinessConfig;
}

export const CTASection: React.FC<CTASectionProps> = ({ config }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#171717] text-[#F8F4EE] border-t border-[#B89152]/20 relative overflow-hidden">
      {/* Decorative subtle ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89152]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89152] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#B89152]" />
          <span>Begin the Conversation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F4EE] leading-[1.15] mb-6 text-balance">
          Let’s Make Room for the <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E8D7B8]">Moments That Matter</span>
        </h2>

        <p className="text-stone-300 text-base sm:text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Share your wedding date, venue and photography requirements to start a conversation about your celebration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
              config.whatsappTemplate()
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded shadow-lg transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${config.contact.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#F8F4EE] font-semibold text-sm rounded border border-[#B89152] transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#B89152]"
          >
            <Phone className="w-4 h-4 text-[#B89152]" />
            <span>Call the Studio</span>
          </a>
        </div>
      </div>
    </section>
  );
};
