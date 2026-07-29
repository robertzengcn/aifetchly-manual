---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Administre y extienda las capacidades de IA de aiFetchly con habilidades — importe, habilite/deshabilite, desinstale y comprenda cómo funcionan los permisos de las habilidades y las solicitudes de aprobación en AI Chat.
---

# AI Skills

Las AI Skills son extensiones modulares que añaden herramientas que la IA puede invocar durante un chat: capacidades especializadas como extracción web, automatización, acceso a archivos o comandos de shell. Cuando una habilidad está habilitada, la IA puede decidir utilizarla para responder a su solicitud.

## ¿Qué es una habilidad?

Una habilidad es una herramienta empaquetada con:

- Un **nombre** y **versión** únicos.
- Un **origen**: **Integrada** (incluida con aiFetchly) o **Instalada por el usuario** (importada por usted o incluida con un plugin).
- Una **categoría de permiso**: derivada de los permisos declarados por la habilidad (consulte [Categorías de permisos](#categorías-de-permisos)).
- Un estado de **habilitar/deshabilitar**.

## Acceso a AI Skills

1. Haga clic en **Configuración del sistema** en el menú de navegación izquierdo.
2. Haga clic en **Administrar habilidades** (o **AI Skills**).

La página muestra cada habilidad instalada en una tabla.

## La tabla de habilidades

| Columna | Descripción |
|--------|-------------|
| **Nombre** | Identificador de la habilidad. Si la habilidad proviene de un plugin, aparece una insignia _"via plugin: \{name\}"_ junto a ella. |
| **Origen** | Insignia **Integrada** o **Instalada por el usuario**. |
| **Categoría** | La categoría de permiso de la habilidad (`pure`, `network`, `filesystem`, `automation` o `shell`). |
| **Versión** | Número de versión de la habilidad. |
| **Estado** | **Habilitada** o **Deshabilitada**. |
| **Acciones** | Alternancia de habilitar/deshabilitar y botón de desinstalación — **se muestra únicamente para habilidades instaladas por el usuario**. |

:::note Las habilidades integradas siempre están activas

Las habilidades integradas **no** muestran **ni** la alternancia de habilitar/deshabilitar **ni** el botón de desinstalación. No se pueden deshabilitar ni eliminar desde esta página.

:::

## Importación de una habilidad

Las habilidades se importan como paquetes `.zip`.

1. Haga clic en **Importar** (arriba a la derecha, icono de carga).
2. Elija un archivo `.zip` de habilidad.
3. aiFetchly valida el paquete (manifiesto, permisos, archivo de entrada) y lo instala.

:::tip Consejos de importación

- El botón Importar únicamente admite archivos `.zip`.
- El paquete debe contener un `manifest.json` válido (consulte [Formato del paquete de habilidad](#formato-del-paquete-de-habilidad)).
- Las habilidades incluidas con un plugin no necesitan importarse: aparecen automáticamente cuando se instala su plugin.

:::

Las habilidades también pueden llegar automáticamente desde:

- **Plugins**: un plugin incluye una o más habilidades; aparecen aquí con una insignia _"via plugin"_. Instálelas o elimínelas mediante el **[Plugin Manager](./plugin-manager)**.
- **Carpetas locales de habilidades** (avanzado): las habilidades colocadas en `~/.aifetchly/skills/<name>/` se descubren automáticamente.

## Habilitar, deshabilitar y desinstalar

Para habilidades **instaladas por el usuario**:

- **Habilitar / deshabilitar**: utilice la alternancia de marca de verificación (habilitar) / equis (deshabilitar) en la columna Acciones.
- **Desinstalar**: haga clic en el icono de papelera y confirme. La desinstalación es permanente; vuelva a importar el `.zip` para usar la habilidad nuevamente.

Las habilidades integradas no tienen controles de Acciones: siempre están habilitadas.

## Cómo funcionan las habilidades en el chat

Una vez que una habilidad está habilitada, la IA puede decidir invocarla cuando sea relevante. Usted no invoca habilidades por nombre (aunque puede solicitar una explícitamente, por ejemplo, *"use el extractor web en esta URL"*).

### Categorías de habilidades

Cada habilidad pertenece a una **categoría de permiso** que determina cómo se aprueba cuando la IA la invoca. La categoría es el primer `permission` declarado por la habilidad (en su manifiesto), o `pure` si no se declara ninguno:

| Categoría | Qué puede hacer la habilidad |
|--------|----------------------|
| `pure` | Utilidades de propósito general: procesamiento de texto, cálculos, formato. Sin acceso especial. |
| `network` | Acceso de red/HTTP saliente (obtener páginas, llamar a APIs). |
| `filesystem` | Lectura/escritura de archivos locales. |
| `automation` | Automatización del navegador, extracción, publicación en redes sociales y acciones similares programadas. |
| `shell` | Ejecuta comandos de shell del sistema. (Únicamente la habilidad integrada `shell_execute`; nunca importable.) |

La categoría se muestra en bruto y en minúsculas en la tabla (por ejemplo, `network`, `automation`).

### Solicitudes de aprobación

Cuando la IA invoca una habilidad, aiFetchly puede pedirle que la apruebe antes de que se ejecute. Que aparezca o no una solicitud depende de la categoría de la habilidad **y** del modo actual de aprobación de herramientas del chat:

| Categoría | Comportamiento de aprobación |
|--------|-------------------|
| `pure` | Siempre auto-aprobada; sin solicitud. |
| `shell` | **Siempre solicita aprobación en cada comando.** Nunca auto-aprobada (consulte a continuación). |
| `network` / `filesystem` / `automation` | Se solicita bajo el modo predeterminado _"ask for approval"_. Bajo los modos _"approve for me"_ o _"full access"_ se auto-aprueban. |

Cuando aparece una solicitud, verá una tarjeta de aprobación con tres acciones:

- **Permitir una vez**: ejecuta únicamente esta llamada.
- **Permitir siempre**: recuerda la decisión para que llamadas futuras a esta habilidad no muestren solicitud.
- **Denegar**: bloquea esta llamada.

Para habilidades de **shell**, la tarjeta se titula **"Ejecución de comandos de shell"**, muestra una vista previa del comando (comando, directorio de trabajo, shell, tiempo de espera) y el tercer botón muestra **"Permitir siempre (esta sesión)"** en lugar de "Permitir siempre".

:::warning La aprobación de shell es efectivamente de un solo uso

Para habilidades `shell`, "Permitir siempre" **no** se respeta para comandos posteriores. Cada comando de shell mostrará nuevamente la solicitud; esta es una medida de seguridad intencional, porque los comandos de shell pueden hacer cualquier cosa en su máquina. Únicamente las categorías que no son de shell recuerdan verdaderamente "Permitir siempre" de forma permanente.

:::

## Formato del paquete de habilidad

Un `.zip` de habilidad debe contener un `manifest.json`. El manifiesto mínimo viable se ve así:

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "description": "What this skill does, shown to the AI.",
  "runtime": "javascript",
  "entry": "index.js",
  "parameters": {
    "type": "object",
    "properties": {
      "url": { "type": "string" }
    },
    "required": ["url"]
  },
  "permissions": ["network"]
}
```

### Campos obligatorios del manifiesto

| Campo | Descripción |
|-------|-------------|
| `name` | Identificador único de la habilidad. |
| `version` | Cadena de versión, p. ej. `1.0.0`. |
| `description` | Descripción breve; la IA la lee para decidir cuándo usar la habilidad. |
| `runtime` | `javascript` o `python`. |
| `entry` | El archivo de entrada dentro del paquete (p. ej. `index.js` o `main.py`). |
| `parameters` | Un objeto JSON Schema que describe los parámetros de entrada de la habilidad. |

### Campos opcionales del manifiesto

| Campo | Descripción |
|-------|-------------|
| `permissions` | Arreglo de cadenas de permisos. **Los valores válidos son únicamente `network`, `filesystem`, `automation`.** La primera entrada determina la categoría de la habilidad (consulte [Categorías de habilidades](#categorías-de-habilidades)). Los valores desconocidos se rechazan al importar. |

:::danger Los permisos se validan estrictamente

Únicamente se aceptan `network`, `filesystem` y `automation`. Valores como `web-search`, `data-access` o `shell` se rechazan y la habilidad no se importará. No existe un campo `category` independiente; la categoría se deriva de la primera entrada de `permissions` (o `pure` si no se proporciona ninguna).

:::

### Empaquetado

1. Coloque un `manifest.json` válido en la raíz del paquete.
2. Añada los archivos de runtime/entrada referenciados por `entry`.
3. Comprima el **contenido**, no la carpeta contenedora.
4. Nombre el archivo `skill-name.zip`.

## Solución de problemas

### La importación falló

**Posibles causas:** zip inválido, `manifest.json` faltante o malformado, un valor de `permissions` no válido o un campo obligatorio faltante (`runtime`, `entry`, `parameters`).

**Soluciones:**
1. Verifique la integridad del zip.
2. Compruebe que `manifest.json` tenga todos los campos obligatorios con valores válidos.
3. Confirme que `permissions` únicamente use `network`, `filesystem` o `automation`.
4. Confirme que `runtime` sea `javascript` o `python` y que `entry` apunte a un archivo real.

### Una habilidad no aparece en el chat

**Posibles causas:** la habilidad está deshabilitada o (para habilidades de plugin) su plugin está deshabilitado.

**Soluciones:**
1. Revise el estado de la habilidad en la tabla y habilítela.
2. Para habilidades de plugin, revise el **[Plugin Manager](./plugin-manager)**: el plugin propietario debe estar habilitado.

### La IA sigue solicitando aprobación

- Está utilizando una habilidad de **shell**. Las aprobaciones de shell son de un solo uso por diseño.
- Para otras categorías, cambie el modo de aprobación de herramientas del chat a _"approve for me"_ para reducir las solicitudes (nota: esto auto-aprueba las habilidades que no son de shell).

### Una habilidad integrada no tiene alternancia

Esto es intencional. Las habilidades integradas siempre están habilitadas y no se pueden deshabilitar ni desinstalar desde esta página.

## Próximos pasos

- [Plugin Manager](./plugin-manager): instale plugins que incluyan habilidades, comandos, agentes, hooks y servidores MCP.
- [Subagents](./subagents): especialistas con ámbito específico que la IA puede despachar.
- [AI Chat V2](./ai-chat-v2): donde se invocan las habilidades.
