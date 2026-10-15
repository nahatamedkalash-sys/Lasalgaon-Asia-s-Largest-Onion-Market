import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES, getArticleBySlug } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { ResilientImage } from '../components/ResilientImage';
import { CustomImage } from '../components/CustomImage';
import { SEOHead } from '../components/SEOHead';
import {
  Bookmark,
  Share2,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Printer,
  Copy,
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string, e: React.MouseEvent) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
  onSelectArticle,
  savedSlugs,
  onToggleSave,
}) => {
  const article = getArticleBySlug(slug) || ARTICLES[0];
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-base');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Copy link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isSaved = savedSlugs.includes(article.slug);

  const relatedArticles = article.relatedArticleSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => !!a);

  return (
    <>
      {/* Dynamic SEO Tags and Structured Data */}
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalPath={`/blog/${article.slug}`}
        ogType="article"
        articleData={article}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Chronicle Articles', url: '/blog' },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
      />

      {/* Reading Progress Indicator */}
      <div
        className="fixed top-18 left-0 right-0 h-1 bg-[#D9A441] z-30 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb Navigation & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E8E2D2] text-xs font-sans text-[#575E59]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center gap-1.5 hover:text-[#174D35] transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Chronicle Archive</span>
            </button>
            <span aria-hidden="true">/</span>
            <button
              onClick={() => onNavigate(`/category/${article.categorySlug}`)}
              className="hover:text-[#174D35] transition-colors"
            >
              {article.category}
            </button>
          </div>

          {/* Reading Accessibility & Bookmark Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-[#E8E2D2]">
              <span className="text-[11px] text-[#575E59] mr-1">Type:</span>
              <button
                onClick={() => setFontSizeClass('text-base')}
                className={`px-1.5 text-xs font-serif ${fontSizeClass === 'text-base' ? 'font-bold text-[#174D35]' : 'text-[#575E59]'}`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeClass('text-lg')}
                className={`px-1.5 text-sm font-serif ${fontSizeClass === 'text-lg' ? 'font-bold text-[#174D35]' : 'text-[#575E59]'}`}
                title="Larger text size"
              >
                A+
              </button>
            </div>

            <button
              onClick={(e) => onToggleSave(article.slug, e)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E8E2D2] hover:border-[#174D35] rounded text-xs text-[#252B27] font-medium transition-colors"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#713B67] text-[#713B67]' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E8E2D2] hover:border-[#174D35] rounded text-xs text-[#252B27] font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="pt-8 pb-6 space-y-4">
          {/* Category kicker (zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-[#575E59]">·</span>
            <span>Target Keyword: {article.targetKeyword}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174D35] leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author, Date, Reading Time Metadata (Unboxed text with separators) */}
          <div className="pt-4 border-t border-[#E8E2D2] flex flex-wrap items-center justify-between gap-4 text-xs text-[#575E59] font-sans">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#174D35]/15 text-[#174D35] flex items-center justify-center font-serif font-bold text-sm">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-semibold text-[#252B27] block text-sm">{article.author.name}</span>
                <span className="text-[11px] text-[#575E59]">{article.author.role} · {article.author.affiliation}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published {article.publishedDate}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image with CLS Optimization & Blur-up Transition */}
        <div className="my-6">
          <CustomImage
            src={article.heroImage}
            alt={article.imageAlt}
            caption={article.imageCaption}
            credit={article.imageCredit}
            sourceUrl={article.imageSourcePage}
            license={article.imageLicense}
            isAuthenticLasalgaon={article.isAuthenticLasalgaon}
            aspectRatio="16:9"
            priority={true}
          />
        </div>

        {/* Key Takeaways Box (Institutional Callout) */}
        <section className="my-8 p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2]">
          <h2 className="font-serif text-base font-bold text-[#174D35] uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D9A441]" />
            <span>Key Agronomic & Market Takeaways</span>
          </h2>
          <ul className="space-y-2.5 text-sm font-sans text-[#252B27]">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-[#D9A441] font-bold mt-0.5">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Table of Contents */}
        <nav
          aria-label="Table of Contents"
          className="my-8 p-5 bg-white rounded-lg border border-[#E8E2D2] text-sm font-sans"
        >
          <span className="text-xs uppercase tracking-wider font-semibold text-[#713B67] block mb-3">
            Table of Contents
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {article.tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setActiveTocId(item.id);
                  }
                }}
                className={`py-1.5 px-2 rounded hover:bg-[#FAF8F2] hover:text-[#174D35] transition-colors truncate ${
                  activeTocId === item.id ? 'font-bold text-[#174D35] bg-[#174D35]/5' : 'text-[#575E59]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Article Body Sections */}
        <div className={`space-y-10 text-[#252B27] font-sans leading-relaxed ${fontSizeClass}`}>
          {article.contentSections.map((section, sIdx) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35] pt-4 border-t border-[#E8E2D2]">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className={`leading-relaxed text-[#252B27] ${
                    sIdx === 0 && pIdx === 0 ? 'dropcap text-base sm:text-lg' : ''
                  }`}
                >
                  {p}
                </p>
              ))}

              {/* Section Inline Image if present with lazy loading & blur-up */}
              {section.image && (
                <div className="my-6">
                  <CustomImage
                    src={section.image.src}
                    alt={section.image.alt}
                    caption={section.image.caption}
                    credit={section.image.credit}
                    sourceUrl={section.image.sourceUrl}
                    license={section.image.license}
                    isAuthenticLasalgaon={section.image.isAuthenticLasalgaon}
                    aspectRatio="16:9"
                    priority={false}
                  />
                </div>
              )}

              {/* Callout if present */}
              {section.callout && (
                <aside className="my-6 p-5 rounded-md bg-[#FAF8F2] border border-[#E8E2D2]">
                  <strong className="font-serif text-sm font-bold text-[#174D35] block mb-1">
                    {section.callout.title}
                  </strong>
                  <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                    {section.callout.text}
                  </p>
                </aside>
              )}

              {/* Table if present */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-md border border-[#E8E2D2] bg-white">
                  {section.table.caption && (
                    <div className="px-4 py-2.5 bg-[#FAF8F2] border-b border-[#E8E2D2] text-xs font-serif font-semibold text-[#174D35]">
                      {section.table.caption}
                    </div>
                  )}
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#FAF8F2] border-b border-[#E8E2D2] text-[#174D35]">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E2D2]">
                      {section.table.rows.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#FAF8F2]/60">
                          {r.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2.5 text-[#252B27]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Pull quote if present */}
              {section.quote && (
                <blockquote className="my-8 py-6 px-4 sm:px-8 border-y border-[#E8E2D2] bg-[#FAF8F2]/40 text-center space-y-2">
                  <p className="font-serif italic text-lg sm:text-xl text-[#174D35] leading-relaxed">
                    &ldquo;{section.quote.text}&rdquo;
                  </p>
                  <cite className="block text-xs uppercase tracking-wider font-semibold text-[#713B67] not-italic">
                    — {section.quote.attribution}
                  </cite>
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Frequently Asked Questions Accordion */}
        {article.faqs && article.faqs.length > 0 && (
          <section id="frequently-asked-questions" className="my-12 pt-8 border-t border-[#E8E2D2] scroll-mt-24">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#713B67] block">
                Answer Engine Optimization
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#174D35]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-md border border-[#E8E2D2] bg-white overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#174D35] hover:bg-[#FAF8F2] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#713B67] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#575E59] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed border-t border-[#E8E2D2]/50 bg-[#FAF8F2]/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* References & Fact-Checking Sources */}
        {article.references && article.references.length > 0 && (
          <section className="my-10 p-6 bg-[#FAF8F2] rounded-lg border border-[#E8E2D2]">
            <h3 className="font-serif text-sm font-bold text-[#174D35] uppercase tracking-wider mb-3">
              Verified Scientific & Institutional References
            </h3>
            <ul className="space-y-2 text-xs font-sans text-[#575E59]">
              {article.references.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#174D35] font-bold">[{idx + 1}]</span>
                  <div>
                    <span className="font-medium text-[#252B27]">{ref.title}</span>
                    <span className="block text-[11px] text-[#575E59]">
                      {ref.institution} {ref.year ? `(${ref.year})` : ''}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Share & Bookmark Bottom Strip */}
        <div className="my-8 py-4 border-y border-[#E8E2D2] flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="text-[#575E59]">Share this research report:</span>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] rounded font-medium text-[#252B27] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#174D35]" />
              <span>{copied ? 'URL Copied!' : 'Copy Permanent Link'}</span>
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] rounded font-medium text-[#252B27] flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-[#575E59]" />
            <span>Print Report</span>
          </button>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="my-12 pt-8 border-t border-[#E8E2D2]">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#174D35] mb-6">
              Related Chronicle Investigations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map((rel) => (
                <ArticleCard
                  key={rel.slug}
                  article={rel}
                  onSelect={onSelectArticle}
                  isSaved={savedSlugs.includes(rel.slug)}
                  onToggleSave={onToggleSave}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
};
