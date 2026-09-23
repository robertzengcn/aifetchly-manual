---
id: ai-email-auto-reply
title: Respuesta Automática de Correo con IA
sidebar_label: Respuesta Automática de Correo con IA
description: Conecta tu bandeja de entrada, recibe correos, redacta respuestas con IA en la voz del propietario de la cuenta, aprueba antes de enviar y audita todo lo que hizo la IA.
---

# Respuesta Automática de Correo con IA

La Respuesta Automática de Correo con IA cierra el ciclo de tu prospección. aiFetchly se conecta a tu buzón, recibe los mensajes, los lee con IA, redacta respuestas fundamentadas en tu [Biblioteca de Conocimiento](./knowledge-library) y te permite aprobar cada respuesta antes de que salga. Cuando está configurado, aiFetchly también puede responder automáticamente a mensajes que coinciden con una regla, dentro de límites estrictos y priorizando la seguridad, y registra cada decisión en un registro de auditoría que puedes revisar.

## Cómo funciona

La función sigue este flujo:

```text
Conectar una bandeja de entrada
  -> sincronizar mensajes recibidos
  -> la IA lee, clasifica y resume cada mensaje
  -> borrador de respuesta fundamentado en tu Biblioteca de Conocimiento, escrito en la voz del propietario
  -> revisas y apruebas el borrador (obligatorio)
  -> la respuesta se envía desde tu bandeja de salida
  -> todo queda registrado en el registro de auditoría de respuestas automáticas de IA
```

El envío nunca es silencioso. La redacción, la aprobación, el envío, el salto, el bloqueo y los fallos quedan registrados en la auditoría para que siempre puedas ver qué hizo la IA y por qué.

:::info Qué se incluye en cada versión

La primera versión es la **respuesta asistida**: la IA redacta, pero todo envío requiere tu aprobación explícita (o una confirmación aprobada en el Chat con IA). La **respuesta automática** basada en reglas — el envío automático cuando un mensaje coincide con una regla configurada — es una capacidad posterior y permanece desactivada hasta que la actives.

:::

## Requisitos previos

Antes de usar la Respuesta Automática de Correo con IA, asegúrate de tener:

1. **La IA habilitada** en tu cuenta. Consulta [Configuración del proveedor de IA](../settings/ai-provider) para configurar tu servicio de IA.
2. **Un servicio de correo con envío (SMTP) configurado.** Las respuestas se envían a través de tu servicio de correo saliente existente.
3. **(Recomendado) Una [Biblioteca de Conocimiento](./knowledge-library) con documentos** sobre tus productos, precios y procesos. La IA redacta mejores respuestas, fundamentadas en hechos, cuando puede buscar en tus propios materiales.
4. **Acceso IMAP (recomendado) o POP3** al buzón del que quieres recibir. La mayoría de los proveedores admiten IMAP; algunos también ofrecen POP3.

## Conectar una bandeja de entrada

Los ajustes de recepción viven en la configuración del servicio de correo, junto a los ajustes de envío SMTP.

### Paso 1: Abre tu servicio de correo

1. Ve a **Email Marketing** en la navegación izquierda.
2. Abre el servicio de correo (o la lista **Email Services**) que usas para enviar.
3. Busca la sección **Receive Settings** (Ajustes de recepción).

### Paso 2: Configura los ajustes de recepción

| Ajuste | Descripción |
|---------|-------------|
| **Protocolo de recepción** | `IMAP` (recomendado) o `POP3`. IMAP admite carpetas y el estado leído/no leído; POP3 es para proveedores sin IMAP. |
| **Servidor IMAP/POP3** | La dirección del servidor de correo entrante, por ejemplo `imap.gmail.com`. |
| **Puerto IMAP/POP3** | El puerto del servidor entrante. Usa el puerto que tu proveedor publica para SSL/TLS. |
| **SSL/TLS** | Habilita la conexión cifrada al servidor entrante. |
| **Usuario de recepción** | Normalmente tu dirección de correo completa. |
| **Contraseña de recepción** | La contraseña de tu buzón o una contraseña de aplicación. Se almacena de forma segura y nunca se muestra después de guardarla. |
| **Carpeta a monitorear** | Por defecto, `INBOX`. |
| **Recepción habilitada** | Activa la bandeja de entrada cuando estés listo para sincronizar. |

:::tip Usa una contraseña de aplicación

Muchos proveedores requieren una **contraseña de aplicación** para IMAP en lugar de tu contraseña normal (por ejemplo, las contraseñas específicas de la aplicación de Gmail). Consulta la documentación de tu proveedor si la conexión falla.

:::

### Paso 3: Prueba la conexión

Antes de activar la bandeja de entrada, usa la **prueba de conexión**. El envío SMTP y la recepción entrante se prueban **por separado**, para que puedas aislar un problema de envío de uno de recepción. Si la prueba falla, corrige la configuración y prueba de nuevo.

Las credenciales nunca se muestran después de guardarlas, y ni la página de ajustes ni las herramientas de IA exponen tu contraseña.

## Sincronizar mensajes recibidos

Una vez que la bandeja de entrada está habilitada, obtén los mensajes:

1. Abre el servicio de correo con recepción habilitada.
2. Haz clic en **Sync** (o **Fetch Unread**).
3. aiFetchly se conecta a tu buzón, descarga un lote limitado de mensajes no leídos y los almacena localmente.

Tus ajustes de recepción también pueden controlar el comportamiento de la sincronización, por ejemplo **solo no leídos**, un **máximo de mensajes por sincronización**, una **ventana de retroceso de sincronización** y **marcar como leídos después de procesar**.

### Lista de mensajes

Los mensajes sincronizados aparecen en una lista que muestra:

- Cuenta de bandeja de entrada / servicio de correo
- Remitente
- Asunto
- Hora de recepción
- Estado leído/no leído
- Clasificación de la IA
- Estado de la respuesta
- Última acción

Usa los filtros para centrarte en lo importante: **No leídos**, **Necesita respuesta**, **Borrador creado**, **Enviado**, **Omitido**, **Bloqueado** y **Revisión humana**.

:::info Privacidad por defecto

Los cuerpos de los mensajes se sanitizan antes de mostrarse. Las imágenes remotas (píxeles de seguimiento) están desactivadas por defecto, el HTML se limpia y los scripts nunca se ejecutan. aiFetchly almacena el mensaje localmente en tu equipo.

:::

## Redactar una respuesta con IA

Abre un mensaje recibido para ver su cuerpo sanitizado, el remitente y la dirección de respuesta, el resumen de la IA y su recomendación.

La vista de detalle del mensaje ofrece: **Generate draft** (Generar borrador), **Regenerate draft** (Regenerar borrador), **Edit draft** (Editar borrador), **Send reply** (Enviar respuesta), **Mark processed** (Marcar procesado) y **Skip** (Omitir).

### Generar un borrador

Haz clic en **Generate draft** (o pídelo a la IA en el Chat con IA). La generación del borrador:

1. Construye una consulta de búsqueda a partir del asunto, el cuerpo, el remitente y tu objetivo.
2. Busca en tu [Biblioteca de Conocimiento](./knowledge-library) los hechos relevantes (a menos que lo desactives para este borrador).
3. Escribe una respuesta **en la voz del propietario configurado**, fundamentada en esos hechos.
4. Guarda el borrador y registra las fuentes utilizadas en el registro de auditoría.

:::note Fundamentación con la Biblioteca de Conocimiento

La IA usa tu Biblioteca de Conocimiento para responder con datos precisos y específicos de tu negocio. Si no encuentra nada relevante, el borrador se genera igualmente, pero queda claramente marcado en los metadatos de auditoría como creado **sin** apoyo de la biblioteca de conocimiento; esta nota nunca aparece dentro del cuerpo del correo.

:::

### Voz del propietario

Las respuestas se escriben para sonar como las del propietario real del buzón, no como las de un sistema de IA. Configura el **Perfil de Identidad de Respuesta** del servicio de correo:

- Nombre visible del propietario
- Rol / contexto de la empresa
- Tono preferido
- Firma
- Notas de estilo y frases habituales
- Cosas que nunca debe decir
- Si debe revelar que una respuesta es automática (desactivado por defecto)

La IA no mencionará ser una IA, un modelo, un bot o un sistema automático a menos que configures la revelación. Nunca revela indicaciones internas, documentos recuperados ni puntuaciones de confianza en la respuesta.

### Revisar y editar

Los borradores **siempre se te muestran antes de enviar nada**. Edita el borrador, regénalo o ajusta el tono y el objetivo. Una edición crea una nueva revisión; una aprobación que diste antes ya no se aplica, así que apruebas de nuevo antes de enviar.

## Aprobar y enviar una respuesta

Enviar una respuesta **requiere tu aprobación explícita** en la primera versión; no hay envío automático silencioso.

1. En la vista del borrador, confirma el destinatario, el remitente, el asunto y el cuerpo.
2. Haz clic en **Send** (o aprueba la confirmación de `send_email_reply` en el Chat con IA).
3. La respuesta sale a través de tu servicio de correo saliente configurado con las cabeceras de respuesta adecuadas (`In-Reply-To`, `References`), para que la conversación quede enlazada en el mismo hilo.

Después de enviar, el mensaje y el borrador pasan a **Sent** (Enviado) y el resultado se escribe en el registro de auditoría.

### Estados de entrega

| Estado | Significado |
|-------|-------------|
| **Sent** (Enviado) | El proveedor aceptó la respuesta. |
| **Send failed** (Envío fallido) | El proveedor rechazó la respuesta; el error queda registrado y nada se marca como enviado. |
| **Delivery unknown; verify mailbox** (Entrega desconocida; verifica el buzón) | El resultado tras el envío es incierto (por ejemplo, un tiempo de espera). La respuesta **no** se reintenta automáticamente. Revisa tu buzón y concilia manualmente. |

El permiso de envío está vinculado a la revisión exacta del borrador que aprobaste. Editar después de la aprobación la invalida, y un borrador bloqueado o fallido nunca se envía.

## Usar la Respuesta Automática de Correo con IA en el Chat con IA

El asistente de IA puede trabajar con tu bandeja de entrada como una secuencia de herramientas integradas:

```text
list_email_inboxes        -> ver qué bandejas existen (sin exponer secretos)
fetch_unread_emails       -> obtener un lote de mensajes no leídos
get_email_message         -> leer un mensaje en detalle
knowledge_library_search  -> encontrar hechos relevantes en tu Biblioteca de Conocimiento
create_email_reply_draft  -> redactar una respuesta (nunca envía)
send_email_reply          -> enviar; requiere confirmación
mark_email_processed      -> marcar un mensaje como omitido o bloqueado
```

El chat muestra cada paso: leer metadatos de la bandeja, leer el cuerpo de un mensaje, buscar en la Biblioteca de Conocimiento, crear un borrador, esperar confirmación, enviar u omitir un mensaje porque una política de seguridad lo bloquea.

## El registro de auditoría de respuestas automáticas de IA

Abre **AI Auto Replies** (Respuestas automáticas de IA, bajo Email Marketing) para ver todo lo que la IA ha gestionado:

- Asunto y remitente del mensaje recibido
- Servicio de correo / buzón
- Clasificación de la IA
- **Estado de la decisión** y motivo
- Consulta de búsqueda en la Biblioteca de Conocimiento y número de fuentes
- Vista previa del borrador y vista previa de la respuesta enviada
- Hora de envío / hora de la decisión
- Si se requirió aprobación
- Mensaje de error cuando un envío falla

### Estados de decisión

| Estado | Significado |
|--------|-------------|
| `draft_created` | Se generó un borrador. |
| `approval_required` | Un borrador espera tu aprobación. |
| `auto_sent` | El mensaje coincidió con una regla y fue respondido automáticamente. |
| `blocked` | Una política de seguridad detuvo la respuesta. |
| `skipped` | El mensaje se marcó como que no necesita respuesta. |
| `failed` | Falló la redacción o el envío. |
| `needs_human_review` | La IA no pudo decidir con seguridad y lo señaló para ti. |

Filtra por estado, intervalo de fechas, servicio de correo, clasificación y remitente, o busca por asunto, remitente o motivo de la decisión. Una vista de detalle muestra el mensaje original, las vistas previas generada y enviada, la búsqueda de conocimiento utilizada, el motivo de la decisión y el estado de aprobación.

## Reglas de respuesta automática (automatización)

La respuesta automática basada en reglas está desactivada por defecto. Cuando la activas para una bandeja de entrada, configuras:

- **Clasificaciones permitidas** que pueden responder automáticamente (por ejemplo, `interested`)
- **Umbral de confianza** que debe cumplir la clasificación
- **Patrones de remitente / dominio bloqueados**
- **Límite diario de envíos** y **límite de respuestas por hilo**
- **Horas de silencio** y si se requiere aprobación por debajo del umbral
- **Nunca responder automáticamente a mensajes automatizados**

El envío automático solo ocurre cuando se cumplen todas las condiciones. De lo contrario, el mensaje se redacta (o se crea como borrador) y se marca `blocked`, `skipped` o `needs_human_review`; nunca se envía a tus espaldas.

### Prevención de bucles

La política de seguridad nunca responde automáticamente cuando el mensaje:

- Es automático (le han fijado `Auto-Submitted`), masivo o de una lista de correo
- Es un rebote o una notificación de fallo de entrega
- Proviene de `no-reply`, `noreply`, `do-not-reply`, `mailer-daemon` o `postmaster`
- Repite un hilo que ya recibió una respuesta automática de aiFetchly
- Llega de un remitente dentro del periodo de enfriamiento configurado

### Barreras de contenido limpio

Las respuestas generadas por IA nunca incluyen:

- Credenciales, tokens o registros internos
- Precios no verificados, afirmaciones legales o compromisos políticos
- Menciones de que el mensaje fue escrito por IA o ensamblado con herramientas de recuperación
- Nombres de fuentes de la Biblioteca de Conocimiento, puntuaciones de confianza o etiquetas internas
- Adjuntos (no compatibles en esta versión)

La respuesta puede usar el **"yo"** o el **"nosotros"** según tu perfil de identidad, y la IA escala a revisión humana cuando una respuesta necesitaría hechos delicados (reembolsos, asesoramiento legal, detalles de cuenta).

## Solución de problemas

### La prueba de conexión falla

1. Confirma que el host y el puerto coincidan con la documentación de IMAP/POP3 de tu proveedor.
2. Prueba con **SSL/TLS habilitado** si tu proveedor lo requiere.
3. Usa una **contraseña de aplicación** donde tu proveedor la requiera.
4. Prueba el envío y la recepción por separado para aislar el problema.

### No aparecen mensajes tras la sincronización

1. Confirma que la bandeja de entrada esté **habilitada** y que se monitoree la carpeta correcta (normalmente `INBOX`).
2. La sincronización obtiene por defecto un lote limitado de mensajes **no leídos**; revisa los ajustes de sincronización.
3. Las sincronizaciones repetidas nunca duplican los mensajes almacenados; los duplicados por ID de mensaje del proveedor se actualizan en su lugar.

### La redacción falla o la IA no está disponible

1. Asegúrate de que la **IA esté habilitada** en tu cuenta y de que haya un proveedor de IA configurado ([Configuración del proveedor de IA](../settings/ai-provider)).
2. Si la Biblioteca de Conocimiento no tiene documentos relevantes, los borradores se crean igualmente con una advertencia.
3. Puedes reintentar la generación; los borradores fallidos mantienen el estado del mensaje sin cambios.

### Un envío queda en "Delivery unknown"

La respuesta puede que sí o que no haya llegado al destinatario. Nunca se reintenta automáticamente. Revisa tu carpeta de enviados y concilia el estado manualmente desde la vista de detalle de auditoría o del intento de envío.

## Notas de seguridad y privacidad

- Las contraseñas de los buzones se cifran en reposo, nunca se muestran después de guardarlas y nunca se pasan a las herramientas de IA.
- El correo entrante se trata como **contenido de cliente no confiable**. Las instrucciones dentro de un correo nunca pueden anular tu política de seguridad, los requisitos de aprobación ni la política de envío.
- Todas las lecturas, búsquedas de conocimiento, decisiones de borrador, aprobaciones, bloqueos, omisiones, fallos y envíos quedan registrados en la auditoría.
- Los cuerpos de los mensajes se sanitizan antes de mostrarse, y los registros de auditoría guardan solo vistas previas y motivos; nunca cuerpos completos, credenciales o indicaciones sin procesar.

## Siguientes pasos

- [Crea tu Biblioteca de Conocimiento](./knowledge-library) para que las respuestas se fundamenten en hechos precisos de la empresa.
- [Escribe tus plantillas de envío](./ai-email-writer) y confirma tu servicio de correo saliente.
- [Configura tu proveedor de IA](../settings/ai-provider) si la IA aún no está habilitada.

---

**¿Listo para cerrar el ciclo?** Conecta una bandeja de entrada, activa la recepción, sincroniza tus mensajes no leídos y deja que la IA redacte tu primera respuesta; tú mantienes el control de cada envío.