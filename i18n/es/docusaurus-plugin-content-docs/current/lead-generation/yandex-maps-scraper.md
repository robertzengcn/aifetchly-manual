---
id: yandex-maps-scraper
title: Yandex Maps Scraper
sidebar_label: Yandex Maps
description: Extrae información comercial de Yandex Maps por palabra clave y ubicación con el Yandex Maps Scraper de aiFetchly — ideal para mercados de Rusia y la CEI.
---

# Yandex Maps Scraper

El Yandex Maps Scraper de aiFetchly te permite buscar negocios locales en Yandex Maps por palabra clave y ubicación. Es la herramienta ideal para recopilar datos comerciales de los mercados de Rusia y la CEI, con soporte para personalización de idioma y región.

## Descripción general

El Yandex Maps Scraper proporciona una extracción completa de datos de negocios locales:

1. **Ingresa una palabra clave** (por ejemplo, "dentista", "restaurante")
2. **Ingresa una ubicación** (por ejemplo, "Moscú", "San Petersburgo", "Rusia")
3. **Configura las opciones** (idioma, región, resultados máximos, etc.)
4. **Inicia la búsqueda** y supervisa el progreso en tiempo real
5. **Exporta los resultados** como CSV, JSON o cópialos al portapapeles

:::tip Mejor uso para

El Yandex Maps Scraper es esencial para negocios orientados al mercado ruso y países de la CEI. Yandex Maps tiene una cobertura superior de negocios locales en Rusia, Kazajistán, Bielorrusia, Turquía y otras regiones donde opera Yandex.

:::

## Acceder al Yandex Maps Scraper

1. Haz clic en **Yandex Maps** en el menú de navegación izquierdo
2. El scraper se abre con dos pestañas: **Búsqueda** e **Historial**

## Ejecutar una búsqueda

### Paso 1: Ingresa los criterios de búsqueda

#### Palabra clave del negocio (obligatorio)

Ingresa un tipo o nombre de negocio para buscar:

- **Ejemplos**: `dentista`, `restaurante`, `plomero`, `agencia de marketing`
- **Consejo**: Las palabras clave funcionan mejor en el idioma local (por ejemplo, usa palabras clave en ruso para ubicaciones rusas)

#### Ubicación (obligatoria)

Ingresa una ciudad o región para buscar:

- **Ejemplos**: `Moscú`, `San Petersburgo`, `Rusia`, `Almaty, Kazajistán`
- **Consejo**: Las ubicaciones más específicas producen resultados más relevantes

### Paso 2: Configura las opciones de búsqueda

#### Resultados máximos

- **Rango**: 1–50 resultados
- **Predeterminado**: 20 resultados
- Ajusta el control deslizante para controlar cuántos negocios extraer

:::info Límite de resultados

El número máximo de resultados está limitado a un valor seguro para garantizar una extracción confiable. El rango del control deslizante de 1 a 50 es el rango configurable por el usuario.

:::

#### Incluir sitio web

- **Habilitado** (predeterminado): Intenta extraer la URL del sitio web del negocio
- **Deshabilitado**: Omite la extracción del sitio web para obtener resultados más rápidos

#### Incluir reseñas

- **Deshabilitado** (predeterminado): Devuelve solo los datos básicos del negocio
- **Habilitado**: Incluye datos de reseñas en los resultados (aumenta el tiempo de procesamiento)

#### Mostrar navegador

- **Deshabilitado** (predeterminado): El navegador se ejecuta en modo headless (más rápido)
- **Habilitado**: La ventana del navegador es visible durante el scraping (útil para depuración)

### Paso 3: Configuración de idioma y región (opcional)

Estas configuraciones son específicas de Yandex Maps y ayudan a personalizar el contexto de tu búsqueda.

#### Idioma

- Establece el código de idioma de la interfaz de Yandex Maps
- **Ejemplos**: `ru` (ruso), `en` (inglés), `tr` (turco)
- Déjalo vacío para usar el idioma predeterminado
- **Consejo**: Usa el idioma local para obtener mejores resultados de búsqueda en esa región

#### Región

- Establece el código de región para el contexto de búsqueda
- **Ejemplos**: `ru` (Rusia), `kz` (Kazajistán), `by` (Bielorrusia)
- Déjalo vacío para usar la región predeterminada
- **Consejo**: Configurar la región correcta mejora la precisión de los resultados

### Paso 4: Configuración de cuenta y proxy (opcional)

#### Cuenta de Yandex

Selecciona una cuenta de Yandex para usar sus cookies en scraping autenticado:

- **Beneficios**:
  - Mayor tasa de éxito
  - Acceso a información comercial más detallada
  - Menor riesgo de ser bloqueado
- Solo se muestran cuentas de Yandex en el menú desplegable

:::tip Agregar cuentas

Para agregar cuentas de Yandex, navega a **Configuración** y configura tus cuentas sociales. Consulta [Configuración del sistema](../settings/system-settings) para más detalles.

:::

#### Proxies

Selecciona uno o más proxies para rotar durante la búsqueda:

- **Beneficios**:
  - Distribuye las solicitudes entre múltiples IPs
  - Reduce el riesgo de detección
  - Esencial para scraping a gran escala
- Selecciona múltiples proxies para rotación automática por solicitud

:::warning Recomendación de proxies

Para el scraping de Yandex Maps, el uso de proxies ubicados en la región de destino (por ejemplo, proxies rusos para búsquedas en Moscú) mejora significativamente las tasas de éxito.

:::

### Paso 5: Inicia la búsqueda

1. Haz clic en **Iniciar búsqueda** para comenzar
2. Aparece un indicador de progreso circular y una barra de progreso
3. El texto de estado en tiempo real muestra la etapa actual del scraping
4. Un contador muestra el progreso (por ejemplo, "5 / 20 negocios")
5. Se pueden ejecutar hasta **3 búsquedas simultáneas** al mismo tiempo

:::info Búsquedas simultáneas

Puedes ejecutar hasta 3 búsquedas de Yandex Maps al mismo tiempo. Si intentas iniciar una cuarta, se te pedirá que esperes a que finalice una.

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
| **Nombre** | Nombre del negocio (enlace clickeable a Yandex Maps si está disponible) |
| **Categoría** | Categoría del negocio (por ejemplo, "Restaurante", "Dentista") |
| **Calificación** | Calificación en estrellas (con ícono de estrella) |
| **Reseñas** | Número de reseñas |
| **Dirección** | Dirección completa del negocio |
| **Teléfono** | Número de teléfono |
| **Sitio web** | Enlace clickeable al sitio web del negocio (truncado) |

:::tip Haz clic en los nombres de los negocios

Los nombres de negocios con un enlace a Yandex Maps son clickeables; abren la ficha del negocio en Yandex Maps en una nueva pestaña.

:::

### Encabezado de resultados de búsqueda

El encabezado muestra:

- Total de negocios encontrados
- La palabra clave de búsqueda utilizada
- La ubicación buscada

### Sin resultados

Si no se encuentran negocios, se muestra un mensaje indicando que no hay resultados para tus criterios de búsqueda. Prueba:

- Usar palabras clave más amplias
- Usar palabras clave en el idioma local
- Ampliar el área de ubicación
- Aumentar la configuración de resultados máximos

## Exportar resultados

### Copiar todo

1. Haz clic en **Copiar todo** en el encabezado de resultados
2. Todos los resultados se copian a tu portapapeles como JSON
3. Pégalos en cualquier editor de texto u hoja de cálculo

### Exportar como CSV

1. Haz clic en **Exportar CSV** en el encabezado de resultados
2. Se descarga automáticamente un archivo CSV
3. El nombre del archivo incluye la palabra clave y la ubicación (por ejemplo, `yandex-maps-dentista-Moscu.csv`)

**Las columnas CSV incluyen:**
Nombre, Categoría, Calificación, Cantidad de reseñas, Dirección, Teléfono, Sitio web, Horario, URL de Maps

### Exportar como JSON

1. Haz clic en **Exportar JSON** en el encabezado de resultados
2. Se descarga un archivo JSON con todos los datos de los resultados
3. El nombre del archivo sigue la misma convención que las exportaciones CSV

## Historial de búsqueda

La pestaña **Historial** almacena todas tus búsquedas pasadas de Yandex Maps.

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

- **Usa el idioma local**: Palabras clave en ruso para ubicaciones rusas
  - ✅ `стоматолог` (dentista en ruso) para Moscú
  - ✅ `dentist` para áreas de habla inglesa
- **Sé específico**: Usa tipos de negocio precisos
- **Prueba variaciones**: Busca múltiples términos para una cobertura completa

### 2. Segmentación por ubicación

- **Usa ubicaciones específicas** para mejores resultados:
  - ✅ `Moscú`
  - ✅ `San Petersburgo`
  - ✅ `Kazán, Rusia`
  - ❌ `Rusia` (demasiado amplio)
- **Busca múltiples áreas** para cubrir una región más amplia

### 3. Idioma y región

- **Configura el idioma en `ru`** para regiones de habla rusa
- **Configura la región para que coincida con el país de destino** para obtener los mejores resultados
- **Déjalo vacío** si no estás seguro; Yandex usará los valores predeterminados según la ubicación

### 4. Uso de proxies

- **Usa proxies locales** (proxies rusos para búsquedas en Rusia)
- **Búsqueda única**: No se requiere proxy
- **Múltiples búsquedas**: Usa 1–2 proxies
- **Scraping a gran escala**: Usa 3 o más proxies con rotación

### 5. Uso de cuentas de Yandex

- **Recomendado** para todo el scraping de Yandex Maps
- **Esencial** al hacer scraping en ciudades rusas con muchos negocios
- Las cuentas con uso activo de Yandex proporcionan mejores resultados

## Comparación: Google Maps vs. Yandex Maps

| Característica | Google Maps Scraper | Yandex Maps Scraper |
|----------------|-------------------|-------------------|
| **Mejor para** | Mercados globales, países occidentales | Rusia, CEI, Turquía |
| **Soporte de idiomas** | Multilingüe (automático) | Idioma/región configurable |
| **Cobertura de negocios** | Mejor a nivel global | Mejor en Rusia/CEI |
| **Tipo de cuenta** | Cuenta de Google | Cuenta de Yandex |
| **Formatos de exportación** | CSV, JSON | CSV, JSON, Copiar todo |
| **Seguimiento de progreso** | Barra de progreso | Progreso circular + texto de estado |

:::tip Usa ambos scrapers

Para una cobertura completa de una región, ejecuta búsquedas tanto en Google Maps como en Yandex Maps, luego referencia cruzada y deduplica los resultados.

:::

## Solución de problemas

### La búsqueda falló

**Posibles causas:**
- Problemas de conectividad de red
- Yandex Maps bloqueó la solicitud
- Palabra clave o ubicación no válida

**Soluciones:**
1. Verifica tu conexión a Internet
2. Prueba con una palabra clave o ubicación diferente
3. Usa una cuenta de Yandex para acceso autenticado
4. Habilita proxies, preferiblemente con IPs en la región de destino
5. Reduce la configuración de resultados máximos
6. Prueba configurando los códigos correctos de idioma y región

### No se encontraron resultados

**Posibles causas:**
- La palabra clave no coincide con ningún negocio en la zona
- La ubicación es demasiado específica o demasiado vaga
- Configuración incorrecta de idioma o región

**Soluciones:**
1. Prueba palabras clave más amplias o palabras clave en el idioma local
2. Usa una ciudad más grande o un área más amplia
3. Verifica que el tipo de negocio exista en la zona en Yandex Maps
4. Revisa tu configuración de idioma y región

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

Los resultados del Yandex Maps Scraper se pueden usar con:

- **[Extracción de contactos](./contact-extraction)** — Extrae correos electrónicos de los sitios web de negocios encontrados en los resultados
- **[Google Maps Scraper](./google-maps-scraper)** — Referencia cruzada con Google Maps para una cobertura más amplia
- **[Páginas Amarillas](./yellow-pages)** — Referencia cruzada con listados de directorios
- **[Redactor de correos con IA](../ai-outreach/ai-email-writer)** — Crea correos electrónicos de divulgación personalizados usando los datos comerciales recopilados
- **[Envío de correos por lotes](./batch-email-sending)** — Lanza campañas de correo electrónico usando la información de contacto extraída

## Próximos pasos

- [Conoce el Google Maps Scraper](./google-maps-scraper)
- [Configura la extracción de correos electrónicos](./contact-extraction)
- [Crea campañas de correo electrónico con IA](../ai-outreach/ai-email-writer)
