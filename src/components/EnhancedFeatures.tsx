
import React from 'react';
import { Code, Layout, Cpu, Shield, Zap, Server, Layers, Network, FileCode, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  listItems,
  codeExample
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  listItems: string[];
  codeExample?: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
      
      {codeExample && (
        <div className="mt-5 p-3 bg-gray-900 rounded-md text-xs font-mono text-white overflow-x-auto">
          <pre>{codeExample}</pre>
        </div>
      )}
    </div>
  );
};

const ExampleCard = ({ code }: { code: string }) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gray-900 text-gray-300 p-4 text-sm font-mono overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </Card>
  );
};

const EnhancedFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <FeatureCard
        icon={<Shield className="text-neptuno-blue" size={24} />}
        title="Seguridad de primera"
        description="Implementación segura desde el primer día con HTTPS, CORS y autenticación JWT."
        listItems={[
          "Configuración OAuth2 preconfigurada",
          "Gestión automática de JWT y tokens",
          "CSRF Protection y medidas anti XSS",
          "Roles y permisos granulares"
        ]}
        codeExample={`// Autenticación configurada automáticamente
const { token } = await api.auth.login({
  email: user.email,
  password: user.password
});`}
      />
      
      <ExampleCard code={`// Define roles y permisos con una sola línea
@app.permissions([
  "admin:read", 
  "admin:write",
  "user:read"
])
async def protected_route():
    return {"status": "authorized"}`} />
      
      <FeatureCard
        icon={<Zap className="text-neptuno-blue" size={24} />}
        title="Gamificación integrada"
        description="Engancha a tus usuarios con sistemas de niveles, puntos y logros."
        listItems={[
          "Sistema de puntos y recompensas",
          "Logros y badges personalizables",
          "Leaderboards y competición",
          "Analíticas de engagement"
        ]}
        codeExample={`// Añadir puntos a un usuario
await api.gamification.addPoints({
  userId: "user-123",
  points: 50,
  reason: "Completó tutorial"
});`}
      />
      
      <ExampleCard code={`// Crear un nuevo badge para usuarios
const badge = await api.gamification.createBadge({
  name: "Early Adopter",
  description: "Se unió antes del lanzamiento",
  image: "early-adopter.svg",
  requirement: {
    registeredBefore: "2025-03-01"
  }
});`} />
      
      <FeatureCard
        icon={<Layers className="text-neptuno-blue" size={24} />}
        title="Pagos integrados"
        description="Acepta pagos y gestiona subscripciones sin complicaciones."
        listItems={[
          "Integración nativa con Stripe",
          "Historial de pagos y facturas",
          "Planes y subscripciones personalizables",
          "Webhooks para eventos de pago"
        ]}
        codeExample={`// Crear una subscripción mensual
const subscription = await api.payments.createSubscription({
  userId: user.id,
  planId: "pro-monthly",
  trialDays: 14
});`}
      />
      
      <ExampleCard code={`// Webhooks para eventos de pago
app.webhooks.on("payment.succeeded", async (event) => {
  await notifyUser(event.data.customer);
  await grantAccess(event.data.plan);
  await logTransaction(event.data);
});`} />

      <FeatureCard
        icon={<Network className="text-neptuno-blue" size={24} />}
        title="Analytics y seguimiento"
        description="Comprende a tus usuarios con datos en tiempo real."
        listItems={[
          "Tracking de eventos personalizado",
          "Funnel analysis y conversion",
          "Segmentación de usuarios",
          "Exportación de datos y reportes"
        ]}
        codeExample={`// Tracking de eventos
await api.analytics.track({
  userId: user.id,
  event: "clicked_upgrade",
  properties: {
    source: "pricing_page",
    plan: "pro"
  }
});`}
      />
      
      <ExampleCard code={`// Consultar métricas de conversión
const conversionRate = await api.analytics.query({
  metric: "conversion_rate",
  startDate: "2025-01-01",
  endDate: "2025-01-31",
  segment: "new_users"
});`} />

      <FeatureCard
        icon={<Code className="text-neptuno-blue" size={24} />}
        title="API REST"
        description="Documentada con OpenAPI, GraphQL-ready, SDK JS/TS incluido."
        listItems={[
          "Autogenerada a partir de modelos",
          "SDK completo para JS/TS",
          "Soporte para GraphQL opcional",
          "Versionado y documentación automática"
        ]}
        codeExample={`// Uso del SDK autogenerado
import { NeptunoClient } from '@neptuno/sdk';

const client = new NeptunoClient({
  apiKey: process.env.API_KEY
});

const users = await client.users.list();`}
      />
      
      <ExampleCard code={`// Endpoints GraphQL generados automáticamente
const QUERY = gql\`
  query GetUserProfile($id: ID!) {
    user(id: $id) {
      name
      email
      subscription {
        plan
        validUntil
      }
    }
  }
\`;`} />
      
      <FeatureCard
        icon={<Layout className="text-neptuno-blue" size={24} />}
        title="Frontend Next.js"
        description="SSR, SEO-ready, UI modular y dashboards de gestión."
        listItems={[
          "Componentes UI preconfigurados",
          "Optimizado para SEO y performance",
          "Diseño responsivo y adaptable",
          "Dashboards administrativos incluidos"
        ]}
        codeExample={`// Componentes preconfigurados
import { DashboardLayout, UserCard } from '@neptuno/ui';

export default function AdminPage() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <UserList />
      <AnalyticsPanel />
    </DashboardLayout>
  );
}`}
      />
      
      <ExampleCard code={`// SEO optimizado automáticamente
import { NeptunoSEO } from '@neptuno/ui';

export default function ProductPage({ product }) {
  return (
    <>
      <NeptunoSEO 
        title={product.name}
        description={product.description}
        image={product.image}
      />
      <ProductDetails product={product} />
    </>
  );
}`} />
      
      <FeatureCard
        icon={<Cpu className="text-neptuno-blue" size={24} />}
        title="Despliegue Docker"
        description="Deploy en Railway, Render o local; balanceo con Nginx/Gunicorn."
        listItems={[
          "Configuración Docker optimizada",
          "Scripts one-click para despliegue",
          "Balanceo de carga incluido",
          "Monitorización y logs centralizados"
        ]}
        codeExample={`# Despliegue simplificado
git clone https://github.com/your/app
cd your-app
cp .env.example .env
# Edita las variables de entorno
./scripts/deploy.sh`}
      />
      
      <ExampleCard code={`version: '3'

services:
  api:
    image: neptuno/api:latest
    restart: always
    environment:
      - DATABASE_URL=\${DATABASE_URL}
      - JWT_SECRET=\${JWT_SECRET}
    ports:
      - "8000:8000"
    
  frontend:
    image: neptuno/frontend:latest
    ports:
      - "3000:3000"
    depends_on:
      - api`} />

      <FeatureCard
        icon={<Server className="text-neptuno-blue" size={24} />}
        title="Infraestructura lista para producción"
        description="HTTP/2, CORS, CSRF, HTTPS. Auto-scaling, balanceo de carga, réplicas de base de datos."
        listItems={[
          "Configuración de escalado automático",
          "Réplicas de base de datos para alta disponibilidad",
          "HTTPS con renovación automática de certificados",
          "Scripts de desarrollo y despliegue 'one-click'"
        ]}
        codeExample={`# Configuración de escalado
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: neptuno-api
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: neptuno-api
  minReplicas: 2
  maxReplicas: 10`}
      />
      
      <ExampleCard code={`# Nginx configuración para balanceo
upstream neptuno_backend {
    server api1.neptuno.internal:8000;
    server api2.neptuno.internal:8000;
    server api3.neptuno.internal:8000;
}

server {
    listen 80;
    server_name api.neptuno.com;
    
    location / {
        proxy_pass http://neptuno_backend;
        proxy_set_header Host $host;
    }
}`} />
    </div>
  );
};

export default EnhancedFeatures;
