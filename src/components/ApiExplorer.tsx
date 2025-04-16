
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check } from 'lucide-react';

const ApiExplorer: React.FC = () => {
  const [activeExample, setActiveExample] = useState('auth');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const apiExamples = {
    auth: {
      title: "Autenticación",
      description: "Implementa autenticación en segundos con OAuth2 y JWT.",
      code: `# Configuración inicial
from neptuno import Neptuno, AuthConfig

app = Neptuno(
    auth_config=AuthConfig(
        oauth_providers=["google", "github"],
        jwt_secret="your-secret-key",
        enable_2fa=True
    )
)

# Proteger rutas con decorador
@app.route("/protected", auth_required=True)
def protected_route():
    return {"message": "Acceso autorizado"}

# Roles y permisos
@app.route("/admin", role_required="admin")
def admin_route():
    return {"message": "Panel de administración"}`
    },
    gamification: {
      title: "Gamificación",
      description: "Añade puntos, badges y niveles a tus usuarios.",
      code: `# Configurar gamificación
from neptuno import Gamification

gamification = Gamification(
    levels=[
        {"name": "Novato", "min_points": 0},
        {"name": "Intermedio", "min_points": 100},
        {"name": "Experto", "min_points": 500}
    ],
    badges=[
        {"id": "first_login", "name": "Explorador", "condition": "login_count >= 1"},
        {"id": "power_user", "name": "Power User", "condition": "actions_count >= 50"}
    ]
)

# Añadir puntos a un usuario
@app.route("/comment", methods=["POST"])
def add_comment():
    # Lógica para añadir comentario
    gamification.add_points(user_id=current_user.id, points=10)
    return {"status": "success"}

# Verificar y otorgar badges automáticamente
@app.task(schedule="daily")
def check_badges():
    for user in app.get_active_users():
        gamification.check_badges(user_id=user.id)`
    },
    payments: {
      title: "Pagos y Suscripciones",
      description: "Integra pasarelas de pago y gestiona suscripciones.",
      code: `# Configurar pagos
from neptuno import Payments, StripeConfig

payments = Payments(
    stripe_config=StripeConfig(
        api_key=os.getenv("STRIPE_API_KEY"),
        webhook_secret=os.getenv("STRIPE_WEBHOOK_SECRET")
    )
)

# Crear un producto y precio
product = payments.create_product(
    name="Premium Plan", 
    description="Acceso completo a todas las funcionalidades"
)

price = payments.create_price(
    product_id=product.id,
    amount=999,  # $9.99
    currency="usd",
    interval="month"
)

# Crear una suscripción
@app.route("/subscribe", methods=["POST"])
def subscribe():
    subscription = payments.create_subscription(
        customer_id=current_user.stripe_id,
        price_id=price.id
    )
    return {"subscription_id": subscription.id}`
    },
    coupons: {
      title: "Cupones y Descuentos",
      description: "Sistema de cupones y promociones completo.",
      code: `# Configurar sistema de cupones
from neptuno import CouponSystem, DiscountType

coupon_system = CouponSystem()

# Crear un nuevo cupón
@app.route("/admin/coupons", methods=["POST"])
def create_coupon():
    coupon = coupon_system.create_coupon(
        code="WELCOME25",
        discount_type=DiscountType.PERCENTAGE,
        discount_value=25,
        valid_from=datetime.now(),
        valid_until=datetime.now() + timedelta(days=30),
        usage_limit=100,
        minimum_purchase=1000  # $10.00
    )
    return {"coupon_id": coupon.id}

# Validar y aplicar un cupón
@app.route("/checkout/apply-coupon", methods=["POST"])
def apply_coupon():
    data = request.json
    validation = coupon_system.validate_coupon(
        code=data["coupon_code"],
        user_id=current_user.id,
        order_amount=data["cart_total"]
    )
    
    if validation["valid"]:
        return {
            "discount_amount": validation["discount_amount"],
            "final_amount": validation["final_amount"]
        }
    else:
        return {"error": validation["message"]}, 400`
    },
    sitesettings: {
      title: "Configuración del Sitio",
      description: "Gestiona configuraciones y parámetros del sistema.",
      code: `# Sistema de configuración dinámica
from neptuno import SiteSettings, SettingType

# Inicializar sistema de configuración
settings = SiteSettings()

# Definir configuraciones predeterminadas
settings.register([
    {
        "key": "site_name",
        "type": SettingType.STRING,
        "default": "Neptuno App",
        "description": "Nombre del sitio"
    },
    {
        "key": "enable_registration",
        "type": SettingType.BOOLEAN,
        "default": True,
        "description": "Permitir registro de nuevos usuarios"
    },
    {
        "key": "theme_color",
        "type": SettingType.STRING,
        "default": "#3B82F6",
        "description": "Color principal del tema"
    },
    {
        "key": "maintenance_mode",
        "type": SettingType.BOOLEAN,
        "default": False,
        "description": "Activar modo mantenimiento"
    }
])

# API para leer configuraciones
@app.route("/api/settings")
def get_settings():
    return settings.get_all(include_private=current_user.is_admin)

# API para actualizar configuraciones (solo admin)
@app.route("/api/settings", methods=["PUT"])
@admin_required
def update_settings():
    data = request.json
    updated = settings.update(data["key"], data["value"])
    return {"success": updated}`
    }
  };

  const currentExample = apiExamples[activeExample as keyof typeof apiExamples];

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Lista para Producción</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neptuno proporciona una API completa y documentada que facilita la implementación de funciones avanzadas.
          </p>
        </div>
        
        <div className="glass-card p-6 sm:p-8">
          <Tabs defaultValue="auth" className="w-full" onValueChange={(value) => setActiveExample(value)}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="auth">Autenticación</TabsTrigger>
              <TabsTrigger value="gamification">Gamificación</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="coupons">Cupones</TabsTrigger>
              <TabsTrigger value="sitesettings">Configuración</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeExample} className="animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">{currentExample.title}</h3>
                  <p className="text-gray-600 mb-4">{currentExample.description}</p>
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <h4 className="font-medium mb-2">Características</h4>
                    <ul className="space-y-2 text-sm">
                      {activeExample === "auth" && (
                        <>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            OAuth2 con múltiples proveedores
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            JWT seguro y configurable
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Autenticación de 2 factores
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Sistema de roles y permisos
                          </li>
                        </>
                      )}
                      
                      {activeExample === "gamification" && (
                        <>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Sistema de puntos y recompensas
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Badges personalizables
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Niveles con condiciones automáticas
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Tableros de clasificación
                          </li>
                        </>
                      )}
                      
                      {activeExample === "payments" && (
                        <>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Integración con Stripe, PayPal, etc.
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Gestión de suscripciones
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Pagos únicos y recurrentes
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Webhooks para eventos de pago
                          </li>
                        </>
                      )}

                      {activeExample === "coupons" && (
                        <>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Cupones con fecha de caducidad
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Descuentos porcentuales o fijos
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Límites de uso por cupón y usuario
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Validación automática de condiciones
                          </li>
                        </>
                      )}

                      {activeExample === "sitesettings" && (
                        <>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Configuración dinámica del sitio
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Múltiples tipos de ajustes
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Interfaz de administración
                          </li>
                          <li className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            Control de acceso por rol
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="relative">
                    <div className="bg-neptuno-navy rounded-t-lg px-4 py-2 text-gray-300 text-sm font-mono flex items-center">
                      <span>python</span>
                      <div className="ml-auto">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-gray-300 hover:text-white hover:bg-white/10"
                          onClick={() => handleCopy(currentExample.code)}
                        >
                          {copied ? <Check size={16} /> : <Copy size={16} />}
                          <span className="ml-2">{copied ? "Copiado" : "Copiar"}</span>
                        </Button>
                      </div>
                    </div>
                    <div className="code-block rounded-t-none">
                      <pre>{currentExample.code}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ApiExplorer;
