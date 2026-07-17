---
id: subagents
title: Subagentes
sidebar_label: Subagentes
description: Gestiona subagentes de IA integrados, instalados por plugins, de espacio de trabajo y manuales en aiFetchly.
---

# Subagentes

Los subagentes son definiciones reutilizables de agentes de IA especialistas. Describen un rol concreto, prompt de sistema, herramientas permitidas, preferencia de modelo y límites de ejecución que aiFetchly puede usar para trabajo de IA enfocado.

Los plugins pueden instalar subagentes junto con AI Skills y servidores MCP, y también puedes crear subagentes manuales para flujos recurrentes propios.

## Abrir Subagentes

1. Haz clic en **Configuración** en la navegación izquierda.
2. Abre **Configuración del sistema**.
3. Haz clic en **Administrar subagentes**.

La página muestra una tabla compacta, controles de búsqueda y filtro, un diálogo de detalles y la acción **Añadir subagente**.

## Fuentes de subagentes

| Fuente | Descripción |
|---|---|
| **Integrado** | Agentes incluidos con aiFetchly. Son de solo lectura. |
| **Plugin** | Agentes instalados por un plugin. Son de solo lectura desde la página Subagentes, pero se pueden habilitar o deshabilitar. |
| **Espacio de trabajo** | Agentes cargados desde archivos del espacio de trabajo. Edita el archivo de agente del espacio de trabajo para cambiarlos. |
| **Manual** | Agentes creados por ti en aiFetchly. Se pueden editar, habilitar, deshabilitar o eliminar. |

Usa el filtro de fuente para mostrar todos los subagentes o solo una fuente.

## Buscar y filtrar subagentes

La tabla incluye:

| Columna | Descripción |
|---|---|
| **Agente** | Nombre visible e ID de ejecución. |
| **Descripción** | Resumen breve de lo que hace el agente. |
| **Fuente** | Integrado, Plugin, Espacio de trabajo o Manual. |
| **Modo** | Rol del agente, como `specialist`, `verifier`, `coordinator` o `formatter`. |
| **Herramientas** | Número de herramientas que el agente puede usar. |
| **Estado** | Habilitado o deshabilitado, con indicadores de advertencia para agentes con problemas. |
| **Acciones** | Interruptor para habilitar o deshabilitar cuando está disponible. |

Puedes buscar por ID, nombre, descripción o nombre del plugin. El filtro de estado puede mostrar todos los agentes, los habilitados o los deshabilitados.

## Ver detalles

Haz clic en una fila para abrir el panel de detalles. El panel muestra:

- Nombre e ID de ejecución
- Fuente y plugin propietario, si aplica
- Estado y salud
- Descripción
- Archivo de origen o ruta de componente del plugin
- Modo y modelo predeterminado
- Máximo de llamadas a herramientas
- Tiempo máximo de ejecución
- Máximo de continuaciones
- Herramientas permitidas
- Prompt de sistema

Los agentes de solo lectura muestran una nota que indica dónde deben editarse. Los agentes manuales muestran acciones **Editar subagente** y **Eliminar este subagente**.

## Crear un subagente manual

1. Haz clic en **Añadir subagente**.
2. Introduce un **Nombre**.
3. Revisa o edita el **ID slug** generado.
4. Añade una **Descripción**.
5. Elige un **Modo**.
6. Escribe el **Prompt de sistema**.
7. Añade **Herramientas permitidas** separadas por comas.
8. Opcionalmente define un **Modelo predeterminado**.
9. Configura los límites de ejecución.
10. Opcionalmente añade un objeto JSON de **Esquema de salida**.
11. Elige si el subagente empieza **Habilitado**.
12. Haz clic en **Guardar**.

El ID slug queda bloqueado después de la creación, así que elige un identificador estable.

## Campos de subagente manual

| Campo | Descripción |
|---|---|
| **Nombre** | Nombre legible que aparece en la tabla y el panel de detalles. |
| **ID slug** | Identificador estable de ejecución. Se genera desde el nombre antes del primer guardado y no se puede cambiar después. |
| **Descripción** | Explicación breve de cuándo usar el subagente. |
| **Modo** | Rol funcional: `coordinator`, `specialist`, `verifier` o `formatter`. |
| **Prompt de sistema** | Instrucciones del subagente. Deben ser autocontenidas y específicas. |
| **Herramientas permitidas** | Nombres de herramientas separados por comas. La política de ejecución sigue aplicándose. |
| **Modelo predeterminado** | Preferencia opcional de modelo para este subagente. |
| **Máx. llamadas a herramientas** | Número máximo de llamadas a herramientas en una ejecución. |
| **Máx. runtime (segundos)** | Tiempo máximo de una ejecución del subagente. |
| **Máx. continuaciones** | Número máximo de turnos de continuación. |
| **Esquema de salida** | Objeto JSON opcional que describe la salida estructurada deseada. |
| **Habilitado** | Controla si el subagente está disponible para el runtime. |

## Editar y eliminar subagentes manuales

Abre un subagente manual y haz clic en **Editar subagente** para actualizar nombre, descripción, prompt de sistema, herramientas permitidas, modelo, límites, esquema de salida o estado habilitado.

Para eliminarlo, abre su panel de detalles y haz clic en **Eliminar este subagente**. La eliminación es permanente.

## Subagentes instalados por plugins

Los plugins pueden incluir subagentes en archivos Markdown bajo un directorio `agents/` o mediante declaraciones del manifiesto. Al instalarse, esos archivos se convierten en definiciones de subagente propiedad del plugin en aiFetchly.

Un subagente de plugin puede incluir:

- `name`
- `description`
- `tools`
- `model`
- `mode`
- Límites de ejecución
- Instrucciones Markdown que se convierten en el prompt de sistema

Los subagentes de plugin se nombran con el espacio de nombres del plugin, por ejemplo `lead-pack:researcher`. Las carpetas anidadas pueden crear IDs más profundos, como `lead-pack:review:verifier`.

## Gestionar subagentes de plugin

Los subagentes de plugin aparecen en dos lugares:

- **Configuración del sistema → Subagentes** para el catálogo completo.
- **Plugin Manager → detalles del plugin → Subagentes** para agentes de un plugin.

En la pestaña Subagentes del detalle del plugin puedes revisar nombre, ID, modo, número de herramientas, salud y estado habilitado. Deshabilitar un subagente de plugin no deshabilita las demás skills, servidores MCP o subagentes del plugin.

Si el plugin completo está deshabilitado, sus subagentes no estarán disponibles aunque su interruptor individual esté activo. Al reactivar el plugin se restauran los ajustes de componente guardados.

## Salud y advertencias

Los subagentes pueden informar estados como `healthy`, `disabled`, `partial_load`, `invalid` o `missing_files`.

Las advertencias suelen indicar que aiFetchly cargó el agente con restricciones o encontró un problema en la definición de origen. Abre el panel de detalles o los diagnósticos del plugin para inspeccionar la causa.

## Notas de seguridad

- Los subagentes de plugin son definiciones, no programas independientes.
- Los campos sensibles de seguridad suministrados por plugins, como modos de permiso, hooks, registro directo de servidores MCP o ajustes de ejecución privilegiada, se ignoran o generan advertencias.
- Las herramientas permitidas definen el límite superior del subagente. aiFetchly aún cruza esa lista con herramientas habilitadas y política de runtime.
- Mantén los prompts de sistema manuales autocontenidos, porque los subagentes no deben asumir que ven todo el historial del chat padre.
