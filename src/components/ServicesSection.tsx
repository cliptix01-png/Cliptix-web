import React, { useState } from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Sparkles, Palette, Zap, Layers, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { soundFx } from '../utils/sound';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(AGENCY_SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#20E6E6]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#20E6E6]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#20E6E6]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#20E6E6]" />;
      default: return <Sparkles className="w-6 h-6 text-[#20E6E6]" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05060A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#1C2433]"
        >
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#A018FF] to-[#20E6E6]" />
              <span className="text-xs font-semibold tracking-wider text-[#20E6E6] uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FA]">
              What We Do
            </h2>
          </div>

          <p className="text-[#9AA5B1] text-sm max-w-md mt-4 md:mt-0">
            End-to-end design craft combining strategy, visual storytelling, AI motion pipelines, and cutting-edge frontend engineering.
          </p>
        </motion.div>

        {/* Services Accordion / Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Service Selection list */}
          <div className="lg:col-span-5 space-y-3">
            {AGENCY_SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveServiceId(service.id);
                  }}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#10131A] border-[#4A6CFF]/60 text-[#F5F7FA] shadow-[0_0_25px_rgba(160,24,255,0.2)]'
                      : 'bg-[#10131A]/60 border-[#1C2433] text-[#9AA5B1] hover:border-[#4A6CFF]/40 hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-[#151B25] border border-[#1C2433]">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#F5F7FA] tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#9AA5B1]">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-[#20E6E6]' : 'text-[#9AA5B1]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Active Service */}
          <div className="lg:col-span-7">
            {AGENCY_SERVICES.filter((s) => s.id === activeServiceId).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#10131A] border border-[#1C2433] p-8 rounded-3xl h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#A018FF]/10 rounded-full blur-[80px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#20E6E6] uppercase tracking-widest bg-[#151B25] border border-[#1C2433] px-3.5 py-1 rounded-full">
                      Cliptix Service Scope
                    </span>
                    <span className="text-xs text-[#9AA5B1] font-mono">01/04</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-[#F5F7FA] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#9AA5B1] text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h4 className="text-xs font-semibold text-[#9AA5B1] uppercase tracking-wider mb-4">
                    Key Deliverables & Capabilities:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center space-x-2.5 bg-[#151B25] border border-[#1C2433] p-3 rounded-xl text-xs font-medium text-[#F5F7FA]"
                      >
                        <Check className="w-4 h-4 text-[#20E6E6] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

