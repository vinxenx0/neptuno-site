
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Check, Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookingDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState({
    personalInfo: false,
    dateSelected: false,
    interestShown: false,
    ready: false
  });
  const { toast } = useToast();

  // Progress check for feature list
  React.useEffect(() => {
    // Check for valid name and email
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setProgress(prev => ({
      ...prev, 
      personalInfo: name.length > 3 && validEmail
    }));
    
    // Check for date and time selection
    setProgress(prev => ({
      ...prev, 
      dateSelected: !!date && !!time
    }));
    
    // Check if there's a message
    setProgress(prev => ({ 
      ...prev, 
      interestShown: message.length > 10
    }));
    
    // Check if everything is ready
    setProgress(prev => ({
      ...prev,
      ready: name.length > 3 && validEmail && !!date && !!time
    }));
    
  }, [name, email, date, time, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!progress.ready) {
      toast({
        title: "Por favor, completa todos los campos requeridos",
        description: "Necesitamos tu información para agendar la demo",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "¡Demo agendada con éxito!",
      description: "Nos pondremos en contacto contigo pronto para confirmar los detalles.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setCompany("");
    setDate(undefined);
    setTime("");
    setMessage("");
  };

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "15:00", "16:00", "17:00", "18:00"
  ];

  return (
    <section id="booking-demo" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda una Demostración Personalizada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Neptuno puede ayudar a tu negocio. Agenda una sesión personalizada con nuestro equipo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form section */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Solicita una Demo</h3>
              <p className="text-gray-500">Completa el formulario y te contactaremos para confirmar tu demostración</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Nombre completo *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Tu nombre" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email *</Label>
                  <Input 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="tu@email.com" 
                    type="email"
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="mb-2 block">Empresa</Label>
                <Input 
                  id="company" 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                  placeholder="Nombre de tu empresa" 
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="mb-2 block">Fecha preferida *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date > new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);
                        }}
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label htmlFor="time" className="mb-2 block">Hora preferida *</Label>
                  <Select 
                    onValueChange={setTime}
                    value={time}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="mb-2 block">¿Qué te interesa conocer?</Label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Cuéntanos sobre tu proyecto y qué te gustaría ver en la demo..." 
                  className="w-full min-h-[100px]"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Solicitar Demo
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
              </p>
            </form>
          </div>
          
          {/* Right side info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Demostraciones Personalizadas</h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                Nuestras sesiones de demostración están diseñadas para mostrarte exactamente cómo Neptuno puede adaptarse a tus necesidades específicas.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${progress.personalInfo ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {progress.personalInfo && <Check size={12} />}
                  </div>
                  <div>
                    <p className="font-medium">Presentación personalizada de la plataforma</p>
                    <p className="text-sm text-gray-500">Enfocada en tus necesidades específicas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${progress.dateSelected ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {progress.dateSelected && <Check size={12} />}
                  </div>
                  <div>
                    <p className="font-medium">Análisis de tus necesidades específicas</p>
                    <p className="text-sm text-gray-500">Identificamos las soluciones que mejor se adaptan a tu caso</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${progress.interestShown ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {progress.interestShown && <Check size={12} />}
                  </div>
                  <div>
                    <p className="font-medium">Ejemplos de implementaciones similares</p>
                    <p className="text-sm text-gray-500">Casos de éxito en tu sector o con objetivos similares</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${progress.ready ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {progress.ready && <Check size={12} />}
                  </div>
                  <div>
                    <p className="font-medium">Sesión de preguntas y respuestas</p>
                    <p className="text-sm text-gray-500">Resolvemos todas tus dudas durante la sesión</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Después de la demo</h3>
              <p className="text-gray-600 mb-4">
                Recibirás:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span>Acceso a nuestra documentación completa</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span>Periodo de prueba extendido</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span>Propuesta personalizada</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span>Soporte técnico prioritario durante la evaluación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDemo;
