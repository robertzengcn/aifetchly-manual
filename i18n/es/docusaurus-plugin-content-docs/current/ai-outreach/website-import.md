---
id: website-import
title: Importar sitio web a la Biblioteca de conocimiento
sidebar_label: Importar desde web
description: Convierte páginas web públicas en documentos buscables de la Biblioteca de conocimiento mediante una URL — una página, una lista de páginas o un rastreo acotado del mismo origen.
---

# Importar sitio web a la Biblioteca de conocimiento

La función **Importar sitio web** te permite convertir páginas web públicas en documentos buscables de la Biblioteca de conocimiento directamente desde una URL, sin necesidad de guardar primero la página como archivo. aiFetchly obtiene la página, la convierte a markdown limpio y la indexa a través de la misma canalización RAG que usan los archivos subidos, de modo que las páginas importadas quedan disponibles de inmediato para el [AI Email Writer](./ai-email-writer), [AI Chat](./ai-chat-v2) y la [búsqueda en la biblioteca de conocimiento](./knowledge-library).

:::info Se requiere suscripción

La importación de sitios web ejecuta fragmentado (chunking) y generación de embeddings, por lo que requiere una suscripción activa de aiFetchly con la IA habilitada. Si la IA no está habilitada, la importación se bloquea antes de obtener cualquier página.

:::

## Dos formas de importar

Puedes importar páginas web de dos formas; ambas generan documentos idénticos en la Biblioteca de conocimiento:

| Método | Dónde | Ideal para |
|--------|-------|------------|
| **Diálogo Importar sitio web** | Página Biblioteca de conocimiento → botón **Importar sitio web** | Importaciones manuales y controladas con todas las opciones |
| **Herramienta de AI Chat** | Pídeselo al asistente en [AI Chat](./ai-chat-v2) | Importaciones rápidas y conversacionales ("importa nuestra página de precios") |

El resto de esta página se centra en el diálogo manual. La ruta desde AI Chat se explica en [Importar desde AI Chat](#importar-desde-ai-chat) más abajo.

## Modos de importación

Elige uno de los tres modos en el diálogo:

| Modo | Entrada | Cuándo usarlo |
|------|---------|---------------|
| **Página única** | Una URL (+ título opcional) | Quieres una página concreta |
| **Lista de URLs** | Hasta 50 URLs, una por línea | Ya conoces las páginas exactas que quieres |
| **Rastreo de sitio** | Una URL inicial + límites de páginas/profundidad | Quieres incorporar un sitio de docs, FAQ o sección rastreando enlaces del mismo origen |

:::tip Un documento por página

Cada página web importada se convierte en **su propio** documento de la Biblioteca de conocimiento, no en un único documento gigante por sitio web. Esto mantiene las citas precisas, facilita eliminar o actualizar páginas individuales y ofrece una detección de duplicados fiable.

:::

## Usar el diálogo Importar sitio web

### Paso 1: Abrir el diálogo

1. Abre la página **Knowledge** desde la navegación izquierda.
2. Haz clic en **Import Website** en la cabecera de la página.

### Paso 2: Elegir un modo de importación

Selecciona **Single page**, **URL list** o **Site crawl** en la parte superior del diálogo. El formulario se adapta al modo seleccionado.

### Paso 3: Indicar la(s) URL(s)

- **Página única** y **Rastreo de sitio**: introduce una sola **URL** (en el modo rastreo el campo se etiqueta **Start URL**). Usa una dirección `http://` o `https://` pública, p. ej. `https://example.com/pricing`.
- **Lista de URLs**: introduce una URL por línea en el campo **URLs** (máximo 50). Las líneas en blanco se ignoran.

### Paso 4: Definir las opciones del modo

- **Página única**: opcionalmente, define un **Title** para sustituir el título de la página.
- **Lista de URLs** y **Rastreo de sitio**: define **Max pages** (cuántas páginas importar).
- **Rastreo de sitio**: define además **Max depth** (cuántos saltos de enlace seguir desde la URL inicial).

### Paso 5: Añadir metadatos comunes (opcional)

| Campo | Descripción |
|-------|-------------|
| **Tags** | Etiquetas separadas por comas aplicadas a cada página importada (p. ej. `pricing, product`). |
| **Author** | Autor registrado en los documentos. Por defecto, `Website`. |
| **Description** | Descripción opcional almacenada con los documentos. |
| **Duplicate policy** | `Skip duplicates` (por defecto) o `Allow duplicates`. Consulta [Gestión de duplicados](#gestión-de-duplicados). |

### Paso 6: Importar y revisar

Haz clic en **Import**. Un panel de progreso muestra la página actual, cuántos enlaces se han descubierto (modo rastreo) y los contadores de importadas / omitidas.

Cuando termina la importación, el diálogo lista:

- **Imported**: cada página con su título, URL de origen y número de fragmentos creados.
- **Skipped**: cada URL que no se importó, con el motivo (duplicado, contenido vacío, fallo de scrapeo, URL bloqueada, …).
- **Discovered**: cuántos enlaces del mismo origen encontró el rastreador (modo rastreo).

Usa **Import another** para iniciar una nueva importación, o **Close** para volver a la Biblioteca de conocimiento. Las páginas importadas aparecen en la lista de documentos igual que los archivos subidos y se pueden buscar de inmediato.

## Límites

| Límite | Valor |
|--------|-------|
| Máximo de URLs por **lista de URLs** | 50 |
| Rango de **Max pages** (lista de URLs y rastreo) | 1–100 (por defecto 20) |
| Rango de **Max depth** (rastreo) | 0–4 (por defecto 2) |
| Esquemas de URL permitidos | solo `http://`, `https://` |
| Ámbito del rastreo | Solo del mismo origen (sin rastreo entre orígenes) |

Estos topes protegen el coste de embeddings y mantienen los rastreos acotados. El rastreador además sigue valores conservadores: baja concurrencia y una pequeña pausa entre peticiones.

## Cómo se almacena el contenido importado

Cada página web se convierte a markdown y se ingiere a través de la canalización RAG estándar:

1. **Obtención**: la página se carga mediante el rastreador basado en navegador de aiFetchly (el mismo motor que se usa para el análisis de sitios web).
2. **Extracción y conversión**: se eliminan la navegación, scripts, estilos y otros elementos redundantes, y el contenido principal se convierte a markdown.
3. **Preparación**: el markdown se guarda como un documento propiedad de la aplicación.
4. **Fragmentado y embeddings**: el documento se fragmenta y se generan sus embeddings exactamente igual que un archivo subido.
5. **Indexación**: la página pasa a ser buscable y utilizable como contexto RAG.

El nombre generado del documento sigue el patrón `{hostname}-{path}-{hash}.md` (por ejemplo `example.com-pricing-a1b2c3d4.md`), y la URL de origen queda registrada con el documento.

:::note Calidad de la extracción

aiFetchly selecciona la zona de contenido más probable (artículo, main, contenedores de docs, con `body` como respaldo). La calidad varía según el sitio, y las páginas con poco texto legible (páginas de login, de error, apps con mucho JavaScript) pueden omitirse por estar vacías. La extracción mejora con el tiempo.

:::

## Gestión de duplicados

Por defecto, aiFetchly **omite** las páginas que ya existen en tu Biblioteca de conocimiento, para mantenerla limpia.

- **Skip duplicates** (por defecto): las páginas duplicadas se omiten y se listan en **Skipped** con el motivo `duplicate`. Una importación de página única duplicada falla con un error de duplicado.
- **Allow duplicates**: se importa cada página aunque ya exista una copia. Úsalo cuando quieras intencionadamente una segunda instantánea de una página.

:::info Sustituir una página

Todavía no hay un modo automático de "reemplazo". Para refrescar una página, elimina el documento antiguo e importa la URL de nuevo.

:::

## Seguridad y protección

La importación de sitios web está diseñada para ser segura por defecto. Para evitar abusos y ataques de tipo SSRF (Server-Side Request Forgery), aiFetchly rechaza:

- URLs que no sean `http(s)`, incluidas `file://`, `mailto:`, `tel:`, `javascript:` y `data:`.
- `localhost`, loopback y direcciones de redes privadas, link-local e internas.
- Endpoints de metadatos en la nube (por ejemplo `169.254.169.254`).
- URLs que contienen credenciales.
- Redirecciones y enlaces descubiertos que resuelvan a cualquiera de los anteriores.

Los rastreos nunca salen del origen de la URL inicial. El contenido importado se trata estrictamente como **conocimiento**: se almacena solo para recuperación y nunca se ejecuta como instrucción.

:::warning Sin sitios privados ni autenticados

No se admiten páginas autenticadas, tras login o de redes internas. Importa únicamente páginas públicas.

:::

## Importar desde AI Chat

También puedes pedirle al asistente de [AI Chat](./ai-chat-v2) que importe páginas web. El asistente usa la herramienta `knowledge_library_import_website` y pedirá confirmación antes de obtener nada.

Ejemplos:

```text
Importa https://example.com/pricing a mi biblioteca de conocimiento y etiquétalo como pricing.
```

```text
Importa las páginas de docs de https://example.com/docs a la biblioteca de conocimiento.
```

```text
Rastrea hasta 25 páginas de https://example.com/docs e impórtalas como documentos de sitio web.
```

El asistente confirmará el modo, las URLs, los límites, las etiquetas y la política de duplicados, y luego resumirá cuántas páginas se importaron y omitieron.

## Resolución de problemas

| Síntoma | Causa probable | Qué hacer |
|---------|----------------|-----------|
| **"Import failed"** antes de cargar cualquier página | IA/suscripción no habilitada | Habilita la IA en tu suscripción y reintenta. |
| Página en **Skipped** como `URL_BLOCKED` | La URL es privada/localhost/no http(s) | Usa una URL `http(s)` pública. |
| Página como `EMPTY_CONTENT` | La página tenía poco texto legible (login/error, solo JS) | Prueba otra URL o comprueba la página en el navegador. |
| Página como `SCRAPE_FAILED` | El sitio bloqueó el rastreador o superó el tiempo de espera | Reintenta más tarde o reduce el número de páginas. |
| Página como `duplicate` | La página ya existe en la biblioteca | Usa **Allow duplicates** o elimina antes el documento antiguo. |
| El rastreo importó menos páginas de las esperadas | Se alcanzó **Max pages** / **Max depth**, o hay pocos enlaces del mismo origen | Sube los límites o confirma que el sitio enlaza las páginas que quieres. |
| La página importada no se usa en el contenido de IA | El contexto RAG no está habilitado o el contenido no es relevante | Habilita el contexto RAG en AI Chat / Email Writer y comprueba que el estado del documento sea **Completed**. |

## Próximos pasos

- [Biblioteca de conocimiento](./knowledge-library): gestiona, busca, re-embebe y elimina páginas importadas.
- [AI Chat V2](./ai-chat-v2): importa páginas web de forma conversacional y busca en tu biblioteca.
- [AI Email Writer](./ai-email-writer): usa el conocimiento de sitios web importados para personalizar tus mensajes.
