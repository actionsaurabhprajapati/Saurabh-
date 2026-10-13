import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Settings, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { BusinessConfig } from '../config/businessConfig';

interface FooterProps {
  config: BusinessConfig;
  onOpenPrivacyPolicy: () => void;
  onOpenOwnerConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenPrivacyPolicy,
  onOpenOwnerConfig,
}) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio Stories', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Check Date', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121212] text-stone-300 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block" aria-label={`${config.name} Home`}>
              <Logo variant="horizontal" theme="dark" />
            </a>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Fine-art wedding photography and cinematic films rooted in Sikandra, Agra. Crafting timeless visual narratives of Indian nuptials, sacred rituals, and candid family joy.
            </p>
            <div className="pt-2 text-xs text-[#B89152] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Business in Sikandra, Agra 282007</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold font-serif">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#B89152] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold font-serif">
              Service Coverage
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {config.serviceAreas.map((area, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#B89152]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Confirmed Studio Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold font-serif">
              Agra Studio
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="leading-relaxed">
                {config.address.line1}, {config.address.locality}, {config.address.city}, {config.address.state} {config.address.pincode}
              </p>
              <p>
                <a
                  href={`tel:${config.contact.phoneRaw}`}
                  className="text-white hover:text-[#B89152] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89152]" />
                  <span>{config.contact.phone}</span>
                </a>
              </p>
              <p>
                <a
                  href={config.links.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B89152] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {currentYear} {config.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-stone-300 underline transition-colors"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={onOpenOwnerConfig}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#B89152] transition-colors"
              title="View and verify business details"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Studio Verification Data</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
