---
id: goal-and-loop
title: Comandos de objetivo y bucle
sidebar_label: Objetivos y bucles
description: Define un objetivo duradero con /goal, ejecuta iteraciones acotadas hacia él con /loop, y repite un prompt en un intervalo fijo con /loop 5m en AI Chat V2.
---

# Comandos de objetivo y bucle

Los comandos de barra **`/goal`** y **`/loop`** te permiten dar al asistente de AI Chat V2 un objetivo duradero y luego trabajar hacia ese objetivo en pasos acotados y verificables, o repetir un prompt en un intervalo fijo — en lugar de ir prompt a prompt.

`/goal` captura qué significa "hecho", incluyendo criterios de aceptación explícitos y verificables. `/loop` tiene **dos modos**:

- **Bucle de objetivo** — `/loop 5` ejecuta un número limitado de iteraciones autónomas hacia el objetivo activo, recogiendo evidencia nueva y verificando cada criterio antes de que el objetivo pueda marcarse como completo.
- **Bucle programado** — `/loop 5m check the deployment` repite un prompt en un intervalo fijo (cada 5 minutos, cada 2 horas, …) para que puedas monitorizar trabajo que cambia con el tiempo. Cada ejecución y cada respuesta se quedan en la misma conversación.

:::info Solo en AI Chat V2

`/goal` y `/loop` son comandos de barra integrados disponibles en el compositor de **[AI Chat V2](./ai-chat-v2)**. Requieren una suscripción activa a aiFetchly con IA habilitada y reutilizan el [Plan Mode](./ai-chat-v2), la aprobación de herramientas y los límites de seguridad de workspace ya existentes en AI Chat V2.

:::

## Los dos modos de `/loop`

El modo que obtienes depende de lo que escribas después de `/loop`:

| Modo | Comando | Qué hace | Requiere |
|---|---|---|---|
| **Bucle de objetivo** | `/loop <maxIterations>` | Ejecuta hasta ese número de iteraciones autónomas hacia el objetivo activo. | Un objetivo activo ya definido con `/goal`. |
| **Bucle programado** | `/loop <duration> <prompt>` | Repite el prompt en un intervalo fijo, en la misma conversación. | Un prompt no vacío. |
| **Control del bucle programado** | `/loop status` · `/loop pause` · `/loop resume` · `/loop stop` | Gestiona el bucle programado de la conversación activa. | Un bucle programado activo en esta conversación. |

Un número entero simple (`/loop 5`) siempre significa un bucle de objetivo. Una duración (`/loop 5m …`) siempre significa un bucle programado. Los dos modos nunca interfieren entre sí.

## `/goal` — define un objetivo duradero

### Sintaxis

```text
/goal <objective>
```

Ejemplo:

```text
/goal Build a Facebook campaign scraper and verify it works
```

### Qué ocurre

1. El objetivo se convierte en el **objetivo activo** de la conversación actual.
2. AI Chat entra en **Plan Mode**. El asistente hace preguntas aclaratorias cuando el objetivo es ambiguo.
3. El asistente propone un plan que incluye uno o más **criterios de aceptación** — condiciones concretas y comprobables que definen qué significa "hecho".
4. Apruebas (o rechazas o pides cambios a) el plan mediante el flujo normal de aprobación de Plan Mode.
5. El objetivo permanece activo en la conversación hasta que se **completa**, se **bloquea** o se **cancela**.

Ejecutar `/goal` de nuevo sustituye el objetivo activo actual.

### Criterios de aceptación y verificación

Cada criterio de aceptación se verifica automáticamente — el objetivo no está completo solo porque el asistente lo diga. Cada criterio tiene un método de verificación:

| Método | Cómo se comprueba el criterio |
|---|---|
| **command** | Un comando termina con éxito, opcionalmente coincidiendo con un código de salida o patrón de salida esperado. |
| **file** | Un archivo o estado de proyecto esperado está presente, por ejemplo un archivo existe o ha cambiado. |
| **manual** | El bucle se pausa y te pide confirmación. |
| **llm** | Un verificador independiente evalúa la evidencia recogida para criterios que no pueden comprobarse deterministamente. |

Un criterio puede marcarse como **requerido** u opcional. El objetivo solo puede marcarse como completo cuando **todos los criterios requeridos** pasan con evidencia nueva.

:::tip Escribe objetivos verificables

`/goal` funciona mejor cuando "hecho" es algo que la aplicación puede verificar. Un objetivo como "construir el scraper y verificar que funciona" — con un criterio como "el comando de test termina con código 0" — es mucho más fiable que uno subjetivo como "hacer bueno el scraper".

:::

## Bucle de objetivo — `/loop <maxIterations>`

### Sintaxis

```text
/loop <maxIterations>
```

`<maxIterations>` es un entero de **1 a 10**. Indícalo explícitamente — si lo omites o pasas un valor fuera de ese rango, `/loop` te pedirá un contador válido. Un bucle de objetivo también **requiere un objetivo activo**; si no has definido uno, te indicará que ejecutes `/goal` primero.

Ejemplo:

```text
/loop 5
```

### Qué hace cada iteración

Cada iteración ejecuta el mismo ciclo observar → actuar → verificar:

```text
Observar el estado actual
  → el asistente propone una siguiente acción acotada
  → las herramientas aprobadas la ejecutan
  → el sistema recoge evidencia nueva
  → primero se ejecutan las comprobaciones deterministas
  → un verificador independiente evalúa los criterios restantes
  → el bucle continúa, se completa, se bloquea o pide entrada
```

El progreso se muestra en la conversación mientras se ejecuta el bucle — contador de iteraciones, resúmenes de evidencia recogida y resultados de verificación por criterio.

### Cuándo se detiene el bucle de objetivo

Un bucle de objetivo nunca se ejecuta para siempre. Se detiene en cuanto se cumple cualquiera de estas condiciones:

- Pulsas **Stop**.
- Se alcanza el número máximo de iteraciones.
- Se alcanza el límite de tiempo por ejecución.
- El objetivo está **completo** — todos los criterios requeridos pasaron con evidencia nueva.
- Una herramienta necesita tu aprobación, o Plan Mode necesita aprobación.
- El asistente necesita hacerte una pregunta.
- El mismo fallo se repite suficientes veces, por lo que el objetivo pasa a **bloqueado**.
- El verificador devuelve `blocked` o `needs_user_input`.
- Ocurrió un error no recuperable.

### Cómo se decide la finalización

El asistente que realiza el trabajo **no puede marcar su propio objetivo como completo** por declaración. La finalización requiere **evidencia nueva y específica del criterio** — por ejemplo, un test que pasó *después* del cambio de código más reciente, no un resultado antiguo de antes.

Las comprobaciones deterministas (comandos, estado de archivos) se ejecutan primero. El verificador LLM independiente se usa solo para criterios que no pueden comprobarse deterministamente, y devuelve veredictos estructurados (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) ligados a evidencia específica — nunca un "hecho" en texto libre.

## Bucle programado — `/loop <duration> <prompt>`

Un bucle programado repite un prompt en un intervalo fijo y mantiene **cada ejecución y cada respuesta en la misma conversación**. No necesita un objetivo y nunca crea un chat nuevo por ejecución.

```text
/loop 5m check if the deployment finished and tell me what happened
```

Úsalo para monitorizar trabajo que cambia con el tiempo — despliegues, importaciones, respuestas de campañas, jobs de scraping, aprobaciones externas — sin reenviar el mismo prompt a mano.

### Cuándo usar un bucle programado

- **Monitorización de despliegues** — `/loop 5m check if deployment 218 finished and summarize the result`
- **Monitorización de campañas** — `/loop 1h --times 8 -- summarize new campaign replies and flag urgent leads`
- **Importaciones largas** — `/loop every 15m --for 3h -- check the contact import and report new failures`

Puedes seguir chateando en la misma conversación entre ejecuciones. La siguiente ejecución programada recoge tus mensajes interactivos como parte de su contexto.

### Sintaxis

**Forma corta** — intervalo seguido del prompt:

```text
/loop <duration> <prompt>
```

```text
/loop 5m check if the deployment finished and tell me what happened
/loop 2h summarize any new campaign replies
```

**Forma canónica** — para límites explícitos, con un separador `--` antes del prompt:

```text
/loop every <duration> [--times <count>] [--for <duration>] -- <prompt>
```

```text
/loop every 5m --times 12 -- check if the deployment finished
/loop every 1h --for 8h -- summarize new campaign replies
/loop every 30m --times 6 --for 3h -- check the import status
```

Cuando se indican `--times` y `--for` a la vez, el bucle se detiene al alcanzar el límite que llegue primero. El separador `--` es obligatorio en la forma canónica para que el texto del prompt que contenga palabras como "times" o "for" no se interprete como opciones.

### Reglas de duración

Los intervalos usan dos unidades:

- `m` — minutos
- `h` — horas

Reglas:

- Intervalo mínimo: **1m**. Intervalo máximo: **24h**.
- El valor debe ser un número entero positivo sin espacio antes de la unidad — `5m`, `2h`, `30m`.
- La unidad es insensible a mayúsculas (`5M` y `5m` son iguales).
- Se rechazan decimales, signos, notación científica, espacios y unidades desconocidas.

Ejemplos rechazados:

```text
/loop 0m check deployment
/loop -5m check deployment
/loop 1.5h check deployment
/loop 5 minutes check deployment
/loop 5m
/loop 5d check deployment
```

### Límites por defecto y máximos

Un bucle programado **siempre está acotado** — por número de ejecuciones y por duración.

| Límite | Por defecto | Máximo |
|---|---|---|
| Ejecuciones (`--times`) | 24 | 100 |
| Duración (`--for`) | 24 horas | 7 días |

La forma corta `/loop 5m <prompt>` se ejecuta **como máximo 24 veces y durante máximo 24 horas** — lo que ocurra primero. Con un intervalo de cinco minutos, el contador de ejecuciones normalmente termina el bucle antes. Usa `--times` y `--for` en la forma canónica para subir cualquiera de los dos límites hasta el máximo.

### Qué ocurre al iniciar

Cuando se acepta el comando, AI Chat V2 añade el comando de barra visible y una confirmación breve en la misma conversación, por ejemplo:

```text
Scheduled every 5 minutes. Maximum 24 runs or 24 hours. Next run: 14:35.
```

La primera ejecución ocurre **un intervalo después** de iniciar el bucle — no se ejecuta inmediatamente. La confirmación indica la hora de la próxima ejecución, para que sepas exactamente cuándo será la primera comprobación.

### Las ejecuciones programadas se quedan en una conversación

Cada ejecución se convierte en un turno normal y duradero de la conversación:

1. El prompt programado se añade a la conversación de origen.
2. La IA recibe el historial y contexto existentes de esa conversación.
3. La respuesta del asistente se añade a la **misma** conversación.
4. Si esa conversación está abierta, se refresca y la respuesta se transmite en vivo.
5. Si hay abierta otra conversación, aiFetchly actualiza la vista previa y el indicador de no leído de la conversación de origen sin sacarte de tu trabajo actual.

Los turnos de usuario programados se muestran con un pequeño icono de reloj y una etiqueta de ejecución (por ejemplo *Scheduled — Run 2*) para distinguirlos de los mensajes que tú escribiste.

:::tip Una conversación, una línea temporal

Como cada ejecución comparte una misma transcripción, las ejecuciones posteriores pueden apoyarse en observaciones anteriores. También puedes hacer una pregunta de seguimiento entre ejecuciones y la siguiente ejecución programada la incluirá.

:::

### Estado, Pausar, Reanudar y Detener

Mientras una conversación tiene un bucle programado activo, la cabecera del chat muestra una **etiqueta de estado** con el estado del bucle y controles compactos:

- **Pause** — evita que arranquen nuevas ejecuciones. El historial se conserva.
- **Resume** — calcula la próxima hora de ejecución y continúa. No repite las ejecuciones perdidas.
- **Stop loop** — impide cualquier ejecución futura. La ejecución en curso puede terminar.
- **Stop current run** — aborta únicamente la ejecución que corre ahora mismo; las futuras continúan según su horario.

Las mismas acciones están disponibles como comandos, limitados a la conversación activa:

```text
/loop status
/loop pause
/loop resume
/loop stop
```

Estos solo afectan al bucle de la conversación activa. No pueden detener ni modificar un bucle de otra conversación. Todas las acciones de control son idempotentes — ejecutarlas dos veces hace lo mismo que una.

### Ciclo de vida del bucle programado

Un bucle programado pasa por estos estados:

| Estado | Significado |
|---|---|
| **active** | Esperando la siguiente ejecución. |
| **running** | Se está ejecutando una ejecución ahora mismo. |
| **paused** | En pausa — no arrancarán nuevas ejecuciones hasta que reanudes. |
| **expired** | Se alcanzó el límite de ejecuciones o de duración. |
| **failed** | Fallos repetidos o un error no recuperable detuvieron el bucle. |
| **stopped** | Lo detuviste tú (o se borró la conversación). |

### Recuperación tras reinicio o suspensión

Los bucles programados se apoyan en un planificador persistente, de modo que sobreviven a un reinicio de la app o a la suspensión del sistema:

- Si no se perdió ninguna ejecución, se conserva la próxima hora de ejecución.
- Si se perdieron ejecuciones mientras la app estuvo cerrada o suspendida, se realiza **como mucho una ejecución de recuperación** — nunca una ráfaga de una ejecución por intervalo perdido.
- Si la duración del bucle expiró sin conexión, simplemente se marca como expirado.
- Los cambios de reloj, horario de verano o zona horaria nunca producen ejecuciones duplicadas.

La base de datos es la fuente de la verdad. Si se pierde una notificación de refresco, al reabrir la conversación se recarga el historial completo y correcto.

### Límites y seguridad

| Límite | Valor |
|---|---|
| Intervalo (`/loop <duration>`) | 1m – 24h |
| Ejecuciones | por defecto 24, máx 100 |
| Duración | por defecto 24h, máx 7 días |
| Bucles programados activos por conversación | Uno |
| Límite de tiempo por ejecución | 10 minutos |
| Fallos consecutivos antes de fallar el bucle | 3 |

Garantías de seguridad que siempre se aplican:

- Un bucle programado **siempre está acotado** — por ejecuciones y por duración. Nunca se ejecuta para siempre.
- **Siempre se puede cancelar** (Stop).
- **Los turnos interactivos tienen prioridad.** Si estás en plena conversación cuando toca una ejecución, esta se aplaza o se fusiona — nunca interrumpe tu turno.
- Las ejecuciones **nunca se solapan**. Si una ejecución dura más que su intervalo, las ejecuciones pendientes se fusionan en una sola.
- **La política de herramientas es por tarea.** Las ejecuciones programadas son desatendidas, de modo que solo están disponibles las herramientas aprobadas explícitamente, y las herramientas de alto impacto siguen bloqueadas. Tus decisiones interactivas de "Always Allow" **no** amplían lo que un bucle programado puede hacer.
- **La habilitación de IA** y los límites de workspace y de archivos siguen aplicándose.
- El bucle **no** infiere la finalización por el wording del asistente ("done", "complete"). Solo se detiene por un límite, por el umbral de fallos, por un Stop explícito o porque la conversación ya no existe.

:::warning Limpiar o borrar una conversación detiene su bucle

Si una conversación tiene un bucle programado activo, al limpiar su historial se te pide confirmar de que el bucle también se detendrá, y al borrar la conversación se detiene el bucle primero. aiFetchly nunca deja un bucle desatendido corriendo contra una conversación borrada y nunca recrea una conversación borrada.

:::

## Estado del objetivo y bucle

Un objetivo pasa por estos estados:

| Estado | Significado |
|---|---|
| **draft** | El objetivo se está definiendo en Plan Mode. |
| **active** | Aprobado y esperando para ejecutarse o continuarse. |
| **running** | Un `/loop` está ejecutando una iteración. |
| **complete** | Todos los criterios requeridos pasaron con evidencia nueva. |
| **blocked** | Fallos repetidos o un bloqueo sin resolver — necesita tu atención. |
| **needs_user_input** | El bucle se pausó para hacerte una pregunta o pedir confirmación. |
| **failed** | Un error no recuperable terminó la ejecución. |
| **cancelled** | Lo detuviste tú. |

## Límites y seguridad

| Límite | Valor |
|---|---|
| Iteraciones del bucle de objetivo (`/loop <N>`) | 1–10 (indícalo explícitamente) |
| Límite de tiempo por ejecución | 10 minutos (por defecto) |
| Fallos idénticos antes de **bloqueado** | 3 |
| Objetivos activos por conversación | Uno (definir uno nuevo sustituye al anterior) |

Garantías de seguridad que siempre se aplican:

- Todo bucle **siempre está acotado** — nunca es infinito.
- **Siempre se puede cancelar** (pulsa Stop).
- **La habilitación de IA**, el modo de aprobación de herramientas, Plan Mode y los límites de seguridad de workspace y archivos siguen aplicándose durante un bucle.
- Las acciones destructivas, las nuevas dependencias, los cambios de autenticación y otros efectos secundarios de alto impacto siguen requiriendo el límite normal de aprobación — incluso a mitad del bucle.
- La evidencia y los logs que se muestran al verificador están acotados, limitados en tamaño y depurados de secretos, y se tratan como datos no fiables — nunca como instrucciones.

## Consejos

### HACER ✅

- **Define un objetivo antes de un bucle de objetivo** — `/loop 5` siempre necesita un `/goal` activo.
- **Haz los objetivos verificables** — prefiere criterios que la app pueda comprobar (un comando, un archivo) sobre subjetivos.
- **Empieza un bucle de objetivo con un contador pequeño** (`/loop 3`) para inspeccionar el progreso antes de comprometerte a más.
- **Mantén Plan Mode activo** para objetivos que modifiquen archivos, envíen outreach o ejecuten muchas llamadas a herramientas.
- **Usa un bucle programado para monitorizar** — cualquier cosa que cambie con el tiempo (un despliegue, una importación, una campaña) encaja bien.
- **Mantén el acceso a IA habilitado** — un bucle programado se pausa tras fallos `AI_DISABLED` repetidos.

### NO HACER ❌

- **No esperes autonomía sin límite** — un bucle de objetivo siempre necesita un contador explícito de 1 a 10, y un bucle programado siempre tiene un máximo de ejecuciones y de duración.
- **No confíes en un simple "done"** — la finalización del objetivo se basa en evidencia; si un criterio requerido no pasó, el objetivo no está completo.
- **No esperes que un bucle programado corra con la app cerrada** — solo corre mientras aiFetchly está abierta y se recupera como mucho una vez al reiniciar.
- **No esperes que el "Always Allow" interactivo aplique a ejecuciones programadas** — los permisos de herramientas programadas son por tarea y más estrictos.

## Resolución de problemas

| Síntoma | Causa probable | Qué hacer |
|---|---|---|
| *"Set a goal first with /goal"* | Sin objetivo activo en esta conversación | Ejecuta `/goal <objective>` y aprueba el plan primero. |
| *"Please provide an iteration count"* | Se llamó a `/loop` sin número | Indica un contador, por ejemplo `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Falta el contador, es cero o mayor que 10 | Usa un entero de 1 a 10. |
| *"The interval must be between 1 minute and 24 hours"* | La duración es menor que 1m, mayor que 24h o está mal formada | Usa un valor `m` u `h` entero, como `5m` o `2h`. |
| *"A prompt is required for a scheduled loop"* | `/loop 5m` no tenía texto de prompt | Añade el prompt tras el intervalo, o tras el separador `--` en la forma canónica. |
| *"No active scheduled loop for this conversation"* | `/loop pause/resume/stop` sin ningún bucle en marcha | Inicia un bucle primero con `/loop <duration> <prompt>`. |
| El bucle programado se detuvo antes | Se alcanzó el límite de ejecuciones o de duración, o 3 fallos consecutivos | Revisa la etiqueta de estado para el motivo. Sube los límites con `--times`/`--for`, o corrige el fallo e inicia un bucle nuevo. |
| El objetivo está **bloqueado** | El mismo fallo se repitió (por defecto 3 veces) | Lee el motivo del fallo en la conversación, aborda la causa raíz y vuelve a ejecutar `/loop` o ajusta el objetivo. |
| El objetivo se queda en **needs_user_input** | El bucle está esperando tu respuesta o aprobación | Responde a la pregunta o aprueba la acción pendiente. |
| Una ejecución programada no ocurrió a la hora exacta | Las ejecuciones se aplazan mientras chateas, se fusionan cuando son largas o se recuperan una vez tras la suspensión | Es el comportamiento esperado. Revisa la etiqueta de estado y la próxima hora de ejecución. |

## Pasos siguientes

- [AI Chat V2](./ai-chat-v2) — el chat donde viven `/goal` y `/loop`, incluido Plan Mode.
- [Slash Commands](./slash-commands) — la lista completa de comandos integrados y cómo crear los tuyos.
- [Subagents](./subagents) — especialistas acotados a los que el asistente puede delegar durante un bucle.
