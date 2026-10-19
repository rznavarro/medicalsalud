/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DoctorSection } from './components/DoctorSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OndaPlusSection } from './components/OndaPlusSection';
import { FaqSection } from './components/FaqSection';
import { CtaFinalSection } from './components/CtaFinalSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#212121] selection:bg-[#3072E0]/20 selection:text-[#3072E0]">
      {/* Sticky, compacting Header */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Treatments Section */}
        <TreatmentsSection />

        {/* 4. Doctor Section with verified credentials */}
        <DoctorSection />

        {/* 5. How It Works (3 Steps) */}
        <HowItWorksSection />

        {/* 6. Onda Plus Details (Lite Video & Technology) */}
        <OndaPlusSection />

        {/* 7. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 8. Final CTA with WhatsApp Routing Form */}
        <CtaFinalSection />

        {/* 9. Location & Schedule Section */}
        <LocationSection />
      </main>

      {/* 10. Dark Footer */}
      <Footer />

      {/* 11. Mobile-friendly Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
