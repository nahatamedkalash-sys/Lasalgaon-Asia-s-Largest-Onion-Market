import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('farmer');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      // Persist in localStorage for local demo fidelity
      try {
        const existing = JSON.parse(localStorage.getItem('loc_subscribers') || '[]');
        if (!existing.includes(email)) {
          existing.push({ email, role, date: new Date().toISOString() });
          localStorage.setItem('loc_subscribers', JSON.stringify(existing));
        }
      } catch (err) {
        // ignore storage errors
      }

      setStatus('success');
      setMessage('Subscription confirmed! You will receive verified weekly market intelligence briefings and seasonal storage alerts.');
    }, 400);
  };

  return (
    <section className="bg-[#FAF8F2] border-y border-[#E8E2D2] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#174D35]/10 text-[#174D35] mb-4">
          <Mail className="w-6 h-6" />
        </div>
        
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
          The Lasalgaon Weekly Market Intelligence Dispatch
        </h2>
        
        <p className="text-sm sm:text-base text-[#575E59] max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          Curated agronomic briefings, seasonal arrival forecasts, export policy updates, and NHRDF research summaries delivered directly to farmers, traders, and agricultural economists.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto p-4 bg-white rounded-md border border-[#174D35] text-[#174D35] flex items-center gap-3 text-left">
            <CheckCircle2 className="w-6 h-6 text-[#174D35] shrink-0" />
            <p className="text-sm font-sans">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                required
                className="flex-1 px-4 py-3 rounded-md bg-white border border-[#E8E2D2] text-[#252B27] placeholder:text-[#575E59]/60 focus:border-[#174D35] focus:outline-none text-sm font-sans"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-3 py-3 rounded-md bg-white border border-[#E8E2D2] text-[#252B27] text-sm font-sans focus:outline-none"
              >
                <option value="farmer">Farmer / Grower</option>
                <option value="trader">Mandi Trader / Agent</option>
                <option value="exporter">Exporter / Processor</option>
                <option value="researcher">Researcher / Student</option>
              </select>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-[#D9A441] hover:bg-[#b8852c] text-[#252B27] font-semibold text-sm rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              >
                <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-600 text-left font-sans">{message}</p>
            )}

            <p className="text-xs text-[#575E59] font-sans">
              Strictly zero spam. We respect your inbox and never sell email addresses. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
