import React, { useState, useMemo } from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';
import { Search, Filter, SlidersHorizontal, BookOpen } from 'lucide-react';

interface BlogArchivePageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string, e: React.MouseEvent) => void;
  initialCategory?: string;
}

export const BlogArchivePage: React.FC<BlogArchivePageProps> = ({
  onNavigate,
  onSelectArticle,
  savedSlugs,
  onToggleSave,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'readTime' | 'title'>('latest');

  const filteredArticles = useMemo(() => {
    let list = [...ARTICLES];

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((a) => a.categorySlug === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) => {
        const titleMatch = a.title.toLowerCase().includes(q);
        const subMatch = a.subtitle.toLowerCase().includes(q);
        const kwMatch =
          a.targetKeyword.toLowerCase().includes(q) ||
          a.secondaryKeywords.some((k) => k.toLowerCase().includes(q));
        const catMatch = a.category.toLowerCase().includes(q);
        return titleMatch || subMatch || kwMatch || catMatch;
      });
    }

    // Sort
    if (sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'readTime') {
      list.sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <SEOHead
        title="Chronicle Archive: Complete Allium Reports & Investigations"
        description="Browse all 10 verified investigative reports on the Lasalgaon onion market, auction mechanics, post-harvest storage, export policies, and breeding science."
        canonicalPath="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Chronicle Articles', url: '/blog' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        {/* Header */}
        <header className="space-y-3 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#713B67] block">
            Agricultural Journalism Repository
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174D35] leading-tight">
            The Lasalgaon Onion Chronicle Archive
          </h1>
          <p className="text-sm sm:text-base text-[#575E59] font-sans leading-relaxed">
            Ten comprehensive, evidence-based reports covering wholesale auction mechanics, agronomic calendars, storage science, trade policy, and agricultural research.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-white rounded-lg border border-[#E8E2D2] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#575E59] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-md bg-[#FAF8F2] border border-[#E8E2D2] text-[#252B27] placeholder:text-[#575E59]/60 focus:outline-none focus:border-[#174D35] font-sans"
              />
            </div>

            {/* Sort Dropdown & Count */}
            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 text-xs font-sans">
              <span className="text-[#575E59]">
                Showing <strong>{filteredArticles.length}</strong> of {ARTICLES.length} reports
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[#575E59]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-2.5 py-1.5 rounded bg-[#FAF8F2] border border-[#E8E2D2] text-[#252B27] text-xs font-sans focus:outline-none cursor-pointer"
                >
                  <option value="latest">Latest Published</option>
                  <option value="readTime">Reading Time</option>
                  <option value="title">Alphabetical (A–Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Buttons (Functional Tabs) */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#E8E2D2] text-xs font-sans no-scrollbar">
            <span className="text-[#575E59] font-medium shrink-0">Discipline:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#174D35] text-white font-semibold'
                  : 'text-[#252B27] hover:bg-[#FAF8F2]'
              }`}
            >
              All Articles ({ARTICLES.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-[#174D35] text-white font-semibold'
                    : 'text-[#252B27] hover:bg-[#FAF8F2]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
            <BookOpen className="w-8 h-8 text-[#575E59] mx-auto opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#174D35]">
              No articles matched your criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#575E59] max-w-md mx-auto">
              Try adjusting your search terms or clearing category filters to view all reports.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#174D35] text-white text-xs font-semibold rounded-md hover:bg-[#0f3424] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <ArticleCard
                key={art.slug}
                article={art}
                onSelect={onSelectArticle}
                isSaved={savedSlugs.includes(art.slug)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
