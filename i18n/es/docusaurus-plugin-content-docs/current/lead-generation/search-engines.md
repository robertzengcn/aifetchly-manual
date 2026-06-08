---
id: search-engines
title: Market Insight Explorer
sidebar_label: Market Insight Explorer
description: Aprende a extraer resultados de búsqueda de Google, Bing y Yandex para generar leads con análisis impulsado por IA.
---

# Extracción de motores de búsqueda

La función de extracción multi-motor de aiFetchly te permite recopilar leads de múltiples motores de búsqueda simultáneamente. Extrae información empresarial, URL y datos de contacto de los resultados de búsqueda automáticamente. Impulsado por análisis de IA, puedes puntuar leads, clasificar industrias y extraer información de contacto — todo desde tus resultados de búsqueda.


:::info Uso de información pública

Esta función está destinada únicamente a organizar información web pública. Asegúrate de que tu actividad de Market Insight respete el protocolo Robots y los términos de uso del sitio de destino.

:::

## Motores de búsqueda compatibles

| Motor | Ideal para | Cuenta requerida | Navegador local |
|-------|------------|-------------------|-----------------|
| **Google** | Búsquedas generales, alcance global | Recomendado | Opcional |
| **Bing** | Búsquedas generales, cobertura de Microsoft Search | Recomendado | Opcional |
| **Yandex** | Mercado ruso, contenido cirílico | Recomendado | **Requerido** |

:::info Requisito de Yandex

La extracción de Yandex requiere **integración con navegador local** para su correcto funcionamiento. Habilita esta opción al crear tareas de Yandex.

:::

## Crear una tarea de búsqueda

### Paso 1: Ir a Búsqueda

1. Haz clic en **Search** en el menú de navegación izquierdo
2. Verás la página del **Formulario de búsqueda**

### Paso 2: Configuración básica de búsqueda

Introduce la siguiente información requerida:

#### Palabras clave

1. **Introduce tus palabras clave**: Escribe o pega tus palabras clave de búsqueda en el área de texto
   - Una palabra clave por línea
   - Usa palabras clave específicas y dirigidas para mejores resultados

2. **Generar palabras clave relacionadas** (Opcional):
   - Haz clic en el botón **Generate Related Keywords**
   - aiFetchly usa IA para generar términos de búsqueda relacionados
   - Amplía tu lista de palabras clave para una cobertura más amplia
   - Elimina duplicados automáticamente

:::tip Estrategia de palabras clave

Comienza con 5-10 palabras clave semilla, luego usa la generación por IA para ampliar a 20-50 palabras clave relacionadas para una cobertura integral.

:::

#### Motor de búsqueda

Selecciona el motor de búsqueda en el menú desplegable:
- Google (predeterminado)
- Bing
- Yandex

#### Número de página

Especifica desde qué página comenzar la extracción:
- **Comenzar en la página 1** para búsquedas nuevas
- **Continuar desde la página X** si retomas una tarea anterior

#### Cantidad concurrente

Establece el número de búsquedas concurrentes:
- **1** (predeterminado): Más seguro, más lento
- **3-5**: Velocidad moderada, bueno para la mayoría de los casos
- **10+**: Más rápido, requiere más proxies

:::warning Límites de concurrencia

Una mayor concurrencia aumenta el riesgo de ser bloqueado. Comienza con 1-3 y aumenta gradualmente.

:::

### Paso 3: Opciones avanzadas

#### Configuración de proxy

**Opción A: Usar proxies guardados**

1. Haz clic en el botón **Choose Proxy**
2. Selecciona uno o más proxies de tu lista
3. Haz clic en **Confirm** para añadirlos a la tarea

**Opción B: Entrada manual de proxy**

1. Activa la opción de proxy
2. Introduce los datos del proxy manualmente:
   - Host/Dirección IP
   - Número de puerto
   - Usuario (si es necesario)
   - Contraseña (si es necesario)

:::tip Mejores prácticas de proxies

Usa múltiples proxies para tareas de alta concurrencia para distribuir la carga y evitar bloqueos.

:::

#### Integración con navegador local

Habilita la extracción con navegador local para un comportamiento más humano:

1. Activa **Local Browser** para habilitar
2. Selecciona tu navegador Chrome de la lista
3. **Requerido para**: Extracción de Yandex
4. **Recomendado para**: Google y Bing a gran escala

**Beneficios:**
- Menores tasas de detección
- Mejor éxito con protecciones anti-bot
- Resultados más consistentes

#### Mostrar en el navegador

Activa **Show in Browser** para controlar la visibilidad del navegador durante la extracción:

- **Habilitado**: La ventana del navegador es visible durante la extracción — útil para depuración o monitoreo del progreso
- **Deshabilitado** (predeterminado): El navegador se ejecuta en modo headless para una operación más rápida y en segundo plano

#### Habilitar recuperación por IA

Activa **Enable AI Recovery** para permitir que la IA se recupere automáticamente de errores de extracción:

- Cuando está habilitado, aiFetchly usa IA para diagnosticar y recuperarse de errores encontrados durante la extracción
- El sistema puede analizar capturas de pantalla de errores y ajustar su estrategia
- Los intentos de recuperación están limitados para evitar un uso excesivo de recursos

:::tip Cuándo usar recuperación por IA

Habilita la recuperación por IA al extraer de motores con fuerte protección anti-bot (como Google o Bing) o al ejecutar tareas a gran escala donde se esperan errores ocasionales.

:::

#### Uso de cuenta de búsqueda

Usa cuentas autenticadas para mejores tasas de éxito:

1. Activa **Search Account** para habilitar
2. Haz clic en **Choose Account** para seleccionar credenciales guardadas
3. Selecciona cuentas que coincidan con tu motor de búsqueda
4. Haz clic en **Confirm**

**Recomendaciones:**
- **Google**: Usa cuentas para extracción a gran escala
- **Bing**: Usa cuentas para extracción a gran escala
- **Yandex**: Usa cuentas para mejor acceso

### Paso 4: Ejecutar o guardar

Elige una de las siguientes opciones:

#### Solo guardar

- Crea la tarea sin ejecutarla
- Útil para programación o creación de tareas por lotes
- Estado de la tarea: "Not Start"

#### Ejecutar tarea

- Crea y ejecuta la tarea inmediatamente
- El estado cambia a "Processing"
- Los resultados aparecen en tiempo real

## Gestión de tareas de búsqueda

### Ver lista de tareas

Navega a **Search** → **Result List** para ver todas tus tareas de búsqueda.

**Columnas de la lista de tareas:**

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único de la tarea |
| **Keywords** | Palabras clave utilizadas en la búsqueda |
| **Search Engine** | Motor utilizado (Google, Bing, Yandex) |
| **Status** | Not Start, Processing, Complete, Error |
| **Record Time** | Fecha y hora de creación |
| **Actions** | Run, Edit, View Results, Kill Process, Retry, Download Logs |

### Acciones de tarea

| Acción | Descripción | Cuándo está disponible |
|--------|-------------|------------------------|
| **Run** | Iniciar una tarea "Not Start" | Tarea no iniciada |
| **Retry** | Reiniciar una tarea fallida | Tarea con estado "Error" |
| **Edit** | Modificar parámetros de la tarea | Cualquier tarea |
| **Kill Process** | Detener una tarea en ejecución | Tarea en estado "Processing" |
| **View Results** | Ver resultados detallados | La tarea tiene resultados |
| **Download Logs** | Exportar registros de errores | La tarea tiene errores |

## Ver resultados de búsqueda

### Paso 1: Abrir resultados

1. Ve a **Search** → **Result List**
2. Encuentra tu tarea
3. Haz clic en **View Results** para ver los resultados detallados

### Paso 2: Tabla de resultados

La tabla de resultados muestra:

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador del resultado |
| **Title** | Título de la página del resultado de búsqueda |
| **Link** | URL del resultado de búsqueda |
| **Keyword** | Palabra clave que generó este resultado |
| **Record Time** | Cuándo se extrajo el resultado |
| **Customer Industry** | Industria clasificada por IA (si se analizó) |
| **Probability** | Puntuación de calidad del lead 0-100% (si se analizó) |
| **Analysis Status** | Estado de finalización del análisis (pending/analyzing/completed/failed) |
| **Contact Profile Insights** | Estado de extracción de información de contacto |
| **Email** | Dirección de correo extraída (si se extrajo) |
| **Phone** | Número de teléfono extraído (si se extrajo) |
| **Address** | Dirección física extraída (si se extrajo) |

:::tip Visibilidad de columnas

Puedes personalizar qué columnas se muestran usando el menú de **visibilidad de columnas**. Haz clic en el selector de columnas para mostrar u ocultar columnas específicas según las necesidades de tu flujo de trabajo.

:::

### Paso 3: Interactuar con los resultados

**Acciones individuales:**
- **Copy Link**: Copiar la URL al portapapeles
- **Copy Contact Info**: Copiar directamente el correo, teléfono o dirección extraídos

**Acciones por lotes:**
- Selecciona múltiples resultados usando casillas de verificación
- **AI Analyze**: Analizar los resultados seleccionados para puntuación de leads y clasificación de industria
- **AI Extract Contact Info**: Extraer información de contacto (correo, teléfono, dirección) de las URL seleccionadas
- **Open in Contact Profile Insights**: Navegar a la función de Extracción de correos con las URL seleccionadas
- **Export**: Descargar resultados como CSV (incluye campos de análisis de IA)

## Análisis de sitios web con IA

Mejora tus resultados de búsqueda con análisis impulsado por IA:

### Paso 1: Seleccionar resultados

1. Marca las casillas junto a los resultados que deseas analizar
2. Haz clic en el botón **AI Analyze**

### Paso 2: Proporcionar contexto empresarial

Aparecerá un diálogo solicitando tu información empresarial:

1. **Introduce la descripción de tu negocio** en el área de texto — esto ayuda a la IA a entender qué tipo de leads estás buscando
2. **Guardar para futuro** (opcional): Marca esta casilla para guardar tu descripción de negocio para análisis futuros

:::tip Contexto empresarial

Proporciona una descripción clara y específica de tu negocio y clientes objetivo. Cuanto más contexto proporciones, más precisa será la puntuación de la IA. Por ejemplo: "Somos una empresa B2B SaaS que vende herramientas de automatización de marketing a pequeñas y medianas empresas del sector retail."

:::

### Paso 3: Revisar resultados del análisis

La IA produce lo siguiente para cada resultado analizado:

| Campo | Descripción |
|-------|-------------|
| **Customer Industry** | Categoría de industria clasificada por IA |
| **Probability** | Puntuación de calidad del lead de 0-100% |
| **AI Reasoning** | Explicación de por qué este lead recibió esta puntuación |
| **Client Business** | Tipo de negocio identificado del sitio web |

### Paso 4: Monitorear progreso

- La barra de progreso muestra el estado de finalización de las operaciones por lotes
- Los resultados se actualizan en tiempo real a medida que se analiza cada sitio web
- El estado de análisis rastrea cada resultado: pending → analyzing → completed/failed

### Paso 5: Filtrar por puntuación

Después del análisis:
- Usa la puntuación de probabilidad para priorizar leads
- Concéntrate en leads con puntuación de 70%+ para comunicación
- Filtra resultados por clasificación de industria

## Extracción de información de contacto con IA

Extrae detalles de contacto directamente de tus resultados de búsqueda usando IA:

### Paso 1: Seleccionar resultados

1. Marca las casillas junto a los resultados de los que deseas extraer información de contacto
2. Haz clic en el botón **AI Extract Contact Info**

### Paso 2: Monitorear extracción

- El sistema visita cada URL seleccionada y extrae información de contacto
- La extracción se ejecuta en segundo plano con actualizaciones de progreso en tiempo real
- El estado rastrea cada resultado: pending → analyzing → completed/failed

### Paso 3: Ver contactos extraídos

La información extraída se muestra directamente en la tabla de resultados:

| Campo | Descripción |
|-------|-------------|
| **Email** | Direcciones de correo extraídas |
| **Phone** | Números de teléfono extraídos |
| **Address** | Direcciones físicas extraídas |

Puedes copiar campos de contacto individuales directamente desde la tabla usando los botones de copia.

## Extracción de correos desde resultados de búsqueda

Extrae correos directamente de tus resultados de búsqueda:

### Paso 1: Seleccionar resultados

1. Marca las casillas junto a los resultados que contienen URL de las que deseas extraer correos
2. Haz clic en el botón **Open in Contact Profile Insights**

### Paso 2: Configurar extracción

Las URL seleccionadas se transfieren automáticamente a la función de [Extracción de correos](./contact-extraction).

### Paso 3: Ver correos extraídos

Navega a la sección de Extracción de correos para ver los correos recopilados.

## Exportar resultados de búsqueda

### Exportar como CSV

1. Selecciona los resultados que deseas exportar (o deja en blanco para todos)
2. Haz clic en **Export** → **CSV**
3. Elige la ubicación de guardado
4. El archivo incluye todas las columnas de la tabla de resultados, incluyendo campos de análisis de IA (industria, puntuación, razonamiento) e información de contacto (correo, teléfono, dirección)

### Exportar registros de errores

Si una tarea falla:

1. Ve a **Search** → **Result List**
2. Encuentra la tarea fallida
3. Haz clic en **Download Logs**
4. Revisa los registros para diagnosticar problemas

## Mejores prácticas

### 1. Comienza en pequeño

- Comienza con 5-10 palabras clave
- Usa baja concurrencia (1-3)
- Monitorea los resultados antes de escalar

### 2. Usa proxies

- Siempre usa proxies para más de 10 páginas
- Rota los proxies para distribuir la carga
- Prueba los proxies antes de ejecutar tareas grandes

### 3. Aprovecha las funciones de IA

- Usa la generación de palabras clave para ampliar la cobertura
- Proporciona un contexto empresarial claro para una puntuación de IA más precisa
- Ejecuta análisis de IA para puntuar y clasificar leads
- Usa la extracción de contactos por IA para obtener correo, teléfono y dirección
- Concéntrate en resultados con puntuación alta para comunicación

### 4. Consejos específicos por motor

**Google:**
- Usa cuentas autenticadas
- Habilita el navegador local para tareas grandes
- Habilita la recuperación por IA para un manejo robusto de errores
- Respeta los límites de velocidad (comienza con 1 concurrente)

**Bing:**
- Usa cuentas autenticadas para tareas grandes
- Habilita el navegador local al escalar
- Habilita la recuperación por IA para un manejo robusto de errores
- Respeta los límites de velocidad (comienza con 1 concurrente)

**Yandex:**
- **Debe usar navegador local**
- Usa cuentas para mejor acceso
- Esencial para contenido ruso/cirílico

### 5. Monitorea el estado de las tareas

- Revisa la lista de tareas regularmente
- Revisa los registros de errores para fallos
- Ajusta los ajustes según los resultados

### 6. Organiza los resultados

- Usa nombres descriptivos para las tareas
- Exporta los resultados regularmente
- Limpia tareas antiguas

## Solución de problemas

### Estado de la tarea: "Error"

**Posibles causas:**
- Todos los proxies fallaron
- Problemas de conectividad de red
- El motor de búsqueda bloqueó las solicitudes

**Soluciones:**
1. Comprueba la salud de los proxies en la sección de Proxy
2. Verifica la conexión a internet
3. Reduce la concurrencia
4. Habilita el navegador local
5. Usa cuentas autenticadas
6. Habilita la recuperación por IA para el manejo automático de errores

### No se devolvieron resultados

**Posibles causas:**
- Palabras clave demasiado específicas
- El motor de búsqueda no devolvió resultados
- Paginación fuera de rango

**Soluciones:**
1. Prueba con palabras clave más amplias
2. Comienza desde la página 1
3. Verifica que las palabras clave funcionen en una búsqueda manual

### Procesamiento lento

**Posibles causas:**
- Alta concurrencia sin suficientes proxies
- Navegador local habilitado (más lento pero más seguro)
- Latencia de red

**Soluciones:**
1. Añade más proxies
2. Reduce la concurrencia
3. Considera deshabilitar el navegador local para velocidad (con precaución)

### Captcha o bloqueo detectado

**Soluciones:**
1. Habilita la integración con navegador local
2. Usa cuentas autenticadas
3. Añade más proxies
4. Reduce la frecuencia de solicitudes
5. Toma descansos entre tareas grandes
6. Habilita la recuperación por IA para manejar bloqueos automáticamente

## Flujos de trabajo avanzados

### Flujo de trabajo 1: Generación integral de leads

1. **Crea tarea de búsqueda** con palabras clave amplias
2. **Genera palabras clave relacionadas** usando IA
3. **Ejecuta con concurrencia moderada** (3-5)
4. **Habilita recuperación por IA** para manejo robusto de errores
5. **Analiza con IA** todos los resultados con tu contexto empresarial
6. **Filtra por puntuación de probabilidad** (concéntrate en 70%+)
7. **Extrae contactos con IA** de los resultados con puntuación alta
8. **Exporta** para campañas de correo

### Flujo de trabajo 2: Análisis competitivo

1. **Busca nombres de competidores** + palabras clave de la industria
2. **Usa navegador local** para evitar detección
3. **Analiza con IA** para clasificación de industria
4. **Exporta** para investigación de mercado

### Flujo de trabajo 3: Descubrimiento de negocios locales

1. **Busca palabras clave locales** (ej., "plomeros en Chicago")
2. **Extrae contactos con IA** de los resultados (correo, teléfono, dirección)
3. **Analiza por lotes** los sitios web con tu contexto empresarial
4. **Crea campañas** de comunicación dirigidas

## Integración con otras funciones

Los resultados de búsqueda se integran perfectamente con:

- **[Extracción de contactos](./contact-extraction)** - Extrae correos de URL
- **[Páginas amarillas](./yellow-pages)** - Referencia cruzada con listados de directorios
- **[AI Email Writer](../ai-outreach/ai-email-writer)** - Crea comunicaciones personalizadas
- **[Envío masivo de correos](./batch-email-sending)** - Lanza campañas

## Próximos pasos

- [Conoce la extracción de Páginas amarillas](./yellow-pages)
- [Configura la extracción de contactos](./contact-extraction)
- [Crea campañas de correo impulsadas por IA](../ai-outreach/ai-email-writer)

---

**¿Listo para encontrar leads?** Comienza con una tarea de búsqueda pequeña y escala a medida que te familiarices con el sistema.
