import React, { useState } from 'react';
import { TrendingUp, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react';

export const PriceSeasonalityExplorer: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<'rabi' | 'kharif' | 'rangda'>('rabi');

  const seasonsData = {
    rabi: {
      name: 'Rabi Season (Main Crop)',
      sowingPeriod: 'October – November',
      harvestPeriod: 'March – May',
      volumeShare: 'Approx. 65% of Total National Production',
      characteristics:
        'Cultivated in mild winter conditions. High dry matter (12–14°Brix), thick outer skin scales, low moisture (80–84%). Natural storage longevity of 5–6 months in ventilated chawls.',
      pricePattern:
        'Moderate and historically stable during harvest (March–May) due to heavy arrivals; progressively firms up from July through September as stored stocks deplete.',
      keyRisks: 'Premature summer heatwaves affecting bulb sizing; unseasonal pre-monsoon hailstorms during harvesting.',
      primaryVarieties: 'Agrifound Light Red (ALR), Bhima Kiran, Bhima Shakti, NHRDF Red.',
      storageSuitability: 'High (Recommended for long-term chawl storage).',
    },
    kharif: {
      name: 'Kharif Season (Monsoon Crop)',
      sowingPeriod: 'May – July (Nursery in May–June)',
      harvestPeriod: 'October – December',
      volumeShare: 'Approx. 15% – 20% of Total National Production',
      characteristics:
        'Cultivated during the southwest monsoon. Succulent, high moisture (88–92%), thin papery outer scales. Perishable within 15–25 days.',
      pricePattern:
        'Highly volatile. Fresh arrivals command high initial premiums because Rabi stored reserves are depleted by October. If monsoon rains delay harvesting, spot rates spike sharply.',
      keyRisks: 'Cloudbursts, root rot, Anthracnose, post-harvest transport liquefaction in wet conditions.',
      primaryVarieties: 'Agrifound Dark Red (ADR), Baswant-780, Bhima Super.',
      storageSuitability: 'Zero storage suitability (Must be consumed or processed immediately).',
    },
    rangda: {
      name: 'Late Kharif / Rangda Season (Bridge Crop)',
      sowingPeriod: 'August – September',
      harvestPeriod: 'January – March',
      volumeShare: 'Approx. 15% – 20% of Total National Production',
      characteristics:
        'Cultivated between monsoon retreat and winter onset. Moderate moisture content, medium shelf life (1–2 months). Serves as a vital seasonal price bridge.',
      pricePattern:
        'Helps cool winter price spikes by replenishing domestic supply before the massive Rabi harvest commences in April.',
      keyRisks: 'Late monsoon unseasonal downpours during nursery stage; winter thrips attacks.',
      primaryVarieties: 'NHRDF Red, Phule Samarth, Agrifound Dark Red.',
      storageSuitability: 'Short-term only (30–60 days).',
    },
  };

  const current = seasonsData[selectedSeason];

  return (
    <div className="bg-white rounded-lg border border-[#E8E2D2] p-6 shadow-xs my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D2]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#713B67] uppercase tracking-wider mb-1">
            <TrendingUp className="w-4 h-4 text-[#D9A441]" />
            <span>Interactive Market Intelligence Matrix</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#174D35]">
            Tri-Seasonal Crop Cycles and Price Determination
          </h3>
          <p className="text-xs sm:text-sm text-[#575E59] mt-1 font-sans">
            Understand how Maharashtra’s 3 distinct onion harvest seasons govern arrival volumes and wholesale rates at Lasalgaon.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F8F5ED] rounded-lg border border-[#E8E2D2] shrink-0">
          <button
            onClick={() => setSelectedSeason('rabi')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedSeason === 'rabi'
                ? 'bg-[#174D35] text-white shadow-xs font-semibold'
                : 'text-[#252B27] hover:bg-black/5'
            }`}
          >
            Rabi (65%)
          </button>
          <button
            onClick={() => setSelectedSeason('kharif')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedSeason === 'kharif'
                ? 'bg-[#174D35] text-white shadow-xs font-semibold'
                : 'text-[#252B27] hover:bg-black/5'
            }`}
          >
            Kharif (Monsoon)
          </button>
          <button
            onClick={() => setSelectedSeason('rangda')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedSeason === 'rangda'
                ? 'bg-[#174D35] text-white shadow-xs font-semibold'
                : 'text-[#252B27] hover:bg-black/5'
            }`}
          >
            Late-Kharif (Rangda)
          </button>
        </div>
      </div>

      {/* Season Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="space-y-4 md:col-span-2">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#174D35] mb-2">{current.name}</h4>
            <p className="text-sm text-[#252B27] leading-relaxed font-sans">{current.characteristics}</p>
          </div>

          <div className="p-4 rounded-md bg-[#FAF8F2] border border-[#E8E2D2] space-y-2 text-xs font-sans">
            <div className="flex items-center justify-between py-1 border-b border-[#E8E2D2]">
              <span className="text-[#575E59]">Sowing & Nursery:</span>
              <span className="font-semibold text-[#174D35]">{current.sowingPeriod}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E8E2D2]">
              <span className="text-[#575E59]">Market Arrivals Peak:</span>
              <span className="font-semibold text-[#174D35]">{current.harvestPeriod}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E8E2D2]">
              <span className="text-[#575E59]">National Production Share:</span>
              <span className="font-semibold text-[#713B67]">{current.volumeShare}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-[#575E59]">Storage Suitability:</span>
              <span className="font-semibold text-[#174D35]">{current.storageSuitability}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-[#713B67] uppercase tracking-wider block mb-1">
              Historical Pricing Pattern
            </span>
            <p className="text-xs sm:text-sm text-[#575E59] font-sans leading-relaxed">
              {current.pricePattern}
            </p>
          </div>
        </div>

        {/* Sidebar / Agronomic & Risk Factors */}
        <div className="bg-[#FAF8F2] p-5 rounded-md border border-[#E8E2D2] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#174D35] uppercase tracking-wider mb-2">
              <Info className="w-4 h-4 text-[#D9A441]" />
              <span>Recommended Cultivars</span>
            </div>
            <p className="text-xs text-[#252B27] font-sans leading-relaxed mb-4">
              {current.primaryVarieties}
            </p>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-red-800 uppercase tracking-wider mb-1">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>Critical Weather Vulnerability</span>
            </div>
            <p className="text-xs text-[#575E59] font-sans leading-relaxed">
              {current.keyRisks}
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8E2D2]">
            <a
              href="https://agmarknet.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174D35] hover:text-[#713B67] transition-colors"
            >
              <span>Consult Certified Agmarknet Daily Rates</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
