import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MarketAuctionPage } from './pages/MarketAuctionPage';
import { MarketPricesPage } from './pages/MarketPricesPage';
import { FarmingGuidePage } from './pages/FarmingGuidePage';
import { StoragePostHarvestPage } from './pages/StoragePostHarvestPage';
import { ResearchKandaKendraPage } from './pages/ResearchKandaKendraPage';
import { TradeExportsPage } from './pages/TradeExportsPage';
import { BlogArchivePage } from './pages/BlogArchivePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getArticleBySlug } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('loc_saved_articles') || '[]');
    } catch {
      return [];
    }
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save bookmarks to localStorage
  const handleToggleSave = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedSlugs((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem('loc_saved_articles', JSON.stringify(updated));
      } catch (err) {
        // ignore storage errors
      }
      return updated;
    });
  };

  const handleRemoveSaved = (slug: string) => {
    setSavedSlugs((prev) => {
      const updated = prev.filter((s) => s !== slug);
      try {
        localStorage.setItem('loc_saved_articles', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  // Programmatic navigation
  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectArticle = (slug: string) => {
    if (!slug) {
      navigate('/blog');
    } else {
      navigate(`/blog/${slug}`);
    }
  };

  // Keyboard shortcut for search (Cmd+K or Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsSavedOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Determine current view
  let pageContent: React.ReactNode = null;

  if (currentPath === '/' || currentPath === '') {
    pageContent = (
      <>
        <SEOHead
          title="Lasalgaon Asia's Largest Onion Market"
          description="Independent agricultural journalism, verified auction mechanics, post-harvest storage, and market intelligence on the Lasalgaon onion market in Maharashtra, India — Asia's largest onion market."
          canonicalPath="/"
        />
        <HomePage
          onNavigate={navigate}
          onSelectArticle={selectArticle}
          savedSlugs={savedSlugs}
          onToggleSave={handleToggleSave}
        />
      </>
    );
  } else if (currentPath === '/about') {
    pageContent = <AboutPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/market-auction-system') {
    pageContent = <MarketAuctionPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/market-prices') {
    pageContent = <MarketPricesPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/farming-guide') {
    pageContent = <FarmingGuidePage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/storage-post-harvest') {
    pageContent = <StoragePostHarvestPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/research-kanda-kendra') {
    pageContent = <ResearchKandaKendraPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/trade-exports') {
    pageContent = <TradeExportsPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/blog') {
    pageContent = (
      <BlogArchivePage
        onNavigate={navigate}
        onSelectArticle={selectArticle}
        savedSlugs={savedSlugs}
        onToggleSave={handleToggleSave}
      />
    );
  } else if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '').trim();
    const article = getArticleBySlug(slug);
    if (article) {
      pageContent = (
        <ArticleDetailPage
          slug={slug}
          onNavigate={navigate}
          onSelectArticle={selectArticle}
          savedSlugs={savedSlugs}
          onToggleSave={handleToggleSave}
        />
      );
    } else {
      pageContent = <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }
  } else if (currentPath.startsWith('/category/')) {
    const catSlug = currentPath.replace('/category/', '').trim();
    pageContent = (
      <BlogArchivePage
        onNavigate={navigate}
        onSelectArticle={selectArticle}
        savedSlugs={savedSlugs}
        onToggleSave={handleToggleSave}
        initialCategory={catSlug}
      />
    );
  } else if (currentPath === '/contact') {
    pageContent = <ContactPage />;
  } else if (currentPath === '/sitemap') {
    pageContent = <SitemapPage onNavigate={navigate} onSelectArticle={selectArticle} />;
  } else if (currentPath === '/privacy') {
    pageContent = <PrivacyPolicyPage onNavigate={navigate} />;
  } else {
    pageContent = <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5ED] text-[#252B27] selection:bg-[#713B67] selection:text-white">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedCount={savedSlugs.length}
        onOpenSaved={() => setIsSavedOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {pageContent}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigate} />

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={selectArticle}
      />

      {/* Bookmarks / Saved Articles Modal */}
      <SavedArticlesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedSlugs={savedSlugs}
        onRemoveSaved={handleRemoveSaved}
        onSelectArticle={selectArticle}
      />
    </div>
  );
}
