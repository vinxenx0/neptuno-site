
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <ApiExplorer />
      <UseCases />
      <GamificationDemo />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
