
import React, { useState, useEffect, useRef } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Gift, ChevronRight } from 'lucide-react';
import RewardPopup from '@/components/journey/RewardPopup';

const GamesJourney: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState('classic');
  const [credits, setCredits] = useState(1000);
  const [currentBet, setCurrentBet] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [reward, setReward] = useState({ title: '', description: '', icon: <></> });

  const classicReelRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const fruitsReelRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);
  const diamondReelRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  useEffect(() => {
    // Initialize all slots on component mount
    initSlot('classic');
    initSlot('fruits');
    initSlot('diamond');
  }, []);

  const symbols = {
    classic: ['7️⃣', 'BAR', '🍒', '🍋', '🍊'],
    fruits: ['🍒', '🍇', '🍋', '🍊', '🍉', '🍓'],
    diamond: ['💎', '💰', '🔔', '✨', '⭐', '♠', '♥']
  };

  const initSlot = (slotType: 'classic' | 'fruits' | 'diamond') => {
    const refsArray = slotType === 'classic' 
      ? classicReelRefs.current 
      : slotType === 'fruits' 
        ? fruitsReelRefs.current 
        : diamondReelRefs.current;
    
    const symbolsArray = symbols[slotType];
    
    refsArray.forEach(reel => {
      if (reel) {
        reel.innerHTML = [...symbolsArray, ...symbolsArray, ...symbolsArray]
          .map(s => `<div class="symbol">${s}</div>`)
          .join('');
      }
    });
  };

  const changeBet = (amount: number) => {
    const newBet = currentBet + amount;
    if (newBet >= 1 && newBet <= credits) {
      setCurrentBet(newBet);
    }
  };

  const addCredits = (amount: number) => {
    setCredits(prev => prev + amount);
    
    setReward({
      title: 'Créditos añadidos',
      description: `Has recibido ${amount} créditos nuevos`,
      icon: <Gift className="h-6 w-6 text-amber-500" />
    });
    setShowReward(true);
  };

  const spin = async (slotType: 'classic' | 'fruits' | 'diamond') => {
    if (isSpinning || credits < currentBet) return;
    
    setIsSpinning(true);
    setCredits(prev => prev - currentBet);
    
    const refsArray = slotType === 'classic' 
      ? classicReelRefs.current 
      : slotType === 'fruits' 
        ? fruitsReelRefs.current 
        : diamondReelRefs.current;
    
    const symbolsArray = symbols[slotType];
    const results: string[] = [];
    
    // Spin each reel with staggered delay for more natural effect
    for (let i = 0; i < refsArray.length; i++) {
      const reel = refsArray[i];
      if (reel) {
        await new Promise<string>(resolve => {
          setTimeout(() => {
            // Reset position
            reel.style.transition = 'none';
            reel.style.transform = 'translateY(0)';
            
            setTimeout(() => {
              // Random result
              const randomOffset = Math.floor(Math.random() * symbolsArray.length);
              const symbol = symbolsArray[randomOffset];
              const position = -randomOffset * 100;
              
              // Apply animation
              reel.style.transition = 'transform 2s cubic-bezier(0.1, 0.7, 0.1, 1)';
              reel.style.transform = `translateY(${position}px)`;
              
              // Wait for animation to finish
              reel.addEventListener('transitionend', () => {
                results.push(symbol);
                resolve(symbol);
              }, { once: true });
            }, 10);
          }, i * 200);
        });
      }
    }
    
    // Check for wins after all reels have stopped
    if (results.length === refsArray.length) {
      const win = checkWin(slotType, results);
      
      if (win > 0) {
        setCredits(prev => prev + win);
        
        setReward({
          title: '¡Has ganado!',
          description: `+${win} créditos`,
          icon: <Trophy className="h-6 w-6 text-amber-500" />
        });
        setShowReward(true);
      }
    }
    
    setIsSpinning(false);
  };

  const checkWin = (slotType: 'classic' | 'fruits' | 'diamond', results: string[]): number => {
    const unique = [...new Set(results)];
    let winAmount = 0;
    
    if (slotType === 'classic') {
      if (unique.length === 1) {
        // Three of a kind
        if (results[0] === '7️⃣') winAmount = currentBet * 50;
        else if (results[0] === 'BAR') winAmount = currentBet * 20;
        else if (results[0] === '🍒') winAmount = currentBet * 10;
        else winAmount = currentBet * 5;
      } else if (unique.length === 2) {
        // Two of a kind
        winAmount = currentBet * 2;
      }
    } else if (slotType === 'fruits') {
      const counts: Record<string, number> = {};
      results.forEach(symbol => {
        counts[symbol] = (counts[symbol] || 0) + 1;
      });
      
      // Check for matches
      let maxCount = 0;
      let matchSymbol = '';
      
      for (const symbol in counts) {
        if (counts[symbol] > maxCount) {
          maxCount = counts[symbol];
          matchSymbol = symbol;
        }
      }
      
      if (maxCount >= 5) {
        if (matchSymbol === '🍒') winAmount = currentBet * 100;
        else if (matchSymbol === '🍇') winAmount = currentBet * 50;
        else if (matchSymbol === '🍋') winAmount = currentBet * 30;
        else winAmount = currentBet * 20;
      } else if (maxCount >= 3) {
        winAmount = currentBet * 5;
      } else if (maxCount >= 2) {
        winAmount = currentBet * 1;
      }
    } else if (slotType === 'diamond') {
      if (unique.length === 1) {
        if (results[0] === '💎') winAmount = currentBet * 100;
        else if (results[0] === '💰') winAmount = currentBet * 50;
        else if (results[0] === '🔔') winAmount = currentBet * 20;
        else if (results[0] === '✨') winAmount = currentBet * 10;
        else winAmount = currentBet * 5;
      } else if (unique.length === 2) {
        winAmount = currentBet * 3;
      }
    }
    
    return winAmount;
  };

  return (
    <JourneyLayout
      title="Juegos online con gamificación"
      subtitle="Convierte a tus usuarios en jugadores y ofrece una experiencia única"
      bgColor="bg-gradient-to-br from-amber-500 to-red-600"
    >
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-6">
                <div>
                  <div className="text-sm text-gray-500">CRÉDITOS</div>
                  <div className="text-2xl font-bold text-amber-500">{credits}</div>
                </div>
                <Button 
                  onClick={() => addCredits(1000)}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                >
                  +1000 CRÉDITOS
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button 
                  variant={selectedSlot === 'classic' ? "default" : "outline"}
                  onClick={() => setSelectedSlot('classic')}
                  className={selectedSlot === 'classic' 
                    ? "bg-gradient-to-r from-amber-500 to-red-500" 
                    : "border-amber-300 text-amber-700 hover:text-amber-800"
                  }
                >
                  🎰 Clásica
                </Button>
                <Button 
                  variant={selectedSlot === 'fruits' ? "default" : "outline"}
                  onClick={() => setSelectedSlot('fruits')}
                  className={selectedSlot === 'fruits' 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600" 
                    : "border-emerald-300 text-emerald-700 hover:text-emerald-800"
                  }
                >
                  🍒 Frutas
                </Button>
                <Button 
                  variant={selectedSlot === 'diamond' ? "default" : "outline"}
                  onClick={() => setSelectedSlot('diamond')}
                  className={selectedSlot === 'diamond' 
                    ? "bg-gradient-to-r from-violet-500 to-purple-600" 
                    : "border-violet-300 text-violet-700 hover:text-violet-800"
                  }
                >
                  💎 Diamantes
                </Button>
              </div>

              {/* Classic Slot Machine */}
              <div className={`slot-machine ${selectedSlot === 'classic' ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-bold text-center mb-6">MÁQUINA CLÁSICA</h2>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <div className="flex justify-center gap-4">
                    {[0, 1, 2].map((index) => (
                      <div 
                        key={`classic-${index}`} 
                        className="w-24 h-36 bg-white rounded-md overflow-hidden relative"
                      >
                        <div 
                          ref={el => classicReelRefs.current[index] = el}
                          className="absolute top-0 left-0 w-full transition-transform"
                        >
                          {/* Symbols will be inserted here by JS */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => changeBet(-10)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <Button size="sm" onClick={() => changeBet(-1)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <div className="min-w-16 text-center font-bold">{currentBet}</div>
                    <Button size="sm" onClick={() => changeBet(1)} variant="outline" className="h-8 w-8 p-0">+</Button>
                    <Button size="sm" onClick={() => changeBet(10)} variant="outline" className="h-8 w-8 p-0">+</Button>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 transition-all hover:scale-105"
                    size="lg"
                    disabled={isSpinning || credits < currentBet}
                    onClick={() => spin('classic')}
                  >
                    {isSpinning ? "Girando..." : "¡GIRAR!"}
                  </Button>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm">
                  <h3 className="font-medium mb-2">Tabla de Pagos (x apuesta)</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">7️⃣7️⃣7️⃣</span> = x50
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">BAR BAR BAR</span> = x20
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🍒🍒🍒</span> = x10
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">Cualquier 2 iguales</span> = x2
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Fruits Slot Machine */}
              <div className={`slot-machine ${selectedSlot === 'fruits' ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-bold text-center mb-6">MÁQUINA DE FRUTAS</h2>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div 
                        key={`fruit-${index}`} 
                        className="w-16 h-32 bg-white rounded-md overflow-hidden relative"
                      >
                        <div 
                          ref={el => fruitsReelRefs.current[index] = el}
                          className="absolute top-0 left-0 w-full transition-transform"
                        >
                          {/* Symbols will be inserted here by JS */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => changeBet(-5)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <Button size="sm" onClick={() => changeBet(-1)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <div className="min-w-16 text-center font-bold">{currentBet}</div>
                    <Button size="sm" onClick={() => changeBet(1)} variant="outline" className="h-8 w-8 p-0">+</Button>
                    <Button size="sm" onClick={() => changeBet(5)} variant="outline" className="h-8 w-8 p-0">+</Button>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all hover:scale-105"
                    size="lg"
                    disabled={isSpinning || credits < currentBet}
                    onClick={() => spin('fruits')}
                  >
                    {isSpinning ? "Girando..." : "¡GIRAR!"}
                  </Button>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm">
                  <h3 className="font-medium mb-2">Tabla de Pagos (x apuesta)</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🍒🍒🍒🍒🍒</span> = x100
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🍇🍇🍇🍇🍇</span> = x50
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🍋🍋🍋🍋🍋</span> = x30
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">3+ iguales</span> = x5
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">2 iguales</span> = x1
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Diamond Slot Machine */}
              <div className={`slot-machine ${selectedSlot === 'diamond' ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-bold text-center mb-6">MÁQUINA DE DIAMANTES</h2>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <div className="flex justify-center gap-4">
                    {[0, 1, 2].map((index) => (
                      <div 
                        key={`diamond-${index}`} 
                        className="w-24 h-36 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md overflow-hidden relative"
                      >
                        <div 
                          ref={el => diamondReelRefs.current[index] = el}
                          className="absolute top-0 left-0 w-full transition-transform"
                        >
                          {/* Symbols will be inserted here by JS */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => changeBet(-25)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <Button size="sm" onClick={() => changeBet(-5)} variant="outline" className="h-8 w-8 p-0">-</Button>
                    <div className="min-w-16 text-center font-bold">{currentBet}</div>
                    <Button size="sm" onClick={() => changeBet(5)} variant="outline" className="h-8 w-8 p-0">+</Button>
                    <Button size="sm" onClick={() => changeBet(25)} variant="outline" className="h-8 w-8 p-0">+</Button>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-all hover:scale-105"
                    size="lg"
                    disabled={isSpinning || credits < currentBet}
                    onClick={() => spin('diamond')}
                  >
                    {isSpinning ? "Girando..." : "¡GIRAR!"}
                  </Button>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm">
                  <h3 className="font-medium mb-2">Tabla de Pagos (x apuesta)</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">💎💎💎</span> = x100 (Jackpot)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">💰💰💰</span> = x50
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🔔🔔🔔</span> = x20
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✨✨✨</span> = x10
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">2 iguales</span> = x3
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Rewards popup */}
      <RewardPopup
        title={reward.title}
        description={reward.description}
        icon={reward.icon}
        isVisible={showReward}
        onClose={() => setShowReward(false)}
      />
    </JourneyLayout>
  );
};

export default GamesJourney;
