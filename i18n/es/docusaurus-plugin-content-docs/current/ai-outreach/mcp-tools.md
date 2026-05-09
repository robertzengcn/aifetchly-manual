---
id: mcp-tools
title: MCP Tools
sidebar_label: MCP Tools
description: Extend AI capabilities by connecting to external tools and services using the Model Context Protocol (MCP).
---

# Herramientas MCP

MCP (Model Context Protocol) permite a aiFetchly conectarse a herramientas y servicios externos, ampliando las capacidades de la IA más allá de sus funciones integradas. Al añadir servidores MCP, el Asistente de Marketing IA puede realizar búsquedas web, acceder a bases de datos, llamar a APIs externas y ejecutar lógica de negocio personalizada.

## ¿Qué es MCP?

El **Model Context Protocol** es un estándar abierto que permite a las aplicaciones de IA interactuar con herramientas y fuentes de datos externas de forma segura y estructurada. Con MCP, aiFetchly puede:

- **Buscar en la web** información en tiempo real
- **Conectarse a bases de datos** y consultar datos
- **Llamar a APIs externas** para procesamiento especializado
- **Ejecutar herramientas personalizadas** creadas para su flujo de trabajo
- **Integrarse con servicios de terceros** (CRM, analíticas, etc.)

Cada servidor MCP expone un conjunto de **herramientas** — funciones que la IA puede llamar durante una conversación. Por ejemplo, un servidor de búsqueda web podría exponer una herramienta `search`, y un servidor de base de datos podría exponer una herramienta `query`.

## Acceso a las herramientas MCP

Los servidores MCP se gestionan desde la interfaz de chat del **Asistente de Marketing IA**:

1. Abra el Asistente de Marketing IA (haga clic en el icono de chat o presione `Cmd/Ctrl + K`)
2. Haga clic en el botón **MCP Tools** (icono de servidor/red) en la barra de herramientas del chat
3. Se abre el diálogo de gestión de herramientas MCP

:::info Dónde encontrarlo

Las herramientas MCP se acceden desde la interfaz de Chat IA, no desde la página principal de Configuración. Abra cualquier sesión de chat IA para encontrar el gestor de herramientas MCP.

:::

## Añadir servidores MCP

### Paso 1: Abrir el diálogo de añadir

1. En el diálogo de herramientas MCP, haga clic en **Add Server** (o el botón **+**)
2. Se abre el diálogo para añadir un servidor MCP

### Paso 2: Elegir el modo de entrada

Puede añadir servidores de dos formas:

- **Modo formulario**: Rellenar campos individuales (recomendado para principiantes)
- **Modo JSON**: Pegar un bloque de configuración JSON (más rápido para configuración masiva, compatible con el formato de Claude Desktop)

### Paso 3: Configurar el servidor

#### Modo formulario

| Campo | Descripción | Obligatorio |
|-------|-------------|----------|
| **Server Name** | Un nombre descriptivo para este servidor | Sí |
| **Transport Type** | Cómo conectarse: `Stdio`, `SSE` o `WebSocket` | Sí |
| **Host / Command** | Nombre de host (para SSE/WebSocket) o comando a ejecutar (para Stdio) | Sí |
| **Port** | Número de puerto (no necesario para Stdio) | Para SSE/WebSocket |
| **Authentication Type** | `None`, `API Key`, `Bearer Token` o `Custom` | No |
| **Timeout** | Tiempo de espera de la solicitud en milisegundos (predeterminado: 30000) | No |
| **Enabled** | Si el servidor está activo (predeterminado: habilitado) | No |

#### Modo JSON

El modo JSON acepta el formato estándar `mcpServers` utilizado por Claude Desktop y otros clientes MCP:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uvx",
      "args": ["package-name"]
    }
  }
}
```

**Propiedades JSON admitidas:**

| Propiedad | Descripción |
|----------|-------------|
| `command` | Comando a ejecutar (para transporte Stdio) |
| `args` | Array de argumentos del comando |
| `url` | URL del servidor (para SSE/WebSocket) |
| `host` | Nombre de host o dirección IP |
| `port` | Número de puerto |
| `transport` | Sobrescritura del tipo de transporte |
| `enabled` | Habilitar/deshabilitar al añadir (predeterminado: true) |
| `authType` | Tipo de autenticación |
| `authConfig` | Credenciales de autenticación |
| `timeout` | Tiempo de espera de solicitud en ms |

Puede añadir varios servidores en un solo bloque JSON añadiendo más entradas bajo `mcpServers`.

:::tip Usar Cargar ejemplo

Haga clic en **Load Example** en el modo JSON para ver una configuración de ejemplo que puede modificar.

:::

### Paso 4: Guardar

Haga clic en **Add** para guardar la configuración del servidor. El servidor aparece en la lista con estado **Enabled**.

## Gestión de servidores MCP

### Lista de servidores

El diálogo de herramientas MCP muestra todos los servidores configurados:

| Elemento | Descripción |
|---------|-------------|
| **Nombre del servidor** | Identificador que configuró |
| **Insignia de estado** | `Enabled` (verde) o `Disabled` (gris) |
| **Información de conexión** | Tipo de transporte, host y puerto |
| **Cantidad de herramientas** | Número de herramientas descubiertas |

### Habilitar/Deshabilitar un servidor

1. Localice el servidor en la lista
2. Haga clic en el icono del **interruptor** en la columna de Acciones
3. El estado del servidor cambia entre Habilitado y Deshabilitado

**Cuando está deshabilitado:** La IA no puede usar ninguna herramienta de este servidor, pero la configuración se conserva.

### Editar un servidor

1. Localice el servidor en la lista
2. Haga clic en el icono del **lápiz** en la columna de Acciones
3. Modifique los campos de configuración deseados
4. Haga clic en **Update** para guardar los cambios

:::info Restricción del modo JSON

El modo JSON solo está disponible al añadir nuevos servidores. Para editar un servidor existente, use el modo formulario.

:::

### Eliminar un servidor

1. Localice el servidor en la lista
2. Haga clic en el icono de la **papelera** en la columna de Acciones
3. Confirme la eliminación en el diálogo

:::warning Eliminación permanente

Eliminar un servidor elimina su configuración y todas las herramientas descubiertas. Esta acción no se puede deshacer.

:::

## Descubrir y gestionar herramientas

### Descubrir herramientas

Después de añadir un servidor, necesita descubrir las herramientas que proporciona:

1. Localice el servidor en la lista
2. Haga clic en el icono de la **lupa** (Discover Tools)
3. aiFetchly se conecta al servidor y recupera la lista de herramientas disponibles
4. Las herramientas descubiertas aparecen bajo la entrada del servidor

:::tip Descubrir después de cambios de configuración

Redescubra las herramientas después de cambiar los detalles de conexión de un servidor. Esto asegura que la lista de herramientas se mantenga sincronizada con el servidor.

:::

### Ver herramientas descubiertas

Haga clic en una entrada de servidor para expandirla y ver sus herramientas:

- Cada herramienta muestra su nombre
- Las herramientas tienen interruptores individuales de habilitar/deshabilitar
- Los nombres de herramientas tienen el prefijo `mcp_` cuando son usados por la IA

### Habilitar/Deshabilitar herramientas individuales

1. Expanda el servidor para ver sus herramientas
2. Use el **interruptor** junto a cada nombre de herramienta
3. Las herramientas deshabilitadas no estarán disponibles para la IA, incluso si el servidor está habilitado

Esto es útil cuando un servidor proporciona muchas herramientas pero solo desea que ciertas estén disponibles para la IA.

### Probar conexión

Para verificar si un servidor es accesible:

1. Localice el servidor en la lista
2. Haga clic en el icono de **verificación de red** (Test Connection)
3. aiFetchly intenta conectarse e informa del éxito o fracaso

## Tipos de transporte

### Stdio

**Mejor para:** Herramientas locales, programas de línea de comandos, paquetes npm

El transporte Stdio inicia un proceso local y se comunica a través de entrada/salida estándar.

**Configuración:**
- **Host/Comando**: El comando a ejecutar (ej. `node server.js`, `uvx package-name`)
- **Puerto**: No aplicable

**Comandos de ejemplo:**
- `npx @modelcontextprotocol/server-memory` — Grafo de conocimiento en memoria
- `uvx blender-mcp` — Integración con Blender
- `node /path/to/custom-server.js` — Servidor local personalizado

### SSE (Server-Sent Events)

**Mejor para:** Servicios basados en HTTP, herramientas alojadas en la nube

El transporte SSE se conecta a un endpoint HTTP que transmite los resultados de las herramientas.

**Configuración:**
- **Host**: Nombre de host o IP del servidor (ej. `api.example.com`)
- **Puerto**: Número de puerto del servidor (ej. `8080`)

### WebSocket

**Mejor para:** Servicios en tiempo real, comunicación bidireccional

El transporte WebSocket establece una conexión persistente para la comunicación de herramientas.

**Configuración:**
- **Host**: Nombre de host o IP del servidor
- **Puerto**: Número de puerto del servidor

## Autenticación

Los servidores MCP admiten varios métodos de autenticación:

| Tipo | Caso de uso | Campos |
|------|----------|--------|
| **None** | Servidores públicos/locales | No se necesitan credenciales |
| **API Key** | Servicios que requieren una clave API | API Key (campo de contraseña) |
| **Bearer Token** | Servicios basados en OAuth/token | Bearer Token (campo de contraseña) |
| **Custom** | Autenticación no estándar | Configuración JSON |

## Uso de herramientas MCP en el Chat IA

Una vez que los servidores MCP estén configurados y las herramientas descubiertas:

1. **Abra el Asistente de Marketing IA**
2. La IA detecta automáticamente todas las herramientas habilitadas de los servidores habilitados
3. Las herramientas aparecen como funciones disponibles que la IA puede llamar
4. La IA decide cuándo usar una herramienta según su consulta

### Ejemplo: Búsqueda web

```
Usuario: "Busca en la web las últimas tendencias de precios SaaS"
IA: [Llama a la herramienta de búsqueda de su servidor MCP de búsqueda web]
IA: "Aquí están las últimas tendencias de precios SaaS que encontré..."
```

### Ejemplo: Consulta de base de datos

```
Usuario: "¿Cuántos leads obtuvimos la semana pasada de nuestro sitio web?"
IA: [Llama a la herramienta de consulta de su servidor MCP de base de datos]
IA: "Según la consulta a la base de datos, recibió 247 leads la semana pasada..."
```

### Ejemplo: API personalizada

```
Usuario: "Verifica si nuestro competidor ha actualizado su página de precios"
IA: [Llama a la herramienta de monitoreo de su servidor MCP personalizado]
IA: "Sí, actualizaron su página de precios ayer. Aquí están los cambios..."
```

### Cómo la IA usa las herramientas

La IA sigue este proceso:

1. **Analiza su solicitud** para determinar si se necesita una herramienta
2. **Selecciona la herramienta apropiada** de las herramientas MCP disponibles
3. **Llama a la herramienta** con los parámetros necesarios
4. **Incorpora el resultado** en su respuesta

También puede pedir explícitamente a la IA que use una herramienta específica:
- "Usa la herramienta de búsqueda web para encontrar..."
- "Consulta la base de datos para..."
- "Llama a [nombre de herramienta] para..."

## Solución de problemas

### Error de conexión

**Causas posibles:**
- El servidor no está ejecutándose
- Host/puerto incorrecto
- El cortafuegos bloquea la conexión
- Las credenciales de autenticación son incorrectas

**Soluciones:**
1. Verifique que el servidor esté ejecutándose y accesible
2. Verifique la configuración de host y puerto
3. Use **Test Connection** para diagnosticar
4. Verifique las credenciales de autenticación
5. Verifique la configuración del cortafuegos y la red

### Fallo en el descubrimiento de herramientas

**Causas posibles:**
- El servidor no responde
- El servidor no implementa correctamente el protocolo MCP
- Tiempo de espera de conexión agotado

**Soluciones:**
1. Pruebe la conexión primero
2. Verifique que el servidor soporta el protocolo MCP
3. Aumente la configuración de tiempo de espera
4. Revise los logs del servidor en busca de errores

### La IA no usa herramientas MCP

**Causas posibles:**
- El servidor está deshabilitado
- Todas las herramientas están deshabilitadas
- Las herramientas aún no han sido descubiertas
- La IA no reconoce que la consulta necesita una herramienta

**Soluciones:**
1. Verifique que el servidor esté habilitado (insignia verde)
2. Verifique que las herramientas individuales estén habilitadas
3. Descubra herramientas si el conteo muestra 0
4. Mencione explícitamente la herramienta en su solicitud

### El servidor muestra 0 herramientas

**Soluciones:**
1. Haga clic en **Discover Tools** para obtener la lista de herramientas
2. Verifique que el servidor esté ejecutándose durante el descubrimiento
3. Compruebe que el servidor expone herramientas a través del protocolo MCP
4. Redescubra después de actualizaciones del servidor

## Mejores prácticas

### 1. Comience con servidores esenciales

Solo añada los servidores que necesita:
- Demasiados servidores aumentan la complejidad
- Cada conexión de servidor consume recursos
- Comience con uno o dos, añada más según sea necesario

### 2. Descubra herramientas después de la configuración

Siempre descubra herramientas después de:
- Añadir un nuevo servidor
- Cambiar la configuración de conexión
- Actualizar el software del servidor

### 3. Use control a nivel de herramienta

Deshabilite herramientas individuales que no necesita:
- Reduce el ruido para la IA
- Previene el uso accidental de herramientas potentes
- Mantiene la lista de herramientas manejable

### 4. Pruebe antes de usar

- Use **Test Connection** después de la configuración
- **Discover Tools** para verificar la disponibilidad de herramientas
- Intente una consulta simple en el Chat IA para confirmar de extremo a extremo

### 5. Mantenga las credenciales seguras

- Trate las claves API y tokens como contraseñas
- No comparta configuraciones de servidores con partes no confiables
- Revocar credenciales al eliminar servidores

### 6. Monitoree el uso de herramientas

- Revise las respuestas de la IA para detectar uso inesperado de herramientas
- Deshabilite herramientas que produzcan resultados poco fiables
- Ajuste los tiempos de espera del servidor si las respuestas son lentas

## Integración con otras funciones

### Habilidades IA

Las herramientas MCP y las Habilidades IA trabajan juntas:
- Las habilidades proporcionan conocimiento y lógica específicos del dominio
- Las herramientas MCP proporcionan datos y acciones externas
- Ambas están disponibles en el Asistente de Marketing IA

### Biblioteca de conocimientos

Las herramientas MCP complementan la Biblioteca de conocimientos:
- La Biblioteca de conocimientos proporciona su contexto de negocio
- Las herramientas MCP proporcionan datos externos en tiempo real
- Combinadas para respuestas integrales de la IA

## Próximos pasos

- [Conozca el Asistente de Marketing IA](./ai-marketing-assistant)
- [Explore las Habilidades IA](./ai-skills)
- [Configure la Biblioteca de conocimientos](./knowledge-library)

---

**¿Listo para ampliar su IA?** Añada su primer servidor MCP, descubra sus herramientas y comience a usar capacidades externas en sus conversaciones con la IA.
