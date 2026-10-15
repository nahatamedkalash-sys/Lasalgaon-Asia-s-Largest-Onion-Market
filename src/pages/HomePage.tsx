import React from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { PriceSeasonalityExplorer } from '../components/PriceSeasonalityExplorer';
import { NewsletterSection } from '../components/NewsletterSection';
import { NewsletterModal } from '../components/NewsletterModal';
import { useNewsletterModal } from '../hooks/useNewsletterModal';
import { CustomImage } from '../components/CustomImage';
import {
  TrendingUp,
  Award,
  Layers,
  ArrowRight,
  Shield,
  Building2,
  Wheat,
  Warehouse,
  Microscope,
  Globe2,
  Mail,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string, e: React.MouseEvent) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectArticle,
  savedSlugs,
  onToggleSave,
}) => {
  const featuredArticles = ARTICLES.filter((a) => a.featured).slice(0, 3);
  const latestArticles = ARTICLES.slice(3, 9);

  // Hook-controlled newsletter popup
  const {
    isOpen: isNewsletterOpen,
    isSubscribed,
    openModal: openNewsletterModal,
    closeModal: closeNewsletterModal,
    markAsSubscribed,
  } = useNewsletterModal({
    autoTriggerDelayMs: 6500,
    scrollPercentageTrigger: 35,
    enableAutoTrigger: true,
  });

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* A. Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden bg-[#0f3424]">
        {/* Background photo with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/lasalgaon_landscape_cultivation.jpg"
            alt="Vast onion cultivation landscape in Lasalgaon, Nashik district, Maharashtra"
            className="w-full h-full object-cover opacity-35"
          />
          {/* Subtle gradient scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3424] via-[#0f3424]/85 to-[#0f3424]/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          {/* Unboxed kicker (zero-pill discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D9A441]">
            <span>Niphad Taluka, Nashik District</span>
            <span aria-hidden="true">·</span>
            <span>GI Tagged (2023)</span>
            <span aria-hidden="true">·</span>
            <span>Asia&apos;s Benchmark Mandi</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Inside Lasalgaon: The Heart of India&apos;s Onion Trade
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#F8F5ED]/90 max-w-3xl mx-auto font-sans leading-relaxed">
            From the volcanic basalt soils of Niphad to dining tables across South Asia and the Gulf, explore the verified auction mechanics, post-harvest science, and economic policies anchoring Asia&apos;s largest onion marketplace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/blog')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#D9A441] hover:bg-[#b8852c] text-[#252B27] font-semibold text-sm rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore All 10 Reports</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/market-auction-system')}
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-semibold text-sm rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discover the Auction System</span>
            </button>
          </div>

          {/* Operational Fact Strip (no fake live prices, strictly verified structural metrics) */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-white/15 max-w-4xl mx-auto">
            <div>
              <span className="block text-xl sm:text-2xl font-bold font-serif text-[#D9A441]">2.5 – 3.5L</span>
              <span className="text-xs text-[#F8F5ED]/75 font-sans">Tonnes Traded Annually</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold font-serif text-[#D9A441]">1947</span>
              <span className="text-xs text-[#F8F5ED]/75 font-sans">APMC Regulated Est.</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold font-serif text-[#D9A441]">12% – 14%</span>
              <span className="text-xs text-[#F8F5ED]/75 font-sans">Rabi Dry Matter (TSS)</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold font-serif text-[#D9A441]">65% – 75%</span>
              <span className="text-xs text-[#F8F5ED]/75 font-sans">India&apos;s Export Origin</span>
            </div>
          </div>
        </div>
      </section>

      {/* B. Market Insights Section (Educational & Historical) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block">
            Agricultural Market Intelligence
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#174D35]">
            Essential Pillars of the Lasalgaon Marketplace
          </h2>
          <p className="text-sm text-[#575E59] font-sans">
            Independent educational guides deconstructing the physical, economic, and scientific pillars of Asia&apos;s onion trading capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => onSelectArticle('lasalgaon-onion-market')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#174D35]/10 text-[#174D35] flex items-center justify-center group-hover:bg-[#174D35] group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                Understanding the Lasalgaon Market
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Why a rural town in Niphad taluka emerged as Asia’s single largest allium assembly point, handling up to 35,000 quintals in a single day.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>Read Market Overview</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onSelectArticle('lasalgaon-onion-auction-system')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#713B67]/10 text-[#713B67] flex items-center justify-center group-hover:bg-[#713B67] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                The Gadi Auction Process
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Lot-by-lot vehicle inspections, open-outcry bidding in ₹5–₹10 increments, farmer acceptance rights, and computerized weighbridge clearing.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>Explore Auction Steps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onSelectArticle('lasalgaon-onion-prices')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#D9A441]/15 text-[#D9A441] flex items-center justify-center group-hover:bg-[#D9A441] group-hover:text-[#252B27] transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                Onion Prices & Market Trends
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Deconstructing how daily arrivals, bulb moisture, transit freight, and export tariffs dictate minimum, maximum, and modal price clearing rates.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>Deconstruct Price Trends</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => onSelectArticle('onion-storage-techniques')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#174D35]/10 text-[#174D35] flex items-center justify-center group-hover:bg-[#174D35] group-hover:text-white transition-colors">
                <Warehouse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                Storage & Post-Harvest Losses
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                The engineering of traditional and improved Kanda Chawls: raised slatted floors, natural aeration chimneys, and sprout prevention.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>Read Storage Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => onSelectArticle('kanda-kendra-onion-research')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#713B67]/10 text-[#713B67] flex items-center justify-center group-hover:bg-[#713B67] group-hover:text-white transition-colors">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                Kanda Kendra & Research
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Fifty years of breeding by NHRDF Nashik and ICAR-DOGR, developing Agrifound Light Red and the Bhima cultivar series.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>View Scientific Research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6 */}
          <div
            onClick={() => onSelectArticle('indian-onion-exports')}
            className="p-6 rounded-lg bg-white border border-[#E8E2D2] hover:border-[#174D35] transition-all cursor-pointer group shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#D9A441]/15 text-[#D9A441] flex items-center justify-center group-hover:bg-[#D9A441] group-hover:text-[#252B27] transition-colors">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#174D35]">
                Export Supply Chains & APEDA
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
                Logistics corridors connecting Nashik pack-houses to JNPT Port, catering to Middle Eastern, South Asian, and Southeast Asian consumer preferences.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#174D35]">
              <span>Examine Global Trade</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* C. Featured Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8E2D2]">
          <div>
            <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block mb-1">
              Curated Journalism
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35]">
              Featured Investigative Reports
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-semibold text-[#174D35] hover:underline flex items-center gap-1 shrink-0"
          >
            View Complete Archive (10 Articles) <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-6">
          {featuredArticles.map((art, idx) => (
            <ArticleCard
              key={art.slug}
              article={art}
              onSelect={onSelectArticle}
              isSaved={savedSlugs.includes(art.slug)}
              onToggleSave={onToggleSave}
              variant={idx === 0 ? 'featured' : 'standard'}
            />
          ))}
        </div>
      </section>

      {/* Interactive Tool: Price & Seasonality Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceSeasonalityExplorer />
      </section>

      {/* D. Explore by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block">
            Subject Taxonomy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35]">
            Explore by Agricultural Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onNavigate(`/category/${cat.slug}`)}
              className="p-4 rounded-md bg-white border border-[#E8E2D2] hover:border-[#174D35] hover:shadow-xs transition-all text-center flex flex-col items-center justify-center space-y-2 group cursor-pointer"
            >
              <span className="font-serif text-sm font-bold text-[#174D35] group-hover:text-[#713B67] transition-colors">
                {cat.name}
              </span>
              <span className="text-[11px] text-[#575E59] font-sans line-clamp-2">
                {cat.description}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* E. Lasalgaon and its Agricultural Significance */}
      <section className="bg-white border-y border-[#E8E2D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D9A441] uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#D9A441]" />
                <span>Geographical Indication Registry · 2023</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#174D35] leading-tight">
                The Agro-Ecological Significance of Niphad & Lasalgaon
              </h2>

              <p className="text-sm sm:text-base text-[#252B27] leading-relaxed font-sans">
                Located in Maharashtra’s Godavari basin, the Niphad taluka is distinguished by rich Deccan trap volcanic basalt soils. The weathering of these mineral-rich parent rocks yields high native sulfur concentrations, imparting the signature pungency, thick protective outer scales, and prolonged storability that distinguish Lasalgaon Red Onions.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#575E59] font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#174D35]/10 text-[#174D35] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#252B27]">High Dry Matter (TSS 12–14°Brix):</strong> Provides resistance to post-harvest desiccation, enabling multi-month storage without refrigeration.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#174D35]/10 text-[#174D35] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#252B27]">Trunk Railway & Expressway Hub:</strong> Strategic location along Central Railway lines and proximity to Samruddhi Mahamarg and NH-3 enables same-day distribution.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#174D35]/10 text-[#174D35] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#252B27]">Decades of Inter-Generational Breeding:</strong> Cultivars refined over 70 years in collaboration with regional agrarian scientists.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#174D35] hover:text-[#713B67] transition-colors"
                >
                  <span>Read Detailed Lasalgaon Historical & Geographical Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-lg overflow-hidden border border-[#E8E2D2] shadow-sm bg-[#174D35]/5">
                <CustomImage
                  src="/images/lasalgaon_onions_field.jpg"
                  alt="Close-up of matured onion bulb cultivation in Maharashtra"
                  aspectRatio="4:3"
                  className="w-full h-full object-cover"
                  containerClassName="border-0 rounded-none"
                />
                <div className="p-4 bg-[#FAF8F2] border-t border-[#E8E2D2] text-xs text-[#575E59] flex items-center justify-between">
                  <span className="italic font-serif">Niphad Red Onion: 16–17 concentric protective scales</span>
                  <span className="font-sans">GI Class 31 · Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Kanda Kendra / Onion Research Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F2] rounded-lg border border-[#E8E2D2] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block">
                Scientific Infrastructure
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35]">
                Kanda Kendra: The Science Powering the Harvest
              </h2>
              <p className="text-sm text-[#575E59] font-sans leading-relaxed">
                Behind the commerce of Lasalgaon lies an intensive scientific research network spearheaded by the National Horticultural Research and Development Foundation (NHRDF) in Chitegaon/Nashik, ICAR-DOGR in Rajgurunagar, and the Bhabha Atomic Research Centre’s KRUSHAK irradiation station at Lasalgaon.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-sans">
                <div className="p-3 bg-white rounded border border-[#E8E2D2]">
                  <strong className="text-[#174D35] block mb-1">NHRDF Regional Station</strong>
                  <span className="text-[#575E59]">Breeders of Agrifound Light Red and leaders in certified disease-free foundation seed production.</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#E8E2D2]">
                  <strong className="text-[#174D35] block mb-1">KRUSHAK Radiation Unit</strong>
                  <span className="text-[#575E59]">Pioneering commercial gamma irradiation to halt sprouting dormancy break during prolonged storage.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={() => onSelectArticle('kanda-kendra-onion-research')}
                className="w-full sm:w-auto px-6 py-3 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Kanda Kendra Research Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* G. Latest Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-[#E8E2D2]">
          <div>
            <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block mb-1">
              Field Journalism
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D35]">
              Latest Allium Chronicle Reports
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-semibold text-[#174D35] hover:underline flex items-center gap-1 shrink-0"
          >
            All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((art) => (
            <ArticleCard
              key={art.slug}
              article={art}
              onSelect={onSelectArticle}
              isSaved={savedSlugs.includes(art.slug)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </section>

      {/* H. Newsletter Subscription */}
      <NewsletterSection />

      {/* Hook-controlled Newsletter Subscription Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletterModal}
        onSuccess={markAsSubscribed}
        onNavigate={onNavigate}
      />

      {/* Floating Mandi Dispatch Trigger Button */}
      {!isSubscribed && (
        <button
          onClick={openNewsletterModal}
          className="fixed bottom-6 right-6 z-40 bg-[#174D35] hover:bg-[#0f3424] text-white px-4 py-2.5 rounded-full shadow-xl border border-[#D9A441]/40 flex items-center gap-2.5 text-xs font-semibold tracking-wide transition-all hover:scale-105 cursor-pointer group"
          title="Subscribe to Lasalgaon Mandi Intelligence Dispatch"
          aria-label="Open newsletter subscription modal"
        >
          <span className="w-2 h-2 rounded-full bg-[#D9A441] animate-ping" />
          <Mail className="w-4 h-4 text-[#D9A441]" />
          <span className="hidden sm:inline">Mandi Dispatch</span>
        </button>
      )}
    </div>
  );
};
