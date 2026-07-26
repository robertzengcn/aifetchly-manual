---
id: plugin-manager
title: Gestor de Plugins
sidebar_label: Gestor de Plugins
description: Instale, explore y administre paquetes de plugins que agrupan AI Skills, Subagents, slash Commands, Hooks y servidores MCP. Instale desde zip/carpeta local, git, GitHub, npm, URL o un marketplace.
---

# Gestor de Plugins

Un **plugin** es un único paquete que agrupa una o más capacidades de extensión — **AI Skills**, **Subagents**, **slash Commands**, **Hooks** y/o **servidores MCP** — bajo un manifiesto, una ruta de instalación y un registro de propiedad. El Gestor de Plugins es donde instala, explora, inspecciona, activa, desactiva y desinstala plugins.

Los plugins se sitúan sobre los sistemas independientes de [AI Skills](./ai-skills), [Subagents](./subagents), [Slash Commands](./slash-commands), [Hooks](../settings/hooks) y [MCP Tools](./mcp-tools). Instalar un plugin registra las capacidades que agrupa; desinstalarlo las elimina — todo como una unidad.

## Abrir el Gestor de Plugins

**Desde la navegación izquierda:** haga clic en **Plugins** (icono de puzzle).

**Desde System Settings:** abra **System Setting** y haga clic en **Plugins**.

La página está organizada en **cuatro pestañas**:

| Pestaña | Propósito |
|---------|-----------|
| **Installed** | Plugins ya presentes en su equipo — instalar, activar/desactivar, inspeccionar, desinstalar. |
| **Discover** | Explorar el catálogo de un marketplace e instalar plugins desde él. |
| **Marketplaces** | Añadir, actualizar y eliminar las fuentes de marketplace que alimentan Discover. |
| **Errors** | Marketplaces que no se pudieron cargar, con sus detalles de error. |

## Pestaña Installed

La pestaña **Installed** tiene una barra de herramientas con tres acciones y una tabla con todos los plugins instalados.

### Barra de herramientas

- **Reload** — volver a escanear los plugins instalados.
- **Import Plugin** — instalar desde un archivo `.zip` local.
- **Install from Source** — instalar desde una de seis fuentes (consulte [Install from Source](#install-from-source)).

### La tabla de plugins

| Columna | Descripción |
|---------|-------------|
| **Plugin** | Nombre del plugin. |
| **Version** | Versión instalada. |
| **Source** | **Built-in**, **Marketplace** o **Local**. |
| **Imported From** | El origen (ruta de carpeta, URL de git, paquete npm, etc.). |
| **SubAgent** | Número de subagents que agrupa el plugin. |
| **Skills** | Número de skills. |
| **Hooks** | Número de hooks. |
| **MCP Servers** | Número de servidores MCP. |
| **Status** | Estado de salud actual (consulte [Estados de salud del plugin](#estados-de-salud-del-plugin)). |
| **Actions** | Un interruptor de **activación/desactivación** a nivel de plugin y un botón de **papelera** (desinstalar). |

La columna **Source** muestra una de tres grandes insignias — **Built-in**, **Marketplace** o **Local**. El origen de instalación más específico (p. ej. `git`, `npm`, `local-folder`) se muestra en la pestaña Overview del plugin como **Install source**.

## Instalar un plugin

Hay dos puntos de entrada de instalación en la pestaña Installed:

- **Import Plugin** — elija un archivo `.zip` local.
- **Install from Source** — instale desde cualquiera de seis fuentes (a continuación).

Los plugins también se pueden instalar desde un marketplace mediante la pestaña **Discover** (consulte [Marketplaces](#marketplaces)).

### Install from Source

Haga clic en **Install from Source** y elija un tipo de origen. El diálogo tiene por defecto **Local Folder**. Cada origen tiene su propio formulario.

| Origen | Qué acepta | Modelo de autenticación |
|---|---|---|
| **Local Zip** | Un archivo `.zip` en disco. | Ninguno. |
| **Local Folder** | Un directorio en disco que contiene el plugin. La carpeta se copia en la caché de plugins; su carpeta de origen nunca se modifica. | Ninguno. |
| **Git** | Cualquier URL de git HTTPS o SSH (`https://…`, `git@…`, `ssh://…`). HTTP simple se rechaza. | Su agente SSH y el helper de credenciales de git del SO. No se pasan credenciales en la línea de comandos. |
| **GitHub** | Una URL de repo de GitHub, una URL de asset de release o una URL `releases/latest`. Las URLs de repo se clonan; las URLs de assets de release se descargan directamente. | Solo repos públicos y assets de release públicos. Para repos privados, use el origen Git con un helper de credenciales. |
| **npm** | Cualquier paquete en el registro público de npm, además de GitHub Packages y registros con ámbito con un token de autenticación. | URL de registro y token de autenticación opcionales. El token se escribe en un `.npmrc` con permisos 0600 en el directorio de trabajo de instalación y **nunca se almacena** tras la instalación. |
| **URL** | Pegue cualquier URL — el gestor detecta automáticamente si es un `.zip`, una URL de git o una URL de GitHub y lo enruta en consecuencia. HTTP simple se rechaza. | Hereda del origen coincidente. |

:::info Garantías de seguridad

Independientemente del origen, cada instalación:

- Aplica los mismos límites de tamaño y número de archivos (50 MB comprimido / 250 MB extraído / 5.000 archivos).
- Nunca ejecuta código del plugin durante la instalación — no `npm install`, no `pip install`, no scripts de ciclo de vida.
- `npm pack` se ejecuta con `--ignore-scripts` para que los scripts de ciclo de vida del paquete no puedan ejecutarse.
- Todos los procesos `git`/`npm`/`tar` lanzados se terminan si superan el tiempo límite de 60 segundos.
- Todas las descargas deben usar HTTPS (HTTP se rechaza) y seguir como máximo 5 redirecciones.

:::

## Marketplaces

Un **marketplace** es un catálogo de plugins que puede explorar y desde el cual instalar. El Gestor de Plugins tiene tres pestañas relacionadas con marketplaces.

### Pestaña Marketplaces

Administre sus fuentes de marketplace:

- **Add Marketplace** — registrar un nuevo marketplace. El origen puede ser un atajo `owner/repo`, una URL de git, una carpeta local o una URL directa a `marketplace.json`. Una rama/etiqueta/commit opcional le permite fijar una revisión.
- **Refresh All** — volver a obtener todos los catálogos de marketplaces.
- Por fila — **actualizar** o **eliminar** un único marketplace. Eliminar un marketplace **no** desinstala los plugins que ya haya instalado desde él.

### Pestaña Discover

Explore todo lo que ofrecen sus marketplaces:

- **Buscar** por nombre o descripción del plugin.
- Filtrar por **marketplace** y por **estado** (Todos / Instalados / No instalados).
- Cada fila muestra el plugin, su marketplace, versión y estado. Haga clic en **Details** para ver la descripción completa, autor, origen resuelto y cualquier bandera de riesgo.

#### Banderas de riesgo y confirmación

Antes de instalar desde un marketplace, aiFetchly marca comportamientos potencialmente sensibles:

- **Starts MCP servers**
- **Declares hooks**
- **Declares monitors**
- **Installs from npm**
- **Not pinned to a commit**

Si hay alguna bandera presente, debe marcar **"I understand the risks and want to install."** antes de que el botón Install se habilite.

Si ya tiene el plugin en una versión diferente, el botón dice **Reinstall** en lugar de Install.

### Pestaña Errors

Lista los marketplaces cuyo estado de salud no es **Healthy**, con su estado de salud y mensajes de error. Úsela para diagnosticar un marketplace que no carga.

## Estados de salud del plugin

| Estado | Significado |
|---|---|
| **Healthy** | Todos los componentes se cargaron correctamente. |
| **Disabled** | Ha desactivado el plugin. Ninguna de sus capacidades se expone a la IA. |
| **Needs Configuration** | El plugin incluye una skill de Python; el runtime preparará su entorno virtual en el primer uso. |
| **Partial Load** | Algunos componentes se cargaron, otros fallaron. La pestaña Diagnostics muestra cuáles. |
| **Invalid** | El manifiesto del plugin o el estado de instalación están rotos. |
| **Missing Files** | La ruta de instalación ha desaparecido (p. ej. eliminada del disco). |

## El panel de detalles

Haga clic en cualquier fila de plugin para abrir el diálogo de detalles con **nueve pestañas**.

### Overview

Versión, origen, URI de importación, ruta de instalación, salud actual, conteos de **commands** y **hooks**, autor, **install source** (tipo y ref), marketplace (si se instaló desde uno) y descripción.

### Skills

Cada skill que posee el plugin, con un indicador de salud y un interruptor individual de **activación/desactivación**.

### Subagents

Cada subagent que posee el plugin — nombre (con ID), modo, número de herramientas, salud y un interruptor individual de **activación/desactivación**. Vacío si el plugin no incluye subagents.

### Commands

Los slash commands que aporta el plugin — `/name`, descripción, alias, pista de argumento y estado activado/desactivado. **Solo lectura** (los commands no se pueden activar/desactivar individualmente aquí).

### Hooks

Los hooks que aporta el plugin — id, evento, matcher, tipo y estado. **Solo lectura**.

### MCP Servers

Cada servidor MCP que posee el plugin, con su transporte y un interruptor **Enabled** por servidor. (El descubrimiento de herramientas y las pruebas de conexión de los servidores MCP se realizan en la página dedicada de **[MCP Tools](./mcp-tools)**, no aquí.)

### Permissions

Los permisos que el plugin declara en su manifiesto, mostrados como chips de solo lectura.

### Diagnostics

Haga clic en **Export Diagnostics** para generar un paquete JSON con el estado de carga del plugin y los errores por componente, mostrado en línea. Úselo para solucionar problemas o reportar un incidente.

### Manifest

Vista de solo lectura y formateada del manifiesto del plugin.

## Activar y desactivar

- **Interruptor a nivel de plugin** (en la columna Actions de la tabla): activa o desactiva todo el plugin. Desactivar un plugin oculta **todas** sus capacidades a la IA.
- **Interruptores a nivel de componente** (en las pestañas Skills, Subagents y MCP Servers): activan o desactivan una skill, subagent o servidor MCP individual dentro del plugin.

**Commands y Hooks no tienen interruptor por componente** — siguen al interruptor a nivel de plugin.

La activación efectiva de cualquier capacidad es: **plugin activado Y (componente activado, donde exista un interruptor)**.

## Desinstalar

1. Haga clic en el icono de **papelera** en la columna Actions de un plugin.
2. Un diálogo de confirmación pregunta: _"Uninstall this plugin? This removes its skills and MCP servers."_
3. Confirme para eliminar.

La desinstalación elimina las capacidades agrupadas del plugin y sus archivos en caché. No elimina archivos fuera de la raíz de instalación del plugin y no afecta a skills, commands, agents, hooks o servidores MCP independientes que haya añadido usted mismo.

## Paquetes de plugin y el manifiesto

Un plugin es un directorio (o un zip de uno) con esta estructura:

```text
my-plugin/
├── .aifetchly-plugin/
│   └── plugin.json          # manifest (root-level plugin.json also accepted)
├── skills/
│   └── my-skill/
│       ├── manifest.json
│       └── main.js
├── agents/                  # subagent markdown files (optional)
├── commands/                # slash command markdown files (optional)
├── hooks/                   # hook definitions (optional)
├── mcp/
│   └── servers.json         # MCP server declarations
└── docs/
    └── README.md
```

El manifiesto (`plugin.json`) declara el nombre del plugin, versión, descripción, capacidades incluidas (rutas relativas a skills, agents, commands, hooks y configuraciones de servidores MCP), permisos y dependencias opcionales.

:::note Plugins con formato Claude

aiFetchly también admite plugins con formato Claude. Los subagents y commands agrupados en plugins creados con el formato Claude se adaptan automáticamente durante la instalación.

:::

## Solución de problemas

### La instalación falla con "path escapes plugin directory"

El manifiesto del plugin hace referencia a un archivo fuera de su propia raíz. Rechace el plugin — está mal formado o es hostil.

### La instalación falla con "Package exceeds max size"

El plugin supera los 50 MB comprimido o los 250 MB extraído. Recorte su contenido o elija un plugin más pequeño.

### La instalación mediante Git se cuelga

El clonado superó el tiempo límite de 60 segundos. Compruebe el tamaño del repo y la red. El gestor termina el proceso `git` al alcanzar el tiempo límite; no queda ningún clon zombi.

### npm install falla con 401 / 403

Para paquetes privados debe proporcionar un token de autenticación. Para GitHub Packages, la URL del registro debe ser `https://npm.pkg.github.com` y el token debe tener el ámbito `read:packages`.

### Un marketplace no carga

Abra la pestaña **Errors** para ver el estado de salud y el mensaje de error del marketplace. Causas habituales: una URL inalcanzable, un `marketplace.json` mal formado o una ref de git que no existe. Haga clic en **Refresh** en la fila del marketplace para reintentar, o **Remove** y vuelva a añadirlo con el origen correcto.

### El plugin muestra "Needs Configuration"

El plugin agrupa una skill de Python. El entorno de Python se prepara la primera vez que se ejecuta la skill. También puede ejecutar la skill una vez manualmente para disparar la configuración.

### El plugin muestra "Missing Files"

La ruta de instalación se eliminó del disco. Reinstale el plugin para restaurarla.

## Pasos siguientes

- [AI Skills](./ai-skills) — cómo funcionan las skills dentro de un plugin.
- [Subagents](./subagents) — especialistas acotados que un plugin puede agrupar.
- [Slash Commands](./slash-commands) — comandos de prompt/acción reutilizables.
- [Hooks](../settings/hooks) — hooks de ciclo de vida que un plugin puede declarar.
- [MCP Tools](./mcp-tools) — cómo funcionan los servidores MCP dentro de un plugin.
- [AI Chat V2](./ai-chat-v2) — dónde aparecen las capacidades del plugin como herramientas de IA.
