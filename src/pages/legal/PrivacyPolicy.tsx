
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1>Política de Privacidad</h1>
            <p className="text-gray-500">Última actualización: 21 de abril de 2025</p>
            
            <p>
              En Neptuno valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información personal cuando utiliza nuestra plataforma, sitio web y servicios relacionados (colectivamente, "Servicios").
            </p>

            <h2>1. Información que Recopilamos</h2>
            <h3>1.1 Información proporcionada por usted</h3>
            <p>
              Cuando utiliza nuestros Servicios, podemos recopilar la siguiente información que usted nos proporciona directamente:
            </p>
            <ul>
              <li>Información de registro: nombre, dirección de correo electrónico, contraseña, nombre de la empresa y cargo.</li>
              <li>Información de perfil: foto, biografía, preferencias e intereses.</li>
              <li>Información de pago: datos de tarjetas de crédito, información de facturación.</li>
              <li>Comunicaciones: cuando nos contacta para soporte o con consultas.</li>
            </ul>

            <h3>1.2 Información recopilada automáticamente</h3>
            <p>
              Cuando utiliza nuestros Servicios, recopilamos automáticamente cierta información, incluyendo:
            </p>
            <ul>
              <li>Información del dispositivo: tipo de dispositivo, sistema operativo, navegador.</li>
              <li>Información de uso: cómo utiliza nuestros Servicios, características que usa, tiempo de uso.</li>
              <li>Información de ubicación: ubicación general basada en dirección IP.</li>
              <li>Cookies y tecnologías similares: utilizamos cookies y tecnologías similares para recopilar información sobre cómo interactúa con nuestros Servicios.</li>
            </ul>

            <h2>2. Cómo Utilizamos su Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul>
              <li>Proporcionar, mantener y mejorar nuestros Servicios.</li>
              <li>Procesar transacciones y gestionar su cuenta.</li>
              <li>Enviar información técnica, actualizaciones, alertas de seguridad y mensajes de soporte.</li>
              <li>Responder a sus comentarios, preguntas y solicitudes.</li>
              <li>Monitorear y analizar tendencias, uso y actividades relacionadas con nuestros Servicios.</li>
              <li>Detectar, investigar y prevenir actividades fraudulentas y accesos no autorizados o usos ilegales.</li>
              <li>Personalizar y mejorar su experiencia.</li>
            </ul>

            <h2>3. Compartición de Información</h2>
            <p>
              Podemos compartir su información personal en las siguientes circunstancias:
            </p>
            <ul>
              <li>Con proveedores de servicios que trabajan en nuestro nombre.</li>
              <li>Para cumplir con requisitos legales, como una ley, regulación, proceso legal o solicitud gubernamental.</li>
              <li>Para proteger los derechos, la privacidad, la seguridad o la propiedad de Neptuno, de usted o de otros.</li>
              <li>En relación con una fusión, adquisición, reorganización u otra venta o transferencia de algunos o todos nuestros activos.</li>
              <li>Con su consentimiento o según sus instrucciones.</li>
            </ul>

            <h2>4. Sus Derechos y Opciones</h2>
            <p>
              Dependiendo de su ubicación, puede tener ciertos derechos relacionados con su información personal, como:
            </p>
            <ul>
              <li>Acceder a la información personal que tenemos sobre usted.</li>
              <li>Corregir información inexacta o incompleta.</li>
              <li>Eliminar su información personal.</li>
              <li>Restringir u objetar el procesamiento de su información personal.</li>
              <li>Solicitar la portabilidad de sus datos.</li>
              <li>Retirar su consentimiento en cualquier momento (cuando el procesamiento se basa en el consentimiento).</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctenos utilizando la información proporcionada al final de esta política.
            </p>

            <h2>5. Seguridad de Datos</h2>
            <p>
              Tomamos medidas razonables para proteger su información personal contra pérdida, acceso no autorizado, divulgación, alteración o destrucción. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
            </p>

            <h2>6. Transferencias Internacionales de Datos</h2>
            <p>
              Su información personal puede ser transferida y procesada en países distintos al suyo, donde nuestros servidores están ubicados y donde mantenemos nuestras operaciones principales. Tomaremos medidas para garantizar que su información personal reciba un nivel adecuado de protección en las jurisdicciones donde la procesamos.
            </p>

            <h2>7. Retención de Datos</h2>
            <p>
              Conservaremos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que se requiera un período de retención más largo o esté permitido por ley.
            </p>

            <h2>8. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. La versión actualizada se indicará con una fecha de "última actualización" revisada y la versión actualizada entrará en vigor tan pronto como sea accesible.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos en <a href="mailto:privacy@neptuno.com">privacy@neptuno.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
