import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../types';
import { soundFx } from '../utils/sound';
import { CliptixLogo } from './CliptixLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    serviceType: 'Branding',
    budget: '$15k - $30k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim()) {
      soundFx.playChime();
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    soundFx.playClick();
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      serviceType: 'Branding',
      budget: '$15k - $30k',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060A]/85 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#10131A] border border-[#1C2433] rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
          >
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A018FF]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20E6E6]/10 rounded-full blur-[80px] pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#9AA5B1] hover:text-[#F5F7FA] bg-[#151B25] p-2 rounded-full cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#151B25] border border-[#1C2433] text-[#20E6E6] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(32,230,230,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#F5F7FA] mb-2">
                  Proposal Received!
                </h3>
                <p className="text-[#9AA5B1] text-sm max-w-sm mb-8 leading-relaxed">
                  Thank you for reaching out to Cliptix. Our principal studio leads will review your brief and contact you within 2 business hours.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-semibold px-8 py-3.5 rounded-full transition-opacity hover:opacity-90 cursor-pointer shadow-lg shadow-purple-950/50"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <CliptixLogo className="w-5 h-5" />
                    <span className="text-xs font-mono text-[#20E6E6] uppercase tracking-widest">
                      Let's Build Together
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#F5F7FA]">
                    Start a Cliptix Project
                  </h3>
                  <p className="text-xs text-[#9AA5B1] mt-1">
                    Book an AI studio consultation or request a custom design proposal for your brand.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#9AA5B1] block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#4A6CFF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#9AA5B1] block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#4A6CFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#9AA5B1] block mb-1.5">
                        Service Interest
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#4A6CFF] transition-colors"
                      >
                        <option value="Branding">Branding & AI Identity</option>
                        <option value="Art Direction">3D & Spatial Direction</option>
                        <option value="Motion">Motion & Interactions</option>
                        <option value="Digital Product">Digital Product Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#9AA5B1] block mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#4A6CFF] transition-colors"
                      >
                        <option value="< $15k">&lt; $15k</option>
                        <option value="$15k - $30k">$15k - $30k</option>
                        <option value="$30k - $60k">$30k - $60k</option>
                        <option value="$60k+">$60k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#9AA5B1] block mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your goals, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs rounded-xl p-3.5 focus:outline-none focus:border-[#4A6CFF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-purple-950/50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Proposal Request</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

