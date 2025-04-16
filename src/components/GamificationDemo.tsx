
import React, { useState } from 'react';
import { ChevronRight, Check, Star, MessageSquareQuote, CreditCard, Award, Gift, Flag, HelpCircle, MailCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GamificationDemo = () => {
  const [selectedTab, setSelectedTab] = useState("journey-1");
  const [step, setStep] = useState(1);
  const [points, setPoints] = useState(0);
  const [credits, setCredits] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [supportStep, setSupportStep] = useState(1);
  const [supportPoints, setSupportPoints] = useState(0);
  const [supportCredits, setSupportCredits] = useState(0);
  const [supportBadges, setSupportBadges] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedSupportOptions, setSelectedSupportOptions] = useState<string[]>([]);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showSupportCouponModal, setShowSupportCouponModal] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [supportCouponCode, setSupportCouponCode] = useState("");
  const [couponRedeemed, setCouponRedeemed] = useState(false);
  const [supportCouponRedeemed, setSupportCouponRedeemed] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const budgetItems = [
    {id: 'website', label: 'Sitio Web'},
    {id: 'ecommerce', label: 'Tienda Online'},
    {id: 'seo', label: 'Optimización SEO'},
    {id: 'sem', label: 'Publicidad SEM'},
    {id: 'social', label: 'Gestión Redes Sociales'},
    {id: 'email', label: 'Email Marketing'},
    {id: 'crm', label: 'CRM & Automatización'},
    {id: 'content', label: 'Contenido Digital'}
  ];
  
  const supportOptions = [
    {id: 'tech-issue', label: 'Problema técnico'},
    {id: 'billing', label: 'Consulta de facturación'},
    {id: 'feature', label: 'Solicitud de funcionalidad'},
    {id: 'account', label: 'Problemas con la cuenta'},
    {id: 'integration', label: 'Ayuda con integraciones'},
    {id: 'documentation', label: 'Consulta de documentación'},
    {id: 'bug', label: 'Reporte de error'},
    {id: 'other', label: 'Otra consulta'},
  ];

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  
  const toggleSupportOption = (id: string) => {
    if (selectedSupportOptions.includes(id)) {
      setSelectedSupportOptions(selectedSupportOptions.filter(item => item !== id));
    } else {
      setSelectedSupportOptions([...selectedSupportOptions, id]);
    }
  };

  const handleSubmitBudget = () => {
    setStep(2);
    const newPoints = selectedItems.length * 10;
    setPoints(newPoints);
    setCouponCode(`BUDGET-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
    setShowCouponModal(true);
  };
  
  const handleSubmitSupport = () => {
    setSupportStep(2);
    const newPoints = selectedSupportOptions.length * 15;
    setSupportPoints(newPoints);
    setSupportCouponCode(`SUPPORT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
    setShowSupportCouponModal(true);
  };

  const handleRedeemCoupon = () => {
    setCredits(selectedItems.length * 15);
    setCouponRedeemed(true);
    setShowCouponModal(false);
    setStep(3);
  };
  
  const handleRedeemSupportCoupon = () => {
    setSupportCredits(selectedSupportOptions.length * 20);
    setSupportCouponRedeemed(true);
    setShowSupportCouponModal(false);
    setSupportStep(3);
  };

  const handleSubmitSurvey = () => {
    setPoints(prevPoints => prevPoints + 25);
    setBadges([...badges, "customer_feedback"]);
    setSurveySubmitted(true);
    setStep(4);
  };
  
  const handleSubmitSupportDetails = () => {
    setSupportPoints(prevPoints => prevPoints + 30);
    setSupportBadges([...supportBadges, "support_contributor"]);
    setSupportSubmitted(true);
    setSupportStep(4);
  };

  const resetJourney = (journey: 'budget' | 'support') => {
    if (journey === 'budget') {
      setStep(1);
      setPoints(0);
      setCredits(0);
      setBadges([]);
      setSelectedItems([]);
      setCouponCode("");
      setCouponRedeemed(false);
      setSurveySubmitted(false);
    } else {
      setSupportStep(1);
      setSupportPoints(0);
      setSupportCredits(0);
      setSupportBadges([]);
      setSelectedSupportOptions([]);
      setSupportCouponCode("");
      setSupportCouponRedeemed(false);
      setSupportSubmitted(false);
    }
  };

  return (
    <section id="demo" className="section bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prueba la Gamificación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Observa cómo funciona la gamificación para aumentar el engagement y la conversión de usuarios.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="journey-1">Journey de Presupuesto</TabsTrigger>
                <TabsTrigger value="journey-2">Journey de Soporte</TabsTrigger>
              </TabsList>
              
              <div className="mt-8">
                {/* User Stats Bar */}
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-neptuno-blue to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      U
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Usuario Demo</div>
                      <div className="text-sm text-gray-600">demo@neptuno.dev</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm">
                      <Star className="w-5 h-5 text-yellow-500 mr-1.5" />
                      <span className="font-medium">{selectedTab === 'journey-1' ? points : supportPoints}</span>
                      <span className="text-gray-500 text-sm ml-1">puntos</span>
                    </div>
                    
                    <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm">
                      <CreditCard className="w-5 h-5 text-blue-500 mr-1.5" />
                      <span className="font-medium">{selectedTab === 'journey-1' ? credits : supportCredits}</span>
                      <span className="text-gray-500 text-sm ml-1">créditos</span>
                    </div>
                    
                    <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm">
                      <Award className="w-5 h-5 text-purple-500 mr-1.5" />
                      <span className="font-medium">{selectedTab === 'journey-1' ? badges.length : supportBadges.length}</span>
                      <span className="text-gray-500 text-sm ml-1">insignias</span>
                    </div>
                  </div>
                </div>
                
                <TabsContent value="journey-1" className="mt-2 space-y-8">
                  {/* Budget Journey */}
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className={`${step >= 1 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                      </div>
                      <div className={`h-1 w-12 ${step > 1 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${step >= 2 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                      </div>
                      <div className={`h-1 w-12 ${step > 2 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${step >= 3 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {step > 3 ? <Check className="h-5 w-5" /> : "3"}
                      </div>
                      <div className={`h-1 w-12 ${step > 3 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${step >= 4 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        4
                      </div>
                    </div>
                    
                    {step === 1 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Flag className="w-6 h-6 text-neptuno-blue mr-2" />
                          Solicitar presupuesto
                        </h3>
                        <p className="text-gray-600 mb-6">Selecciona los servicios sobre los que deseas recibir un presupuesto:</p>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {budgetItems.map(item => (
                            <div 
                              key={item.id}
                              onClick={() => toggleItem(item.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                selectedItems.includes(item.id) 
                                  ? 'border-neptuno-blue bg-blue-50' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  selectedItems.includes(item.id) ? 'border-neptuno-blue' : 'border-gray-300'
                                }`}>
                                  {selectedItems.includes(item.id) && <div className="w-3 h-3 rounded-full bg-neptuno-blue"></div>}
                                </div>
                                <span className="ml-2">{item.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            onClick={handleSubmitBudget}
                            disabled={selectedItems.length === 0}
                            className="bg-neptuno-blue hover:bg-blue-600"
                          >
                            Solicitar presupuesto
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {step === 2 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Gift className="w-6 h-6 text-green-500 mr-2" />
                          Cupón recibido
                        </h3>
                        <div className="mb-6">
                          <p className="text-gray-600 mb-2">Has recibido un cupón por solicitar presupuesto:</p>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center">
                            <div>
                              <div className="text-sm text-green-600">Código de cupón:</div>
                              <div className="text-xl font-bold tracking-wider">{couponCode}</div>
                            </div>
                            <div className="mt-3 md:mt-0">
                              <Button onClick={handleRedeemCoupon} className="bg-green-500 hover:bg-green-600">
                                Canjear cupón
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                            <Star className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>Has ganado <span className="font-semibold text-yellow-600">{points} puntos</span> por seleccionar {selectedItems.length} servicios</div>
                        </div>
                      </div>
                    )}
                    
                    {step === 3 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <MessageSquareQuote className="w-6 h-6 text-purple-500 mr-2" />
                          Encuesta de satisfacción
                        </h3>
                        <p className="text-gray-600 mb-6">¿Cómo calificarías tu experiencia solicitando un presupuesto?</p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-4 mb-4">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <div 
                                key={rating}
                                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-neptuno-blue hover:bg-blue-50 transition-colors"
                              >
                                {rating}
                              </div>
                            ))}
                          </div>
                          
                          <div>
                            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                              ¿Tienes algún comentario adicional?
                            </label>
                            <textarea
                              id="feedback"
                              rows={3}
                              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-neptuno-blue focus:border-neptuno-blue"
                              placeholder="Escribe tus comentarios aquí..."
                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            onClick={handleSubmitSurvey}
                            className="bg-neptuno-blue hover:bg-blue-600"
                          >
                            Enviar encuesta
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                        
                        <div className="mt-4 flex items-center text-sm text-blue-500">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>Has canjeado <span className="font-semibold">{credits} créditos</span> con tu cupón</div>
                        </div>
                      </div>
                    )}
                    
                    {step === 4 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">¡Gracias por tu participación!</h3>
                          <p className="text-gray-600 mb-8">Has completado el proceso con éxito.</p>
                          
                          <div className="flex flex-col items-center space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                              <Star className="w-6 h-6 text-yellow-500" />
                              <span className="text-lg font-semibold">{points} puntos ganados</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <CreditCard className="w-6 h-6 text-blue-500" />
                              <span className="text-lg font-semibold">{credits} créditos canjeados</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Award className="w-6 h-6 text-purple-500" />
                              <Badge className="py-1.5 bg-purple-100 text-purple-800 hover:bg-purple-100">Badge: Feedback Contributor</Badge>
                            </div>
                          </div>
                          
                          <Button onClick={() => resetJourney('budget')} variant="outline">
                            Reiniciar demostración
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="journey-2" className="mt-2 space-y-8">
                  {/* Support Journey */}
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className={`${supportStep >= 1 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {supportStep > 1 ? <Check className="h-5 w-5" /> : "1"}
                      </div>
                      <div className={`h-1 w-12 ${supportStep > 1 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${supportStep >= 2 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {supportStep > 2 ? <Check className="h-5 w-5" /> : "2"}
                      </div>
                      <div className={`h-1 w-12 ${supportStep > 2 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${supportStep >= 3 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        {supportStep > 3 ? <Check className="h-5 w-5" /> : "3"}
                      </div>
                      <div className={`h-1 w-12 ${supportStep > 3 ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`${supportStep >= 4 ? "bg-green-500" : "bg-gray-300"} h-8 w-8 rounded-full flex items-center justify-center text-white font-medium`}>
                        4
                      </div>
                    </div>
                    
                    {supportStep === 1 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <HelpCircle className="w-6 h-6 text-neptuno-blue mr-2" />
                          Centro de soporte
                        </h3>
                        <p className="text-gray-600 mb-6">Selecciona el tipo de ayuda que necesitas:</p>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {supportOptions.map(item => (
                            <div 
                              key={item.id}
                              onClick={() => toggleSupportOption(item.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                selectedSupportOptions.includes(item.id) 
                                  ? 'border-neptuno-blue bg-blue-50' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  selectedSupportOptions.includes(item.id) ? 'border-neptuno-blue' : 'border-gray-300'
                                }`}>
                                  {selectedSupportOptions.includes(item.id) && <div className="w-3 h-3 rounded-full bg-neptuno-blue"></div>}
                                </div>
                                <span className="ml-2">{item.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            onClick={handleSubmitSupport}
                            disabled={selectedSupportOptions.length === 0}
                            className="bg-neptuno-blue hover:bg-blue-600"
                          >
                            Enviar solicitud
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {supportStep === 2 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Gift className="w-6 h-6 text-green-500 mr-2" />
                          Cupón de agradecimiento
                        </h3>
                        <div className="mb-6">
                          <p className="text-gray-600 mb-2">Has recibido un cupón por contactar con soporte:</p>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center">
                            <div>
                              <div className="text-sm text-green-600">Código de cupón:</div>
                              <div className="text-xl font-bold tracking-wider">{supportCouponCode}</div>
                            </div>
                            <div className="mt-3 md:mt-0">
                              <Button onClick={handleRedeemSupportCoupon} className="bg-green-500 hover:bg-green-600">
                                Canjear cupón
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                            <Star className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>Has ganado <span className="font-semibold text-yellow-600">{supportPoints} puntos</span> por clasificar tu solicitud</div>
                        </div>
                      </div>
                    )}
                    
                    {supportStep === 3 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <MailCheck className="w-6 h-6 text-purple-500 mr-2" />
                          Detalles de soporte
                        </h3>
                        <p className="text-gray-600 mb-6">Por favor, proporciona más detalles sobre tu consulta:</p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                              Asunto
                            </label>
                            <input
                              id="subject"
                              type="text"
                              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-neptuno-blue focus:border-neptuno-blue"
                              placeholder="Describe brevemente tu consulta"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="supportMessage" className="block text-sm font-medium text-gray-700 mb-1">
                              Mensaje
                            </label>
                            <textarea
                              id="supportMessage"
                              rows={5}
                              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-neptuno-blue focus:border-neptuno-blue"
                              placeholder="Detalla tu consulta, incluye capturas de pantalla si es necesario"
                            ></textarea>
                          </div>
                          
                          <div className="flex items-center">
                            <input
                              id="subscribe"
                              type="checkbox"
                              className="h-4 w-4 text-neptuno-blue border-gray-300 rounded"
                            />
                            <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600">
                              Suscribirme al boletín de actualizaciones y novedades
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            onClick={handleSubmitSupportDetails}
                            className="bg-neptuno-blue hover:bg-blue-600"
                          >
                            Enviar consulta
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                        
                        <div className="mt-4 flex items-center text-sm text-blue-500">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>Has canjeado <span className="font-semibold">{supportCredits} créditos</span> con tu cupón</div>
                        </div>
                      </div>
                    )}
                    
                    {supportStep === 4 && (
                      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">¡Consulta enviada con éxito!</h3>
                          <p className="text-gray-600 mb-8">Te responderemos en las próximas 24 horas a tu email.</p>
                          
                          <div className="flex flex-col items-center space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                              <Star className="w-6 h-6 text-yellow-500" />
                              <span className="text-lg font-semibold">{supportPoints} puntos ganados</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <CreditCard className="w-6 h-6 text-blue-500" />
                              <span className="text-lg font-semibold">{supportCredits} créditos canjeados</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Award className="w-6 h-6 text-purple-500" />
                              <Badge className="py-1.5 bg-purple-100 text-purple-800 hover:bg-purple-100">Badge: Support Contributor</Badge>
                            </div>
                          </div>
                          
                          <Button onClick={() => resetJourney('support')} variant="outline">
                            Reiniciar demostración
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Coupon Modal for Budget Journey */}
      {showCouponModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">¡Cupón generado!</h3>
              <button onClick={() => setShowCouponModal(false)} className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-4 mb-4">
              <div className="text-sm text-white/80">Tu cupón:</div>
              <div className="text-2xl font-bold text-white tracking-wider">{couponCode}</div>
              <div className="mt-2 text-sm text-white/80">Válido por {selectedItems.length * 15} créditos</div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Has ganado este cupón por solicitar un presupuesto. Puedes canjearlo ahora por créditos que podrás usar en nuestra plataforma.
            </p>
            
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowCouponModal(false)}
              >
                Cerrar
              </Button>
              <Button
                onClick={handleRedeemCoupon}
                className="bg-neptuno-blue hover:bg-blue-600"
              >
                Canjear ahora
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Coupon Modal for Support Journey */}
      {showSupportCouponModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">¡Cupón de soporte!</h3>
              <button onClick={() => setShowSupportCouponModal(false)} className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-4 mb-4">
              <div className="text-sm text-white/80">Tu cupón:</div>
              <div className="text-2xl font-bold text-white tracking-wider">{supportCouponCode}</div>
              <div className="mt-2 text-sm text-white/80">Válido por {selectedSupportOptions.length * 20} créditos</div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Has ganado este cupón por contactar con soporte. Puedes canjearlo ahora por créditos que podrás usar en nuestra plataforma.
            </p>
            
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowSupportCouponModal(false)}
              >
                Cerrar
              </Button>
              <Button
                onClick={handleRedeemSupportCoupon}
                className="bg-neptuno-blue hover:bg-blue-600"
              >
                Canjear ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GamificationDemo;
