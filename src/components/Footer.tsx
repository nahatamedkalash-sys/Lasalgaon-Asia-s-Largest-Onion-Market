import React from 'react';
import { CATEGORIES } from '../data/articles';
import { ExternalLink, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#174D35] text-[#F8F5ED] pt-16 pb-12 border-t border-[#174D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#236547]">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#D9A441] flex items-center justify-center text-[#174D35]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                  <path d="M16 3C13 7 7 14 7 20a9 9 0 0 0 18 0c0-6-6-13-9-17z" />
                  <path d="M16 7c-2 3-5 8-5 13a5 5 0 0 0 10 0c0-5-3-10-5-13z" fill="#713B67" opacity="0.85" />
                  <path stroke="#174D35" strokeWidth="2" strokeLinecap="round" d="M16 3V1" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Lasalgaon
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">
                  Asia&apos;s Largest Onion Market
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F8F5ED]/80 leading-relaxed font-sans max-w-md">
              A specialized agricultural journalism publication and market intelligence resource dedicated to the Lasalgaon Onion Market in Niphad, Nashik district, Maharashtra — recognized as one of Asia&apos;s largest wholesale onion trading hubs.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#F8F5ED]/70 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>Lasalgaon APMC Market Yard Road, Niphad Taluka, Nashik District, Maharashtra 422306, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span>editorial@lasalgaon-onion-chronicle.org</span>
              </div>
            </div>
          </div>

          {/* Col 3: Sections & Exploration */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-[#D9A441] uppercase tracking-wider mb-4">
              Chronicle Sections
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F5ED]/80 font-sans">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                  Front Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  About Lasalgaon APMC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/market-auction-system')} className="hover:text-white transition-colors">
                  Auction Mechanics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/market-prices')} className="hover:text-white transition-colors">
                  Prices & Modal Trends
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/farming-guide')} className="hover:text-white transition-colors">
                  Agronomic Farming Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/storage-post-harvest')} className="hover:text-white transition-colors">
                  Kanda Chawl Storage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/trade-exports')} className="hover:text-white transition-colors">
                  Global Onion Exports
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Topic Categories */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-[#D9A441] uppercase tracking-wider mb-4">
              Article Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F5ED]/80 font-sans">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => onNavigate(`/category/${cat.slug}`)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Official Verification Links & Governance */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-[#D9A441] uppercase tracking-wider mb-4">
              Official Data Sources
            </h3>
            <p className="text-xs text-[#F8F5ED]/70 mb-3 font-sans leading-relaxed">
              We cross-reference all market figures with statutory authorities:
            </p>
            <ul className="space-y-2 text-xs text-[#F8F5ED]/80 font-sans">
              <li>
                <a
                  href="https://agmarknet.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D9A441] transition-colors"
                >
                  <span>Agmarknet (Govt of India)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://msamb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D9A441] transition-colors"
                >
                  <span>MSAMB Market Bulletins</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://apeda.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D9A441] transition-colors"
                >
                  <span>APEDA Onion Export Data</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://nhrdf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D9A441] transition-colors"
                >
                  <span>NHRDF Horticultural Research</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://dogr.icar.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D9A441] transition-colors"
                >
                  <span>ICAR-DOGR Allium Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-[#236547]">
              <div className="flex items-center gap-2 text-xs text-[#D9A441]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>GI Tagged (2023) Registry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Disclaimer & Secondary Bar */}
        <div className="pt-8 pb-4 text-xs text-[#F8F5ED]/70 font-sans space-y-4">
          <div className="p-4 rounded-md bg-[#0f3424] border border-[#236547]/60 leading-relaxed">
            <span className="font-semibold text-white block mb-1">Editorial & Market Pricing Disclaimer:</span>
            Lasalgaon Asia's Largest Onion Market provides independent agricultural journalism, educational guides, and historical market analyses. Daily wholesale commodity prices and arrival volumes are subject to rapid intraday fluctuations at APMC Lasalgaon. Readers must verify live commercial transaction rates through official statutory portals (Agmarknet / MSAMB) before executing trade commitments.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} Lasalgaon Asia's Largest Onion Market. All rights reserved. Published for agricultural education and research.
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => onNavigate('/sitemap')} className="hover:text-white transition-colors">
                XML / HTML Sitemap
              </button>
              <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition-colors">
                Editorial Policy & Privacy
              </button>
              <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                Contact Desk
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
