---
id: task-scheduling
title: Task Scheduling
sidebar_label: Task Scheduler
description: Automatiza tus flujos de trabajo con el potente sistema de programación de tareas de aiFetchly.
---

# Programación de tareas

El Programador de tareas de aiFetchly te permite automatizar tus flujos de trabajo de marketing ejecutando tareas automáticamente a horas específicas o en respuesta a otras tareas. Configura búsquedas recurrentes, campañas de correo automatizadas y flujos de trabajo complejos de múltiples pasos.

## Comprensión de la programación

El Programador de tareas admite tres tipos de activadores de tareas:

| Tipo de activador | Descripción | Ideal para |
|-------------------|-------------|------------|
| **Cron** | Programación basada en tiempo mediante expresiones cron | Tareas recurrentes, trabajos diarios/semanales/mensuales |
| **Dependencia** | Activado por la finalización de otra tarea | Flujos de trabajo de múltiples pasos, cadenas de tareas |
| **Manual** | Ejecutar solo cuando se activa manualmente | Tareas bajo demanda, pruebas |

:::info Automatiza todo

Desde la generación de leads hasta las campañas de correo, la automatización de la programación ahorra tiempo y asegura una ejecución consistente de tus flujos de trabajo de marketing.

:::

## Crear una tarea programada

### Paso 1: Ir al Programador

1. Haz clic en **Schedule** en el menú de navegación izquierdo
2. Haz clic en el botón **New Schedule**

### Paso 2: Información básica

Introduce la siguiente información requerida:

#### Nombre de la programación

- **Propósito**: Identificar la programación en tu lista
- **Ejemplo**: "Búsqueda diaria de Google", "Campaña de correo semanal"
- **Obligatorio**: Sí

#### Tipo de tarea

Selecciona el tipo de tarea a programar:

- **Search**: Tareas de extracción de motores de búsqueda
- **Email Extract**: Tareas de extracción de correos
- **Outreach Campaign**: Campañas de marketing por correo
- **Directory Assistant**: Tareas de extracción de directorios
- **Google Maps**: Tareas de extracción de Google Maps
- **Yandex Maps**: Tareas de extracción de Yandex Maps
- **AI Message**: Tareas de mensajes con IA e integración de herramientas

#### ID de tarea

- **Propósito**: Vincular a la instancia de tarea específica
- **Selección**: Elige entre las tareas existentes del tipo seleccionado
- **Obligatorio**: Sí
- **Nota**: Para tareas de AI Message, la configuración de la tarea se crea en línea al configurar la programación (consulta [Configuración de tareas AI Message](#configuración-de-tareas-ai-message) a continuación)

#### Descripción

- **Propósito**: Proporcionar contexto sobre el propósito de la programación
- **Ejemplo**: "Búsqueda diaria de nuevas agencias de marketing en ciudades objetivo"
- **Opcional**: Sí

### Configuración de tareas AI Message

Cuando seleccionas **AI Message** como tipo de tarea, aparece un formulario de configuración adicional para definir la tarea de IA. Esta sección no aparece para otros tipos de tareas.

#### Nombre de la tarea

- **Propósito**: Identificar la tarea de mensaje de IA
- **Obligatorio**: Sí
- **Ejemplo**: "Análisis diario de leads", "Auto-responder consultas"

#### Mensaje de IA

- **Propósito**: El prompt/mensaje a enviar al modelo de IA
- **Obligatorio**: Sí
- **Ejemplo**: "Analiza los resultados de búsqueda de hoy e identifica los 10 leads más prometedores según el tamaño de la empresa y la industria"
- **Soporta**: Texto multilínea con instrucciones detalladas

#### Herramientas permitidas

Selecciona qué herramientas puede usar el agente de IA durante la ejecución:

| Nivel de riesgo | Color | Descripción |
|----------------|-------|-------------|
| **Bajo** | Verde | Operaciones seguras de solo lectura |
| **Medio** | Amarillo | Operaciones con impacto moderado |
| **Alto** | Rojo | Operaciones que modifican datos o realizan acciones significativas |
| **Bloqueado** | — | Herramientas no permitidas para tareas programadas |

- **Propósito**: Controlar qué acciones puede realizar la IA de forma autónoma
- **Selección**: Selección múltiple de herramientas programables disponibles
- **Predeterminado**: Sin herramientas seleccionadas

#### Auto-aprobar herramientas

- **Propósito**: Permitir que la IA ejecute llamadas de herramientas sin aprobación manual
- **Predeterminado**: Desactivado (deshabilitado)
- **Advertencia**: Habilitar esto significa que la IA puede ejecutar herramientas automáticamente. Revisa la lista de herramientas permitidas antes de habilitar.

:::caution Seguridad de auto-aprobación

Cuando la auto-aprobación está habilitada, la IA ejecutará las herramientas aprobadas sin esperar confirmación humana. Solo habilita esto para configuraciones de tareas bien probadas con una lista de herramientas cuidadosamente seleccionada. Siempre configura los límites de seguridad apropiados.

:::

#### Límites de seguridad

Configura límites para mantener la tarea de IA dentro de los límites seguros:

| Configuración | Predeterminado | Mínimo | Descripción |
|---------|---------|-----|-------------|
| **Máx. llamadas de herramientas** | 10 | 1 | Número máximo de llamadas de herramientas por ejecución |
| **Máx. tiempo de ejecución** | 300,000 ms (5 min) | 1,000 ms | Tiempo máximo de ejecución |
| **Máx. llamadas de continuación** | 10 | 1 | Número máximo de ciclos de continuación |

Estos límites evitan que las tareas descontroladas consuman recursos excesivos o se ejecuten indefinidamente.

#### Programación Cron (Basada en tiempo)

**Habilita Cron** y configura la programación:

**Opciones predefinidas:**
- Cada minuto
- Cada hora
- Diariamente (medianoche)
- Semanalmente (domingo a medianoche)
- Mensualmente (día 1 del mes, medianoche)
- Cada 15 minutos
- Cada 30 minutos
- Cada 2 horas
- Cada 6 horas
- Cada 12 horas
- Días laborables 9 AM
- Fines de semana 10 AM

**Constructor de cron personalizado:**

| Campo | Opciones | Descripción |
|-------|----------|-------------|
| **Minutos** | `*/5`, `*/15`, `*/30`, o minutos específicos | Cada 5/15/30 min o específico |
| **Horas** | `*/2`, `*/6`, `*/12`, o horas específicas | Cada 2/6/12 horas o específico |
| **Días** | `*/2` o días específicos | Cada 2 días o días específicos |
| **Meses** | `*/3`, `*/6`, o meses específicos | Cada 3/6 meses o específico |
| **Días de la semana** | `1-5` (laborables), `0,6` (fines de semana), o específico | Laborables, fines de semana, o específico |

**Formato de expresión cron:**
```
┌───────────── minuto (0 - 59)
│ ┌───────────── hora (0 - 23)
│ │ ┌───────────── día del mes (1 - 31)
│ │ │ ┌───────────── mes (1 - 12)
│ │ │ │ ┌───────────── día de la semana (0 - 6) (domingo a sábado)
│ │ │ │ │
* * * * *
```

**Ejemplos:**
```
0 9 * * 1-5      # Días laborables a las 9:00 AM
*/30 * * * *     # Cada 30 minutos
0 0 * * 1        # Cada lunes a medianoche
0 9,15 * * *     # Diariamente a las 9:00 AM y 3:00 PM
0 0 1 * *        # Día 1 de cada mes a medianoche
```

**Próxima hora de ejecución:**
- El sistema calcula y muestra automáticamente la próxima hora de ejecución
- Útil para verificar tu expresión cron

#### Programación por dependencia (Basada en tareas)

**Habilita Dependency** para activar esta tarea cuando otra tarea se complete.

**Configuración:**

1. **Parent Schedule**: Selecciona la programación que activará esta tarea
2. **Condición de dependencia**:
   - **On Success**: Ejecutar solo si la tarea padre tiene éxito
   - **On Completion**: Ejecutar después de que la tarea padre se complete (éxito o fallo)
   - **On Failure**: Ejecutar solo si la tarea padre falla

3. **Retraso (minutos)**: Tiempo de espera después de que la tarea padre se complete antes de ejecutar esta tarea
   - `0` minutos: Ejecutar inmediatamente
   - `5` minutos: Esperar 5 minutos antes de comenzar
   - `60` minutos: Esperar 1 hora antes de comenzar

**Casos de uso:**
- **Correo después de extracción**: Extraer correos, luego enviar campaña al completarse
- **Análisis después de extracción**: Extraer datos, luego ejecutar análisis de IA
- **Campañas de múltiples etapas**: Contacto inicial → Seguimiento 1 → Seguimiento 2

:::tip Cadenas de dependencia

Puedes crear cadenas de dependencia de múltiples niveles:
- Tarea A (Cron) → Tarea B (Dependencia) → Tarea C (Dependencia)

Esto crea flujos de trabajo automatizados potentes.

:::

#### Ejecución manual

**Habilita Manual** para ejecutar tareas solo cuando se activen manualmente:

- Sin programación automática
- Ejecutar bajo demanda mediante el botón "Run Now"
- Útil para pruebas o tareas infrecuentes

### Paso 4: Estado activo

Configura la programación como:
- **Active**: La programación se ejecutará según la configuración del activador
- **Inactive**: La programación está deshabilitada y no se ejecutará

### Paso 5: Guardar programación

Haz clic en **Save** para crear la programación. Puedes:
- **Edit** la programación más tarde
- **Enable/Disable** según sea necesario
- **Run Now** para probar inmediatamente

## Gestión de tareas programadas

### Ver lista de programaciones

Navega a **Schedule** para ver todas tus tareas programadas.

**Resumen de programaciones:**
- **Tarjeta de estado**: Muestra total, activas, inactivas y pausadas
- **Filtros**: Buscar por nombre, estado, tipo de tarea, tipo de activador

### Tabla de programaciones

La lista de programaciones muestra:

| Columna | Descripción |
|---------|-------------|
| **Name** | Nombre de la programación con indicador de tipo de tarea |
| **Status** | Active (verde), Inactive (gris), Paused (amarillo) |
| **Trigger Type** | Cron, Dependency o Manual |
| **Schedule** | Expresión cron o descripción de dependencia |
| **Next Run** | Próxima hora de ejecución con cuenta regresiva |
| **Last Run** | Ejecución más reciente con tiempo transcurrido |
| **Executions** | Conteo de éxitos / Conteo de fallos |
| **Actions** | Edit, Delete, Pause/Resume, Run Now |

### Acciones de programación

| Acción | Descripción | Cuándo está disponible |
|--------|-------------|------------------------|
| **Edit** | Modificar la configuración de la programación | Siempre |
| **Delete** | Eliminar la programación | Siempre |
| **Enable** | Activar una programación inactiva | Programaciones inactivas |
| **Disable** | Desactivar una programación | Programaciones activas |
| **Pause** | Detener temporalmente la ejecución | Programaciones activas |
| **Resume** | Reiniciar una programación pausada | Programaciones pausadas |
| **Run Now** | Ejecutar inmediatamente | Siempre |

## Monitoreo de ejecución

### Ver historial de ejecución

1. Haz clic en **View Details** en una programación
2. Ve la tabla del historial de ejecución

**Información de ejecución:**

| Columna | Descripción |
|---------|-------------|
| **Start Time** | Cuándo comenzó la ejecución |
| **End Time** | Cuándo se completó la ejecución (o "Running...") |
| **Duration** | Cuánto tiempo tomó la ejecución (o contador en vivo) |
| **Status** | Success (verde), Failed (rojo), Running (azul) |
| **Result** | Resumen de los resultados de la ejecución |
| **Error** | Mensaje de error (si la ejecución falló) |
| **Actions** | Ver detalles, cancelar ejecución en curso |

### Estadísticas de ejecución

La vista de detalles muestra:

- **Tasa de éxito**: Porcentaje de ejecuciones exitosas
- **Duración promedio**: Tiempo típico de ejecución
- **Total de ejecuciones**: Conteo general y desglose
- **Último error**: Mensaje del fallo más reciente
- **Próxima ejecución**: Cuenta regresiva hasta la próxima ejecución

### Monitoreo en tiempo real

Para tareas en ejecución:
- **Duración en vivo**: El contador muestra el tiempo transcurrido
- **Botón cancelar**: Detiene la ejecución si es necesario
- **Actualización automática**: El estado se actualiza cada pocos segundos

## Patrones comunes de programación

### Patrón 1: Generación diaria de leads

**Programación**: Cada día laborable a las 9:00 AM
```
Cron: 0 9 * * 1-5
Task: Market Insight Explorer
```

**Caso de uso**: Leads frescos cada mañana para tu equipo de ventas.

### Patrón 2: Monitoreo por hora

**Programación**: Cada hora durante el horario laboral
```
Cron: 0 9-17 * * 1-5
Task: Search / Yellow Pages
```

**Caso de uso**: Monitorear nuevos listados de negocios durante el horario de trabajo.

### Patrón 3: Campaña semanal

**Programación**: Cada lunes a las 10:00 AM
```
Cron: 0 10 * * 1
Task: Outreach Campaign Sending
```

**Caso de uso**: Boletín semanal o campaña de comunicación.

### Patrón 4: Flujo de trabajo de múltiples pasos

**Tarea A** (Cron): Diariamente a las 9:00 AM - Buscar leads
**Tarea B** (Dependencia): Después de que A tenga éxito - Extraer correos
**Tarea C** (Dependencia): Después de que B tenga éxito (retraso de 30 min) - Enviar correos

**Caso de uso**: Pipeline automatizado de generación de leads y comunicación.

### Patrón 5: Tareas de mantenimiento

**Programación**: Cada domingo a las 3:00 AM
```
Cron: 0 3 * * 0
Task: Limpieza de datos o respaldo
```

**Caso de uso**: Mantenimiento rutinario durante períodos de bajo tráfico.

### Patrón 6: Análisis de leads con IA

**Programación**: Cada día laborable a las 10:00 AM
```
Cron: 0 10 * * 1-5
Task: AI Message
```

**Configuración de IA**:
- **Mensaje**: "Revisa los resultados de búsqueda de ayer, analiza la calidad de los leads y genera un informe resumido de los contactos más prometedores"
- **Herramientas permitidas**: Seleccionar herramientas relevantes de análisis de datos
- **Auto-aprobar**: Habilitado (con lista de herramientas revisada cuidadosamente)
- **Máx. tiempo de ejecución**: 300,000 ms (5 minutos)

**Caso de uso**: Análisis diario automatizado de leads recopilados usando IA.

## Mejores prácticas

### 1. Diseño de programación

**Evita solapamientos:**
- Asegúrate de que las tareas se completen antes de la próxima ejecución programada
- Considera el tiempo promedio de ejecución al establecer la frecuencia
- Usa dependencias para secuenciar tareas que se solapan

**Horas de baja actividad:**
- Programa tareas intensivas en recursos fuera del horario laboral
- Evita competir con la actividad del usuario
- Considera las zonas horarias para operaciones globales

**Tiempo de margen:**
- Añade un margen entre tareas dependientes
- Ten en cuenta tiempos de ejecución variables
- Previene retrasos en cascada

### 2. Manejo de errores

**Monitorea fallos:**
- Revisa el historial de ejecución regularmente
- Investiga fallos repetidos
- Ajusta programaciones o tareas según sea necesario

**Configura alertas:**
- Revisa las programaciones semanalmente
- Comprueba si hay tareas atascadas o pausadas
- Verifica que las dependencias se estén activando correctamente

**Degradación elegante:**
- Usa dependencias "On Completion" para continuar la cadena incluso si una tarea falla
- Crea programaciones alternativas para tareas críticas
- Documenta procedimientos de escalación

### 3. Gestión de recursos

**Tareas concurrentes:**
- Evita programar demasiadas tareas simultáneamente
- Considera los recursos del sistema (CPU, memoria, red)
- Escalonar tareas similares para prevenir conflictos

**Rotación de proxies:**
- Asegúrate de tener suficientes proxies para tareas programadas concurrentes
- Distribuye la carga entre el pool de proxies
- Monitorea la salud de los proxies para tareas programadas

### 4. Pruebas

**Prueba las programaciones:**
- Usa "Run Now" para probar antes de programar
- Verifica primero con una ejecución única
- Revisa los registros para detectar problemas

**Valida expresiones cron:**
- Usa la vista previa de "Next Run Time" para verificar
- Prueba primero con intervalos más cortos
- Confirma que la configuración de zona horaria sea correcta

**Prueba dependencias:**
- Verifica que las tareas padre se completen exitosamente
- Prueba los ajustes de retraso
- Asegúrate de que las cadenas funcionen como se espera

### 5. Documentación

**Nombra las programaciones claramente:**
- Nombres descriptivos con propósito y frecuencia
- Incluye el tipo de tarea y el objetivo
- Ejemplo: "Búsqueda diaria de Google - Agencias de Marketing"

**Usa descripciones:**
- Documenta el propósito y los resultados esperados
- Nota las dependencias y relaciones
- Incluye cualquier consideración especial

**Etiqueta el propósito de las tareas:**
- Etiqueta o categoriza programaciones relacionadas
- Agrupa por proyecto o campaña
- Facilita la identificación

## Solución de problemas

### La programación no se ejecuta

**Posibles causas:**
- La programación está inactiva o pausada
- Expresión cron mal configurada
- El servicio del programador no está en ejecución
- Problemas de hora/zona horaria del sistema

**Soluciones:**
1. Verifica que el estado de la programación sea "Active"
2. Comprueba la sintaxis de la expresión cron
3. Confirma que el servicio del programador esté en ejecución
4. Verifica la hora del sistema y la configuración de zona horaria
5. Revisa los registros de ejecución en busca de errores

### La tarea se ejecuta con demasiada frecuencia

**Posibles causas:**
- Expresión cron incorrecta
- Múltiples programaciones para la misma tarea
- Sintaxis cron mal entendida

**Soluciones:**
1. Revisa la expresión cron cuidadosamente
2. Comprueba si hay programaciones duplicadas
3. Usa la vista previa de "Next Run Time" para verificar
4. Prueba primero con intervalos más largos

### Las dependencias no se activan

**Posibles causas:**
- La tarea padre no se completa
- Condición de dependencia incorrecta
- Retraso demasiado largo o demasiado corto

**Soluciones:**
1. Comprueba el historial de ejecución de la tarea padre
2. Verifica que la condición de dependencia coincida con el comportamiento deseado
3. Ajusta los ajustes de retraso
4. Comprueba si hay dependencias circulares

### Las tareas tardan demasiado

**Posibles causas:**
- Configuración de la tarea demasiado agresiva
- Recursos del sistema insuficientes
- Cuellos de botella de red

**Soluciones:**
1. Reduce el alcance de la tarea (páginas, concurrencia, etc.)
2. Programa durante horas de baja actividad
3. Aumenta el intervalo entre ejecuciones
4. Comprueba el rendimiento del sistema

### Problemas con tareas AI Message

**Tarea alcanzando límites de seguridad:**
- **Posibles causas**: Se alcanzó el máximo de llamadas de herramientas, tiempo máximo de ejecución o máximo de llamadas de continuación
- **Soluciones**:
  1. Revisa la claridad y especificidad del mensaje de IA
  2. Aumenta los límites de seguridad si la tarea legítimamente necesita más recursos
  3. Reduce el alcance del mensaje de la tarea
  4. Verifica los registros de ejecución para determinar qué límite se alcanzó

**Tarea de IA produciendo resultados inesperados:**
- **Posibles causas**: Prompt vago, herramientas incorrectas seleccionadas o contexto insuficiente
- **Soluciones**:
  1. Refina el mensaje de IA con instrucciones más específicas
  2. Revisa y ajusta la lista de herramientas permitidas
  3. Prueba con auto-aprobación deshabilitada para revisar manualmente las llamadas de herramientas
  4. Agrega más contexto al prompt del sistema

**Llamadas de herramientas bloqueadas:**
- **Posibles causas**: Herramienta no en la lista permitida o marcada como bloqueada para tareas programadas
- **Soluciones**:
  1. Agrega la herramienta requerida a la lista de herramientas permitidas
  2. Verifica que la herramienta esté disponible para ejecución programada
  3. Verifica el nivel de riesgo de la herramienta y confirma que no esté bloqueada por política

### El historial de ejecución no se muestra

**Posibles causas:**
- La tarea nunca se ha ejecutado
- Historial borrado
- Problemas de base de datos

**Soluciones:**
1. Ejecuta la tarea manualmente para probar
2. Comprueba si la tarea se ha ejecutado alguna vez
3. Verifica la conectividad de la base de datos
4. Reinicia el servicio del programador si es necesario

## Flujos de trabajo avanzados

### Flujo de trabajo 1: Pipeline automatizado de generación de leads

**Programación 1**: Búsqueda diaria
```
Cron: 0 9 * * 1-5 (Días laborables 9 AM)
Task: Búsqueda en Google de "agencias de marketing [ciudad]"
```

**Programación 2**: Extracción de correos (Dependencia)
```
Activador: Después de que la Programación 1 tenga éxito
Retraso: 0 minutos
Task: Extraer correos de los resultados de la Programación 1
```

**Programación 3**: Campaña de correo (Dependencia)
```
Activador: Después de que la Programación 2 se complete
Retraso: 60 minutos (tiempo para la extracción)
Task: Enviar campaña de correo de bienvenida
```

**Resultado**: Generación de leads y comunicación diaria automatizada.

### Flujo de trabajo 2: Mantenimiento semanal

**Programación 1**: Limpieza de base de datos
```
Cron: 0 3 * * 0 (Domingo 3 AM)
Task: Eliminar tareas completadas antiguas
```

**Programación 2**: Verificación de salud de proxies (Dependencia)
```
Activador: Después de que la Programación 1 se complete
Task: Probar todos los proxies y eliminar los fallidos
```

**Programación 3**: Generación de informes (Dependencia)
```
Activador: Después de que la Programación 2 se complete
Task: Generar informe semanal de uso
```

**Resultado**: Mantenimiento e informes semanales automatizados.

### Flujo de trabajo 3: Monitoreo multirregional

**Programación 1**: Monitoreo Este de EE.UU.
```
Cron: 0 */2 * * * (Cada 2 horas)
Task: Buscar palabras clave del Este de EE.UU.
```

**Programación 2**: Monitoreo Oeste de EE.UU.
```
Cron: 0 */2 * * * (Cada 2 horas, desfasado)
Task: Buscar palabras clave del Oeste de EE.UU.
```

**Programación 3**: Monitoreo Europa
```
Cron: 0 */2 * * * (Cada 2 horas, desfasado)
Task: Buscar palabras clave europeas
```

**Resultado**: Monitoreo global continuo con programaciones escalonadas.

### Flujo de trabajo 4: Pipeline de leads mejorado con IA

**Programación 1**: Búsqueda diaria
```
Cron: 0 9 * * 1-5 (Días laborables 9 AM)
Task: Google Maps - Búsqueda de "restaurantes [ciudad]"
```

**Programación 2**: Extracción de contactos (Dependencia)
```
Activador: Después de que la Programación 1 tenga éxito
Retraso: 0 minutos
Task: Extracción de contactos de los resultados de la Programación 1
```

**Programación 3**: Análisis con IA (Dependencia)
```
Activador: Después de que la Programación 2 tenga éxito
Retraso: 30 minutos
Task: AI Message - "Analiza los contactos extraídos y redacta mensajes de comunicación personalizados para los 20 leads más prometedores"
Límites de seguridad: Máx. llamadas de herramientas: 15, Máx. tiempo de ejecución: 600000ms (10 min)
```

**Programación 4**: Campaña de correo (Dependencia)
```
Activador: Después de que la Programación 3 tenga éxito
Retraso: 60 minutos
Task: Outreach Campaign - Enviar mensajes generados por IA
```

**Resultado**: Pipeline completamente automatizado desde búsqueda hasta análisis con IA hasta comunicación.

## Integración con otras funciones

El Programador de tareas se integra con:

- **[Motores de búsqueda](../lead-generation/search-engines)**: Programar búsquedas recurrentes
- **[Extracción de contactos](../lead-generation/contact-extraction)**: Auto-extraer después de búsquedas
- **[Páginas Amarillas](../lead-generation/yellow-pages)**: Extracción regular de directorios
- **[Extracción de Google Maps](../lead-generation/local-business-finder)**: Programar recopilación de datos de Google Maps
- **[Envío masivo de correos](../lead-generation/batch-email-sending)**: Campañas automatizadas
- **AI Message**: Programar tareas de IA con integración de herramientas para análisis y acciones automatizadas

## Próximos pasos

Ahora que comprendes la programación:

- [Configura los ajustes del sistema](../settings/system-settings)
- [Revisa el manual completo del usuario](../getting-started/introduction)

---

**¿Listo para automatizar?** Comienza programando una tarea de búsqueda diaria simple, luego construye gradualmente flujos de trabajo automatizados más complejos a medida que te familiarices con el sistema.
