import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { BusinessConfig } from '../config/businessConfig';

interface HeaderProps {
  config: BusinessConfig;
  onOpenBooking: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onOpenBooking,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(
    config.announcement.enabled
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      {isAnnouncementVisible && config.announcement.message && (
        <div className="bg-[#171717] text-[#F8F4EE] border-b border-[#B89152]/20 px-4 py-2 text-xs font-sans tracking-wide">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#B89152] font-semibold text-[11px] uppercase tracking-wider shrink-0">
                Notice:
              </span>
              <span className="truncate text-stone-300">
                {config.announcement.message}
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={`tel:${config.contact.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-[#B89152] hover:text-[#e4be7c] text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{config.contact.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => setIsAnnouncementVisible(false)}
                className="text-stone-400 hover:text-white p-0.5 transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Top Bar - strict 3-zone contract */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-lg border-b border-[#B89152]/15 py-3.5'
            : 'bg-gradient-to-b from-[#171717]/90 via-[#171717]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark (single element, display face) */}
            <a
              href="#home"
              className="group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B89152] rounded"
              aria-label={`${config.name} - Home`}
            >
              <Logo variant="horizontal" theme="dark" />
            </a>

            {/* Zone 2: Nav links (4-5 single-line text links with hover underline) */}
            <nav
              className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-stone-300"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-[#F8F4EE] focus-visible:outline-2 focus-visible:outline-[#B89152] rounded ${
                      isActive ? 'text-[#F8F4EE] font-semibold' : 'text-stone-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89152] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action (Single CTA button) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wide text-[#171717] bg-[#B89152] hover:bg-[#8A6734] hover:text-[#F8F4EE] transition-all rounded shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89152]"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Check Your Wedding Date</span>
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-stone-200 hover:text-white rounded focus-visible:outline-2 focus-visible:outline-[#B89152]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-0 z-50 lg:hidden bg-[#171717] text-[#F8F4EE] flex flex-col h-screen"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Mobile Header Row */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Logo variant="compact" theme="dark" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-stone-300 hover:text-white rounded focus-visible:outline-2 focus-visible:outline-[#B89152]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-stone-200 hover:text-[#B89152] transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-[#B89152]/60" />
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 bg-[#B89152] text-[#171717] font-semibold text-sm rounded flex items-center justify-center gap-2 hover:bg-[#8A6734] hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Your Wedding Date</span>
              </button>

              <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
                <span>{config.address.locality}, {config.address.city}</span>
                <a
                  href={`tel:${config.contact.phoneRaw}`}
                  className="text-[#B89152] font-medium hover:underline"
                >
                  {config.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
