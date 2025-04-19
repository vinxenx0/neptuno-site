
import React from 'react';
import { Code } from 'lucide-react';

const CodeReadySection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vide code ready</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crea funcionalidades complejas con instrucciones simples
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Code editor section */}
            <div className="bg-neptuno-navy p-6 text-white font-mono text-sm">
              <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs ml-3">neptuno-project/src/pages/Surveys.tsx</div>
              </div>
              
              <div className="text-green-400">
                <div><span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-yellow-300">'react'</span>;</div>
                <div><span className="text-blue-400">import</span> {"{"} NeptunoSurvey, useSurvey {"}"} <span className="text-blue-400">from</span> <span className="text-yellow-300">'@neptuno/surveys'</span>;</div>
                <div><span className="text-blue-400">import</span> {"{"} Button {"}"} <span className="text-blue-400">from</span> <span className="text-yellow-300">'../components/ui/button'</span>;</div>
                <br />
                <div><span className="text-blue-400">const</span> <span className="text-yellow-400">SurveyPage</span> = () =&gt; {"{"}</div>
                <div>&nbsp;&nbsp;<span className="text-blue-400">const</span> {"{"} survey, isLoading {"}"} = useSurvey(<span className="text-yellow-300">"user-satisfaction"</span>);</div>
                <br />
                <div>&nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-yellow-400">handleSubmit</span> = (<span className="text-orange-400">data</span>) =&gt; {"{"}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-yellow-400">log</span>(data); <span className="text-gray-500">// Process survey response</span></div>
                <div>&nbsp;&nbsp;{"};"}</div>
                <br />
                <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> (</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> className=<span className="text-yellow-300">"container mx-auto py-10"</span>&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h1</span> className=<span className="text-yellow-300">"text-2xl font-bold mb-6"</span>&gt;Encuesta de satisfacción&lt;/<span className="text-blue-400">h1</span>&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}isLoading ? (</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">p</span>&gt;Cargando encuesta...&lt;/<span className="text-blue-400">p</span>&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) : (</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">NeptunoSurvey</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;survey={"{"}survey{"}"}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onSubmit={"{"}handleSubmit{"}"}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme=<span className="text-yellow-300">"light"</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){"}"}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;</div>
                <div>&nbsp;&nbsp;);</div>
                <div>{"};"}</div>
                <br />
                <div><span className="text-blue-400">export default</span> SurveyPage;</div>
              </div>
            </div>
            
            {/* AI chat section */}
            <div className="p-6 border-l">
              <div className="flex items-start mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <Code className="w-4 h-4 text-gray-500" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  <p className="text-gray-800">Añade una página con encuestas utilizando el sdk neptuno</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-3 text-white font-bold flex-shrink-0">
                  N
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-3 text-sm">
                  <p className="text-gray-800">
                    He creado una nueva página de encuestas utilizando el SDK de Neptuno. La página incluye:
                  </p>
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-700">
                    <li>Componente NeptunoSurvey para mostrar encuestas</li>
                    <li>Hook useSurvey para cargar datos de encuesta</li>
                    <li>Manejo de estados de carga</li>
                    <li>Función para procesar respuestas</li>
                  </ul>
                  <p className="text-gray-800 mt-2">
                    La página está lista para ser integrada. ¿Quieres que añada alguna funcionalidad específica?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeReadySection;
