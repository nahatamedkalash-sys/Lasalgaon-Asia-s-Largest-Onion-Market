import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  savedCount,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Market & Auction', path: '/market-auction-system' },
    { label: 'Prices & Trends', path: '/market-prices' },
    { label: 'Farming & Storage', path: '/storage-post-harvest' },
    { label: 'Articles', path: '/blog' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5ED]/95 backdrop-blur-md border-b border-[#E8E2D2]">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with authentic onion emblem */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-md bg-[#174D35] flex items-center justify-center text-[#D9A441] shadow-xs group-hover:bg-[#0f3424] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                <path d="M16 3C13 7 7 14 7 20a9 9 0 0 0 18 0c0-6-6-13-9-17z" />
                <path d="M16 7c-2 3-5 8-5 13a5 5 0 0 0 10 0c0-5-3-10-5-13z" fill="#D9A441" opacity="0.8" />
                <path stroke="#F8F5ED" strokeWidth="2" strokeLinecap="round" d="M16 3V1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#174D35] leading-none whitespace-nowrap">
                Lasalgaon
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#713B67] font-semibold mt-1">
                Asia&apos;s Largest Onion Market
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 clean single-line nav links with hover underline */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252B27]">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#174D35] ${
                  isActive ? 'text-[#174D35] font-semibold' : 'text-[#252B27]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174D35] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          {savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#713B67] bg-[#713B67]/10 hover:bg-[#713B67]/15 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="View Bookmarked Articles"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Saved ({savedCount})</span>
            </button>
          )}

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-medium text-white bg-[#174D35] hover:bg-[#0f3424] rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search Mandi Intelligence</span>
            <span className="sm:hidden">Search</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#252B27] hover:text-[#174D35] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-b border-[#E8E2D2] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-3 py-2 text-base font-serif rounded-md transition-colors ${
                  isActive
                    ? 'bg-[#174D35]/10 text-[#174D35] font-semibold'
                    : 'text-[#252B27] hover:bg-black/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#E8E2D2] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#174D35] bg-[#174D35]/10 rounded-md"
            >
              <Search className="w-4 h-4" />
              <span>Search All 10 Chronicle Articles</span>
            </button>
            {savedCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSaved();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#713B67] bg-[#713B67]/10 rounded-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>Reading List ({savedCount} Saved)</span>
              </button>
            )}
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full text-left px-3 py-2 text-sm text-[#575E59] hover:text-[#174D35]"
            >
              Contact Editorial Desk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
