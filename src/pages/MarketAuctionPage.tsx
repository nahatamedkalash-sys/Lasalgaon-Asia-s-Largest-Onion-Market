import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { Layers, CheckCircle2, AlertTriangle, ArrowRight, Clock, ShieldCheck, Scale } from 'lucide-react';

interface MarketAuctionPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const MarketAuctionPage: React.FC<MarketAuctionPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Lasalgaon Onion Auction System: Complete APMC Operational Breakdown"
        description="Comprehensive guide to the Lasalgaon APMC onion auction: vehicle queueing, Gadi open-outcry bidding, electronic weighment, and farmer payment clearance."
        canonicalPath="/market-auction-system"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Market & Auction System', url: '/market-auction-system' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Layers className="w-4 h-4 text-[#D9A441]" />
            <span>Operational APMC Mandi Architecture</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            How the Lasalgaon Onion Auction Operates
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            Step-by-step documentation of vehicle arrival, sample lot inspection, competitive open-outcry bidding, certified weighment, and statutory financial settlement.
          </p>
        </header>

        {/* Feature Visual */}
        <ResilientImage
          src="/images/koyambedu_onion_auction_lots.jpg"
          alt="Wholesale agricultural market trading platform showing onion arrivals and auction lots"
          caption="Wholesale agricultural market auction platform where lots are inspected by prospective bidders before open outcry."
          credit="McKay Savage"
          license="CC BY 2.0"
          sourceUrl="https://commons.wikimedia.org/wiki/File:India_-_Koyambedu_Market_-_Onions_10_(3986292991).jpg"
          aspectRatio="16:9"
        />

        {/* Chronological Auction Steps */}
        <div className="space-y-10 text-[#252B27] font-sans">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              The 6-Phase Daily Auction Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
              Every trading day at Lasalgaon APMC follows a statutory operational rhythm mandated under the Maharashtra Agricultural Produce Marketing (Development and Regulation) Act.
            </p>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#174D35] text-[#D9A441] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Midnight Arrival & Gate Entry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Tractor trolleys and pickup vehicles arrive between 1:00 AM and 7:00 AM. APMC gate wardens issue entry tokens recording vehicle registration, farmer name, and estimated lot tonnage, directing vehicles into designated auction bays.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#174D35] text-[#D9A441] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  The &quot;Gadi&quot; Sample Inspection
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Produce is auctioned directly from vehicle beds (Gadi auction). Commission agents and licensed wholesale buyers climb onto the truck bed to inspect core dryness, bulb diameter uniformity, and absence of rotting culls.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#713B67] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Open-Outcry Bidding
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                The APMC auction clerk initiates bids. Competing buyers call out bids in ₹5 to ₹20 per quintal increments. Unlike historical secret cloth negotiations, all bids are vocal, transparent, and witnessed by the grower.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#713B67] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  04
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Farmer Acceptance Right
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                When bidding peaks, the clerk asks the farmer for confirmation. The farmer retains statutory right to accept or reject (&quot;Sauda Manzoor / Na-Manzoor&quot;) without incurring any penalty or lot fee.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D9A441] text-[#252B27] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  05
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Certified Weighbridge (Kanta)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Sold vehicles move to APMC certified electronic weighbridges (Kanta) or standardized scale points. Produce is bagged into breathable 40kg/50kg mesh bags with authorized tare weight deductions.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D9A441] text-[#252B27] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  06
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Same-Day Financial Settlement
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                By late afternoon, the Kaccha Adatya calculates the net payable amount and issues a statutory payment voucher. Under APMC bylaws, payment is settled directly into the farmer’s bank account or through certified cheque.
              </p>
            </div>
          </div>

          {/* Statutory Protection Callout */}
          <div className="p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174D35]">
              <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
              <span>Statutory Producer Safeguards</span>
            </div>
            <p className="text-xs sm:text-sm text-[#252B27] leading-relaxed">
              APMC regulations prohibit private off-yard transactions, unrecorded cash discounts, or unilateral tare weight deductions. Dispute resolution benches convened by the APMC Secretary arbitrate lot disagreements on the same day.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('lasalgaon-onion-auction-system')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Investigative Report: Auction Mechanics in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/market-prices')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors"
            >
              <span>Understand How Daily Prices Are Formed</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
