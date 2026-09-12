---
id: knowledge-library
title: Biblioteca de Conocimiento
sidebar_label: Biblioteca de Conocimiento
description: Construya su base de conocimiento con documentos que la IA utiliza para generar contenido contextualmente relevante.
---

# Biblioteca de Conocimiento

La Biblioteca de Conocimiento es el sistema inteligente de gestión de documentos de aiFetchly. Cargue sus documentos (PDFs, archivos de Word, HTML y más) para crear una base de conocimiento que potencia el contenido generado por IA, asegurando que su divulgación sea contextualmente precisa y personalizada.

![Knowledge Library](/img/knowledge-library.png)

:::info Se requiere suscripción

La Biblioteca de Conocimiento — incluido el modelo de embedding local gratuito — requiere una suscripción a aiFetchly. Si su cuenta no tiene la IA habilitada, la página muestra un mensaje de **Suscripción Requerida**.

:::

## ¿Qué es RAG?

**RAG** (Generación Aumentada por Recuperación) es una tecnología que:

1. **Ingiera** sus documentos y los divide en fragmentos más pequeños
2. **Crea embeddings vectoriales** que comprenden el significado semántico de su contenido
3. **Recupera información relevante** al generar contenido
4. **Mejora las respuestas de IA** con su conocimiento específico

:::info Por qué importa RAG

Los sistemas de IA tradicionales generan contenido genérico. Con RAG, la IA de aiFetchly referencia SUS documentos, creando correos electrónicos y contenido de marketing personalizados y contextualizados.

:::

## Tipos de archivos admitidos

| Formato | Extensiones | Mejor para |
|---------|-------------|------------|
| **PDF** | `.pdf` | Folletos, informes técnicos, documentación |
| **Microsoft Word** | `.doc`, `.docx` | Propuestas, contratos, información de producto |
| **Texto** | `.txt` | Archivos de texto simple, notas |
| **Markdown** | `.md` | Documentación técnica, archivos README |
| **HTML** | `.html`, `.htm` | Contenido web, artículos |

## Carga de documentos

### Paso 1: Ir a la Biblioteca de Conocimiento

1. Haga clic en **Knowledge** en el menú de navegación izquierdo
2. Verá la interfaz de la Biblioteca de Conocimiento

### Paso 2: Cargar documentos

**Método 1: Arrastrar y soltar**

1. Arrastre archivos desde su computadora
2. Suéltelos en el área de carga
3. La retroalimentación visual muestra los archivos añadiéndose

**Método 2: Explorador de archivos**

1. Haga clic en el botón **Upload** (o en el área de carga)
2. Navegue a sus archivos en el explorador
3. Seleccione uno o múltiples documentos
4. Haga clic en **Open** para cargar

### Paso 3: Procesamiento

Después de la carga, los documentos se procesan automáticamente:

1. **Guardado**: Los archivos se guardan en la base de datos
2. **Fragmentación**: Los documentos se dividen en segmentos más pequeños
3. **Embedding**: Se crean embeddings vectoriales para búsqueda semántica
4. **Actualización de estado**: El estado de procesamiento cambia de **Pendiente** → **Procesando** → **Completado**

:::tip Tiempo de procesamiento

El tiempo de procesamiento depende del tamaño del archivo:
- Archivos pequeños (< 1MB): 10-30 segundos
- Archivos medianos (1-5MB): 30-60 segundos
- Archivos grandes (5-10MB): 1-3 minutos

:::

## Importar contenido desde sitios web

Además de subir archivos, puedes importar **páginas web públicas directamente desde una URL**. aiFetchly obtiene cada página, la convierte a markdown y la indexa a través de la misma canalización RAG, de modo que las páginas importadas se pueden buscar de inmediato. Elige una página única, una lista de URLs o un rastreo acotado del mismo origen.

Consulta [Importar sitio web a la Biblioteca de conocimiento](./website-import) para la guía completa, opciones, límites y detalles de seguridad.

## Gestión de documentos

### Vista de lista de documentos

La Biblioteca de Conocimiento muestra todos sus documentos con:

| Columna | Descripción |
|---------|-------------|
| **Name** | Nombre del archivo del documento |
| **Title** | Título del documento (editable) |
| **Status** | Estado de procesamiento (Pendiente/Procesando/Completado/Error) |
| **Type** | Tipo de archivo (PDF, DOCX, etc.) |
| **Size** | Tamaño del archivo |
| **Upload Date** | Cuándo se cargó el documento |
| **Actions** | Ver, descargar, eliminar, re-embeder |

### Acciones de documentos

| Acción | Descripción |
|--------|-------------|
| **View** | Abrir documento para ver el contenido |
| **Download** | Descargar archivo original a su computadora |
| **Delete** | Eliminar documento de la base de conocimiento |
| **Re-embed** | Reprocesar documento con nuevo modelo de embedding |
| **View Logs** | Ver detalles de error para documentos fallidos |

### Búsqueda y filtrado

- **Buscar por nombre**: Filtrar documentos por nombre de archivo
- **Filtrar por estado**: Mostrar solo documentos completados, en procesamiento o fallidos
- **Filtrar por tipo**: Mostrar solo tipos de archivo específicos

### Operaciones masivas

- **Selección múltiple**: Marque las casillas junto a los documentos
- **Eliminación masiva**: Eliminar múltiples documentos a la vez
- **Limpiar selección**: Deseleccionar todos los documentos

## Descripción de los estados de procesamiento

| Estado | Color | Significado | Acción |
|--------|-------|-------------|--------|
| **Pendiente** | Gris | En cola para procesamiento | Esperar el procesamiento automático |
| **Procesando** | Azul | Actualmente siendo procesado | Esperar a que se complete |
| **Completado** | Verde | Listo para usar en generación de IA | El documento está activo |
| **Error** | Rojo | El procesamiento falló | Ver logs, intentar re-embeder |

## Re-embeder documentos

Si cambia los modelos de embedding o necesita reprocesar un documento:

1. Busque el documento en la lista
2. Haga clic en el botón **Re-embed**
3. El estado del documento cambia a **Procesando**
4. Se crean nuevos embeddings con el modelo actual
5. El estado se actualiza a **Completado** cuando termina

**Casos de uso para re-embeder:**
- Cambió el modelo de embedding en la configuración
- El embedding anterior falló parcialmente
- Desea usar parámetros de fragmentación actualizados

Consulte [Configuración del modelo de embedding](#configuración-del-modelo-de-embedding) más abajo para saber cómo elegir o cambiar el modelo.

## Configuración del modelo de embedding

Los embeddings convierten su texto en vectores que la IA busca de forma semántica. Usted elige qué modelo de embedding utiliza aiFetchly desde **Configuración**.

### Apertura de la configuración de embedding

1. Abra la **Biblioteca de Conocimiento**.
2. Haga clic en **Configuración** en el encabezado.

El diálogo muestra un menú desplegable de **Modelo de Embedding** que lista todos los modelos disponibles, su **Modelo Actual**, y un botón **Actualizar Modelo**.

### Modelos locales y remotos

El menú desplegable combina dos tipos de modelos:

| Tipo | Ejemplo | Notas |
|------|---------|-------|
| **Local (gratis)** | `Xenova/all-MiniLM-L6-v2 (free)` | Se ejecuta completamente en su dispositivo (384 dimensional). Gratuito, privado y funciona sin conexión una vez cacheado. |
| **Remoto** | Modelos proporcionados por el servidor | Generados en el servidor de IA de aiFetchly. Gratuitos o de pago según su plan. |

Los modelos gratuitos — locales o remotos — muestran una etiqueta verde **Gratis** en el menú desplegable. El modelo local siempre aparece, incluso si la lista de modelos remotos no puede cargarse, por lo que siempre hay una opción funcional.

:::tip Modelo local = privado + gratuito

El modelo local se ejecuta en su propia CPU a través de Transformers.js. Cuando está seleccionado, el texto de sus documentos **nunca se envía al endpoint de embedding remoto** — los embeddings se generan completamente en su máquina. Elija esta opción para privacidad, costo cero y uso sin conexión.

:::

:::note El primer uso descarga el modelo

La primera vez que utiliza el modelo local, aiFetchly descarga los pesos del modelo (desde Hugging Face) y los cachea en el disco. Por ello, la primera indexación es más lenta; las ejecuciones posteriores reutilizan el modelo cacheado y son rápidas.

:::

Elija un modelo y haga clic en **Actualizar Modelo**. El nuevo modelo se aplica a la indexación y re-embedding **futuros**. Los documentos existentes conservan el modelo con el que fueron embebidos originalmente hasta que los vuelva a embeber.

### Respaldo automático durante la indexación

Si utiliza un modelo remoto y el embedding falla (por ejemplo, por un error de red o del servidor) tras varios reintentos, aiFetchly automáticamente:

1. Descarta cualquier vector parcial de ese documento para no mezclar los espacios de embedding.
2. Re-embebe todo el documento con el **modelo local gratuito**.
3. Registra el modelo local en el documento.

Verá: *"El embedding remoto falló. AiFetchly usó el modelo de embedding local gratuito en su lugar."*

Si el modelo local también falla, el documento se marca como **Error** con: *"La generación de embeddings falló tras el reintento remoto y el respaldo local. Consulte el registro de errores del documento para obtener más detalles."*

:::warning Los errores de cuota no se respaldan

Si el fallo remoto es un límite de facturación o cuota, aiFetchly **no** respalda silenciosamente — muestra *"Se alcanzó el límite de cuota o facturación del embedding remoto"* para que pueda recargar su plan. Cambie al modelo local (o vuelva a embeber tras resolver el problema de cuota) para continuar.

:::

### Búsqueda en una biblioteca con modelos mixtos

Si algunos documentos fueron embebidos con un modelo remoto y otros con el modelo local, cada documento se busca utilizando el modelo con el que fue embebido — los dos espacios de embedding no son intercambiables. Si el endpoint remoto no está disponible durante una búsqueda, los documentos indexados remotamente se omiten en esa búsqueda y solo los documentos indexados localmente devuelven resultados.

## Solución de problemas

### Estado del documento: "Error"

**Posibles causas:**
- Archivo corrupto
- Formato de archivo no admitido
- Archivo demasiado grande
- Problemas de codificación

**Soluciones:**
1. **Ver Logs** para ver el error específico
2. **Intente re-embeder** el documento
3. **Vuelva a cargar** el archivo original
4. **Convierta el archivo** a un formato diferente (por ejemplo, DOC → PDF)

### Procesamiento lento

**Posibles causas:**
- Tamaño de archivo grande
- Alta carga del sistema
- Latencia de red (para embedding remoto)
- Primer uso del modelo de embedding local (descarga los pesos del modelo una vez)

**Soluciones:**
1. Espere a que se complete el procesamiento
2. Divida documentos grandes en archivos más pequeños
3. Cierre otras aplicaciones para liberar recursos
4. Si acaba de cambiar al modelo local, la primera ejecución descarga y cachea el modelo — las ejecuciones posteriores son rápidas

### El documento no se usa en el contenido de IA

**Posibles causas:**
- El documento no está completamente procesado
- El contenido del documento no es relevante para la consulta
- El contexto RAG no está habilitado

**Soluciones:**
1. Verifique que el estado del documento sea **Completado**
2. Asegúrese de que el contexto RAG esté habilitado en AI Chat/Email Writer
3. Intente buscar contenido más específico
4. Cargue documentos relevantes adicionales

## Mejores prácticas

### 1. Selección de documentos

**Cargue documentos que:**
- Describan sus productos o servicios en detalle
- Expliquen su propuesta de valor
- Contengan casos de estudio o historias de éxito
- Incluyan terminología específica de la industria
- Proporcionen ventajas competitivas

**Evite:**
- Información genérica o desactualizada
- Contenido irrelevante
- Archivos muy grandes (> 10MB)
- Documentos con formato deficiente

### 2. Organización de documentos

**Convenciones de nomenclatura:**
- Use nombres descriptivos: `Product_Brochure_2024.pdf`
- Incluya números de versión: `Pricing_Guide_v2.docx`
- Agregue fechas: `Case_Study_January_2024.pdf`

**Categorización:**
- Agrupe documentos relacionados
- Use patrones de nomenclatura consistentes
- Etiquete documentos para fácil filtrado

### 3. Calidad del contenido

**Para mejores resultados:**
- Use documentos bien formateados
- Incluya encabezados estructurados
- Proporcione detalles específicos y ejemplos
- Mantenga la información actualizada
- Use lenguaje profesional

### 4. Mantenimiento regular

**Mantenga saludable su base de conocimiento:**
- **Revise regularmente**: Elimine documentos desactualizados
- **Actualice contenido**: Vuelva a cargar cuando cambie la información
- **Monitoree el estado**: Verifique si hay embeddings fallidos
- **Optimice el tamaño**: Divida documentos grandes cuando sea posible

## Integración con funciones de IA

La Biblioteca de Conocimiento se integra con:

### AI Email Writer

Al crear correos generados por IA:

1. **Habilite RAG Context** en el editor de correos
2. La IA busca información relevante en su Biblioteca de Conocimiento
3. El contenido recuperado se usa para personalizar los correos
4. Los correos contienen información precisa y contextualizada

**Ejemplo:**
- Carga un catálogo de productos en PDF
- La IA genera correos referenciando productos específicos
- Cada correo menciona productos relevantes para el destinatario

### Asistente de Marketing IA

Al chatear con el asistente de IA:

1. **Alterne RAG Context** (icono 📖)
2. Haga preguntas sobre su negocio, productos o servicios
3. La IA busca en la Biblioteca de Conocimiento respuestas
4. Las respuestas se basan en SU documentación

**Preguntas de ejemplo:**
- "¿Cuáles son las características clave de nuestro producto?"
- "¿Cómo se compara nuestro precio con los competidores?"
- "¿Cuál es nuestra política de reembolso?"
- "Genere un correo de marketing para el Producto X"

## Casos de uso de ejemplo

### Caso de uso 1: Marketing de productos

**Documentos para cargar:**
- Folletos de productos
- Especificaciones de características
- Guías de precios
- Tablas comparativas
- Casos de estudio

**Resultado:** La IA genera correos de producto detallados y precisos.

### Caso de uso 2: Empresas de servicios

**Documentos para cargar:**
- Descripciones de servicios
- Documentación de procesos
- Testimonios de clientes
- Muestras de portafolio
- Paquetes de precios

**Resultado:** La IA crea divulgación enfocada en servicios con detalles específicos.

### Caso de uso 3: Divulgación de agencias

**Documentos para cargar:**
- Capacidades de la agencia
- Piezas de portafolio
- Casos de estudio
- Biografías del equipo
- Paquetes de servicios

**Resultado:** La IA personaliza las propuestas de agencia a cada prospecto.

### Caso de uso 4: Empresas SaaS

**Documentos para cargar:**
- Documentación de características
- Guías de API
- Niveles de precios
- Materiales de incorporación
- Transcripciones de webinars

**Resultado:** La IA genera divulgación técnica pero accesible.

## Detalles técnicos

### Cómo funciona RAG

1. **Ingesta de documentos**:
   - Los archivos se cargan y guardan en la base de datos
   - Se registran los metadatos (nombre, tipo, tamaño, fecha)

2. **Extracción de texto**:
   - Se extrae texto de diferentes formatos de archivo
   - Se preserva el formato cuando es posible

3. **Fragmentación**:
   - Los documentos se dividen en segmentos más pequeños (fragmentos)
   - Tamaño típico de fragmento: 500-1000 caracteres
   - La superposición entre fragmentos mantiene el contexto

4. **Creación de embeddings**:
   - Cada fragmento se convierte en un embedding vectorial
   - Los embeddings capturan el significado semántico
   - Almacenados en base de datos vectorial para recuperación rápida

5. **Búsqueda semántica**:
   - Al generar contenido, la IA busca fragmentos relevantes
   - La coincidencia de similitud encuentra el contenido más relevante
   - Los fragmentos recuperados se incluyen como contexto

6. **Generación de contenido**:
   - La IA usa el contexto recuperado + prompt
   - Genera contenido personalizado y preciso
   - Referencia su conocimiento específico

### Almacenamiento y rendimiento

- **Almacenamiento**: Documentos almacenados en base de datos SQLite local
- **Base de datos vectorial**: Optimizada para búsqueda rápida de similitud
- **Rendimiento**: Recuperación en milisegundos de contenido relevante
- **Escalabilidad**: Maneja miles de documentos eficientemente

## Seguridad y privacidad

### Almacenamiento de datos

- **Almacenamiento local**: Todos los documentos almacenados localmente en su máquina
- **Sin carga a la nube**: Los archivos originales permanecen en su computadora
- **Cifrado**: La base de datos puede cifrarse para seguridad adicional

### Consideraciones de privacidad

- **Su conocimiento**: Solo usted tiene acceso a sus documentos
- **Procesamiento de IA**: Con el modelo de embedding local, el texto nunca sale de su dispositivo; con un modelo remoto, los embeddings se generan en el servidor de aiFetchly
- **Sin datos de entrenamiento**: Sus documentos no se usan para entrenar modelos de IA públicos

:::tip Información confidencial

La Biblioteca de Conocimiento es perfecta para:
- Documentación interna de producto
- Información confidencial de precios
- Procesos de negocio propietarios
- Información específica de clientes

:::

## Próximos pasos

Ahora que ha construido su Biblioteca de Conocimiento:

- [Cree campañas de correo generadas por IA](./ai-email-writer)
- [Configure el envío masivo de correos](../lead-generation/batch-email-sending)

---

**¿Listo para construir su base de conocimiento?** Comience cargando su documentación de producto, guías de precios y materiales de marketing para potenciar la divulgación de IA personalizada.
