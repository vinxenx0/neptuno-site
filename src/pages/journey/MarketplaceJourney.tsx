
import React from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { MarketplaceProvider } from '@/marketplace/MarketplaceContext';
import MarketplaceContent from '@/components/marketplace/MarketplaceContent';

const MarketplaceJourney: React.FC = () => {
  return (
    <JourneyLayout
      title="Marketplace con recompensas por sinergias"
      subtitle="Descubre cómo obtener recompensas al combinar productos y categorías"
      bgColor="bg-gradient-to-br from-emerald-600 to-teal-800"
    >
      <MarketplaceProvider>
        <MarketplaceContent />
      </MarketplaceProvider>
    </JourneyLayout>
  );
};

export default MarketplaceJourney;
