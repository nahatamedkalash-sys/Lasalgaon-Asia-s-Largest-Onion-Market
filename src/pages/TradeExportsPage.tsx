import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { Globe2, Ship, Truck, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

interface TradeExportsPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const TradeExportsPage: React.FC<TradeExportsPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Indian Onion Exports: From Lasalgaon to Global Consignments"
        description="Comprehensive overview of Indian onion exports: Nashik supply corridors to the Gulf and Southeast Asia, APEDA grading standards, and export policy mechanisms."
        canonicalPath="/trade-exports"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Onion Trade & Exports', url: '/trade-exports' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Globe2 className="w-4 h-4 text-[#D9A441]" />
            <span>International Trade Logistics & Policy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            From Lasalgaon to Global Markets: Indian Onion Exports
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            How Nashik&apos;s allium belt supplies 70% of India&apos;s export shipments across the Persian Gulf, South Asia, and Southeast Asia.
          </p>
        </header>

        <ResilientImage
          src="/images/interstate_vegetable_truck.jpg"
          alt="Heavy commercial freight truck transporting bagged agricultural produce from wholesale mandi"
          caption="Commercial freight trucks staging and transporting bagged onions from Nashik assembly mandis to JNPT sea port container terminals."
          credit="Jorge Royan"
          license="CC BY-SA 3.0"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Eicher_Truck_at_Azadpur_Vegetable_Market.jpg"
          aspectRatio="16:9"
        />

        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              The International Supply Highway
            </h2>
            <p>
              India is the world&apos;s second largest producer of onions and regularly ranks as the first or second largest global exporter by volume, shipping between 1.5 and 2.5 million metric tonnes annually. The core export processing strip is concentrated along the Niphad–Pimpalgaon–Lasalgaon corridor in Nashik.
            </p>
            <p>
              The natural high dry matter (12%–14%), dense multi-layer outer skins, and intense pungency of the GI-tagged Lasalgaon red onion allow consignments to endure 10 to 20 days of maritime sea freight to the Middle East and Southeast Asia without rotting or premature sprouting.
            </p>
          </section>

          {/* Regional Market Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <span className="font-serif text-base font-bold text-[#174D35] block">Gulf / Middle East</span>
              <p className="text-xs text-[#575E59] leading-relaxed">
                UAE, Saudi Arabia, Qatar, Oman, and Kuwait prefer medium bulbs (45–55mm), bright red colour, packed in 5kg, 10kg, and 20kg mesh bags.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <span className="font-serif text-base font-bold text-[#174D35] block">South Asia</span>
              <p className="text-xs text-[#575E59] leading-relaxed">
                Bangladesh, Sri Lanka, and Nepal represent massive volume consumers, taking both rail rake and road freight via land customs ports.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <span className="font-serif text-base font-bold text-[#174D35] block">Southeast Asia</span>
              <p className="text-xs text-[#575E59] leading-relaxed">
                Malaysia, Singapore, and Indonesia import large bulbs (55–65mm) suited for commercial restaurants, foodservice, and institutional catering.
              </p>
            </div>
          </div>

          {/* Trade Policy Safeguards */}
          <section className="p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174D35]">
              <ShieldAlert className="w-5 h-5 text-[#D9A441]" />
              <span>Government Trade Policy Levers: Balancing Exports and Inflation</span>
            </div>
            <p className="text-xs sm:text-sm text-[#252B27] leading-relaxed">
              To shield domestic consumers during seasonal crop shortages, the Directorate General of Foreign Trade (DGFT) regulates outbound flows using three primary instruments: setting a Minimum Export Price (MEP), imposing ad-valorem export duties (e.g., 20% to 40%), or placing temporary bans. Balancing remunerative prices for Maharashtra farmers with affordable kitchen staples in urban metros remains a central policy challenge.
            </p>
          </section>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('indian-onion-exports')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Full Report: Global Onion Exports and Regulations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectArticle('onion-processing-value-addition')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <span>Explore Dehydration & Value Addition</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
