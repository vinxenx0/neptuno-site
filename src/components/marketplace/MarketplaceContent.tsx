
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMarketplace } from '@/marketplace/MarketplaceContext';
import RewardPopup from '@/components/journey/RewardPopup';
import MarketplaceWelcome from '@/components/marketplace/MarketplaceWelcome';
import MarketplaceCatalog from '@/components/marketplace/MarketplaceCatalog';
import MarketplaceCheckout from '@/components/marketplace/MarketplaceCheckout';
import MarketplaceComplete from '@/components/marketplace/MarketplaceComplete';

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

export default MarketplaceContent;
