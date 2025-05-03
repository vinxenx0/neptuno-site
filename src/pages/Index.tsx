
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
import ValueProposition from '@/components/ValueProposition';
import EnhancedFeatures from '@/components/EnhancedFeatures';
import Testimonials from '@/components/Testimonials';
import WhyChooseNeptuno from '@/components/WhyChooseNeptuno';
import ComparisonTable from '@/components/ComparisonTable';
import ModulesIntegration from '@/components/ModulesIntegration';
import { useIsMobile } from '@/hooks/use-mobile';
import LaunchBanner from '@/components/LaunchBanner';
import Roadmap from '@/components/Roadmap';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LaunchBanner />
      <main className={`flex-grow ${isMobile ? 'pb-20' : ''}`}>
        <Hero />
        <ValueProposition />
        <Features>
          <EnhancedFeatures />
        </Features>
        <JourneysSection />
        <ApiExplorer />
        <ProductionReady>
          <ModulesIntegration />
        </ProductionReady>
        <CodeReadySection />
        <DashboardInfoWrapper />
        <UseCases />
        <GamificationDemo />
        <SdkSection />
        <Roadmap />
        <CeoMessage />
        <WhyChooseNeptuno />
        <Testimonials />
        <ComparisonTable />
        <Newsletter />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
