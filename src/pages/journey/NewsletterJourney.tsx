
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { Mail, Star, Trophy, Gift, CheckCircle, ChevronRight, Zap } from 'lucide-react';

const NewsletterJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  
  const interests = [
    { id: 'tech', name: 'Tecnología', points: 10 },
    { id: 'marketing', name: 'Marketing Digital', points: 10 },
    { id: 'design', name: 'Diseño UX/UI', points: 10 },
    { id: 'business', name: 'Negocios', points: 10 },
    { id: 'productivity', name: 'Productividad', points: 10 },
    { id: 'ai', name: 'Inteligencia Artificial', points: 15 },
  ];
  
  const frequency = [
    { id: 'daily', name: 'Diaria', points: 25 },
    { id: 'weekly', name: 'Semanal', points: 15 },
    { id: 'monthly', name: 'Mensual', points: 5 },
  ];
  
  const handleNext = () => {
    if (currentStep === 0 && email) {
      addReward(
        { points: 20, badge: null },
        '¡Email registrado!',
        'Has obtenido 20 puntos por registrar tu email'
      );
      setCurrentStep(1);
    } else if (currentStep === 1 && selectedInterests.length > 0) {
      const interestPoints = selectedInterests.reduce((total, interest) => {
        const found = interests.find(i => i.id === interest);
        return total + (found ? found.points : 0);
      }, 0);
      
      addReward(
        { points: interestPoints, badge: selectedInterests.length >= 3 ? 'Entusiasta Curioso' : null },
        '¡Intereses seleccionados!',
        `Has obtenido ${interestPoints} puntos por seleccionar tus intereses`
      );
      
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setSubscribed(true);
      setCurrentStep(3);
      
      addReward(
        { points: 50, badge: 'Suscriptor Prime' },
        '¡Suscripción completada!',
        'Has obtenido 50 puntos y un badge especial por completar tu suscripción'
      );
    }
  };
  
  const handleToggleInterest = (id: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const handleSelectFrequency = (id: string) => {
    const selectedFreq = frequency.find(f => f.id === id);
    if (selectedFreq) {
      addReward(
        { points: selectedFreq.points, badge: id === 'daily' ? 'Super Fan' : null },
        `¡Has elegido frecuencia ${selectedFreq.name}!`,
        `Has obtenido ${selectedFreq.points} puntos por tu elección`
      );
    }
  };
  
  const addReward = (
    reward: { points: number, badge: string | null },
    title: string,
    description: string
  ) => {
    // Add points
    if (reward.points) {
      setTotalPoints(prev => prev + reward.points);
      
      setCurrentReward({
        title,
        description,
        icon: <Star className="h-6 w-6 text-yellow-500" />
      });
      setShowReward(true);
    }
    
    // Add badge
    if (reward.badge && !badges.includes(reward.badge)) {
      setBadges(prev => [...prev, reward.badge!]);
      
      setTimeout(() => {
        setCurrentReward({
          title: "¡Badge desbloqueado!",
          description: `Has obtenido el badge "${reward.badge}"`,
          icon: <Trophy className="h-6 w-6 text-indigo-600" />
        });
        setShowReward(true);
      }, 1500);
    }
  };

  return (
    <JourneyLayout
      title="Suscripción a Newsletter Gamificada"
      subtitle="Convierte suscriptores en embajadores con recompensas por interacción"
      bgColor="bg-gradient-to-br from-violet-600 to-purple-700"
    >
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {currentStep === 0 ? (
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-violet-600" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">
                  ¡Bienvenido a nuestro Newsletter Premium!
                </h2>
                <p className="text-gray-600 mb-8">
                  Suscríbete a nuestro newsletter y desbloquea contenido exclusivo, badges y descuentos. 
                  Cada interacción te da puntos que puedes canjear por beneficios.
                </p>
                
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-purple-100 rounded-lg p-5 mb-8 text-left">
                  <h3 className="font-medium text-purple-800 mb-3">Beneficios que obtendrás:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="bg-white rounded-full p-1 mt-0.5">
                        <Zap size={14} className="text-yellow-500" />
                      </div>
                      <span className="text-purple-700 text-sm">Contenido en exclusiva antes que nadie</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white rounded-full p-1 mt-0.5">
                        <Zap size={14} className="text-yellow-500" />
                      </div>
                      <span className="text-purple-700 text-sm">Descuentos especiales en cursos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white rounded-full p-1 mt-0.5">
                        <Zap size={14} className="text-yellow-500" />
                      </div>
                      <span className="text-purple-700 text-sm">Invitaciones a webinars exclusivos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white rounded-full p-1 mt-0.5">
                        <Zap size={14} className="text-yellow-500" />
                      </div>
                      <span className="text-purple-700 text-sm">Acceso a material descargable premium</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4"
                  />
                  <Button 
                    onClick={handleNext}
                    disabled={!email}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800"
                  >
                    Comenzar a ganar recompensas
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500">
                  Al suscribirte, aceptas recibir emails de marketing y nuestra política de privacidad.
                </p>
              </div>
            </Card>
          </div>
        ) : currentStep === 1 ? (
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Personaliza tu experiencia</CardTitle>
                <CardDescription className="text-center">Selecciona tus intereses y gana puntos por cada elección</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="mb-3">
                  <Input 
                    type="text" 
                    placeholder="Tu nombre (opcional)" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-3"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">¿Qué temas te interesan más?</h3>
                  <p className="text-sm text-muted-foreground">Selecciona al menos uno para continuar</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interests.map(interest => (
                      <div 
                        key={interest.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-all
                          ${selectedInterests.includes(interest.id) 
                            ? 'bg-violet-50 border-violet-300 shadow-sm' 
                            : 'hover:bg-gray-50 border-gray-200'
                          }
                        `}
                        onClick={() => handleToggleInterest(interest.id)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{interest.name}</span>
                          {selectedInterests.includes(interest.id) && (
                            <CheckCircle size={16} className="text-violet-600" />
                          )}
                        </div>
                        <span className="text-xs bg-violet-100 text-violet-800 px-1.5 py-0.5 rounded-full">
                          +{interest.points} pts
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <div className="text-sm font-medium">Intereses seleccionados: {selectedInterests.length}</div>
                      {selectedInterests.length >= 3 && (
                        <div className="text-xs text-violet-700">¡Desbloquearás el badge "Entusiasta Curioso"!</div>
                      )}
                    </div>
                    <Button 
                      onClick={handleNext}
                      disabled={selectedInterests.length === 0}
                      className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800"
                    >
                      Continuar <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card className="border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Tu progreso</h3>
                      <div className="text-sm text-muted-foreground">Estás a mitad de camino</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{totalPoints} pts</div>
                      <div className="text-xs text-muted-foreground">puntos acumulados</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <ProgressBar progress={50} color="bg-gradient-to-r from-violet-500 to-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : currentStep === 2 ? (
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Casi has terminado</CardTitle>
                <CardDescription className="text-center">
                  Elige la frecuencia con la que quieres recibir nuestro newsletter
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {frequency.map(freq => (
                    <div 
                      key={freq.id}
                      className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-all"
                      onClick={() => handleSelectFrequency(freq.id)}
                    >
                      <h3 className="font-medium mb-1">{freq.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {freq.id === 'daily' && 'Las noticias más importantes cada día'}
                        {freq.id === 'weekly' && 'Un resumen de lo mejor de la semana'}
                        {freq.id === 'monthly' && 'Lo más destacado del mes'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded-full">
                          +{freq.points} pts
                        </span>
                        {freq.id === 'daily' && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            +Badge
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Tu puntuación actual</h3>
                    <span className="font-bold">{totalPoints} puntos</span>
                  </div>
                  
                  {badges.length > 0 && (
                    <div className="mt-3">
                      <h3 className="font-medium mb-2">Tus badges</h3>
                      <div className="flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            text={badge} 
                            color="bg-violet-100 text-violet-800" 
                            icon={<Trophy className="h-3 w-3" />}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="border-t bg-gray-50 p-4 flex justify-end">
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800"
                >
                  Completar suscripción
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">
                  ¡Tu suscripción ha sido confirmada!
                </h2>
                
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-lg p-6 mb-6">
                  <p className="text-xl font-medium text-violet-800 mb-3">
                    Recompensas obtenidas
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Star className="h-8 w-8 text-yellow-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{totalPoints}</p>
                      <p className="text-sm text-gray-500">Puntos</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Trophy className="h-8 w-8 text-indigo-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{badges.length}</p>
                      <p className="text-sm text-gray-500">Badges</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Gift className="h-8 w-8 text-violet-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-500">Recompensas</p>
                    </div>
                  </div>
                  
                  {badges.length > 0 && (
                    <div className="mb-4">
                      <p className="font-medium mb-2">Badges desbloqueados:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            text={badge} 
                            color="bg-violet-100 text-violet-800" 
                            icon={<Trophy className="h-3 w-3" />}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <p className="font-medium mb-2">¡Desbloqueos conseguidos!</p>
                    <div className="space-y-2">
                      <div className="bg-white border border-violet-100 rounded-lg p-3 text-violet-800 flex items-center">
                        <Gift className="h-4 w-4 mr-2" />
                        <span>10% de descuento en tu próximo curso</span>
                      </div>
                      <div className="bg-white border border-violet-100 rounded-lg p-3 text-violet-800 flex items-center">
                        <Gift className="h-4 w-4 mr-2" />
                        <span>Ebook gratuito: "7 estrategias de marketing"</span>
                      </div>
                      <div className="bg-white border border-violet-100 rounded-lg p-3 text-violet-800 flex items-center">
                        <Gift className="h-4 w-4 mr-2" />
                        <span>Acceso a webinar exclusivo del mes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-md mx-auto">
                  <p className="text-sm text-gray-600 mb-6">
                    Hemos enviado un correo de confirmación a <strong>{email}</strong>. 
                    Revisa tu bandeja de entrada (o spam) y haz clic en el enlace para activar todas tus recompensas.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setCurrentStep(0);
                        setEmail('');
                        setName('');
                        setSelectedInterests([]);
                        setTotalPoints(0);
                        setBadges([]);
                        setSubscribed(false);
                      }}
                    >
                      Volver a empezar
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800"
                    >
                      Compartir mis recompensas
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
      </div>
    </JourneyLayout>
  );
};

export default NewsletterJourney;
