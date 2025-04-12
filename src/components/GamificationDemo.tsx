
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, TrendingUp, Activity, Star, Gift, Trophy, ShieldCheck, Zap, CheckCircle, Sparkles, Tag, Ticket, CreditCard, Copy, Check } from 'lucide-react';

const GamificationDemo: React.FC = () => {
  // User demo state
  const [activeTab, setActiveTab] = useState('budget');
  const [score, setScore] = useState(120);
  const [credits, setCredits] = useState(0);
  const [level, setLevel] = useState(2);
  const [progress, setProgress] = useState(60);
  const [couponCode, setCouponCode] = useState('');
  const [showBadgeNotification, setShowBadgeNotification] = useState(false);
  const [showCouponNotification, setShowCouponNotification] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, string>>({});
  const [couponClaimed, setCouponClaimed] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);
  
  // Budget items to select
  const budgetItems = [
    { id: 1, name: "Implementación inicial", points: 5, price: "€500" },
    { id: 2, name: "Integración con CRM", points: 10, price: "€800" },
    { id: 3, name: "Sistema de gamificación", points: 15, price: "€1,200" },
    { id: 4, name: "Pasarela de pagos", points: 8, price: "€750" },
    { id: 5, name: "Personalización UI", points: 12, price: "€950" },
    { id: 6, name: "Migración de datos", points: 20, price: "€1,500" },
  ];
  
  // Survey questions
  const surveyQuestions = [
    { id: "q1", question: "¿Cómo valorarías la facilidad de uso de nuestro sistema?", options: ["Muy fácil", "Fácil", "Neutral", "Difícil", "Muy difícil"] },
    { id: "q2", question: "¿Qué característica te ha parecido más útil?", options: ["Gamificación", "Autenticación", "Pagos", "Gestión de usuarios", "API"] },
    { id: "q3", question: "¿Recomendarías Neptuno a otros desarrolladores?", options: ["Definitivamente", "Probablemente", "No estoy seguro", "Probablemente no", "Definitivamente no"] },
  ];
  
  // Newsletters to subscribe
  const newsletters = [
    { id: "news1", name: "Actualizaciones de Producto", cost: 5, description: "Recibe notificaciones sobre nuevas funcionalidades" },
    { id: "news2", name: "Consejos de Gamificación", cost: 10, description: "Estrategias para aumentar el engagement" },
    { id: "news3", name: "Casos de Éxito", cost: 15, description: "Aprende de implementaciones reales" },
  ];
  
  // Badges the user has or can earn
  const badges = [
    { name: "Explorador", icon: <Award size={20} />, unlocked: true },
    { name: "Creador", icon: <Star size={20} />, unlocked: true },
    { name: "Influencer", icon: <TrendingUp size={20} />, unlocked: false },
    { name: "Experto", icon: <ShieldCheck size={20} />, unlocked: false },
  ];
  
  // Generate a coupon code based on selected items
  const generateCoupon = () => {
    if (selectedItems.length === 0) return;
    
    // Calculate points based on selected items
    const earnedPoints = selectedItems.reduce((acc, itemId) => {
      const item = budgetItems.find(b => b.id === itemId);
      return acc + (item ? item.points : 0);
    }, 0);
    
    // Update user score
    setScore(score + earnedPoints);
    
    // Update progress toward next level
    const newProgress = Math.min(progress + (earnedPoints * 2), 100);
    setProgress(newProgress);
    
    // Level up if progress is 100%
    if (newProgress >= 100) {
      setLevel(level + 1);
      setProgress(0);
      // Show badge notification
      setShowBadgeNotification(true);
      setTimeout(() => setShowBadgeNotification(false), 4000);
    }
    
    // Generate coupon code
    const coupon = `NEPT-${Math.floor(Math.random() * 10000)}-${earnedPoints}`;
    setCouponCode(coupon);
    setShowCouponNotification(true);
    setTimeout(() => setShowCouponNotification(false), 4000);
    
    // Switch to coupon tab
    setActiveTab('coupon');
  };
  
  // Claim coupon to convert to credits
  const claimCoupon = () => {
    if (!couponCode || couponClaimed) return;
    
    // Extract points from coupon code (last part after hyphens)
    const creditAmount = parseInt(couponCode.split('-')[2], 10);
    setCredits(credits + creditAmount);
    setCouponClaimed(true);
    
    // Switch to spend tab
    setTimeout(() => {
      setActiveTab('spend');
    }, 1500);
  };
  
  // Subscribe to newsletter using credits
  const subscribeToNewsletter = (newsletterId: string, cost: number) => {
    if (credits < cost) return;
    
    setCredits(credits - cost);
    setSubscribed(true);
    
    // Show survey after subscription
    setTimeout(() => {
      setActiveTab('survey');
    }, 1500);
  };
  
  // Complete survey to earn more points
  const completeSurvey = () => {
    // Check if all questions have been answered
    if (Object.keys(surveyAnswers).length < surveyQuestions.length) return;
    
    // Award points for completing survey
    const surveyPoints = 25;
    setScore(score + surveyPoints);
    
    // Update progress
    const newProgress = Math.min(progress + 15, 100);
    setProgress(newProgress);
    
    // Level up if needed
    if (newProgress >= 100) {
      setLevel(level + 1);
      setProgress(0);
    }
    
    setSurveyCompleted(true);
    
    // Unlock a new badge
    const updatedBadges = badges.map((badge, i) => {
      if (i === 2) return { ...badge, unlocked: true };  // Unlock the "Influencer" badge (index 2)
      return badge;
    });
    
    // Show badge notification after a delay
    setTimeout(() => {
      setShowBadgeNotification(true);
      setTimeout(() => setShowBadgeNotification(false), 4000);
    }, 1000);
  };
  
  // Toggle selection of budget items
  const toggleItemSelection = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  
  // Handle survey answers
  const handleSurveyAnswer = (questionId: string, answer: string) => {
    setSurveyAnswers({
      ...surveyAnswers,
      [questionId]: answer
    });
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2000);
  };

  return (
    <section id="demo" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prueba la Gamificación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimenta cómo funciona el sistema de gamificación de Neptuno con esta demo interactiva.
            Completa el journey para ver cómo los usuarios ganan puntos, obtienen cupones, canjean créditos y desbloquean logros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Demo panel */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 relative overflow-hidden">
            {/* Notifications */}
            {showBadgeNotification && (
              <div className="absolute top-4 right-4 bg-neptuno-amber text-white px-4 py-2 rounded-lg flex items-center animate-fade-in z-50">
                <Trophy size={16} className="mr-2" />
                ¡Nuevo logro desbloqueado!
              </div>
            )}
            
            {showCouponNotification && (
              <div className="absolute top-4 right-4 bg-neptuno-blue text-white px-4 py-2 rounded-lg flex items-center animate-fade-in z-50">
                <Ticket size={16} className="mr-2" />
                ¡Has generado un cupón de créditos!
              </div>
            )}
            
            {/* User stats */}
            <div className="flex items-center justify-between mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {level}
                </div>
                <div>
                  <h3 className="font-medium">Nivel Actual</h3>
                  <p className="text-sm text-gray-500">Colaborador {level === 1 ? "Novato" : level === 2 ? "Junior" : "Senior"}</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <Activity className="text-neptuno-blue mr-1" size={18} />
                    <span className="font-bold text-xl">{score}</span>
                  </div>
                  <p className="text-xs text-gray-500">Puntos</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <CreditCard className="text-neptuno-amber mr-1" size={18} />
                    <span className="font-bold text-xl">{credits}</span>
                  </div>
                  <p className="text-xs text-gray-500">Créditos</p>
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progreso hacia nivel {level + 1}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'budget' ? 'border-b-2 border-neptuno-blue text-neptuno-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('budget')}
              >
                1. Presupuesto
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'coupon' ? 'border-b-2 border-neptuno-blue text-neptuno-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('coupon')}
              >
                2. Cupón
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'spend' ? 'border-b-2 border-neptuno-blue text-neptuno-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('spend')}
              >
                3. Canjear
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'survey' ? 'border-b-2 border-neptuno-blue text-neptuno-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('survey')}
              >
                4. Encuesta
              </button>
            </div>
            
            {/* Tab content */}
            <div className="mb-6">
              {/* Budget Tab */}
              {activeTab === 'budget' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold">Solicitar presupuesto</h3>
                  <p className="text-sm text-gray-600">
                    Selecciona los servicios que te interesan para solicitar un presupuesto personalizado.
                    <span className="block mt-1 text-neptuno-blue font-medium">Por cada servicio seleccionado ganarás puntos y recibirás un cupón de créditos.</span>
                  </p>
                  
                  <div className="space-y-3">
                    {budgetItems.map(item => (
                      <div 
                        key={item.id}
                        className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedItems.includes(item.id) 
                            ? 'border-neptuno-blue bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => toggleItemSelection(item.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-md mr-3 flex items-center justify-center ${
                            selectedItems.includes(item.id) ? 'bg-neptuno-blue text-white' : 'border border-gray-300'
                          }`}>
                            {selectedItems.includes(item.id) && <Check size={14} />}
                          </div>
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <Activity size={14} className="mr-1" />
                              <span>{item.points} puntos</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={generateCoupon} 
                      disabled={selectedItems.length === 0}
                      className="w-full bg-neptuno-blue hover:bg-blue-600"
                    >
                      Solicitar Presupuesto 
                      {selectedItems.length > 0 && (
                        <span className="ml-1">
                          (+{selectedItems.reduce((acc, id) => {
                            const item = budgetItems.find(b => b.id === id);
                            return acc + (item ? item.points : 0);
                          }, 0)} puntos)
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Coupon Tab */}
              {activeTab === 'coupon' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold">Tu cupón generado</h3>
                  <p className="text-sm text-gray-600">
                    Has recibido un cupón de créditos por solicitar tu presupuesto. 
                    Canjéalo para utilizar estos créditos en nuestros servicios.
                  </p>
                  
                  {couponCode ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center relative">
                      <div className="absolute top-2 right-2">
                        <button 
                          onClick={copyToClipboard}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          title="Copiar código"
                        >
                          {couponCopied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-500" />}
                        </button>
                      </div>
                      
                      <div className="mb-4">
                        <Tag className="h-10 w-10 mx-auto text-neptuno-amber mb-2" />
                        <h4 className="font-medium">Cupón de créditos</h4>
                      </div>
                      
                      <div className="bg-white border border-dashed border-gray-300 rounded py-3 px-6 font-mono text-lg mb-6">
                        {couponCode}
                      </div>
                      
                      <Button 
                        onClick={claimCoupon} 
                        disabled={couponClaimed}
                        className="w-full bg-neptuno-amber hover:bg-amber-500 text-white"
                      >
                        {couponClaimed ? 'Cupón canjeado' : 'Canjear cupón'}
                      </Button>
                      
                      {couponClaimed && (
                        <p className="text-sm text-green-600 mt-3 flex items-center justify-center">
                          <CheckCircle size={16} className="mr-1" />
                          ¡Créditos añadidos a tu cuenta!
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">Primero solicita un presupuesto para recibir un cupón.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveTab('budget')} 
                        className="mt-4"
                      >
                        Volver al presupuesto
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Spend Credits Tab */}
              {activeTab === 'spend' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold">Usar tus créditos</h3>
                  <p className="text-sm text-gray-600">
                    Utiliza tus créditos para suscribirte a nuestros boletines especializados.
                    <span className="block font-medium text-neptuno-blue mt-1">Actualmente tienes {credits} créditos.</span>
                  </p>
                  
                  {credits > 0 ? (
                    <div className="space-y-4">
                      {newsletters.map(newsletter => (
                        <div 
                          key={newsletter.id} 
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{newsletter.name}</h4>
                            <Badge variant="outline" className="bg-gray-100">
                              {newsletter.cost} créditos
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4">{newsletter.description}</p>
                          
                          <Button 
                            onClick={() => subscribeToNewsletter(newsletter.id, newsletter.cost)} 
                            disabled={credits < newsletter.cost || subscribed}
                            variant={subscribed ? "outline" : "default"}
                            className={subscribed ? "w-full" : "w-full bg-neptuno-blue hover:bg-blue-600"}
                          >
                            {subscribed ? 'Suscrito' : 'Suscribirse'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">Primero canjea un cupón para obtener créditos.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveTab('coupon')} 
                        className="mt-4"
                      >
                        Volver a cupones
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Survey Tab */}
              {activeTab === 'survey' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold">Encuesta de satisfacción</h3>
                  <p className="text-sm text-gray-600">
                    Completa esta breve encuesta y gana 25 puntos adicionales.
                    {subscribed && <span className="block font-medium text-neptuno-blue mt-1">¡Gracias por tu suscripción! Ayúdanos a mejorar.</span>}
                  </p>
                  
                  {subscribed ? (
                    <>
                      {!surveyCompleted ? (
                        <div className="space-y-6">
                          {surveyQuestions.map(q => (
                            <div key={q.id} className="space-y-3">
                              <h4 className="font-medium text-sm">{q.question}</h4>
                              <div className="space-y-2">
                                {q.options.map(option => (
                                  <div 
                                    key={option} 
                                    className={`flex items-center p-2 border rounded-md cursor-pointer ${
                                      surveyAnswers[q.id] === option 
                                        ? 'border-neptuno-blue bg-blue-50' 
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => handleSurveyAnswer(q.id, option)}
                                  >
                                    <div className={`w-4 h-4 rounded-full mr-2 ${
                                      surveyAnswers[q.id] === option 
                                        ? 'bg-neptuno-blue' 
                                        : 'border border-gray-300'
                                    }`} />
                                    <span className="text-sm">{option}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          <Button 
                            onClick={completeSurvey} 
                            disabled={Object.keys(surveyAnswers).length < surveyQuestions.length}
                            className="w-full bg-neptuno-blue hover:bg-blue-600 mt-4"
                          >
                            Enviar encuesta (+25 puntos)
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center py-6 bg-green-50 border border-green-100 rounded-lg">
                          <CheckCircle size={48} className="mx-auto text-green-500 mb-2" />
                          <h4 className="text-lg font-medium text-green-700">¡Encuesta completada!</h4>
                          <p className="text-sm text-green-600 mt-1">Has ganado 25 puntos y desbloqueado un nuevo logro.</p>
                          
                          <div className="mt-6 flex justify-center">
                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-md border border-green-200">
                              <TrendingUp size={32} className="text-neptuno-amber" />
                            </div>
                          </div>
                          <p className="text-sm font-medium mt-2">Logro: Influencer</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">Primero suscríbete a un boletín para acceder a la encuesta.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveTab('spend')} 
                        className="mt-4"
                      >
                        Volver a suscripciones
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Badges */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Logros desbloqueados</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col items-center p-3 rounded-lg border ${
                      badge.unlocked 
                        ? "bg-white border-neptuno-amber text-neptuno-navy" 
                        : "bg-gray-100 border-gray-200 text-gray-400"
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${
                      badge.unlocked ? "bg-neptuno-amber/10 text-neptuno-amber" : "bg-gray-200 text-gray-400"
                    }`}>
                      {badge.icon}
                    </div>
                    <span className="text-xs text-center">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Explanation section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-4">Journey de Gamificación</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-neptuno-blue h-6 w-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Presupuesto Gamificado</h4>
                    <p className="text-sm text-gray-600">Los usuarios ganan puntos por cada ítem que seleccionan en su solicitud de presupuesto, incentivando interacciones completas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-neptuno-blue h-6 w-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Generación de Cupones</h4>
                    <p className="text-sm text-gray-600">Las acciones generan cupones personalizados que incentivan al usuario a continuar con el proceso de conversión.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-neptuno-blue h-6 w-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Canje de Créditos</h4>
                    <p className="text-sm text-gray-600">Los créditos acumulados pueden canjearse por recompensas, creando un sistema de valor percibido que fomenta la fidelización.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-neptuno-blue h-6 w-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">4</div>
                  <div>
                    <h4 className="font-medium">Feedback y Recompensas</h4>
                    <p className="text-sm text-gray-600">Se incentiva el feedback y la participación con puntos adicionales y logros especiales, cerrando el círculo de engagement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Integración con tu código</h3>
                <Badge className="bg-green-500">Fácil</Badge>
              </div>
              
              <div className="code-block mb-4">
                <pre>{`// Agregar puntos y generar un cupón
await neptuno.gamification.addPoints({
  userId: "user_123",
  points: 15,
  action: "budget_request",
  metadata: { items: [1, 3, 5] }
});

// Generar y enviar un cupón automáticamente
const coupon = await neptuno.coupons.create({
  userId: "user_123",
  creditsValue: 15,
  expiresIn: "7d"
});

// Verificar y otorgar badges según reglas
await neptuno.gamification.checkAchievements(userId);`}</pre>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center text-sm text-blue-700">
                  <Sparkles size={16} className="mr-2" />
                  <span className="font-medium">Más que gamificación:</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  Este sistema completo de engagement aumenta las conversiones hasta un 40% y la retención de usuarios hasta un 30%, según estudios recientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationDemo;
