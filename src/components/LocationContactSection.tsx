import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';

interface LocationContactSectionProps {
  config: BusinessConfig;
  preselectedService?: string;
  onOpenPrivacyPolicy: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  venueCity: string;
  eventType: string;
  services: string[];
  notes: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  eventDate?: string;
  venueCity?: string;
  services?: string[];
  privacyConsent?: string;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  config,
  preselectedService,
  onOpenPrivacyPolicy,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    venueCity: 'Agra',
    eventType: 'Wedding & Reception',
    services: preselectedService ? [preselectedService] : ['Candid & Traditional Wedding Photography'],
    notes: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const availableServices = [
    'Candid & Traditional Wedding Photography',
    'Cinematic Wedding Teasers & Feature Films',
    'Editorial Pre-Wedding Conceptual Shoots',
    'Haldi, Mehendi & Sangeet Ceremonies',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // Indian phone number validation (10 digits, optional +91 or 0 prefix)
    const cleanedPhone = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    if (!cleanedPhone) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your wedding / event date.';
    }

    if (!formData.venueCity.trim()) {
      newErrors.venueCity = 'Please specify the venue or city (e.g. Agra, Vrindavan).';
    }

    if (formData.services.length === 0) {
      newErrors.services = ['Please select at least one required service.'];
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please agree to allow us to contact you regarding your date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedId = `WNP-${Date.now().toString().slice(-6)}`;
      setSubmissionId(generatedId);
    }, 900);
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
  };

  // WhatsApp quick direct URL
  const buildWhatsAppUrl = () => {
    const dateText = formData.eventDate || '[DATE]';
    const venueText = formData.venueCity || 'Agra';
    const serviceText = formData.services.join(', ') || 'Wedding Photography';
    const rawMsg = config.whatsappTemplate(dateText, venueText, serviceText);
    return `https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(rawMsg)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F4EE] text-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A6734] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B89152]" />
            <span>Connect With Our Studio</span>
            <span aria-hidden="true">·</span>
            <span>Agra Muhurat Bookings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] leading-[1.2] mb-4 text-balance">
            Let’s Talk About Your Celebration
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans leading-relaxed text-balance">
            Share your wedding date, venue and photography requirements to start a conversation about your celebration. We review every enquiry personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Confirmed Location, Phone, Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studio Address Card */}
            <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#171717] text-[#B89152] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#171717]">
                    Studio Location
                  </h3>
                  <p className="text-sm text-stone-700 mt-1 leading-relaxed font-sans">
                    {config.address.line1}, {config.address.locality}, {config.address.city}, {config.address.state} {config.address.pincode}, {config.address.country}
                  </p>
                  <a
                    href={config.links.googleMapsListing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6734] hover:text-[#5d431f] mt-2 group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Direct Studio Phone */}
              <div className="pt-6 border-t border-stone-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#171717] text-[#B89152] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#171717]">
                    Direct Telephone
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    For direct date discussions & appointments:
                  </p>
                  <a
                    href={`tel:${config.contact.phoneRaw}`}
                    className="inline-block text-lg font-bold text-[#171717] hover:text-[#8A6734] mt-1 font-sans"
                  >
                    {config.contact.phone}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-6 border-t border-stone-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#171717] text-[#B89152] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#171717]">
                    Instant WhatsApp
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fast response on chat for availability checks:
                  </p>
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      config.whatsappTemplate()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366]/10 text-[#177a3d] font-semibold text-xs rounded hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed / Direct Directions */}
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-700 tracking-wider">
                  <MapPin className="w-4 h-4 text-[#B89152]" />
                  <span>Sikandra, Agra Listing</span>
                </div>
                <a
                  href={config.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8A6734] font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative rounded overflow-hidden aspect-[16/9] border border-stone-200 bg-stone-100">
                <iframe
                  title="Google Maps Location for The Wedding Nazare Productions Sikandra Agra"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.887295738817!2d77.942702!3d27.221516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776101c51859%3A0x6b498679f2963d4!2sRadha%20Nagar%2C%20Sikandra%2C%20Agra%2C%20Uttar%20Pradesh%20282007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <p className="text-[11px] text-stone-500 mt-2 text-center">
                Radha Nagar, Sikandra, Agra 282007 · Click directions to navigate directly via Google Maps
              </p>
            </div>
          </div>

          {/* Right Column: Full Wedding Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-stone-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#B89152]/15 text-[#8A6734] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 stroke-[2]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171717]">
                    Enquiry Received
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. We have logged your request for <strong>{formData.eventDate}</strong> in <strong>{formData.venueCity}</strong>. Reference ID: <span className="font-mono text-[#8A6734] font-semibold">{submissionId}</span>.
                  </p>
                </div>

                <div className="bg-[#F8F4EE] p-5 rounded border border-stone-200 max-w-md mx-auto text-left text-xs text-stone-700 space-y-1.5 font-sans">
                  <p><strong>Selected Services:</strong> {formData.services.join(', ')}</p>
                  <p><strong>Contact Phone:</strong> {formData.phone}</p>
                  <p className="text-stone-500 pt-1">
                    Our lead team reviews availability against the studio calendar and will reach out via call/WhatsApp within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details to WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        eventDate: '',
                        venueCity: 'Agra',
                        eventType: 'Wedding & Reception',
                        services: ['Candid & Traditional Wedding Photography'],
                        notes: '',
                        privacyConsent: false,
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 border border-stone-300 text-stone-700 hover:text-stone-900 font-semibold text-xs rounded transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#171717] mb-1">
                    Check Wedding Date & Coverage
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Fields marked with <span className="text-red-600">*</span> are required.
                  </p>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-500 bg-red-50/20 focus:border-red-600'
                          : 'border-stone-300 bg-white focus:border-[#B89152]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 bg-red-50/20 focus:border-red-600'
                          : 'border-stone-300 bg-white focus:border-[#B89152]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email (Optional) & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Email Address <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm font-sans focus:border-[#B89152] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Wedding / Event Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none transition-colors ${
                        errors.eventDate
                          ? 'border-red-500 bg-red-50/20 focus:border-red-600'
                          : 'border-stone-300 bg-white focus:border-[#B89152]'
                      }`}
                    />
                    {errors.eventDate && (
                      <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Venue & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="venueCity" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Venue / City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="venueCity"
                      value={formData.venueCity}
                      onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                      placeholder="e.g. ITC Mughal, Agra / Vrindavan"
                      className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none transition-colors ${
                        errors.venueCity
                          ? 'border-red-500 bg-red-50/20 focus:border-red-600'
                          : 'border-stone-300 bg-white focus:border-[#B89152]'
                      }`}
                    />
                    {errors.venueCity && (
                      <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.venueCity}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm font-sans focus:border-[#B89152] focus:outline-none transition-colors"
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Multi-Day Indian Nuptials (3+ Days)">Multi-Day Indian Nuptials (3+ Days)</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Engagement / Roka">Engagement / Roka</option>
                      <option value="Haldi & Mehendi Only">Haldi & Mehendi Only</option>
                    </select>
                  </div>
                </div>

                {/* Services Requested Multiselect */}
                <div>
                  <span className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Services Requested <span className="text-red-600">*</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((service) => {
                      const isChecked = formData.services.includes(service);
                      return (
                        <label
                          key={service}
                          className={`flex items-start gap-3 p-3 rounded border text-xs cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-[#F8F4EE] border-[#B89152] text-[#171717] font-medium'
                              : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleServiceToggle(service)}
                            className="mt-0.5 rounded text-[#B89152] focus:ring-[#B89152]"
                          />
                          <span>{service}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.services[0]}</span>
                    </p>
                  )}
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Additional Details or Questions <span className="text-stone-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your celebration size, particular ceremonies, or questions..."
                    className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm font-sans focus:border-[#B89152] focus:outline-none transition-colors"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 text-xs text-stone-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-0.5 rounded text-[#B89152] focus:ring-[#B89152]"
                    />
                    <span>
                      I consent to THE WEDDING NAZARE PRODUCTIONS contacting me via phone/WhatsApp regarding wedding availability and package proposals. We respect your confidentiality. See our{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="text-[#8A6734] underline hover:text-[#5d431f]"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.privacyConsent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 px-6 bg-[#171717] hover:bg-[#333333] text-[#F8F4EE] font-semibold text-sm rounded shadow-md transition-all flex items-center justify-center gap-2 border border-[#B89152]/40 disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-[#B89152]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#B89152] border-t-transparent rounded-full animate-spin" />
                        <span>Checking Studio Schedule...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#B89152]" />
                        <span>Submit Date Enquiry</span>
                      </>
                    )}
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 bg-[#25D366]/10 text-[#177a3d] hover:bg-[#25D366]/20 font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 shrink-0 border border-[#25D366]/30"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
