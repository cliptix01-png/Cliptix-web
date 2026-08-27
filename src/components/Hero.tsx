import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_PARTNERS } from '../data/agencyData';
import { soundFx } from '../utils/sound';
import { SpatialMediaCylinder } from './SpatialMediaCylinder';
import { CliptixLogo } from './CliptixLogo';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <section id="hero" className="relative bg-[#05060A] text-[#F5F7FA] pt-8 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
      {/* 3D Curved Cylinder Media Ring Background with Scroll Effect */}
      <SpatialMediaCylinder />

      {/* Soft radial neon background lighting using Cliptix brand colors */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#A018FF]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#20E6E6]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#4A6CFF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column - Main Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-4">
            <div>
              {/* Agency Tag / Eyebrow */}
              <div className="flex items-center space-x-2.5 mb-6">
                <CliptixLogo className="w-6 h-6 animate-pulse" />
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#A018FF] to-[#20E6E6]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4A6CFF] to-[#20E6E6]">
                  CLIPTIX AI DESIGN STUDIO
                </span>
              </div>

              {/* Main Headline with Cliptix Primary Gradient */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-[#F5F7FA]">
                Building<br />
                brands that<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6]">
                  stand out
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-[#9AA5B1] text-sm sm:text-base max-w-lg leading-relaxed mb-8">
                We're an AI-powered design studio crafting hyper-immersive visual identities, 3D motion systems, and futuristic digital experiences that command industry presence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => {
                    soundFx.playChime();
                    onOpenContact();
                  }}
                  className="relative group p-[1px] rounded-full cursor-pointer shadow-[0_0_30px_rgba(160,24,255,0.4)] hover:shadow-[0_0_40px_rgba(32,230,230,0.5)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] rounded-full group-hover:scale-105 transition-transform" />
                  <span className="relative block bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white text-sm font-bold px-8 py-3.5 rounded-full flex items-center space-x-2">
                    <span>Start Now</span>
                    <Sparkles className="w-4 h-4 text-[#20E6E6]" />
                  </span>
                </button>

                <button
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('works');
                  }}
                  className="bg-[#10131A] hover:bg-[#151B25] text-[#F5F7FA] text-sm font-medium px-6 py-3.5 rounded-full border border-[#1C2433] hover:border-[#4A6CFF]/50 flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#20E6E6]" />
                </button>
              </div>
            </div>

            {/* Partners List */}
            <div className="pt-8 border-t border-[#1C2433]">
              <span className="text-xs uppercase tracking-wider text-[#9AA5B1] font-semibold mb-4 block">
                Trusted Experience Partners
              </span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {HERO_PARTNERS.map((partner) => (
                  <span
                    key={partner.id}
                    className="text-sm font-semibold text-[#9AA5B1] hover:text-[#20E6E6] transition-colors cursor-default flex items-center space-x-1.5"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] to-[#20E6E6]">✦</span>
                    <span>{partner.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Showcase & Glass Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Top Right Tag */}
            <div className="text-right mb-4">
              <span className="text-xs font-mono text-[#9AA5B1] tracking-wide">
                /cliptix capabilities{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A6CFF] to-[#20E6E6] font-semibold">
                  BRANDING &nbsp; ART DIRECTION &nbsp; MOTION
                </span>
              </span>
            </div>

            {/* Central Visual Box - Luxury Dark Mode Glassmorphism with Gradient Glow */}
            <div className="relative rounded-3xl overflow-hidden bg-[#10131A]/80 border border-[#1C2433] p-2 sm:p-4 group shadow-[0_0_40px_rgba(160,24,255,0.15)] hover:border-[#4A6CFF]/40 transition-all duration-500">
              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4] bg-[#05060A]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
                  alt="Cliptix Futuristic Creative Portrait"
                  className="w-full h-full object-cover object-top opacity-85 contrast-110 filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/30 to-transparent" />

                {/* Futuristic Gradient Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#10131A]/80 backdrop-blur-xl border border-[#1C2433] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#20E6E6] animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-[#F5F7FA]">AI & Motion Craft</p>
                      <p className="text-[11px] text-[#9AA5B1]">Cliptix Studio Engine 2026</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#20E6E6] bg-[#151B25] px-3 py-1 rounded-full border border-[#1C2433]">
                    100% Immersive
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

