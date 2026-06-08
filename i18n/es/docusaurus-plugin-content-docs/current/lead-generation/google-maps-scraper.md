---
id: local-business-finder
title: Local Business Finder
sidebar_label: Local Business Finder
description: Extrae información comercial de Google Maps y Yandex Maps por palabra clave y ubicación con el Local Business Finder de aiFetchly.
---

# Local Business Finder

El Local Business Finder de aiFetchly te permite buscar negocios locales usando dos fuentes de datos: **Google Maps** (cobertura global) e **Yandex Maps** (ideal para mercados de Rusia y la CEI). Recopila datos comerciales completos incluyendo nombres, categorías, calificaciones, reseñas, direcciones, números de teléfono y URLs de sitios web.

## Descripción general

El Local Business Finder proporciona una interfaz optimizada para extraer datos de negocios locales:

1. **Elige una fuente de datos** — Google Maps o Yandex Maps
2. **Ingresa una palabra clave** (por ejemplo, "dentista", "restaurante italiano")
3. **Ingresa una ubicación** (por ejemplo, "Nueva York", "Moscú", "90210")
4. **Configura las opciones** (resultados máximos, inclusión de sitio web, reseñas, etc.)
5. **Inicia la búsqueda** y supervisa el progreso en tiempo real
6. **Exporta los resultados** como CSV, JSON o copia al portapapeles

:::tip Elección de la fuente de datos

- **Google Maps** — Mejor para mercados globales y países occidentales. Cobertura mundial superior.
- **Yandex Maps** — Esencial para Rusia, países de la CEI (Kazajistán, Bielorrusia) y Turquía. Soporta personalización de idioma y región.

Para una cobertura completa de una región, ejecuta búsquedas en ambas fuentes de datos y luego cruza y desduplica los resultados.

:::

## Acceder al Local Business Finder

1. Haz clic en **Local Business Finder** en el menú de navegación izquierdo
2. El assistant se abre con dos pestañas: **Búsqueda** e **Historial**

## Ejecutar una búsqueda

### Paso 1: Elige la fuente de datos

Selecciona tu fuente de datos preferida en la parte superior del formulario de búsqueda:

| Característica | Google Maps | Yandex Maps |
|----------------|-------------|-------------|
| **Mejor para** | Mercados globales, países occidentales | Rusia, CEI, Turquía |
| **Soporte de idiomas** | Multiidioma (automático) | Idioma/región configurable |
| **Cobertura de negocios** | Mejor a nivel global | Mejor en Rusia/CEI |
| **Tipo de cuenta** | Cuenta de Google | Cuenta de Yandex |

### Paso 2: Ingresa los criterios de búsqueda

#### Palabra clave del negocio (obligatorio)

Ingresa un tipo o nombre de negocio para buscar:

- **Ejemplos**: `dentista`, `restaurante italiano`, `plomero`, `agencia de marketing`
- **Consejo**: Usa tipos de negocio específicos para obtener resultados más orientados
- **Consejo para Yandex**: Las palabras clave funcionan mejor en el idioma local (ej. usa palabras clave en ruso para ubicaciones rusas)

#### Ubicación (obligatoria)

Ingresa una ciudad, dirección o código postal:

- **Ejemplos**: `Nueva York`, `Londres`, `90210`, `Moscú`, `San Petersburgo`, `Almaty, Kazajistán`
- **Consejo**: Las ubicaciones más específicas producen resultados más relevantes

### Paso 3: Configura las opciones de búsqueda

#### Resultados máximos

- **Rango**: 1–50 resultados
- **Predeterminado**: 20 resultados
- Ajusta el control deslizante para controlar cuántos negocios extraer

:::info Límite de resultados

El número máximo de resultados tiene un límite seguro para garantizar una extracción confiable. El rango del control deslizante de 1–50 es el rango configurable por el usuario.

:::

#### Incluir sitio web

- **Habilitado** (predeterminado): Intenta extraer la URL del sitio web del negocio
- **Deshabilitado**: Omite la extracción del sitio web para obtener resultados más rápidos

#### Incluir reseñas

- **Deshabilitado** (predeterminado): Devuelve solo los datos básicos del negocio
- **Habilitado**: Incluye datos de reseñas en los resultados (aumenta el tiempo de procesamiento)

#### Mostrar navegador

- **Deshabilitado** (predeterminado): El navegador se ejecuta en modo headless (más rápido)
- **Habilitado**: La ventana del navegador es visible durante el information organization (útil para depuración)

:::warning Mostrar navegador

Habilitar esta opción mostrará la ventana del navegador en tu pantalla durante la búsqueda. Esto está destinado solo para depuración y puede ralentizar el proceso de information organization.

:::

### Paso 4: Configuración de idioma y región (solo Yandex Maps)

Estos ajustes son específicos de Yandex Maps y ayudan a personalizar el contexto de búsqueda.

#### Idioma

- Establece el código de idioma de la interfaz de Yandex Maps
- **Ejemplos**: `ru` (ruso), `en` (inglés), `tr` (turco)
- Déjalo vacío para usar el idioma predeterminado
- **Consejo**: Usa el idioma local para obtener mejores resultados de búsqueda en esa región

#### Región

- Establece el código de región para el contexto de búsqueda
- **Ejemplos**: `ru` (Rusia), `kz` (Kazajistán), `by` (Bielorrusia)
- Déjalo vacío para usar la región predeterminada
- **Consejo**: Establecer la región correcta mejora la precisión de los resultados

### Paso 5: Configuración de cuenta y proxy (opcional)

#### Cuenta de Google / Cuenta de Yandex

Selecciona una cuenta para usar sus cookies en information organization autenticado:

- **Beneficios**:
  - Mayor tasa de éxito
  - Acceso a información comercial más detallada
  - Menor riesgo de ser bloqueado
- Google Maps solo muestra cuentas de Google; Yandex Maps solo muestra cuentas de Yandex

:::tip Agregar cuentas

Para agregar cuentas, navega a **Configuración** y configura tus cuentas sociales. Consulta [Configuración del sistema](../settings/system-settings) para más detalles.

:::

#### Proxies

Selecciona uno o más proxies para rotar durante la búsqueda:

- **Beneficios**:
  - Distribuye las solicitudes entre múltiples IPs
  - Reduce el riesgo de detección
  - Esencial para information organization a gran escala
- Selecciona múltiples proxies para rotación automática por solicitud

:::warning Recomendación de proxy

Para Yandex Maps, usar proxies ubicados en la región objetivo (ej. proxies rusos para búsquedas en Moscú) mejora significativamente las tasas de éxito.

:::

### Paso 6: Inicia la búsqueda

1. Haz clic en **Iniciar búsqueda** para comenzar
2. Aparece una barra de progreso que muestra el estado del information organization en tiempo real
3. La búsqueda se ejecuta de forma asíncrona; puedes seguir usando otras funciones
4. Se pueden ejecutar hasta **3 búsquedas simultáneas** al mismo tiempo

:::info Búsquedas simultáneas

Puedes ejecutar hasta 3 búsquedas al mismo tiempo. Si intentas iniciar una cuarta, se te pedirá que esperes a que finalice una.

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
| **Nombre** | Nombre del negocio (enlace clickeable a Maps si está disponible) |
| **Categoría** | Categoría del negocio (por ejemplo, "Restaurante", "Dentista") |
| **Calificación** | Calificación en estrellas (con ícono de estrella) |
| **Reseñas** | Número de reseñas |
| **Dirección** | Dirección completa del negocio |
| **Teléfono** | Número de teléfono |
| **Sitio web** | Enlace clickeable al sitio web del negocio (truncado) |

:::tip Haz clic en los nombres de los negocios

Los nombres de negocios con un enlace a Maps son clickeables; abren la ficha del negocio en una nueva pestaña.

:::

### Encabezado de resultados de búsqueda

El encabezado muestra:

- Total de negocios encontrados
- La palabra clave de búsqueda utilizada
- La ubicación buscada

### Sin resultados

Si no se encuentran negocios, se muestra un mensaje indicando que no hay resultados para tus criterios de búsqueda. Prueba:

- Usar palabras clave más amplias
- Usar palabras clave en el idioma local (para Yandex Maps)
- Ampliar el área de ubicación
- Aumentar la configuración de resultados máximos

## Exportar resultados

### Copiar todo

1. Haz clic en **Copiar todo** en el encabezado de resultados
2. Todos los resultados se copian al portapapeles como JSON
3. Pega en cualquier editor de texto u hoja de cálculo

### Exportar como CSV

1. Haz clic en **Exportar CSV** en el encabezado de resultados
2. Se descarga automáticamente un archivo CSV
3. El nombre del archivo incluye la palabra clave y la ubicación (por ejemplo, `maps-dentista-NuevaYork.csv`)

**Las columnas CSV incluyen:**
Nombre, Categoría, Calificación, Cantidad de reseñas, Dirección, Teléfono, Sitio web, Horario, URL de Maps

### Exportar como JSON

1. Haz clic en **Exportar JSON** en el encabezado de resultados
2. Se descarga un archivo JSON con todos los datos de los resultados
3. El nombre del archivo sigue la misma convención que las exportaciones CSV

## Historial de búsqueda

La pestaña **Historial** almacena todas tus búsquedas pasadas.

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
- **Usa el idioma local para Yandex**: Palabras clave en ruso para ubicaciones rusas
  - ✅ `стоматолог` (dentista en ruso) para Moscú
  - ✅ `dentista` para áreas en inglés

### 2. Segmentación por ubicación

- **Usa ubicaciones específicas** para mejores resultados:
  - ✅ `Manhattan, Nueva York`
  - ✅ `Moscú`
  - ✅ `90210`
  - ❌ `EE.UU.` o `Rusia` (demasiado amplio)
- **Busca múltiples áreas** para cubrir una región más amplia:
  - Ejecuta búsquedas separadas para cada vecindario o distrito

### 3. Configuración de resultados máximos

- **Prueba rápida**: Configura de 5 a 10 resultados para verificar tu búsqueda
- **Búsqueda estándar**: 20 resultados (predeterminado)
- **Búsqueda exhaustiva**: 50 resultados para una cobertura completa

### 4. Idioma y región (Yandex Maps)

- **Establece el idioma en `ru`** para regiones rusoparlantes
- **Establece la región para que coincida con el país objetivo** para mejores resultados
- **Déjalo vacío** si no estás seguro — Yandex usará los valores predeterminados según la ubicación

### 5. Uso de proxies

- **Búsqueda única**: No se requiere proxy
- **Múltiples búsquedas en secuencia**: Usa 1–2 proxies
- **Information Organization a gran escala**: Usa 3 o más proxies con rotación
- **Yandex Maps**: Usa proxies locales (proxies rusos para búsquedas en Rusia)

### 6. Uso de cuentas

- **Cuenta de Google**: Recomendada para búsquedas que devuelven más de 30 resultados; esencial en áreas populares con muchos negocios
- **Cuenta de Yandex**: Recomendada para todas las búsquedas en Yandex Maps; esencial para ciudades rusas con muchos negocios
- Las cuentas con uso activo proporcionan mejores resultados

## Solución de problemas

### La búsqueda falló

**Posibles causas:**
- Problemas de conectividad de red
- El servicio de Maps bloqueó la solicitud
- Palabra clave o ubicación no válida

**Soluciones:**
1. Verifica tu conexión a Internet
2. Prueba con una palabra clave o ubicación diferente
3. Usa una cuenta para acceso autenticado
4. Habilita proxies — preferiblemente con IPs en la región objetivo
5. Reduce la configuración de resultados máximos
6. (Yandex Maps) Prueba configurando los códigos correctos de idioma y región

### No se encontraron resultados

**Posibles causas:**
- La palabra clave no coincide con ningún negocio en la zona
- La ubicación es demasiado específica o demasiado vaga
- Configuración incorrecta de idioma o región (Yandex Maps)

**Soluciones:**
1. Prueba palabras clave más amplias o en el idioma local
2. Usa una ciudad más grande o un área más amplia
3. Verifica manualmente que el tipo de negocio exista en la zona en el servicio de Maps
4. (Yandex Maps) Verifica tu configuración de idioma y región

### Resultados parciales

**Posibles causas:**
- La búsqueda se canceló antes de completarse
- Algunas fichas de negocios carecían de los datos requeridos
- Se produjo limitación de tasa durante el information organization

**Soluciones:**
1. Deja que la búsqueda se complete completamente
2. Ejecuta otra búsqueda para el área restante
3. Usa proxies para evitar límites de tasa

## Integración con otras funciones

Los resultados del Local Business Finder se pueden usar con:

- **[Extracción de contactos](./contact-extraction)** — Abrir en extracción de contactos desde los sitios web de negocios encontrados en los resultados
- **[Páginas Amarillas](./yellow-pages)** — Referencia cruzada con listados de directorios para datos más completos
- **[Redactor de correos con IA](../ai-outreach/ai-email-writer)** — Crea correos electrónicos de divulgación personalizados usando los datos comerciales recopilados
- **[Envío de correos por lotes](./batch-email-sending)** — Lanza campañas de correo electrónico usando la información de contacto extraída

## Próximos pasos

- [Configura la extracción de contactos](./contact-extraction)
- [Crea campañas de correo electrónico con IA](../ai-outreach/ai-email-writer)
