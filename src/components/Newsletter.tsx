
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente a nuestro boletín.",
        variant: "default",
      });
    }, 1000);
  };
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-neptuno-blue to-purple-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Mantente al día con Neptuno</h2>
              <p className="text-white/90 mb-6">
                Recibe actualizaciones sobre nuevas funcionalidades, mejoras y consejos para aprovechar al máximo Neptuno.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-neptuno-amber" />
                  <span>Novedades y actualizaciones de producto</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-neptuno-amber" />
                  <span>Guías y tutoriales prácticos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-neptuno-amber" />
                  <span>Acceso anticipado a nuevas características</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-neptuno-amber" />
                  <span>Ofertas especiales para suscriptores</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 md:p-12 flex items-center">
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-2">Suscríbete a nuestro boletín</h3>
                <p className="text-gray-600 mb-6">
                  Te enviaremos noticias importantes (sin spam). Prometemos no enviarte más de un correo al mes.
                </p>
                
                {isSubscribed ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center text-green-800">
                    <Check className="h-5 w-5 mr-2" />
                    <span>¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          Enviando...
                          <div className="ml-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Suscribirse
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
