---
id: ai-provider
title: Proveedor de IA
sidebar_label: Proveedor de IA
description: Enruta AI Chat a través de la IA alojada de aiFetchly o de tu propio proveedor compatible con OpenAI (Ollama, LM Studio, OpenAI, OpenRouter, vLLM, LocalAI o un endpoint personalizado).
---

# Proveedor de IA

La página **Proveedor de IA** te permite elegir de dónde obtiene su modelo AI Chat. Tienes dos opciones:

- **aiFetchly alojado (Hosted)** — aiFetchly ejecuta el modelo por ti. Es la opción predeterminada y está incluida con una suscripción de IA de aiFetchly.
- **Proveedor personalizado / local** — apuntas aiFetchly a cualquier endpoint **compatible con OpenAI**, incluidos servidores locales como [Ollama](https://ollama.com) o LM Studio, o APIs de terceros como OpenAI y OpenRouter.

:::info Por qué es importante

Los proveedores personalizados te permiten usar **AI Chat con tu propio modelo, incluso sin una suscripción de IA de aiFetchly.** Otras funciones de IA alojada de aiFetchly (generación de palabras clave, generación de plantillas de correo, recuperación por IA, rerank, embeddings) siguen requiriendo una suscripción; solo la superficie de chat puede ejecutarse a través de tu propio proveedor.

:::

Los proveedores personalizados usan el contrato estándar de chat-completions de OpenAI (`/v1/chat/completions` y, cuando se admite, `/v1/models`). aiFetchly no incluye SDKs específicos de cada proveedor: se comunica con tu endpoint directamente desde el backend de la aplicación, por lo que tu API key nunca sale de tu máquina.

## Abrir la página Proveedor de IA

1. Haz clic en **Settings** (Ajustes) en el menú de navegación izquierdo.
2. Abre la página **AI Provider** (Proveedor de IA), dentro de System Settings (Ajustes del sistema).

## Modo de proveedor

En la parte superior de la página, elige un modo con el grupo de opciones:

| Modo | Cuándo usarlo | Qué requiere |
|------|---------------|--------------|
| **aiFetchly alojado (Hosted)** | Tienes una suscripción de IA de aiFetchly y quieres la ruta más sencilla. | Una suscripción de IA de aiFetchly activa. |
| **Proveedor personalizado / local** | Ejecutas tu propio modelo, quieres más control, privacidad o menor coste, o no tienes suscripción. | Un endpoint compatible con OpenAI accesible y una configuración de proveedor guardada. |

En modo **alojado (Hosted)**, la página muestra si la IA alojada está habilitada para tu cuenta o si requiere una suscripción.

En modo **personalizado / local**, aparecen los campos de configuración del proveedor (más abajo). Guardar en este modo cambia AI Chat a tu proveedor; guardar en modo **alojado** lo vuelve a cambiar.

:::tip Solo AI Chat sigue este ajuste

Cambiar a un proveedor personalizado desbloquea **solo AI Chat**. Las funciones de IA puramente alojadas siguen requiriendo una suscripción independientemente de este ajuste.

:::

## Presets de proveedor

Para ahorrar escritura, elige un **preset de proveedor**. Al seleccionarlo se rellena un nombre y una URL base sugeridos; después puedes editar todos los campos.

| Preset | URL base predeterminada | API key |
|--------|-------------------------|---------|
| **Ollama** | `http://localhost:11434/v1` | Normalmente no requerida |
| **LM Studio** | `http://localhost:1234/v1` | Normalmente no requerida |
| **OpenAI** | `https://api.openai.com/v1` | Requerida |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Requerida |
| **vLLM** | `http://localhost:8000/v1` | Normalmente no requerida |
| **LocalAI** | `http://localhost:8080/v1` | Normalmente no requerida |
| **Custom** | _(vacío)_ | Tú decides |

Elige **Custom** para cualquier otro servidor compatible con OpenAI (por ejemplo, una pasarela corporativa, un endpoint compatible con Groq u otro servidor de inferencia local).

## Campos de configuración

Estos campos aparecen cuando se selecciona **Proveedor personalizado / local**:

| Campo | Descripción |
|-------|-------------|
| **Preset de proveedor** | Plantilla de inicio rápido (ver más arriba). Rellena valores predeterminados pero no bloquea los campos. |
| **Nombre del proveedor** | Una etiqueta para este proveedor. Obligatorio. |
| **URL base** | La raíz de la API del proveedor, p. ej. `http://localhost:11434/v1`. Obligatoria. Consulta [Normalización de la URL base](#normalización-de-la-url-base). |
| **API key (opcional)** | Se envía como token `Bearer`. Enmascarada. Déjala en blanco para proveedores locales que no la necesiten. |
| **Modelo predeterminado** | El modelo que usa AI Chat. Es un combobox: elige de la lista refrescada o escribe un nombre manualmente. Obligatorio. |
| **Tamaño de contexto (opcional)** | Sobrescribe la ventana de contexto del modelo, en tokens. |
| **Refrescar modelos (Refresh Models)** | Obtiene la lista de modelos desde el endpoint `/models` del proveedor. |
| **Probar conexión (Test Connection)** | Verifica el endpoint y detecta capacidades. Consulta [Probar conexión](#probar-conexión). |
| **Guardar (Save)** | Guarda la configuración. |

### Normalización de la URL base

Puedes introducir la URL base con o sin el sufijo `/v1` y con o sin barra final: aiFetchly la normaliza al guardar para que termine con `/v1` y sin barra final.

| Introduces | Se guarda como |
|------------|----------------|
| `http://localhost:11434` | `http://localhost:11434/v1` |
| `http://localhost:11434/` | `http://localhost:11434/v1` |
| `http://localhost:11434/v1/` | `http://localhost:11434/v1` |
| `https://api.openai.com/v1` | `https://api.openai.com/v1` |

### Gestión de la API key

- El campo **API key** está enmascarado. Haz clic en el icono del ojo para revelar lo que escribes.
- Una vez guardada una key, **nunca se vuelve a mostrar en texto plano**. El campo muestra _"API key configurada — déjalo en blanco para conservarla"_ y aparece una insignia verde **API key configurada**.
- Para conservar la key existente, deja el campo en blanco al guardar.
- Para reemplazarla, escribe la nueva key y guarda.
- Para eliminarla, haz clic en **Clear API key** (Borrar API key).

:::warning HTTP sin cifrar

Se permite `http://` para `localhost` y proveedores de red local. Si usas una URL `http://` plana que **no** es local, aiFetchly avisa de que la conexión no está cifrada: prefiere `https://` para cualquier proveedor remoto.

:::

## Refrescar modelos

Haz clic en **Refresh Models** para consultar el endpoint `/models` del proveedor y rellenar el desplegable **Modelo predeterminado**. Es opcional: siempre puedes escribir un nombre de modelo manualmente.

- Si `/models` funciona, los modelos devueltos se normalizan y se muestran en el desplegable.
- Si `/models` falla (algunos servidores locales no lo implementan), recibes un aviso, pero la configuración sigue siendo válida siempre que se haya introducido un **Modelo predeterminado**. aiFetchly recurre al modelo introducido manualmente.
- Si existe un modelo predeterminado pero la lista no puede cargarse, aún puedes guardar y chatear.

## Probar conexión

Haz clic en **Test Connection** antes de depender de un proveedor. La prueba verifica, en orden:

1. La URL base es una URL `http:` o `https:` válida.
2. El proveedor es accesible.
3. El endpoint `/models` funciona **o** se ha introducido un modelo predeterminado manualmente.
4. Una finalización de chat no en streaming funciona con un prompt mínimo.
5. Una finalización de chat en streaming funciona (si se admite).
6. Se detecta la compatibilidad con llamadas a herramientas cuando es posible.

La prueba envía un prompt mínimo (por ejemplo, pidiendo al modelo que responda `pong`). Cualquier finalización válida cuenta como éxito: aiFetchly no requiere una coincidencia exacta de texto, porque los modelos locales suelen añadir formato.

El resultado aparece como un mensaje de estado y como **insignias de capacidades** (más abajo). La prueba de conexión nunca registra ni muestra tu API key.

:::note Las APIs de terceros pueden cobrar por token

OpenAI, OpenRouter y otros endpoints de pago cobran por token, por lo que cada prueba de conexión envía solo una petición muy pequeña. La prueba sigue realizando una llamada real a la API.

:::

## Insignias de capacidades

Tras una prueba de conexión, las insignias de capacidades describen lo que tu proveedor y modelo pueden hacer:

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
| **Desconocido (Unknown)** | 🟡 amarillo | No se pudo determinar: procede con precaución. |

:::tip Cuando Tools es incompatible o desconocido

Si tu proveedor no admite (de forma fiable) las llamadas a herramientas, AI Chat usa automáticamente un modo de aprobación conservador y no envía definiciones de herramientas para el chat normal. Los flujos que requieren herramientas y el Modo Plan que dependen de ellas pueden deshabilitarse o mostrarte un aviso. Para soporte completo de herramientas/Modo Plan, usa un modelo compatible con herramientas o aiFetchly alojado.

:::

## Cómo AI Chat usa tu proveedor

Una vez guardado un proveedor personalizado válido:

- **AI Chat queda disponible**, incluso sin una suscripción de IA de aiFetchly.
- Aparece un **indicador de proveedor** cerca del selector de modelo en AI Chat (por ejemplo `Local: Ollama`, `Local: LM Studio` o `Hosted`). Al hacer clic se abre esta página de ajustes.
- El **selector de modelo** lista los modelos de tu proveedor (desde `/models`, o solo tu modelo predeterminado configurado si `/models` no está disponible).
- Las peticiones de chat se envían a tu endpoint directamente desde el backend de la aplicación, nunca desde el navegador/renderer.

Si el proveedor es inaccesible, AI Chat muestra un error claro de proveedor en lugar de fallar silenciosamente.

:::info Relacionado: AI Chat V2

El modo de proveedor es común a las superficies de chat. Consulta [AI Chat V2](../ai-outreach/ai-chat-v2) para la experiencia de chat en sí, incluido el Modo Plan y la insignia de uso de contexto.

:::

## Seguridad y privacidad

- Las **API keys se cifran en reposo** y se almacenan separadas del resto de la configuración.
- Las **keys nunca se devuelven a la UI en texto plano** tras guardarse: la página solo muestra `apiKeyConfigured: true/false`.
- Las **keys nunca se registran**. Los logs de depuración y de peticiones redactan las cabeceras `Authorization` y cualquier valor que parezca un secreto.
- Las **peticiones se hacen desde el backend de la aplicación**, no desde el renderer, para que las credenciales no queden expuestas al contenido web.
- Las **URLs base se validan** como `http:` o `https:` únicamente.

## Inicio rápido: Ollama

1. [Instala Ollama](https://ollama.com) y descarga un modelo, p. ej. `ollama pull llama3.1`.
2. Abre **Settings → AI Provider**.
3. Selecciona **Custom / Local Provider**.
4. Define el **preset** en **Ollama** (rellena `http://localhost:11434/v1`).
5. Haz clic en **Refresh Models** y elige un modelo, o escribe uno (p. ej. `llama3.1`).
6. Haz clic en **Test Connection** para confirmar y luego en **Save**.
7. Abre AI Chat: el indicador mostrará `Local: Ollama` y podrás chatear sin suscripción.

## Inicio rápido: OpenAI / OpenRouter

1. Abre **Settings → AI Provider**.
2. Selecciona **Custom / Local Provider**.
3. Define el **preset** en **OpenAI** o **OpenRouter**.
4. Pega tu **API key** en el campo correspondiente.
5. Introduce un **Default model** (modelo predeterminado) (por ejemplo `gpt-4o-mini` o un id de modelo de OpenRouter).
6. Haz clic en **Test Connection** y luego en **Save**.

## Resolución de problemas

### No se pudo conectar al proveedor

**Posibles causas:**
- El servidor local no está en ejecución (comprueba el proceso de Ollama / LM Studio / vLLM).
- La URL base o el puerto son incorrectos.
- Un firewall bloquea el acceso a localhost/lan.

**Soluciones:**
1. Inicia el proveedor y confirma que responde en un navegador (por ejemplo `http://localhost:11434/v1/models`).
2. Revisa la URL base y ejecuta **Test Connection**.
3. Para configuraciones Docker o WSL, asegúrate de que el proveedor sea accesible desde el contexto de red de aiFetchly.

### Error de autenticación (401 / 403)

**Posibles causas:**
- La API key falta, es incorrecta o ha caducado.
- La key no tiene acceso al modelo seleccionado.

**Soluciones:**
1. Vuelve a introducir la API key y guarda.
2. Para OpenAI/OpenRouter, confirma que la key es válida y tiene crédito/permiso para el modelo.

### El modelo seleccionado no está disponible

El proveedor devolvió "model not found". Elige otro modelo de la lista de **Refresh Models** o actualiza el **Default model** a uno que el proveedor sirva realmente.

### La lista de modelos no pudo cargarse

Algunos servidores locales no implementan `/models`. Es esperado: escribe el nombre del modelo manualmente en **Default model** y guarda. El chat seguirá funcionando.

### El chat funciona, pero Tools / Streaming aparecen como no compatibles

No todos los modelos locales admiten llamadas a herramientas o streaming. Si los necesitas, cambia a un modelo compatible con herramientas/streaming o usa **Hosted aiFetchly**. Consulta [Insignias de capacidades](#insignias-de-capacidades).

### Las funciones puramente alojadas siguen pidiendo suscripción

Es por diseño. Un proveedor personalizado desbloquea solo AI Chat: la generación de palabras clave, la generación de plantillas de correo, la recuperación por IA, el rerank y los embeddings siguen requiriendo una suscripción de IA de aiFetchly.

## Próximos pasos

- [AI Chat V2](../ai-outreach/ai-chat-v2) — la experiencia de chat que alimenta tu proveedor
- [System Settings](./system-settings) — configuración general
- [AI Skills](../ai-outreach/ai-skills) — capacidades que la IA puede invocar durante el chat
