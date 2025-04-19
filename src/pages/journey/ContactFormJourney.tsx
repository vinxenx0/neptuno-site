
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { FormInput, Star, Trophy, Gift, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  points: number;
}

const services: Service[] = [
  {
    id: 'marketing',
    name: 'Marketing Digital',
    description: 'Estrategias para aumentar la visibilidad y conversión',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    points: 25
  },
  {
    id: 'gamification',
    name: 'Gamificación',
    description: 'Implementación de mecánicas de juego en entornos no lúdicos',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
    points: 25
  },
  {
    id: 'consulting',
    name: 'Consultoría',
    description: 'Asesoramiento estratégico para tu negocio',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    points: 25
  },
  {
    id: 'development',
    name: 'Desarrollo Web',
    description: 'Creación y mantenimiento de aplicaciones web modernas',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    points: 25
  },
  {
    id: 'design',
    name: 'Diseño UX/UI',
    description: 'Experiencias digitales intuitivas y atractivas',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80',
    points: 25
  },
  {
    id: 'analytics',
    name: 'Analítica de datos',
    description: 'Insights profundos sobre tu negocio y clientes',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    points: 25
  }
];

// Reward rules
const rewardRules = [
  {
    type: 'services',
    condition: 3,
    reward: { points: 50, badge: null, coupon: '10% de descuento en tu primer proyecto' }
  },
  {
    type: 'budget',
    condition: 'filled',
    reward: { points: 25, badge: null, coupon: null }
  },
  {
    type: 'all_filled',
    condition: 'complete',
    reward: { points: 75, badge: 'Cliente caliente 🔥', coupon: null }
  }
];

const ContactFormJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    budget: '',
    startDate: '',
    message: ''
  });
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [interestLevel, setInterestLevel] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  
  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
      setInterestLevel(prev => Math.max(0, prev - 10));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
      setInterestLevel(prev => Math.min(100, prev + 10));
      
      // Add points for selecting a service
      const service = services.find(s => s.id === serviceId);
      if (service) {
        addPoints(service.points, `Por seleccionar ${service.name}`);
      }
      
      // Check for rewards
      checkForRewards([...selectedServices, serviceId]);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Increase interest for required fields
    if (!formData[name as keyof typeof formData] && value) {
      setInterestLevel(prev => Math.min(100, prev + 5));
    }
    
    // Budget field specific reward
    if (name === 'budget' && value && !formData.budget) {
      addReward(
        rewardRules[1].reward,
        '¡Información valiosa!',
        'Gracias por compartir tu presupuesto'
      );
    }
    
    // Check if form is complete for final reward
    const isFormComplete = 
      formData.name && 
      formData.email && 
      formData.company && 
      formData.budget && 
      formData.message;
      
    if (isFormComplete && name === 'message' && value) {
      addReward(
        rewardRules[2].reward,
        '¡Información completa!',
        'Has completado todos los campos importantes'
      );
    }
  };
  
  const checkForRewards = (services: string[]) => {
    // Check for service count reward
    if (services.length === rewardRules[0].condition) {
      addReward(
        rewardRules[0].reward,
        '¡Interés múltiple!',
        `Has seleccionado ${rewardRules[0].condition} servicios`
      );
    }
  };
  
  const addReward = (
    reward: { points: number | null, badge: string | null, coupon: string | null },
    title: string,
    description: string
  ) => {
    // Add points
    if (reward.points) {
      addPoints(reward.points, description);
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
    
    // Add coupon
    if (reward.coupon && !coupons.includes(reward.coupon)) {
      setCoupons(prev => [...prev, reward.coupon!]);
      
      setTimeout(() => {
        setCurrentReward({
          title: "¡Cupón desbloqueado!",
          description: reward.coupon,
          icon: <Gift className="h-6 w-6 text-green-600" />
        });
        setShowReward(true);
      }, reward.badge ? 3000 : 1500);
    }
  };
  
  const addPoints = (points: number, reason: string) => {
    setTotalPoints(prev => prev + points);
    
    setCurrentReward({
      title: "¡Puntos ganados!",
      description: `${reason}: +${points} puntos`,
      icon: <Star className="h-6 w-6 text-yellow-500" />
    });
    setShowReward(true);
  };
  
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  
  // Determine progress
  const steps = ['intro', 'services', 'contact', 'confirmation'];
  const progress = Math.min((currentStep / (steps.length - 1)) * 100, 100);
  
  return (
    <JourneyLayout
      title="Formulario de contacto gamificado"
      subtitle="Obtén recompensas por compartir tus intereses y necesidades"
      bgColor="bg-gradient-to-br from-cyan-600 to-blue-700"
    >
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Progress and rewards */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu progreso</CardTitle>
                  <CardDescription>Completa el formulario para maximizar tus recompensas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressBar 
                    progress={Math.round(progress)} 
                    label={`Formulario completo`} 
                    color="bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </CardContent>
              </Card>
              
              {/* Interest level thermometer */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Nivel de interés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-100 rounded-full h-6 p-1">
                    <div 
                      className={`h-4 rounded-full transition-all duration-700 ease-in-out ${
                        interestLevel < 30 
                          ? 'bg-blue-400' 
                          : interestLevel < 60 
                            ? 'bg-gradient-to-r from-blue-500 to-green-500' 
                            : 'bg-gradient-to-r from-yellow-500 to-red-500'
                      }`}
                      style={{ width: `${interestLevel}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Frío</span>
                    <span>Tibio</span>
                    <span>Caliente 🔥</span>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <RewardCard
                  title="Puntos acumulados"
                  value={totalPoints}
                  icon={<Star className="h-5 w-5 text-yellow-300" />}
                  bgColor="bg-gradient-to-br from-cyan-600 to-blue-700"
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
                  bgColor="bg-gradient-to-br from-teal-600 to-green-700"
                />
              </div>
              
              {/* Badges earned */}
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
                          color="bg-cyan-100 text-cyan-800" 
                          icon={<Trophy className="h-3 w-3" />}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Coupons earned */}
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
              
              {/* Service selection info */}
              {selectedServices.length > 0 && currentStep < 3 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Servicios seleccionados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedServices.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{service.name}</span>
                          </div>
                        ) : null;
                      })}
                      
                      {selectedServices.length >= 3 && (
                        <div className="mt-3 bg-blue-50 text-blue-800 p-2 rounded-lg text-xs">
                          ¡Por pedir más info sobre 3+ servicios, obtienes 10% de descuento!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2">
            <Card className="border shadow-lg">
              {currentStep === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <FormInput className="h-10 w-10 text-blue-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    ¿Quieres saber más? Cuéntanos qué te interesa y recibe un regalo.
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Completa nuestro formulario interactivo y gana puntos, badges y descuentos exclusivos.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-left">
                    <h3 className="font-medium text-blue-800 mb-2">Cómo conseguir recompensas:</h3>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <span>Por consultar sobre cada servicio: +25 puntos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <span>Por solicitar info sobre 3 servicios: +50 puntos y cupón de 10%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <span>Por compartir tu presupuesto: +25 puntos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <span>Por completar todos los campos: Badge "Cliente caliente 🔥"</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                    onClick={handleNext}
                  >
                    Empezar consulta rápida
                  </Button>
                </div>
              ) : currentStep === 1 ? (
                <>
                  <CardHeader>
                    <CardTitle>¿Qué servicios te interesan?</CardTitle>
                    <CardDescription>Selecciona los servicios sobre los que te gustaría más información</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map(service => (
                        <div 
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                            selectedServices.includes(service.id) 
                              ? 'ring-2 ring-blue-500 border-blue-500' 
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="h-36 overflow-hidden">
                            <img 
                              src={service.image} 
                              alt={service.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-500 mb-2">{service.description}</div>
                            <div className="flex justify-between mt-2">
                              <span className="flex items-center text-sm text-blue-600">
                                <Star className="h-4 w-4 mr-1" />
                                <span>+{service.points} puntos</span>
                              </span>
                              {selectedServices.includes(service.id) && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={selectedServices.length === 0}
                      className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                    >
                      Siguiente: Tus datos
                    </Button>
                  </CardFooter>
                </>
              ) : currentStep === 2 ? (
                <>
                  <CardHeader>
                    <CardTitle>Tus datos de contacto</CardTitle>
                    <CardDescription>
                      Cuéntanos un poco más sobre ti para personalizar tu propuesta
                      {selectedServices.length >= 3 && (
                        <span className="block mt-2 text-green-600 font-medium">
                          Ya has desbloqueado un cupón del 10% en tu primer proyecto 🎁
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo *</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Tu nombre" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico *</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="correo@ejemplo.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa *</Label>
                          <Input 
                            id="company" 
                            name="company" 
                            placeholder="Nombre de tu empresa" 
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="position">Cargo</Label>
                          <Input 
                            id="position" 
                            name="position" 
                            placeholder="Tu posición en la empresa" 
                            value={formData.position}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Presupuesto estimado *</Label>
                          <Input 
                            id="budget" 
                            name="budget" 
                            placeholder="Rango de presupuesto para el proyecto" 
                            value={formData.budget}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="text-xs text-blue-600 flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            <span>+25 puntos por compartir tu presupuesto</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="startDate">¿Cuándo te gustaría empezar?</Label>
                          <Input 
                            id="startDate" 
                            name="startDate" 
                            placeholder="Fecha estimada" 
                            value={formData.startDate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Cuéntanos más sobre tus necesidades *</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="¿Qué problema quieres resolver con nuestros servicios?" 
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-2">
                        Los campos marcados con * son obligatorios
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email || !formData.company || !formData.budget || !formData.message}
                      className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                    >
                      Enviar solicitud
                    </Button>
                  </CardFooter>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    ¡Gracias por tu interés!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Hemos recibido tu solicitud y te contactaremos pronto con información personalizada sobre los servicios que te interesan.
                  </p>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-lg p-6 mb-6">
                    <p className="text-xl font-medium text-blue-800 mb-3">
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
                        <Gift className="h-8 w-8 text-green-500 mx-auto mb-1" />
                        <p className="text-2xl font-bold">{coupons.length}</p>
                        <p className="text-sm text-gray-500">Cupones</p>
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
                              color="bg-cyan-100 text-cyan-800" 
                              icon={<Trophy className="h-3 w-3" />}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {coupons.length > 0 && (
                      <div>
                        <p className="font-medium mb-2">Cupones desbloqueados:</p>
                        <div className="space-y-2">
                          {coupons.map((coupon, index) => (
                            <div key={index} className="bg-white border border-green-100 rounded-lg p-3 text-green-800 flex items-center justify-center gap-2">
                              <Gift className="h-4 w-4" />
                              <span>{coupon}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Recibirás tu cupón por email
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="outline"
                    >
                      Ver tu estado
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                    >
                      Agendar reunión ya
                    </Button>
                  </div>
                </div>
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

export default ContactFormJourney;
