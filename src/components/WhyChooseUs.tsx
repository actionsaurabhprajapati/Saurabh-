import React from 'react';
import { Camera, Clock, HeartHandshake, Film } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Camera,
      title: 'Unscripted Emotional Candids',
      description:
        'Instead of stiff, repetitive poses, we prioritize authentic interactions—the quiet look exchanged between the couple during Vedic mantras, parents holding back tears during the Kanyadaan, and friends erupting into laughter during the Baraat.',
    },
    {
      icon: Film,
      title: 'Cinematic Narrative Color Science',
      description:
        'Every wedding collection is individually color-corrected with fine-art tonal sensitivity. We honor the rich crimson of traditional lehengas, the radiant turmeric hues of the Haldi, and natural skin tones without harsh over-processing.',
    },
    {
      icon: Clock,
      title: 'Pre-Wedding Timeline Coordination',
      description:
        'Indian weddings involve intricate schedules and muhurat timings. We collaborate with you and your family ahead of time to map out portrait windows, family formals, and ritual milestones so you never feel rushed or stressed.',
    },
    {
      icon: HeartHandshake,
      title: 'Attentive & Respectful Presence',
      description:
        'Our crew conducts themselves with dignity and warmth across sacred ritual mandaps and energetic reception dances alike, ensuring your elders and guests feel comfortable, respected, and thoroughly celebrated.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F4EE] text-[#242424] border-b border-[#B89152]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold mb-3">
            <span>Our Principles</span>
            <span aria-hidden="true">·</span>
            <span>Wedding Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] mb-4 text-balance">
            A Thoughtful Approach to Your Wedding Day
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans leading-relaxed text-balance">
            How we approach your celebration matters just as much as the photographs themselves. Here is what you can expect when partnering with our studio.
          </p>
        </div>

        {/* 4 Pillars Grid (Hairline borders, no pill tags, no thick left borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-lg border border-stone-200 shadow-sm hover:border-[#B89152]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#171717] text-[#B89152] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="font-serif text-lg text-stone-300 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#171717] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
