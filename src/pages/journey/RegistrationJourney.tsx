
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { CheckCircle, Star, Gift, Trophy, User } from 'lucide-react';

// Steps for the registration journey
const steps = [
  {
    title: "¡Bienvenido a tu perfil de recompensas!",
    description: "Completa tu perfil y desbloquea regalos sorpresa, badges y cupones."
  },
  {
    title: "Información básica",
    description: "Estos datos nos ayudarán a personalizar tu experiencia.",
    fields: ["name", "email", "age", "location"],
    reward: {
      points: 50,
      badge: "Primeros pasos",
      coupon: "10% en tu próxima compra"
    }
  },
  {
    title: "Intereses y comportamiento",
    description: "Conocerte mejor nos ayuda a recomendarte contenido relevante.",
    fields: ["interests", "digitalLevel", "contentPreference"],
    reward: {
      points: 100,
      badge: "Conocerte mejor"
    }
  },
  {
    title: "Insights personales",
    description: "Estas últimas preguntas nos ayudan a entender tus motivaciones.",
    fields: ["motivation", "problemToSolve"],
    reward: {
      points: 150,
      coupon: "25% de descuento en cualquier servicio"
    }
  },
  {
    title: "¡Tu perfil está completo!",
    description: "Has desbloqueado todas las recompensas disponibles.",
    fields: []
  }
];

const RegistrationJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    const currentStepData = steps[currentStep];
    
    // Award rewards if available for the current step
    if (currentStepData.reward) {
      // Add points
      if (currentStepData.reward.points) {
        setTotalPoints(prev => prev + currentStepData.reward.points);
      }
      
      // Add badge
      if (currentStepData.reward.badge) {
        setBadges(prev => [...prev, currentStepData.reward.badge!]);
        
        setCurrentReward({
          title: "¡Badge desbloqueado!",
          description: `Has obtenido el badge "${currentStepData.reward.badge}"`,
          icon: <Trophy className="h-6 w-6 text-indigo-600" />
        });
        setShowReward(true);
      }
      
      // Add coupon
      if (currentStepData.reward.coupon) {
        setCoupons(prev => [...prev, currentStepData.reward.coupon!]);
        
        // Show coupon reward after badge if there is one
        setTimeout(() => {
          setCurrentReward({
            title: "¡Cupón desbloqueado!",
            description: currentStepData.reward.coupon!,
            icon: <Gift className="h-6 w-6 text-green-600" />
          });
          setShowReward(true);
        }, currentStepData.reward.badge ? 1500 : 0);
      }
    }
    
    // Move to next step
    setCurrentStep(nextStep);
  };

  const progress = Math.min((currentStep / (steps.length - 1)) * 100, 100);
  
  return (
    <JourneyLayout
      title="Registro enriquecido con recompensas"
      subtitle="Obtén incentivos por completar tu perfil y compartir información"
      bgColor="bg-gradient-to-br from-blue-600 to-indigo-800"
    >
      {/* Main content area */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Progress and rewards */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu progreso</CardTitle>
                  <CardDescription>Completa todos los pasos para maximizar tus recompensas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressBar 
                    progress={Math.round(progress)} 
                    label={`Perfil completo`} 
                  />
                  
                  <div className="mt-4">
                    {progress < 30 && <p className="text-sm text-gray-500">Estás empezando tu perfil</p>}
                    {progress >= 30 && progress < 60 && <p className="text-sm text-gray-500">¡Vas por buen camino!</p>}
                    {progress >= 60 && progress < 100 && <p className="text-sm text-gray-500">¡Casi completo!</p>}
                    {progress === 100 && <p className="text-sm text-green-600 font-medium">¡Perfil completado!</p>}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <RewardCard
                  title="Puntos acumulados"
                  value={totalPoints}
                  icon={<Star className="h-5 w-5 text-yellow-300" />}
                  bgColor="bg-gradient-to-br from-indigo-600 to-purple-700"
                />
                
                <RewardCard
                  title="Badges"
                  value={badges.length}
                  icon={<Trophy className="h-5 w-5 text-amber-500" />}
                  bgColor="bg-gradient-to-br from-amber-500 to-orange-600"
                />
                
                <RewardCard
                  title="Cupones"
                  value={coupons.length}
                  icon={<Gift className="h-5 w-5 text-green-500" />}
                  bgColor="bg-gradient-to-br from-emerald-600 to-green-700"
                />
              </div>
              
              {badges.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Tus Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {badges.map((badge, index) => (
                        <Badge 
                          key={index} 
                          text={badge} 
                          color="bg-indigo-100 text-indigo-800" 
                          icon={<Trophy className="h-3 w-3" />}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {coupons.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Tus Cupones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coupons.map((coupon, index) => (
                        <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-3 text-sm flex items-center gap-2">
                          <Gift className="h-4 w-4 text-green-500" />
                          <span>{coupon}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Right column: Main content */}
          <div className="lg:col-span-2">
            <Card className="border shadow-lg">
              {currentStep === 0 ? (
                <>
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                      <Gift className="h-10 w-10 text-blue-600" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3">
                      {steps[currentStep].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {steps[currentStep].description}
                    </p>
                    
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      onClick={handleNext}
                    >
                      Empezar ahora
                    </Button>
                  </div>
                </>
              ) : currentStep === steps.length - 1 ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {steps[currentStep].description}
                  </p>
                  
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                    <p className="text-lg font-medium text-green-800">
                      ¡Has completado tu perfil con éxito!
                    </p>
                    <p className="text-green-700">
                      Tienes {totalPoints} puntos, {badges.length} badges y {coupons.length} cupones desbloqueados 🎁
                    </p>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    Ver panel de recompensas
                  </Button>
                </div>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle>{steps[currentStep].title}</CardTitle>
                    <CardDescription>{steps[currentStep].description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {steps[currentStep].fields?.includes("name") && (
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input id="name" placeholder="Tu nombre" />
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("email") && (
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("age") && (
                        <div className="space-y-2">
                          <Label htmlFor="age">Edad</Label>
                          <Input id="age" type="number" placeholder="Tu edad" />
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("location") && (
                        <div className="space-y-2">
                          <Label htmlFor="location">Localización</Label>
                          <Input id="location" placeholder="Ciudad, País" />
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("interests") && (
                        <div className="space-y-2">
                          <Label>Intereses (selecciona al menos 2)</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {["Marketing", "Tecnología", "Diseño", "Ventas", "Educación", "Entretenimiento"].map(interest => (
                              <div key={interest} className="flex items-center space-x-2">
                                <input type="checkbox" id={interest} className="rounded text-blue-600" />
                                <label htmlFor={interest} className="text-sm">{interest}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("digitalLevel") && (
                        <div className="space-y-2">
                          <Label>Nivel de habilidad digital</Label>
                          <div className="space-y-2">
                            {["Principiante", "Intermedio", "Avanzado", "Experto"].map(level => (
                              <div key={level} className="flex items-center space-x-2">
                                <input type="radio" name="digitalLevel" id={level} className="text-blue-600" />
                                <label htmlFor={level} className="text-sm">{level}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("contentPreference") && (
                        <div className="space-y-2">
                          <Label htmlFor="contentPreference">Preferencia de contenido</Label>
                          <select 
                            id="contentPreference" 
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="videos">Videos</option>
                            <option value="articles">Artículos</option>
                            <option value="podcasts">Podcasts</option>
                            <option value="webinars">Webinars</option>
                          </select>
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("motivation") && (
                        <div className="space-y-2">
                          <Label htmlFor="motivation">¿Qué te motiva?</Label>
                          <textarea 
                            id="motivation" 
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows={3}
                            placeholder="Describe lo que te motiva..."
                          ></textarea>
                        </div>
                      )}
                      
                      {steps[currentStep].fields?.includes("problemToSolve") && (
                        <div className="space-y-2">
                          <Label htmlFor="problemToSolve">¿Qué problema quieres resolver?</Label>
                          <textarea 
                            id="problemToSolve" 
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows={3}
                            placeholder="Describe el problema que quieres resolver..."
                          ></textarea>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center">
                      {steps[currentStep].reward?.points && (
                        <div className="flex items-center text-sm text-blue-600 mr-3">
                          <Star className="h-4 w-4 mr-1" />
                          <span>+{steps[currentStep].reward.points} puntos</span>
                        </div>
                      )}
                    </div>
                    
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Continuar
                    </Button>
                  </CardFooter>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
      
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
    </JourneyLayout>
  );
};

export default RegistrationJourney;
