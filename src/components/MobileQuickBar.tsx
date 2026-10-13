import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';

interface MobileQuickBarProps {
  config: BusinessConfig;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ config }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#171717]/95 backdrop-blur-md border-t border-[#B89152]/30 px-3 py-2.5 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Call Studio */}
        <a
          href={`tel:${config.contact.phoneRaw}`}
          className="flex-1 min-h-[44px] px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-[#F8F4EE] text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#B89152]"
          aria-label="Call The Wedding Nazare Productions"
        >
          <Phone className="w-4 h-4 text-[#B89152]" />
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
            config.whatsappTemplate()
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-3 py-2 rounded bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#25D366]"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Date</span>
        </a>
      </div>
    </aside>
  );
};
