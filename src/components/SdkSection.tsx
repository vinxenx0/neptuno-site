
import React, { useState } from 'react';
import { Check, ChevronsUpDown, Copy, Terminal, ArrowRight, FileCode, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Card, CardContent } from "./ui/card";

const codeExamples = [
  {
    name: "Autenticación",
    icon: <Terminal size={16} />,
    code: `import { Neptuno } from '@neptuno/sdk'

const neptuno = new Neptuno({ baseUrl: 'https://api.tunea.io' })

await neptuno.auth.login({
  username: 'user@example.com',
  password: 'securepassword123'
})`
  },
  {
    name: "Gamificación",
    icon: <BarChart3 size={16} />,
    code: `// Otorgar puntos por completar un reto
await neptuno.gamification.awardPoints({
  userId: user.id,
  amount: 100,
  reason: 'completed_quiz'
})

// Desbloquear un badge al superar un desafío
await neptuno.gamification.unlockBadge({
  userId: user.id,
  badgeId: 'knowledge_master'
})

// Subir de nivel automáticamente si cumple requisitos
const eligible = await neptuno.gamification.checkLevelUp({ 
  userId: user.id 
})

if (eligible.canLevelUp) {
  await neptuno.gamification.levelUp({ userId: user.id })
  console.log(\`🎉 ¡Nivel aumentado a \${eligible.nextLevel}!\`)
}`
  },
  {
    name: "Eventos y desafíos",
    icon: <FileCode size={16} />,
    code: `// Registrar un evento personalizado con impacto en la gamificación
await neptuno.events.track({
  name: 'shared_on_twitter',
  metadata: { campaign: 'spring_launch' }
})

// Activar un desafío diario y registrar el progreso
await neptuno.gamification.startChallenge({
  userId: user.id,
  challengeId: 'daily_login_streak'
})

await neptuno.gamification.updateChallengeProgress({
  userId: user.id,
  challengeId: 'daily_login_streak',
  progress: 1
})`
  }
];

const SdkSection: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeExample].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sdk" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SDK para TypeScript</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecta. Crea. Convierte. En minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column: Features */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-neptuno-navy">¿Por qué usar el SDK de Neptuno?</h3>
              <p className="text-gray-600 mb-6">
                Te ahorra <span className="font-semibold">meses de trabajo</span> en lógica de negocio. Conecta y comienza a usar autenticación, gamificación y monetización de inmediato.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-sm">100% preparado para producción</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-sm">Diseñado para integrarse en segundos</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-sm">Sencillo por fuera, potente por dentro</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-sm">API auto-documentada con OpenAPI</span>
                </li>
              </ul>
            </div>
            
            <Collapsible className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <span className="text-lg font-semibold text-neptuno-navy">Funcionalidades del SDK (v1)</span>
                <ChevronsUpDown size={16} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 space-y-3">
                <div className="flex items-start">
                  <div className="bg-neptuno-blue/10 p-1 rounded text-neptuno-blue mr-2">🔐</div>
                  <div>
                    <p className="font-medium">Auth</p>
                    <p className="text-sm text-gray-600">Login, registro, recuperación, refresh tokens, roles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-neptuno-teal/10 p-1 rounded text-neptuno-teal mr-2">🧑</div>
                  <div>
                    <p className="font-medium">Usuarios</p>
                    <p className="text-sm text-gray-600">CRUD, perfiles, permisos, datos extendidos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-neptuno-amber/10 p-1 rounded text-neptuno-amber mr-2">🏅</div>
                  <div>
                    <p className="font-medium">Gamificación</p>
                    <p className="text-sm text-gray-600">puntos, créditos, niveles, badges, desafíos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded text-purple-500 mr-2">💳</div>
                  <div>
                    <p className="font-medium">Monetización</p>
                    <p className="text-sm text-gray-600">planes, pagos únicos, suscripciones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded text-green-500 mr-2">🎯</div>
                  <div>
                    <p className="font-medium">Leads & tracking</p>
                    <p className="text-sm text-gray-600">eventos personalizados, CRM-ready</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Button className="w-full">
              Explorar documentación completa <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          {/* Right column: Code examples */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-gray-200">
              <div className="bg-neptuno-navy text-white text-sm p-3 flex items-center justify-between">
                <div className="flex space-x-4">
                  {codeExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExample(index)}
                      className={`flex items-center px-3 py-1.5 rounded ${
                        activeExample === index 
                          ? "bg-white/20" 
                          : "hover:bg-white/10"
                      }`}
                    >
                      {example.icon}
                      <span className="ml-2">{example.name}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={copyToClipboard} 
                  className="p-1.5 rounded hover:bg-white/10"
                  title="Copiar código"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <CardContent className="p-0">
                <pre className="font-mono text-sm bg-[#1E293B] text-gray-300 p-5 overflow-x-auto">
                  <code>{codeExamples[activeExample].code}</code>
                </pre>
              </CardContent>
            </Card>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-semibold mb-2">⏱️ Empezar nunca fue tan rápido</p>
              <div className="bg-neptuno-navy rounded-md p-2 mb-4 font-mono text-sm text-white overflow-x-auto">
                <code>npm install @neptuno/sdk</code>
              </div>
              <p className="text-sm text-gray-600">
                Con solo unas líneas puedes convertir una app normal en una experiencia gamificada, dinámica y centrada en la conversión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;
