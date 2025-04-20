
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Calendar as CalendarIcon2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { toast } from "sonner";

const DemoBooking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00'
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !date || !timeSlot) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }
    
    // Form is valid, show success message
    toast.success("¡Solicitud enviada con éxito!", {
      description: `Te contactaremos pronto para confirmar tu demostración el ${format(date, 'PPP', { locale: es })} a las ${timeSlot}.`
    });
    
    // Reset form
    setDate(undefined);
    setTimeSlot(undefined);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section className="section py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda una Demostración Personalizada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Neptuno puede ayudar a tu negocio. Agenda una sesión personalizada con nuestro equipo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Solicita una Demo</CardTitle>
              <CardDescription>
                Completa el formulario y te contactaremos para confirmar tu demostración
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company" 
                      placeholder="Nombre de tu empresa" 
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha preferida *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP', { locale: es }) : <span>Selecciona una fecha</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => 
                            date < new Date() || 
                            date.getDay() === 0 || 
                            date.getDay() === 6
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Hora preferida *</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntanos más sobre lo que te interesa" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">Solicitar Demo</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neptuno-blue/10 p-3 rounded-full">
                  <CalendarIcon2 className="h-6 w-6 text-neptuno-blue" />
                </div>
                <h3 className="text-xl font-bold">Demostraciones Personalizadas</h3>
              </div>
              <p className="text-gray-600">
                Nuestras sesiones de demostración están diseñadas para mostrarte exactamente 
                cómo Neptuno puede adaptarse a tus necesidades específicas.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium mb-2">¿Qué incluye la demo?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Presentación personalizada de la plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Análisis de tus necesidades específicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ejemplos de implementaciones similares</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sesión de preguntas y respuestas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium mb-2">Después de la demo</h4>
                <p className="text-gray-600 mb-2">
                  Recibirás:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Acceso a nuestra documentación completa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Periodo de prueba extendido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Propuesta personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
