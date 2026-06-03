---
id: google-maps-scraper
title: Google Maps Scraper
sidebar_label: Google Maps
description: Extrae información comercial de Google Maps por palabra clave y ubicación con el Google Maps Scraper de aiFetchly.
---

# Google Maps Scraper

El Google Maps Scraper de aiFetchly te permite buscar negocios locales en Google Maps por palabra clave y ubicación. Recopila datos comerciales completos incluyendo nombres, categorías, calificaciones, reseñas, direcciones, números de teléfono y URLs de sitios web, todo directamente desde los resultados de búsqueda de Google Maps.

## Descripción general

El Google Maps Scraper proporciona una interfaz optimizada para extraer datos de negocios locales:

1. **Ingresa una palabra clave** (por ejemplo, "dentista", "restaurante italiano")
2. **Ingresa una ubicación** (por ejemplo, "Nueva York", "Londres", "90210")
3. **Configura las opciones** (resultados máximos, inclusión de sitio web, reseñas, etc.)
4. **Inicia la búsqueda** y supervisa el progreso en tiempo real
5. **Exporta los resultados** como CSV o JSON

:::tip Mejor uso para

El Google Maps Scraper es ideal para encontrar negocios locales con datos estructurados que incluyen direcciones verificadas, números de teléfono, calificaciones y horarios de atención, información más confiable que los resultados de búsqueda web generales.

:::

## Acceder al Google Maps Scraper

1. Haz clic en **Google Maps** en el menú de navegación izquierdo
2. El scraper se abre con dos pestañas: **Búsqueda** e **Historial**

## Ejecutar una búsqueda

### Paso 1: Ingresa los criterios de búsqueda

#### Palabra clave del negocio (obligatorio)

Ingresa un tipo o nombre de negocio para buscar:

- **Ejemplos**: `dentista`, `restaurante italiano`, `plomero`, `agencia de marketing`
- **Consejo**: Usa tipos de negocio específicos para obtener resultados más orientados

#### Ubicación (obligatoria)

Ingresa una ciudad, dirección o código postal:

- **Ejemplos**: `Nueva York`, `Londres`, `90210`, `París, Francia`
- **Consejo**: Las ubicaciones más específicas producen resultados más relevantes

### Paso 2: Configura las opciones de búsqueda

#### Resultados máximos

- **Rango**: 1–50 resultados
- **Predeterminado**: 20 resultados
- Ajusta el control deslizante para controlar cuántos negocios extraer

#### Incluir sitio web

- **Habilitado** (predeterminado): Intenta extraer la URL del sitio web del negocio
- **Deshabilitado**: Omite la extracción del sitio web para obtener resultados más rápidos

#### Incluir reseñas

- **Deshabilitado** (predeterminado): Devuelve solo los datos básicos del negocio
- **Habilitado**: Incluye datos de reseñas en los resultados (aumenta el tiempo de procesamiento)

#### Mostrar navegador

- **Deshabilitado** (predeterminado): El navegador se ejecuta en modo headless (más rápido)
- **Habilitado**: La ventana del navegador es visible durante el scraping (útil para depuración)

:::warning Mostrar navegador

Habilitar esta opción mostrará la ventana del navegador en tu pantalla durante la búsqueda. Esto está destinado solo para depuración y puede ralentizar el proceso de scraping.

:::

### Paso 3: Configuración de cuenta y proxy (opcional)

#### Cuenta de Google

Selecciona una cuenta de Google para usar sus cookies en scraping autenticado:

- **Beneficios**:
  - Mayor tasa de éxito
  - Acceso a información comercial más detallada
  - Menor riesgo de ser bloqueado
- Solo se muestran cuentas de Google en el menú desplegable

:::tip Agregar cuentas

Para agregar cuentas de Google, navega a **Configuración** y configura tus cuentas sociales. Consulta [Configuración del sistema](../settings/system-settings) para más detalles.

:::

#### Proxies

Selecciona uno o más proxies para rotar durante la búsqueda:

- **Beneficios**:
  - Distribuye las solicitudes entre múltiples IPs
  - Reduce el riesgo de detección
  - Esencial para scraping a gran escala
- Selecciona múltiples proxies para rotación automática por solicitud

### Paso 4: Inicia la búsqueda

1. Haz clic en **Iniciar búsqueda** para comenzar
2. Aparece una barra de progreso que muestra el estado del scraping en tiempo real
3. La búsqueda se ejecuta de forma asíncrona; puedes seguir usando otras funciones
4. Se pueden ejecutar hasta **3 búsquedas simultáneas** al mismo tiempo

:::info Búsquedas simultáneas

Puedes ejecutar hasta 3 búsquedas de Google Maps al mismo tiempo. Si intentas iniciar una cuarta, se te pedirá que esperes a que finalice una.

:::

### Cancelar una búsqueda

Si una búsqueda está tardando demasiado o deseas detenerla:

- Haz clic en el botón **Cancelar** que aparece mientras se ejecuta una búsqueda
- Los resultados parciales recopilados antes de la cancelación se conservan

## Ver los resultados

Una vez completada la búsqueda, los resultados se muestran en una tabla de datos.

### Tabla de resultados

| Columna | Descripción |
|---------|-------------|
| **Nombre** | Nombre del negocio (enlace clickeable a Google Maps si está disponible) |
| **Categoría** | Categoría del negocio (por ejemplo, "Restaurante", "Dentista") |
| **Calificación** | Calificación en estrellas (con ícono de estrella) |
| **Reseñas** | Número de reseñas |
| **Dirección** | Dirección completa del negocio |
| **Teléfono** | Número de teléfono |
| **Sitio web** | Enlace clickeable al sitio web del negocio (truncado) |

:::tip Haz clic en los nombres de los negocios

Los nombres de negocios con un enlace a Google Maps son clickeables; abren la ficha del negocio en Google Maps en una nueva pestaña.

:::

### Encabezado de resultados de búsqueda

El encabezado muestra:

- Total de negocios encontrados
- La palabra clave de búsqueda utilizada
- La ubicación buscada

### Sin resultados

Si no se encuentran negocios, se muestra un mensaje indicando que no hay resultados para tus criterios de búsqueda. Prueba:

- Usar palabras clave más amplias
- Ampliar el área de ubicación
- Aumentar la configuración de resultados máximos

## Exportar resultados

### Exportar como CSV

1. Haz clic en **Exportar CSV** en el encabezado de resultados
2. Se descarga automáticamente un archivo CSV
3. El nombre del archivo incluye la palabra clave y la ubicación (por ejemplo, `google-maps-dentista-NuevaYork.csv`)

**Las columnas CSV incluyen:**
Nombre, Categoría, Calificación, Cantidad de reseñas, Dirección, Teléfono, Sitio web, Horario, URL de Maps

### Exportar como JSON

1. Haz clic en **Exportar JSON** en el encabezado de resultados
2. Se descarga un archivo JSON con todos los datos de los resultados
3. El nombre del archivo sigue la misma convención que las exportaciones CSV

## Historial de búsqueda

La pestaña **Historial** almacena todas tus búsquedas pasadas de Google Maps.

### Ver el historial

1. Haz clic en la pestaña **Historial**
2. Una tabla muestra todas las búsquedas anteriores

| Columna | Descripción |
|---------|-------------|
| **Consulta** | La palabra clave de búsqueda utilizada |
| **Ubicación** | La ubicación buscada |
| **Resultados** | Número total de negocios encontrados |
| **Fecha** | Cuándo se realizó la búsqueda |
| **Acciones** | Ver o Eliminar |

### Acciones del historial

- **Ver** (ícono de ojo): Carga los resultados históricos en la pestaña de Búsqueda
- **Eliminar** (ícono de papelera): Elimina permanentemente el registro de búsqueda

### Actualizar el historial

- Haz clic en el botón **Actualizar** para recargar la lista del historial
- El historial se carga automáticamente al hacer clic en la pestaña Historial

## Mejores prácticas

### 1. Estrategia de palabras clave

- **Sé específico**: Usa tipos de negocio precisos
  - ✅ `restaurante italiano`
  - ❌ `comida`
- **Prueba variaciones**: Busca múltiples términos para una cobertura completa
  - `dentista` y `clínica dental`
  - `plomero` y `servicio de plomería`

### 2. Segmentación por ubicación

- **Usa ubicaciones específicas** para mejores resultados:
  - ✅ `Manhattan, Nueva York`
  - ✅ `90210`
  - ❌ `EE.UU.`
- **Busca múltiples áreas** para cubrir una región más amplia:
  - Ejecuta búsquedas separadas para cada vecindario o distrito

### 3. Configuración de resultados máximos

- **Prueba rápida**: Configura de 5 a 10 resultados para verificar tu búsqueda
- **Búsqueda estándar**: 20 resultados (predeterminado)
- **Búsqueda exhaustiva**: 50 resultados para una cobertura completa

### 4. Uso de proxies

- **Búsqueda única**: No se requiere proxy
- **Múltiples búsquedas en secuencia**: Usa 1–2 proxies
- **Scraping a gran escala**: Usa 3 o más proxies con rotación

### 5. Uso de cuentas de Google

- **Recomendado** para búsquedas que devuelven más de 30 resultados
- **Esencial** al hacer scraping en áreas populares con muchos negocios
- Las cuentas con uso activo de Google Maps proporcionan mejores resultados

## Solución de problemas

### La búsqueda falló

**Posibles causas:**
- Problemas de conectividad de red
- Google Maps bloqueó la solicitud
- Palabra clave o ubicación no válida

**Soluciones:**
1. Verifica tu conexión a Internet
2. Prueba con una palabra clave o ubicación diferente
3. Usa una cuenta de Google para acceso autenticado
4. Habilita proxies para rotación de IP
5. Reduce la configuración de resultados máximos

### No se encontraron resultados

**Posibles causas:**
- La palabra clave no coincide con ningún negocio en la zona
- La ubicación es demasiado específica o demasiado vaga
- Google Maps devolvió resultados vacíos

**Soluciones:**
1. Prueba palabras clave más amplias (por ejemplo, `restaurante` en lugar de `restaurante italiano`)
2. Usa una ciudad más grande o un área más amplia
3. Verifica manualmente que el tipo de negocio exista en la zona en Google Maps

### Resultados parciales

**Posibles causas:**
- La búsqueda se canceló antes de completarse
- Algunas fichas de negocios carecían de los datos requeridos
- Se produjo limitación de tasa durante el scraping

**Soluciones:**
1. Deja que la búsqueda se complete completamente
2. Ejecuta otra búsqueda para el área restante
3. Usa proxies para evitar límites de tasa

## Integración con otras funciones

Los resultados del Google Maps Scraper se pueden usar con:

- **[Extracción de contactos](./contact-extraction)** — Extrae correos electrónicos de los sitios web de negocios encontrados en los resultados
- **[Páginas Amarillas](./yellow-pages)** — Referencia cruzada con listados de directorios para datos más completos
- **[Redactor de correos con IA](../ai-outreach/ai-email-writer)** — Crea correos electrónicos de divulgación personalizados usando los datos comerciales recopilados
- **[Envío de correos por lotes](./batch-email-sending)** — Lanza campañas de correo electrónico usando la información de contacto extraída

## Próximos pasos

- [Conoce el Yandex Maps Scraper](./yandex-maps-scraper)
- [Configura la extracción de correos electrónicos](./contact-extraction)
- [Crea campañas de correo electrónico con IA](../ai-outreach/ai-email-writer)
