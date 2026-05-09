---
id: contact-extraction
title: Contact Extraction
sidebar_label: Email Extraction
description: Extrae direcciones de correo electrónico de sitios web y URL de forma masiva con la potente herramienta de extracción de aiFetchly.
---

# Extracción de correos electrónicos

La función de extracción de correos electrónicos de aiFetchly te permite recopilar direcciones de correo electrónico de sitios web a escala. Extrae información de contacto de URL individuales o aprovecha tus resultados de búsqueda existentes para una recopilación de correos específica.

## Comprensión de la extracción de correos electrónicos

La extracción de correos funciona de la siguiente manera:

1. **Visita cada URL** que proporcionas
2. **Escanea el contenido de la página** en busca de patrones de correo electrónico
3. **Sigue enlaces internos** (opcional)
4. **Compila todos los correos descubiertos** en una lista estructurada
5. **Elimina duplicados** de los resultados automáticamente

:::info Casos de uso

La extracción de correos es ideal para:
- Recopilar correos de resultados de búsqueda
- Construir listas de contacto desde directorios de la industria
- Recopilar información de contacto de listados de miembros
- Extraer correos de páginas de recursos

:::

## Crear una tarea de extracción

### Paso 1: Ir a Extracción de correos

1. Haz clic en **Email Extraction** en el menú de navegación izquierdo
2. Verás la lista de tareas de extracción
3. Haz clic en el botón **Create New Task**

### Paso 2: Elegir método de entrada de URL

Selecciona cómo deseas proporcionar las URL para la extracción:

#### Método 1: Entrada manual de URL

**Ideal para**: Listas de URL personalizadas, sitios web específicos

1. Selecciona **Manual Input** en el menú desplegable de origen
2. Introduce tus URL en el área de texto
3. **Formato**: Una URL por línea

**Ejemplo:**
```
https://example.com
https://www.sitio-empresarial.com/contact
https://otro-sitio.com/about-us
```

**Validación:**
- Las URL deben comenzar con `http://` o `https://`
- Las URL no válidas se marcarán automáticamente
- Máximo de URL por tarea: 10,000

#### Método 2: Desde resultados de búsqueda

**Ideal para**: Aprovechar campañas de búsqueda existentes

1. Selecciona **Search Results** en el menú desplegable de origen
2. Aparece una tabla con tus tareas de búsqueda completadas
3. Selecciona la tarea de búsqueda que contiene las URL de las que deseas extraer
4. Haz clic en **Confirm**

**Ventajas:**
- Integración fluida con la función de búsqueda
- No es necesario introducir URL manualmente
- Utiliza las URL previamente extraídas

### Paso 3: Configurar ajustes de extracción

#### Profundidad de páginas

- **Predeterminado**: 10 páginas por URL
- **Rango**: 1-1000 páginas
- **Propósito**: Cuántas páginas rastrear en profundidad por cada sitio web

**Directrices:**
- **Sitios pequeños**: 5-10 páginas
- **Sitios medianos**: 10-50 páginas
- **Sitios grandes**: 50-100 páginas
- **Sitios muy grandes**: 100+ páginas (usar con precaución)

:::warning Páginas vs. Tiempo

Mayor profundidad de páginas = mayor tiempo de extracción. Comienza de forma conservadora y escala gradualmente.

:::

#### Concurrencia

- **Predeterminado**: 1 proceso concurrente
- **Rango**: 1-10 procesos concurrentes
- **Propósito**: Cuántas URL procesar simultáneamente

**Recomendaciones:**
- **Sin proxies**: 1-3 concurrentes
- **Con proxies**: 3-10 concurrentes
- **Comienza bajo** y aumenta gradualmente

#### Número máximo de páginas

- **Predeterminado**: 100 páginas
- **Rango**: 0-1000 páginas
- **Propósito**: Máximo absoluto de páginas a procesar

**Caso de uso**: Prevenir extracciones descontroladas en sitios muy grandes.

#### Tiempo de espera del proceso

- **Predeterminado**: 10 minutos
- **Rango**: 1-20 minutos
- **Propósito**: Tiempo máximo por URL antes de agotar el tiempo de espera

**Ajusta si:**
- Los sitios cargan lentamente → Aumenta el tiempo de espera
- Deseas fallos más rápidos → Disminuye el tiempo de espera

### Paso 4: Opciones de visualización

#### Mostrar en el navegador

- **No** (predeterminado): La extracción se ejecuta de forma invisible (más rápido)
- **Sí**: La ventana del navegador es visible (modo de depuración)

**Recomendación**: Mantén en "No" para tareas de producción.

### Paso 5: Configuración de proxy (Opcional)

Añade proxies para extracciones a gran escala:

1. Activa **Use Proxy**
2. Haz clic en **Choose Proxy**
3. Selecciona uno o más proxies
4. Haz clic en **Confirm**

:::tip Cuándo usar proxies

Usa proxies cuando:
- Extraigas de más de 50 URL
- Ejecutes múltiples procesos concurrentes
- Tareas anteriores hayan sido bloqueadas
- Extraigas de los mismos dominios repetidamente

:::

### Paso 6: Crear tarea

Haz clic en **Submit** para crear tu tarea de extracción. Puedes:
- **Save Only**: Guarda la tarea sin ejecutarla
- **Run Now**: Inicia la extracción inmediatamente

## Gestión de tareas de extracción

### Ver lista de tareas

Navega a **Email Extraction** para ver todas tus tareas.

**Columnas de la lista de tareas:**

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único de la tarea |
| **Type** | Manual Input o Search Results |
| **Status** | Pending, Processing, Complete, Error |
| **Record Time** | Cuándo se creó la tarea |
| **Actions** | View, Edit, Delete, Download Logs |

### Estado de la tarea

| Estado | Descripción | Acción |
|--------|-------------|--------|
| **Pending** | Tarea creada pero no iniciada | Edit, Delete |
| **Processing** | Extrayendo correos activamente | Monitorear progreso |
| **Complete** | Finalizada exitosamente | Ver resultados |
| **Error** | Falló con errores | Ver registros, Retry |

### Acciones de tarea

- **View Results** (icono de carpeta): Ver correos extraídos
- **Edit** (icono de lápiz): Modificar ajustes de la tarea (solo tareas pendientes/con error)
- **Delete** (icono de papelera): Eliminar tarea
- **Download Logs** (icono de descarga): Obtener registros de errores (solo tareas fallidas)

## Ver correos extraídos

### Paso 1: Acceder a los resultados

1. Ve a la lista de tareas de **Email Extraction**
2. Encuentra la tarea completada
3. Haz clic en **View Results**

### Paso 2: Tabla de resultados

La tabla de resultados muestra:

| Columna | Descripción |
|---------|-------------|
| **URL** | Sitio web de origen |
| **Emails** | Direcciones de correo extraídas (expandible) |
| **Count** | Número de correos encontrados |
| **Timestamp** | Cuándo ocurrió la extracción |

### Paso 3: Expandir detalles

Haz clic en una fila para expandirla y ver:
- Todos los correos encontrados en esa URL
- La lista de correos se puede copiar
- Ver direcciones de correo individuales

### Paso 4: Búsqueda y filtrado

- **Search**: Filtra por URL o dirección de correo
- **Pagination**: Navega conjuntos de resultados grandes
- **Auto-refresh**: Los resultados se actualizan cada 10 segundos durante el procesamiento

## Exportar correos extraídos

### Exportar como CSV

1. Selecciona los resultados que deseas exportar (o deja en blanco para todos)
2. Haz clic en **Export** → **CSV**
3. El archivo se descarga con todos los correos extraídos

**Formato CSV:**
```csv
URL,Email,Timestamp
https://example.com,contact@example.com,2024-01-15 10:30:00
https://example.com,info@example.com,2024-01-15 10:30:00
```

### Usar en campañas de correo

Los correos extraídos se integran directamente con el marketing por correo:

1. **View Results** de la tarea de extracción
2. Haz clic en el botón **Use in Campaign**
3. Los correos se transfieren automáticamente al flujo de marketing por correo

Para instrucciones detalladas, consulta [Envío masivo de correos](./batch-email-sending).

## Mejores prácticas

### 1. Estrategia de origen de URL

**Fuentes de alta calidad:**
- Directorios de la industria
- Listados de miembros
- Sitios web de asociaciones
- Páginas de recursos
- Páginas de "Contacto"

**Evita:**
- Plataformas de redes sociales (rara vez tienen correos)
- Sitios de noticias (baja conversión)
- Portales muy grandes (baja calidad)

### 2. Configuración de profundidad de páginas

**Conservadora** (Enfoque en calidad):
- Profundidad: 5-10
- Concurrencia: 1-3
- Ideal para: Listas específicas, contactos de alto valor

**Moderada** (Equilibrio):
- Profundidad: 10-50
- Concurrencia: 3-5
- Ideal para: Campañas de comunicación generales

**Agresiva** (Enfoque en cantidad):
- Profundidad: 50-100+
- Concurrencia: 5-10
- Ideal para: Investigación de mercado, cobertura amplia

:::warning Calidad vs. Cantidad

Los ajustes agresivos pueden extraer más correos pero de menor calidad. Concéntrate en fuentes relevantes para mejores resultados en las campañas.

:::

### 3. Uso de proxies

**Tareas pequeñas** (< 100 URL):
- Proxies no requeridos
- Concurrencia: 1-3

**Tareas medianas** (100-1000 URL):
- Usa 2-3 proxies
- Concurrencia: 3-5

**Tareas grandes** (1000+ URL):
- Usa 5+ proxies
- Concurrencia: 5-10
- Rota los proxies regularmente

### 4. Deduplicación

aiFetchly elimina automáticamente los correos duplicados dentro de una tarea. Para una deduplicación adicional:

- Exporta los resultados a CSV
- Usa software de hojas de cálculo o scripts
- Compara con listas de contactos existentes
- Elimina duplicados antes de las campañas

### 5. Verificación de correo

Los correos extraídos pueden no siempre ser válidos. Considera:

- **Revisión manual**: Verifica los formatos de correo
- **Herramientas de verificación de correo**: Usa servicios de terceros
- **Campañas de prueba**: Envía lotes pequeños primero
- **Seguimiento de rebotes**: Elimina correos no entregables

## Integración con resultados de búsqueda

El flujo de trabajo más potente combina búsqueda y extracción:

### Flujo de trabajo completo

1. **Ejecutar tarea de búsqueda**:
   - Busca empresas en tu industria objetivo
   - Usa la generación de palabras clave por IA para una cobertura integral

2. **Extraer correos**:
   - Crea una tarea de extracción desde los resultados de búsqueda
   - Extrae correos de las URL descubiertas

3. **Control de calidad**:
   - Revisa los correos extraídos
   - Filtra por calidad de la fuente
   - Elimina duplicados

4. **Campaña de correo**:
   - Importa al marketing por correo
   - Crea plantillas personalizadas
   - Lanza la campaña

## Técnicas avanzadas

### Técnica 1: Extracción profunda

Para una recopilación de correos integral:

1. **Configura la profundidad**: 50-100 páginas
2. **Habilita proxies**: Usa 3-5 proxies
3. **Concurrencia moderada**: 3-5
4. **Monitorea el progreso**: Revisa los resultados regularmente
5. **Detén temprano**: Si la calidad disminuye, ajusta los ajustes

### Técnica 2: Extracción basada en patrones

Dirígete a tipos específicos de páginas:

- **Páginas de contacto**: URL que contienen `/contact`
- **Páginas de acerca de**: URL que contienen `/about`
- **Páginas de equipo**: URL que contienen `/team`
- **Directorios de miembros**: Sitios web de asociaciones

### Técnica 3: Análisis de la competencia

Extrae correos de sitios web de la competencia:

1. **Identifica competidores** en tu nicho
2. **Extrae sus correos de contacto**
3. **Analiza sus asociaciones** (páginas de enlaces)
4. **Construye una lista de contacto para asociaciones**

## Solución de problemas

### Estado de la tarea: "Error"

**Posibles causas:**
- URL no válidas
- Problemas de conectividad de red
- Todos los proxies fallaron
- Bloqueo del sitio web

**Soluciones:**
1. Verifica el formato de la URL (http:// o https://)
2. Comprueba la conexión a internet
3. Verifica la salud de los proxies
4. Reduce la concurrencia
5. Aumenta los ajustes de tiempo de espera

### No se extrajeron correos

**Posibles causas:**
- Los sitios web no tienen correos visibles públicamente
- Los correos están en imágenes/JavaScript (no se extraen)
- Los sitios web usan formularios de contacto en lugar de correos
- Profundidad de páginas demasiado baja

**Soluciones:**
1. Aumenta el ajuste de profundidad de páginas
2. Verifica manualmente que los sitios web tengan correos
3. Prueba con diferentes fuentes de URL
4. Comprueba si los sitios usan formularios de contacto

### Procesamiento lento

**Posibles causas:**
- Alta profundidad de páginas
- Muchos procesos concurrentes
- Sitios web lentos
- Latencia de red

**Soluciones:**
1. Reduce la profundidad de páginas
2. Disminuye la concurrencia
3. Aumenta el tiempo de espera
4. Usa proxies más rápidos

### Correos duplicados

**Posibles causas:**
- El mismo correo aparece en múltiples páginas
- Múltiples URL del mismo dominio

**Soluciones:**
1. aiFetchly elimina duplicados automáticamente dentro de las tareas
2. Exporta y deduplica entre tareas
3. Usa software de hojas de cálculo o scripts
4. Usa herramientas de verificación de correo

### Bloqueado por sitios web

**Posibles causas:**
- Demasiadas solicitudes concurrentes
- Sin rotación de proxies
- Ajustes agresivos

**Soluciones:**
1. Reduce la concurrencia a 1-3
2. Usa múltiples proxies
3. Aumenta los retrasos entre solicitudes
4. Respeta los límites de velocidad del sitio web

## Consideraciones legales y éticas

### Cumplimiento

Al extraer correos, considera:

- **GDPR** (Europa): Regulaciones estrictas sobre la recopilación de correos
- **CAN-SPAM** (EE.UU.): Requisitos para correos comerciales
- **CASL** (Canadá): Requisitos de consentimiento para mensajes electrónicos

:::warning Aviso legal

Asegúrate siempre de tener derechos legales para extraer y contactar las direcciones de correo. Consulta con un asesor legal para obtener orientación sobre las leyes aplicables.

:::

### Mejores prácticas

- **Solo fuentes públicas**: Extrae de información disponible públicamente
- **Contexto relevante**: Extrae de empresas/contactos relevantes para tu oferta
- **Respeta Robots.txt**: Honra los estándares de exclusión de sitios web
- **Proporciona opción de exclusión**: Incluye opciones de cancelación de suscripción en los correos
- **Propuesta de valor**: Ofrece algo de valor en tus comunicaciones

## Integración con el marketing por correo

Una vez que hayas extraído los correos:

1. **Revisa los resultados**: Verifica la calidad de tus correos extraídos
2. **Exporta o importa**: Dirige al marketing por correo o exporta como CSV
3. **Selecciona plantilla**: Elige o crea una plantilla de correo
4. **Personaliza**: Usa AI Email Writer para contenido personalizado
5. **Lanza la campaña**: Envía comunicaciones específicas

Para instrucciones detalladas sobre la creación de campañas, consulta [Envío masivo de correos](./batch-email-sending).

## Próximos pasos

- [Configura la Biblioteca de conocimiento](../ai-outreach/knowledge-library)
- [Crea campañas de correo con IA](../ai-outreach/ai-email-writer)
- [Conoce el Asistente de Marketing IA](../ai-outreach/ai-marketing-assistant)

---

**¿Listo para extraer correos?** Comienza con un lote pequeño de URL para probar tus ajustes, luego escala tus operaciones de extracción.
