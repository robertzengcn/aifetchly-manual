---
id: system-settings
title: System Settings
sidebar_label: System Settings
description: Configura las rutas del navegador, resolución de captchas y preferencias del sistema de aiFetchly.
---

# Configuración del sistema

La sección de Configuración del sistema te permite configurar la funcionalidad principal de aiFetchly, incluyendo las rutas del navegador para la automatización web, resolución de captchas, modelos de embeddings y preferencias del sistema. Una configuración adecuada garantiza un rendimiento óptimo para todas las funciones.

## Acceso a la configuración del sistema

1. Haz clic en **Settings** en el menú de navegación izquierdo
2. Aparece un panel de navegación en forma de árbol a la izquierda
3. Haz clic en cualquier categoría para expandir sus ajustes
4. Modifica los ajustes según sea necesario
5. Los cambios se guardan automáticamente

:::info Guardado automático

La mayoría de los ajustes se guardan automáticamente al modificarlos. Busca indicadores de guardado o mensajes de confirmación.

:::

## Resumen de ajustes

### Servicio 2Captcha

Resolución automatizada de captchas para extracción web.

| Ajuste | Descripción |
|--------|-------------|
| **Token** | Tu token de API de 2Captcha |
| **Enabled** | Activar/desactivar la resolución de captchas |

**Configuración (Opcional):**
1. Regístrate en https://2captcha.com
2. Añade fondos a tu cuenta
3. Obtén el token de API desde el panel
4. Introduce el token y habilita el servicio

:::info Cuándo usar 2Captcha

Útil cuando:
- Extraes a gran escala
- Encuentras captchas frecuentes
- No deseas resolver captchas manualmente

:::

### Configuración de embeddings

Configura el modelo de embeddings predeterminado para RAG (Generación Aumentada por Recuperación).

| Ajuste | Descripción |
|--------|-------------|
| **Default Model** | Selecciona entre los modelos de embeddings disponibles |

**Opciones:**
- Varios modelos de embeddings con diferentes dimensiones
- Elige basándote en:
  - Soporte de idiomas
  - Requisitos de rendimiento
  - Restricciones de recursos

### Rutas de sistemas externos

Configura las rutas del navegador para la integración con el navegador local.

#### Ruta de Chrome

**Propósito**: Ruta al ejecutable del navegador Chrome

**Para configurar:**
1. Haz clic en **Browse** o en el botón de selección de archivos
2. Navega a la instalación de Chrome
3. Selecciona el ejecutable

**Rutas predeterminadas (por SO):**
- **Windows**: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- **macOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Linux**: `/usr/bin/google-chrome` o `/usr/bin/chromium-browser`

#### Ruta de Firefox

**Propósito**: Ruta al ejecutable del navegador Firefox

**Para configurar:**
1. Haz clic en **Browse** o en el botón de selección de archivos
2. Navega a la instalación de Firefox
3. Selecciona el ejecutable

**Rutas predeterminadas (por SO):**
- **Windows**: `C:\Program Files\Mozilla Firefox\firefox.exe`
- **macOS**: `/Applications/Firefox.app/Contents/MacOS/firefox`
- **Linux**: `/usr/bin/firefox`

:::tip Requisitos de la ruta del navegador

Las rutas del navegador son necesarias para:
- Funciones de integración con navegador local
- Extracción de Yandex (requiere navegador)
- Ciertos escenarios de detección anti-bot

:::

### Preferencias del usuario

Configura tu experiencia con aiFetchly.

#### Idioma

**Opciones:**
- **English**: Interfaz en inglés
- **中文**: Interfaz en chino (Simplificado)

**Para cambiar:**
1. Selecciona el idioma preferido del menú desplegable
2. La interfaz se actualiza inmediatamente
3. Se recomienda reiniciar para un cambio completo de idioma

#### Información empresarial para análisis de sitios web con IA

**Propósito**: Proporcionar contexto para el análisis de sitios web impulsado por IA

**Formato**: Configuración JSON

**Ejemplo:**
```json
{
  "industry": "Software",
  "company_size": "50-200 employees",
  "target_markets": ["B2B", "SaaS"],
  "keywords": ["marketing", "automation"]
}
```

**Uso:**
- La IA usa este contexto al analizar sitios web
- Mejora la relevancia de los resultados del análisis
- Personaliza la puntuación y categorización

## Gestión de herramientas MCP

**MCP** (Model Context Protocol) permite la integración con herramientas y servicios externos, ampliando el Asistente de Marketing IA con capacidades como búsqueda web, consultas a bases de datos y llamadas a APIs personalizadas.

Para la documentación completa sobre la configuración y uso de servidores MCP, consulta [MCP Tools](../ai-outreach/mcp-tools).

## Mejores prácticas de configuración

### 1. Configuración del navegador

**Chrome vs Firefox:**
- Chrome: Mejor compatibilidad, más funciones
- Firefox: Código abierto, enfocado en la privacidad

**Recomendación:** Configura Chrome como primario y Firefox como respaldo.

### 2. Resolución de captchas

**Cuándo habilitar:**
- Operaciones de extracción a gran escala (>1000 páginas)
- Encuentros frecuentes con captchas
- No deseas intervención manual

**Cuándo deshabilitar:**
- Extracción a pequeña escala
- Para ahorrar costos (2captcha tiene tarifas)
- Encuentros raros con captchas

### 3. Ajustes de idioma

**Elige basándote en:**
- Tu idioma nativo
- El idioma de tu audiencia objetivo
- El idioma del contenido (para la Biblioteca de conocimiento)

**Nota:** La preferencia de idioma afecta solo la interfaz. La IA puede procesar múltiples idiomas independientemente del ajuste.

### 4. Herramientas MCP

**Añade con moderación:**
- Solo añade herramientas que usarás
- Cada herramienta añade complejidad
- Prueba las herramientas individualmente

**Seguridad:**
- Solo usa servidores MCP de confianza
- Mantén las credenciales seguras
- Revisa los permisos de las herramientas

## Solución de problemas

### La integración del navegador no funciona

**Posibles causas:**
- Ruta del navegador incorrecta
- Navegador no instalado
- Problemas de permisos

**Soluciones:**
1. Verifica que el navegador esté instalado
2. Comprueba que la ruta del archivo sea correcta
3. Prueba lanzando el navegador directamente
4. Ejecuta aiFetchly con permisos de administrador/sudo

### El captcha no se resuelve

**Posibles causas:**
- Token de 2Captcha no válido
- Fondos insuficientes
- Servicio deshabilitado

**Soluciones:**
1. Verifica que el token de 2Captcha sea correcto
2. Comprueba el saldo de la cuenta
3. Asegúrate de que el interruptor de 2Captcha esté habilitado
4. Prueba resolviendo un captcha manualmente primero

### Los ajustes no se guardan

**Posibles causas:**
- Base de datos bloqueada
- Permisos insuficientes
- Error de la aplicación

**Soluciones:**
1. Reinicia aiFetchly
2. Ejecuta como administrador/sudo
3. Comprueba los registros de la aplicación
4. Verifica que la base de datos no sea de solo lectura

### Las herramientas MCP no aparecen

**Posibles causas:**
- Servidor no configurado correctamente
- Prueba de conexión fallida
- Herramientas deshabilitadas

**Soluciones:**
1. Verifica la configuración del servidor
2. Prueba la conexión
3. Comprueba que el servidor esté en ejecución
4. Habilita las herramientas individuales

## Configuración avanzada

### Múltiples modelos de embeddings

Configura diferentes modelos de embeddings para diferentes propósitos:

1. Navega a **Embedding Configuration**
2. Añade múltiples modelos
3. Establece el modelo predeterminado
4. Usa modelos específicos por tarea

### Ajustes específicos por entorno

Diferentes ajustes para diferentes entornos:

**Desarrollo:**
- Deshabilita la resolución de captchas
- Habilita el registro de depuración

**Producción:**
- Habilita la resolución de captchas
- Deshabilita el registro de depuración

## Consideraciones de seguridad

### Rutas del navegador

**Seguridad:**
- Solo usa instalaciones de navegadores de confianza
- Verifica que los ejecutables del navegador sean legítimos
- Mantén los navegadores actualizados
- Ten precaución con compilaciones de navegador personalizadas

### Herramientas MCP

**Seguridad:**
- Solo conéctate a servidores MCP de confianza
- Revisa los permisos de las herramientas cuidadosamente
- Usa autenticación siempre que esté disponible
- Monitorea el uso de las herramientas
- Revoca el acceso cuando no sea necesario

## Gestión de Skills de IA

Las Skills de IA son extensiones modulares que mejoran las capacidades de chat de IA de aiFetchly. Las Skills se pueden importar, habilitar/deshabilitar y usar dentro del Asistente de Marketing IA.

Para la documentación completa sobre la importación, gestión y uso de Skills de IA, consulta [AI Skills](../ai-outreach/ai-skills).

## Próximos pasos

Después de configurar los ajustes del sistema:

- [Volver a Primeros pasos](../getting-started/introduction)
- [Configura tu primera tarea de búsqueda](../lead-generation/search-engines)
- [Configura servicios de correo](../lead-generation/batch-email-sending)
- [Conoce el Asistente de Marketing IA](../ai-outreach/ai-marketing-assistant)

---

**¡Configuración completa!** Tu aiFetchly ahora está configurado y listo para ayudarte a generar leads y automatizar tus flujos de trabajo de marketing.
