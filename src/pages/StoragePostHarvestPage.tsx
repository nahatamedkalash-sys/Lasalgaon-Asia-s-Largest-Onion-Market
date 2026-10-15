import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { Warehouse, Wind, Thermometer, ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';

interface StoragePostHarvestPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const StoragePostHarvestPage: React.FC<StoragePostHarvestPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Onion Storage & Post-Harvest Science: Kanda Chawl Management"
        description="Comprehensive engineering and scientific guide to onion storage in Maharashtra: Kanda Chawl design, bottom aeration, curing, and minimizing post-harvest losses."
        canonicalPath="/storage-post-harvest"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Storage & Post-Harvest', url: '/storage-post-harvest' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Warehouse className="w-4 h-4 text-[#D9A441]" />
            <span>Post-Harvest Engineering & Loss Reduction</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            Scientific Onion Storage: Inside the Kanda Chawl
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            How raised slatted flooring, natural thermal chimneys, and strict two-stage curing reduce post-harvest losses from 40% down to under 20%.
          </p>
        </header>

        <ResilientImage
          src="/images/onion_storage_structure.jpg"
          alt="Naturally ventilated traditional onion storage structure with thatch and slatted walls"
          caption="Naturally ventilated elevated storage structure providing continuous air circulation to preserve cured Rabi onion bulbs."
          credit="S. Elaiyaraja"
          license="CC BY-SA 4.0"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Onion_Storage.jpg"
          aspectRatio="16:9"
        />

        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              The Biology of Post-Harvest Spoilage
            </h2>
            <p>
              Onion bulbs remain living, respiring plant tissues after harvest. During storage, they continuously consume carbohydrates, losing 15% to 20% of their mass through Physiological Weight Loss (PWL). When ambient relative humidity climbs past 75% during the monsoon, dormant fungal spores of <em>Aspergillus niger</em> (black mold) and bacterial soft-rot pathogens germinate, causing catastrophic liquefaction.
            </p>
          </section>

          {/* Architectural Pillars of Improved Kanda Chawl */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <div className="flex items-center gap-2 text-[#174D35] font-serif font-bold text-base">
                <Wind className="w-5 h-5 text-[#D9A441]" />
                <span>Raised Slatted Base</span>
              </div>
              <p className="text-xs text-[#575E59]">
                Elevated 45–60 cm above the ground on wooden battens or bamboo with 1.5 cm gaps, drawing cool night air upwards through natural convection.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <div className="flex items-center gap-2 text-[#174D35] font-serif font-bold text-base">
                <Thermometer className="w-5 h-5 text-[#713B67]" />
                <span>Constrained Bay Width</span>
              </div>
              <p className="text-xs text-[#575E59]">
                Storage bay width is strictly limited to 1.2 to 1.5 meters (4–5 feet). Stacking onions wider creates stagnant core hotspots that trigger rotting.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E8E2D2] space-y-2">
              <div className="flex items-center gap-2 text-[#174D35] font-serif font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-[#174D35]" />
                <span>Overhanging Roof</span>
              </div>
              <p className="text-xs text-[#575E59]">
                North-South orientation with 1-meter roof overhangs protects against harsh afternoon solar heat and keeps horizontal monsoon rain from penetrating.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('onion-storage-techniques')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Full Report: Onion Storage Techniques</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectArticle('kanda-kendra-onion-research')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <span>Explore Research & Breeding Cultivars</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
