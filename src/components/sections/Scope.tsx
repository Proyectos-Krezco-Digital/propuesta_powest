import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Layout, 
  Link2, 
  Search, 
  FileText, 
  CheckCircle2, 
  Users2,
  Cpu,
  ArrowRight,
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { 
    id: 'tech', 
    label: '3.1 Alcance Técnico', 
    icon: Server,
    intro: 'Nuestra propuesta se fundamenta en una Arquitectura Headless CMS, la cual separa el administrador de contenidos del diseño visual. A continuación, detallamos el cumplimiento estricto de cada requerimiento técnico exigido para el ecosistema digital:',
    items: [
      { id: '3.1.1', title: 'Arquitectura técnica de la solución', tech: 'Implementaremos WordPress Multisite como motor de Backend y Next.js (basado en React) para el Frontend, comunicados mediante API para lograr una compilación estática inmediata.', corp: 'Esta separación de entornos permite a Powest gestionar su contenido desde un panel altamente intuitivo, respaldado por la potencia de una plataforma moderna de última tecnología que garantiza tiempos de respuesta inmediatos y escalabilidad absoluta.' },
      { id: '3.1.2', title: 'Infraestructura de seguridad (Certificados SSL)', tech: 'Implementación y configuración de Certificados SSL de grado corporativo (cifrado TLS de extremo a extremo) para todos los dominios y subdominios del ecosistema (powest.mx, powest.ec, powest.com.co).', corp: 'Esto asegura que cualquier transferencia de datos e información de clientes B2B viaje estrictamente encriptada, protegiendo la integridad y reputación digital de la marca en toda la región.' },
      { id: '3.1.3', title: 'Consideraciones de seguridad y performance', tech: 'Al usar arquitectura Headless, el Frontend carece de conexión directa con la base de datos SQL, haciéndolo prácticamente invulnerable a inyecciones o ataques comunes. El performance se maximiza mediante la generación de sitios estáticos (SSG) en Next.js.', corp: 'El resultado es un ecosistema digital blindado y con tiempos de carga optimizados al máximo, un factor decisivo para retener el tráfico corporativo sin demoras en la navegación.' },
      { id: '3.1.4', title: 'Compatibilidad con navegadores y dispositivos', tech: 'Desarrollo 100% Responsive Design con optimización de renderizado. Garantizamos un funcionamiento y visualización impecable en Google Chrome, Safari, Edge y Firefox, adaptándose automáticamente a dispositivos móviles (iOS y Android).', corp: 'Aseguramos que los tomadores de decisiones puedan acceder al portafolio completo con una experiencia de usuario perfecta desde cualquier equipo comercial corporativo o dispositivo móvil.' },
      { id: '3.1.5', title: 'Ambientes incluidos (desarrollo, pruebas, producción)', tech: 'Habilitaremos tres entornos de trabajo corporativos completamente aislados: 1. Ambiente de Desarrollo (para despliegue de código fuente), 2. Ambiente de Pruebas / Staging (para control de calidad) y 3. Ambiente de Producción (sitio en vivo).', corp: 'Esta estructura permite que el equipo de Powest pueda revisar, aprobar y validar cualquier cambio o actualización en un entorno seguro antes de que sea visible para el público general.' },
      { id: '3.1.6', title: 'Manejo de versiones y despliegues', tech: 'Utilizaremos repositorios de código centralizados (Git) y flujos de integración continua.', corp: 'Llevamos un control riguroso de cada actualización, asegurando que las futuras mejoras o integraciones tecnológicas se implementen de forma controlada y sin generar caídas en el servicio público (Zero Downtime).' },
      { id: '3.1.7', title: 'Estructura en la administración propia por País', tech: 'A través del núcleo de WordPress Multisite, habilitaremos una infraestructura centralizada con despliegues distribuidos. Cada dominio (Colombia, México, Ecuador) operará con total independencia.', corp: 'Esto permite que los equipos locales gestionen sus propios inventarios, banners y dialectos de forma autónoma, sin riesgo de afectar la configuración o el ecosistema de los demás países.' },
      { id: '3.1.8', title: 'Soporte y administración de página web - Niveles De Administración', tech: 'Implementación de Control de Acceso Basado en Roles (RBAC). El sistema contará con un nivel de "Súper Administrador" global para Powest matriz, junto con administradores locales restringidos exclusivamente al entorno de su respectivo país.', corp: 'Garantizamos el control total desde la matriz corporativa y, al mismo tiempo, mantenemos el orden operativo local, evitando alteraciones accidentales de información cruzada entre sucursales.' },
      { id: '3.1.9', title: 'Llave en mano del proyecto web', tech: 'Despliegue de un ecosistema multidominio 100% funcional, probado, integrado y documentado bajo la modalidad llave en mano.', corp: 'Entregamos una solución tecnológica integral y operativa desde el día uno, sin costos ocultos y lista para que Powest inicie de inmediato su estrategia de captación comercial a nivel regional.' }
    ]
  },
  { 
    id: 'content', 
    label: '3.2 Alcance de contenido y catálogo', 
    icon: Layout,
    intro: 'Entendemos que el portafolio de Powest está dirigido a un sector especializado (B2B). Por ello, el catálogo no será una simple vitrina estática, sino un motor de consulta avanzado diseñado para capturar leads corporativos. Cubriremos al 100% los requerimientos exigidos de la siguiente manera:',
    items: [
      { id: '3.2.1', title: 'Páginas espejo cada una con dominio propio', tech: 'Despliegue de instancias independientes en la arquitectura Headless para cada dominio (powest.mx, powest.ec, powest.com.co). El sistema detectará y servirá el contenido correspondiente sin aplicar redireccionamientos forzados.', corp: 'Garantizamos que cada país tenga su propia identidad digital nativa. Esto es vital para el posicionamiento orgánico (SEO) en Google, asegurando que un cliente en México vea la página optimizada para su región, con su dialecto y sus asesores locales.' },
      { id: '3.2.2', title: 'Carga inicial de hasta 300 productos (No es un e-commerce)', tech: 'Migración, estructuración y poblamiento de la base de datos en el Backend con el inventario inicial de hasta 300 referencias estipuladas. Al prescindir de pasarelas de pago transaccionales, la base de datos se optimiza estrictamente para la velocidad de consulta y generación de leads.', corp: 'Entregamos la plataforma completamente alimentada y lista para operar. Su equipo no tendrá que digitar el inventario inicial desde cero; nosotros dejamos el ecosistema estructurado para que su fuerza comercial comience a trabajar el mismo día del lanzamiento.' },
      { id: '3.2.3', title: 'Fichas técnicas completas', tech: 'Desarrollo de plantillas dinámicas en el Frontend (Next.js) para renderizar instantáneamente las especificaciones, tablas de atributos y descripciones detalladas de cada referencia.', corp: 'Cada producto contará con una presentación de alto perfil técnico. Está diseñada para que los ingenieros o jefes de compras de sus clientes encuentren toda la información que necesitan en milisegundos, sin tiempos de espera.' },
      { id: '3.2.4', title: 'Filtros avanzados y Búsqueda Inteligente', tech: 'Implementación de una base de datos espejo en Supabase para realizar un LiveSearch (búsqueda en vivo) perfecto. Este motor de búsqueda funciona con inteligencia y en tiempo real de manera ultrarrápida. Si el cliente busca, por ejemplo, la palabra "solares", el buscador no espera a que el usuario termine de teclear; inmediatamente entiende la intención y le trae todos los productos que contengan esa coincidencia, procesando la información con una latencia casi nula.', corp: 'Llevamos la experiencia de búsqueda a un nivel superior. Sus clientes corporativos no tendrán que dar clic en "buscar" ni esperar a que cargue una página de resultados. Mientras el comprador va escribiendo el nombre del equipo, la plataforma ya le está mostrando las opciones correctas en pantalla. Esto reduce la fricción, ahorra tiempo valioso y acelera radicalmente la ruta hacia la cotización.' },
      { id: '3.2.5', title: 'Botones de acción por país (Cotización Inteligente)', tech: 'Programación de scripts de enrutamiento dinámico y lógica geográfica anclados a la API de WhatsApp Business. El sistema lee el país de origen y la URL del producto activo para direccionar el requerimiento.', corp: 'Transformamos un simple botón en una máquina de conversión directa. Si un cliente en Ecuador está viendo una UPS y hace clic en "Cotizar", el sistema abre su WhatsApp enviando el contacto directamente al celular del asesor ecuatoriano, con un mensaje automático que indica exactamente qué equipo está visualizando. Esto elimina fricciones y asegura que la oportunidad de negocio se atienda de inmediato.' },
      { id: '3.2.6', title: 'Arquitectura de contenido de producto (Categoría Madre, Subcategoría, Categoría)', tech: 'Modelado relacional estricto en el Gestor de Contenido (WordPress Multisite) que respeta y refleja la taxonomía jerárquica exigida: Categoría Madre > Subcategoría > Categoría.', corp: 'Aseguramos que el catálogo tenga un orden lógico y altamente escalable. Si el día de mañana Powest decide abrir nuevas líneas de negocio, la plataforma soportará este crecimiento manteniendo la información perfectamente estructurada y fácil de administrar.' },
      { id: '3.2.7', title: 'Recursos descargables', tech: 'Integración de un gestor de adjuntos dentro de la estructura de cada ficha técnica, optimizado para la entrega de archivos estáticos (PDFs, manuales, certificaciones) desde servidores de alta velocidad.', corp: 'Facilitamos la labor del comprador B2B, permitiéndole descargar con un solo clic los manuales de usuario y las certificaciones (RETIE, ISO, etc.) que necesitan para incluir a Powest en sus procesos de licitación corporativa.' }
    ]
  },
  { 
    id: 'integrations', 
    label: '3.3 Alcance Integraciones', 
    icon: Link2,
    intro: 'Para que el ecosistema digital funcione como una verdadera máquina de adquisición B2B, es imperativo que esté interconectado con las herramientas analíticas y comerciales de la compañía. Gracias a la potencia de nuestra plataforma moderna de última tecnología, garantizamos el despliegue de las siguientes integraciones:',
    items: [
      { id: '3.3.1', title: 'Integración con CRM para leads', tech: 'Conexión segura (vía API/Webhooks) entre el Frontend (Next.js) y el CRM actual de Powest. Esto asegura la transmisión de datos en tiempo real de todos los puntos de conversión del sitio, incluyendo formularios de contacto y la captura de intención a través de los scripts del botón de WhatsApp.', corp: 'Automatizamos su embudo de ventas. Cada vez que un cliente corporativo solicite una cotización, la información viajará de forma inmediata a su sistema comercial, permitiendo a los asesores actuar al instante y cerrar negocios sin perder ninguna oportunidad.' },
      { id: '3.3.2', title: 'Google Analytics 4', tech: 'Implementación y configuración avanzada de propiedades de GA4 por dominio local (Colombia, México, Ecuador) y vistas consolidadas. Se incluirá la parametrización de eventos de conversión clave (clics de cotización, descargas de fichas técnicas, envíos de formularios).', corp: 'Proporcionamos inteligencia de negocios basada en datos. Powest podrá medir con precisión el tráfico corporativo, el comportamiento de los usuarios y el rendimiento exacto de cada país, facilitando la toma de decisiones estratégicas basadas en resultados reales.' },
      { id: '3.3.3', title: 'Tag Manager', tech: 'Inserción del contenedor de Google Tag Manager (GTM) en la arquitectura Headless para la gestión centralizada de scripts de seguimiento, píxeles de marketing y etiquetas de terceros, cargados de forma asíncrona para no afectar el performance del sitio.', corp: 'Otorgamos agilidad extrema a su equipo de marketing. Podrán lanzar campañas, instalar herramientas de medición o integrar nuevas plataformas publicitarias en cuestión de minutos y de forma autónoma, sin depender de un programador para alterar el código de la página.' },
      { id: '3.3.4', title: 'Microsoft Clarity', tech: 'Integración nativa del script de Microsoft Clarity para la generación de mapas de calor (heatmaps) y grabaciones de sesiones de usuario, respetando el rendimiento de carga y las políticas de privacidad de datos.', corp: 'Entregamos visibilidad visual total sobre cómo interactúan los clientes B2B con el catálogo. Al ver exactamente dónde hacen clic, qué leen y dónde abandonan la navegación, Powest tendrá las herramientas para optimizar continuamente la página y maximizar la captación de leads.' },
      { id: '3.3.5', title: 'Search Console', tech: 'Verificación de propiedad para los entornos multidominio y vinculación de sitemaps dinámicos XML generados por la plataforma Headless. Esto garantiza la correcta indexación de las URLs limpias y el monitoreo de la salud técnica en los resultados de búsqueda orgánica.', corp: 'Aseguramos el control absoluto sobre la presencia digital de Powest en Google. Esta herramienta es vital para dominar los resultados de búsqueda y garantizar que sus equipos de energía aparezcan como la primera opción cuando los directores de compras realicen consultas técnicas.' },
      { id: '3.3.6', title: 'Integración API para desarrollos e integraciones', tech: 'Disponibilización de endpoints seguros (API REST / GraphQL) desde el núcleo de la arquitectura Headless CMS, permitiendo la comunicación bidireccional y el consumo estructurado del inventario y contenidos por parte de aplicaciones externas.', corp: 'Preparamos a Powest para el futuro. Al contar con una arquitectura moderna basada en APIs, el ecosistema digital queda listo para conectarse sin problemas con futuros sistemas ERP corporativos, aplicaciones móviles o nuevas tecnologías, garantizando una escalabilidad absoluta a largo plazo.' }
    ]
  },
  { 
    id: 'seo_int', 
    label: '3.4 Alcance de Internacionalización y adquisición digital', 
    icon: Search,
    intro: 'Garantizamos el cumplimiento estricto del Mínimo SEO Viable (MSV) mediante una estrategia técnica avanzada, estructurada específicamente para ecosistemas corporativos B2B. A continuación, detallamos las actividades incluidas para dominar los motores de búsqueda tradicionales y las nuevas herramientas de Inteligencia Artificial:',
    items: [
      { id: '3.4.1', title: 'Optimización técnica', tech: 'Renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG) mediante Next.js, inyección dinámica de meta-etiquetas (Title, Description, Robots) y cumplimiento de los estándares Core Web Vitals de Google.', corp: 'Aseguramos que la plataforma cumpla con los estándares técnicos más estrictos de la industria. Esto garantiza que los algoritmos de búsqueda puedan leer, entender y clasificar el catálogo de Powest sin ningún obstáculo, maximizando su visibilidad orgánica.' },
      { id: '3.4.2', title: 'Optimización de imágenes (WebP)', tech: 'Conversión automática de los recursos gráficos a formatos de próxima generación (WebP). Al operar bajo una arquitectura Headless, el Frontend no almacena ni procesa físicamente las imágenes; todas están alojadas y centralizadas de forma independiente en el Backend de WordPress Multisite. Estas se sirven al usuario final mediante peticiones optimizadas con carga diferida (Lazy Loading).', corp: 'Aprovechamos la máxima ventaja de nuestra tecnología: la página que ven sus clientes no carga con el peso de cientos de fotografías en su código. Como las imágenes viven separadas en la "bóveda" de administración, reducimos drásticamente el peso de la página. Esto asegura que el catálogo visual cargue al instante, evitando que los clientes corporativos abandonen el sitio por demoras, incluso si navegan desde redes móviles en plantas industriales.' },
      { id: '3.4.3', title: 'Cache y optimización de código', tech: 'Minificación agresiva de archivos JavaScript y CSS, eliminación de código bloqueante y despliegue del ecosistema sobre una red de entrega de contenidos (CDN) global (Edge Caching).', corp: 'La plataforma "pre-construye" las páginas y las guarda en servidores ultrarrápidos. Cuando un cliente corporativo ingresa, el sitio no tiene que pensar, simplemente entrega la información de inmediato. Esta velocidad extrema es premiada directamente por Google con mejores posiciones de búsqueda.' },
      { id: '3.4.4', title: 'Sitemaps', tech: 'Generación y actualización automatizada de mapas de sitio dinámicos en formato XML por cada dominio independiente. El sistema enviará pings automáticos a los motores de búsqueda tras cada actualización de contenido en el Backend.', corp: 'Creamos un mapa directo para Google. Cada vez que Powest agregue una nueva UPS o modifique una ficha técnica, los buscadores serán notificados de inmediato, asegurando que su nuevo portafolio aparezca en los resultados de búsqueda sin semanas de retraso.' },
      { id: '3.4.5', title: 'URLs limpias', tech: 'Implementación de enrutamiento semántico y jerárquico (ej. dominio.mx/categoria/nombre-del-producto) eliminando variables dinámicas, parámetros de sesión o cadenas de texto ilegibles en la barra de direcciones.', corp: 'Construimos enlaces lógicos y descriptivos que son fáciles de leer tanto para los ingenieros que comparten la información, como para los motores de búsqueda que analizan de qué trata cada página.' },
      { id: '3.4.6', title: 'SEO estructurado', tech: 'Implementación de microdatos bajo el estándar Schema.org. Se inyectará marcado JSON-LD específico para productos B2B, organizaciones y migas de pan (breadcrumbs) en todo el ecosistema.', corp: 'Traducimos el catálogo técnico de Powest al lenguaje exacto que hablan los algoritmos. Esto permite que Google muestre resultados enriquecidos de sus equipos (como valoraciones o especificaciones clave) directamente en la página de resultados, destacando frente a la competencia.' },
      { id: '3.4.7', title: 'Indexación en Google y Bing', tech: 'Vinculación directa mediante API con Google Search Console y Bing Webmaster Tools. Configuración de reglas de rastreo (robots.txt) optimizadas para priorizar el presupuesto de rastreo de las arañas de búsqueda en los catálogos de productos.', corp: 'No esperamos a que los buscadores nos encuentren por casualidad; empujamos proactivamente el ecosistema digital a los dos motores de búsqueda corporativos más importantes del mundo para asegurar su indexación prioritaria.' },
      { id: '3.4.8', title: 'Keywords, enlaces internos y externos', tech: 'Arquitectura de interlinking dinámico automatizado desde el Headless CMS. Habilitación de campos estructurados en WordPress para la gestión local de palabras clave de concordancia exacta y semántica latente (LSI) por país.', corp: 'Conectamos lógicamente los equipos y categorías dentro de la página, guiando al cliente en su proceso de compra y demostrándole a Google que Powest es la autoridad definitiva y la fuente de información más completa en soluciones de energía.' },
      { id: '3.4.9', title: 'Optimización de formularios', tech: 'Formularios de captura construidos de forma asíncrona (AJAX) sin recarga de página (Zero Layout Shift), protegidos con validación Honeypot (anti-spam invisible) para no afectar la conversión con molestos Captchas gráficos.', corp: 'Eliminamos toda fricción en el momento de la verdad. Si un director de compras decide contactarlos, el proceso será seguro, instantáneo y fluido, elevando drásticamente la tasa de captura de leads.' },
      { id: '3.4.10', title: 'GEO - Posicionamiento en IA de Internacionalización', tech: 'Implementación estricta de etiquetas Hreflang y marcado geográfico JSON-LD avanzado. Configuración de enrutamiento nativo desde el servidor para que los dominios locales (powest.mx, powest.com.mx, powest.ec, powest.com.ec) sean indexados como entidades soberanas e independientes, sin aplicar redirecciones al dominio global.', corp: 'Esta es la joya de la corona de nuestra arquitectura. Garantizamos que los motores tradicionales y las nuevas inteligencias artificiales (ChatGPT, Copilot, Gemini) entiendan perfectamente la soberanía de cada país. Si un usuario en México o una IA consultando para ese mercado busca a Powest, el sistema entregará y recomendará la URL mexicana nativa y su dialecto correspondiente. Al no forzar redirecciones, evitamos que los bots de IA se confundan, asegurando que Powest domine las respuestas de la Inteligencia Artificial en toda la región.' }
    ]
  },
  { 
    id: 'doc', 
    label: '3.5 Alcance Documentación', 
    icon: FileText,
    intro: 'El proveedor se compromete con la entrega de toda la documentación necesaria para asegurar la independencia tecnológica de Powest. Cada entregable ha sido diseñado para cubrir las necesidades operativas, técnicas y estratégicas del ecosistema:',
    items: [
      { id: '3.5.1', title: 'Documentación técnica (Workbook de configuración)', tech: 'Creación de un Workbook detallado que documenta la configuración del entorno Headless, parámetros del servidor, variables de entorno en Next.js, configuración del multisitio en WordPress y credenciales cifradas de las APIs integradas.', corp: 'Entregamos el "ADN" técnico de la plataforma. Este documento asegura que el equipo de tecnología de Powest tenga el control absoluto y el conocimiento exacto de cómo está configurado el ecosistema, garantizando su autonomía e independencia frente a cualquier proveedor.' },
      { id: '3.5.2', title: 'Manual de administración del sitio', tech: 'Documentación exhaustiva sobre la gestión de roles y permisos (RBAC), creación de nuevas instancias para futuras expansiones regionales, administración central de la base de datos de productos y gestión de la seguridad del entorno.', corp: 'Es la guía especializada para su "Súper Administrador" global. Con este manual, la matriz de Powest tendrá las directrices claras para gobernar la plataforma a nivel regional, abrir nuevos mercados y mantener la seguridad de todo el ecosistema corporativo sin contratiempos.' },
      { id: '3.5.3', title: 'Manual de usuario de funcionamiento, administración y cambios Página Web', tech: 'Guías operativas paso a paso enfocadas en la interfaz de gestión visual ("No-Code") para la actualización de inventarios, modificación de banners, carga de archivos descargables y gestión de metadatos SEO/Keywords.', corp: 'Es el manual del día a día para sus equipos de marketing y ventas locales. Está redactado en un lenguaje claro y práctico para que cualquier colaborador, sin conocimientos de programación, pueda actualizar catálogos, cambiar imágenes o publicar nuevos equipos de forma autónoma e inmediata.' },
      { id: '3.5.4', title: 'Diagramas o arquitectura del diseño', tech: 'Entrega de diagramas de arquitectura de software y red, detallando la topología de la infraestructura, los flujos de datos entre el Frontend (Next.js) y el Backend (WordPress Multisite), así como diagramas de secuencia de las integraciones API y el enrutamiento de WhatsApp.', corp: 'Proporcionamos un mapa visual de todo el ecosistema digital. Esto es vital para futuras auditorías de seguridad, procesos de certificación de calidad o para el momento en que Powest decida escalar conectando nuevos softwares corporativos a la plataforma.' },
      { id: '3.5.5', title: 'Acta de cierre del proyecto y entrega a conformidad', tech: 'Formalización del despliegue a producción mediante un documento técnico y legal que valida la ejecución del 100% de los requerimientos funcionales, las integraciones estipuladas, las pruebas de calidad (QA) y la entrega de todos los artefactos de software.', corp: 'Culminamos el proyecto con total transparencia y rigor profesional. Este documento certifica que Powest recibe un producto llave en mano, probado, documentado y funcionando a la perfección, marcando el inicio exitoso de su nueva estrategia digital y activando formalmente los tiempos de garantía pactados.' }
    ]
  },
  { 
    id: 'qa', 
    label: '3.6 Alcance de Pruebas', 
    icon: CheckCircle2,
    intro: 'Para garantizar un lanzamiento impecable y sin interrupciones operativas, ejecutaremos una rigurosa etapa de Control de Calidad (QA) en el Ambiente de Pruebas (Staging) antes del despliegue a Producción. A continuación, detallamos las validaciones técnicas que realizaremos:',
    items: [
      { id: '3.6.1', title: 'Pruebas completas de Usabilidad para los 3 países', tech: 'Ejecución de pruebas funcionales multiplataforma (End-to-End) en el Frontend (Next.js), aislando las instancias de Colombia, México y Ecuador para verificar tiempos de renderizado, fluidez de interactividad y correcta carga de recursos localizados según el dominio consultado.', corp: 'Nos aseguramos de que el ecosistema funcione a la perfección sin importar desde dónde se conecte su cliente. Validaremos rigurosamente que la experiencia visual y de navegación sea impecable, rápida e idéntica en calidad para el mercado mexicano, ecuatoriano y colombiano.' },
      { id: '3.6.2', title: 'Formularios – Pop ups', tech: 'Pruebas de validación de captura de datos asíncrona (AJAX) en los componentes de Next.js. Comprobación de disparadores (triggers) de ventanas emergentes según reglas de negocio, asegurando que los leads fluyan correctamente hacia el CRM vía API sin generar bloqueos en la interfaz.', corp: 'Revisamos cada punto de contacto comercial. Verificamos que si un director de compras llena un formulario o interactúa con un mensaje emergente, la información se guarde de forma segura y llegue de inmediato a su equipo de ventas, sin que la página se congele o falle.' },
      { id: '3.6.3', title: 'WhatsApp Business anclado', tech: 'Auditoría exhaustiva de los scripts de enrutamiento dinámico. Simularemos peticiones desde diferentes direcciones IP geolocalizadas para confirmar que la lógica del sistema detecte el país y la URL activa, dirigiendo el evento exactamente al número telefónico de la sucursal correspondiente.', corp: 'Ponemos a prueba nuestra máquina de conversión directa. Simularemos ser clientes de diferentes países para garantizar que, al hacer clic en el botón de cotización, el sistema conecte al comprador B2B instantáneamente con el asesor comercial correcto, llevando el mensaje del equipo pre-escrito.' },
      { id: '3.6.4', title: 'Políticas', tech: 'Verificación de la accesibilidad, correcto enlazado interno y despliegue de los documentos de términos, condiciones y políticas de privacidad adaptados a los dominios espejo, garantizando que el diseño responsive no afecte la lectura de textos legales.', corp: 'Blindamos a Powest legalmente. Comprobamos que todos los avisos legales, políticas de cookies y tratamiento de datos estén visibles y funcionen correctamente en cada país, asegurando el cumplimiento normativo en el manejo de la información corporativa.' },
      { id: '3.6.5', title: 'Fichas técnicas', tech: 'Validación de la renderización dinámica de los atributos técnicos desde el Headless CMS hacia el Frontend. Se ejecutará una revisión de los enlaces de recursos descargables (PDFs, manuales) almacenados en los servidores de alta velocidad, comprobando que no existan errores 404.', corp: 'Revisamos exhaustivamente el corazón de su portafolio. Nos aseguramos de que cada especificación de producto cargue correctamente y que los ingenieros de sus clientes puedan descargar los manuales o certificados en milisegundos, sin enlaces rotos.' },
      { id: '3.6.6', title: 'Script de pruebas documentado', tech: 'Consolidación de un documento formal de QA (Quality Assurance), detallando los casos de prueba ejecutados, los escenarios de validación multiplataforma, los resultados obtenidos en el entorno de Staging y la firma técnica de aprobación para autorizar el paso a Producción.', corp: 'No dejamos nada al azar ni a la suposición. Entregaremos a su equipo una bitácora formal que demuestra qué probamos, cómo lo probamos y los resultados exitosos obtenidos. Esto les dará la tranquilidad y certeza absoluta de que el ecosistema está completamente listo para salir al aire.' }
    ]
  },
  { 
    id: 'training', 
    label: '3.7 Alcance Capacitación', 
    icon: Users2,
    intro: 'Para garantizar la correcta apropiación tecnológica y asegurar que Powest opere el nuevo ecosistema con total autonomía desde el día uno, ejecutaremos un plan de transferencia de conocimiento de alto impacto. Cubriremos todos los requerimientos exigidos de la siguiente manera:',
    items: [
      { id: '3.7.1', title: 'Tipo de capacitación: Usuario y Técnica', tech: 'Ejecución de dos frentes de formación basados en el Control de Acceso por Roles (RBAC). Un frente "Técnico" dirigido a TI (gobernanza del Headless, Next.js y configuraciones del servidor) y un frente de "Usuario" dirigido a administradores locales (gestión de contenido en WordPress Multisite).', corp: 'Capacitamos a su equipo en dos niveles estratégicos. El área de tecnología entenderá cómo administrar el "motor" y la seguridad de la plataforma, mientras que el área de mercadeo y ventas aprenderá a actualizar el catálogo B2B en el día a día sin necesidad de saber programar.' },
      { id: '3.7.2', title: 'Temarios incluidos', tech: 'El plan de estudios abarca estrictamente el currículo exigido: Modificación de banners, textos e imágenes adaptables; Gestión avanzada de etiquetas y keywords para optimización SEO/IA; y la sustentación y Entrega del Workbook para la entrega técnica.', corp: 'Les entregamos las llaves del negocio digital. Su equipo sabrá exactamente cómo cambiar promociones, publicar nuevos equipos de energía y dominar las palabras clave para que Powest siga liderando los resultados en Google y herramientas de Inteligencia Artificial.' },
      { id: '3.7.3', title: 'Modalidad: Virtual (Sincrónica y Asincrónica)', tech: 'Ejecución a través de plataformas de videoconferencia corporativa, con grabación en alta definición de todas las sesiones en vivo para la conformación de una base de conocimiento perpetua en video.', corp: 'Al tratarse de un ecosistema multilatina, la modalidad virtual nos permite unificar al personal de Colombia, México y Ecuador en una misma sala. Además, al grabar las sesiones, Powest no tendrá que volver a pagar por capacitación si el día de mañana ingresa un nuevo empleado a la compañía.' },
      { id: '3.7.4', title: 'Número de sesiones (12 sesiones min.) y Duración (2 horas min.)', tech: 'Estructuración de un plan de 24 horas totales (12 sesiones de 2 horas mínimo) divididas metodológicamente para optimizar el despliegue ágil. El esquema se compone de 5 Sesiones Sincrónicas en vivo (10 horas de transferencia de conocimiento directa) y 7 Sesiones Asincrónicas prácticas (14 horas de ejecución), donde el equipo ejecutará talleres en el ambiente de Staging apoyados en los manuales interactivos.', corp: 'Cumplimos con el volumen de capacitación exigido, pero con una metodología inteligente. Propusimos 5 sesiones teóricas en vivo y 7 sesiones de práctica porque, en un cronograma de máximo 4 semanas, tener a su equipo encerrado en 12 sesiones puramente teóricas les quita un tiempo valioso de ejecución a ustedes. Es suficiente con 10 horas sincrónicas para entender perfectamente la plataforma; preferimos darles ese conocimiento directo y dejar que utilicen las 14 horas restantes para practicar a su ritmo con escenarios reales.' },
      { id: '3.7.5', title: 'Cantidad de usuarios a capacitar (Mínimo 6 personas)', tech: 'Aprovisionamiento de credenciales individuales en el Ambiente de Pruebas (Staging) para un mínimo de 6 usuarios concurrentes durante la etapa de formación, permitiendo simulaciones en tiempo real sin riesgo sobre la base de datos de producción.', corp: 'Garantizamos que el conocimiento no quede centralizado en una sola persona. Entrenaremos simultáneamente a los líderes clave de cada país (mínimo 6 colaboradores) para que cada sede regional tenga un experto capaz de administrar su respectivo dominio con total seguridad e independencia.' }
    ]
  }
];

export const Scope = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.5; // Scroll 50% of the screen width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350); // check again after animation
    }
  };

  return (
    <div className="pt-28 md:pt-40 pb-32 bg-white min-h-screen overflow-x-clip w-full text-balance">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black tracking-[0.2em] text-[var(--color-purple)] uppercase mb-6 shadow-sm font-ui">
            <Cpu className="w-4 h-4 text-[var(--color-lime)]" />
            <span>PÁGINA 3: ALCANCE DEL PROYECTO</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-tight lg:leading-[1.05] font-titles uppercase break-words">
            3. ALCANCE PROYECTO <br className="hidden md:block" />
            <span className="text-[var(--color-purple)] italic tracking-tighter">(OBLIGATORIO)</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-[var(--color-lime)]/50 pl-4 lg:pl-8 py-2 w-full">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Despliegue integral de un ecosistema digital institucional multilatina (Colombia, México y Ecuador) bajo arquitectura Headless CMS de alto rendimiento.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start w-full min-w-0">
          
          {/* Sidebar - Contenedor Principal (Sticky) */}
          <div className="sticky top-[3.5rem] md:top-20 lg:top-32 z-30 bg-white/95 backdrop-blur-md lg:bg-transparent border-b border-gray-100 lg:border-none relative w-full pt-2 lg:pt-0">
            
            {/* Sombras Laterales (Móvil) para indicar más contenido */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 lg:hidden ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 lg:hidden ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Botones Flotantes (Móviles) */}
            <button 
              onClick={() => scroll('left')}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-md rounded-full p-1.5 transition-all lg:hidden ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-md rounded-full p-1.5 transition-all lg:hidden ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Menú Horizontal / Vertical desplazable */}
            <div 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible py-4 lg:py-0 w-full"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' 
              }}
            >
              <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              
              <div className="hidden lg:flex items-center gap-3 mb-6 ml-6 shrink-0">
                 <Database className="w-5 h-5 text-black" />
                 <p className="text-[12px] font-black text-black uppercase tracking-[0.4em] font-ui">Módulos</p>
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const contentEl = document.getElementById('scope-content');
                    if (window.innerWidth < 1024 && contentEl) {
                      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`flex items-center lg:justify-between gap-3 lg:gap-4 px-5 lg:px-7 py-3 lg:py-5 rounded-[4rem] lg:rounded-3xl transition-all duration-500 text-left relative group border shrink-0 w-auto lg:w-full min-w-0 ${
                    activeTab === tab.id 
                      ? 'bg-black text-white border-black shadow-xl lg:shadow-2xl scale-100 lg:scale-100' 
                      : 'bg-transparent text-gray-700 border-gray-200 lg:border-transparent hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                    <tab.icon className={`w-4 h-4 lg:w-5 lg:h-5 shrink-0 transition-colors duration-300 ${activeTab === tab.id ? 'text-[var(--color-lime)]' : 'text-gray-400 group-hover:text-black'}`} />
                    <span className={`font-black uppercase tracking-widest transition-all duration-300 font-ui whitespace-nowrap lg:whitespace-normal lg:break-words lg:leading-snug ${activeTab === tab.id ? 'text-[11px] lg:text-[13px] text-white' : 'text-[10px] lg:text-[11px] text-gray-600'}`}>
                      {tab.label}
                    </span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div layoutId="scopeActiveDot" className="hidden lg:block shrink-0 w-2.5 h-2.5 bg-[var(--color-lime)] rounded-full shadow-[0_0_15px_rgba(232,255,0,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div id="scope-content" className="relative pt-4 scroll-mt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-24"
              >
                {/* Intro Section */}
                <div className="space-y-4 lg:space-y-6">
                  <h2 className="text-3xl lg:text-3xl font-black text-black leading-none uppercase tracking-tighter font-titles">{currentTab.label}</h2>
                  <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-4xl border-b border-gray-100 pb-8 lg:pb-12 italic font-body">
                    {currentTab.intro}
                  </p>
                </div>

                {/* Scope Items List */}
                <div className="space-y-16 lg:space-y-32">
                  {currentTab.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className="group"
                    >
                      <div className="flex flex-col lg:grid lg:grid-cols-[80px_1fr] gap-6 lg:gap-8 w-full min-w-0">
                        {/* Number Display */}
                        <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 shrink-0 w-full lg:w-auto">
                          <span className="text-3xl lg:text-4xl font-black text-gray-200 lg:text-gray-100 group-hover:text-[var(--color-lime)] transition-colors duration-700 select-none font-titles tracking-tighter shrink-0">
                             {item.id}
                          </span>
                          <div className="flex-1 lg:flex-none h-1 lg:h-full w-full lg:w-1.5 bg-gray-100 lg:bg-gray-50 group-hover:bg-[var(--color-lime)]/20 transition-all duration-700 min-h-[4px] lg:min-h-[60px] rounded-full mt-0 lg:mt-4" />
                        </div>

                        <div className="space-y-6 lg:space-y-10 w-full min-w-0">
                          <h4 className="text-[1.1rem] leading-snug sm:text-xl md:text-2xl font-black text-black tracking-tighter group-hover:text-[var(--color-purple)] transition-colors font-ui uppercase break-words hyphens-auto">
                            {item.title}
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full min-w-0">
                            {/* Technical Specification */}
                            <div className="space-y-4 w-full min-w-0">
                              <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] mb-2 block font-ui break-words">Detalle Técnico</span>
                              <div className="p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 overflow-hidden w-full">
                                <p className="text-[13px] sm:text-sm md:text-base text-gray-600 font-bold leading-relaxed italic font-body break-words">
                                  {item.tech}
                                </p>
                              </div>
                            </div>
                            
                            {/* Business Value */}
                            <div className="space-y-4 w-full min-w-0">
                              <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] mb-2 block font-ui break-words">Explicación Corporativa</span>
                              <div className="p-5 sm:p-6 md:p-8 border-l-4 border-gray-100 bg-white md:bg-transparent overflow-hidden w-full">
                                <p className="text-[13px] sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed font-body break-words">
                                  {item.corp}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Navigation CTA */}
                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 w-full min-w-0">
                   <div className="space-y-2 w-full min-w-0 break-words">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest font-ui">Siguiente Módulo</p>
                      <h2 className="text-xl sm:text-2xl font-black text-black tracking-tighter font-titles uppercase break-words hyphens-auto">4. SOPORTE Y GARANTÍAS</h2>
                   </div>
                   <Link 
                     to="/soporte"
                     className="flex items-center justify-center gap-4 sm:gap-6 bg-black text-white px-6 sm:px-12 py-5 sm:py-6 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] hover:bg-[var(--color-purple)] transition-all shadow-xl group border border-black font-ui w-full sm:w-auto shrink-0"
                   >
                     <span className="text-center break-words">Ir a Soporte Técnico</span>
                     <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
                   </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};
