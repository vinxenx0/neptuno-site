
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import GamificationDemo from '@/components/GamificationDemo';
import ApiExplorer from '@/components/ApiExplorer';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import ProductionReady from '@/components/ProductionReady';
import SdkSection from '@/components/SdkSection';
import DashboardInfoWrapper from '@/components/DashboardInfoWrapper';
import CeoMessage from '@/components/CeoMessage';
import JourneysSection from '@/components/JourneysSection';
import CodeReadySection from '@/components/CodeReadySection';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${isMobile ? 'pb-20' : ''}`}>
        <Hero />
        <Features />
        <ProductionReady />
        <DashboardInfoWrapper />
        <GamificationDemo />
        <JourneysSection />
        <SdkSection />
        <CodeReadySection />
        <ApiExplorer />
        <UseCases />
        <CeoMessage />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
