---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Configura hooks de ciclo de vida que observan, bloquean, reescriben o anotan las llamadas a herramientas del asistente de IA, incluidos los hooks de seguridad integrados y tus propios hooks de comando.
---

# Hooks

**Los hooks** son disparadores de ciclo de vida que ejecutan tu propia lógica en torno a lo que hace el Asistente de Marketing IA. Se disparan en momentos bien definidos —lo más importante, **antes y después de que se ejecute una herramienta**— y pueden observar, bloquear, reescribir o anotar la acción. Con los hooks puedes aplicar políticas ("nunca ejecutar este tipo de comando"), añadir contexto que la IA vea ("recuérdame el cumplimiento después del scraping") y mantener un registro de auditoría resistente a manipulaciones de cada decisión del hook.

aiFetchly incluye **hooks de seguridad integrados** que te protegen desde el inicio, y te permite añadir tus propios **hooks de comando**: pequeños scripts que reciben un evento como JSON y deciden qué debe suceder a continuación.

:::info Dónde encajan los hooks

Los hooks se sitúan entre la IA y las herramientas que llama (las [AI Skills](../ai-outreach/ai-skills) integradas, las [herramientas MCP](../ai-outreach/mcp-tools) y las herramientas heredadas). **No** reemplazan a la IA: filtran y dan forma a las llamadas a herramientas que la IA solicita. Un hook que *permite* una llamada nunca omite el sistema de permisos normal; un hook que *bloquea* una llamada la detiene antes de que se ejecute.

:::

## ¿Qué pueden hacer los hooks?

Cada hook recibe los detalles del evento y puede devolver una decisión:

- **Bloquear** una acción antes de que ocurra (por ejemplo, rechazar un comando de shell peligroso).
- **Reescribir** las entradas con las que se va a llamar a una herramienta (por ejemplo, censurar un valor).
- **Añadir contexto** que la IA lee después de que se ejecute una herramienta (por ejemplo, un recordatorio de cumplimiento).
- **Registrar actividad** para revisarla más adelante en el registro de auditoría.

## Conceptos clave

### Eventos

Un hook está vinculado a un **evento**: el momento del ciclo de vida de la IA en el que se dispara. Los eventos más importantes son los del ciclo de vida de las herramientas:

| Event | Se dispara cuando | ¿Puede bloquear? |
|------|------------|---------------|
| **PreToolUse** | Justo antes de que se ejecute una herramienta | ✅ Sí — la herramienta nunca se ejecuta |
| **PostToolUse** | Después de que una herramienta se ejecuta correctamente | ❌ No (la herramienta ya se ejecutó), pero puede añadir contexto o reescribir su salida |
| **PostToolUseFailure** | Después de que una herramienta falla | ❌ No (no puede convertir un fallo en éxito), pero puede añadir un mensaje |

Otros eventos del modelo de hooks —**SessionStart**, **UserPromptSubmit**, **PermissionRequest**, **PermissionDenied** y **Stop**— están disponibles en el menú desplegable de eventos y describen momentos de sesión, prompt, permiso y final de turno. Los nombres de los eventos se mantienen como identificadores de código (como `PreToolUse`) en todos los idiomas para que sigan siendo buscables y sin ambigüedades.

:::note Los eventos de herramientas son los puntos de aplicación activos

Los puntos de aplicación totalmente cableados hoy en día son los eventos del ciclo de vida de las herramientas (**PreToolUse**, **PostToolUse**, **PostToolUseFailure**). Aquí es donde el bloqueo, la reescritura de entradas, la reescritura de salidas y la inyección de contexto surten efecto. Los eventos de sesión, prompt, permiso y stop forman parte del modelo de hooks y se pueden seleccionar en la interfaz; si cada uno se dispara depende de dónde esa parte de la aplicación lo active.

:::

### Orígenes

Cada hook tiene un **origen** (Source), que determina quién es su propietario y qué puedes hacer con él:

| Source | Qué es | ¿Se muestra por defecto? |
|--------|------------|-------------------|
| **builtin** | Se incluye con aiFetchly (seguridad y cumplimiento) | ✅ Sí |
| **user** | Creado por ti en esta página | ✅ Sí |
| **session** | Registrado temporalmente para la sesión actual | Solo cuando **Show session hooks** está activado |

Usa el filtro **Source** para limitar la lista a uno de estos.

### Hooks de comando

El único tipo de hook que puedes crear desde la interfaz es un **hook de comando**. Un hook de comando ejecuta un comando local (un script o ejecutable) y se comunica con aiFetchly mediante JSON:

1. aiFetchly envía los detalles del evento a tu comando como un **objeto JSON en la entrada estándar**.
2. Tu comando hace su trabajo y escribe una **decisión JSON en la salida estándar**.
3. aiFetchly lee esa decisión y actúa en consecuencia (bloquear, reescribir la entrada, añadir contexto, etc.).

Los hooks integrados están escritos en código (hooks de callback) y no se pueden editar desde la interfaz; solo puedes activarlos o desactivarlos.

### Matchers

El **Matcher** de un hook limita a *qué llamadas a herramientas* se aplica. El matcher se prueba contra el **nombre de la herramienta** y admite patrones sencillos con comodines:

| Matcher | Coincide con |
|---------|---------|
| `*` | Todas las herramientas |
| `shell_execute` | Solo la herramienta cuyo nombre es exactamente `shell_execute` |
| `scrape_*` | Cualquier herramienta cuyo nombre empiece por `scrape_` (p. ej. `scrape_search`) |
| `*_search` | Cualquier herramienta cuyo nombre termine en `_search` |
| `*scrape*` | Cualquier herramienta cuyo nombre contenga `scrape` |

Los matchers están limitados a 128 caracteres.

### La condición "If"

La **condición If** opcional limita aún más un hook al coincidir con los **valores de los argumentos** de la herramienta, no solo con su nombre. Usa la misma sintaxis de comodines, probada contra los argumentos de tipo texto que se pasan a la herramienta. Por ejemplo:

- En `PreToolUse` con el matcher `shell_execute`, una condición If de `git *` hace que el hook se dispare solo para comandos de shell que empiecen por `git `.
- Una condición If de `rm -rf *` se dispara solo para comandos de borrado recursivo.

La condición If se ignora para los eventos que no tienen argumentos de herramienta. Está limitada a 256 caracteres.

### Modo de fallo

Los hooks pueden fallar: un comando puede caer, agotar el tiempo de espera o devolver JSON no válido. El **modo de fallo** (Failure mode) decide qué le sucede a la llamada a la herramienta cuando el *propio hook* falla (esto es independiente de que un hook devuelva deliberadamente "bloquear"):

| Failure mode | Cuando el hook falla… |
|--------------|----------------------|
| **warn** | El error se registra en el registro de auditoría y la llamada a la herramienta **prosigue con normalidad**. |
| **block** | El error se trata como un bloqueo: la llamada a la herramienta **no se ejecuta**. |

Usa **warn** para hooks no críticos (registros, contexto orientativo). Usa **block** solo cuando prefieras detener una herramienta a ejecutarla sin que la comprobación de tu hook tenga éxito.

:::tip Bloquear vs. avisar, en una frase

Un hook que *devuelve* `{ continue: false }` siempre bloquea la herramienta, independientemente del modo de fallo. El modo de fallo solo importa cuando el **propio hook falla** (tiempo de espera agotado, caída, JSON incorrecto).

:::

### Activación global

El interruptor **Enable hooks globally** en la parte superior de la página es el interruptor maestro de apagado. Cuando está desactivado, **no se dispara ningún hook en ninguna parte**: ni los integrados ni los creados por ti. El resto de la página sigue siendo interactiva para que puedas seguir configurando hooks mientras el sistema está en pausa. El ajuste persiste entre reinicios.

## Abrir la página de Hooks

1. Haz clic en **Settings** en el menú de navegación izquierdo.
2. Abre la página **Hooks** (junto a Skills y MCP).

## Distribución de la página

La página de Hooks tiene cuatro regiones, apiladas de arriba abajo:

```
┌─ Hooks ──────────────────────────────────────────────┐
│ [✓] Enable hooks globally            [+ Add command]  │  header
│ Filter: Event[All▾] Source[All▾] [□ Show session]     │  list filters
│ ┌─────────────────────┬─────────────────────────┐    │
│ │ Hooks (N)           │ Edit panel              │    │  master–detail
│ │ ● block-shell   ✓   │ Hook ID / Event / …     │    │
│ │ ● compliance    ⏸   │ [Save] [Delete]         │    │
│ └─────────────────────┴─────────────────────────┘    │
│ ─ Recent audit ─────────────────────────────────────  │  audit panel
│ Time   Hook        Event       Status   Duration      │
└───────────────────────────────────────────────────────┘
```

- **Cabecera**: interruptor de activación global y el botón **+ Add command hook**. Aparece un banner amarillo cuando los hooks están desactivados globalmente.
- **Filtros de lista**: filtran la lista de hooks por evento y por origen, y opcionalmente revelan los hooks de sesión.
- **Maestro–detalle**: la lista de hooks a la izquierda; haz clic en un hook para editarlo a la derecha.
- **Panel de auditoría**: actividad reciente de los hooks, con sus propios filtros y una actualización automática opcional.

## Hooks integrados

aiFetchly incluye estos hooks integrados:

| Hook ID | Event | Matcher | Predeterminado | Qué hace |
|---------|-------|---------|---------|--------------|
| `builtin-block-dangerous-shell-delete` | PreToolUse | `shell_execute` | **Habilitado** | Bloquea comandos de shell que coinciden con un patrón peligroso de borrado recursivo (p. ej. `rm -rf /` o `rm -rf *`). |
| `builtin-scraping-compliance-context` | PostToolUse | `scrape_*` | Deshabilitado | Tras cualquier llamada a una herramienta de scraping, inyecta un breve recordatorio de cumplimiento en el contexto de la IA para que recomiende un outreach lícito y con datos mínimos. |

:::warning Contexto de cumplimiento de scraping

Habilitar `builtin-scraping-compliance-context` inyecta guía de cumplimiento en el prompt de la IA después de **cada** llamada a una herramienta de scraping. Esto es intencional, pero ten en cuenta que puede influir en la redacción de las respuestas posteriores de la IA.

:::

Los hooks integrados son de **solo lectura**: sus campos no se pueden editar ni se pueden eliminar. Solo puedes activarlos o desactivarlos; esa anulación persiste entre reinicios.

## Crear un hook de comando

### Paso 1: Iniciar un hook nuevo

Haz clic en **+ Add command hook**. El panel de edición cambia a un formulario en blanco con valores predeterminados razonables:

- **Event**: `PreToolUse`
- **Matcher**: `*`
- **Failure mode**: `warn`
- **Timeout**: `5000` ms
- **Enabled**: desactivado (los hooks nuevos empiezan deshabilitados)

### Paso 2: Rellenar los campos

| Campo | Descripción |
|-------|-------------|
| **Hook ID** | Un nombre único para el hook (por ejemplo `block-home-delete`). Se usa en la lista y en el registro de auditoría. |
| **Event** | Cuándo se dispara el hook (ver [Eventos](#eventos)). |
| **Matcher** | A qué nombres de herramienta se aplica el hook; `*` significa todos (ver [Matchers](#matchers)). |
| **If condition** | Opcional: restringe aún más por valor del argumento de la herramienta (ver [La condición "If"](#la-condición-if)). |
| **Command** | El comando local a ejecutar. Recibe el evento como JSON en stdin y debe imprimir una decisión JSON en stdout (ver [El contrato del hook de comando](#el-contrato-del-hook-de-comando)). |
| **Timeout (ms)** | Tiempo máximo de ejecución antes de que el hook se termine. Predeterminado `5000`; límite `60000`. |
| **Failure mode** | Qué sucede cuando el propio hook falla (ver [Modo de fallo](#modo-de-fallo)). |
| **Status message** | Etiqueta corta opcional que se muestra como indicador de progreso mientras se ejecuta el hook. |

### Paso 3: Guardar y habilitar

1. Haz clic en **Save**. El hook se guarda con **Enabled** desactivado, así que aún no se ejecuta nada.
2. Selecciona el hook en la lista y activa el interruptor **Enabled** para activarlo.

:::tip Los hooks solo se ejecutan cuando ambos interruptores lo permiten

Un hook de comando se dispara solo cuando **los hooks están habilitados globalmente** *y* **el propio hook está habilitado**. Los hooks nuevos empiezan deshabilitados a propósito, para que puedas revisar el comando antes de que se ejecute.

:::

## Editar, habilitar y eliminar hooks

- **Habilitar / deshabilitar**: selecciona cualquier hook y conmuta el interruptor **Enabled**. Funciona para hooks integrados y de usuario; el cambio surte efecto de inmediato y persiste.
- **Editar campos**: solo los hooks de **usuario** son editables. Selecciona el hook, cambia los campos y haz clic en **Save**. Los hooks integrados y de sesión muestran sus campos como solo lectura.
- **Eliminar**: solo los hooks de **usuario** se pueden eliminar. Haz clic en **Delete**, confirma el Hook ID y la vista previa del comando en el diálogo, y el hook se elimina de forma permanente. Los hooks integrados no se pueden eliminar (el botón está oculto; el backend también lo rechaza como salvaguarda).

## El contrato del hook de comando

Cuando se dispara un hook de comando, aiFetchly ejecuta tu **Command** con `shell: false`: el primer token es el ejecutable y los tokens restantes son sus argumentos. Envía el evento como un objeto JSON en **stdin** y lee una decisión JSON de **stdout**.

### Entrada (stdin)

Para un hook `PreToolUse`, la entrada es aproximadamente así:

```json
{
  "eventName": "PreToolUse",
  "hookRunId": "run-1a2b3c",
  "tool": { "id": "...", "name": "shell_execute", "source": "legacy-tool" },
  "input": { "command": "rm -rf /tmp/old" },
  "permissionState": { "allowed": true, "needsPrompt": false },
  "timestamp": "2026-07-10T09:42:00.000Z"
}
```

Los campos exactos dependen del evento (por ejemplo, `PostToolUse` también incluye `output` y `executionTimeMs`). Tu script debería leer de forma defensiva: accede a los campos con optional chaining y tolera las claves ausentes.

### Salida (stdout)

Tu comando imprime un objeto JSON que describe su decisión. Todos los campos son opcionales:

| Campo | Efecto |
|-------|--------|
| `continue` | `false` bloquea la llamada a la herramienta (usar con `reason`). Omitir o `true` para permitir. |
| `reason` | Explicación legible por humanos que se muestra en el registro de auditoría y (para bloqueos) a la IA. Máx. 1000 caracteres. |
| `additionalContext` | Texto que se añade al contexto de la IA (se usa habitualmente en `PostToolUse`). Máx. 4000 caracteres. |
| `systemMessage` | Un mensaje de nivel de sistema. Máx. 2000 caracteres. |
| `updatedInput` | Sustituye las entradas de la herramienta (**solo PreToolUse**). Máx. 64 KB. |
| `updatedToolOutput` | Reescribe la salida de la herramienta (**solo PostToolUse**); no puede convertir un fallo en éxito. Máx. 128 KB. |
| `suppressOutput` | Oculta la salida de la herramienta de la conversación. |
| `permissionDecision` | `allow`, `ask` o `deny`. `allow` es orientativo y nunca omite el sistema de permisos. |

Una respuesta mínima de "permitir" es un objeto vacío: `{}`. La salida que no sea JSON válido se trata como un error del hook (sujeta al modo de fallo), así que emite siempre JSON bien formado.

### Reglas de ejecución

- **Sin funciones de shell.** Como se usa `shell: false`, las tuberías (`|`), las redirecciones (`>`), el encadenamiento (`&&`) y la expansión de variables (`$VAR`) **no** funcionan directamente. Para usarlas, invoca un shell explícitamente, p. ej. `sh -c "..."` o `bash -c "..."`.
- **Entorno restringido.** Tu comando recibe solo una pequeña lista de variables de entorno permitidas por defecto: `PATH`, `HOME`, `USER`, `USERNAME`, `TEMP`, `TMP`. aiFetchly nunca pasa sus propias credenciales ni tokens a tu hook.
- **Comillado.** El analizador de comandos admite comillas simples y dobles para argumentos que contienen espacios (p. ej. `-e "console.log(1)"`), pero no secuencias de escape ni expansión de variables.
- **Límites de tamaño.** stdout está limitado a 256 KB y stderr a 64 KB. Mantén las respuestas pequeñas.

## Ejemplos

### Ejemplo 1: Bloquear borrados del directorio home

Un hook `PreToolUse` que rechaza los comandos de shell que borran archivos bajo la carpeta home.

**Ajustes del hook**

| Campo | Valor |
|-------|-------|
| Event | `PreToolUse` |
| Matcher | `shell_execute` |
| Failure mode | `block` |
| Command | `node /home/me/hooks/block-home-delete.js` |

**`block-home-delete.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input = {};
  try { input = JSON.parse(raw); } catch { /* ignore malformed input */ }
  const command = String(input?.input?.command ?? "");
  if (/\brm\s+-rf\s+~(\/|$|\s)/.test(command)) {
    process.stdout.write(JSON.stringify({
      continue: false,
      reason: "Refusing to delete files inside the home directory.",
    }));
    return;
  }
  process.stdout.write(JSON.stringify({ continue: true }));
});
```

### Ejemplo 2: Añadir un recordatorio de cumplimiento después del scraping

Un hook `PostToolUse` que inyecta guía siempre que se ejecuta una herramienta de scraping.

**Ajustes del hook**

| Campo | Valor |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `scrape_*` |
| Failure mode | `warn` |
| Command | `node /home/me/hooks/compliance-reminder.js` |

**`compliance-reminder.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  process.stdout.write(JSON.stringify({
    additionalContext:
      "Only keep contact data you have a lawful basis to process, and prefer minimal, opt-in outreach.",
  }));
});
```

### Ejemplo 3: Añadir cada llamada a herramienta a un archivo de registro

Un hook `PostToolUse` que añade el evento en bruto a un archivo. Como usa una redirección, invoca un shell explícitamente.

| Campo | Valor |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `*` |
| Failure mode | `warn` |
| Command | `sh -c "cat >> /tmp/aifetchly-tool-audit.log"` |

:::tip Prueba antes de habilitar

Prueba primero tu script desde una terminal enviándole JSON de ejemplo por tubería (`echo '{...}' | node my-hook.js`). Confirma que imprime JSON válido y termina rápido, y luego apunta un hook de comando hacia él.

:::

## Leer el registro de auditoría

El **registro de auditoría reciente** en la parte inferior de la página registra cada ejecución de hook. Cada fila muestra:

| Columna | Significado |
|--------|---------|
| **Time** | Cuándo se ejecutó el hook. |
| **Hook** | El Hook ID. |
| **Event** | El evento que lo disparó. |
| **Status** | `started`, `success`, `blocked`, `failed` o `timeout`. |
| **Duration** | Cuánto tardó el hook, en milisegundos. |
| **Reason** | El motivo de un bloqueo, o el mensaje de error de un fallo. |

Usa los filtros para limitar por **evento**, **estado** o **hook**, y elige cuántas filas cargar (100 / 500 / 1000). Haz clic en el icono de refrescar para iniciar la **actualización automática** (el icono gira mientras está activa), que vuelve a consultar cada pocos segundos para que puedas observar la actividad de los hooks en directo mientras pruebas.

## Seguridad

El sistema de hooks está diseñado para que un hook de comando mal comportado o malicioso no pueda comprometer la aplicación:

- **Deshabilitado por defecto.** Los hooks de comando nuevos se guardan con Enabled desactivado; los hooks de comando integrados son los únicos que se entregan habilitados, y solo el de seguridad está activo.
- **Entorno restringido.** Los hooks reciben solo una lista de variables de entorno permitidas: nunca las credenciales, claves de API ni tokens de sesión de aiFetchly.
- **Sin inyección de shell.** Los comandos se ejecutan con `shell: false` y un analizador de argv mínimo, de modo que los operadores de shell no se interpretan a menos que invoques explícitamente un shell.
- **Ejecución limitada.** Cada hook tiene un tiempo de espera (predeterminado 5 s, máx. 60 s); si lo supera, se termina y se registra como `timeout`.
- **Salida limitada.** stdout y stderr están limitados; la salida que excede el tamaño se trunca.
- **Secretos censurados en la auditoría.** Los patrones que parecen claves de API, tokens bearer, cookies o cabeceras `Authorization` se censuran antes de escribirse en el registro de auditoría.
- **Los hooks integrados son a prueba de manipulaciones.** Sus definiciones no se pueden editar ni eliminar desde la interfaz; solo se pueden activar o desactivar.
- **Los hooks nunca omiten los permisos.** Un hook que devuelve `allow` es orientativo; el sistema de permisos estándar sigue aplicándose. Solo un hook que devuelve `block` cortocircuita una llamada a herramienta.

:::warning Tú eres responsable de los hooks de comando que creas

Un hook de comando ejecuta un programa en tu máquina con el entorno descrito arriba. Apunta los hooks solo a scripts en los que confíes, desde directorios que controles, y revisa el comando antes de habilitarlo.

:::

## Solución de problemas

### Mi hook de comando no se dispara

**Posibles causas:**
- Los hooks están deshabilitados globalmente (banner amarillo en la parte superior).
- El propio hook está deshabilitado (interruptor Enabled apagado).
- El **Matcher** no coincide con el nombre de la herramienta, o la **If condition** no coincide con el valor del argumento.
- El **Event** no es uno de los eventos activos del ciclo de vida de las herramientas (`PreToolUse` / `PostToolUse` / `PostToolUseFailure`).

**Soluciones:**
1. Activa **Enable hooks globally**.
2. Selecciona el hook y habilítalo.
3. Configura temporalmente el Matcher a `*` y borra la condición If para confirmar que el hook funciona, y luego vuelve a limitarlo.
4. Comprueba el registro de auditoría: una fila con estado `started` significa que el hook fue seleccionado; ninguna fila significa que nunca coincidió.

### El hook se ejecutó, pero la herramienta se ejecutó de todos modos

**Posibles causas:**
- El hook devolvió `{ continue: true }` (o un objeto vacío), lo cual permite la llamada.
- El hook **falló** (estado `failed` o `timeout`) y el modo de fallo es **warn**, así que la llamada prosigue de todos modos.

**Soluciones:**
1. Asegúrate de que tu script escribe `{ continue: false, reason: "..." }` cuando debe bloquear.
2. Si el hook está fallando, configura el modo de fallo en **block** si quieres que los errores detengan la herramienta, o arregla el script para que deje de fallar.

### El hook muestra el estado `failed` o `timeout`

**Posibles causas:**
- El script se cayó o imprimió salida no válida (no JSON).
- El script tardó más que el tiempo de espera configurado.
- El comando usó funciones de shell (tuberías, redirecciones) sin invocar un shell.

**Soluciones:**
1. Prueba el script en una terminal: `echo '{"eventName":"PreToolUse","input":{"command":"test"}}' | node my-hook.js`. Debe imprimir JSON válido.
2. Aumenta el tiempo de espera (hasta 60000 ms), o haz el script más rápido.
3. Envuelve las funciones de shell en `sh -c "..."` o `bash -c "..."`.

### El Hook ID no se puede cambiar

Los Hook ID son fijos una vez creado el hook (el campo está deshabilitado al editar). Para renombrar un hook, crea uno nuevo con el ID deseado y luego elimina el antiguo.

### No puedo editar ni eliminar un hook integrado

Esto es intencional. Los hooks integrados son propiedad del código; solo puedes activarlos o desactivarlos.

## Próximos pasos

- [AI Skills](../ai-outreach/ai-skills) — las capacidades que los hooks pueden filtrar
- [MCP Tools](../ai-outreach/mcp-tools) — herramientas externas cuyas llamadas observan los hooks
- [Configuración del sistema](./system-settings) — configuración general
