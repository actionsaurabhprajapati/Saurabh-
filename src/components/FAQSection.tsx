import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/faqData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#242424] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B89152]" />
            <span>Common Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Clarity First</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] mb-4 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans leading-relaxed text-balance">
            Answers to common questions regarding wedding dates, bespoke coverage, deliveries, and destination shoots.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg border border-stone-200 bg-[#F8F4EE] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#B89152] rounded-lg"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#171717]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#171717] text-white' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed font-sans border-t border-stone-200/60 mt-1"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
