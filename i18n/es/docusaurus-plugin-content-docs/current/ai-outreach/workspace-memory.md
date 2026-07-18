---
id: workspace-memory
title: Memoria de workspace
sidebar_label: Memoria de workspace
description: Usa memoria por workspace para que AI Chat recuerde decisiones, flujos, convenciones, referencias y advertencias específicas del proyecto.
---

# Memoria de workspace

La memoria de workspace permite que AI Chat recuerde contexto específico de un proyecto para un workspace aprobado. Es independiente de la memoria global de usuario y de la memoria de conversación, por lo que los detalles de un proyecto no se reutilizan en otro.

Úsala para información duradera que debe aplicar cuando trabajas en la misma carpeta de proyecto, workspace de campaña o repositorio.

## Qué recuerda

| Tipo | Úsalo para |
|---|---|
| **Proyecto** | Contexto de producto, campaña, hito o proyecto que no es obvio desde los archivos. |
| **Decisión** | Decisiones técnicas o de producto aprobadas por el usuario. |
| **Flujo** | Comandos, pasos de revisión o procedimientos para este workspace. |
| **Convención** | Convenciones de código, escritura, nombres o UX para este workspace. |
| **Referencia** | Enlaces a archivos locales, documentación, especificaciones o recursos externos. |
| **Advertencia** | Trampas conocidas, acciones restringidas, tests inestables, reglas de cumplimiento o restricciones de seguridad. |

No guardes secretos, API keys, cookies, datos privados de leads extraídos, transcripciones completas, salidas grandes de herramientas, contenido bruto de archivos ni progreso temporal de tareas.

## Alcance del workspace

La memoria de workspace solo funciona cuando la conversación actual de AI Chat tiene un workspace aprobado.

aiFetchly resuelve el workspace a una identidad estable. Si la carpeta seleccionada está dentro de un repositorio Git, la memoria se asocia a la raíz del repositorio. Si no hay raíz Git, se asocia a la ruta real seleccionada.

Esto significa:

- Las conversaciones del mismo workspace aprobado pueden compartir memoria.
- Las memorias de un workspace no se inyectan en otro.
- Si no hay workspace aprobado, la memoria de workspace no se puede abrir ni usar.

## Abrir la memoria de workspace

1. Abre **AI Chat**.
2. Elige o aprueba un workspace desde el área de workspace sobre el compositor.
3. Haz clic en **Memoria** en la insignia del workspace.

El diálogo muestra las memorias activas del workspace actual. La insignia también muestra el recuento de memorias activas.

## Crear una memoria

1. Abre el diálogo de memoria de workspace.
2. Haz clic en **Crear memoria**.
3. Elige un **Tipo**.
4. Escribe un **Título** corto.
5. Escribe el **Contenido**.
6. Ajusta la **Confianza**.
7. Haz clic en **Guardar**.

Las memorias manuales se guardan solo para el workspace aprobado activo.

## Campos

| Campo | Descripción |
|---|---|
| **Tipo** | Categoría: proyecto, decisión, flujo, convención, referencia o advertencia. |
| **Título** | Etiqueta corta para escanear y buscar. |
| **Contenido** | Texto de la memoria. Manténlo conciso y duradero. |
| **Confianza** | Puntuación de 0 a 100. Las memorias manuales empiezan altas, pero puedes bajarla si la nota es menos segura. |
| **Estado** | Disponible al editar: activa, archivada o contradicha. |

## Buscar y revisar

Usa el cuadro de búsqueda para encontrar memorias por título o contenido.

Cada fila muestra tipo, título, contenido, estado cuando no está activa, fuente, actualización, último uso y confianza. Activa **Mostrar archivadas** para incluir memorias archivadas y contradichas.

## Editar, archivar y eliminar

Usa las acciones de cada fila:

- **Editar** actualiza tipo, título, contenido, confianza o estado.
- **Archivar** oculta la memoria de la lista activa sin eliminarla.
- **Eliminar** la quita permanentemente después de confirmar.

Las memorias archivadas no aparecen salvo que **Mostrar archivadas** esté activo.

## Auto-resumen de workspace

El auto-resumen de workspace, llamado workspace auto-dream internamente, puede consolidar información específica del proyecto desde conversaciones y tareas de agentes.

En el diálogo:

- La insignia muestra el recuento activo y el estado del auto-resumen.
- **RUN AUTO SUMMARY** inicia una consolidación manual para el workspace activo.
- Se muestra la última ejecución cuando está disponible.

Puedes inspeccionar, editar, archivar o eliminar las memorias generadas.

## Configuración

| Ajuste | Efecto |
|---|---|
| **Inyección de memoria de workspace** | Inyecta memorias relevantes en el contexto de AI Chat para el workspace aprobado activo. |
| **Auto-resumen de workspace** | Consolida memorias específicas desde conversaciones y tareas de agentes en segundo plano. |
| **Memoria de workspace manual** | Permite crear, editar y eliminar memorias manualmente. Desactivarla no elimina memorias guardadas. |

El mensaje actual del usuario tiene prioridad. Si una memoria contradice tu instrucción actual, debe ganar la instrucción actual.

## Buenas prácticas

- Guarda decisiones y convenciones que sería tedioso repetir.
- Guarda comandos de proyecto que no sean obvios en scripts o docs.
- Guarda advertencias de cumplimiento, seguridad, entorno o tests conocidos.
- Mantén las memorias breves.
- Prefiere referencias a rutas o docs antes que copiar archivos grandes.
- Archiva memorias obsoletas en lugar de mantener guías contradictorias activas.
