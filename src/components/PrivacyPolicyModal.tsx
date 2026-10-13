import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName: string;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  businessName,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-[#FFFFFF] text-[#242424] max-w-2xl w-full rounded-lg shadow-2xl border border-stone-200 max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-[#171717] text-[#F8F4EE] flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#B89152]" />
            <h3 id="privacy-modal-title" className="font-serif text-lg font-semibold text-white">
              Privacy Policy & Client Data Notice
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-stone-700 font-sans leading-relaxed">
          <p className="text-xs text-stone-500 italic">
            Last Updated: {new Date().getFullYear()} · Applicable to clients and website visitors of {businessName}, Sikandra, Agra, Uttar Pradesh.
          </p>

          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#171717]">
              1. Information We Collect
            </h4>
            <p>
              When you submit a wedding date availability enquiry through our website or contact us via WhatsApp or phone, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Your name and contact phone number / WhatsApp details.</li>
              <li>Wedding or event date, venue, city, and ceremonial itinerary.</li>
              <li>Requested photography and cinematography service scope.</li>
              <li>Optional email address and personal message notes.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#171717]">
              2. Purpose of Processing
            </h4>
            <p>
              We process this information strictly to check studio calendar availability, draft customized coverage proposals, and communicate directly with you regarding your wedding celebration. We never sell, rent, or lease your personal contact details to external marketing agencies or third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#171717]">
              3. Client Photograph & Film Privacy
            </h4>
            <p>
              We treat wedding memories with the highest confidentiality. Client galleries are hosted in private, encrypted cloud storage. Any portfolio showcase, social media post, or cinematic teaser feature is governed by mutual discussion and client authorization in our studio agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#171717]">
              4. Data Retention & Your Rights
            </h4>
            <p>
              You retain the right to review, update, or request the deletion of your enquiry data from our studio records at any time by contacting our Agra studio via phone or WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#171717]">
              5. Studio Contact Coordinates
            </h4>
            <p className="text-xs">
              <strong>{businessName}</strong><br />
              Shop No. 2, Radha Nagar, Sikandra, Agra, Uttar Pradesh 282007, India.<br />
              Direct Studio Telephone: +91 92868 28892
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#171717] hover:bg-[#333333] text-white text-xs font-semibold rounded transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
