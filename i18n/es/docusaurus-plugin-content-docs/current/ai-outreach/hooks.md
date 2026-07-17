---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Gestiona hooks de ciclo de vida que se ejecutan alrededor del chat de IA y la actividad de herramientas en aiFetchly.
---

# Hooks

Los hooks permiten que aiFetchly ejecute acciones configuradas durante eventos clave del ciclo de vida del chat de IA, por ejemplo antes de ejecutar una herramienta, después de que una herramienta termine correctamente o después de un fallo. Úsalos para agregar controles de seguridad, inyectar contexto de cumplimiento o conectar lógica local de trabajo con la actividad de herramientas de IA.

## Abrir Hooks

1. Haz clic en **Configuración** en la navegación izquierda.
2. Abre **Configuración del sistema**.
3. Haz clic en **Administrar Hooks**.

La página de Hooks incluye un interruptor global, una lista de hooks, un panel de edición y un registro de auditoría reciente.

## Activación global

Usa **Enable hooks globally** para activar o desactivar todo el sistema de hooks.

Cuando los hooks globales están desactivados, ningún hook se ejecutará, aunque un hook individual esté habilitado. Es la forma más rápida de pausar todo el comportamiento de hooks durante la solución de problemas.

## Fuentes de hooks

La lista de hooks puede mostrar distintas fuentes:

| Fuente | Descripción |
|---|---|
| **Integrado** | Hooks incluidos con aiFetchly. Puedes habilitarlos o deshabilitarlos, pero no editar sus definiciones. |
| **Usuario** | Hooks de comando que creas en la página de Hooks. Se pueden editar, habilitar, deshabilitar o eliminar. |
| **Sesión** | Hooks temporales asociados a la sesión actual. Activa **Show session hooks** para incluirlos en la lista. |

Usa los filtros **Event** y **Source** para acotar la lista.

## Hooks integrados

aiFetchly incluye hooks integrados para flujos de seguridad y cumplimiento.

| Hook | Predeterminado | Qué hace |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | Habilitado | Revisa `shell_execute` antes del uso de la herramienta y bloquea comandos peligrosos de borrado recursivo como `rm -rf /` o `rm -rf *`. |
| `builtin-scraping-compliance-context` | Deshabilitado | Agrega contexto de cumplimiento después de llamadas a herramientas de scraping. Habilitar este hook puede afectar los resultados de IA relacionados con scraping. |

Los hooks integrados están definidos por código. La página de Hooks solo cambia si están habilitados.

## Crear un hook de comando

1. Haz clic en **Add command hook**.
2. Revisa o reemplaza el **Hook ID** generado.
3. Elige un **Event**.
4. Define un **Matcher**.
5. Opcionalmente agrega una **If condition**.
6. Introduce el **Command** local que se ejecutará.
7. Define **Timeout (ms)** y **Failure mode**.
8. Opcionalmente agrega un **Status message**.
9. Haz clic en **Save**.
10. Selecciona el hook guardado y activa **Enabled** cuando esté listo para usarse.

Los hooks de comando nuevos se guardan deshabilitados de forma predeterminada para que puedas revisarlos antes de que se ejecuten.

## Campos de un hook de comando

| Campo | Descripción |
|---|---|
| **Hook ID** | Identificador único del hook. Solo se puede editar al crear el hook. |
| **Event** | Evento de ciclo de vida que puede activar el hook. |
| **Matcher** | Patrón usado para coincidir con el destino del evento, como el nombre de una herramienta. Usa `*` para coincidir con todo en el evento seleccionado. |
| **If condition** | Patrón opcional que se comprueba contra valores de entrada de texto en eventos relacionados con herramientas. Por ejemplo, `git *` puede coincidir con comandos de shell que empiezan por `git `. |
| **Command** | Comando local que se ejecuta cuando el hook coincide. La entrada del hook se pasa al comando como JSON por stdin. |
| **Timeout (ms)** | Tiempo máximo de ejecución antes de que aiFetchly detenga el comando. |
| **Failure mode** | `warn` registra errores del hook sin bloquear el flujo de IA. `block` convierte errores de ejecución del hook en una operación bloqueada. |
| **Status message** | Mensaje opcional que se muestra mientras se ejecuta el hook. |
| **Enabled** | Controla si el hook guardado puede ejecutarse. |

Los hooks de comando deben escribir un objeto JSON en stdout. Un objeto vacío significa "sin cambios". Los campos de salida compatibles incluyen `continue`, `reason`, `systemMessage`, `additionalContext`, `updatedInput`, `updatedToolOutput`, `suppressOutput` y `permissionDecision`.

Ejemplo de salida que bloquea una operación coincidente:

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

Ejemplo de salida que agrega contexto:

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Eventos de hook

| Evento | Cuándo se ejecuta |
|---|---|
| `SessionStart` | Cuando inicia una sesión de chat de IA, plan o agente. |
| `UserPromptSubmit` | Cuando el usuario envía un prompt. |
| `PreToolUse` | Antes de ejecutar una herramienta. |
| `PostToolUse` | Después de que una herramienta termina correctamente. |
| `PostToolUseFailure` | Después de que una herramienta falla. |
| `PermissionRequest` | Cuando se prepara una solicitud de permiso para una herramienta. |
| `PermissionDenied` | Cuando se deniega una solicitud de permiso de herramienta. |
| `Stop` | Cuando la ejecución de IA se detiene o termina. |

## Editar y eliminar hooks

Selecciona un hook de usuario en la lista para editar su matcher, condición, comando, timeout, modo de fallo o mensaje de estado. Haz clic en **Save** para aplicar los cambios.

Para eliminar un hook de usuario, haz clic en **Delete** y confirma. La eliminación de un hook es permanente.

:::info Restricciones de hooks integrados

Los hooks integrados se pueden habilitar o deshabilitar, pero su evento, matcher y comportamiento no se pueden editar desde la página de Hooks.

:::

## Registro de auditoría reciente

El **Recent audit log** muestra actividad de hooks, incluyendo:

- Hora
- Hook ID
- Evento
- Estado
- Duración
- Motivo

Filtra el registro de auditoría por **Event**, **Status** o **Hook**, y elige si mostrar las últimas 100, 500 o 1000 filas. Usa el botón de actualización para iniciar o pausar la actualización automática mientras pruebas hooks.

Los estados comunes incluyen:

| Estado | Significado |
|---|---|
| `started` | La ejecución del hook comenzó. |
| `success` | El hook terminó correctamente. |
| `blocked` | El hook bloqueó la operación. |
| `failed` | El hook falló. |
| `timeout` | El hook superó su tiempo máximo. |

## Notas de seguridad

- Los hooks de comando ejecutan procesos locales. Crea solo hooks cuyos comandos entiendas.
- Mantén los comandos de hook acotados y predecibles.
- Prefiere `warn` mientras pruebas un hook nuevo; cambia a `block` solo cuando hayas verificado el comportamiento.
- Usa el registro de auditoría después de habilitar un hook para confirmar que se ejecuta solo cuando corresponde.
