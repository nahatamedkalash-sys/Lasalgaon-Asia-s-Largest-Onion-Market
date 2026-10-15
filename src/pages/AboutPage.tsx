import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { MapPin, Award, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onSelectArticle }) => {
  return (
    <>
      <SEOHead
        title="About Lasalgaon: The Epicenter of India's Onion Economy"
        description="Comprehensive guide to Lasalgaon in Niphad, Nashik: geographical history, APMC establishment, basalt soil chemistry, and Geographical Indication (GI) status."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Lasalgaon', url: '/about' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        {/* Header */}
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <MapPin className="w-4 h-4 text-[#D9A441]" />
            <span>Niphad Taluka, Nashik District, Maharashtra</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            About Lasalgaon: The Epicenter of India&apos;s Onion Economy
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            How a compact agricultural township 60 kilometres from Nashik city developed into Asia’s largest onion trading hub, setting daily price benchmarks across the continent.
          </p>
        </header>

        {/* Feature Visual */}
        <ResilientImage
          src="/images/lasalgaon_landscape_cultivation.jpg"
          alt="Panoramic landscape of onion fields surrounding Lasalgaon, Nashik"
          caption="Rich Deccan volcanic black soil fields across Niphad taluka sustain thousands of hectares of GI-tagged Lasalgaon red onion cultivation."
          credit="Vivo78"
          license="CC0 1.0 Universal"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Landscape_view_of_onion_cultivation_at_Lasalgaon.jpg"
          isAuthenticLasalgaon={true}
          aspectRatio="16:9"
        />

        {/* Narrative Sections */}
        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              Geographical Setting & Soil Architecture
            </h2>
            <p>
              Lasalgaon is situated in the Niphad subdivision of Nashik district in north-western Maharashtra. Located in the rain-shadow corridor of the Western Ghats along the Godavari river basin, the region experiences an ideal semi-arid microclimate with moderate annual rainfall (600mm–800mm), abundant sunshine, and cool winter nights.
            </p>
            <p>
              The defining agricultural asset of Niphad is its soil: deep black cotton basalt soil formed by Cretaceous-age Deccan flood basalts. Rich in available potassium, calcium, and natural elemental sulfur, this substrate fosters dense cellular scale development and high dry matter accumulation (12%–14% TSS) in allium crops.
            </p>
          </section>

          {/* GI Tag Profile Callout */}
          <div className="p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174D35]">
              <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
              <span>Geographical Indication (GI) Milestone — 2023</span>
            </div>
            <p className="text-sm text-[#252B27]">
              In 2023, the Government of India awarded the prestigious Geographical Indication (GI) certificate to the <strong>Lasalgaon Onion</strong> (GI Application Class 31). This landmark legal protection verifies that only onions cultivated across the defined agro-ecological zones of Niphad, Yeola, Chandwad, and Sinnar talukas possess the distinctive 16–17 fleshy scale architecture, high allyl sulfide pungency, and natural 5-to-6 month storage endurance.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              The Genesis of Lasalgaon APMC (Est. 1947)
            </h2>
            <p>
              Before 1947, regional onion growers had little bargaining power against private village merchant syndicates who used subjective hand-weighing and concealed cloth bidding (&quot;Hatta&quot;). The establishment of the Lasalgaon Agriculture Produce Market Committee (APMC) established statutory regulation, open vocal auctions, metric weighing, and licensed commission agency.
            </p>
            <p>
              Positioned directly on the Central Railway network connecting Mumbai to North and Eastern India, Lasalgaon quickly evolved into the primary assembly point where daily arrivals from hundreds of villages were consolidated and dispatched by rail rake and road freight.
            </p>
          </section>

          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white rounded border border-[#E8E2D2]">
              <span className="block text-2xl font-bold font-serif text-[#174D35]">25,000+</span>
              <span className="text-xs text-[#575E59]">Quintals Peak Single-Day Arrivals</span>
            </div>
            <div className="p-4 bg-white rounded border border-[#E8E2D2]">
              <span className="block text-2xl font-bold font-serif text-[#713B67]">1,000+</span>
              <span className="text-xs text-[#575E59]">Licensed Commission Agents & Traders</span>
            </div>
            <div className="p-4 bg-white rounded border border-[#E8E2D2]">
              <span className="block text-2xl font-bold font-serif text-[#D9A441]">210 km</span>
              <span className="text-xs text-[#575E59]">Transit Distance to JNPT Port (Export Gateway)</span>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              The Chronicle&apos;s Editorial Mandate
            </h2>
            <p>
              The <strong>Lasalgaon Onion Chronicle</strong> was founded to provide transparent, evidence-based agricultural reporting. In an era where speculative social media rumors frequently trigger market panic, our mission is to deliver verified agronomic research, transparent auction breakdowns, and credible market intelligence for farmers, traders, researchers, and policymakers.
            </p>
          </section>

          <div className="pt-6 border-t border-[#E8E2D2] flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('lasalgaon-onion-market')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Full Report: Why Lasalgaon Anchors Asia&apos;s Trade</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/market-auction-system')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors"
            >
              <span>Explore Auction System Guide</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
