---
id: batch-email-sending
title: Batch Email Sending
sidebar_label: Batch Email Sending
description: Envía campañas de correo electrónico personalizadas a escala mediante la integración SMTP con aiFetchly.
---

# Envío masivo de correos electrónicos

La función de envío masivo de correos electrónicos de aiFetchly te permite lanzar campañas de correo electrónico personalizadas a escala. Importa correos electrónicos de tus tareas de extracción, utiliza plantillas generadas por IA y envía a través de tu propio servidor SMTP para tener control total sobre tus comunicaciones.

## Resumen

El proceso de envío masivo de correos electrónicos consta de **4 pasos**:

1. **Elegir origen de correos** - Selecciona de dónde provienen tus correos electrónicos
2. **Elegir plantilla de correo** - Selecciona o crea tu plantilla de mensaje
3. **Elegir filtro de correo** (Opcional) - Aplica filtros a tu lista de correos
4. **Elegir servicio de correo** - Configura SMTP y envía

:::info Requisitos previos

Antes de enviar campañas, asegúrate de tener:
- [Configurado un servicio SMTP](#configuring-email-services)
- [Creado plantillas de correo](../ai-outreach/ai-email-writer)
- [Extraído o importado listas de correos](./contact-extraction)

:::

## Configuración de servicios de correo electrónico

Antes de enviar correos, debes configurar al menos un servicio SMTP.

### ¿Qué es SMTP?

**SMTP** (Simple Mail Transfer Protocol) es el estándar para enviar correos electrónicos. aiFetchly utiliza SMTP para enviar correos a través de tu propio servidor de correo o proveedor de servicios de correo electrónico.

### Paso 1: Ir a Servicios de correo

1. Haz clic en **Email Marketing** en el menú de navegación izquierdo
2. Selecciona **Email Services** en el submenú
3. Haz clic en **Add New Service**

### Paso 2: Configuración SMTP

Introduce los siguientes datos SMTP:

#### Nombre del servicio

- **Propósito**: Identificar esta configuración SMTP
- **Ejemplo**: "Gmail SMTP", "SendGrid", "AWS SES"
- **Obligatorio**: Sí

#### Correo remitente

- **Propósito**: Dirección de correo electrónico desde la cual se enviarán los correos
- **Ejemplo**: `outreach@tuempresa.com`
- **Obligatorio**: Sí

:::tip Reputación del remitente

Usa una dirección de correo dedicada para comunicaciones. Evita usar direcciones de correo personal para envíos masivos.

:::

#### Contraseña

- **Propósito**: Contraseña de la cuenta de correo o contraseña específica de aplicación
- **Obligatorio**: Sí
- **Seguridad**: La contraseña se almacena de forma segura

**Mostrar/Ocultar**: Haz clic en el icono del ojo para mostrar u ocultar la contraseña.

#### Host

- **Propósito**: Nombre del host del servidor SMTP
- **Ejemplos**:
  - Gmail: `smtp.gmail.com`
  - SendGrid: `smtp.sendgrid.net`
  - AWS SES: `email-smtp.us-east-1.amazonaws.com`
- **Obligatorio**: Sí

#### Puerto

- **Propósito**: Puerto del servidor SMTP
- **Puertos comunes**:
  - **587**: Submission (STARTTLS) - Recomendado
  - **465**: SMTPS (SSL/TLS)
  - **25**: SMTP (no recomendado, a menudo bloqueado)
- **Obligatorio**: Sí

#### SSL/TLS

- **Interruptor**: Habilitar conexión segura
- **Recomendado**: Mantener siempre habilitado
- **Propósito**: Cifra la transmisión del correo

### Paso 3: Probar configuración

Antes de guardar, prueba tu configuración SMTP:

1. **Haz clic en "Test Connection"**
2. **Introduce los datos de prueba**:
   - **Receiver**: Dirección de correo de prueba
   - **Title**: Línea de asunto de prueba
   - **Content**: Cuerpo del correo de prueba
3. **Haz clic en "Send Test Email"**
4. **Revisa tu bandeja de entrada** para el correo de prueba

:::important Prueba antes de enviar

Siempre prueba tu configuración SMTP antes de usarla en campañas. Esto evita envíos fallidos y desperdicio de recursos.

:::

### Paso 4: Guardar servicio

1. Si la prueba fue exitosa, haz clic en **Save**
2. El servicio aparece en tu lista de servicios de correo
3. Listo para usar en campañas

### Proveedores SMTP comunes

| Proveedor | Host | Puerto | Notas |
|-----------|------|--------|-------|
| **Gmail** | `smtp.gmail.com` | 587 | Usa App Password, no la contraseña habitual |
| **Outlook** | `smtp.office365.com` | 587 | Puede requerir App Password |
| **SendGrid** | `smtp.sendgrid.net` | 587 | Clave API como contraseña |
| **Mailgun** | `smtp.mailgun.org` | 587 | Usa credenciales SMTP |
| **AWS SES** | Específico por región | 587 | Requiere credenciales SMTP |
| **Postmark** | `smtp.postmarkapp.com` | 587 | Clave API como contraseña |

:::warning Gmail y Outlook

Gmail y Outlook requieren **App Passwords** para el acceso SMTP de terceros. No puedes usar tu contraseña habitual.

1. Habilita la autenticación de dos factores
2. Genera una App Password
3. Usa la App Password en aiFetchly

:::

## Envío masivo de correos electrónicos

### Paso 1: Elegir origen de correos

1. **Navega** a **Email Marketing** → **Send Bulk Emails**
2. **Selecciona el tipo de origen de correos** en el menú desplegable:
   - **Email Task**: Correos de tareas de extracción
   - **Manual Input**: Sube una lista de correos manualmente
   - **Search Results**: Usa resultados de tareas de búsqueda

#### Usar tareas de correo (Recomendado)

1. Selecciona **Email Task** en el menú desplegable
2. **Elige la tarea de extracción** de la lista
3. **Obtén una vista previa** de la lista de correos
4. **Opción**: Habilita "Avoid Duplicates" para omitir correos ya contactados

#### Usar entrada manual

1. Selecciona **Manual Input** en el menú desplegable
2. **Introduce los correos** en el área de texto
3. **Formato**: Un correo por línea, o formato CSV
4. **Haz clic en "Parse"** para procesar la lista

### Paso 2: Elegir plantilla de correo

1. **Selecciona una o más plantillas** de tu lista de plantillas
2. **Obtén una vista previa** del contenido de la plantilla
3. Las **variables** se completarán automáticamente:
   - `{$receiver_email}`: Dirección de correo del destinatario
   - `{$url}`: URL de origen (si está disponible)
   - `{$description}`: Descripción o contexto
   - `{$sender}`: Nombre del remitente desde la configuración SMTP
   - `{$send_time}`: Marca de tiempo

:::tip Múltiples plantillas

Puedes seleccionar múltiples plantillas para hacer pruebas A/B con diferentes mensajes. El sistema rotará entre las plantillas para los distintos destinatarios.

:::

### Paso 3: Elegir filtro de correo (Opcional)

Aplica filtros a tu lista de correos:

1. **Selecciona el tipo de filtro** en el menú desplegable
2. **Configura las reglas de filtrado**
3. **Obtén una vista previa** de los resultados filtrados
4. **Ve el recuento** de correos filtrados

**Filtros comunes:**
- Eliminar correos duplicados
- Filtrar por dominio
- Filtrar por industria/categoría
- Excluir destinatarios anteriores

:::info Estado de los filtros

Los filtros de correo son actualmente una función provisional en esta versión. La prevención de duplicados está disponible en el Paso 1.

:::

### Paso 4: Elegir servicio de correo

1. **Selecciona el servicio SMTP** de tus servicios configurados
2. **Revisa el resumen de la campaña**:
   - Cantidad de correos
   - Plantilla(s) seleccionada(s)
   - Servicio SMTP
   - Tiempo estimado de envío

3. **Haz clic en "Send Campaign"** para comenzar el envío

### Ejecución de la campaña

Después del lanzamiento:

- **Progreso en tiempo real**: Seguimiento del progreso de envío
- **Conteo de éxitos/fallos**: Ve los envíos exitosos vs. fallidos
- **Registros de errores**: Ve los detalles de los correos fallidos
- **Pausar/Reanudar**: Controla la ejecución de la campaña

## Monitoreo de campañas

### Lista de campañas

Navega a **Email Marketing** → **Campaigns** para ver todas las campañas.

**Información de la campaña:**
- Nombre de la campaña
- Cantidad de correos
- Plantilla utilizada
- Servicio SMTP
- Estado (Pending, Sending, Completed, Failed)
- Conteo de enviados/fallidos
- Horas de inicio y fin

### Acciones de campaña

| Acción | Descripción |
|--------|-------------|
| **View Details** | Ver el estado individual de cada correo |
| **Pause** | Pausar la campaña en ejecución |
| **Resume** | Continuar la campaña pausada |
| **Stop** | Terminar la campaña |
| **Download Logs** | Exportar los resultados de la campaña |
| **Delete** | Eliminar el registro de la campaña |

### Estado del correo

Los correos individuales pueden tener estos estados:

| Estado | Descripción |
|--------|-------------|
| **Pending** | En cola para enviar |
| **Sent** | Entregado exitosamente |
| **Failed** | No se pudo entregar |
| **Bounced** | Rechazado por el servidor del destinatario |
| **Opened** | El destinatario abrió el correo |
| **Clicked** | El destinatario hizo clic en un enlace |

## Mejores prácticas

### 1. Configuración SMTP

**Usa IP dedicadas:**
- Para envíos de alto volumen, usa direcciones IP dedicadas
- Construye la reputación del remitente gradualmente
- Monitorea las métricas de entregabilidad

**Calentamiento de cuentas nuevas:**
- Comienza con 20-50 correos por día
- Aumenta gradualmente durante 2-4 semanas
- Monitorea las tasas de rebote y spam

**Múltiples servicios:**
- Configura 2-3 servicios SMTP
- Rota entre servicios para distribuir la carga
- Previene la limitación de velocidad por un solo proveedor

### 2. Calidad de la lista de correos

**Limpia tus listas:**
- Elimina los correos rebotados
- Suprime los cancelados y las quejas
- Verifica los correos antes de enviar

**Segmenta tu audiencia:**
- Agrupa por industria, tamaño de empresa o interés
- Crea campañas específicas para cada segmento
- Mejora la relevancia y el compromiso

**Evita duplicados:**
- Habilita la opción "Avoid Duplicates"
- Listas de supresión para destinatarios anteriores
- Mantenimiento regular de listas

### 3. Optimización de plantillas

**Personaliza el contenido:**
- Usa variables extensivamente
- Menciona detalles específicos del destinatario
- Referencia su sitio web o trabajo

**Mantenlo conciso:**
- 100-200 palabras es ideal
- Líneas de asunto claras
- Una sola llamada a la acción

**Compatible con móviles:**
- Párrafos cortos
- Formato claro
- Prueba en dispositivos móviles

### 4. Momento y frecuencia

**Mejores momentos para enviar:**
- Martes, miércoles, jueves: 10 AM - 2 PM
- Evita las mañanas de lunes y los fines de semana
- Prueba horarios para tu audiencia específica

**Frecuencia de envío:**
- No envíes al mismo destinatario dentro de 30 días
- Espacia las campañas adecuadamente
- Monitorea las tasas de cancelación de suscripción

**Limitación de velocidad:**
- Respeta los límites del proveedor SMTP
- Comienza despacio: 10-20 correos por minuto
- Monitorea bloqueos o rebotes

### 5. Cumplimiento normativo

**Incluye los elementos obligatorios:**
- Dirección postal física
- Mecanismo claro de cancelación de suscripción
- Información precisa en el encabezado
- Tu identidad en el correo

**Sigue las regulaciones:**
- **CAN-SPAM** (EE.UU.): Requisitos para correos comerciales
- **GDPR** (UE): Consentimiento y protección de datos
- **CASL** (Canadá): Requisitos de consentimiento

:::warning Cumplimiento legal

Asegúrate de que tus campañas de correo cumplan con las leyes aplicables en las jurisdicciones de tus destinatarios. Consulta con un asesor legal para obtener orientación.

:::

## Solución de problemas

### Error de conexión SMTP

**Posibles causas:**
- Configuración SMTP incorrecta
- El firewall bloquea la conexión
- Problemas de autenticación

**Soluciones:**
1. Verifica el host, puerto y credenciales
2. Prueba con telnet: `telnet smtp.host.com puerto`
3. Revisa la configuración del firewall/antivirus
4. Prueba con un puerto diferente (587 vs 465)
5. Verifica la App Password para Gmail/Outlook

### Tasa de rebote alta

**Posibles causas:**
- Direcciones de correo inválidas
- Problemas de reputación del remitente
- Disparadores de filtros de spam

**Soluciones:**
1. Verifica la calidad de la lista de correos
2. Comprueba la reputación del remitente (MXToolbox)
3. Mejora el contenido del correo
4. Calienta la cuenta de correo
5. Usa un servicio SMTP diferente

### Los correos van a spam

**Posibles causas:**
- Mala reputación del remitente
- Contenido spam
- Falta de autenticación

**Soluciones:**
1. Configura SPF, DKIM y DMARC
2. Mejora la calidad del contenido del correo
3. Evita palabras que activen el filtro de spam
4. Incluye dirección física y enlace para cancelar suscripción
5. Calienta el dominio de envío

### Limitación de velocidad

**Posibles causas:**
- Envío demasiado rápido
- Límites del proveedor SMTP excedidos

**Soluciones:**
1. Reduce la velocidad de envío (correos por minuto)
2. Configura múltiples servicios SMTP
3. Verifica los límites de velocidad del proveedor
4. Actualiza el plan SMTP si es necesario

### Las plantillas no se personalizan

**Posibles causas:**
- Las variables no coinciden con los datos
- Faltan datos en la lista de correos

**Soluciones:**
1. Verifica que los nombres de las variables coincidan exactamente
2. Comprueba que la lista de correos tenga los campos requeridos
3. Prueba con la vista previa antes de enviar
4. Usa contenido genérico como alternativa

## Métricas de campaña a monitorear

### Entregabilidad

- **Tasa de envío**: Correos enviados exitosamente / Total de correos
- **Tasa de rebote**: Correos rebotados / Correos enviados
- **Tasa de entrega**: Correos entregados / Correos enviados

### Compromiso

- **Tasa de apertura**: Aperturas / Entregados
- **Tasa de clics**: Clics / Aperturas
- **Tasa de conversión**: Conversiones / Clics

### Reputación del remitente

- **Tasa de quejas**: Quejas de spam / Entregados
- **Tasa de cancelación**: Cancelaciones / Entregados
- **Aciertos a trampas de spam**: Correos enviados a trampas de spam

:::tip Métricas de referencia

Promedios de la industria:
- Tasa de apertura: 15-25%
- Tasa de clics: 2-5%
- Tasa de rebote: < 2%
- Tasa de quejas: < 0.1%

:::

## Flujos de trabajo avanzados

### Flujo de trabajo 1: Campaña goteo

Configura campañas automatizadas de múltiples toques:

1. **Día 1**: Correo de contacto inicial
2. **Día 3**: Seguimiento si no hay respuesta
3. **Día 7**: Último seguimiento con valor añadido
4. **Día 14**: Correo de cierre

Usa el [Programador](../automation/task-scheduling) para automatizar.

### Flujo de trabajo 2: Pruebas A/B

Prueba diferentes enfoques:

1. **Crea 2-3 variaciones de plantilla**
2. **Divide la lista de correos** en segmentos
3. **Envía diferentes plantillas** a cada segmento
4. **Mide los resultados** (tasa de apertura, tasa de respuesta)
5. **Usa la ganadora** para futuras campañas

### Flujo de trabajo 3: Campañas segmentadas

Dirígete a audiencias específicas:

1. **Extrae correos** por industria o ubicación
2. **Crea plantillas personalizadas** para cada segmento
3. **Envía campañas específicas** a cada segmento
4. **Analiza resultados** por segmento
5. **Optimiza el mensaje** según las respuestas

## Integración con la generación de leads

El flujo de trabajo completo de comunicación por correo:

1. **[Motores de búsqueda](./search-engines)**: Encuentra sitios web objetivo
2. **[Extracción de contactos](./contact-extraction)**: Recopila correos
3. **[AI Email Writer](../ai-outreach/ai-email-writer)**: Crea plantillas personalizadas
4. **[Biblioteca de conocimiento](../ai-outreach/knowledge-library)**: Proporciona contexto para la IA
5. **Envío masivo de correos**: Lanza campañas

## Próximos pasos

- [Configura el Asistente de Marketing IA](../ai-outreach/ai-marketing-assistant) para estrategia
- [Configura la programación de tareas](../automation/task-scheduling) para automatización
- [Revisa la configuración del sistema](../settings/system-settings)

---

**¿Listo para enviar campañas?** Comienza con un lote de prueba pequeño (20-50 correos) para verificar que todo funcione correctamente, luego escala tus operaciones de comunicación.
