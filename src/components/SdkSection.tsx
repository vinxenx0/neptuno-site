
import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SdkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("gamification");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeExamples = {
    auth: `import { Neptuno } from '@neptuno/sdk'

const neptuno = new Neptuno({ baseUrl: 'https://api.tunea.io' })

// Login con usuario y contraseña
await neptuno.auth.login({
  username: 'user@example.com',
  password: 'securepassword123'
})

// Obtener datos del usuario actual
const profile = await neptuno.users.me()
console.log(\`👋 Bienvenido \${profile.username}, nivel \${profile.level}\`)`,

    gamification: `import { Neptuno } from '@neptuno/sdk'

const neptuno = new Neptuno({ baseUrl: 'https://api.tunea.io' })

// Otorgar puntos por completar un reto
await neptuno.gamification.awardPoints({
  userId: 'user_123',
  amount: 100,
  reason: 'completed_quiz'
})

// Desbloquear un badge al superar un desafío
await neptuno.gamification.unlockBadge({
  userId: 'user_123',
  badgeId: 'knowledge_master'
})

// Subir de nivel automáticamente si cumple requisitos
const eligible = await neptuno.gamification.checkLevelUp({ 
  userId: 'user_123' 
})

if (eligible.canLevelUp) {
  await neptuno.gamification.levelUp({ userId: 'user_123' })
  console.log(\`🎉 ¡Nivel aumentado a \${eligible.nextLevel}!\`)
}`,

    payments: `import { Neptuno } from '@neptuno/sdk'

const neptuno = new Neptuno({ baseUrl: 'https://api.tunea.io' })

// Crear una suscripción
const subscription = await neptuno.payments.subscribe({
  userId: 'user_123',
  planId: 'premium_monthly'
})

// Verificar estado de suscripción
const status = await neptuno.payments.checkSubscription({ 
  userId: 'user_123' 
})

// Procesar un pago único
const payment = await neptuno.payments.createCharge({
  userId: 'user_123',
  amount: 49.99,
  currency: 'EUR',
  description: 'Compra de créditos'
})`,

    events: `import { Neptuno } from '@neptuno/sdk'

const neptuno = new Neptuno({ baseUrl: 'https://api.tunea.io' })

// Registrar eventos personalizados
await neptuno.events.track({
  name: 'shared_on_twitter',
  metadata: { campaign: 'spring_launch' }
})

// Activar un desafío diario
await neptuno.gamification.startChallenge({
  userId: 'user_123',
  challengeId: 'daily_login_streak'
})

// Registrar progreso en el desafío
await neptuno.gamification.updateChallengeProgress({
  userId: 'user_123',
  challengeId: 'daily_login_streak',
  progress: 1
})`,
  };

  return (
    <section id="sdk" className="section bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            <Code2 size={18} className="mr-2" />
            TypeScript SDK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold my-4">Conecta. Crea. Convierte. En minutos.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El SDK oficial de Neptuno para TypeScript te da acceso inmediato a toda la potencia de nuestra API: autenticación avanzada, gamificación, monetización, tracking y más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Features - Now on the left */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Qué hace este SDK tan especial?</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">1</div>
                  <div>
                    <h4 className="font-bold">Sencillo por fuera, potente por dentro</h4>
                    <p className="text-gray-600">Con una sola importación, conecta tu app a toda la lógica de negocio: usuarios, puntos, niveles, pagos, suscripciones.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3">2</div>
                  <div>
                    <h4 className="font-bold">Gamificación como servicio</h4>
                    <p className="text-gray-600">Asigna puntos, sube de nivel, entrega badges y activa desafíos con funciones ya listas en el SDK.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">3</div>
                  <div>
                    <h4 className="font-bold">Pagos integrados al instante</h4>
                    <p className="text-gray-600">Activa modelos freemium, suscripciones o compras únicas. Integra pasarelas de pago sin reinventar la rueda.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold mr-3">4</div>
                  <div>
                    <h4 className="font-bold">API auto-documentada con OpenAPI</h4>
                    <p className="text-gray-600">Todas las rutas, modelos y respuestas están tipadas y disponibles directamente desde el SDK.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold mb-4">¡Empezar nunca fue tan rápido!</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-4">
                npm install @neptuno/sdk
              </div>
              <Button className="bg-neptuno-blue hover:bg-blue-600">
                Ver documentación completa
              </Button>
            </div>
          </div>
          
          {/* Code Examples - Now on the right */}
          <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full grid grid-cols-4 bg-gray-700/50">
                  <TabsTrigger value="auth" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300">Auth</TabsTrigger>
                  <TabsTrigger value="gamification" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-300">Gamificación</TabsTrigger>
                  <TabsTrigger value="payments" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-gray-300">Pagos</TabsTrigger>
                  <TabsTrigger value="events" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white text-gray-300">Eventos</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <button 
                onClick={() => handleCopy(codeExamples[activeTab as keyof typeof codeExamples], activeTab)}
                className="ml-2 p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-gray-700 transition-colors flex-shrink-0"
                title="Copiar código"
              >
                {copied === activeTab ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
            
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 whitespace-pre">
                <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;
