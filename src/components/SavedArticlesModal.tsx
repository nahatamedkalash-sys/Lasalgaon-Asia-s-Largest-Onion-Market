import React from 'react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types';
import { X, BookOpen, Trash2, ArrowRight } from 'lucide-react';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedSlugs: string[];
  onRemoveSaved: (slug: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedSlugs,
  onRemoveSaved,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => savedSlugs.includes(a.slug));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-[#F8F5ED] rounded-lg shadow-2xl border border-[#E8E2D2] w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-[#E8E2D2] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-[#174D35]">
            <BookOpen className="w-5 h-5 text-[#713B67]" />
            <h3 className="font-serif text-lg font-bold">Saved Reading List ({savedArticles.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#575E59] hover:text-[#252B27] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="text-center py-10 px-4 text-[#575E59]">
              <p className="font-serif text-base text-[#252B27]">Your reading list is currently empty.</p>
              <p className="text-xs mt-1">Click the bookmark icon on any article to save it for offline review.</p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.slug}
                className="p-3.5 rounded-md bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all flex items-start justify-between gap-3"
              >
                <div
                  className="space-y-1 cursor-pointer flex-1"
                  onClick={() => {
                    onSelectArticle(art.slug);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2 text-xs text-[#713B67] font-medium">
                    <span>{art.category}</span>
                    <span aria-hidden="true" className="text-[#575E59]">·</span>
                    <span className="text-[#575E59]">{art.readingTime}</span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#174D35] hover:underline">
                    {art.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1 shrink-0 mt-1">
                  <button
                    onClick={() => onRemoveSaved(art.slug)}
                    title="Remove from saved"
                    className="p-1.5 text-[#575E59] hover:text-red-600 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectArticle(art.slug);
                      onClose();
                    }}
                    title="Read article"
                    className="p-1.5 text-[#174D35] hover:text-[#0f3424] rounded transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-3 bg-[#FAF8F2] border-t border-[#E8E2D2] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#174D35] text-white text-xs font-semibold rounded-md hover:bg-[#0f3424] transition-colors"
          >
            Close List
          </button>
        </div>
      </div>
    </div>
  );
};
