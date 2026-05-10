---
id: ai-email-writer
title: AI Email Writer
sidebar_label: AI Email Writer
description: Crea plantillas de correo electrónico personalizadas generadas por IA con sustitución de variables e integración con la Biblioteca de Conocimiento.
---

# AI Email Writer

El AI Email Writer es el sistema inteligente de creación de correos electrónicos de aiFetchly. Genere correos electrónicos de divulgación personalizados, cree plantillas reutilizables con variables dinámicas y aproveche su Biblioteca de Conocimiento para mensajes contextualizados.

## Descripción general de la generación de correos con IA

Las plantillas de correo electrónico tradicionales son estáticas y genéricas. El AI Email Writer de aiFetchly:

- **Genera contenido único** para cada destinatario
- **Incorpora su base de conocimiento** a través de la integración RAG
- **Personaliza a escala** manteniendo la calidad
- **Se adapta a diferentes contextos** y tipos de destinatarios

:::info IA + Biblioteca de Conocimiento

Para obtener los mejores resultados, [cargue documentos relevantes](./knowledge-library) en su Biblioteca de Conocimiento antes de generar correos electrónicos. La IA hará referencia a sus productos, servicios y propuestas de valor específicas.

:::

## Descripción general de las plantillas de correo electrónico

Las plantillas son la base de sus campañas de correo electrónico. Contienen:

1. **Contenido estático**: Mensaje base que se mantiene consistente
2. **Variables dinámicas**: Marcadores de posición que se reemplazan con datos específicos del destinatario
3. **Generación con IA**: Creación de contenido opcional potenciada por IA
4. **Formato enriquecido**: Soporte para varios estilos de texto

## Creación de plantillas de correo electrónico

### Paso 1: Ir a Email Marketing

1. Haga clic en **Email Marketing** en el menú de navegación izquierdo
2. Seleccione **Templates** en el submenú
3. Haga clic en **Create New Template**

### Paso 2: Información de la plantilla

Ingrese los siguientes detalles:

#### Título (Obligatorio)

- **Propósito**: Identificar la plantilla en su lista
- **Ejemplo**: "Divulgación de Lanzamiento de Producto", "Propuesta de Asociación"
- **Directriz**: Use nombres descriptivos y específicos

#### Descripción (Opcional)

- **Propósito**: Proporcionar contexto sobre el caso de uso de la plantilla
- **Ejemplo**: "Divulgación inicial para el lanzamiento de un nuevo producto a clientes potenciales calificados"
- **Directriz**: Incluir cuándo usarla, audiencia objetivo y mensajes clave

### Paso 3: Contenido de la plantilla

Escriba el contenido de su correo electrónico en el editor de texto enriquecido.

#### Uso de variables

Las variables son marcadores de posición que se reemplazan con datos reales al enviar correos electrónicos.

**Variables disponibles:**

| Variable | Descripción | Ejemplo de salida |
|----------|-------------|-------------------|
| `{$send_time}` | Marca de tiempo actual | "2024-01-15 10:30 AM" |
| `{$sender}` | Nombre del remitente | "Juan García" |
| `{$receiver_email}` | Correo del destinatario | "contacto@empresa.com" |
| `{$url}` | URL de origen | "https://empresa.com" |
| `{$description}` | Texto descriptivo | "Empresa de software en Madrid" |

**Ejemplo de plantilla con variables:**

```
Asunto: Oportunidad de colaboración de {$sender}

Hola,

Encontré su sitio web ({$url}) y quedé impresionado por su trabajo en {$description}.

Me pongo en contacto porque creo que hay una gran oportunidad de colaboración entre nuestras empresas.

¿Estaría disponible para una breve llamada esta semana?

Saludos cordiales,
{$sender}

Enviado: {$send_time}
```

**Después de la sustitución de variables:**

```
Asunto: Oportunidad de colaboración de Juan García

Hola,

Encontré su sitio web (https://startuptech.com) y quedé impresionado por su trabajo en Desarrollo de Software.

Me pongo en contacto porque creo que hay una gran oportunidad de colaboración entre nuestras empresas.

¿Estaría disponible para una breve llamada esta semana?

Saludos cordiales,
Juan García

Enviado: 2024-01-15 10:30 AM
```

### Paso 4: Contenido generado por IA (Opcional)

Para la generación de contenido con IA:

1. **Active "Use AI Generation"**
2. **Proporcione un prompt** describiendo lo que desea
3. **Habilite RAG Context** para usar la Biblioteca de Conocimiento
4. **Haga clic en Generate** para crear el contenido

**Ejemplos de prompts:**
- "Escriba un correo electrónico de presentación amigable para nuestros servicios de marketing"
- "Cree una divulgación personalizada mencionando las características de nuestra plataforma SaaS"
- "Genere un correo electrónico de propuesta de asociación"

:::tip Integración IA + RAG

Cuando el contexto RAG está habilitado, la IA hará referencia automáticamente a su Biblioteca de Conocimiento para incluir información precisa sobre sus productos, servicios y propuestas de valor.

:::

### Paso 5: Vista previa y prueba

1. **Haga clic en "Preview"** para ver la plantilla con variables de ejemplo
2. **Pruebe diferentes combinaciones de variables**
3. **Edite el contenido** según sea necesario
4. **Guarde la plantilla** cuando esté satisfecho

## Gestión de plantillas

### Lista de plantillas

Vaya a **Email Marketing** → **Templates** para ver todas las plantillas.

**Información de la plantilla:**
- Título
- Descripción
- Fecha de creación
- Fecha de última modificación
- Contador de uso

### Acciones de plantilla

| Acción | Descripción |
|--------|-------------|
| **Edit** | Modificar el contenido y las variables de la plantilla |
| **Duplicate** | Crear una copia de la plantilla |
| **Delete** | Eliminar la plantilla (se requiere confirmación) |
| **Preview** | Ver la plantilla con variables de ejemplo |
| **Use in Campaign** | Seleccionar para envío masivo de correos |

### Mejores prácticas para plantillas

#### 1. Líneas de asunto claras

- ✅ "Oportunidad de Asociación: [Su Empresa] + [Nuestra Empresa]"
- ✅ "Pregunta rápida sobre [Su Industria]"
- ❌ "Hola" o "Hola"

#### 2. Personalización

- Use variables para personalizar el contenido
- Mencione detalles específicos sobre el destinatario
- Haga referencia a su sitio web, industria o trabajo

#### 3. Enfoque de valor primero

- Comience con el valor, no solo con una propuesta de venta
- Explique beneficios, no solo características
- Sea claro sobre qué beneficio obtienen

#### 4. Llamada a la acción clara

- Un solo siguiente paso claro
- Fácil de entender
- Baja fricción (por ejemplo, "Responda a este correo")

#### 5. Tono profesional

- Revise la ortografía y gramática
- Mantenga un lenguaje profesional
- Evite un lenguaje excesivamente informal o de ventas agresiva

## Ejemplos de plantillas

### Ejemplo 1: Divulgación de producto

**Asunto:** Mejore su flujo de trabajo en [Industria] con [Nombre del Producto]

```
Hola,

Me di cuenta en {$url} que están en el sector de [Industria].

Me pongo en contacto porque nuestra plataforma ha ayudado a empresas como [Descripción]
a reducir su tiempo de flujo de trabajo hasta en un 40%.

¿Estaría interesado en una breve demostración para ver cómo podría funcionar para {$receiver_email}?

Saludos,
{$sender}
```

### Ejemplo 2: Propuesta de asociación

**Asunto:** Oportunidad de Asociación entre [Su Empresa] y [Nuestra Empresa]

```

Hola,

He estado siguiendo [Descripción] (de {$url}) y creo que hay una
gran sinergia entre nuestras empresas.

Hemos estado trabajando en soluciones para [Industria] y creemos que una asociación
podría ser mutuamente beneficiosa. Nuestras empresas sirven mercados similares con
ofertas complementarias.

¿Estaría abierto a una breve llamada para explorar posibilidades?

Saludos cordiales,
{$sender}
```

### Ejemplo 3: Colaboración de contenido

**Asunto:** Oportunidad de Colaboración de Contenido

```
Hola,

Encontré su contenido en {$url} y quedé impresionado por su
experiencia en [Industria].

Le escribo para explorar una posible colaboración de contenido. Nuestra audiencia
está muy interesada en [Tema], y creo que sus ideas aportarían
un valor tremendo.

¿Estaría interesado en discutir una publicación invitada o un webinar conjunto?

Saludos,
{$sender}
```

### Ejemplo 4: Presentación de servicios

**Asunto:** [Tipo de Servicio] para [Su Empresa]

```
Hola,

Estaba investigando empresas en el sector de [Industria] y encontré
{$url}.

Noté que son [Descripción] y pensé que nuestro [Tipo de Servicio] podría
ser un buen ajuste para su etapa actual. Hemos ayudado a empresas similares
a lograr [Resultado Específico].

¿Estaría abierto a una breve conversación sobre sus objetivos y
cómo podríamos ayudarle?

Saludos cordiales,
{$sender}
```

## Funciones avanzadas

### Contenido condicional

Cree variaciones basadas en los datos del destinatario:

```
{$if_industry}
Si están en [Industria], mencione casos de estudio relevantes
{$endif}

{$if_company_size}
Ajuste el mensaje según el tamaño de la empresa
{$endif}
```

### Soporte multiidioma

Cree plantillas en múltiples idiomas:

1. **Duplicar la plantilla** para cada idioma
2. **Traduzca el contenido** manteniendo la estructura de variables
3. **Use la plantilla apropiada** según la ubicación del destinatario

### Pruebas A/B

Cree múltiples variaciones de plantillas:

1. **Duplicar la plantilla** 2-3 veces
2. **Haga un cambio** por versión (línea de asunto, apertura, llamada a la acción)
3. **Pruebe con lotes pequeños** primero
4. **Mida los resultados** y use la versión ganadora

### Bloques de contenido dinámico

Use diferentes secciones de contenido basadas en variables:

```
{$value_proposition_1}
Alternativa: {$value_proposition_2}
Alternativa: {$value_proposition_3}
```

## Integración con el envío masivo de correos

Las plantillas se usan en el flujo de trabajo de envío masivo de correos:

1. **Elija una plantilla** en el Paso 2 del proceso de envío masivo
2. **Las variables se completan automáticamente** desde su lista de correos
3. **Cada destinatario recibe un correo electrónico personalizado**
4. **La IA puede mejorar** la plantilla con contenido de la Biblioteca de Conocimiento

Para instrucciones detalladas, consulte [Batch Email Sending](../lead-generation/batch-email-sending).

## Solución de problemas

### Variables no reemplazadas

**Posibles causas:**
- Nombres de variables mal escritos
- Datos faltantes en la lista de correos
- Sintaxis de variable incorrecta

**Soluciones:**
1. Verifique la sintaxis de la variable: `{$variable_name}`
2. Compruebe que existan datos para todas las variables
3. Pruebe con la vista previa antes de enviar

### La generación con IA no funciona

**Posibles causas:**
- Servicio de IA no configurado
- Contexto RAG habilitado pero sin documentos en la Biblioteca de Conocimiento
- Prompt demasiado vago

**Soluciones:**
1. Verifique la configuración de IA en la configuración del sistema
2. Cargue documentos relevantes en la Biblioteca de Conocimiento
3. Proporcione prompts específicos y detallados
4. Intente primero con RAG deshabilitado

### Plantilla demasiado genérica

**Posibles causas:**
- Uso excesivo de texto estático
- No hay suficientes variables
- Generación con IA deshabilitada

**Soluciones:**
1. Agregue más variables para personalización
2. Habilite la generación con IA para contenido dinámico
3. Use el contexto RAG para información específica
4. Cree múltiples plantillas para diferentes casos de uso

## Resumen de mejores prácticas

### HACER ✅

- **Personalice el contenido** con variables
- **Pruebe a fondo** antes de las campañas
- **Mantenga las líneas de asunto** claras y atractivas
- **Aporte valor** desde el principio
- **Use llamadas a la acción claras**
- **Revise** todas las plantillas
- **Cree variaciones** para diferentes audiencias
- **Aproveche la IA** con contexto RAG

### NO HACER ❌

- **No sea demasiado vendedor**
- **No use líneas de asunto vagas**
- **No envíe sin probar**
- **No ignore el contexto del destinatario**
- **No haga correos demasiado largos**
- **No use formato excesivo**
- **No olvide la llamada a la acción**
- **No envíe desde direcciones "no-reply"**

## Próximos pasos

Después de crear sus plantillas:

- [Configurar servicios de correo (SMTP)](../lead-generation/batch-email-sending#configuración-de-servicios-de-correo-electrónico)
- [Configurar el envío masivo de correos](../lead-generation/batch-email-sending)
- [Usar el Asistente de Marketing IA](./ai-marketing-assistant) para estrategia

---

**¿Listo para crear plantillas?** Comience con una plantilla de divulgación simple y agregue gradualmente más personalización y contenido generado por IA a medida que se familiarice con el sistema.
