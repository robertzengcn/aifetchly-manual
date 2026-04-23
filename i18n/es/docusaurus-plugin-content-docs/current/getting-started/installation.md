---
id: installation
title: Instalación
sidebar_label: Instalación
description: Cómo descargar e instalar aiFetchly en Windows, macOS o Linux.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Instalando aiFetchly

aiFetchly está disponible para Windows, macOS y Linux. Siga las instrucciones para su sistema operativo a continuación.

## Requisitos del Sistema

Antes de instalar aiFetchly, asegúrese de que su sistema cumpla con estos requisitos:

### Todas las Plataformas
- **RAM**: 4GB mínimo (8GB recomendado)
- **Almacenamiento**: 500MB para aplicación + espacio adicional para datos
- **Red**: Conexión a internet estable

### Específico de Plataforma

| Plataforma | Versión Mínima |
|----------|-----------------|
| Windows | Windows 10 o posterior |
| macOS | macOS 10.15 (Catalina) o posterior |
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 35+ |

## Descargar aiFetchly

1. Visite el sitio web oficial de aiFetchly
2. Navegue a la sección **Descargas**
3. Seleccione el instalador apropiado para su sistema operativo

## Instalación por Plataforma

### Instalación en Windows

aiFetchly proporciona dos opciones de instalador para Windows:

#### Opción 1: Instalador Squirrel (Recomendado)

El instalador Squirrel es el método de instalación moderno con soporte de actualización automática.

**Pasos:**

1. Descargue `aiFetchly-Setup-x.x.x.exe` (donde x.x.x es el número de versión)
2. Haga doble clic en el instalador para ejecutarlo
3. Si Windows SmartScreen lo solicita, haga clic en "Más información" y luego "Ejecutar de todas formas"
4. Siga el asistente de instalación:
   - Elija la ubicación de instalación (predeterminado: `%LOCALAPPDATA%\aiFetchly`)
   - Seleccione si crear un acceso directo en el escritorio
   - Seleccione si crear un acceso directo en el Menú Inicio
5. Haga clic en **Instalar** para comenzar la instalación
6. Espere a que se complete la instalación
7. Haga clic en **Finalizar** para cerrar el instalador

:::tip Privilegios de Administrador

La instalación estándar no requiere privilegios de administrador. Sin embargo, si desea instalar para todos los usuarios, ejecute el instalador como administrador.

:::

#### Opción 2: Instalador WiX (MSI)

El instalador WiX proporciona una experiencia de instalación MSI tradicional.

**Pasos:**

1. Descargue `aiFetchly-x.x.x.msi`
2. Haga doble clic en el archivo MSI
3. Siga el asistente del Instalador de Windows:
   - Acepte el acuerdo de licencia
   - Elija el directorio de instalación
   - Configure los accesos directos (escritorio y Menú Inicio)
   - Seleccione la carpeta de instalación para todos los usuarios o el usuario actual
4. Haga clic en **Instalar** para comenzar
5. Complete el asistente y reinicie si se le solicita

#### Iniciar aiFetchly en Windows

Después de la instalación, puede iniciar aiFetchly de la siguiente manera:

- **Acceso Directo en Escritorio**: Haga doble clic en el icono de aiFetchly en su escritorio
- **Menú Inicio**: Vaya a Inicio → Todos los Programas → aiFetchly → aiFetchly
- **Carpeta de Instalación**: Navegue al directorio de instalación y ejecute `aiFetchly.exe`

### Instalación en macOS

aiFetchly para macOS se distribuye como una imagen de disco DMG.

**Pasos:**

1. Descargue `aiFetchly-x.x.x.dmg`
2. Haga doble clic en el archivo DMG para montarlo
3. Aparecerá una ventana con la aplicación aiFetchly y un acceso directo a Aplicaciones
4. Arrastre el icono de **aiFetchly** a la carpeta **Aplicaciones**
5. Espere a que se complete la operación de copia
6. Expulse el DMG arrastrándolo a la papelera o haciendo clic derecho y seleccionando "Expulsar"

#### Primer Inicio en macOS

**Importante:** Al primer inicio, macOS puede impedir que aiFetchly se ejecute debido a la configuración de seguridad.

**Para omitir la protección de Gatekeeper:**

1. Abra **Preferencias del Sistema** → **Seguridad y Privacidad**
2. Vaya a la pestaña **General**
3. Busque un mensaje que dice "aiFetchly fue bloqueado para abrirse"
4. Haga clic en **Abrir de Todas Formas** para confirmar que desea ejecutar aiFetchly

:::info Método Alternativo

Haga clic derecho (o Control+clic) en aiFetchly en la carpeta Aplicaciones y seleccione "Abrir". Esto omitirá Gatekeeper para este inicio específico.

:::

#### Iniciar aiFetchly en macOS

Después de la instalación:

- **Carpeta de Aplicaciones**: Abra Finder → Aplicaciones → aiFetchly
- **Búsqueda Spotlight**: Presione `Cmd + Espacio`, escriba "aiFetchly" y presione Enter
- **Launchpad**: Haga clic en el icono de Launchpad y busque aiFetchly

### Instalación en Linux

aiFetchly proporciona paquetes para distribuciones Debian/Ubuntu (DEB) y Red Hat/Fedora (RPM).

#### Debian/Ubuntu (Paquete DEB)

**Pasos:**

1. Descargue `aifetchly_x.x.x_amd64.deb`
2. Abra su terminal y navegue al directorio de descarga
3. Instale el paquete usando:

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. Si hay problemas de dependencias, corríjalos con:

```bash
sudo apt-get install -f
```

5. aiFetchly se instalará en `/opt/aifetchly` por defecto

#### Red Hat/Fedora (Paquete RPM)

**Pasos:**

1. Descargue `aifetchly-x.x.x.x86_64.rpm`
2. Abra su terminal y navegue al directorio de descarga
3. Instale el paquete usando:

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

O usando `yum`:

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### Instalación Manual (archivo tar.gz)

Si prefiere no usar un gestor de paquetes:

1. Descargue `aiFetchly-x.x.x-linux.tar.gz`
2. Extraiga el archivo:

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. Mueva el directorio extraído a su ubicación preferida:

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. Cree accesos directos en el escritorio manualmente (opcional)

#### Iniciar aiFetchly en Linux

Después de la instalación:

- **Menú de Aplicaciones**: Busque aiFetchly en el menú de aplicaciones de su entorno de escritorio
- **Terminal**: Ejecute `/opt/aifetchly/aiFetchly`
- **Acceso Directo en Escritorio**: Si se creó durante la instalación, haga doble clic en el icono del escritorio

## Verificar la Instalación

Después de iniciar aiFetchly, debería ver la ventana principal de la aplicación con:

- Menú de navegación a la izquierda
- Panel de control o pantalla de bienvenida
- Acceso a todas las características (Búsqueda, Email Marketing, Biblioteca de Conocimiento, etc.)

## Desinstalar aiFetchly

Si necesita eliminar aiFetchly de su sistema:

### Windows

**Instalador Squirrel:**

1. Vaya a **Configuración** → **Aplicaciones** → **Aplicaciones instaladas**
2. Busque "aiFetchly"
3. Haga clic en **Desinstalar** y siga las instrucciones

**Instalador WiX (MSI):**

1. Vaya a **Configuración** → **Aplicaciones** → **Aplicaciones instaladas**
2. Encuentre aiFetchly en la lista
3. Haga clic en **Desinstalar** y confirme

O use el desinstalador en el directorio de instalación.

### macOS

1. Salga de aiFetchly si se está ejecutando
2. Abra **Finder** y vaya a **Aplicaciones**
3. Arrastre **aiFetchly** a la papelera
4. Vacíe la papelera para completar la eliminación

:::note Datos de Aplicación

En macOS, los datos y preferencias del usuario se almacenan en:
```
~/Library/Application Support/aiFetchly
```

Elimine esta carpeta si desea eliminar todos los datos del usuario.

:::

### Linux

**Paquete DEB (Debian/Ubuntu):**

```bash
sudo apt remove aifetchly
```

**Paquete RPM (Red Hat/Fedora):**

```bash
sudo dnf remove aifetchly
```

**Instalación Manual:**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # Eliminar datos de usuario si se desea
```

## Actualizar aiFetchly

### Windows (Instalador Squirrel)

aiFetchly verificará automáticamente las actualizaciones al iniciar. Cuando esté disponible una actualización:

1. Verá una notificación sobre la nueva versión
2. Haga clic en **Descargar Actualización** para comenzar
3. La aplicación descargará e instalará la actualización automáticamente
4. aiFetchly se reiniciará para completar la actualización

### macOS

Las actualizaciones se entregan a través de versiones DMG. Para actualizar:

1. Descargue el DMG más reciente desde el sitio web
2. Arrastre el nuevo aiFetchly a Aplicaciones, reemplazando la versión antigua
3. Inicie y confirme cuando se le solicite reemplazar

### Linux

Las actualizaciones se entregan a través de actualizaciones de paquetes:

**Debian/Ubuntu:**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora:**

```bash
sudo dnf upgrade aifetchly
```

## Solución de Problemas de Instalación

### Windows: "Windows Protegió Su PC"

Esto es Windows SmartScreen siendo cauteloso. Haga clic en **Más información** → **Ejecutar de todas formas** para continuar.

### Windows: La Instalación Falla

- Ejecute el instalador como administrador
- Desactive temporalmente el software antivirus
- Asegúrese de tener suficiente espacio en disco
- Verifique que ninguna versión anterior se esté ejecutando

### macOS: "La Aplicación No Puede Abrirse"

Esto es protección de Gatekeeper. Consulte la sección [Primer Inicio en macOS](#primer-inicio-en-macos) arriba.

### Linux: Permiso Denegado

Asegúrese de que el instalador tenga permisos de ejecución:

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux: Dependencias Faltantes

Si encuentra errores de dependencias:

**Debian/Ubuntu:**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora:**

```bash
sudo dnf install --skip-broken aifetchly
```

## Siguientes Pasos

Después de instalar aiFetchly exitosamente:

1. [Configure la configuración de proxy](./proxy-setup) (recomendado para scraping)
2. [Aprenda sobre generación de leads](../lead-generation/search-engines)
3. [Configure su Biblioteca de Conocimiento](../ai-outreach/knowledge-library)

---

**¿Necesita ayuda?** Consulte nuestra [configuración del sistema](../settings/system-settings) o contacte a soporte.
