import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  FileText,
  Boxes,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: (options?: { temporary?: boolean; daysToDismiss?: number }) => void;
  onSuccess?: () => void;
  onNavigate?: (path: string) => void;
}

interface FormState {
  fullName: string;
  email: string;
  role: string;
  topics: {
    dailyPrices: boolean;
    exportForecasts: boolean;
    storageScience: boolean;
  };
}

interface ValidationErrors {
  email?: string;
  role?: string;
  topics?: string;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onNavigate,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    role: 'grower',
    topics: {
      dailyPrices: true,
      exportForecasts: true,
      storageScience: false,
    },
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your primary affiliation or interest.';
    }

    const hasSelectedTopic =
      formData.topics.dailyPrices ||
      formData.topics.exportForecasts ||
      formData.topics.storageScience;

    if (!hasSelectedTopic) {
      newErrors.topics = 'Please select at least one topic of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('loc_subscribers') || '[]');
        const newSubscriber = {
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          role: formData.role,
          topics: formData.topics,
          subscribedAt: new Date().toISOString(),
          source: 'homepage_modal',
        };
        stored.push(newSubscriber);
        localStorage.setItem('loc_subscribers', JSON.stringify(stored));
        localStorage.setItem('loc_newsletter_subscribed', 'true');
      } catch {
        // ignore storage errors
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleCheckboxChange = (topicKey: keyof FormState['topics']) => {
    setFormData((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topicKey]: !prev.topics[topicKey],
      },
    }));
    if (errors.topics) {
      setErrors((prev) => ({ ...prev, topics: undefined }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
      onClick={() => onClose({ temporary: true })}
    >
      <div
        className="bg-[#F8F5ED] rounded-xl shadow-2xl border border-[#E8E2D2] w-full max-w-xl overflow-hidden relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => onClose({ temporary: true })}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#252B27] flex items-center justify-center border border-[#E8E2D2] shadow-xs transition-colors cursor-pointer"
          aria-label="Close newsletter subscription modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Banner Header with Verified Real Stock Photo */}
        <div className="relative h-36 sm:h-44 bg-[#0f3424] overflow-hidden">
          <img
            src="/images/lasalgaon_onions_field.jpg"
            alt="Field cultivation of Nashik red onions in Maharashtra"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3424] via-[#0f3424]/75 to-transparent" />
          
          <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D9A441] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Market Intelligence Dispatch</span>
            </div>
            <h2
              id="newsletter-modal-title"
              className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug"
            >
              The Lasalgaon Mandi Weekly Intelligence
            </h2>
            <p className="text-xs text-white/80 line-clamp-1 mt-0.5 font-sans">
              Real-time auction insights, arrival volumes, storage science & export policy.
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#174D35]/10 text-[#174D35] mx-auto border border-[#174D35]/20">
                <CheckCircle2 className="w-8 h-8 text-[#174D35]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#174D35]">
                Subscription Confirmed
              </h3>
              <p className="text-sm text-[#575E59] max-w-md mx-auto leading-relaxed font-sans">
                Thank you for subscribing, <strong className="text-[#252B27]">{formData.fullName || formData.email}</strong>. 
                Your weekly briefing will be delivered directly from the Lasalgaon Onion Chronicle desk every Monday at 07:00 AM IST.
              </p>

              <div className="bg-white p-3.5 rounded-lg border border-[#E8E2D2] text-xs text-left max-w-md mx-auto space-y-1.5 font-sans">
                <div className="font-semibold text-[#174D35] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Subscribed Email: {formData.email}</span>
                </div>
                <div className="text-[#575E59]">
                  Role: <span className="capitalize font-medium text-[#252B27]">{formData.role}</span>
                </div>
                <div className="text-[#575E59]">
                  Dispatches included: Daily Modal Rates, APEDA Export Alerts & Post-Harvest Notes
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onClose()}
                  className="px-6 py-2.5 bg-[#174D35] hover:bg-[#123d2a] text-white text-sm font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  Return to Mandi Chronicle
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Join over 4,200 growers, APMC commission agents, and agricultural commodity exporters receiving authoritative allium intelligence from Asia&apos;s price-setting hub.
              </p>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#252B27] mb-1 font-sans">
                    Full Name <span className="text-xs font-normal text-[#575E59]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full px-3 py-2 bg-white rounded-md border border-[#E8E2D2] text-sm text-[#252B27] placeholder:text-[#575E59]/50 focus:border-[#174D35] focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252B27] mb-1 font-sans">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@domain.com"
                    required
                    className={`w-full px-3 py-2 bg-white rounded-md border ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E8E2D2]'
                    } text-sm text-[#252B27] placeholder:text-[#575E59]/50 focus:border-[#174D35] focus:outline-none font-sans`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Role Affiliation */}
              <div>
                <label className="block text-xs font-semibold text-[#252B27] mb-1 font-sans">
                  Your Primary Affiliation <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                    if (errors.role) setErrors((prev) => ({ ...prev, role: undefined }));
                  }}
                  className="w-full px-3 py-2 bg-white rounded-md border border-[#E8E2D2] text-sm text-[#252B27] focus:border-[#174D35] focus:outline-none font-sans cursor-pointer"
                >
                  <option value="grower">Farmer / Onion Cultivator (Grower)</option>
                  <option value="trader">APMC Commission Agent / Mandi Trader</option>
                  <option value="exporter">Agricultural Exporter & Logistics Provider</option>
                  <option value="processor">Food Dehydration & Processing Enterprise</option>
                  <option value="researcher">Agricultural Economist / Research Scholar</option>
                </select>
                {errors.role && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.role}</span>
                  </p>
                )}
              </div>

              {/* Topics of Interest */}
              <div>
                <label className="block text-xs font-semibold text-[#252B27] mb-1.5 font-sans">
                  Custom Topic Preferences <span className="text-xs font-normal text-[#575E59]">(Select all that apply)</span>
                </label>
                <div className="space-y-1.5 bg-white p-3 rounded-md border border-[#E8E2D2]">
                  <label className="flex items-start gap-2 text-xs text-[#252B27] cursor-pointer font-sans">
                    <input
                      type="checkbox"
                      checked={formData.topics.dailyPrices}
                      onChange={() => handleCheckboxChange('dailyPrices')}
                      className="mt-0.5 rounded text-[#174D35] focus:ring-[#174D35] cursor-pointer"
                    />
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#174D35] shrink-0" />
                      <span><strong>Daily Modal Rates:</strong> Lasalgaon & Nashik cluster wholesale prices</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 text-xs text-[#252B27] cursor-pointer font-sans">
                    <input
                      type="checkbox"
                      checked={formData.topics.exportForecasts}
                      onChange={() => handleCheckboxChange('exportForecasts')}
                      className="mt-0.5 rounded text-[#174D35] focus:ring-[#174D35] cursor-pointer"
                    />
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                      <span><strong>Export Parity:</strong> Minimum Export Price (MEP) & DGFT tariff alerts</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 text-xs text-[#252B27] cursor-pointer font-sans">
                    <input
                      type="checkbox"
                      checked={formData.topics.storageScience}
                      onChange={() => handleCheckboxChange('storageScience')}
                      className="mt-0.5 rounded text-[#174D35] focus:ring-[#174D35] cursor-pointer"
                    />
                    <div className="flex items-center gap-1.5">
                      <Boxes className="w-3.5 h-3.5 text-[#713B67] shrink-0" />
                      <span><strong>Post-Harvest Science:</strong> NHRDF/BARC storage & rot mitigation</span>
                    </div>
                  </label>
                </div>
                {errors.topics && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.topics}</span>
                  </p>
                )}
              </div>

              {/* Clear Privacy Promise Callout */}
              <div className="p-3 bg-[#174D35]/5 border border-[#174D35]/15 rounded-md flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#174D35] shrink-0 mt-0.5" />
                <div className="text-[11px] sm:text-xs text-[#575E59] font-sans leading-relaxed">
                  <span className="font-semibold text-[#174D35]">Editorial Privacy Promise:</span> We maintain strict data hygiene. Your contact info is never rented, shared, or commercialized. Unsubscribe in 1 click at any time.{' '}
                  {onNavigate && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onNavigate('/privacy');
                      }}
                      className="text-[#174D35] underline hover:text-[#0f3424] font-medium ml-1 cursor-pointer"
                    >
                      Read full Privacy Policy →
                    </button>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-[#D9A441] hover:bg-[#b8852c] text-[#252B27] font-semibold text-sm rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Securing Subscription...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe to Mandi Dispatch</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onClose({ daysToDismiss: 7 })}
                  className="px-3.5 py-3 text-xs text-[#575E59] hover:text-[#252B27] hover:underline font-sans cursor-pointer whitespace-nowrap"
                >
                  Maybe later
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
