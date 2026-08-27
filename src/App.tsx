/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgencyOverview } from './components/AgencyOverview';
import { ExperiencePartners } from './components/ExperiencePartners';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioWorks } from './components/PortfolioWorks';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05060A] text-[#F5F7FA] flex flex-col font-sans selection:bg-[#A018FF] selection:text-white">
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        <Hero
          onOpenContact={() => setContactModalOpen(true)}
          onNavigate={handleNavigate}
        />
        <AgencyOverview
          onOpenContact={() => setContactModalOpen(true)}
        />
        <ExperiencePartners />
        <ServicesSection
          onOpenContact={() => setContactModalOpen(true)}
        />
        <PortfolioWorks />
      </main>

      <Footer
        onOpenContact={() => setContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

