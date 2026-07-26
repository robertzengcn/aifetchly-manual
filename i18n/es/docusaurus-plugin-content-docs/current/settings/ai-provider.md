---
id: ai-provider
title: Proveedor de IA
sidebar_label: Proveedor de IA
description: Enruta AI Chat a través de la IA alojada de aiFetchly o de su propio proveedor compatible con OpenAI (Ollama, LM Studio, OpenAI, OpenRouter, vLLM, LocalAI o un endpoint personalizado).
---

# Proveedor de IA

La página **Proveedor de IA** le permite elegir de dónde obtiene su modelo AI Chat. Tiene dos opciones:

- **aiFetchly alojado (Hosted)** — aiFetchly ejecuta el modelo por usted. Es la opción predeterminada y está incluida con una suscripción de IA de aiFetchly.
- **Proveedor personalizado / local (Custom / Local Provider)** — dirige aiFetchly a cualquier endpoint **compatible con OpenAI**, incluidos servidores locales como [Ollama](https://ollama.com) o LM Studio, o APIs de terceros como OpenAI y OpenRouter.

:::info Por qué es importante

Los proveedores personalizados le permiten usar **AI Chat con su propio modelo, incluso sin una suscripción de IA de aiFetchly.** Otras funciones de IA alojada de aiFetchly (generación de palabras clave, generación de plantillas de correo, recuperación por IA, rerank, embeddings) siguen requiriendo una suscripción; solo la superficie de chat puede ejecutarse a través de su propio proveedor.

:::

Los proveedores personalizados usan el contrato estándar de chat-completions de OpenAI (`/v1/chat/completions` y, cuando se admite, `/v1/models`). aiFetchly no incluye SDKs específicos de cada proveedor: se comunica con su endpoint directamente desde el backend de la aplicación, por lo que su API key nunca sale de su equipo.

:::info La configuración de voz también está aquí

Esta página también contiene los ajustes de **Voz** para AI Chat: reconocimiento de voz en el dispositivo (pulsar para hablar) y respuestas habladas (texto a voz). La voz se ejecuta localmente en su equipo y es independiente de su proveedor de IA. Consulte [Ajustes de voz](#ajustes-de-voz) más abajo.

:::

## Abrir la página Proveedor de IA

1. Haga clic en **System Setting** (Ajuste del sistema) en el menú de navegación izquierdo.
2. Haga clic en el botón **AI Provider** (Proveedor de IA) en la página de System Settings.

También puede abrirlo desde AI Chat: haga clic en el chip del proveedor junto al selector de modelo (por ejemplo `Hosted` o `Local: Ollama`).

## Modo de proveedor

En la parte superior de la página, elija un modo con el grupo de opciones:

| Modo | Cuándo usarlo | Qué requiere |
|------|---------------|--------------|
| **aiFetchly alojado (Hosted)** | Tiene una suscripción de IA de aiFetchly y quiere la ruta más sencilla. | Una suscripción de IA de aiFetchly activa. |
| **Proveedor personalizado / local** | Ejecuta su propio modelo, quiere más control, privacidad o menor coste, o no tiene suscripción. | Un endpoint compatible con OpenAI accesible y una configuración de proveedor guardada. |

En modo **alojado (Hosted)**, la página muestra si la IA alojada está habilitada para su cuenta o si requiere una suscripción.

En modo **personalizado / local**, aparecen los campos de configuración del proveedor (más abajo). Guardar en este modo cambia AI Chat a su proveedor; guardar en modo **alojado** lo vuelve a cambiar.

:::tip Solo AI Chat sigue este ajuste

Cambiar a un proveedor personalizado desbloquea **solo AI Chat**. Las funciones de IA puramente alojadas siguen requiriendo una suscripción independientemente de este ajuste.

:::

## Presets de proveedor

Para ahorrar escritura, elija un **preset de proveedor**. Al seleccionarlo se rellena un nombre y una URL base sugeridos; después puede editar todos los campos.

| Preset | URL base predeterminada | API key |
|--------|-------------------------|---------|
| **Ollama** | `http://localhost:11434/v1` | Normalmente no requerida |
| **LM Studio** | `http://localhost:1234/v1` | Normalmente no requerida |
| **OpenAI** | `https://api.openai.com/v1` | Requerida |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Requerida |
| **vLLM** | `http://localhost:8000/v1` | Normalmente no requerida |
| **LocalAI** | `http://localhost:8080/v1` | Normalmente no requerida |
| **Custom** | _(vacío)_ | Usted decide |

Elija **Custom** para cualquier otro servidor compatible con OpenAI (por ejemplo, una pasarela corporativa, un endpoint compatible con Groq u otro servidor de inferencia local).

## Campos de configuración

Estos campos aparecen cuando se selecciona **Proveedor personalizado / local**:

| Campo | Descripción |
|-------|-------------|
| **Preset de proveedor** | Plantilla de inicio rápido (ver más arriba). Rellena valores predeterminados pero no bloquea los campos. |
| **Nombre del proveedor** | Una etiqueta para este proveedor. Obligatorio. |
| **URL base** | La raíz de la API del proveedor, p. ej. `http://localhost:11434/v1`. Obligatoria. Consulte [Normalización de la URL base](#normalización-de-la-url-base). |
| **API key (opcional)** | Se envía como token `Bearer`. Enmascarada. Déjela en blanco para proveedores locales que no la necesiten. |
| **Modelo predeterminado** | El modelo que usa AI Chat. Es un combobox: elija de la lista refrescada o escriba un nombre manualmente. Obligatorio. |
| **Tamaño de contexto (opcional)** | Sobrescribe la ventana de contexto del modelo, en tokens. |
| **Refrescar modelos (Refresh Models)** | Obtiene la lista de modelos desde el endpoint `/models` del proveedor. |
| **Probar conexión (Test Connection)** | Verifica el endpoint y detecta capacidades. Consulte [Probar conexión](#probar-conexión). |
| **Guardar (Save)** | Guarda la configuración. |

### Normalización de la URL base

Puede introducir la URL base con o sin el sufijo `/v1` y con o sin barra final: aiFetchly la normaliza al guardar para que termine con `/v1` y sin barra final.

| Usted introduce | Se guarda como |
|-----------------|----------------|
| `http://localhost:11434` | `http://localhost:11434/v1` |
| `http://localhost:11434/` | `http://localhost:11434/v1` |
| `http://localhost:11434/v1/` | `http://localhost:11434/v1` |
| `https://api.openai.com/v1` | `https://api.openai.com/v1` |

### Gestión de la API key

- El campo **API key** está enmascarado. Haga clic en el icono del ojo para revelar lo que escribe.
- Una vez guardada una key, **nunca se vuelve a mostrar en texto plano**. El campo muestra _"API key configurada — déjela en blanco para conservarla"_ y aparece una insignia verde **API key configurada**.
- Para conservar la key existente, deje el campo en blanco al guardar.
- Para reemplazarla, escriba la nueva key y guarde.
- Para eliminarla, haga clic en **Clear API key** (Borrar API key).

:::warning HTTP sin cifrar

Se permite `http://` para `localhost` y proveedores de red local. Si usa una URL `http://` plana que **no** es local, aiFetchly avisa de que la conexión no está cifrada: prefiera `https://` para cualquier proveedor remoto.

:::

## Refrescar modelos

Haga clic en **Refresh Models** para consultar el endpoint `/models` del proveedor y rellenar el desplegable **Modelo predeterminado**. Es opcional: siempre puede escribir un nombre de modelo manualmente.

- Si `/models` funciona, los modelos devueltos se normalizan y se muestran en el desplegable.
- Si `/models` falla (algunos servidores locales no lo implementan), recibe un aviso, pero la configuración sigue siendo válida siempre que se haya introducido un **Modelo predeterminado**. aiFetchly recurre al modelo introducido manualmente.
- Si existe un modelo predeterminado pero la lista no puede cargarse, aún puede guardar y chatear.

## Probar conexión

Haga clic en **Test Connection** antes de depender de un proveedor. La prueba verifica, en orden:

1. La URL base es una URL `http:` o `https:` válida.
2. El proveedor es accesible.
3. El endpoint `/models` funciona **o** se ha introducido un modelo predeterminado manualmente.
4. Una finalización de chat no en streaming funciona con un prompt mínimo.
5. Una finalización de chat en streaming funciona (si se admite).
6. Se detecta la compatibilidad con llamadas a herramientas cuando es posible.

La prueba envía un prompt mínimo (por ejemplo, pidiendo al modelo que responda `pong`). Cualquier finalización válida cuenta como éxito: aiFetchly no requiere una coincidencia exacta de texto, porque los modelos locales suelen añadir formato.

El resultado aparece como un mensaje de estado y como **insignias de capacidades** (más abajo). La prueba de conexión nunca registra ni muestra su API key.

:::note Las APIs de terceros pueden cobrar por token

OpenAI, OpenRouter y otros endpoints de pago cobran por token, por lo que cada prueba de conexión envía solo una petición muy pequeña. La prueba sigue realizando una llamada real a la API.

:::

## Insignias de capacidades

Tras una prueba de conexión, las insignias de capacidades describen lo que su proveedor y modelo pueden hacer:

| Insignia | Significado |
|----------|-------------|
| **Models** | El endpoint `/models` está disponible. |
| **Chat** | La finalización de chat no en streaming funciona. |
| **Streaming** | La finalización de chat en streaming funciona. |
| **Tools** | El modelo admite llamadas a herramientas. |
| **Vision** | El modelo acepta entradas de imagen. |
| **Context** | Tamaño de contexto detectado/sobrescrito en tokens (se muestra cuando está disponible). |

Cada insignia tiene uno de estos estados:

| Estado | Color | Significado |
|--------|-------|-------------|
| **Compatible (Supported)** | 🟢 verde | Verificado que funciona. |
| **No compatible / Fallido (Unsupported / Failed)** | 🔴 rojo | Verificado que no funciona, o la prueba falló. |
| **Desconocido (Unknown)** | 🟡 amarillo | No se pudo determinar: proceda con precaución. |

:::tip Cuando Tools es incompatible o desconocido

Si la prueba de conexión no confirma la compatibilidad con herramientas, AI Chat muestra la advertencia *«Este proveedor local no ha confirmado la compatibilidad con herramientas. Las herramientas están desactivadas para esta conversación.»* y desactiva las herramientas para esa conversación. Los flujos que dependen de herramientas (incluido el Modo Plan) no se ejecutarán hasta que cambie a un modelo compatible con herramientas o al aiFetchly alojado. Vuelva a ejecutar **Test Connection** después de cambiar su modelo para volver a comprobar la compatibilidad con herramientas.

:::

## Cómo AI Chat usa su proveedor

Una vez guardado un proveedor personalizado válido:

- **AI Chat queda disponible**, incluso sin una suscripción de IA de aiFetchly.
- Aparece un **indicador de proveedor** cerca del selector de modelo en AI Chat (por ejemplo `Local: Ollama`, `Local: LM Studio` o `Hosted`). Al hacer clic se abre esta página de ajustes.
- El **selector de modelo** lista los modelos de su proveedor (desde `/models`, o solo su modelo predeterminado configurado si `/models` no está disponible).
- Las peticiones de chat se envían a su endpoint directamente desde el backend de la aplicación, nunca desde el navegador/renderer.

Si el proveedor es inaccesible, AI Chat muestra un error claro de proveedor en lugar de fallar silenciosamente.

:::info Relacionado: AI Chat V2

El modo de proveedor es común a las superficies de chat. Consulte [AI Chat V2](../ai-outreach/ai-chat-v2) para la experiencia de chat en sí, incluido el Modo Plan y la insignia de uso de contexto.

:::

## Ajustes de voz

La página Proveedor de IA también incluye un panel de **Voz** para voz en el dispositivo en AI Chat: reconocimiento de voz a texto (entrada de voz) y texto a voz (respuestas habladas). La voz se ejecuta localmente en su equipo usando el motor `sherpa-onnx` y es independiente de su proveedor de IA.

### Entrada de voz

| Ajuste | Qué hace |
|---|---|
| **Habilitar entrada de voz** | Muestra un botón de micrófono en el compositor de AI Chat (pulsar para hablar). Desactivado por defecto. |
| **Enviar transcripción de voz automáticamente** | Envía la transcripción tan pronto como termina la transcripción, en lugar de colocarla en el compositor para revisión. |
| **Idioma de STT** | El idioma que hablará: Auto, English, 中文, Español, Français, Deutsch, o 日本語. |
| **Modelo de STT** | El modelo de reconocimiento de voz a texto. Solo los modelos instalados son seleccionables. |
| **Duración máxima de grabación** | Cuánto puede durar una grabación única, en segundos (1–600; por defecto 60). |

### Respuestas habladas

| Ajuste | Qué hace |
|---|---|
| **Habilitar respuestas habladas** | Lee en voz alta las respuestas de texto de la IA. También puede activarlo o desactivarlo en cualquier momento desde el botón de volumen en la cabecera de AI Chat. |
| **Hablar solo tras entrada de voz** | Cuando está activado, la IA habla solo sus respuestas a sus mensajes de voz (conversación manos libres), no a cada respuesta. |
| **Idioma de TTS** | El idioma de las respuestas habladas: Auto, English, 中文, Español, Français, Deutsch, o 日本語. |
| **Voz / modelo de TTS** | La voz utilizada para las respuestas habladas. Solo las voces instaladas son seleccionables. |
| **Velocidad de voz** | Velocidad de reproducción, de 0.5× a 2.0×. |

### Modelos de voz

La entrada de voz y las respuestas habladas necesitan cada una un modelo de voz. La sección **Modelos de voz** lista los modelos STT y TTS disponibles con su estado — **Descargar (Download)**, **Instalado (Installed)** o **Cancelar (Cancel)** (durante la descarga) — y muestra el progreso de descarga en vivo.

Los modelos se descargan bajo demanda la primera vez que activa o usa una función, por lo que activar la voz por primera vez dispara una descarga única. También puede pre-descargar modelos aquí.

:::info La voz es local y privada

El reconocimiento y la síntesis de voz ocurren totalmente en su dispositivo. El audio de su micrófono se procesa localmente y **no** se envía a un servidor ni se almacena. Solo la transcripción resultante se conserva — como un mensaje de chat normal.

:::

:::note La voz no otorga acceso al chat

La voz es local y gratuita, pero no otorga acceso al chat. Para enviar un mensaje transcrito y obtener una respuesta aún necesita una suscripción de IA de aiFetchly (Hosted) o un proveedor personalizado/local funcional. Consulte [AI Chat V2 → Voz](../ai-outreach/ai-chat-v2#voice) para ver cómo se usa la voz en el chat.

:::

## Seguridad y privacidad

- Las **API keys se cifran en reposo** y se almacenan separadas del resto de la configuración.
- Las **keys nunca se devuelven a la UI en texto plano** tras guardarse: la página solo muestra `apiKeyConfigured: true/false`.
- Las **keys nunca se registran**. Los logs de depuración y de peticiones redactan las cabeceras `Authorization` y cualquier valor que parezca un secreto.
- Las **peticiones se hacen desde el backend de la aplicación**, no desde el renderer, para que las credenciales no queden expuestas al contenido web.
- Las **URLs base se validan** como `http:` o `https:` únicamente.

## Inicio rápido: Ollama

1. [Instale Ollama](https://ollama.com) y descargue un modelo, p. ej. `ollama pull llama3.1`.
2. Abra **Settings → AI Provider**.
3. Seleccione **Custom / Local Provider**.
4. Defina el **preset** en **Ollama** (rellena `http://localhost:11434/v1`).
5. Haga clic en **Refresh Models** y elija un modelo, o escriba uno (p. ej. `llama3.1`).
6. Haga clic en **Test Connection** para confirmar y luego en **Save**.
7. Abra AI Chat: el indicador mostrará `Local: Ollama` y podrá chatear sin suscripción.

## Inicio rápido: OpenAI / OpenRouter

1. Abra **Settings → AI Provider**.
2. Seleccione **Custom / Local Provider**.
3. Defina el **preset** en **OpenAI** o **OpenRouter**.
4. Pegue su **API key** en el campo correspondiente.
5. Introduzca un **Default model** (modelo predeterminado) (por ejemplo `gpt-4o-mini` o un id de modelo de OpenRouter).
6. Haga clic en **Test Connection** y luego en **Save**.

## Resolución de problemas

### No se pudo conectar al proveedor

**Posibles causas:**
- El servidor local no está en ejecución (compruebe el proceso de Ollama / LM Studio / vLLM).
- La URL base o el puerto son incorrectos.
- Un firewall bloquea el acceso a localhost/lan.

**Soluciones:**
1. Inicie el proveedor y confirme que responde en un navegador (por ejemplo `http://localhost:11434/v1/models`).
2. Revise la URL base y ejecute **Test Connection**.
3. Para configuraciones Docker o WSL, asegúrese de que el proveedor sea accesible desde el contexto de red de aiFetchly.

### Error de autenticación (401 / 403)

**Posibles causas:**
- La API key falta, es incorrecta o ha caducado.
- La key no tiene acceso al modelo seleccionado.

**Soluciones:**
1. Vuelva a introducir la API key y guarde.
2. Para OpenAI/OpenRouter, confirme que la key es válida y tiene crédito/permiso para el modelo.

### El modelo seleccionado no está disponible

El proveedor devolvió "model not found". Elija otro modelo de la lista de **Refresh Models** o actualice el **Default model** a uno que el proveedor sirva realmente.

### La lista de modelos no pudo cargarse

Algunos servidores locales no implementan `/models`. Es esperado: escriba el nombre del modelo manualmente en **Default model** y guarde. El chat seguirá funcionando.

### El chat funciona, pero Tools / Streaming aparecen como no compatibles

No todos los modelos locales admiten llamadas a herramientas o streaming. Si los necesita, cambie a un modelo compatible con herramientas/streaming o use **Hosted aiFetchly**. Consulte [Insignias de capacidades](#insignias-de-capacidades).

### Las funciones puramente alojadas siguen pidiendo suscripción

Es por diseño. Un proveedor personalizado desbloquea solo AI Chat: la generación de palabras clave, la generación de plantillas de correo, la recuperación por IA, el rerank y los embeddings siguen requiriendo una suscripción de IA de aiFetchly.

## Próximos pasos

- [AI Chat V2](../ai-outreach/ai-chat-v2) — la experiencia de chat que alimenta su proveedor
- [System Settings](./system-settings) — configuración general
- [AI Skills](../ai-outreach/ai-skills) — capacidades que la IA puede invocar durante el chat
