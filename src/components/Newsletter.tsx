
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Check, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido",
        variant: "destructive",
      });
      return;
    }
    
    // Simulating a successful subscription
    setIsSubscribed(true);
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te mantendremos informado de todas las novedades",
    });
    
    // Reset the form after a delay
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Bell className="h-12 w-12 text-neptuno-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Mantente al día con Neptuno</h2>
          <p className="text-gray-600 text-lg">
            Suscríbete a nuestro boletín para recibir actualizaciones, nuevas funcionalidades y consejos para aprovechar al máximo la plataforma.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="email"
                placeholder="Tu email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
              />
            </div>
            <Button 
              type="submit" 
              className={`${isSubscribed ? 'bg-green-600 hover:bg-green-700' : 'bg-neptuno-blue hover:bg-blue-600'}`} 
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  ¡Suscrito!
                </>
              ) : (
                'Suscribirse'
              )}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            Respetamos tu privacidad. Puedes cancelar la suscripción en cualquier momento.
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-6">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">Sin spam</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">Solo lo importante</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">Mensual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
