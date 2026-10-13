import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSteps } from './components/BookingSteps';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import { INITIAL_BUSINESS_CONFIG, BusinessConfig } from './config/businessConfig';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem('wnp_business_config');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback to initial config
    }
    return INITIAL_BUSINESS_CONFIG;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('wnp_business_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setConfig(INITIAL_BUSINESS_CONFIG);
    try {
      localStorage.removeItem('wnp_business_config');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EE] text-[#242424] selection:bg-[#B89152]/20 selection:text-[#171717]">
      {/* Top Header with strict 3-zone contract */}
      <Header
        config={config}
        onOpenBooking={() => scrollToContact()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Cinematic Editorial Hero */}
        <HeroSection
          config={config}
          onOpenBooking={() => scrollToContact()}
        />

        {/* Introduction & Philosophy */}
        <IntroductionSection />

        {/* Confirmed Services */}
        <ServicesSection
          config={config}
          onSelectService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Featured Portfolio & Lightbox */}
        <PortfolioGallery
          onOpenBookingForStory={(storyTitle) => scrollToContact(storyTitle)}
        />

        {/* Why Choose Us: 4 Core Pillars */}
        <WhyChooseUs />

        {/* Authentic Client Feedback & Google Rating */}
        <ReviewsSection config={config} />

        {/* 4-Step Booking Process */}
        <BookingSteps />

        {/* Accessible FAQ Accordion */}
        <FAQSection />

        {/* Confirmed Location, Telephone, WhatsApp & Validated Enquiry Form */}
        <LocationContactSection
          config={config}
          preselectedService={preselectedService}
          onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        />

        {/* Final Editorial Call to Action */}
        <CTASection config={config} />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        onOpenOwnerConfig={() => setIsOwnerModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar (<=15% viewport height) */}
      <MobileQuickBar config={config} />

      {/* Privacy Policy Dialog */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        businessName={config.name}
      />

      {/* Owner Configuration & Verification Drawer */}
      <OwnerConfigModal
        config={config}
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
