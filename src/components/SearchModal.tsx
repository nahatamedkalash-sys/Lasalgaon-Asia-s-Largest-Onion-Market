import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = useMemo(() => {
    if (!query.trim() && selectedCategory === 'all') {
      return ARTICLES.slice(0, 5); // Default to first 5
    }

    const q = query.toLowerCase().trim();
    return ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === 'all' || art.categorySlug === selectedCategory;

      if (!matchesCategory) return false;

      if (!q) return true;

      const titleMatch = art.title.toLowerCase().includes(q);
      const subtitleMatch = art.subtitle.toLowerCase().includes(q);
      const kwMatch =
        art.targetKeyword.toLowerCase().includes(q) ||
        art.secondaryKeywords.some((k) => k.toLowerCase().includes(q));
      const takeawayMatch = art.keyTakeaways.some((t) => t.toLowerCase().includes(q));
      const contentMatch = art.contentSections.some((s) =>
        s.paragraphs.some((p) => p.toLowerCase().includes(q))
      );

      return titleMatch || subtitleMatch || kwMatch || takeawayMatch || contentMatch;
    });
  }, [query, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:p-10">
      <div
        className="bg-[#F8F5ED] rounded-lg shadow-2xl border border-[#E8E2D2] w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E2D2] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#174D35]" />
          <input
            type="text"
            placeholder="Search articles, auction guides, prices, storage, research..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base sm:text-lg text-[#252B27] placeholder:text-[#575E59]/60 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#575E59] hover:text-[#252B27]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-[#575E59] hover:text-[#174D35] ml-2 px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Category Pills Bar (interactive filter controls permitted as buttons) */}
        <div className="px-4 py-2.5 bg-[#FAF8F2] border-b border-[#E8E2D2] flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[#575E59] font-medium shrink-0">Filter:</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#174D35] text-white font-medium'
                : 'text-[#252B27] hover:bg-[#E8E2D2]'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setSelectedCategory('market-trade')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'market-trade'
                ? 'bg-[#174D35] text-white font-medium'
                : 'text-[#252B27] hover:bg-[#E8E2D2]'
            }`}
          >
            Market & Trade
          </button>
          <button
            onClick={() => setSelectedCategory('farming-ag')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'farming-ag'
                ? 'bg-[#174D35] text-white font-medium'
                : 'text-[#252B27] hover:bg-[#E8E2D2]'
            }`}
          >
            Farming & Ag
          </button>
          <button
            onClick={() => setSelectedCategory('storage-post-harvest')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'storage-post-harvest'
                ? 'bg-[#174D35] text-white font-medium'
                : 'text-[#252B27] hover:bg-[#E8E2D2]'
            }`}
          >
            Storage & Post-Harvest
          </button>
          <button
            onClick={() => setSelectedCategory('exports-economics')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'exports-economics'
                ? 'bg-[#174D35] text-white font-medium'
                : 'text-[#252B27] hover:bg-[#E8E2D2]'
            }`}
          >
            Exports
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#575E59] px-1">
            {query ? `Found ${filteredArticles.length} matching reports` : 'Suggested Reading'}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 px-4 text-[#575E59]">
              <p className="font-serif text-lg text-[#252B27]">No agricultural reports matched your search.</p>
              <p className="text-xs mt-1">Try querying &quot;mandi&quot;, &quot;Rabi&quot;, &quot;NHRDF&quot;, &quot;storage&quot;, or &quot;auction&quot;.</p>
            </div>
          ) : (
            filteredArticles.map((art) => (
              <button
                key={art.slug}
                onClick={() => {
                  onSelectArticle(art.slug);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-md bg-white border border-[#E8E2D2] hover:border-[#174D35] hover:shadow-xs transition-all flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1">
                  {/* Clean unboxed metadata (zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#713B67] font-medium">
                    <span>{art.category}</span>
                    <span aria-hidden="true" className="text-[#575E59]">·</span>
                    <span className="text-[#575E59]">{art.readingTime}</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#174D35] group-hover:text-[#0f3424] transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#575E59] line-clamp-2 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#174D35]/5 flex items-center justify-center text-[#174D35] shrink-0 mt-1 group-hover:bg-[#174D35] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-3 bg-[#FAF8F2] border-t border-[#E8E2D2] flex items-center justify-between text-xs text-[#575E59]">
          <span>Full index of 10 verified editorial articles</span>
          <button
            onClick={() => {
              onSelectArticle('');
              onClose();
            }}
            className="text-[#174D35] font-semibold hover:underline"
          >
            Browse all articles archive →
          </button>
        </div>
      </div>
    </div>
  );
};
