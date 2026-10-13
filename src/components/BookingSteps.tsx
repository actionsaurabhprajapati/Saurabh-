import React from 'react';
import { Calendar, MessageSquare, FileCheck2, CheckCircle2 } from 'lucide-react';

export const BookingSteps: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: Calendar,
      title: 'Share Your Date & Venue',
      description:
        'Reach out through our date enquiry form or WhatsApp with your wedding muhurat dates, ceremony venues in Agra or nearby, and overall celebration timeline.',
    },
    {
      stepNumber: '02',
      icon: MessageSquare,
      title: 'Discuss the Coverage You Need',
      description:
        'We connect with you to understand your specific vision—number of functions, family size, candid photo priorities, and cinematography preferences.',
    },
    {
      stepNumber: '03',
      icon: FileCheck2,
      title: 'Review Availability & Package Details',
      description:
        'We present a clear, itemized proposal detailing team size, deliverable timelines, highlight films, and coverage hours calibrated directly to your itinerary.',
    },
    {
      stepNumber: '04',
      icon: CheckCircle2,
      title: 'Confirm the Booking',
      description:
        'Once you are completely satisfied with the plan, your wedding dates are officially reserved on our calendar according to the studio’s agreed confirmation process.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89152] font-semibold mb-3">
            <span>Seamless Process</span>
            <span aria-hidden="true">·</span>
            <span>From First Hello to Wedding Day</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F8F4EE] leading-[1.2] mb-4 text-balance">
            Let’s Start Planning Your Wedding Coverage
          </h2>

          <p className="text-stone-300 text-base sm:text-lg font-sans leading-relaxed text-balance">
            A straightforward, transparent journey ensuring complete peace of mind leading up to your celebrations.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="bg-[#242424] p-6 sm:p-8 rounded-lg border border-white/10 hover:border-[#B89152]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#B89152]">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded bg-[#171717] text-[#B89152] flex items-center justify-center border border-white/5">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                    {step.description}
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
