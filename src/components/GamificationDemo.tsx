
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, TrendingUp, Activity, Star, Gift, Trophy, ShieldCheck, Zap } from 'lucide-react';

const GamificationDemo: React.FC = () => {
  const [score, setScore] = useState(120);
  const [level, setLevel] = useState(2);
  const [progress, setProgress] = useState(60);
  const [showBadgeNotification, setShowBadgeNotification] = useState(false);
  
  const addPoints = () => {
    setScore(score + 10);
    setProgress(Math.min(progress + 10, 100));
    
    if (progress + 10 >= 100) {
      setLevel(level + 1);
      setProgress(0);
    }
    
    // Randomly show badge notification
    if (Math.random() > 0.7) {
      setShowBadgeNotification(true);
      setTimeout(() => setShowBadgeNotification(false), 3000);
    }
  };

  const badges = [
    { name: "Explorador", icon: <Award size={20} />, unlocked: true },
    { name: "Creador", icon: <Star size={20} />, unlocked: true },
    { name: "Influencer", icon: <TrendingUp size={20} />, unlocked: false },
    { name: "Experto", icon: <ShieldCheck size={20} />, unlocked: false },
  ];

  return (
    <section id="demo" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prueba la Gamificación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimenta cómo funciona el sistema de gamificación de Neptuno con esta demo interactiva.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 relative overflow-hidden">
            {showBadgeNotification && (
              <div className="absolute top-4 right-4 bg-neptuno-amber text-white px-4 py-2 rounded-lg flex items-center animate-fade-in">
                <Trophy size={16} className="mr-2" />
                ¡Nuevo logro desbloqueado!
              </div>
            )}
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {level}
                </div>
                <div>
                  <h3 className="font-medium">Nivel Actual</h3>
                  <p className="text-sm text-gray-500">Colaborador {level === 1 ? "Novato" : level === 2 ? "Junior" : "Senior"}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end">
                  <Activity className="text-neptuno-blue mr-2" size={18} />
                  <span className="font-bold text-xl">{score}</span>
                </div>
                <p className="text-sm text-gray-500">Puntos totales</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progreso hacia nivel {level + 1}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
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
            
            <div className="flex justify-center">
              <Button 
                onClick={addPoints}
                className="bg-neptuno-blue hover:bg-blue-600 text-white transition-all hover:scale-105"
              >
                <Zap size={16} className="mr-2" />
                Realizar Acción (+10 pts)
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-4">Sistema de Gamificación</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-neptuno-blue">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Logros y Badges</h4>
                    <p className="text-sm text-gray-600">Recompensa a tus usuarios por acciones específicas con badges visuales personalizables.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-neptuno-blue">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Sistema de Niveles</h4>
                    <p className="text-sm text-gray-600">Motiva la progresión con niveles que desbloquean nuevas funciones o beneficios.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-neptuno-blue">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Recompensas Automáticas</h4>
                    <p className="text-sm text-gray-600">Configura triggers para otorgar recompensas, créditos o descuentos automáticamente.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center text-sm text-blue-700">
                  <Zap size={16} className="mr-2" />
                  <span className="font-medium">Hecho para conversión:</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  La gamificación puede aumentar la conversión de usuarios hasta un 30% según estudios recientes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Integración con tu código</h3>
                <Badge className="bg-green-500">Fácil</Badge>
              </div>
              
              <div className="code-block mb-4">
                <pre>{`// Añadir puntos a un usuario
await neptuno.gamification.addPoints({
  userId: "user_123",
  points: 10,
  action: "comment_created"
});

// Verificar y otorgar badges
await neptuno.gamification.checkBadges(userId);`}</pre>
              </div>
              
              <p className="text-sm text-gray-600">
                Neptuno ofrece una API sencilla para implementar gamificación en cualquier aplicación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationDemo;
