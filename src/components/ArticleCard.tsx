import React from 'react';
import { Article } from '../types';
import { CustomImage } from './CustomImage';
import { Bookmark, Clock, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  isSaved?: boolean;
  onToggleSave?: (slug: string, e: React.MouseEvent) => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isSaved = false,
  onToggleSave,
  variant = 'standard',
}) => {
  if (variant === 'featured') {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group cursor-pointer bg-white rounded-lg border border-[#E8E2D2] hover:border-[#174D35] transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md"
      >
        <div className="lg:col-span-7 relative overflow-hidden bg-[#174D35]/10 h-full">
          <CustomImage
            src={article.heroImage}
            alt={article.imageAlt}
            aspectRatio="16:9"
            priority={false}
            className="group-hover:scale-102 transition-transform duration-500"
            containerClassName="h-full rounded-none border-0"
          />
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Clean unboxed metadata (NO PILLS) */}
            <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#713B67]">
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider font-semibold">{article.category}</span>
                <span aria-hidden="true" className="text-[#575E59]">·</span>
                <span className="text-[#575E59]">{article.readingTime}</span>
              </div>
              {onToggleSave && (
                <button
                  type="button"
                  onClick={(e) => onToggleSave(article.slug, e)}
                  title={isSaved ? 'Remove Bookmark' : 'Save Article'}
                  className="p-1 text-[#575E59] hover:text-[#713B67] transition-colors"
                >
                  <Bookmark
                    className={`w-4 h-4 ${isSaved ? 'fill-[#713B67] text-[#713B67]' : ''}`}
                  />
                </button>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#174D35] group-hover:text-[#0f3424] transition-colors leading-tight">
              {article.title}
            </h3>

            <p className="text-sm text-[#575E59] leading-relaxed line-clamp-3 font-sans">
              {article.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs text-[#575E59]">
            <div className="flex flex-col">
              <span className="font-semibold text-[#252B27]">{article.author.name}</span>
              <span className="text-[11px]">{article.publishedDate}</span>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-[#174D35] group-hover:translate-x-0.5 transition-transform">
              Read Report <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group cursor-pointer p-4 bg-white rounded-lg border border-[#E8E2D2] hover:border-[#174D35] transition-all flex flex-col justify-between space-y-3"
      >
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#713B67] font-medium">
            <span>{article.category}</span>
            <span className="text-[#575E59]">{article.readingTime}</span>
          </div>
          <h4 className="font-serif text-base font-bold text-[#174D35] group-hover:text-[#0f3424] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h4>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#E8E2D2] text-[11px] text-[#575E59]">
          <span>{article.publishedDate}</span>
          <span className="font-semibold text-[#174D35] flex items-center gap-1">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </article>
    );
  }

  // Standard Variant
  return (
    <article
      onClick={() => onSelect(article.slug)}
      className="group cursor-pointer bg-white rounded-lg border border-[#E8E2D2] hover:border-[#174D35] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
    >
      <div>
        <div className="relative overflow-hidden bg-[#174D35]/10">
          <CustomImage
            src={article.heroImage}
            alt={article.imageAlt}
            aspectRatio="16:9"
            priority={false}
            className="group-hover:scale-103 transition-transform duration-500"
            containerClassName="rounded-t-lg rounded-b-none border-0 border-b border-[#E8E2D2]"
          />
        </div>

        <div className="p-5 space-y-2.5">
          {/* Clean unboxed metadata */}
          <div className="flex items-center justify-between text-xs font-medium text-[#713B67]">
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-wider font-semibold">{article.category}</span>
              <span aria-hidden="true" className="text-[#575E59]">·</span>
              <span className="text-[#575E59]">{article.readingTime}</span>
            </div>
            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => onToggleSave(article.slug, e)}
                title={isSaved ? 'Remove Bookmark' : 'Save Article'}
                className="p-1 text-[#575E59] hover:text-[#713B67] transition-colors"
              >
                <Bookmark
                  className={`w-4 h-4 ${isSaved ? 'fill-[#713B67] text-[#713B67]' : ''}`}
                />
              </button>
            )}
          </div>

          <h3 className="font-serif text-lg font-bold text-[#174D35] group-hover:text-[#0f3424] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed line-clamp-2 font-sans">
            {article.subtitle}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-[#E8E2D2] flex items-center justify-between text-xs text-[#575E59]">
        <span>{article.author.name}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#174D35] group-hover:translate-x-0.5 transition-transform">
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
