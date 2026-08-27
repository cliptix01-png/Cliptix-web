import React, { useState } from 'react';
import { Globe, ArrowUpRight, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_METRICS } from '../data/agencyData';

interface AgencyOverviewProps {
  onOpenContact: () => void;
}

export const AgencyOverview: React.FC<AgencyOverviewProps> = ({ onOpenContact }) => {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#05060A]">
      <div className="max-w-7xl mx-auto">
        {/* Main Dark Card Container matching Cliptix luxury dark mode */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#10131A] border border-[#1C2433] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A018FF]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#20E6E6]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Row: Globe Badge & Agency Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 relative z-10">
            
            {/* Left: Globe Badge & Social Icons */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="flex items-center space-x-3 bg-[#151B25]/90 border border-[#1C2433] px-4 py-2.5 rounded-2xl w-fit">
                <Globe className="w-5 h-5 text-[#20E6E6] animate-spin-slow" />
                <span className="text-xs font-medium text-[#9AA5B1]">
                  Cliptix Hub powering brands globally
                </span>
              </div>

              {/* Social Pills */}
              <div className="flex items-center space-x-2.5 pt-2">
                <button
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-bold text-xs flex items-center justify-center transition-transform hover:scale-110 shadow-md shadow-purple-950/40 cursor-pointer"
                  aria-label="Cliptix X"
                >
                  𝕏
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-[#151B25] border border-[#1C2433] hover:border-[#4A6CFF]/50 text-[#F5F7FA] font-bold text-xs flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Instagram"
                >
                  ig
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-[#151B25] border border-[#1C2433] hover:border-[#4A6CFF]/50 text-[#F5F7FA] font-bold text-xs flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Dribbble"
                >
                  🏀
                </button>
              </div>
            </div>

            {/* Right: Statement Headline */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F7FA] leading-snug">
                We're an AI-powered design studio{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] font-semibold underline decoration-[#20E6E6]/60 underline-offset-8">
                  passionate
                </span>{' '}
                about crafting high-impact visual identities that scale valuation & presence for global visionaries.
              </h2>
            </div>
          </div>

          {/* Bottom Grid: Pixelated Counter Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#1C2433] relative z-10">
            {AGENCY_METRICS.map((metric) => (
              <div
                key={metric.label}
                onMouseEnter={() => setActiveMetric(metric.label)}
                onMouseLeave={() => setActiveMetric(null)}
                className="group relative bg-[#151B25]/60 hover:bg-[#151B25] border border-[#1C2433] hover:border-[#4A6CFF]/50 p-6 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Pixelated Font Metric */}
                <div className="font-pixel text-5xl sm:text-6xl font-bold text-[#F5F7FA] mb-2 tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#A018FF] group-hover:to-[#20E6E6] transition-all">
                  {metric.label}
                </div>

                <div className="flex items-center space-x-2 text-[#9AA5B1] text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20E6E6] shadow-[0_0_8px_#20E6E6]" />
                  <span>{metric.sublabel}</span>
                </div>

                {/* Sub-hover detail popup */}
                {activeMetric === metric.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-xs text-[#F5F7FA] bg-[#05060A] p-3 rounded-xl border border-[#1C2433] shadow-lg"
                  >
                    Verified Cliptix metrics tracked across 2021–2026 enterprise partnerships.
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
