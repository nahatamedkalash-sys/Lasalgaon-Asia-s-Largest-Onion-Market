import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PriceSeasonalityExplorer } from '../components/PriceSeasonalityExplorer';
import { TrendingUp, AlertCircle, ExternalLink, ShieldAlert, ArrowRight, BarChart3 } from 'lucide-react';

interface MarketPricesPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const MarketPricesPage: React.FC<MarketPricesPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Lasalgaon Onion Prices: Understanding Daily Rates & Market Intelligence"
        description="Educational guide to Lasalgaon onion market prices: how modal rates are formed, seasonal arrival impacts, quality parameters, and official Agmarknet verification."
        canonicalPath="/market-prices"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Market Prices & Trends', url: '/market-prices' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <TrendingUp className="w-4 h-4 text-[#D9A441]" />
            <span>Agricultural Economics & Verification Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            Lasalgaon Onion Prices: How Daily Rates Are Determined
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            Deconstructing modal prices, quality premiums, seasonal arrival shifts, and how to access certified statutory market price records.
          </p>
        </header>

        {/* Responsible Data Notification (Mandatory Transparency) */}
        <div className="p-5 rounded-lg bg-[#FAF8F2] border border-[#D9A441] flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[#252B27] font-sans leading-relaxed">
            <strong className="font-serif font-bold text-[#174D35] block">
              Official Price Verification Protocol:
            </strong>
            Commodity prices at Lasalgaon APMC fluctuate on an hourly basis based on real-time vehicle arrivals, moisture grades, and buyer competition. In compliance with strict journalistic standards, the Chronicle does not publish unverified or simulated live quotes. To review certified daily modal rates and official arrivals, always consult the Government of India&apos;s Agmarknet portal.
          </div>
        </div>

        {/* Interactive Matrix */}
        <PriceSeasonalityExplorer />

        {/* Price Determinants Breakdown */}
        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              Understanding Minimum, Maximum, and Modal Prices
            </h2>
            <p>
              In wholesale agricultural reporting, headlines frequently highlight extreme numbers—such as a single record-setting export lot commanding ₹4,500/quintal, or damaged lots clearing at ₹600/quintal.
            </p>
            <p>
              For economic evaluation, the <strong>Modal Price</strong> is the only meaningful statistic. It represents the exact price point at which the highest cumulative volume of onions changed hands on that trading day. If 20,000 quintals traded between ₹1,800 and ₹2,200, the modal price captures that dense trading center, filtering out unrepresentative outliers.
            </p>
          </section>

          {/* Official Verification Guide */}
          <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#174D35]">
              How to Check Official Daily Lasalgaon Mandi Rates on Agmarknet
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#575E59]">
              <li>
                Visit the official Agmarknet portal at{' '}
                <a
                  href="https://agmarknet.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#174D35] font-semibold underline"
                >
                  agmarknet.gov.in
                </a>
                .
              </li>
              <li>Under &quot;Market Wise / Commodity Wise Daily Report,&quot; select <strong>Commodity: Onion</strong>.</li>
              <li>Select <strong>State: Maharashtra</strong> and <strong>District: Nashik</strong>.</li>
              <li>Choose <strong>Market: Lasalgaon</strong> (or sub-yards: Lasalgaon-Vinchur / Lasalgaon-Niphad).</li>
              <li>Click &quot;Retrieve Data&quot; to review the official daily returns showing total arrival tonnage, minimum, maximum, and modal clearing rates.</li>
            </ol>
            <div className="pt-2">
              <a
                href="https://agmarknet.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors"
              >
                <span>Launch Official Agmarknet Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('lasalgaon-onion-prices')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Full Report: What Determines Daily Onion Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectArticle('onion-price-fluctuations')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <span>Explore Price Fluctuations & Cobweb Cycles</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
