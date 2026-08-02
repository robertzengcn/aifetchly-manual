---
id: goal-and-loop
title: Comandos de Objetivo y Bucle
sidebar_label: Objetivos y Bucles
description: Defina un objetivo duradero con /goal y ejecute trabajo autónomo limitado y basado en evidencia hacia él con /loop en AI Chat V2.
---

# Comandos de Objetivo y Bucle

Los comandos slash **`/goal`** y **`/loop`** le permiten dar al asistente de AI Chat V2 un objetivo duradero y luego pedirle que siga trabajando hacia ese objetivo en pasos limitados y verificables — en lugar de indicárselo turno a turno.

`/goal` captura qué significa "terminado", incluidos criterios de aceptación explícitos y verificables. `/loop` luego ejecuta un número limitado de iteraciones autónomas hacia ese objetivo, recopilando evidencia reciente y verificando cada criterio antes de que el objetivo pueda marcarse como completado.

:::info Solo en AI Chat V2

`/goal` y `/loop` son comandos slash integrados disponibles en el compositor de **[AI Chat V2](./ai-chat-v2)**. Requieren una suscripción activa de aiFetchly con IA habilitada, y reutilizan las fronteras existentes de AI Chat V2: [Modo Plan](./ai-chat-v2), aprobación de herramientas y seguridad del workspace.

:::

## Cómo se relacionan ambos comandos

| Comando | Qué hace | Requiere |
|---|---|---|
| `/goal <objective>` | Crea o reemplaza el objetivo activo de la conversación y entra en Modo Plan. | Un objetivo no vacío. |
| `/loop <maxIterations>` | Ejecuta hasta ese número de iteraciones autónomas hacia el objetivo activo. | Un objetivo activo ya establecido con `/goal`. |

Un flujo típico:

```text
/goal Build a Facebook campaign scraper and verify it works
(aprueba el plan y sus criterios de aceptación en Modo Plan)
/loop 5
```

## `/goal` — defina un objetivo duradero

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
2. AI Chat entra en **Modo Plan**. El asistente hace preguntas aclaratorias cuando el objetivo es ambiguo.
3. El asistente propone un plan que incluye uno o más **criterios de aceptación** — condiciones concretas y verificables que definen qué significa "terminado".
4. Usted aprueba (o rechaza o solicita cambios al) plan mediante el flujo normal de aprobación del Modo Plan.
5. El objetivo permanece activo en la conversación hasta que se **completa**, se **bloquea** o se **cancela**.

Ejecutar `/goal` de nuevo reemplaza el objetivo activo actual.

### Criterios de aceptación y verificación

Cada criterio de aceptación se verifica automáticamente — el objetivo no está completo solo porque el asistente lo diga. Cada criterio tiene un método de verificación:

| Método | Cómo se verifica el criterio |
|---|---|
| **command** | Un comando termina correctamente, opcionalmente coincidiendo con un código de salida o patrón de salida esperado. |
| **file** | Un archivo o estado del proyecto esperado está presente, por ejemplo un archivo existe o ha cambiado. |
| **manual** | El bucle se pausa y le pide confirmación. |
| **llm** | Un verificador independiente evalúa la evidencia recopilada para criterios que no pueden comprobarse de forma determinista. |

Un criterio puede marcarse como **requerido** u opcional. El objetivo puede marcarse como completado solo cuando **cada criterio requerido** pasa con evidencia reciente.

:::tip Escriba objetivos verificables

`/goal` funciona mejor cuando "terminado" es algo que la aplicación puede verificar. Un objetivo como "construye el scraper y verifica que funciona" — con un criterio como "el comando de prueba termina con código 0" — es mucho más fiable que uno subjetivo como "haz un scraper bueno".

:::

## `/loop` — ejecute iteraciones limitadas

### Sintaxis

```text
/loop <maxIterations>
```

`<maxIterations>` es un entero de **1 a 10**. Proporciónelo explícitamente — si lo omite o pasa un valor fuera de ese rango, `/loop` le pide un recuento válido. `/loop` también **requiere un objetivo activo**; si no ha establecido uno, le indica que ejecute `/goal` primero.

Ejemplo:

```text
/loop 5
```

### Qué hace cada iteración

Cada iteración ejecuta el mismo ciclo observar → actuar → verificar:

```text
Observar el estado actual
  → el asistente propone una siguiente acción limitada
  → las herramientas aprobadas la ejecutan
  → el sistema recopila evidencia reciente
  → primero se ejecutan las comprobaciones deterministas
  → un verificador independiente evalúa los criterios restantes
  → el bucle continúa, se completa, se bloquea o pide entrada
```

El progreso se muestra en la conversación mientras el bucle se ejecuta — recuento de iteraciones, resúmenes de evidencia recopilada y resultados de verificación por criterio.

### Cuándo se detiene el bucle

`/loop` nunca se ejecuta para siempre. Se detiene en cuanto se cumple cualquiera de estas condiciones:

- Usted pulsa **Stop**.
- Se alcanza el recuento máximo de iteraciones.
- Se alcanza el límite de tiempo por ejecución.
- El objetivo está **completo** — cada criterio requerido pasó con evidencia reciente.
- Una herramienta necesita su aprobación, o el Modo Plan necesita aprobación.
- El asistente necesita hacerle una pregunta.
- El mismo fallo se repite suficientes veces, por lo que el objetivo pasa a **bloqueado**.
- El verificador devuelve `blocked` o `needs_user_input`.
- Ocurre un error no recuperable.

### Cómo se decide la finalización

El asistente que realiza el trabajo **no puede marcar su propio objetivo como completado** por declaración. La finalización requiere **evidencia reciente y específica por criterio** — por ejemplo, una prueba que pasó *después* del cambio de código más reciente, no un resultado obsoleto de antes.

Las comprobaciones deterministas (comandos, estado de archivos) se ejecutan primero. El verificador LLM independiente se usa solo para criterios que no pueden comprobarse de forma determinista, y devuelve veredictos estructurados (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) vinculados a evidencia específica — nunca un "done" en texto libre.

## Estado del objetivo y del bucle

Un objetivo pasa por estos estados:

| Estado | Significado |
|---|---|
| **draft** | El objetivo se está definiendo en Modo Plan. |
| **active** | Aprobado y esperando para ejecutarse o continuarse. |
| **running** | Un `/loop` está ejecutando una iteración. |
| **complete** | Todos los criterios requeridos pasaron con evidencia reciente. |
| **blocked** | Fallos repetidos o un bloqueo sin resolver — requiere su atención. |
| **needs_user_input** | El bucle se pausó para hacerle una pregunta u obtener confirmación. |
| **failed** | Un error no recuperable terminó la ejecución. |
| **cancelled** | Usted lo detuvo. |

## Límites y seguridad

| Límite | Valor |
|---|---|
| Recuento de iteraciones (`/loop`) | 1–10 (proporciónelo explícitamente) |
| Límite de tiempo por ejecución | 10 minutos (predeterminado) |
| Fallos idénticos antes de **bloqueado** | 3 |
| Objetivos activos por conversación | Uno (establecer un nuevo objetivo reemplaza el anterior) |

Garantías de seguridad que siempre se aplican:

- El bucle siempre está **limitado** — nunca es infinito.
- Siempre **se puede cancelar** (pulse Stop).
- La habilitación de IA, el modo de aprobación de herramientas, el Modo Plan y las fronteras de seguridad del workspace y los archivos siguen aplicándose durante un bucle.
- Las acciones destructivas, nuevas dependencias, cambios de autenticación y otros efectos secundarios de alto impacto siguen requiriendo la frontera de aprobación normal — incluso durante el bucle.
- La evidencia y los registros mostrados al verificador se acotan, se limitan en tamaño y se redactan de secretos, y se tratan como datos no confiables — nunca como instrucciones.

## Consejos

### SÍ ✅

- **Establezca un objetivo antes de hacer un bucle** — `/loop` siempre necesita un `/goal` activo.
- **Haga los objetivos verificables** — prefiera criterios que la aplicación pueda comprobar (un comando, un archivo) sobre los subjetivos.
- **Comience con un recuento pequeño** (`/loop 3`) para inspeccionar el progreso antes de comprometerse a más.
- **Mantenga el Modo Plan activado** para objetivos que modifican archivos, envían outreach o ejecutan muchas llamadas a herramientas.

### NO ❌

- **No espere autonomía sin límites** — `/loop` siempre necesita un recuento explícito de 1 a 10.
- **No confíe en un simple "done"** — la finalización se basa en evidencia; si un criterio requerido no pasó, el objetivo no está completo.

## Resolución de problemas

| Síntoma | Causa probable | Qué hacer |
|---|---|---|
| *"Set a goal first with /goal"* | No hay objetivo activo en esta conversación | Ejecute `/goal <objective>` y apruebe el plan primero. |
| *"Please provide an iteration count"* | Se llamó a `/loop` sin número | Proporcione un recuento, por ejemplo `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Falta el recuento, es cero o mayor que 10 | Use un entero de 1 a 10. |
| El objetivo está **bloqueado** | El mismo fallo se repitió (3 veces por defecto) | Lea el motivo del fallo en la conversación, aborde la causa raíz, luego vuelva a ejecutar `/loop` o ajuste el objetivo. |
| El objetivo queda en **needs_user_input** | El bucle está esperando su respuesta o aprobación | Responda a la pregunta o apruebe la acción pendiente. |
| El bucle se detuvo antes de tiempo | Se requirió aprobación, aprobación de plan o una pregunta | Apruebe el elemento pendiente y vuelva a ejecutar `/loop` para continuar. |

## Próximos pasos

- [AI Chat V2](./ai-chat-v2) — el chat donde viven `/goal` y `/loop`, incluido el Modo Plan.
- [Comandos Slash](./slash-commands) — la lista completa de comandos integrados y cómo crear los suyos.
- [Subagentes](./subagents) — especialistas acotados a los que el asistente puede delegar durante un bucle.
