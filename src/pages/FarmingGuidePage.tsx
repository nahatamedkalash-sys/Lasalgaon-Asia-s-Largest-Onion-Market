import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { Wheat, Check, AlertTriangle, ArrowRight, Droplets, Sun, Sparkles } from 'lucide-react';

interface FarmingGuidePageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const FarmingGuidePage: React.FC<FarmingGuidePageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Onion Farming in Maharashtra: Practical Agronomic Field Guide"
        description="Complete practical agronomic guide for Maharashtra onion growers: nursery management, plant spacing, sulfur fertilization, drip irrigation, and thrips management."
        canonicalPath="/farming-guide"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Farming Guide', url: '/farming-guide' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Wheat className="w-4 h-4 text-[#D9A441]" />
            <span>Applied Agronomy & Crop Science</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            Onion Farming in Maharashtra: An Agronomic Guide
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            From raised-bed nursery raising and balanced sulfur fertilization to precision drip fertigation and neck-fall harvest timing.
          </p>
        </header>

        <ResilientImage
          src="/images/drip_irrigation_maharashtra.jpg"
          alt="Field drip irrigation lateral tubing installed on ploughed black soil in Maharashtra"
          caption="Raised bed cultivation with precision drip fertigation in Maharashtra black soil, enhancing bulb caliber and water-use efficiency."
          credit="abhiriksh"
          license="CC BY-SA 3.0"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Drip_irrigation_in_Chinawal_1.jpg"
          aspectRatio="16:9"
        />

        {/* Agronomic Pillars */}
        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              1. Soil Requirements and Field Preparation
            </h2>
            <p>
              Onion requires deep, well-drained, fertile sandy-loam to clay-loam soils with a pH of 6.5 to 7.5. Field preparation begins with deep plowing followed by two cross-harrowings to achieve a fine, weed-free tilth. Incorporate 20 to 25 tonnes of well-decomposed farmyard manure (FYM) fortified with <em>Trichoderma viride</em> (5g/kg manure) during final harrowing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              2. The Tri-Seasonal Crop Calendars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white rounded border border-[#E8E2D2] space-y-2">
                <span className="font-serif text-sm font-bold text-[#174D35] block">Kharif Season</span>
                <p className="text-[#575E59]">Nursery: May–June<br />Transplant: July–Aug<br />Harvest: Oct–Nov</p>
                <span className="text-[#713B67] font-medium block">Varieties: ADR, Baswant-780</span>
              </div>
              <div className="p-4 bg-white rounded border border-[#E8E2D2] space-y-2">
                <span className="font-serif text-sm font-bold text-[#174D35] block">Late Kharif (Rangda)</span>
                <p className="text-[#575E59]">Nursery: Aug–Sept<br />Transplant: Oct–Nov<br />Harvest: Jan–Feb</p>
                <span className="text-[#713B67] font-medium block">Varieties: NHRDF Red, Phule Samarth</span>
              </div>
              <div className="p-4 bg-white rounded border border-[#E8E2D2] space-y-2">
                <span className="font-serif text-sm font-bold text-[#174D35] block">Rabi (Main Crop)</span>
                <p className="text-[#575E59]">Nursery: Oct–Nov<br />Transplant: Dec–Jan<br />Harvest: April–May</p>
                <span className="text-[#713B67] font-medium block">Varieties: ALR, Bhima Kiran</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              3. Why Sulfur Is Non-Negotiable
            </h2>
            <p>
              In allium crops, sulfur is the foundational building block for cysteine, methionine, and allyl propyl disulfide. Applying 30 to 40 kg of elemental sulfur or agricultural gypsum per hectare increases Total Soluble Solids (TSS), firms outer protective scales, boosts pungent aroma, and cuts post-harvest rotting in storage by up to 30%.
            </p>
          </section>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('onion-farming-maharashtra')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Complete 10-Minute Practical Farmer Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/storage-post-harvest')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <span>Explore Post-Harvest Storage Guide</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
