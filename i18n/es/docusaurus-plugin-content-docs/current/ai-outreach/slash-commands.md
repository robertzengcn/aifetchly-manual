---
id: slash-commands
title: Comandos Slash
sidebar_label: Comandos Slash
description: Ejecute acciones comunes al instante y convierta prompts reutilizables en comandos personalizados que puede invocar con / en AI Chat V2.
---

# Comandos Slash

Los comandos slash son atajos cortos que escribe en el compositor de **AI Chat V2**. Inicie un mensaje con `/` y aiFetchly ejecutará una acción inmediatamente (limpiar el chat, mostrar el estado, instalar un plugin) o expandirá una plantilla de prompt reutilizable.

Cada comando slash tiene una **insignia de origen** para que siempre sepa de dónde proviene:

| Insignia | Origen | Significado |
|---|---|---|
| **Built-in** | `built-in` | Viene incluido con aiFetchly. Siempre disponible. |
| **User** | `user` | Un comando que usted creó en `~/.aifetchly/commands/`. |
| **Workspace** | `workspace` | Un comando definido dentro de la carpeta `.aifetchly/` del workspace actual. Requiere que el workspace sea de confianza. |
| **Plugin** | `plugin` | Un comando aportado por un plugin instalado. |

:::info Los comandos slash viven en AI Chat V2

Los comandos slash están disponibles en el compositor de **[AI Chat V2](./ai-chat-v2)**. Si no ve el panel V2, ábralo desde el icono de chat o con `Ctrl/Cmd + K`.

:::

## Uso de los comandos slash

Puede escribir un comando completo o seleccionarlo de la lista de sugerencias.

### El flujo de teclado

1. Haga clic en el compositor y escriba `/` como **primer carácter** — se abre la lista desplegable de sugerencias.
2. Siga escribiendo para filtrar. aiFetchly coincide con el **nombre** del comando, un **alias** o una palabra en la **descripción**.
3. Use `↑` / `↓` para mover el resaltado, o pase el cursor con el ratón.
4. Presione `Enter` (o haga clic) para **seleccionar** un comando. Esto inserta `/name ` en el cuadro y cierra la lista desplegable — **no** se envía aún.
5. Escriba cualquier argumento después del comando insertado (por ejemplo, el texto a traducir).
6. Presione `Enter` para ejecutarlo. (`Shift + Enter` inserta una nueva línea como de costumbre.)
7. Presione `Esc` en cualquier momento para cerrar la lista desplegable sin seleccionar.

| Tecla | Qué hace |
|---|---|
| `/` (al inicio) | Abre la lista desplegable de sugerencias |
| Escriba más | Filtra la lista por nombre / alias / descripción |
| `↑` / `↓` | Mueve el resaltado |
| `Enter` | Selecciona el comando resaltado (rellena `/name `) |
| `Esc` | Cierra la lista desplegable |
| `Shift + Enter` | Nueva línea (comportamiento normal del compositor) |

:::tip Escribir un comando completo

La lista desplegable es solo una ayuda: puede ignorarla y escribir el nombre del comando usted mismo, por ejemplo `/clear`. Tenga en cuenta que mientras la lista esté abierta, `Enter` selecciona la coincidencia resaltada en lugar de enviar; pulse `Esc` para cerrar la lista primero y luego `Enter` para ejecutar lo que escribió.

:::

:::warning Los comandos solo se activan al inicio

Un mensaje se trata como un comando slash solo cuando **comienza con `/`** y no tiene adjuntos. Si desea enviar texto literal que comience con `/`, añada primero un espacio o una palabra (por ejemplo, " `/path/to/file`").

:::

## Comandos integrados

Estos vienen incluidos con aiFetchly y siempre están disponibles. Se ejecutan instantáneamente sin llamar a la IA (excepto `/plugin`, que realiza una acción de instalación).

| Comando | Descripción |
|---|---|
| `/help` | Lista los comandos slash disponibles y sus orígenes. |
| `/clear` | Borra la conversación actual. |
| `/status` | Muestra el estado de configuración de aiFetchly, los conteos y los diagnósticos. |
| `/skills` | Lista las habilidades/herramientas de IA disponibles actualmente en este sistema. |
| `/agents` | Lista los agentes de aiFetchly disponibles (integrados y dinámicos). |
| `/reload-config` | Reescanea `~/.aifetchly` y recarga la configuración. |
| `/goal` | Establece o reemplaza el objetivo activo de AI Chat y entra en Modo Plan. |
| `/loop` | Ejecuta iteraciones autónomas limitadas hacia el objetivo activo. |
| `/plugin` | Administra mercados de plugins e instala plugins desde el chat. |

### `/help`

Ejecuta un inventario rápido de cada comando disponible en su ámbito actual (integrado + usuario + workspace + plugin), cada uno mostrado con su insignia de origen. Úselo para descubrir comandos que usted (o un plugin) haya añadido.

### `/clear`

Vacía la conversación actual. Úselo para empezar de nuevo sin abrir el diálogo de historial de conversaciones. Esto no se puede deshacer.

### `/status`

Imprime una instantánea de su configuración de aiFetchly: cuántos comandos, agentes, hooks y habilidades están cargados, cuántos diagnósticos se generaron y cuándo se recargó por última vez la configuración. Útil para solucionar problemas con comandos personalizados que no se cargaron.

### `/skills` y `/agents`

`/skills` lista las habilidades/herramientas de IA actualmente habilitadas en este sistema. `/agents` lista los agentes de aiFetchly disponibles (integrados y dinámicos). Consulte [AI Skills](./ai-skills) y [Subagents](./subagents) para más contexto.

### `/reload-config`

Fuerza un reescaneo de `~/.aifetchly` y recarga la configuración. Úselo después de haber **editado manualmente o añadido** archivos de comando fuera de la aplicación y desee que aparezcan inmediatamente. Si el vigilante de archivos está en ejecución, los nuevos comandos suelen aparecer por sí solos — esta es la alternativa manual.

### `/plugin`

El único comando integrado que acepta argumentos. Le permite administrar mercados de plugins e instalar plugins sin salir del chat.

```
/plugin marketplace add <source> [--ref <ref>] [--overwrite]
/plugin install <plugin@marketplace|source> [--overwrite] [--ref <ref>] [--kind <kind>]
```

El `<source>` puede ser una carpeta local, un archivo `.zip`, una URL de Git/GitHub/HTTPS, el atajo `owner/repo` de GitHub, o `npm:<package>`. El `--kind` opcional es uno de `local-zip | local-folder | git | github | npm | url`.

Ejemplos:

```
/plugin marketplace add https://github.com/acme/aifetchly-plugins
/plugin install lead-tools@acme-plugins
/plugin install npm:@acme/awesome-plugin
```

Consulte [Plugin Manager](./plugin-manager) para el ciclo de vida completo del plugin.


### `/goal` y `/loop`

A diferencia de los demás integrados de arriba, estos dos son controlados por IA y funcionan juntos: `/goal` define un objetivo duradero y verificable (y entra en Modo Plan), y `/loop <maxIterations>` ejecuta un número limitado de iteraciones autónomas hacia ese objetivo. La finalización se basa en evidencia — el asistente no puede declarar su propio objetivo como completado.

```text
/goal Build a Facebook campaign scraper and verify it works
/loop 5
```

Consulte la página dedicada **[Comandos de Objetivo y Bucle](./goal-and-loop)** para los criterios de aceptación, los métodos de verificación, los límites del bucle, las condiciones de parada y el significado de los estados.
## Orígenes de comandos y precedencia

Los comandos de los cuatro orígenes se combinan en una sola lista. Cuando dos comandos comparten el mismo nombre, esta precedencia decide cuál se ejecuta:

**Built-in → Workspace → User → Plugin**

- Los comandos **Built-in** nunca pueden ser sobrescritos. `/clear`, `/help`, etc. siempre significan lo que aiFetchly dice que significan.
- Un comando **workspace** oculta un comando **user** del mismo nombre, que a su vez oculta un comando **plugin**.
- Los alias también cuentan: si le da a un comando personalizado el alias `clear`, `/clear` sigue ejecutando el integrado (los nombres y alias integrados siempre ganan).

Esto significa que puede nombrar con seguridad un comando personalizado `outreach` incluso si un plugin también define uno — su comando gana sobre el plugin, pero un integrado con ese nombre ganaría sobre el suyo.

## Creación de comandos personalizados

Los comandos personalizados son **plantillas de prompt reutilizables** almacenadas como pequeños archivos Markdown. Son perfectos para prompts que envía a menudo: una lista de verificación de investigación, una estructura fija de outreach, una solicitud de traducción, un formato de resumen.

Hay dos lugares donde puede ponerlos:

| Ubicación | Ámbito | Confianza |
|---|---|---|
| `~/.aifetchly/commands/*.md` | Disponible en **todas** las conversaciones (sus comandos globales). | De confianza automáticamente — usted los creó. |
| `<workspace>/.aifetchly/commands/*.md` | Disponible **solo** cuando ese workspace está activo. | Requiere que el workspace sea [de confianza](#workspace-commands-and-trust). |

`~` es su directorio de inicio (`/home/you` en macOS/Linux, `%USERPROFILE%` en Windows). La carpeta `.aifetchly` es la raíz de configuración global de aiFetchly.

### Formato de archivo

Cada comando es un archivo `.md` con un pequeño encabezado frontmatter y un cuerpo de prompt:

```
---
name: outreach
description: Draft a cold outreach email for the given company.
type: prompt
argumentHint: <company website>
aliases:
  - reach
---
Research the company behind the following website, then write a concise,
friendly cold-outreach email proposing how aiFetchly could help them find
more leads. Keep it under 120 words.

$ARGUMENTS
```

#### Campos de frontmatter

| Campo | Requerido | Notas |
|---|---|---|
| `name` | Sí | Letras minúsculas, dígitos, `-`, `_`. Debe comenzar con una letra. Ejemplo: `outreach`. Esto es lo que escribe después de `/`. |
| `description` | Sí | Hasta 500 caracteres. Se muestra en la lista desplegable de sugerencias. |
| `type` | Sí | Debe ser `prompt` para comandos de prompt personalizados. |
| `argumentHint` | No | Hasta 100 caracteres. Una pista mostrada junto al nombre, p. ej. `<text>`. |
| `aliases` | No | Hasta 10 nombres alternativos, cada uno siguiendo las reglas de `name`. Se listan como un arreglo de cadenas YAML. |

El **cuerpo** (todo después del segundo `---`) es el texto del prompt. Debe ser no vacío.

:::warning Use los nombres de campo exactos

El analizador de frontmatter solo entiende líneas simples `key: value` y arreglos de cadenas — intencionalmente **no** es un analizador YAML completo, por seguridad. Cíñase a los campos anteriores. No añada mapas anidados, valores multilínea entre comillas ni campos desconocidos esperando que hagan algo.

:::

### El token `$ARGUMENTS`

Lo que sea que escriba **después** del nombre del comando se convierte en los argumentos del comando. El token `$ARGUMENTS` controla dónde aterriza ese texto en su prompt:

- **El cuerpo contiene `$ARGUMENTS`** — cada ocurrencia se reemplaza con su texto.
- **El cuerpo no tiene `$ARGUMENTS` pero usted escribió algo** — su texto se añade al final del cuerpo, por lo que nunca se descarta silenciosamente.
- **Usted no escribió nada** — el cuerpo se usa exactamente como está escrito.

Ejemplo con `/outreach acme.com`:

```
Research the company behind the following website, then write ...
more leads. Keep it under 120 words.

acme.com
```

### Algunos ejemplos más

Un comando sin argumentos (una lista de verificación fija que se invoca con `/review`):

```
---
name: review
description: Load my standard lead-review checklist into the chat.
type: prompt
---
Review the most recent lead in this conversation against my checklist:
1. Is the website a real business?
2. What product/service do they sell?
3. Who is the likely decision-maker?
4. What is a relevant hook for outreach?
Return the answers as a short table.
```

Un comando con un alias (invocable como `/translate` **o** `/tr`):

```
---
name: translate
description: Translate the given text to English.
type: prompt
argumentHint: <text>
aliases:
  - tr
---
Translate the following text to English:

$ARGUMENTS
```

### Límites

- Cada archivo de comando: hasta **64 KB**.
- Hasta **200 comandos** por origen.
- `description`: hasta 500 caracteres. `argumentHint`: hasta 100. `aliases`: hasta 10.

Los archivos que infrinjan estas reglas, o tengan frontmatter inválido, se omiten y aparecen como un diagnóstico en `/status`.

## Comandos de workspace y confianza

Los comandos colocados en la carpeta `.aifetchly/commands/` de un **workspace** son una forma potente de compartir comandos con un equipo a través de un repositorio. Debido a que provienen de una carpeta que quizás acaba de clonar, aiFetchly los trata como **no confiables por defecto**.

- Cuando un workspace define configuración, aiFetchly muestra un aviso de **Workspace AiFetchly config** pidiéndole que revise y **confíe** en ella antes de que sus comandos se habiliten.
- Hasta que confíe en el workspace, sus comandos están **ocultos** en la lista desplegable y no se pueden ejecutar — verá *"Command /name is disabled because workspace config is not trusted."*
- Los comandos de workspace están limitados a su workspace. Un comando del workspace A **nunca** está disponible en un chat que usa el workspace B.

Esta es la verdadera puerta de seguridad para el origen de los comandos — siempre revise la carpeta `.aifetchly/` de un workspace antes de confiar en ella, tal como revisaría cualquier otro código en ese repositorio.

## Comandos de plugin

Los plugins pueden empaquetar sus propios comandos slash junto con habilidades y servidores MCP. Una vez que se instala un plugin, sus comandos aparecen automáticamente con una insignia **Plugin** y un id de origen `plugin:<name>`. Consulte [Plugin Manager](./plugin-manager) para instalar y administrar plugins, y [AI Skills](./ai-skills) para el modelo más amplio de capacidades propiedad de plugins.

## Consejos

### Lo que sí ✅

- **Use `/help`** para ver exactamente qué comandos están disponibles en su ámbito actual.
- **Convierta los prompts repetidos en comandos** — si ha escrito las mismas instrucciones tres veces, cree un `/command` para ello.
- **De a los comandos alias cortos** para que sean rápidos de escribir (p. ej. `tr` para `translate`).
- **Ejecute `/status`** cuando un comando personalizado que acaba de añadir no aparezca — el conteo de diagnósticos le indica si un archivo falló al cargar.
- **Confíe en la configuración del workspace de forma deliberada** — lea los comandos antes de aprobar.

### Lo que no ❌

- **No espere sobrescribir los integrados** — `/clear`, `/help`, etc. siempre ganan. Elija un nombre diferente.
- **No ponga secretos en archivos de comando** — son Markdown simple en disco y pueden compartirse a través de un repositorio.
- **No confíe en una configuración de workspace que no haya leído** — sus comandos pueden ejecutar prompts e invocar herramientas.
- **No espere que `Tab` autocomplete** — use `Enter` para seleccionar de la lista desplegable.

## Solución de problemas

### Mi comando personalizado no aparece en la lista desplegable

- Confirme que el archivo está en `~/.aifetchly/commands/<name>.md` (o el equivalente del workspace) y termina en `.md`.
- Verifique que `name` cumpla las reglas (minúsculas, comienza con una letra, solo letras/dígitos/`-`/`_`).
- Asegúrese de que `type: prompt` esté presente y de que el cuerpo no esté vacío.
- Ejecute `/status` — si el conteo de diagnósticos no es cero, un archivo falló la validación. Ejecute `/reload-config` para forzar un reescaneo.
- Recuerde la precedencia de los integrados: un comando integrado o de workspace con el mismo nombre ocultará el suyo.

### Obtengo "Unknown slash command: /name"

El comando no está disponible en el ámbito actual. Puede ser un comando de workspace cuyo workspace no está activo o no es de confianza, o un comando de plugin cuyo plugin no está instalado. `/help` lista todo lo disponible actualmente.

### Obtengo "Command /name is disabled."

El comando proviene de un workspace cuya configuración aún no ha marcado como de confianza. Abra el aviso de confianza del workspace y revise la configuración antes de habilitarlo.

### Seleccioné un comando y no se ejecutó

Eso es esperado. Seleccionar un comando de la lista desplegable inserta `/name ` en el cuadro y cierra la lista. Escriba cualquier argumento y luego presione `Enter` para ejecutarlo.

## Próximos pasos

- [AI Chat V2](./ai-chat-v2) — el chat donde viven los comandos slash.
- [AI Skills](./ai-skills) — herramientas empaquetadas que la IA puede invocar.
- [Subagents](./subagents) — especialistas con ámbito como el Lead Researcher.
- [Plugin Manager](./plugin-manager) — instale plugins que traen sus propios comandos.
