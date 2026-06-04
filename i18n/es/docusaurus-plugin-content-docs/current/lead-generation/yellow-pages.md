---
id: yellow-pages
title: Yellow Pages Information Organization
sidebar_label: Yellow Pages
description: Extrae información empresarial de Yellow Pages, Yelp y otros directorios en línea de todo el mundo.
---

# Extracción de Páginas Amarillas

La función de extracción de Páginas Amarillas de aiFetchly te permite obtener información empresarial integral de múltiples directorios en línea. Recopila leads de listados de negocios locales con información de contacto detallada, calificaciones, reseñas y más. Impulsado por soporte de IA, puedes mejorar la precisión de la extracción y generar palabras clave relacionadas automáticamente.

## Directorios compatibles

| Directorio | Región | Idioma | Límite de velocidad | Funciones |
|-------------|--------|--------|---------------------|-----------|
| **YellowPages.com** | EE.UU. | Inglés | 100 req/hora | Detalles de negocio, calificaciones, reseñas, horarios |
| **Yelp.com** | EE.UU. | Inglés | 60 req/hora | Reseñas, calificaciones, fotos, extracción detallada |
| **YellowPages.ca** | Canadá | Inglés | 100 req/hora | Directorio de negocios canadienses, análisis de direcciones |
| **YellowPages.com.sg** | Singapur | Inglés | 100 req/hora | Listados de negocios de Singapur |
| **192.com** | Reino Unido | Inglés | 100 req/hora | Directorio de negocios específico del Reino Unido |
| **11880.com** | Alemania | Alemán | 100 req/hora | Directorio alemán, manejo de consentimiento de cookies |
| **Gelbeseiten.de** | Alemania | Alemán | 100 req/hora | Páginas Amarillas alemanas, manejo de shadow root |
| **PagesJaunes.fr** | Francia | Francés | 100 req/hora | Páginas Amarillas francesas, ubicación requerida |
| **PagineGialle.it** | Italia | Italiano | 100 req/hora | Páginas Amarillas italianas, consentimiento de cookies |
| **iTownPage** | Japón | Japonés | 60 req/hora | Directorio japonés, manejo de diálogos |
| **uSonar Yellow Page** | Japón | Japonés | 60 req/hora | Listados de negocios japoneses |
| **KoreaLocalPages** | Corea del Sur | Coreano | 60 req/hora | Directorio de negocios locales coreanos |

:::tip Límites de velocidad

Cada directorio tiene límites de velocidad específicos. aiFetchly gestiona automáticamente los retrasos entre solicitudes para cumplir con estos límites.

:::

:::info Información de la plataforma

Al crear una tarea, selecciona una plataforma del menú desplegable. Al seleccionar cada plataforma, verás una barra lateral que muestra:
- Soporte de país/idioma
- Límites de velocidad
- Requisitos de autenticación
- Si la ubicación es requerida

:::

## Crear una tarea de Páginas Amarillas

### Paso 1: Ir a Páginas Amarillas

1. Haz clic en **Directory Assistant** en el menú de navegación izquierdo
2. Verás la lista de tareas de Páginas Amarillas
3. Haz clic en el botón **Create New Task**

### Paso 2: Información básica

Introduce la siguiente información requerida:

#### Nombre de la tarea

- Dale a tu tarea un nombre descriptivo
- Ejemplo: "Restaurantes en Chicago" o "Plomeros en Miami"

#### Selección de plataforma

Selecciona el directorio del que deseas extraer en el menú desplegable:

**Américas:**
- YellowPages.com (EE.UU.)
- Yelp.com (EE.UU.)
- YellowPages.ca (Canadá)

**Europa:**
- 192.com (Reino Unido)
- 11880.com (Alemania)
- Gelbeseiten.de (Alemania)
- PagesJaunes.fr (Francia) — ubicación requerida
- PagineGialle.it (Italia)

**Asia-Pacífico:**
- YellowPages.com.sg (Singapur)
- iTownPage (Japón)
- uSonar Yellow Page (Japón)
- KoreaLocalPages (Corea del Sur)

#### Palabras clave

Introduce tus palabras clave de búsqueda:
- **Formato**: Separadas por comas o una por línea
- **Ejemplos**: `restaurante, plomero, dentista, agencia de marketing`
- **Consejo**: Usa tipos de negocio o categorías específicas para mejores resultados

**Palabras clave por IA** (Opcional):
- Haz clic en el botón **AI Query Keywords** (morado, icono de robot) dentro del campo de palabras clave
- aiFetchly usa IA para generar términos de búsqueda relacionados basados en tus palabras clave existentes
- Las palabras clave generadas se combinan con las originales, eliminando duplicados automáticamente
- Si no se ingresan palabras clave, la IA genera sugerencias a partir de un término semilla predeterminado

#### Ubicación

Introduce la ubicación geográfica para tu búsqueda:
- **Ejemplos**: `Nueva York, NY`, `Los Ángeles, CA`, `Miami, Florida`
- **Formato**: Ciudad, Estado o Ciudad, Región
- **Requerido**: Para la mayoría de las plataformas

### Paso 3: Ajustes de rendimiento

Configura cómo se ejecuta la tarea de extracción:

#### Páginas máximas

- **Rango**: 1-100 páginas
- **Predeterminado**: 10 páginas
- **Recomendación**: Comienza con 10-20 páginas para pruebas

**Qué significa esto:**
- Cada página típicamente contiene 20-30 listados de negocios
- 10 páginas = 200-300 leads potenciales
- Más páginas = mayor tiempo de procesamiento

#### Concurrencia

- **Rango**: 1-10 solicitudes concurrentes
- **Predeterminado**: 2 solicitudes concurrentes
- **Valores más altos**: Más rápido pero mayor riesgo de ser bloqueado

:::warning Directrices de concurrencia

- Comienza con 1-3 solicitudes concurrentes
- Aumenta gradualmente si usas proxies
- Respeta los límites de velocidad de la plataforma

:::

#### Retraso entre solicitudes

- **Rango**: 0-10,000 milisegundos
- **Predeterminado**: 2000ms (2 segundos)
- **Propósito**: Previene la limitación de velocidad y el bloqueo

**Retrasos recomendados:**
- **Yelp.com**: 3000ms (límites de velocidad más estrictos)
- **Plataformas japonesas** (iTownPage, uSonar): 2500ms
- **Plataformas coreanas** (KoreaLocalPages): 2500ms
- **Todas las demás**: 2000ms

### Paso 4: Configuración del navegador

#### Modo headless

- **Habilitado** (predeterminado): El navegador se ejecuta de forma invisible (más rápido, recomendado)
- **Deshabilitado**: La ventana del navegador es visible (útil para depuración)

**Recomendación**: Mantén el modo headless habilitado para tareas de producción.

#### Soporte de IA

Activa **AI Support** para habilitar asistencia de extracción impulsada por IA:

- Cuando está habilitado, la IA ayuda a mejorar la precisión de la extracción y manejar casos especiales
- Habilitado por defecto si tu cuenta tiene funciones de IA activadas
- Busca el icono morado de robot junto al interruptor

#### Navegador local

Activa **Use Local Browser** para usar tu instalación local de Chrome o Firefox para la extracción:

1. Activa **Local Browser** para habilitar
2. Selecciona **Chrome** o **Firefox** del menú desplegable
3. **Beneficios**: Menores tasas de detección, mejor éxito con protecciones anti-bot

### Paso 5: Funciones opcionales

#### Selección de cuenta

Algunas plataformas admiten extracción autenticada:

1. Activa **Use Account** si está disponible
2. Selecciona una cuenta de tus cuentas guardadas
3. Beneficios:
   - Mayor tasa de éxito
   - Acceso a contenido exclusivo para miembros
   - Menor riesgo de bloqueo

#### Configuración de proxy

Añade proxies para extracción a gran escala:

1. Activa **Use Proxy**
2. Haz clic en **Choose Proxy**
3. Selecciona uno o más proxies de tu lista
4. Haz clic en **Confirm**

:::tip Cuándo usar proxies

Usa proxies cuando:
- Extraigas más de 50 páginas
- Ejecutes tareas concurrentes
- Tareas anteriores hayan sido bloqueadas

:::

### Paso 6: Programación (Opcional)

#### Programación única

Establece una fecha y hora específica para que la tarea se ejecute:
- Haz clic en **Schedule**
- Selecciona fecha y hora
- La tarea se ejecuta automáticamente a la hora programada

#### Programación recurrente

Configura tareas recurrentes automatizadas:

**Opciones predefinidas:**
- Cada 15 minutos
- Cada 30 minutos
- Cada hora
- Cada 2 horas
- Cada 6 horas
- Cada 12 horas
- Diariamente
- Semanalmente
- Mensualmente

**Programación personalizada:**
- Usa expresiones cron para programación avanzada
- Ejemplo: `0 9 * * 1-5` (9 AM de lunes a viernes)

**Vista previa de programación:**
- Muestra la próxima hora de ejecución
- Muestra un resumen de la configuración

### Paso 7: Crear tarea

Haz clic en uno de los botones de acción en la barra lateral:

- **Create & Start Task** (botón principal): Crea la tarea y comienza la ejecución inmediatamente
- **Create Task Only**: Guarda la tarea sin ejecutarla — el estado será "Pending"

:::tip Vista previa de la tarea

A medida que rellenas el formulario, la barra lateral de **Task Preview** muestra un resumen en vivo de tu configuración incluyendo nombre de la tarea, plataforma, cantidad de palabras clave, ubicación, páginas máximas, concurrencia, modo headless y selección de navegador local. Revisa esto antes de crear la tarea.

:::

### Editar una tarea

Para modificar una tarea existente:

1. Ve a la lista de tareas de **Directory Assistant**
2. Haz clic en el icono de **Edit** (lápiz) en la tarea
3. Modifica la configuración en el formulario
4. Haz clic en **Update Task** para guardar los cambios

## Gestión de tareas de Páginas Amarillas

### Ver lista de tareas

Navega a **Directory Assistant** para ver todas tus tareas.

**Resumen de la lista de tareas:**
- **Estadísticas en tiempo real**: Total, en ejecución, pendientes, completadas, fallidas con tasa de éxito
- **Actualización automática**: Se actualiza cada 5 segundos; activa/desactiva con el botón de actualización
- **Pausa inteligente**: La actualización automática se pausa cuando cambias de pestaña del navegador y se reanuda al volver

### Filtrado y búsqueda

Usa la barra de filtros para acotar las tareas:

| Filtro | Descripción |
|--------|-------------|
| **Search** | Buscar por nombre de tarea o plataforma |
| **Status** | Filtrar por Pending, Running, Completed, Failed, Paused |
| **Platform** | Filtrar por plataforma de directorio |
| **Priority** | Filtrar por prioridad High, Medium, Low |

Los filtros activos se muestran como chips removibles debajo de la barra de filtros. Haz clic en **Clear Filters** para restablecer todos los filtros.

### Estado de la tarea

| Estado | Descripción | Acción |
|--------|-------------|--------|
| **Pending** | Tarea creada pero no iniciada | Start, Edit, Delete |
| **Running** | La tarea se está procesando | Pause, Stop, View Progress |
| **Paused** | Suspendida temporalmente | Resume, Stop |
| **Completed** | Finalizada exitosamente | View Results, Delete |
| **Failed** | Terminó con errores | View Logs, Retry, Delete |

### Acciones de tarea

| Acción | Descripción |
|--------|-------------|
| **Start** | Iniciar la ejecución de la tarea |
| **Stop** | Terminar la tarea en ejecución |
| **Pause** | Suspender temporalmente la tarea |
| **Resume** | Continuar la tarea pausada |
| **Edit** | Modificar la configuración de la tarea |
| **Delete** | Eliminar la tarea del sistema |
| **View Results** | Ver los datos empresariales extraídos |

### Alerta de protección Cloudflare

Si una tarea encuentra protección Cloudflare, aiFetchly muestra una notificación de advertencia en la parte superior de la lista de tareas. Esta alerta indica que el directorio objetivo ha activado medidas anti-bot. Para resolver esto, intenta habilitar el navegador local, usar cuentas autenticadas o añadir proxies.

### Operaciones masivas

- **Start Multiple**: Selecciona e inicia múltiples tareas pausadas/fallidas
- **Stop Tasks**: Detén múltiples tareas en ejecución
- **Delete Tasks**: Elimina múltiples tareas completadas/fallidas

## Ver resultados

### Paso 1: Acceder a los resultados

1. Ve a la lista de tareas de **Directory Assistant**
2. Encuentra la tarea completada
3. Haz clic en **View Results** para abrir la página de resultados

### Paso 2: Tarjeta de resumen de la tarea

La página de resultados muestra una **Tarjeta de resumen de la tarea** en la parte superior con:
- **Platform**: Qué directorio fue extraído
- **Total Results**: Número de negocios extraídos
- **Status**: Estado actual de la tarea (codificado por colores)
- **Created Time**: Cuándo se creó la tarea
- **Keywords**: Mostradas como chips para revisión fácil
- **Location**: El área geográfica buscada

### Paso 4: Tabla de resultados

La tabla de resultados muestra información empresarial completa:

| Columna | Descripción |
|---------|-------------|
| **Business Name** | Nombre del negocio |
| **Categories** | Categorías del negocio (chips visuales) |
| **Email** | Dirección de correo con botón de copia |
| **Phone** | Número de teléfono con botón de copia |
| **Website** | Enlace clickeable al sitio web |
| **Address** | Dirección completa con icono de mapa |
| **Ratings** | Calificación con estrellas y conteo de reseñas |
| **Description** | Descripción del negocio |
| **Hours** | Horario de atención (si disponible) |
| **Year Established** | Año de fundación del negocio |
| **Employee Count** | Número de empleados |
| **Scraped At** | Marca de tiempo de la extracción de datos |

### Paso 5: Interactuar con los resultados

**Acciones individuales:**
- **Copy Email**: Copiar la dirección de correo al portapapeles
- **Copy Phone**: Copiar el número de teléfono al portapapeles
- **Open Website**: Abrir el sitio web del negocio en una nueva pestaña
- **View Details**: Ver el registro completo del negocio en un modal

**Búsqueda y filtrado:**
- **Search**: Filtrar por nombre del negocio, correo, teléfono, sitio web o dirección
- **Filtro de categoría**: Filtrar resultados por categorías de negocio
- **Pagination**: Navegar conjuntos de resultados grandes

## Exportar resultados

### Exportar como CSV

1. Haz clic en el botón **Export** en la vista de resultados
2. El archivo se descarga automáticamente en formato CSV
3. El nombre del archivo incluye el ID de la tarea y la fecha

**Los datos exportados incluyen:**
- Nombre del negocio y categorías
- Datos de contacto (correo, teléfono, sitio web)
- Dirección y ubicación
- Calificaciones y reseñas
- Horario de atención
- Metadatos adicionales

## Mejores prácticas

### 1. Estrategia de palabras clave

- **Sé específico**: Usa tipos de negocio específicos en lugar de términos genéricos
  - ❌ "servicios"
  - ✅ "agencia de marketing" o "servicios de plomería"

- **Usa sinónimos**: Prueba diferentes términos para el mismo tipo de negocio
  - "restaurante" y "comedor"
  - "plomero" y "servicio de plomería"

### 2. Segmentación por ubicación

- **Sé preciso**: Usa el formato "Ciudad, Estado"
  - ✅ "Chicago, IL"
  - ✅ "Los Ángeles, CA"
  - ❌ "Chicago" (puede devolver resultados ambiguos)

- **Comienza amplio, luego acota**:
  1. Busca en una ciudad grande (miles de resultados)
  2. Exporta los resultados
  3. Busca en barrios específicos

### 3. Optimización de rendimiento

**Para tareas pequeñas** (< 100 páginas):
- Concurrencia: 1-3
- Retraso: 2000ms
- No se necesita proxy

**Para tareas medianas** (100-500 páginas):
- Concurrencia: 3-5
- Retraso: 2000ms
- Usa 2-3 proxies

**Para tareas grandes** (500+ páginas):
- Concurrencia: 5-10
- Retraso: 2000ms
- Usa 5+ proxies
- Considera dividir en múltiples tareas

### 4. Evitar bloqueos

1. **Respeta los límites de velocidad**: No excedas la concurrencia recomendada
2. **Usa retrasos**: Mantén los retrasos entre solicitudes en 2000ms o más
3. **Rota proxies**: Distribuye las solicitudes entre múltiples IPs
4. **Usa cuentas**: La extracción autenticada tiene límites más altos
5. **Toma descansos**: No ejecutes tareas grandes continuamente
6. **Habilita soporte de IA**: La IA puede ayudar a manejar protecciones anti-bot
7. **Usa navegador local**: La huella digital del navegador real reduce el riesgo de detección

### 5. Calidad de datos

- **Verifica resultados**: Comprueba la precisión de los datos extraídos mediante muestras
- **Filtra categorías**: Usa filtros de categoría para eliminar resultados irrelevantes
- **Referencia cruzada**: Combina datos de múltiples plataformas
- **Actualizaciones regulares**: La información empresarial cambia, actualiza los datos regularmente

## Consejos específicos por plataforma

### YellowPages.com (EE.UU.)

**Fortalezas:**
- Listados empresariales integrales
- Información de contacto precisa
- Buena cobertura en todos los estados

**Consejos:**
- Usa ciudad + estado para mejores resultados
- Incluye horarios de atención y servicios
- Bueno para negocios B2C

### Yelp.com (EE.UU.)

**Fortalezas:**
- Datos de reseñas ricos
- Fotos y descripciones detalladas
- Contenido generado por usuarios

**Consejos:**
- Límites de velocidad más estrictos (usa retraso de 3000ms)
- Excelente para negocios de servicios
- Los datos de reseñas ayudan a calificar leads

### YellowPages.ca (Canadá)

**Fortalezas:**
- Listados específicos de Canadá
- Verificación de negocios canadienses

**Consejos:**
- Esencial para el mercado canadiense
- Usa el formato "Ciudad, Provincia"

### YellowPages.com.sg (Singapur)

**Fortalezas:**
- Directorio de negocios de Singapur
- Listados locales integrales

**Consejos:**
- Usa nombres de ciudades o distritos para la ubicación
- Bueno para investigación de mercado del sudeste asiático

### 192.com (Reino Unido)

**Fortalezas:**
- Directorio de negocios y personas específico del Reino Unido
- Buena cobertura en todo el Reino Unido

**Consejos:**
- Usa el formato de ciudad y código postal del Reino Unido
- Bueno para comunicación B2B en el Reino Unido

### 11880.com (Alemania)

**Fortalezas:**
- Directorio de negocios alemán
- Maneja el consentimiento de cookies automáticamente

**Consejos:**
- Usa nombres de ciudades alemanas para mejores resultados
- Bueno para investigación del mercado DACH

### Gelbeseiten.de (Alemania)

**Fortalezas:**
- Páginas Amarillas alemanas
- Listados empresariales integrales en Alemania
- Maneja diálogos complejos de consentimiento de cookies

**Consejos:**
- Usa palabras clave en alemán para mejores resultados
- Esencial para el mercado alemán

### PagesJaunes.fr (Francia)

**Fortalezas:**
- Páginas Amarillas francesas
- Función de revelar números de teléfono
- Listados empresariales franceses integrales

**Consejos:**
- **La ubicación es obligatoria** para esta plataforma
- Usa nombres de ciudades francesas y códigos postales
- Bueno para comunicación en el mercado francés

### PagineGialle.it (Italia)

**Fortalezas:**
- Páginas Amarillas italianas
- Directorio empresarial italiano integral
- Maneja el consentimiento de cookies automáticamente

**Consejos:**
- Usa nombres de ciudades italianas para la ubicación
- Bueno para investigación de mercado en Italia

### iTownPage (Japón)

**Fortalezas:**
- Directorio de negocios japonés
- Maneja ventanas emergentes de diálogo automáticamente
- Gestión de consentimiento de cookies japonés

**Consejos:**
- Usa palabras clave en japonés para mejores resultados
- Esencial para el descubrimiento de negocios locales japoneses
- Usa retraso de 2500ms (límite de 60 req/hora)

### uSonar Yellow Page (Japón)

**Fortalezas:**
- Directorio de negocios japonés alternativo
- Bueno para referencia cruzada con iTownPage

**Consejos:**
- Usa junto con iTownPage para mayor cobertura
- Usa retraso de 2500ms

### KoreaLocalPages (Corea del Sur)

**Fortalezas:**
- Directorio de negocios locales coreano
- Bueno para investigación de entrada al mercado coreano

**Consejos:**
- Usa palabras clave en coreano para mejores resultados
- Usa retraso de 2500ms (límite de 60 req/hora)
- Bueno para descubrir negocios coreanos

## Integración con el marketing por correo

Los correos empresariales extraídos pueden usarse directamente en campañas de correo:

1. **Exporta los resultados** de la tarea de Páginas Amarillas
2. **Navega a Outreach Campaign** → **Send Outreach Campaigns**
3. **Importa el CSV** con los correos extraídos
4. **Crea una plantilla** para tus comunicaciones
5. **Lanza la campaña**

Para instrucciones detalladas, consulta [Envío masivo de correos](./batch-email-sending).

## Solución de problemas

### Estado de la tarea: "Failed"

**Posibles causas:**
- Todos los proxies fallaron
- Problemas de conectividad de red
- La plataforma bloqueó las solicitudes
- Palabras clave o ubicación no válidas

**Soluciones:**
1. Comprueba la salud de los proxies
2. Verifica la conexión a internet
3. Reduce la concurrencia y aumenta el retraso
4. Prueba con diferentes palabras clave/ubicación
5. Habilita la autenticación de cuenta
6. Habilita el soporte de IA para un manejo de errores más inteligente
7. Usa el navegador local para eludir protecciones anti-bot

### No se devolvieron resultados

**Posibles causas:**
- Palabras clave demasiado específicas
- La ubicación no tiene negocios coincidentes
- La plataforma no devolvió resultados

**Soluciones:**
1. Prueba con palabras clave más amplias
2. Verifica la ortografía de la ubicación
3. Comprueba si los negocios existen en la plataforma manualmente
4. Prueba con ubicaciones cercanas

### Procesamiento lento

**Posibles causas:**
- Ajuste de páginas máximas alto
- Ajustes de retraso conservadores
- Límites de velocidad de la plataforma

**Soluciones:**
1. Reduce las páginas máximas
2. Reduce ligeramente el retraso (con precaución)
3. Aumenta la concurrencia (si usas proxies)

### Datos incompletos

**Posibles causas:**
- Los listados empresariales carecen de información
- Cambios en el diseño de la plataforma

**Soluciones:**
1. Algunos negocios naturalmente carecen de ciertos datos
2. Referencia cruzada con otras plataformas
3. Reporta problemas de la plataforma al soporte

## Flujos de trabajo avanzados

### Flujo de trabajo 1: Comunicación a negocios locales

1. **Busca** negocios en tu ubicación objetivo
2. **Filtra** por categoría y calificaciones
3. **Exporta** leads de alta calidad
4. **Importa** al marketing por correo
5. **Crea campaña personalizada** usando AI Email Writer

### Flujo de trabajo 2: Análisis competitivo

1. **Extrae competidores** en múltiples ubicaciones
2. **Analiza calificaciones y reseñas**
3. **Identifica brechas de servicio**
4. **Dirígete a áreas desatendidas**

### Flujo de trabajo 3: Investigación de mercado

1. **Extrae** todos los negocios de una industria
2. **Analiza** distribución y patrones
3. **Identifica** oportunidades de mercado
4. **Planifica** estrategia de expansión

## Comparación: Motores de búsqueda vs. Páginas Amarillas

| Característica | Motores de búsqueda | Páginas Amarillas |
|---------------|---------------------|-------------------|
| **Ideal para** | Encontrar sitios web, investigación general | Negocios locales, listados verificados |
| **Calidad de datos** | Variable | Estructurada, verificada |
| **Info de contacto** | Requiere extracción | Correos/teléfonos pre-extraídos |
| **Segmentación geográfica** | Basada en palabras clave | Basada en ubicación |
| **Calificaciones/Reseñas** | A veces | Siempre (Yelp) |
| **Horario de atención** | Rara vez | Comúnmente |

:::tip Usa ambas estrategias

Combina ambos enfoques:
1. Usa **Motores de búsqueda** para encontrar sitios web específicos de la industria
2. Usa **Páginas Amarillas** para encontrar negocios locales
3. Referencia cruzada para cobertura integral

:::

## Próximos pasos

- [Conoce la extracción de correos](./contact-extraction)
- [Configura campañas de correo con IA](../ai-outreach/ai-email-writer)
- [Configura la programación de tareas](../automation/task-scheduling)

---

**¿Listo para encontrar negocios locales?** Comienza con una tarea pequeña para familiarizarte con el proceso, luego escala tus operaciones.
