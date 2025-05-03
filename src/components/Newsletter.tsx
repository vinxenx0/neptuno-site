
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente al boletín de Neptuno",
      });
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-xl rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/5 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div className="md:w-4/5 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Mantente al día con Neptuno</h2>
              <p className="text-gray-600 mb-6">
                Recibe actualizaciones sobre nuevas funcionalidades, mejoras y contenido exclusivo directamente en tu correo.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <Input
                    type="email" 
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                <Button 
                  type="submit" 
                  className={`h-12 px-6 ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  }`}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">
                      <Check className="mr-2" size={18} />
                      ¡Suscrito!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Suscribirse
                    </span>
                  )}
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 mt-3">
                Prometemos no enviar spam. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
