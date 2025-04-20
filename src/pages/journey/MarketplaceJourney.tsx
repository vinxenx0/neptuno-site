
import React from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardPopup from '@/components/journey/RewardPopup';
import MarketplaceWelcome from '@/components/marketplace/MarketplaceWelcome';
import MarketplaceCatalog from '@/components/marketplace/MarketplaceCatalog';
import MarketplaceCheckout from '@/components/marketplace/MarketplaceCheckout';
import MarketplaceComplete from '@/components/marketplace/MarketplaceComplete';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MarketplaceProvider, useMarketplace } from '@/marketplace/MarketplaceContext';

const MarketplaceContent: React.FC = () => {
  const {
    currentStep,
    currentReward,
    showReward,
    setShowReward,
    handleNext
  } = useMarketplace();
  
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      {currentStep === 0 ? (
        <MarketplaceWelcome onStart={handleNext} />
      ) : currentStep === 1 ? (
        <MarketplaceCatalog />
      ) : currentStep === 2 ? (
        <MarketplaceCheckout />
      ) : (
        <MarketplaceComplete />
      )}
      
      {/* Rewards popup */}
      {currentReward && (
        <RewardPopup 
          title={currentReward.title}
          description={currentReward.description}
          icon={currentReward.icon}
          isVisible={showReward}
          onClose={() => setShowReward(false)}
        />
      )}
    </>
  );
};

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
