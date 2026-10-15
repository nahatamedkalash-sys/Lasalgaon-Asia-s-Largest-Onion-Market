import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ResilientImage } from '../components/ResilientImage';
import { Microscope, Award, Dna, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface ResearchKandaKendraPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ResearchKandaKendraPage: React.FC<ResearchKandaKendraPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  return (
    <>
      <SEOHead
        title="Kanda Kendra & Onion Research: NHRDF Nashik & ICAR-DOGR Repository"
        description="Explore the scientific research institutions powering Lasalgaon: NHRDF Nashik, ICAR-DOGR, Kanda Kendra seed trials, and the KRUSHAK radiation facility."
        canonicalPath="/research-kanda-kendra"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Onion Research & Kanda Kendra', url: '/research-kanda-kendra' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#713B67]">
            <Microscope className="w-4 h-4 text-[#D9A441]" />
            <span>Horticultural Science & Breeding Repository</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D35] leading-tight">
            Kanda Kendra: Onion Research & Breeding Science
          </h1>

          <p className="text-base sm:text-lg text-[#575E59] font-sans leading-relaxed">
            The scientific architecture behind Maharashtra’s onion economy: from NHRDF Nashik’s landmark varietal breeding to ICAR-DOGR and BARC’s KRUSHAK irradiation facility.
          </p>
        </header>

        <ResilientImage
          src="/images/onion_seed_plantation.jpg"
          alt="Scientific allium seed multiplication field with blooming floral umbels"
          caption="Scientific varietal evaluation and nucleus seed multiplication trials conducted across Maharashtra's horticultural research stations."
          credit="Yahuzaishat"
          license="CC0 1.0 Universal"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Onion_seed_plantation.jpg"
          aspectRatio="16:9"
        />

        <div className="space-y-8 text-[#252B27] font-sans leading-relaxed">
          {/* Institutional Profiles */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#174D35]">
              Core Scientific Institutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#713B67]">
                  Est. 1977 · NAFED Aegis
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  National Horticultural Research & Development Foundation (NHRDF)
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  Headquartered with its premier Regional Research Station in Chitegaon, Nashik. Renowned worldwide for breeding Agrifound Light Red (ALR) and Agrifound Dark Red (ADR), pioneering disease screening for Purple Blotch, and certifying foundation seed.
                </p>
                <a
                  href="https://nhrdf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174D35] hover:underline pt-2"
                >
                  <span>Visit NHRDF Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 bg-white rounded-lg border border-[#E8E2D2] space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#713B67]">
                  ICAR Autonomous Institute · Rajgurunagar
                </span>
                <h3 className="font-serif text-lg font-bold text-[#174D35]">
                  Directorate of Onion and Garlic Research (ICAR-DOGR)
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  The national apex body for allium germplasm preservation and genomic breeding. Developed the celebrated &quot;Bhima&quot; series (Bhima Super, Bhima Kiran, Bhima Shakti) offering bolting tolerance and climate adaptability across Maharashtra.
                </p>
                <a
                  href="https://dogr.icar.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174D35] hover:underline pt-2"
                >
                  <span>Visit ICAR-DOGR Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          {/* KRUSHAK Unit Spotlight */}
          <section className="p-6 rounded-lg bg-[#FAF8F2] border border-[#E8E2D2] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174D35]">
              <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
              <span>BARC KRUSHAK Technology Demonstration Facility at Lasalgaon</span>
            </div>
            <p className="text-xs sm:text-sm text-[#252B27] leading-relaxed">
              Located right in Lasalgaon, the Krushi Utpadan Sanrakshan Kendra (KRUSHAK) was established by the Bhabha Atomic Research Centre (BARC) and BRIT. It serves as an industrial demonstration center for gamma irradiation (0.06–0.09 kGy), a non-thermal process that inhibits cell division in onion shoot meristems, preventing sprouting during export voyages and long-term storage without compromising nutritional qualities.
            </p>
          </section>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectArticle('kanda-kendra-onion-research')}
              className="px-5 py-2.5 bg-[#174D35] hover:bg-[#0f3424] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Read Full Report: Kanda Kendra Research & Farmer Education</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/farming-guide')}
              className="px-5 py-2.5 bg-white border border-[#E8E2D2] hover:border-[#174D35] text-[#252B27] text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <span>Review Recommended Agronomic Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
