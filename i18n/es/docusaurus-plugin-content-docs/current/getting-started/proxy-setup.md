---
id: proxy-setup
title: Configuración de Proxy
sidebar_label: Configuración de Proxy
description: Aprenda cómo configurar y gestionar proxies para un information organization web seguro y eficiente en aiFetchly.
---

# Guía de Configuración de Proxy

El uso de proxies es **opcional** con aiFetchly. Puede ejecutar tareas de búsqueda sin proxies, pero agregar proxies le ayuda a:

- **Evitar bloqueos de IP** de motores de búsqueda y sitios web
- **Scrapear a escala** distribuyendo solicitudes a través de múltiples IPs
- **Mantener el anonimato** mientras recopila leads
- **Acceder a contenido geo-restringido** de diferentes regiones

:::info Función Opcional

Los proxies no son necesarios para usar aiFetchly. Puede comenzar a hacer information organization inmediatamente sin configurar proxies. Agregue proxies solo si necesita evitar limitaciones de velocidad o acceder a contenido geográfico específico.

:::

## Comprender los Proxies

Un servidor proxy actúa como intermediario entre su computadora y los sitios web que scrapea. En lugar de que el sitio web vea su dirección IP, ven la dirección IP del proxy.

### Tipos de Proxy Soportados

aiFetchly soporta tres protocolos de proxy:

| Protocolo | Descripción | Caso de Uso |
|----------|-------------|-------------|
| **HTTP** | Proxy HTTP básico | Information Organization web general, sitios no-SSL |
| **HTTPS** | Proxy HTTP seguro | Sitios web seguros (HTTPS), recomendado para la mayoría del information organization |
| **SOCKS5** | Socket Secure 5 | Usuarios avanzados, soporta más protocolos, mejor rendimiento |

:::tip Protocolo Recomendado

Para la mayoría de los casos de uso, se recomiendan los proxies **HTTPS** ya que funcionan con sitios web HTTP y HTTPS.

:::

### Formato del Proxy

Cada proxy requiere la siguiente información:

- **Host/IP** - La dirección del servidor proxy (ej., `192.168.1.1` o `proxy.ejemplo.com`)
- **Puerto** - El número de puerto (ej., `8080`, `3128`, `1080`)
- **Protocolo** - http, https o socks5
- **Nombre de usuario** (opcional) - Para autenticación
- **Contraseña** (opcional) - Para autenticación

Ejemplo: `192.168.1.1:8080` con nombre de usuario `user1` y contraseña `pass123`

## Agregar Proxies Manualmente

### Paso 1: Abrir la Gestión de Proxies

1. Inicie aiFetchly
2. Navegue a **Proxy** en el menú de navegación izquierdo
3. Verá la página de gestión de proxies con una lista de sus proxies

### Paso 2: Agregar un Solo Proxy

1. Haga clic en el botón **Add Proxy** (icono +) en la esquina superior derecha
2. Complete los campos requeridos:

   - **Host/IP**: Ingrese la dirección o IP del servidor proxy
   - **Port**: Ingrese el número de puerto
   - **Protocol**: Seleccione del menú desplegable (HTTP, HTTPS o SOCKS5)
   - **Username**: (Opcional) Ingrese si se requiere autenticación
   - **Password**: (Opcional) Ingrese si se requiere autenticación

3. Haga clic en **Submit** para guardar el proxy

:::info Autenticación

Si su proveedor de proxy requiere autenticación, debe ingresar el nombre de usuario y la contraseña. Los proxies sin autenticación fallarán al ser probados.

:::

### Paso 3: Probar el Proxy

Después de agregar proxies, debe verificar que funcionen:

1. Opcionalmente establezca **Check timeout** en la barra de herramientas (1–60 segundos por proxy; valor predeterminado 10 segundos). Este límite se aplica tanto a la prueba de conectividad como a la verificación de Google.
2. Seleccione el proxy o proxies que desea probar (casillas de verificación en las filas).
3. Haga clic en **Check Proxy**.
4. aiFetchly actualiza dos tipos de resultados:

**Status (conectividad)** — si el proxy puede retransmitir tráfico (por ejemplo, un túnel hacia un punto de prueba):

- **Pass** — La verificación básica del proxy fue exitosa.
- **Failure** — La verificación básica falló (host/puerto incorrecto, autenticación o red).
- **Unknown** — Aún no probado.

**Google Pass** — si el mismo proxy puede alcanzar **Google** sin ser bloqueado como tráfico automatizado. Después de que **Status** muestre **Pass**, la aplicación ejecuta una verificación separada (navegador sin interfaz gráfica hacia Google). Esa columna puede actualizarse un momento después:

- **Pass** — La verificación de Google fue exitosa; la IP tiene más probabilidades de funcionar para information organization basado en Google.
- **Fail** — Google bloqueó, desafió o la verificación dio error (común para IPs de centros de datos o proxies sobreutilizados).
- **Not Checked** — Sin resultado de Google aún (el proxy nunca pasó la verificación básica, o no se ha verificado desde que se agregó esta función).

Si **Status** es **Failure**, **Google Pass** permanece como **Not Checked** (el paso de Google solo se ejecuta cuando la verificación básica pasa).

## Importar Proxies por Lote

Si tiene múltiples proxies, puede importarlos todos a la vez usando un archivo CSV.

### Paso 1: Descargar la Plantilla

1. Vaya a **Proxy** en el menú de navegación
2. Haga clic en **Batch Upload Proxy**
3. Haga clic en **Download Template** para obtener la plantilla CSV

### Paso 2: Preparar su Archivo CSV

La plantilla CSV tiene la siguiente estructura:

```csv
host,port,protocols,user,pass
192.168.1.1,8080,http,username1,password1
192.168.1.2,3128,https,username2,password2
192.168.1.3,1080,socks5,username3,password3
192.168.1.4,8080,http,,
```

**Directrices de Formato CSV:**

- **host** - Requerido: Dirección IP o nombre de host del proxy
- **port** - Requerido: Número de puerto
- **protocols** - Requerido: Debe ser "http", "https" o "socks5"
- **user** - Opcional: Nombre de usuario (dejar vacío si no hay autenticación)
- **pass** - Opcional: Contraseña (dejar vacío si no hay autenticación)

:::tip Formato CSV

- Su archivo puede usar los mismos encabezados de columna que la plantilla (`host`, `port`, `protocols`, `user`, `pass`) u omitir la fila de encabezados si sus columnas están en ese orden
- Use comas para separar los campos
- Deje los campos de usuario/contraseña vacíos si su proxy no requiere autenticación
- Guarde el archivo como `.csv` (valores separados por comas)

:::

### Paso 3: Importar el CSV

1. Haga clic en **Batch Upload**
2. En **Upload File**, seleccione su CSV (o use **Paste Text** para un proxy por línea)
3. Los proxies analizados aparecen en la tabla de vista previa
4. Opcional: haga clic en **Check Proxies** para ejecutar una **prueba rápida de conectividad** en la lista de vista previa (esto no es lo mismo que la verificación completa de **Google Pass** en los proxies guardados)
5. Haga clic en **Import proxy** (mostrado como **Import All** en algunas configuraciones regionales) para agregarlos a su biblioteca
6. Después de la importación, abra la lista principal de proxies, seleccione las nuevas filas y haga clic en **Check Proxy** para registrar **Status** y **Google Pass** para las tareas que usan Google

Para limpiar la lista principal después de las verificaciones, use **remove failure proxy** (elimina las filas cuyo **Status** es **Failure**).

## Gestionar su Lista de Proxies

### Ver Proxies

La lista de proxies muestra todos sus proxies con la siguiente información:

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único |
| **Host** | IP/nombre de host del servidor proxy |
| **Port** | Puerto del proxy |
| **Username** | Nombre de usuario de autenticación (si corresponde) |
| **Password** | Contraseña de autenticación (oculta por defecto; use **Columns** para mostrarla) |
| **Protocol** | HTTP, HTTPS o SOCKS5 |
| **Status** | Verificación básica: Pass, Failure o Unknown |
| **Check Time** | Última vez que se probó el proxy |
| **Google Pass** | Verificación específica de Google: Pass, Fail o Not Checked (ver [verificación Google Pass](#verificación-google-pass)) |
| **Actions** | Botones para editar o eliminar |

Use el control **Columns** en la barra de herramientas para mostrar u ocultar columnas (por ejemplo, la contraseña está desactivada por defecto por seguridad).

### Editar Proxies

1. Busque el proxy que desea modificar en la lista
2. Haga clic en el botón **Edit** (icono de lápiz)
3. Modifique los campos según sea necesario
4. Haga clic en **Submit** para guardar los cambios

### Eliminar Proxies

1. Busque el proxy que desea eliminar
2. Haga clic en el botón **Delete** (icono de papelera)
3. Confirme la eliminación

### Operaciones Masivas

- **Check Proxy** — Con una o más filas seleccionadas, ejecuta la verificación completa (**Status** más **Google Pass** cuando la verificación básica pasa). No se verifica nada hasta que seleccione al menos un proxy.
- **remove failure proxy** — Elimina todos los proxies guardados cuyo **Status** es **Failure** en una sola acción

## Usar Proxies en Tareas de Búsqueda

Una vez que haya agregado y probado sus proxies, puede usarlos en tareas de búsqueda y information organization.

### Paso 1: Crear o Editar una Tarea de Búsqueda

1. Navegue a **Search** → **Search Form**
2. Cree una nueva tarea de búsqueda o edite una existente

### Paso 2: Seleccionar Proxies

1. Busque la sección **Proxy** en la configuración de la tarea
2. Haga clic en el botón **Choose Proxy**
3. Aparecerá un diálogo de selección de proxies mostrando todos sus proxies
4. Seleccione uno o más proxies de la lista:
   - Preferir proxies con **Status** **Pass** y **Google Pass** **Pass** cuando su tarea usa Google o flujos que dependen de Google
   - Puede seleccionar múltiples proxies para balanceo de carga

5. Haga clic en **Confirm** para agregar los proxies seleccionados a su tarea

### Paso 3: Ejecutar su Tarea

Cuando ejecute la tarea de búsqueda, aiFetchly:

- Distribuirá las solicitudes entre sus proxies seleccionados
- Rotará automáticamente entre los proxies
- Manejará los fallos de proxy de forma elegante
- Continuará haciendo information organization incluso si algunos proxies fallan

:::info Rotación de Proxies

Cuando usa múltiples proxies, aiFetchly rota automáticamente entre ellos para distribuir la carga y evitar limitaciones de velocidad.

:::

## Monitoreo de Salud de los Proxies

Las verificaciones de salud regulares aseguran que sus proxies estén funcionando correctamente.

### Cuándo se ejecutan las verificaciones

- **Proxies guardados:** Use **Check Proxy** después de seleccionar filas. La lista se actualiza mientras se ejecutan las verificaciones; cuando el progreso llega al 100%, los resultados están actualizados para **Status**; **Google Pass** puede finalizar ligeramente después para los proxies que pasaron el paso básico.
- **Diálogo de carga por lotes:** **Check Proxies** solo valida la conectividad de las filas de vista previa antes de la importación. Ejecute **Check Proxy** en la lista principal después de la importación para **Google Pass**.

### Tiempo de Espera de la Verificación de Salud

En la página **Proxy**, establezca **Check timeout** (1–60 segundos, valor predeterminado **10**). El mismo valor se aplica a la verificación básica y a la verificación del navegador de Google para los proxies guardados.

### Interpretar los Resultados de Estado

| Estado | Significado | Acción |
|--------|------------|--------|
| **Pass** (verde) | La verificación básica del proxy fue exitosa | Listo para uso general; confirme **Google Pass** si necesita Google |
| **Failure** (rosa) | El proxy no funciona | Eliminar o reemplazar |
| **Unknown** (gris) | Aún no probado | Ejecutar verificación de salud |

## Verificación Google Pass

**Google Pass** responde a la pregunta: "A través de este proxy, ¿podemos cargar Google sin un bloqueo evidente?" Utiliza una sesión de navegador sin interfaz gráfica (similar a la navegación real), que es más estricta que una simple prueba de ping o túnel HTTP.

- **Pass** — Señal útil para information organization orientado a Google; no es una garantía para cada superficie o volumen de Google.
- **Fail** — A menudo IPs de centros de datos, proxies reciclados o IPs ya marcadas; pruebe otro proxy o proveedor.
- **Not Checked** — Ejecute **Check Proxy** en los proxies guardados, o el proxy aún no ha pasado la verificación básica.

**Google Pass** puede ser **Fail** incluso cuando **Status** es **Pass**, porque Google aplica señales adicionales de bots y abuso más allá de la conectividad genérica.

## Mejores Prácticas

### 1. Use Proveedores de Proxy Confiables

Invierta en servicios de proxy de calidad. Los proxies gratuitos suelen ser lentos, poco confiables o ya están bloqueados por los principales sitios web.

### 2. Verificaciones de Salud Regulares

Pruebe sus proxies regularmente, especialmente antes de ejecutar tareas de information organization a gran escala.

### 3. Elimine los Proxies Fallidos

Mantenga su lista de proxies limpia eliminando los proxies fallidos de inmediato.

### 4. Use Múltiples Proxies

Para information organization a gran escala, use múltiples proxies para:
- Distribuir la carga
- Reducir el riesgo de bloqueos de IP
- Aumentar la velocidad de information organization

### 5. Relacione la Ubicación del Proxy con el Objetivo

Si hace information organization de contenido geográfico específico, use proxies de la misma región que su público objetivo.

### 6. Monitoree el Rendimiento de los Proxies

Lleve un registro de qué proxies tienen mejor rendimiento y priorícelos en sus tareas.

### 7. No Sobrecargue Proxies Individuales

Incluso los proxies que funcionan pueden ser bloqueados si se sobrecargan. Rótelos regularmente.

## Solución de Problemas de Proxies

### Todos los Proxies Muestran "Failure"

**Posibles causas:**
- Problemas de conectividad de red
- Credenciales de proxy incorrectas
- El servicio del proveedor de proxy está caído

**Soluciones:**
- Verifique su conexión a internet
- Confirme el nombre de usuario/contraseña con su proveedor de proxy
- Contacte a su proveedor de proxy

### Algunos Proxies Fallan Intermitentemente

**Posibles causas:**
- El servidor proxy está sobrecargado
- Servicio de proxy inestable

**Soluciones:**
- Elimine los proxies poco confiables
- Use los resultados de las verificaciones de salud para identificar proxies estables
- Considere actualizar su servicio de proxy

### Los Proxies Funcionan en las Pruebas pero Fallan Durante el Information Organization

**Posibles causas:**
- El sitio web objetivo tiene medidas anti-information organization más estrictas
- El proxy tiene limitación de velocidad por parte del objetivo
- **Status** es **Pass** pero **Google Pass** es **Fail** mientras la tarea depende de Google

**Soluciones:**
- Use más proxies para distribuir las solicitudes
- Reduzca la frecuencia de solicitudes
- Pruebe con diferentes proveedores de proxy
- Para flujos de trabajo que dependen mucho de Google, favorezca proxies con **Google Pass** **Pass**

### No se Puede Conectar al Proxy

**Posibles causas:**
- El firewall está bloqueando la conexión del proxy
- Configuración de proxy incorrecta
- El servidor proxy está fuera de línea

**Soluciones:**
- Verifique la configuración del firewall
- Confirme el host y puerto del proxy
- Pruebe el proxy en un navegador o con curl

## Consideraciones de Seguridad

### Proteja sus Credenciales de Proxy

- Trate los nombres de usuario y contraseñas de proxy como datos sensibles
- No comparta listas de proxies con usuarios no autorizados
- Use métodos seguros para transferir información de proxies

### Use Proxies HTTPS

Los proxies HTTPS cifran el tráfico entre usted y el servidor proxy, proporcionando mayor seguridad.

### Rote los Proxies Regularmente

Cambie regularmente su grupo de proxies para mantener la seguridad y evitar la detección.

## Próximos Pasos

Ahora que ha configurado sus proxies:

- [Aprenda sobre information organization de motores de búsqueda](../lead-generation/search-engines)
- [Configure la extracción de contactos](../lead-generation/contact-extraction)
- [Configure la Biblioteca de Conocimiento](../ai-outreach/knowledge-library)

---

**¿Necesita proxies?** Considere estos proveedores de proxy populares:
- Bright Data (anteriormente Luminati)
- Smartproxy
- Oxylabs
- Storm Proxies
- ProxyMesh

*Nota: Esto no es una recomendación. Investigue y elija según sus necesidades específicas.*
