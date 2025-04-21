
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
            <h1>Política de Cookies</h1>
            <p className="text-gray-500">Última actualización: 21 de abril de 2025</p>
            
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>

            <h2>2. Cómo utilizamos las cookies</h2>
            <p>
              Utilizamos cookies y tecnologías similares (como píxeles y balizas web) para varios propósitos, incluyendo:
            </p>

            <h3>2.1 Cookies esenciales</h3>
            <p>
              Estas cookies son necesarias para el funcionamiento de nuestro sitio web y no pueden ser desactivadas en nuestros sistemas. Generalmente sólo se establecen en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.
            </p>

            <h3>2.2 Cookies de rendimiento</h3>
            <p>
              Estas cookies nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo se mueven los visitantes por el sitio.
            </p>

            <h3>2.3 Cookies de funcionalidad</h3>
            <p>
              Estas cookies permiten que el sitio proporcione funcionalidades y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
            </p>

            <h3>2.4 Cookies de publicidad</h3>
            <p>
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por estas empresas para construir un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios.
            </p>

            <h2>3. Cookies de terceros</h2>
            <p>
              Además de nuestras propias cookies, podemos también utilizar varias cookies de terceros para reportar estadísticas de uso, entregar anuncios, etc. Estas incluyen:
            </p>
            <ul>
              <li>Google Analytics: para analizar cómo los usuarios utilizan nuestro sitio web</li>
              <li>Google Ads: para personalizar anuncios</li>
              <li>Facebook Pixel: para medir la efectividad de nuestras campañas publicitarias</li>
            </ul>

            <h2>4. Control de cookies</h2>
            <p>
              Puede configurar su navegador para rechazar todas las cookies, aceptar solo cookies de ciertos sitios web, o notificarle cuando se establece una cookie. Sin embargo, si utiliza la configuración de su navegador para bloquear todas las cookies (incluidas las cookies esenciales), es posible que no pueda acceder a la totalidad o parte de nuestro sitio.
            </p>
            
            <p>
              A continuación, le proporcionamos enlaces a información sobre cómo gestionar las cookies en los navegadores más comunes:
            </p>
            
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
            </ul>

            <h2>5. Cambios en nuestra política de cookies</h2>
            <p>
              Cualquier cambio que podamos hacer a nuestra política de cookies en el futuro se publicará en esta página. Por favor, compruebe con frecuencia para ver cualquier actualización o cambio en nuestra política de cookies.
            </p>

            <h2>6. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre nuestra política de cookies, por favor contáctenos en <a href="mailto:privacy@neptuno.com">privacy@neptuno.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
