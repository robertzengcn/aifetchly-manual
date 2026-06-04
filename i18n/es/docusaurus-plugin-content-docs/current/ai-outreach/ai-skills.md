---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: "Administre y extienda las capacidades de IA de aiFetchly con habilidades personalizables: importe, desinstale, habilite/deshabilite y use en AI Chat."
---

# AI Skills

Las AI Skills son extensiones modulares que mejoran las capacidades del chat de IA de aiFetchly. Las habilidades añaden conocimiento especializado, herramientas personalizadas y funcionalidad específica de dominio al Asistente de Marketing IA.

## ¿Qué son las AI Skills?

Las AI Skills son componentes empaquetados que extienden las capacidades de la IA:

- **Habilidades integradas**: Habilidades preinstaladas con funcionalidad central
- **Habilidades instaladas por el usuario**: Habilidades personalizadas que importa para casos de uso específicos

Cada habilidad tiene:
- Un nombre y versión únicos
- Una categoría (por ejemplo, "web-search", "data-analysis", "automation")
- Estado habilitado/deshabilitado
- Un manifiesto que define permisos y capacidades

## Acceso a AI Skills

1. Haga clic en **Settings** en el menú de navegación izquierdo
2. Vaya a **Skills**
3. Vea la lista de habilidades instaladas con su estado

## Importación de habilidades

### Paso 1: Obtener el paquete de habilidad

Las habilidades se distribuyen como archivos `.zip`. Puede obtener habilidades de:
- Mercado oficial de habilidades de aiFetchly
- Habilidades contribuidas por la comunidad
- Habilidades personalizadas desarrolladas para su organización

### Paso 2: Importar la habilidad

1. En la página de Skills, haga clic en el botón **Import** (arriba a la derecha, con icono de carga)
2. Se abre un diálogo de selección de archivos
3. Navegue a su archivo `.zip` de habilidad
4. Seleccione el archivo y confirme

### Paso 3: Verificar la instalación

Después de la importación:
- La habilidad aparece en la tabla de habilidades
- El estado muestra **Enabled** por defecto
- Verifique que la categoría y versión coincidan con lo esperado

:::tip Consejos de importación

- Solo se admiten archivos `.zip`
- La habilidad debe tener un `manifest.json` válido dentro
- Si la importación falla, verifique la integridad del archivo zip y el formato del manifiesto

:::

## Gestión de habilidades

### Ver habilidades instaladas

La tabla de habilidades muestra:

| Columna | Descripción |
|---------|-------------|
| **Name** | Identificador/nombre de la habilidad |
| **Source** | Insignia `Built-in` o `User-installed` |
| **Category** | Categoría funcional de la habilidad |
| **Version** | Número de versión actual |
| **Status** | Insignia `Enabled` o `Disabled` |
| **Actions** | Alternancia habilitar/deshabilitar y botón de desinstalación |

### Habilitar/Deshabilitar habilidades

Para cambiar el estado de una habilidad:

1. Localice la habilidad en la tabla
2. Use los **botones de alternancia** en la columna Actions:
   - **Marca de verificación** (verde): Habilitar la habilidad
   - **Marca X** (gris): Deshabilitar la habilidad

**Cuándo deshabilitar:**
- La habilidad entra en conflicto con otra
- Solución de problemas temporal
- La habilidad no es necesaria para las tareas actuales
- Prueba del comportamiento de la habilidad

**Nota:** Las habilidades integradas no se pueden desinstalar, solo deshabilitar.

### Desinstalar habilidades

Para eliminar una habilidad instalada por el usuario:

1. Localice la habilidad en la tabla
2. Haga clic en el icono **Delete** (papelera) en la columna Actions
3. Confirme la acción de desinstalación en el diálogo

:::warning Advertencia de desinstalación

Desinstalar una habilidad la elimina permanentemente. Necesitará reimportarla si desea usarla nuevamente.

:::

## Uso de habilidades en AI Chat

Las habilidades están disponibles en el **Asistente de Marketing IA** una vez habilitadas.

### Acceso a AI Chat

1. Vaya a **AI Marketing Assistant** (o **AI Chat**)
2. Inicie una nueva conversación o continúe una existente

### Cómo funcionan las habilidades en el chat

Las habilidades habilitadas se integran automáticamente con las respuestas de IA:

1. **Selección automática de herramientas**: La IA elige habilidades relevantes según su consulta
2. **Invocación manual**: Solicite funcionalidad de habilidad específica
3. **Salidas combinadas**: Múltiples habilidades pueden trabajar juntas

### Ejemplo de uso de habilidades

**Habilidad de búsqueda web:**
```
Usuario: "¿Cuáles son las últimas tendencias en marketing SaaS?"
IA: [Usa la habilidad de búsqueda web para encontrar información actual]
IA: "Según datos recientes, las tendencias de marketing SaaS incluyen..."
```

**Habilidad de análisis de datos:**
```
Usuario: "Analice estos datos de clientes e identifique patrones"
IA: [Usa la habilidad de análisis de datos para procesar los datos]
IA: "El análisis revela estos patrones clave..."
```

**Habilidad de automatización:**
```
Usuario: "Configure una campaña de correo automatizada para nuevos leads"
IA: [Usa la habilidad de automatización para configurar la campaña]
IA: "Su campaña automatizada ahora está configurada con..."
```

### Indicadores de habilidades en el chat

Cuando se usa una habilidad:
- El nombre de la habilidad puede aparecer en la respuesta
- Un pequeño icono o insignia indica la activación de la habilidad
- El uso de herramientas se muestra en el flujo de la conversación

### Solicitudes de permisos de habilidades

Algunas habilidades requieren su permiso explícito antes de su ejecución. Esta es una función de seguridad para proteger su sistema.

**Cuándo verá solicitudes de permisos:**

Las habilidades se categorizan por su nivel de permisos:

| Categoría | Comportamiento de permisos | Ejemplos |
|-----------|---------------------------|----------|
| **Pure** | Auto-aprobado, sin solicitud | Procesamiento de texto, cálculos, formato de datos |
| **Shell** | Siempre solicita antes de ejecutar | Ejecución de comandos del sistema, operaciones de archivos |
| **Network** | Puede solicitar para llamadas externas | Web information organization, llamadas API a servicios externos |
| **Data** | Puede solicitar para acceso sensible | Lectura/escritura del sistema de archivos, acceso a bases de datos |

**La solicitud de permiso:**

Cuando una habilidad necesita permiso, verá un diálogo en el chat de IA:

```
┌─────────────────────────────────────────────┐
│  Solicitud de Permiso de Habilidad          │
├─────────────────────────────────────────────┤
│  Habilidad: shell_execute                   │
│  Categoría: Shell                           │
│                                             │
│  Esta habilidad desea ejecutar:             │
│  $ ls -la /ruta/al/directorio               │
│                                             │
│  [Permitir Una Vez]  [Permitir Siempre]  [Denegar] │
└─────────────────────────────────────────────┘
```

**Opciones de permiso:**

- **Permitir Una Vez**: Otorgar permiso solo para esta ejecución única
- **Permitir Siempre**: Recordar esta decisión y auto-aprobar solicitudes futuras de esta habilidad
- **Denegar**: Bloquear esta ejecución (la habilidad fallará gracefully)

**Gestión de permisos guardados:**

Para revisar o cambiar permisos guardados:

1. Vaya a **Settings** → **AI Skills**
2. Haga clic en una habilidad para ver su estado de permisos
3. Alterne "Always Allow" para cambiar el comportamiento de auto-aprobación
4. Las habilidades deshabilitadas tienen sus permisos temporalmente suspendidos

:::tip Mejor práctica de seguridad

Comience con "Permitir Una Vez" para nuevas habilidades. Después de verificar que funcionan correctamente y de forma segura, puede cambiar a "Permitir Siempre" para mayor comodidad.

:::

## Categorías de habilidades

Las habilidades se organizan por categoría funcional:

| Categoría | Propósito | Ejemplos de habilidades |
|-----------|-----------|------------------------|
| **Web Search** | Investigación en Internet, análisis de tendencias | Motor de búsqueda, monitoreo de redes sociales |
| **Data Analysis** | Procesamiento e interpretación de datos | Análisis CSV, modelado estadístico |
| **Automation** | Tareas de automatización de flujos de trabajo | Automatización de correo, programación de tareas |
| **Integration** | Conexiones con servicios externos | CRM, conectores API |
| **Content** | Generación y optimización de contenido | Redacción de blogs, optimización SEO |
| **Pure** | Utilidades de propósito general | Procesamiento de texto, formato |

## Solución de problemas

### La habilidad no aparece en el chat

**Posibles causas:**
- La habilidad está deshabilitada
- La instalación de la habilidad está incompleta
- La habilidad requiere permisos específicos

**Soluciones:**
1. Verifique el estado de la habilidad en Settings → Skills
2. Habilite la habilidad si está deshabilitada
3. Reimporte la habilidad si está corrupta
4. Verifique que el manifiesto tenga los permisos requeridos

### La importación falló

**Posibles causas:**
- Formato de archivo zip inválido
- `manifest.json` faltante o malformado
- La habilidad ya está instalada
- Descarga corrupta

**Soluciones:**
1. Verifique la integridad del archivo zip
2. Revise el formato y contenido de manifest.json
3. Desinstale la versión existente primero, luego reimporte
4. Descargue nuevamente el paquete de habilidad

### La habilidad causa errores

**Posibles causas:**
- Error o incompatibilidad de la habilidad
- Dependencias faltantes
- Clave API no configurada

**Soluciones:**
1. Deshabilite la habilidad temporalmente
2. Consulte la documentación de la habilidad para requisitos
3. Verifique que todas las configuraciones requeridas estén completas
4. Contacte al desarrollador de la habilidad para soporte

### La habilidad integrada no se puede desinstalar

Las habilidades integradas son fundamentales para la funcionalidad de aiFetchly y no se pueden eliminar. Solo puede deshabilitarlas si entran en conflicto con otras habilidades.

## Mejores prácticas

### 1. Selección de habilidades

**Instale solo lo que necesita:**
- Cada habilidad añade complejidad
- Demasiadas habilidades pueden causar conflictos
- Comience con habilidades esenciales, agregue según sea necesario

### 2. Actualizaciones de habilidades

**Mantenga las habilidades actualizadas:**
- Revise regularmente si hay actualizaciones de habilidades
- Actualice habilidades para correcciones de errores y mejoras
- Pruebe las habilidades actualizadas antes del uso en producción

### 3. Organización de habilidades

**Nombre y categorice adecuadamente:**
- Use nombres descriptivos para las habilidades
- Organice por categoría funcional
- Documente los propósitos de habilidades personalizadas

### 4. Pruebas

**Pruebe antes de producción:**
- Habilite las habilidades en modo de prueba primero
- Verifique el comportamiento de la habilidad en el chat de IA
- Compruebe si hay conflictos con habilidades existentes

### 5. Seguridad

**Solo instale habilidades de confianza:**
- Verifique la fuente de la habilidad
- Revise los permisos de la habilidad
- Monitoree el comportamiento de la habilidad
- Elimine habilidades no utilizadas

## Desarrollo de habilidades (Para desarrolladores)

### Estructura del manifiesto

El `manifest.json` de una habilidad debe incluir:

```json
{
  "name": "mi-habilidad-personalizada",
  "version": "1.0.0",
  "category": "automation",
  "permissions": ["web-search", "data-access"],
  "description": "Descripción de lo que hace esta habilidad"
}
```

### Empaquetado

1. Incluya `manifest.json` en la raíz
2. Agregue los archivos de implementación de la habilidad
3. Incluya los activos necesarios
4. Comprima el contenido (no la carpeta)
5. Nombre el archivo `nombre-habilidad.zip`

## Integración con otras funciones

### Asistente de Marketing IA

Las habilidades mejoran las capacidades del chat de IA:
- Respuestas más precisas
- Acceso a fuentes de datos externas
- Ejecución automatizada de tareas

### MCP Tools

Las habilidades y las herramientas MCP pueden trabajar juntas:
- Las habilidades proporcionan lógica específica de dominio
- Las herramientas MCP proporcionan conectividad externa
- Combinadas para una automatización potente

### Biblioteca de Conocimiento

Las habilidades pueden aprovechar su base de conocimiento:
- Buscar conocimiento durante el chat
- Aplicar patrones aprendidos
- Generar respuestas contextuales

## Próximos pasos

- [Configurar Ajustes del Sistema](../settings/system-settings)
- [Conocer el Asistente de Marketing IA](./ai-marketing-assistant)
- [Configurar la Biblioteca de Conocimiento](./knowledge-library)

---

**¿Listo para extender las capacidades de IA?** Importe su primera habilidad y descubra nuevas posibilidades para la automatización y la inteligencia.
