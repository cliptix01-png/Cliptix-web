import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '../utils/sound';
import { CliptixLogo } from './CliptixLogo';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Works', target: 'works' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    soundFx.playClick();
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05060A]/80 backdrop-blur-xl border-b border-[#1C2433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Nav links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#9AA5B1]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => handleLinkClick(link.target)}
              className="hover:text-[#F5F7FA] transition-colors cursor-pointer relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Center Logo - Cliptix */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onMouseEnter={() => soundFx.playHover()}
          onClick={() => handleLinkClick('hero')}
        >
          <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-[#151B25] border border-[#1C2433] shadow-[0_0_20px_rgba(160,24,255,0.35)] transition-transform group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] opacity-25 blur-sm" />
            <CliptixLogo className="w-7 h-7 relative z-10" />
          </div>
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F5F7FA]">
            CLIPTIX<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6]">.</span>
          </span>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => {
              soundFx.playChime();
              onOpenContact();
            }}
            className="relative p-[1px] rounded-full group cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center space-x-2 bg-[#10131A] hover:bg-[#151B25] text-[#F5F7FA] text-xs font-semibold px-5 py-2.5 rounded-full transition-all">
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#20E6E6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-[#9AA5B1] hover:text-[#F5F7FA] rounded-lg bg-[#151B25] border border-[#1C2433]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#10131A] border-b border-[#1C2433] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left text-lg font-medium text-[#9AA5B1] hover:text-[#20E6E6] py-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[#1C2433] flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-medium py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg shadow-purple-950/40"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

