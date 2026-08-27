import React from 'react';
import { ArrowUp, Mail, Globe } from 'lucide-react';
import { CliptixLogo } from './CliptixLogo';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] border-t border-[#1C2433] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#9AA5B1] text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center p-1.5 rounded-xl bg-[#151B25] border border-[#1C2433] shadow-md shadow-purple-950/40">
                <CliptixLogo className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-2xl text-[#F5F7FA] tracking-wide">
                CLIPTIX<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6]">.</span>
              </span>
            </div>

            <p className="text-xs text-[#9AA5B1] max-w-sm leading-relaxed">
              San Francisco AI-powered design studio crafting high-impact digital experiences, spatial UI, and futuristic brand identities.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#20E6E6] shadow-[0_0_8px_#20E6E6] animate-pulse" />
              <span className="text-xs text-[#F5F7FA]">San Francisco Studio — 100% Operational</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onNavigate('hero')} className="hover:text-[#20E6E6] transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#20E6E6] transition-colors cursor-pointer">Capabilities</button></li>
              <li><button onClick={() => onNavigate('works')} className="hover:text-[#20E6E6] transition-colors cursor-pointer">Selected Works</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#20E6E6] transition-colors cursor-pointer">Agency Overview</button></li>
              <li><button onClick={onOpenContact} className="hover:text-[#20E6E6] transition-colors cursor-pointer">Start a Project</button></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-xs text-[#9AA5B1]">
              Direct inquiries & proposals:
            </p>
            <a
              href="mailto:hello@cliptix.studio"
              className="text-[#F5F7FA] hover:text-[#20E6E6] font-mono text-xs block transition-colors underline decoration-[#1C2433] underline-offset-4"
            >
              hello@cliptix.studio
            </a>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={onOpenContact}
                className="bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90 cursor-pointer shadow-md shadow-purple-950/40"
              >
                Book a Call
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C2433] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9AA5B1] gap-4">
          <p>© {new Date().getFullYear()} Cliptix Design Studio. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#9AA5B1] hover:text-[#F5F7FA] transition-colors cursor-pointer bg-[#10131A] border border-[#1C2433] px-3.5 py-1.5 rounded-full"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#20E6E6]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

