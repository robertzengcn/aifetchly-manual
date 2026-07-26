---
id: subagents
title: Subagentes
sidebar_label: Subagentes
description: Gestione subagentes de IA integrados, instalados por plugins, de espacio de trabajo y manuales en aiFetchly.
---

# Subagentes

Los subagentes son definiciones reutilizables de agentes de IA especialistas. Describen un rol enfocado, prompt de sistema, herramientas permitidas, preferencia de modelo y límites de ejecución que aiFetchly puede usar para trabajo de IA dirigido.

Los plugins pueden instalar subagentes junto con AI Skills y servidores MCP, y usted también puede crear subagentes manuales para sus propios flujos de trabajo recurrentes.

## Cómo usa la IA los subagentes

Usted no invoca los subagentes directamente. Al inicio de un chat, aiFetchly inyecta una lista de **Agentes AiFetchly disponibles** en el contexto de la IA — cada entrada muestra el ID de ejecución, la descripción y la fuente del agente. Cuando una tarea encaja, la IA llama a la herramienta **`run_subagent`** con ese ID. El subagente entonces se ejecuta con su propio prompt de sistema, herramientas permitidas y límites de ejecución, y devuelve su resultado a la IA principal.

## Agentes integrados

aiFetchly se distribuye con un subagente integrado:

- **Lead Researcher** (`agent-lead-researcher`) — un `specialist` que recopila contexto público del negocio para un lead (industria, resumen, productos, señales) usando las herramientas de búsqueda-scraper y la Biblioteca de Conocimiento, y devuelve un objeto JSON estructurado con las URLs de origen y una puntuación de confianza. Es de solo lectura.

## Abrir Subagentes

1. Haga clic en **Configuración del sistema** en el menú de navegación izquierdo.
2. Haga clic en **Administrar subagentes**.

La página de Subagentes muestra una tabla compacta, controles de búsqueda y filtro, un diálogo de detalles y una acción **Añadir subagente**.

## Fuentes de subagentes

| Fuente | Descripción |
|---|---|
| **Integrado** | Agentes incluidos con aiFetchly. Son de solo lectura. |
| **Plugin** | Agentes instalados por un plugin. Son de solo lectura desde la página de Subagentes, pero se pueden habilitar o deshabilitar. |
| **Espacio de trabajo** | Agentes cargados desde los archivos `.aifetchly/agents/` del espacio de trabajo. Se pueden habilitar o deshabilitar aquí; edite el archivo del espacio de trabajo para cambiar su definición. Los agentes del espacio de trabajo solo se cargan una vez que el espacio de trabajo es de confianza. |
| **Manual** | Agentes creados por usted en aiFetchly, **o** definidos como archivos Markdown bajo `~/.aifetchly/agents/`. Se pueden editar, habilitar, deshabilitar o eliminar. |

Use el filtro de fuente para mostrar todos los subagentes o solo una fuente.

## Buscar y filtrar subagentes

La tabla de Subagentes incluye:

| Columna | Descripción |
|---|---|
| **Agente** | Nombre visible e ID de ejecución. |
| **Descripción** | Resumen breve de lo que hace el agente. |
| **Fuente** | Integrado, Plugin, Espacio de trabajo o Manual. |
| **Plugin** | El plugin propietario, cuando aplica. |
| **Modo** | Rol del agente, como `specialist`, `verifier`, `coordinator` o `formatter`. |
| **Herramientas** | Número de herramientas que el agente puede usar. |
| **Modelo** | El modelo predeterminado del agente, si hay uno definido. |
| **Estado** | Habilitado o Deshabilitado, con indicadores de advertencia para agentes con problemas. |
| **Acciones** | Interruptor para habilitar o deshabilitar cuando está disponible. |

Puede buscar por ID de agente, nombre, descripción o nombre del plugin. El filtro de estado puede mostrar **todos** los agentes, los agentes **habilitados**, los agentes **deshabilitados**, o los agentes que **tienen advertencias**.

## Ver detalles

Haga clic en una fila de subagente para abrir su panel de detalles. El panel muestra:

- Nombre e ID de ejecución del agente
- Fuente y plugin propietario, cuando aplica
- Estado y salud
- Descripción
- Archivo de origen o ruta de componente del plugin
- Modo y modelo predeterminado
- Máximo de llamadas a herramientas
- Tiempo máximo de ejecución
- Máximo de llamadas de continuación
- Herramientas permitidas
- Prompt de sistema

Los agentes de solo lectura muestran una nota que explica dónde deben editarse. Los agentes manuales muestran las acciones **Editar subagente** y **Eliminar este subagente**.

## Crear un subagente manual

1. Haga clic en **Añadir subagente**.
2. Introduzca un **Nombre**.
3. Revise o edite el **ID slug** generado.
4. Añada una **Descripción**.
5. Elija un **Modo**.
6. Escriba el **Prompt de sistema**.
7. Añada **Herramientas permitidas** separadas por comas.
8. Opcionalmente defina un **Modelo predeterminado**.
9. Configure los límites de ejecución.
10. Opcionalmente añada un objeto JSON de **Esquema de salida**.
11. Elija si el subagente empieza **Habilitado**.
12. Haga clic en **Guardar**.

El ID slug queda bloqueado después de la creación, así que elija un identificador estable.

## Campos del subagente manual

| Campo | Descripción |
|---|---|
| **Nombre** | Nombre legible para humanos que se muestra en la tabla y el panel de detalles. |
| **ID slug** | Identificador estable de ejecución. Se genera automáticamente a partir del nombre antes del primer guardado y no se puede cambiar después. |
| **Descripción** | Explicación breve de cuándo usar el subagente. |
| **Modo** | Rol funcional: `coordinator`, `specialist`, `verifier` o `formatter`. |
| **Prompt de sistema** | Las instrucciones del subagente. Manténgalo autocontenido y específico. |
| **Herramientas permitidas** | Nombres de herramientas separados por comas que el subagente puede usar. La política de ejecución sigue aplicándose. |
| **Modelo predeterminado** | Preferencia opcional de modelo para este subagente. |
| **Máx. llamadas a herramientas** | Número máximo de llamadas a herramientas permitidas durante una ejecución. |
| **Máx. runtime (segundos)** | Tiempo máximo de ejecución de una pasada del subagente. |
| **Máx. llamadas de continuación** | Número máximo de turnos de continuación. |
| **Esquema de salida** | Objeto JSON opcional que describe la salida estructurada deseada. |
| **Habilitado** | Controla si este subagente está disponible para el runtime. |

## Editar y eliminar subagentes manuales

Abra un subagente manual y haga clic en **Editar subagente** para actualizar su nombre, descripción, prompt de sistema, herramientas permitidas, modelo, límites de ejecución, esquema de salida o estado habilitado.

Para eliminar un subagente manual, abra su panel de detalles y haga clic en **Eliminar este subagente**. La eliminación es permanente.

## Subagentes instalados por plugins

Los plugins pueden incluir subagentes en archivos Markdown bajo un directorio `agents/` o mediante declaraciones del manifiesto del plugin. Al instalarse, esos archivos se convierten en definiciones de subagente propiedad del plugin en aiFetchly.

Un subagente de plugin puede incluir:

- `name`
- `description`
- `tools` (y/o `skills`, que se fusionan con las herramientas permitidas)
- `model`
- `mode`
- Límites de ejecución (`maxToolCalls`, `maxRuntimeMs`, `maxTurns`)
- Un `outputSchema` opcional
- Instrucciones Markdown que se convierten en el prompt de sistema

Los subagentes propiedad del plugin se nombran con el espacio de nombres del plugin, por ejemplo `lead-pack:researcher`. Las carpetas anidadas pueden crear IDs más profundos, como `lead-pack:review:verifier`.

## Gestionar subagentes de plugin

Los subagentes de plugin aparecen en dos lugares:

- **Configuración del sistema → Subagentes** para el catálogo completo.
- **Plugin Manager → detalle del plugin → Subagentes** para los agentes propiedad de un plugin.

En la pestaña Subagentes del detalle del plugin, puede revisar el nombre, el ID, el modo, el número de herramientas, la salud y el estado habilitado de cada agente. Deshabilitar un subagente de plugin no deshabilita las demás skills, servidores MCP o subagentes del plugin.

Si el plugin completo está deshabilitado, sus subagentes no estarán disponibles aunque su interruptor individual de habilitado esté activo. Al reactivar el plugin se restauran los ajustes a nivel de componente guardados previamente.

## Salud y advertencias

Los subagentes pueden informar estados de salud como `healthy`, `disabled`, `partial_load`, `invalid` o `missing_files`.

Las advertencias suelen indicar que aiFetchly cargó el agente con restricciones o encontró un problema con la definición de origen. Abra el panel de detalles o los diagnósticos del plugin para inspeccionar la causa.

## Notas de seguridad

- Los subagentes de plugin son definiciones, no programas independientes.
- Los campos sensibles de seguridad suministrados por plugins, como modos de permiso, hooks, registro directo de servidores MCP o ajustes de ejecución privilegiada, se ignoran o generan advertencias.
- Las herramientas permitidas definen el límite superior del subagente. aiFetchly aún cruza esa lista con las herramientas habilitadas y la política de runtime.
- Mantenga los prompts de sistema manuales autocontenidos, porque los subagentes no deben asumir que pueden ver todo el historial del chat padre.
