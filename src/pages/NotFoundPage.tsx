import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, Search, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenSearch }) => {
  return (
    <>
      <SEOHead
        title="404 Page Not Found | Lasalgaon Asia's Largest Onion Market"
        description="The requested agricultural report or mandi page could not be located on Lasalgaon Asia's Largest Onion Market."
        canonicalPath="/404"
      />

      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <span className="font-serif text-6xl sm:text-7xl font-bold text-[#174D35] block">
          404
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#252B27]">
          Report or Page Not Found
        </h1>

        <p className="text-sm text-[#575E59] font-sans max-w-md mx-auto leading-relaxed">
          The allium dossier or archive section you are looking for may have been relocated or updated under our canonical editorial index.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Front Page</span>
          </button>
          <button
            onClick={onOpenSearch}
            className="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#713B67]" />
            <span>Search All 10 Reports</span>
          </button>
        </div>
      </div>
    </>
  );
};
