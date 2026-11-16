---
id: ai-image-batch-editing
title: Batch Image Editing
sidebar_label: Batch Image Editing
description: Aplique la misma edición hasta a 50 imágenes generadas a la vez. Trabajos aislados por imagen, concurrencia limitada, progreso en vivo, detención y reintento de los elementos fallidos.
---

# Batch Image Editing

La edición por lotes aplica **una misma instrucción a muchas imágenes**. En lugar de editarlas una por una, aiFetchly ejecuta un trabajo en segundo plano limitado con una edición aislada por imagen y muestra una sola tarjeta de progreso en la conversación. Trabajos típicos:

- «Da a las 20 fotos de producto un fondo blanco».
- «Ilumina todas las imágenes de esta generación».
- «Añade mi texto de marca de agua a cada una de estas imágenes».

## Cuándo se usa la edición por lotes

Termina en un lote de una de estas tres maneras:

1. **Pide la misma edición para más de tres imágenes.** Las solicitudes directas del chat llevan como máximo tres imágenes, así que un conjunto mayor se deriva automáticamente a un lote (aiFetchly le pide confirmarlo primero).
2. **Selecciona cuatro o más imágenes en la bandeja de referencias.** aiFetchly ofrece: «Se seleccionaron más de 3 imágenes. ¿Prefieres procesarlas como un lote de ediciones independientes?». Confirme para iniciar el lote, o rechace y edite de tres en tres.
3. **Pide un conjunto numerado grande**, por ejemplo «edita de la imagen 4 a la 12». Aparece la misma confirmación antes de ejecutar nada.

:::info Confirmado antes de cualquier coste

La confirmación del lote siempre muestra el número exacto antes de que el trabajo comience. No se ejecuta nada, y no se cobra ningún uso de IA, hasta que confirme.

:::

## Ejecutar un lote

1. **Genere o seleccione las imágenes** que quiere editar (vea [AI Image Generation & Editing](./ai-image-generation)).
2. **Envíe una instrucción** que aplique a todas, por ejemplo «cambia el fondo a blanco en todas».
3. **Confirme el lote** cuando aparezca el diálogo «¿Procesar como lote?». Indica cuántas imágenes se editarán.
4. **Observe la tarjeta de progreso** en la conversación (detalles abajo). Los resultados aparecen en cuanto cada elemento queda guardado de forma duradera.
5. **Gestione el resultado**: descargue o revise las imágenes completadas y reintente lo que haya fallado.

## La tarjeta de progreso

Una sola tarjeta sigue todo el trabajo. Nunca satura la conversación con un mensaje por imagen:

- **Línea de resumen**: `{completed} de {requested} completadas · concurrencia {concurrency}` más el estado del trabajo (en ejecución, completado, parcial, fallido, cancelado).
- **Detener lote**: detiene el trabajo en cualquier momento. Las imágenes ya completadas quedan guardadas; los elementos que nunca empezaron se marcan como cancelados.
- **Sección de fallos ampliable**: muestra cada elemento fallido con su nombre de archivo y un motivo breve.
- **Reintentar elementos fallidos (N)**: cuando el trabajo termina, vuelve a ejecutar solo los elementos fallidos o cancelados. Las imágenes correctas nunca se reprocesan.

### El éxito parcial es seguro

Si 18 de 20 imágenes se procesan bien, conserva esos 18 resultados. Un fallo en una imagen no cancela a sus vecinas. Pulse **Reintentar elementos fallidos** para dar otra oportunidad a los dos fallos.

## Cómo se ejecuta un lote

La edición por lotes está pensada para escala sin inflar el chat:

- **Una imagen, un trabajo.** Cada imagen se edita en su propia solicitud de IA aislada con la instrucción compartida. La correspondencia entrada-salida se conserva: los resultados se informan en el orden en que seleccionó las imágenes, no en el orden en que terminaron.
- **Concurrencia limitada.** Hasta **3 imágenes** se procesan al mismo tiempo (ajustable entre 1 y 3 por el coordinador). Un trabajo de 50 imágenes son 50 solicitudes pequeñas, no una sola gigante.
- **Chat principal ligero.** La conversación principal solo recibe progreso, resúmenes y las imágenes terminadas. Los bytes de imagen y las transcripciones por elemento permanecen en los trabajadores aislados, así que seguir conversando durante y después de un lote largo es rápido.
- **Salidas duraderas.** Cada imagen terminada se guarda localmente antes de que la tarjeta de progreso la referencie, de modo que la expiración de los enlaces temporales del proveedor no puede perder sus resultados.

:::note Cada imagen sigue costando uso de IA

El aislamiento por lotes reduce el contexto de la conversación, no hace las ediciones gratuitas. Cada imagen es una operación del modelo de imagen. El diálogo de confirmación muestra el número de elementos por adelantado, y las mismas reglas de aprobación de herramientas del chat directo siguen aplicando.

:::

## Límites

| Límite | Valor |
|---|---|
| Imágenes por trabajo por lotes | 1 a 50 (los duplicados se quitan automáticamente) |
| Ediciones de imagen en paralelo | 1 a 3 (por defecto 3) |
| Entradas de imagen por solicitud directa | 3 |
| Misma instrucción para todos los elementos | Sí, una instrucción compartida por lote |
| Fusión (combinar varias imágenes en una) | No disponible por lote; use la vía directa con hasta 3 imágenes |

## Solución de problemas

**Algunos elementos fallaron.**
Abra la sección de fallos de la tarjeta de progreso para ver los motivos y pulse **Reintentar elementos fallidos (N)**. Solo se repiten los fallos.

**«La imagen supera el límite de tamaño»** o **«Tipo de imagen no admitido».**
El original almacenado puede ser demasiado grande o de un formato que el editor no puede leer (se admiten PNG, JPEG y WebP). Regenere la imagen, o guárdela en su espacio de trabajo, redimensiónela o conviértala allí, y ejecute la edición como un lote de archivos del espacio de trabajo.

**«La imagen original ya no está disponible».**
El archivo guardado tras una referencia desapareció. Regenere esa imagen e inicie un lote nuevo para ella.

**«Image editing is unavailable: no edit-capable model is configured».**
Su [proveedor de IA](../settings/ai-provider) no ofrece un modelo de edición de imágenes. Configure uno y reintente los elementos fallidos.

**Detuve el lote por error.**
Los resultados completados ya están guardados. Pulse **Reintentar elementos fallidos** cuando el trabajo termine: también recoge los elementos cancelados (que nunca empezaron).

**El lote parece atascado.**
La concurrencia está limitada a tres ediciones paralelas, así que un trabajo grande tarda un rato. Revise la línea de resumen: si el contador de completadas deja de subir durante mucho tiempo, use **Detener lote** y reintente los elementos restantes.

## Próximos pasos

- [AI Image Generation & Editing](./ai-image-generation) — generación de imágenes y edición directa de una a tres imágenes.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — el conjunto completo de funciones del chat, del Modo Plan a los subagentes.
