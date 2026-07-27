---
id: ai-chat-v2
title: AI Chat V2
sidebar_label: AI Chat V2
description: El chat de IA de nueva generación con Modo Plan, seguimiento de contexto en vivo, subagentes y aprobación de plan en línea.
---

# AI Chat V2

AI Chat V2 es el asistente de IA rediseñado. Conserva todo lo que hace el Asistente de Marketing IA heredado — contexto de la Biblioteca de Conocimiento, herramientas MCP, AI Skills — y añade un compositor más limpio, **Modo Plan**, una **insignia de uso de contexto en vivo**, **aprobación de plan en línea**, **subagentes** y un **panel de operaciones de archivos**.

V2 y el asistente heredado funcionan en paralelo. Si la bandera de funcionalidad de V2 está activa, hacer clic en el icono de chat (o pulsar `Ctrl/Cmd + K`) abre V2.

## Novedades de V2

| Funcionalidad | Qué hace |
|---|---|
| **Modo Plan** | Pida a la IA que redacte un plan paso a paso y apruébelo antes de que se ejecute cualquier herramienta. |
| **Insignia de uso de contexto** | Indicador `CTX %` en vivo para que sepa lo cerca que está del límite de contexto del modelo. |
| **Aprobación de plan en línea** | La tarjeta del plan se renderiza dentro del flujo de mensajes con Aprobar / Rechazar / Solicitar cambios. |
| **Subagentes** | La IA puede despachar a un especialista (p. ej. Lead Researcher) con su propio presupuesto de herramientas y esquema de salida. |
| **Panel de operaciones de archivos** | Panel plegable sobre el compositor que lista cada archivo que la IA acaba de leer o modificar. |
| **Reconexión de streaming** | Si se cae el flujo, V2 reintenta y muestra un indicador de reconexión en lugar de quedarse colgado en silencio. |
| **Indicador de escritura** | Visible mientras la IA está pensando o ejecutando una herramienta. |
| **Botón Detener** | Cancela el flujo en curso y cualquier llamada a herramienta en ejecución. |
| **Comandos slash** | Escriba `/` en el compositor para ejecutar acciones (`/clear`, `/status`, `/plugin`) o expandir plantillas de prompt reutilizables que usted cree. Consulte [Comandos Slash](./slash-commands). |
| **Voz** | Diga su mensaje en voz alta y escuche la respuesta de la IA — reconocimiento de voz a texto y texto a voz en el dispositivo. Consulte [Voz](#voz). |

## Abrir V2

1. Haga clic en el **icono de chat** del encabezado, o pulse `Ctrl + K` (Windows/Linux) / `Cmd + K` (macOS).
2. Si V2 está habilitado, el panel de V2 se desliza desde la derecha.
3. Para volver al asistente heredado durante una sesión, desactive la bandera de V2 en `localStorage` (`aifetchly:aiChatV2Enabled`).

:::tip Cambiar el tamaño del panel

Arrastre el borde izquierdo del panel para cambiar su tamaño. El panel recuerda su anchura durante la sesión.

:::

## Modo Chat frente a Modo Plan

Use el **menú desplegable de modo** sobre el compositor para alternar entre dos modos.

### Modo Chat (predeterminado)

Se comporta como el asistente heredado: usted pregunta, la IA responde y las herramientas se ejecutan según sea necesario. Ideal para preguntas y respuestas, redacción de contenido y consultas rápidas.

### Modo Plan

El Modo Plan añade una puerta de aprobación antes de que la IA ejecute algo destructivo o de larga duración.

1. Cambie el selector de modo a **Plan**.
2. Describa el objetivo (p. ej., "Investiga estos 5 leads y redacta el outreach para cada uno").
3. La IA redacta un plan — un documento markdown con los pasos que pretende dar.
4. El plan aparece como una tarjeta en línea con estado, versión y objetivo.
5. Elija:
   - **Aprobar** — la IA comienza a ejecutar el plan inmediatamente.
   - **Rechazar** — envíe un motivo; la IA se detiene y lo revisa.
   - **Solicitar cambios** — pida ediciones sin rechazar de plano.
6. Durante la ejecución, la IA transmite el progreso y la salida de herramientas de vuelta a la conversación.

:::info Cuándo usar el Modo Plan

Active el Modo Plan para cualquier tarea que ejecute muchas llamadas a herramientas, modifique archivos, envíe outreach o cueste créditos significativos. Para "¿qué asunto de correo es bueno?" — quédese en Modo Chat.

:::

### Estados del plan

| Estado | Significado |
|---|---|
| **Borrador** | La IA todavía está componiendo el plan. |
| **Esperando respuesta** | La IA hizo una pregunta aclaratoria antes de finalizar. |
| **Esperando aprobación** | El plan está listo — esperando que usted Apruebe / Rechace. |
| **Aprobado** | Usted aprobó; la ejecución está en curso o finalizada. |
| **Rechazado** | Usted rechazó con comentarios. |
| **Completado** | El plan finalizó con éxito. |
| **Cancelado** | El plan fue cancelado (por usted o por un error). |

## La insignia de uso de contexto

Junto al selector de modo, una pequeña insignia muestra **`CTX <percent>%`**. Esto es cuánto de la ventana de contexto del modelo está usando la conversación actual.

| Tono | Rango | Qué significa |
|---|---|---|
| Bajo (gris) | 0–49% | Hay mucho espacio. |
| Medio (amarillo) | 50–79% | Se está llenando. |
| Alto (naranja) | 80–94% | Considere iniciar una conversación nueva pronto. |
| Crítico (rojo) | 95–100% | Cerca del límite — los mensajes largos pueden truncarse o compactarse automáticamente. |

Cuando la insignia llegue a Crítico, inicie una conversación nueva o deje que la IA compacte la sesión (ver más abajo).

## Subagentes

Un subagente es un especialista con alcance limitado que la IA principal puede despachar para encargarse de un trabajo bien definido. Cada subagente tiene:

- Un **prompt de sistema** afinado para su trabajo
- Una **lista de herramientas permitidas** (un subconjunto de las herramientas disponibles de la IA)
- Un **esquema de salida** (el subagente debe devolver JSON que coincida con el esquema)
- **Presupuestos**: máx. de llamadas a herramientas, máx. tiempo de ejecución, máx. turnos de continuación

### Integrado: Lead Researcher

El subagente Lead Researcher recopila contexto público del negocio para un lead. Tiene permitido usar `google_search`, `scrape_urls_from_search_engine` y `knowledge_library_search`. Devuelve un objeto estructurado con:

- `businessSummary`
- `productsOrServices`
- `targetCustomerHints`
- `marketSignals`
- `sourceUrls` (cada afirmación debe estar respaldada por una fuente)
- `confidence` (0–1)

Usted no invoca los subagentes directamente — la IA principal decide cuándo despachar uno. Para inducirla, pida algo como: *"Investiga el lead en acme.com usando el Lead Researcher."*

:::tip Los subagentes tienen un alcance limitado

Un subagente solo puede usar las herramientas de su lista de permitidas. No puede enviar correos, publicar en redes sociales ni modificar registros. Su salida es evidencia sobre la que la IA principal actúa — no una acción propia.

:::

## Panel de operaciones de archivos

Sobre el compositor, un panel plegable muestra cada archivo que la IA acaba de leer o escribir en el turno actual. Cada entrada es una ficha en la que puede hacer clic para abrir el archivo (o una vista de diferencias para archivos editados).

Úselo para:

- Verificar lo que la IA realmente cambió antes de confiar en el resultado.
- Saltar directamente a un archivo que la IA mencionó sin tener que buscarlo.
- Poner los ojos en blanco con la IA por editar el archivo equivocado. (Sucede.)

## AI Skills, MCP y Biblioteca de Conocimiento en V2

V2 usa las mismas AI Skills, servidores MCP y Biblioteca de Conocimiento que el asistente heredado:

- **[AI Skills](./ai-skills)** — se instalan desde la página de Skills o mediante el Gestor de Plugins; aparecen automáticamente como herramientas en V2.
- **[Herramientas MCP](./mcp-tools)** — haga clic en el botón **Herramientas MCP** del encabezado de V2 para añadir o gestionar servidores MCP externos.
- **[Biblioteca de Conocimiento](./knowledge-library)** — active o desactive el contexto RAG de la misma manera que en el asistente heredado.

## Permisos y "Permitir siempre"

Cuando la IA quiere ejecutar una herramienta que necesita aprobación, V2 muestra una tarjeta de aprobación en línea con dos opciones:

- **Permitir una vez** — se ejecuta esta sola vez.
- **Permitir siempre** — recuerda la decisión.

Para la mayoría de las categorías de habilidades, **Permitir siempre** se recuerda de forma permanente. Para la categoría de **ejecución de shell**, **Permitir siempre** es **solo para la sesión** por seguridad — la próxima vez que reinicie la aplicación, la IA volverá a preguntar.

:::warning Shell siempre está limitado a la sesión

La IA puede ejecutar comandos de shell únicamente con su aprobación explícita. Incluso si hace clic en "Permitir siempre" para shell, el permiso expira cuando cierra la aplicación. Esto es intencional.

:::

## Streaming, detención y reconexiones

- **Indicador de escritura**: aparece un pequeño indicador giratorio mientras la IA produce una respuesta o ejecuta una herramienta.
- **Botón Detener**: sustituye al botón Enviar durante el streaming. Haga clic en él para cancelar la respuesta y cualquier llamada a herramienta en curso. La interfaz se reinicia inmediatamente.
- **Reconexión**: si el flujo se cae a mitad de respuesta, V2 reintenta automáticamente y muestra un indicador de reconexión. Si la reconexión falla, el último mensaje parcial permanece visible para que usted pueda decidir si reenviarlo.

## Compactar (resumir automáticamente) sesiones largas

Cuando una conversación se acerca al límite de contexto, V2 puede compactar la sesión: resume los turnos anteriores en una forma más corta para que la conversación pueda continuar sin perder el contexto clave. La compactación se ejecuta como su propia tarea en segundo plano; verá un aviso cuando ocurra.

## Comandos slash

Escriba `/` al inicio del compositor para abrir el menú de comandos slash. Los comandos integrados como `/clear`, `/help`, `/status` y `/plugin` se ejecutan al instante, y usted puede crear sus propias plantillas de prompt reutilizables (por ejemplo `/outreach <website>`) como archivos Markdown en `~/.aifetchly/commands/`. Consulte la página dedicada de **[Comandos Slash](./slash-commands)** para la lista completa, la creación de comandos personalizados y los atajos de teclado.

## Voz

AI Chat V2 admite **entrada de voz** (voz a texto) y **respuestas habladas** (texto a voz). Ambas se ejecutan **en su dispositivo** usando el motor de voz `sherpa-onnx` — el audio de su micrófono se procesa localmente y no se envía a un servidor.

La voz está desactivada por defecto. Actívela en **[Proveedor de IA → Ajustes de voz](../settings/ai-provider#ajustes-de-voz)**.

### Hable con la IA (entrada de voz)

Cuando la entrada de voz está habilitada, aparece un **botón de micrófono** en el compositor:

1. Haga clic en el micrófono para **iniciar la grabación** (pulsar para hablar). Haga clic de nuevo (o en el control de detención) para detenerla.
2. El compositor muestra un estado de grabación mientras usted habla. La grabación se detiene automáticamente al alcanzar la duración máxima (60 segundos por defecto).
3. Tras detenerse, aiFetchly transcribe su voz localmente e inserta la transcripción en el compositor como texto editable.
4. Revise o edite la transcripción y luego envíela como de costumbre.

:::tip Envío automático

Active **Enviar transcripción de voz automáticamente** en los ajustes de voz para enviar la transcripción en el momento en que termine la transcripción, omitiendo el paso de revisión.

:::

La transcripción se convierte en un mensaje de chat normal — almacenado y enviado como texto, exactamente igual que un mensaje escrito.

La primera vez que use la entrada de voz, aiFetchly descarga el modelo de voz (una descarga única). Si el modelo aún no está instalado, el botón de micrófono muestra un estado de **falta el modelo** con una acción de instalación.

### Escuche la respuesta de la IA (respuestas habladas)

El **botón de volumen** del encabezado del chat activa y desactiva las respuestas habladas:

- **Activado** (resaltado): las respuestas de texto de la IA se leen en voz alta a medida que se transmiten.
- **Desactivado**: silencioso — las respuestas aparecen solo como texto.

aiFetchly lee únicamente la respuesta en lenguaje natural — no los bloques de código, llamadas a herramientas, tablas ni mensajes de permiso.

:::note Hablar solo después de la entrada de voz

En los ajustes de voz puede configurar la IA para que hable **solo sus respuestas a sus mensajes de voz** (un diálogo manos libres) en lugar de cada respuesta.

:::

Mientras la IA habla, un control de **detener voz** le permite interrumpir la reproducción. Iniciar una nueva grabación de voz, cambiar de conversación o hacer clic en el botón **Detener** del chat también detiene la voz.

### La voz no otorga acceso al chat

El reconocimiento y la síntesis de voz son locales y gratuitos, pero para enviar un mensaje y obtener una respuesta sigue necesitando acceso al chat — bien una suscripción a la IA de aiFetchly (Alojado) o un [proveedor personalizado/local](../settings/ai-provider) funcional. Si no hay ningún modelo de chat disponible, su voz aún puede transcribirse localmente, pero el mensaje no podrá enviarse hasta que el chat esté disponible.

## Consejos para sacar el máximo provecho de V2

### HAGA ✅

- **Use el Modo Plan** para tareas de varios pasos o destructivas.
- **Vigile la insignia CTX** — inicie una conversación nueva antes de que se ponga roja.
- **Apruebe las habilidades en las que confíe** con "Permitir siempre" para reducir los mensajes (excepto shell).
- **Revise el panel de operaciones de archivos** después de cualquier turno con muchas herramientas.
- **Mencione al Lead Researcher por su nombre** cuando quiera datos estructurados del lead.

### NO HAGA ❌

- **No apruebe la ejecución de shell a ciegas** — lea primero el comando.
- **No mantenga viva una sesión de 200 turnos** — empiece de nuevo cuando la insignia CTX suba.
- **No espere que los subagentes envíen outreach** — solo recopilan y devuelven datos.
- **No ignore la tarjeta del plan** — aprobar omite su última oportunidad de redirigir.

## Solución de problemas

### El Modo Plan no se activa

- Confirme que el menú desplegable de modo esté en **Plan**.
- Si falta el menú desplegable, la bandera de V2 está desactivada. Rehabilítela vía `localStorage`.

### La IA no está despachando al Lead Researcher

- La IA despacha subagentes solo cuando los considera necesarios. Pídalo explícitamente: *"Usa el Lead Researcher para esto."*
- El subagente solo se ejecuta si sus herramientas requeridas están habilitadas (búsqueda de Google, scraper de URLs, Biblioteca de Conocimiento).

### La insignia de contexto sigue en rojo

- Inicie una conversación nueva, o deje que se ejecute la compactación automática.
- Desactive el contexto RAG si la Biblioteca de Conocimiento está trayendo demasiado texto.

### La aprobación de herramientas sigue solicitando tras "Permitir siempre"

- Está usando una habilidad de **shell**. Las aprobaciones de shell son solo para la sesión por diseño.
- La habilidad puede haberse reinstalado, lo cual reinicia sus permisos otorgados.

## Próximos pasos

- [Comandos Slash](./slash-commands) — ejecute acciones y prompts reutilizables con `/`.
- [Asistente de Marketing IA](./ai-marketing-assistant) — el chat heredado, aún soportado.
- [Gestor de Plugins](./plugin-manager) — instale plugins desde carpeta local, git, GitHub, npm o URL.
- [AI Skills](./ai-skills) — qué son las habilidades y cómo usarlas.
- [Herramientas MCP](./mcp-tools) — conexión de servicios externos.
