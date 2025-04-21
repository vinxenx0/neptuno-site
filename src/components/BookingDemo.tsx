
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Check, Calendar, Clock, Building, User, AtSign, MessageSquare, Award } from 'lucide-react';
import { toast } from 'sonner';

type DemoFeature = {
  text: string;
  active: boolean;
  icon: React.ReactNode;
};

const BookingDemo = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    message: '',
    interests: [] as string[],
    industry: '',
  });
  
  const [features, setFeatures] = useState<DemoFeature[]>([
    { text: 'Presentación personalizada de la plataforma', active: false, icon: <Award className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Análisis de tus necesidades específicas', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Ejemplos de implementaciones similares', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Sesión de preguntas y respuestas', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Acceso a nuestra documentación completa', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Periodo de prueba extendido', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
    { text: 'Propuesta personalizada', active: false, icon: <Check className="mr-2 h-4 w-4 text-green-500" /> },
  ]);
  
  const [formProgress, setFormProgress] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  
  // Actualizar progreso basado en campos completados
  useEffect(() => {
    const requiredFields = ['name', 'email', 'date', 'time'];
    const completedFields = requiredFields.filter(field => !!formState[field as keyof typeof formState]);
    const newProgress = Math.round((completedFields.length / requiredFields.length) * 100);
    setFormProgress(newProgress);
    
    // Actualizar features activas basadas en campos completados
    const updatedFeatures = [...features];
    if (formState.name) updatedFeatures[0].active = true;
    if (formState.email) updatedFeatures[1].active = true;
    if (formState.company) updatedFeatures[2].active = true;
    if (formState.date) updatedFeatures[3].active = true;
    if (formState.time) updatedFeatures[4].active = true;
    if (formState.message) updatedFeatures[5].active = true;
    if (formState.interests.length > 0) updatedFeatures[6].active = true;
    
    setFeatures(updatedFeatures);
    
    // Otorgar badges por completar secciones
    const newBadges = [...badges];
    if (formState.name && formState.email && !newBadges.includes('¡Información básica completada!')) {
      newBadges.push('¡Información básica completada!');
      toast.success('¡Has desbloqueado un logro: Información básica!');
    }
    
    if (formState.date && formState.time && !newBadges.includes('¡Agenda configurada!')) {
      newBadges.push('¡Agenda configurada!');
      toast.success('¡Has desbloqueado un logro: Agenda configurada!');
    }
    
    if (formProgress === 100 && !newBadges.includes('¡Formulario completado!')) {
      newBadges.push('¡Formulario completado!');
      toast.success('¡Has desbloqueado un logro: Formulario completado!', {
        description: 'Recibirás 50 puntos de recompensa tras la demostración'
      });
    }
    
    setBadges(newBadges);
  }, [formState]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleInterestChange = (interest: string) => {
    setFormState(prev => {
      const interests = prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      
      return { ...prev, interests };
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Solicitud enviada con éxito!', {
      description: 'Pronto te contactaremos para confirmar tu demostración'
    });
  };
  
  const industries = [
    'Tecnología', 'E-commerce', 'Educación', 'Salud', 'Finanzas',
    'Marketing', 'Juegos', 'Entretenimiento', 'Otros'
  ];
  
  return (
    <section id="booking-demo" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda una Demostración Personalizada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Neptuno puede ayudar a tu negocio. Agenda una sesión personalizada con nuestro equipo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="pl-10"
                        required
                      />
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="pl-10"
                        required
                      />
                      <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-sm font-medium">
                      Empresa
                    </label>
                    <div className="relative">
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                        className="pl-10"
                      />
                      <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="date" className="text-sm font-medium">
                        Fecha preferida <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formState.date}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="time" className="text-sm font-medium">
                        Hora preferida <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formState.time}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                        <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">
                      Industria
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formState.industry}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Selecciona tu industria</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ¿Qué te interesa más sobre Neptuno?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Gamificación', 'Autenticación', 'API', 'Dashboard', 'Pagos', 'Integración'].map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interest-${interest}`}
                            checked={formState.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="rounded border-gray-300 text-indigo-600 mr-2"
                          />
                          <label htmlFor={`interest-${interest}`}>{interest}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje (opcional)
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos más sobre lo que te interesa"
                        className="min-h-[100px]"
                      />
                      <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Completado: {formProgress}%</span>
                      {formProgress === 100 && (
                        <span className="text-green-500 font-medium">¡Listo para enviar!</span>
                      )}
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neptuno-blue" 
                        style={{ width: `${formProgress}%`, transition: 'width 0.3s ease-out' }}
                      />
                    </div>
                  </div>
                  
                  {/* Badges section */}
                  {badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {badges.map((badge, i) => (
                        <span key={i} className="bg-neptuno-teal/10 text-neptuno-teal text-xs px-3 py-1 rounded-full flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={formProgress < 100}>
                    Solicitar Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">¿Qué incluye la demo?</h3>
                
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.active ? (
                        feature.icon
                      ) : (
                        <div className="h-4 w-4 mr-2 rounded-full border border-gray-300" />
                      )}
                      <span className={`text-sm ${feature.active ? 'text-gray-900' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Después de la demo</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Acceso a nuestra documentación completa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Periodo de prueba extendido</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Propuesta personalizada</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="mr-2 h-4 w-4 text-neptuno-amber" />
                      <span className="text-sm">50 puntos de recompensa para tu cuenta</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-2">Testimonio</h4>
                  <p className="text-sm italic text-gray-600">
                    "La demostración personalizada fue clave para entender cómo Neptuno podía adaptarse a nuestras necesidades. Implementamos la solución en tiempo récord y nuestros indicadores de engagement aumentaron un 40% en el primer mes."
                  </p>
                  <p className="text-sm font-medium mt-2">— Carlos Ruíz, CTO de TechSpain</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDemo;
