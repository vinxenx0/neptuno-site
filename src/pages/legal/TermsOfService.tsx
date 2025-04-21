
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          
          <div className="prose max-w-none">
            <h1>Términos de Servicio</h1>
            <p className="text-gray-500">Última actualización: 21 de abril de 2025</p>
            
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de Neptuno (en adelante, "el Servicio"), usted acepta cumplir y quedar vinculado por los presentes Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
            </p>

            <h2>2. Cambios en los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra entera discreción. Si realizamos cambios materiales, intentaremos proporcionar un aviso con al menos 30 días de antelación antes de que entren en vigor los nuevos términos.
            </p>

            <h2>3. Acceso a los Servicios</h2>
            <p>
              Neptuno se compromete a proporcionar el Servicio de la mejor manera posible. Sin embargo, no garantizamos que el acceso al Servicio sea ininterrumpido o esté libre de errores.
            </p>
            <p>
              Nos reservamos el derecho de retirar o modificar el Servicio, y cualquier característica o material que proporcionemos en el Servicio, a nuestra entera discreción y sin previo aviso.
            </p>

            <h2>4. Cuentas de Usuario</h2>
            <p>
              Para acceder a ciertas funcionalidades de nuestro Servicio, deberá registrar una cuenta. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.
            </p>
            <p>
              Usted acepta notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta o cualquier otra infracción de seguridad.
            </p>

            <h2>5. Propiedad Intelectual</h2>
            <p>
              El Servicio y su contenido original, características y funcionalidad son propiedad de Neptuno y están protegidos por derechos de autor, marca registrada, patente, secreto comercial y otras leyes de propiedad intelectual.
            </p>
            <p>
              Nuestras marcas comerciales y elementos visuales de marca no pueden utilizarse en relación con ningún producto o servicio sin el consentimiento previo por escrito de Neptuno.
            </p>

            <h2>6. Contenido del Usuario</h2>
            <p>
              Al proporcionar cualquier contenido al Servicio, usted otorga a Neptuno un derecho y licencia mundial, no exclusivo, libre de regalías, sublicenciable y transferible para usar, reproducir, modificar, adaptar, publicar, traducir, crear trabajos derivados, distribuir y mostrar dicho contenido.
            </p>
            <p>
              Usted declara y garantiza que tiene todos los derechos necesarios para otorgar los derechos mencionados anteriormente, y que el contenido no infringe los derechos de ningún tercero.
            </p>

            <h2>7. Enlaces a Otros Sitios Web</h2>
            <p>
              Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Neptuno.
            </p>
            <p>
              Neptuno no tiene control sobre, y no asume responsabilidad por, el contenido, políticas de privacidad o prácticas de sitios web o servicios de terceros. Usted reconoce y acepta que Neptuno no será responsable, directa o indirectamente, por cualquier daño o pérdida causados o presuntamente causados por o en conexión con el uso o la confianza en dicho contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios.
            </p>

            <h2>8. Terminación</h2>
            <p>
              Podemos terminar o suspender su acceso al Servicio inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo, sin limitación, si usted incumple los Términos.
            </p>
            <p>
              Todas las disposiciones de los Términos que por su naturaleza deberían sobrevivir a la terminación sobrevivirán a la terminación, incluyendo, sin limitación, disposiciones de propiedad, renuncias de garantía, indemnización y limitaciones de responsabilidad.
            </p>

            <h2>9. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso Neptuno, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de su acceso o uso o incapacidad de acceder o usar el Servicio.
            </p>

            <h2>10. Ley Aplicable</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            <p>
              Nuestra falta de ejercicio o ejecución de cualquier derecho o disposición de estos Términos no constituirá una renuncia a tal derecho o disposición.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos de Servicio, por favor contáctenos en <a href="mailto:legal@neptuno.com">legal@neptuno.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
