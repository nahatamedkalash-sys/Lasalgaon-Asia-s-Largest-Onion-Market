import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, Building } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'editorial',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 450);
  };

  return (
    <>
      <SEOHead
        title="Contact Editorial Desk | Lasalgaon Asia's Largest Onion Market"
        description="Contact the editorial team, submit agricultural research inquiries, report market corrections, or connect with our correspondents in Nashik district."
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact Editorial Desk', url: '/contact' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <MessageSquare className="w-4 h-4 text-[#D9A441]" />
            <span>Agricultural Journalism Correspondence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            Contact the Editorial Desk
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            Have an agronomic research paper, field data correction, or investigative tip regarding the Lasalgaon onion market? Reach out to our editorial desk.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Official Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-4">
              <h2 className="font-serif text-lg font-bold text-[#174D35]">
                Editorial & Field Bureau
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#575E59] font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#252B27] block">Field Office:</strong>
                    <span>Lasalgaon APMC Market Yard Road, Niphad Taluka, Nashik District, Maharashtra 422306, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#252B27] block">Email Inquiries:</strong>
                    <span>editorial@lasalgaon-onion-chronicle.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#252B27] block">Regional Agricultural APMC:</strong>
                    <span>Agricultural Produce Market Committee (APMC), Lasalgaon (Official Statutory Body)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2] space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 font-bold text-[#174D35] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                <span>Fact-Checking & Correction Policy</span>
              </div>
              <p className="text-[#575E59] leading-relaxed">
                The Chronicle adheres to strict factual verification. If you identify a discrepancy in historical market statistics, scientific cultivar nomenclature, or institutional descriptions, please select &quot;Fact-Checking Correction&quot; in the form.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-[#E8E2D2] shadow-xs">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#174D35]/10 text-[#174D35] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#174D35]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#174D35]">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-[#575E59] max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for contacting the Lasalgaon Onion Chronicle. Our editorial correspondents review inquiries within one business day.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      inquiryType: 'editorial',
                      message: '',
                    });
                  }}
                  className="px-5 py-2 bg-[#174D35] text-white text-xs font-semibold rounded-md hover:bg-[#0f3424] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-xs font-semibold text-[#252B27] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Balasaheb Shinde"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] focus:border-[#174D35] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252B27] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. researcher@agri.edu"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] focus:border-[#174D35] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252B27] mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] focus:border-[#174D35] focus:outline-none"
                    >
                      <option value="editorial">Editorial Question / Article Feedback</option>
                      <option value="correction">Fact-Checking / Data Correction</option>
                      <option value="research">Academic / Scientific Research Collaboration</option>
                      <option value="fpo">Farmer Producer Organization (FPO) Submission</option>
                      <option value="press">Media / Press Interview Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252B27] mb-1">
                    Institution or Affiliation (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. NHRDF, University, FPO Name, or Self"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] focus:border-[#174D35] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252B27] mb-1">
                    Message / Field Inquiry *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please detail your inquiry, research request, or data correction with relevant citations..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] focus:border-[#174D35] focus:outline-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-600">Please fill in all mandatory fields.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-6 py-3 bg-[#174D35] hover:bg-[#0f3424] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#D9A441]" />
                  <span>{status === 'loading' ? 'Dispatching...' : 'Submit to Editorial Desk'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
