import React, { useState } from 'react';
import { EXPERIENCE_BUBBLES } from '../data/agencyData';
import { Partner } from '../types';
import { Github, Award, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '../utils/sound';

export const ExperiencePartners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#05060A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#A018FF] to-[#20E6E6]" />
              <span className="text-xs font-semibold tracking-wider text-[#20E6E6] uppercase">
                Proven Track Record
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F7FA] leading-tight mb-6">
              Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] underline decoration-[#20E6E6]/40">12</span><br />
              <span className="text-[#9AA5B1]">years of partner excellence</span>
            </h2>

            <p className="text-sm text-[#9AA5B1] leading-relaxed max-w-md">
              From fast-scaling Series A AI startups to Fortune 500 tech leaders, Cliptix delivers end-to-end design strategy, brand positioning, and high-performance digital products.
            </p>
          </motion.div>

          {/* Right Column - Circular Partner Bubbles Cluster */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:ml-auto">
              {EXPERIENCE_BUBBLES.map((partner) => {
                const isGithub = partner.icon === 'github';

                return (
                  <motion.div
                    key={partner.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => {
                      soundFx.playChime();
                      setSelectedPartner(partner);
                    }}
                    className="aspect-square rounded-full bg-[#10131A] hover:bg-[#151B25] border border-[#1C2433] hover:border-[#4A6CFF]/60 p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-lg group relative hover:shadow-[0_0_25px_rgba(160,24,255,0.25)]"
                  >
                    {isGithub ? (
                      <Github className="w-8 h-8 text-[#F5F7FA] group-hover:text-[#20E6E6] transition-colors" />
                    ) : (
                      <span className="font-display font-bold text-sm sm:text-base text-[#F5F7FA] group-hover:text-[#20E6E6] transition-colors tracking-tight">
                        {partner.name}
                      </span>
                    )}

                    <span className="text-[10px] text-[#9AA5B1] group-hover:text-[#F5F7FA] mt-1 uppercase tracking-wider font-mono">
                      {partner.category}
                    </span>

                    {/* Subtle glow dot */}
                    <span className="absolute bottom-3 w-1.5 h-1.5 rounded-full bg-[#20E6E6] shadow-[0_0_8px_#20E6E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060A]/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#10131A] border border-[#1C2433] p-6 rounded-3xl max-w-md w-full relative shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-[#20E6E6] uppercase tracking-widest">
                    {selectedPartner.category} Partner
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F7FA] mt-1">
                    {selectedPartner.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="text-[#9AA5B1] hover:text-[#F5F7FA] bg-[#151B25] p-2 rounded-full cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-[#9AA5B1] mb-6 leading-relaxed">
                Strategic brand and product partner for over 4+ years with Cliptix Studio. Collaborated on full design system, user acquisition campaigns, and web application architecture.
              </p>

              <div className="bg-[#151B25] p-4 rounded-xl mb-6 space-y-2.5 border border-[#1C2433]">
                <div className="flex items-center text-xs text-[#F5F7FA] space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#20E6E6]" />
                  <span>Full Visual Rebrand & Web System</span>
                </div>
                <div className="flex items-center text-xs text-[#F5F7FA] space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#20E6E6]" />
                  <span>Interactive 3D Asset Library</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 cursor-pointer shadow-lg shadow-purple-950/40"
              >
                Close Partner View
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

