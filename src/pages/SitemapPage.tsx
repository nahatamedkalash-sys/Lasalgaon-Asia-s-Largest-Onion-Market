import React from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';
import { Network, FileText, ArrowRight, ExternalLink } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const primaryPages = [
    { title: 'Home / Front Page', url: '/', freq: 'Daily', priority: '1.0' },
    { title: 'About Lasalgaon APMC', url: '/about', freq: 'Monthly', priority: '0.9' },
    { title: 'Onion Market & Auction System', url: '/market-auction-system', freq: 'Weekly', priority: '0.9' },
    { title: 'Onion Prices & Market Updates', url: '/market-prices', freq: 'Daily', priority: '0.9' },
    { title: 'Onion Farming & Agriculture Guide', url: '/farming-guide', freq: 'Weekly', priority: '0.9' },
    { title: 'Onion Storage & Post-Harvest', url: '/storage-post-harvest', freq: 'Weekly', priority: '0.9' },
    { title: 'Onion Research & Kanda Kendra', url: '/research-kanda-kendra', freq: 'Weekly', priority: '0.9' },
    { title: 'Onion Trade & Global Exports', url: '/trade-exports', freq: 'Weekly', priority: '0.9' },
    { title: 'Chronicle Articles Archive', url: '/blog', freq: 'Daily', priority: '0.9' },
    { title: 'Contact Editorial Desk', url: '/contact', freq: 'Monthly', priority: '0.7' },
    { title: 'Editorial Policy & Privacy', url: '/privacy', freq: 'Yearly', priority: '0.5' },
  ];

  return (
    <>
      <SEOHead
        title="XML & HTML Sitemap | Lasalgaon Asia's Largest Onion Market"
        description="Comprehensive index of all primary sections, category repositories, and 10 verified investigative reports on the Lasalgaon onion economy."
        canonicalPath="/sitemap"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Sitemap', url: '/sitemap' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Network className="w-4 h-4 text-[#D9A441]" />
            <span>Search Engine Architecture & Crawl Index</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#174D35]">
            Chronicle Site Architecture & Index
          </h1>

          <p className="text-sm text-[#575E59] font-sans leading-relaxed">
            Index of canonical, discoverable resources across the Lasalgaon Onion Chronicle platform.
          </p>
        </header>

        {/* Primary Pages Table */}
        <section className="bg-white rounded-lg border border-[#E8E2D2] p-6 space-y-4">
          <h2 className="font-serif text-lg font-bold text-[#174D35] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D9A441]" />
            <span>Primary Core Sections ({primaryPages.length})</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#FAF8F2] border-b border-[#E8E2D2] text-[#174D35]">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Section / Resource</th>
                  <th className="py-2.5 px-3 font-semibold">Relative Canonical Path</th>
                  <th className="py-2.5 px-3 font-semibold">Change Frequency</th>
                  <th className="py-2.5 px-3 font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D2]">
                {primaryPages.map((page, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F2]/60">
                    <td className="py-2.5 px-3 font-medium text-[#252B27]">
                      <button
                        onClick={() => onNavigate(page.url)}
                        className="text-[#174D35] hover:underline font-semibold text-left"
                      >
                        {page.title}
                      </button>
                    </td>
                    <td className="py-2.5 px-3 text-[#575E59] font-mono">{page.url}</td>
                    <td className="py-2.5 px-3 text-[#575E59]">{page.freq}</td>
                    <td className="py-2.5 px-3 text-[#713B67] font-semibold">{page.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 10 Detailed Articles Index */}
        <section className="bg-white rounded-lg border border-[#E8E2D2] p-6 space-y-4">
          <h2 className="font-serif text-lg font-bold text-[#174D35] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#713B67]" />
            <span>All 10 Canonical Agricultural Reports</span>
          </h2>

          <div className="divide-y divide-[#E8E2D2]">
            {ARTICLES.map((art, idx) => (
              <div
                key={art.slug}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAF8F2]/60 px-2 rounded transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-[#713B67]">
                    <span>Report #{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.category}</span>
                  </div>
                  <button
                    onClick={() => onSelectArticle(art.slug)}
                    className="font-serif text-sm font-bold text-[#174D35] hover:underline text-left block"
                  >
                    {art.title}
                  </button>
                  <span className="text-xs text-[#575E59] font-mono">/blog/{art.slug}</span>
                </div>

                <button
                  onClick={() => onSelectArticle(art.slug)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#174D35] hover:text-[#713B67] shrink-0"
                >
                  <span>Read Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
