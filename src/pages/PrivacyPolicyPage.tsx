import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, FileCheck, Lock, AlertCircle } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Editorial Policy & Privacy | Lasalgaon Asia's Largest Onion Market"
        description="Review our editorial guidelines, fact-checking commitments, market pricing disclaimers, and data privacy policies."
        canonicalPath="/privacy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Editorial Policy & Privacy', url: '/privacy' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10 text-[#252B27] font-sans leading-relaxed">
        <header className="space-y-3 pb-6 border-b border-[#E8E2D2]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#713B67] block">
            Journalistic Standards & Ethics
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#174D35]">
            Editorial Charter, Fact-Checking & Privacy Policy
          </h1>
          <p className="text-sm text-[#575E59]">
            Last updated: October 14, 2026 · Lasalgaon Onion Chronicle Editorial Board
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#174D35] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
            <span>1. Fact-Checking & Anti-Fabrication Commitment</span>
          </h2>
          <p className="text-sm">
            The <em>Lasalgaon Onion Chronicle</em> operates as an independent agricultural journalism resource. We pledge never to invent live market quotes, fabricate institutional quotes, distort historical prices, or attribute unverified claims to research entities like NHRDF, ICAR, or APMC authorities.
          </p>
          <p className="text-sm">
            All agronomic recommendations (such as seed rates, fertilizer doses, and storage guidelines) are referenced against published documentation from Maharashtra agricultural universities (MPKV Rahuri) and ICAR institutes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#174D35] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#713B67]" />
            <span>2. Market Price Information Disclaimer</span>
          </h2>
          <p className="text-sm">
            Wholesale onion rates at Lasalgaon APMC fluctuate continually based on intraday vehicle arrival volumes and quality variations. Content published on this website is for educational and historical analysis only. It does not constitute formal commercial trade advice. Traders and farmers must verify real-time statutory transaction rates on the Government of India&apos;s Agmarknet portal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#174D35] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#174D35]" />
            <span>3. Data Privacy & Subscriber Confidentiality</span>
          </h2>
          <p className="text-sm">
            When you subscribe to the Weekly Market Intelligence Dispatch or submit an inquiry, we collect only your email and optional role/name. We never sell, rent, or share personal contact information with third-party advertisers or commercial brokers. You may unsubscribe at any time via a single click.
          </p>
        </section>

        <div className="pt-6 border-t border-[#E8E2D2]">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 bg-[#174D35] text-white text-xs font-semibold rounded-md hover:bg-[#0f3424] transition-colors"
          >
            ← Return to Front Page
          </button>
        </div>
      </div>
    </>
  );
};
