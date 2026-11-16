---
id: ai-image-generation
title: AI Image Generation & Editing
sidebar_label: AI Image Generation & Editing
description: Genere imágenes conversando con la IA, edítelas con un mensaje posterior (sin necesidad de espacio de trabajo), seleccione y ordene hasta tres imágenes, y entregue los trabajos grandes a la edición por lotes.
---

# AI Image Generation & Editing

Puede crear y refinar imágenes sin salir del chat. Pida una imagen, recíbala directamente en la conversación y luego diga qué cambiar, por ejemplo «add a dog into the image». Editar sus propias imágenes generadas por chat **no** requiere un espacio de trabajo. El espacio de trabajo solo es necesario para los archivos del proyecto y para guardar imágenes en un proyecto.

En resumen:

- **Genere** imágenes con un mensaje de chat.
- **Edite** con un mensaje posterior, sin herramientas y sin espacio de trabajo.
- **Seleccione y ordene** hasta tres imágenes generadas por solicitud, incluida la combinación en una sola composición.
- **Aplique una misma edición a muchas imágenes** con la [edición por lotes](./ai-image-batch-editing) (hasta 50 imágenes).

![Edición de imágenes por lotes en AI Chat Workspace](/img/ai-image-editing.png)

## Generar imágenes

Describa lo que quiere en el compositor del chat y envíe el mensaje:

- «Genera una imagen de un león en la sabana al atardecer».
- «Crea una foto de producto de una zapatilla blanca sobre una mesa de madera».
- «Dibuja un robot amigable como mascota para una app de programación para niños».

La IA muestra su progreso como una respuesta normal del chat. Cuando la imagen está lista, aparece en la conversación. Si una generación produce varias imágenes, se muestran como una cuadrícula numerada.

Las imágenes generadas se almacenan **en su equipo**, organizadas por cuenta y conversación. El chat no depende de enlaces temporales del proveedor, así que las imágenes de ayer siguen abriendo hoy. No hay galería pública: las imágenes pertenecen a la conversación donde las generó.

## Editar una imagen generada

### Opción 1: simplemente pídalo

En el caso habitual no necesita seleccionar nada. Tras generar una imagen, envíe un mensaje posterior como:

- «Añade un perro a la imagen».
- «Vuelve el cielo tormentoso».
- «Cambia el fondo a blanco».

aiFetchly determina a qué imagen se refiere mediante **lógica local determinista** (no es el modelo de IA adivinando rutas):

| Lo que dice | Lo que aiFetchly adjunta |
|---|---|
| «esta imagen», «la imagen», «it» y la última generación tiene **una** imagen | Esa imagen |
| «imagen 2», «la segunda imagen» | La imagen en esa posición de la última generación |
| «ambas», «todas» | Todas las imágenes de la última generación (hasta tres) |
| Una edición que claramente aplica a **más de tres** imágenes | Ofrece la [edición por lotes](./ai-image-batch-editing) |

Si su redacción puede referirse a varias imágenes, aiFetchly no adivina. Un selector muestra las imágenes candidatas y usted elige la que corresponde.

:::tip La selección explícita siempre gana

Cualquier imagen que seleccione en la bandeja de referencias anula la inferencia automática. Para asegurarse de que se usa la imagen correcta, selecciónela usted mismo (siguiente sección).

:::

### Opción 2: elija la imagen usted mismo

Cada imagen generada de la conversación tiene acciones al pasar el cursor:

| Acción | Qué hace |
|---|---|
| **Usar como referencia** | Añade la imagen a la bandeja de referencias del compositor (pulse de nuevo para quitarla). |
| **Editar** | Añade la imagen como única referencia y enfoca el compositor, listo para su instrucción. |
| **Open** | Abre el archivo de imagen en su equipo. |
| **Guardar en el espacio de trabajo** | Exporta la imagen al espacio de trabajo de su proyecto. Requiere un espacio de trabajo aprobado. |
| **Guardar todo** | (Respuestas con varias imágenes) Exporta todas las imágenes de esa respuesta de una vez. |

### La bandeja de referencias

Las imágenes seleccionadas aparecen como miniaturas ordenadas sobre el compositor:

1. Las miniaturas muestran su orden de selección como **1**, **2**, **3**.
2. Use **Subir** y **Bajar** en una miniatura para cambiar el orden. El orden importa cuando combina imágenes («pon la imagen 1 a la izquierda y la imagen 2 a la derecha»).
3. Elimine una miniatura con **Eliminar**, o vacíe la bandeja con **Borrar todo**.
4. La bandeja muestra un aviso al alcanzar el límite: "Puedes hacer referencia a un máximo de 3 imágenes por solicitud."
5. El contenido de la bandeja pertenece a la conversación actual y no se envía hasta que envíe el mensaje.

Las imágenes subidas y las referencias a imágenes generadas comparten el mismo límite: como máximo **tres entradas de imagen** por solicitud de chat. Dos subidas más dos referencias son demasiadas para una sola solicitud; envíe la imagen extra en el siguiente mensaje o use la edición por lotes para ediciones independientes.

## Edición de varias imágenes y fusión

Con dos o tres referencias seleccionadas puede:

- **Editar cada imagen con el mismo cambio**: «dale a ambas un fondo blanco».
- **Combinar imágenes en una sola**: «fúndelas en un póster, el producto a la izquierda y el logo a la derecha».

La fusión está limitada a **tres imágenes a la vez**. Para más imágenes, edítelas por separado o use la [edición por lotes](./ai-image-batch-editing) para ediciones independientes.

## Editar imágenes del espacio de trabajo

Las imágenes que viven en su **espacio de trabajo de proyecto** (archivos del disco adjuntos para la tarea) mantienen las reglas del espacio de trabajo:

- Editar o analizar una imagen del espacio de trabajo requiere un **espacio de trabajo aprobado**.
- Aplicar una misma edición a muchos archivos del espacio de trabajo usa el mismo flujo por lotes que las imágenes generadas, conservando el requisito de espacio de trabajo.

Las imágenes generadas por chat se saltan todo eso. Son artefactos de la conversación, así que se resuelven sin ningún espacio de trabajo. Esa es la idea central: nunca debería tener que exportar una imagen a una carpeta solo para seguir editándola.

## Límites

| Límite | Valor |
|---|---|
| Entradas de imagen por solicitud de chat (subidas + referencias combinadas) | 3 |
| Imágenes por trabajo por lotes | 1 a 50 |
| Imágenes por fusión (combinación) por solicitud | 3 |
| Formatos admitidos | PNG, JPEG, WebP |
| Tamaño de imagen generada almacenada | hasta ~20 MB por imagen |
| Normalización de la imagen enviada | borde mayor hasta 1568 px, objetivo ~1,5 MB |

El envío nunca reenvía imágenes de turnos anteriores. Solo se incluye lo que seleccionó o mencionó claramente en el mensaje actual, lo que mantiene rápidas y baratas las conversaciones con muchas imágenes.

## Solución de problemas

**«Varias imágenes podrían coincidir con su solicitud».**
Su redacción (como «esta imagen») coincidió con una generación que produjo varias imágenes. Elija la imagen correcta en el selector o selecciónela en la bandeja de referencias.

**«Solo puede hacer referencia a imágenes generadas en esta conversación».**
Las referencias se limitan a la conversación donde se generó la imagen. Genere la imagen aquí, o copie el archivo en su espacio de trabajo y adjúntelo allí.

**«La imagen original ya no está disponible».**
El archivo almacenado desapareció (por ejemplo, por una limpieza de almacenamiento). Regenere la imagen o elija otra.

**«Image editing is unavailable: no edit-capable model is configured».**
Su [proveedor de IA](../settings/ai-provider) no ofrece un modelo de edición de imágenes. Cambie a un proveedor o modelo que admita la edición de imágenes.

**«Unsupported image type» / «exceeds the size limit».**
Las imágenes generadas suelen estar bien, pero las subidas y las exportaciones deben ser PNG, JPEG o WebP dentro de los límites anteriores. Convierta o redimensione la imagen primero.

**aiFetchly pide un espacio de trabajo para editar una imagen.**
Eso solo ocurre con los **archivos del espacio de trabajo**. Las imágenes generadas por chat nunca lo necesitan. Si está editando un archivo del proyecto, apruebe primero el espacio de trabajo, o exporte la imagen generada al espacio de trabajo y continúe allí.

## Próximos pasos

- [Batch Image Editing](./ai-image-batch-editing) — aplique una misma edición a hasta 50 imágenes con progreso, detención y reintento.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — el conjunto completo de funciones del chat, del Modo Plan a los subagentes.
