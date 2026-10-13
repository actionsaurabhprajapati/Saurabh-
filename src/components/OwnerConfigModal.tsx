import React, { useState } from 'react';
import { X, Check, Copy, Save, AlertCircle, RefreshCw, Sparkles, Building, Phone, MapPin } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';

interface OwnerConfigModalProps {
  config: BusinessConfig;
  isOpen: boolean;
  onClose: () => void;
  onSaveConfig: (newConfig: BusinessConfig) => void;
  onResetDefaults: () => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  config,
  isOpen,
  onClose,
  onSaveConfig,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-config-title"
    >
      <div className="bg-[#FFFFFF] text-[#242424] max-w-2xl w-full rounded-lg shadow-2xl border border-stone-300 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-[#171717] text-[#F8F4EE] flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89152] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Master Configuration</span>
            </div>
            <h3 id="owner-config-title" className="font-serif text-xl font-semibold text-white mt-0.5">
              Business Data & Owner Handover Panel
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6 text-sm font-sans">
          <div className="bg-amber-50 border border-amber-200 rounded p-4 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Client Presentation & Verification Note:</p>
              <p className="mt-0.5">
                Confirmed values appear live on the site. Values marked <span className="font-mono font-bold text-amber-800">[OWNER TO CONFIRM]</span> are kept safely hidden or neutrally linked on customer-facing pages until verified.
              </p>
            </div>
          </div>

          {/* Section 1: Business Identity */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#B89152]" />
              <span>Identity & Registration</span>
            </h4>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Business Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border rounded border-stone-300 bg-stone-50 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 border rounded border-stone-300"
              />
            </div>
          </div>

          {/* Section 2: Contact & Phone */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#B89152]" />
              <span>Contact Coordinates</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Listed Telephone</label>
                <input
                  type="text"
                  value={formData.contact.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, phone: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border rounded border-stone-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">WhatsApp Number (Raw)</label>
                <input
                  type="text"
                  value={formData.contact.whatsappRaw}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, whatsappRaw: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border rounded border-stone-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Official Email</label>
              <input
                type="text"
                value={formData.contact.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact: { ...formData.contact, email: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded border-stone-300"
              />
              <span className="text-[11px] text-stone-500">Currently marked [OWNER TO CONFIRM].</span>
            </div>
          </div>

          {/* Section 3: Physical Address */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B89152]" />
              <span>Physical Address & Map Link</span>
            </h4>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Address Line</label>
              <input
                type="text"
                value={formData.address.line1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, line1: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded border-stone-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Locality</label>
                <input
                  type="text"
                  value={formData.address.locality}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, locality: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border rounded border-stone-300"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Pincode</label>
                <input
                  type="text"
                  value={formData.address.pincode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, pincode: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border rounded border-stone-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Google Maps Listing URL</label>
              <input
                type="text"
                value={formData.links.googleMapsListing}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    links: { ...formData.links, googleMapsListing: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded border-stone-300 font-mono text-xs"
              />
            </div>
          </div>

          {/* Section 4: Announcement Banner */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700">
                Top Announcement Bar
              </h4>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.announcement.enabled}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      announcement: { ...formData.announcement, enabled: e.target.checked },
                    })
                  }
                  className="rounded text-[#B89152]"
                />
                <span>Enable Banner</span>
              </label>
            </div>

            <div>
              <input
                type="text"
                value={formData.announcement.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    announcement: { ...formData.announcement, message: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded border-stone-300 text-xs"
                placeholder="Confirmed booking notice..."
              />
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyJSON}
              className="px-3 py-2 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON!' : 'Copy Config JSON'}</span>
            </button>

            <button
              type="button"
              onClick={onResetDefaults}
              className="px-3 py-2 text-stone-600 hover:text-stone-900 text-xs font-medium flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 bg-[#171717] hover:bg-[#333333] text-white text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
            >
              {savedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5 text-[#B89152]" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
