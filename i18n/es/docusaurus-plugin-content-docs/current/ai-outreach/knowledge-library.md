---
id: knowledge-library
title: Knowledge Library
sidebar_label: Knowledge Library
description: Construya su base de conocimiento con documentos que la IA usa para generar contenido contextualmente relevante.
---

# Knowledge Library

La Biblioteca de Conocimiento es el sistema inteligente de gestión de documentos de aiFetchly. Cargue sus documentos (PDFs, archivos Word, HTML y más) para crear una base de conocimiento que potencia el contenido generado por IA, asegurando que su divulgación sea contextualmente precisa y personalizada.

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
4. **Actualización de estado**: El estado de procesamiento cambia de **Pending** → **Processing** → **Completed**

:::tip Tiempo de procesamiento

El tiempo de procesamiento depende del tamaño del archivo:
- Archivos pequeños (< 1MB): 10-30 segundos
- Archivos medianos (1-5MB): 30-60 segundos
- Archivos grandes (5-10MB): 1-3 minutos

:::

## Gestión de documentos

### Vista de lista de documentos

La Biblioteca de Conocimiento muestra todos sus documentos con:

| Columna | Descripción |
|---------|-------------|
| **Name** | Nombre del archivo del documento |
| **Title** | Título del documento (editable) |
| **Status** | Estado de procesamiento (Pending/Processing/Completed/Error) |
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
| **Pending** | Gris | En cola para procesamiento | Esperar el procesamiento automático |
| **Processing** | Azul | Actualmente siendo procesado | Esperar a que se complete |
| **Completed** | Verde | Listo para usar en generación de IA | El documento está activo |
| **Error** | Rojo | El procesamiento falló | Ver logs, intentar re-embeder |

## Re-embeder documentos

Si cambia los modelos de embedding o necesita reprocesar un documento:

1. Busque el documento en la lista
2. Haga clic en el botón **Re-embed**
3. El estado del documento cambia a **Processing**
4. Se crean nuevos embeddings con el modelo actual
5. El estado se actualiza a **Completed** cuando termina

**Casos de uso para re-embeder:**
- Cambió el modelo de embedding en la configuración
- El embedding anterior falló parcialmente
- Desea usar parámetros de fragmentación actualizados

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

**Soluciones:**
1. Espere a que se complete el procesamiento
2. Divida documentos grandes en archivos más pequeños
3. Cierre otras aplicaciones para liberar recursos

### El documento no se usa en el contenido de IA

**Posibles causas:**
- El documento no está completamente procesado
- El contenido del documento no es relevante para la consulta
- El contexto RAG no está habilitado

**Soluciones:**
1. Verifique que el estado del documento sea **Completed**
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
- Use nombres descriptivos: `Folleto_Producto_2024.pdf`
- Incluya números de versión: `Guia_Precios_v2.docx`
- Agregue fechas: `Caso_Estudio_Enero_2024.pdf`

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
- **Procesamiento de IA**: Embeddings creados localmente o en sus servidores
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
- [Use el Asistente de Marketing IA](./ai-marketing-assistant)
- [Configure el envío masivo de correos](../lead-generation/batch-email-sending)

---

**¿Listo para construir su base de conocimiento?** Comience cargando su documentación de producto, guías de precios y materiales de marketing para potenciar la divulgación de IA personalizada.
