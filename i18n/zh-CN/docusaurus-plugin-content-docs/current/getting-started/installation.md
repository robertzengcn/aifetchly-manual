---
id: installation
title: Installation
sidebar_label: Installation
description: How to download and install aiFetchly on Windows, macOS, or Linux.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 安装 aiFetchly

aiFetchly 支持 Windows、macOS 和 Linux。请按照以下对应操作系统的说明进行安装。

## 系统要求

在安装 aiFetchly 之前，请确保您的系统满足以下要求：

### 所有平台
- **内存**：最低 4GB（推荐 8GB）
- **存储**：应用程序 500MB + 数据的额外空间
- **网络**：稳定的互联网连接

### 平台特定要求

| 平台 | 最低版本 |
|----------|-----------------|
| Windows | Windows 10 或更高版本 |
| macOS | macOS 10.15 (Catalina) 或更高版本 |
| Linux | Ubuntu 20.04+、Debian 11+、Fedora 35+ |

## 下载 aiFetchly

1. 访问 aiFetchly 官方网站
2. 导航到**下载**部分
3. 选择适合您操作系统的安装程序

## 按平台安装

### Windows 安装

aiFetchly 为 Windows 提供两种安装程序选项：

#### 选项 1：Squirrel 安装程序（推荐）

Squirrel 安装程序是现代安装方式，支持自动更新。

**步骤：**

1. 下载 `aiFetchly-Setup-x.x.x.exe`（其中 x.x.x 为版本号）
2. 双击安装程序运行
3. 如果 Windows SmartScreen 弹出提示，点击"更多信息"然后选择"仍要运行"
4. 按照安装向导操作：
   - 选择安装位置（默认：`%LOCALAPPDATA%\aiFetchly`）
   - 选择是否创建桌面快捷方式
   - 选择是否创建开始菜单快捷方式
5. 点击**安装**开始安装
6. 等待安装完成
7. 点击**完成**关闭安装程序

:::tip 管理员权限

标准安装不需要管理员权限。但如果要为所有用户安装，请以管理员身份运行安装程序。

:::

#### 选项 2：WiX 安装程序（MSI）

WiX 安装程序提供传统的 MSI 安装体验。

**步骤：**

1. 下载 `aiFetchly-x.x.x.msi`
2. 双击 MSI 文件
3. 按照 Windows 安装向导操作：
   - 接受许可协议
   - 选择安装目录
   - 配置快捷方式（桌面和开始菜单）
   - 选择为所有用户还是当前用户安装
4. 点击**安装**开始
5. 完成向导，如果提示则重启

#### 在 Windows 上启动 aiFetchly

安装完成后，您可以通过以下方式启动 aiFetchly：

- **桌面快捷方式**：双击桌面上的 aiFetchly 图标
- **开始菜单**：开始 → 所有程序 → aiFetchly → aiFetchly
- **安装文件夹**：导航到安装目录并运行 `aiFetchly.exe`

### macOS 安装

aiFetchly 的 macOS 版本以 DMG 磁盘映像分发。

**步骤：**

1. 下载 `aiFetchly-x.x.x.dmg`
2. 双击 DMG 文件挂载
3. 将出现包含 aiFetchly 应用程序和应用程序文件夹快捷方式的窗口
4. 将 **aiFetchly** 图标拖到**应用程序**文件夹
5. 等待复制操作完成
6. 通过拖到废纸篓或右键选择"弹出"来弹出 DMG

#### macOS 首次启动

**重要提示：** 首次启动时，macOS 可能因安全设置阻止 aiFetchly 运行。

**绕过 Gatekeeper 保护的方法：**

1. 打开**系统偏好设置** → **安全性与隐私**
2. 转到**通用**选项卡
3. 找到显示"aiFetchly 已被阻止打开"的消息
4. 点击**仍要打开**确认您要运行 aiFetchly

:::info 替代方法

在应用程序文件夹中右键点击（或 Control-点击）aiFetchly 并选择"打开"。这将绕过此次启动的 Gatekeeper 检查。

:::

#### 在 macOS 上启动 aiFetchly

安装完成后：

- **应用程序文件夹**：打开 Finder → 应用程序 → aiFetchly
- **Spotlight 搜索**：按 `Cmd + Space`，输入"aiFetchly"，按回车
- **Launchpad**：点击 Launchpad 图标并搜索 aiFetchly

### Linux 安装

aiFetchly 为 Debian/Ubuntu（DEB）和 Red Hat/Fedora（RPM）发行版提供安装包。

#### Debian/Ubuntu（DEB 包）

**步骤：**

1. 下载 `aifetchly_x.x.x_amd64.deb`
2. 打开终端并导航到下载目录
3. 使用以下命令安装：

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. 如果存在依赖问题，使用以下命令修复：

```bash
sudo apt-get install -f
```

5. aiFetchly 默认安装到 `/opt/aifetchly`

#### Red Hat/Fedora（RPM 包）

**步骤：**

1. 下载 `aifetchly-x.x.x.x86_64.rpm`
2. 打开终端并导航到下载目录
3. 使用以下命令安装：

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

或使用 `yum`：

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### 手动安装（tar.gz 压缩包）

如果您不想使用包管理器：

1. 下载 `aiFetchly-x.x.x-linux.tar.gz`
2. 解压压缩包：

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. 将解压的目录移动到您选择的位置：

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. 手动创建桌面快捷方式（可选）

#### 在 Linux 上启动 aiFetchly

安装完成后：

- **应用程序菜单**：在桌面环境的应用程序菜单中查找 aiFetchly
- **终端**：运行 `/opt/aifetchly/aiFetchly`
- **桌面快捷方式**：如果安装时创建了快捷方式，双击桌面图标

## 验证安装

启动 aiFetchly 后，您应该看到主应用程序窗口包含：

- 左侧的导航菜单
- 仪表板或欢迎屏幕
- 所有功能的访问入口（搜索、邮件营销、知识库等）

## 卸载 aiFetchly

如果需要从系统中移除 aiFetchly：

### Windows

**Squirrel 安装程序：**

1. 转到**设置** → **应用** → **已安装的应用**
2. 搜索"aiFetchly"
3. 点击**卸载**并按照提示操作

**WiX 安装程序（MSI）：**

1. 转到**设置** → **应用** → **已安装的应用**
2. 在列表中找到 aiFetchly
3. 点击**卸载**并确认

或使用安装目录中的卸载程序。

### macOS

1. 如果 aiFetchly 正在运行，先退出
2. 打开 **Finder** 并转到**应用程序**
3. 将 **aiFetchly** 拖到废纸篓
4. 清空废纸篓完成移除

:::note 应用程序数据

在 macOS 上，用户数据和偏好设置存储在：
```
~/Library/Application Support/aiFetchly
```

如果要移除所有用户数据，请删除此文件夹。

:::

### Linux

**DEB 包（Debian/Ubuntu）：**

```bash
sudo apt remove aifetchly
```

**RPM 包（Red Hat/Fedora）：**

```bash
sudo dnf remove aifetchly
```

**手动安装：**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # 如需移除用户数据
```

## 更新 aiFetchly

### Windows（Squirrel 安装程序）

aiFetchly 会在启动时自动检查更新。当有可用更新时：

1. 您将看到新版本的通知
2. 点击**下载更新**开始
3. 应用程序将自动下载并安装更新
4. aiFetchly 将重启以完成更新

### macOS

更新通过 DMG 发行版提供。更新步骤：

1. 从网站下载最新的 DMG
2. 将新的 aiFetchly 拖到应用程序文件夹，替换旧版本
3. 启动并在提示替换时确认

### Linux

更新通过包更新提供：

**Debian/Ubuntu：**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora：**

```bash
sudo dnf upgrade aifetchly
```

## 安装故障排除

### Windows："Windows 已保护您的电脑"

这是 Windows SmartScreen 的安全提示。点击**更多信息** → **仍要运行**即可继续。

### Windows：安装失败

- 以管理员身份运行安装程序
- 临时禁用杀毒软件
- 确保磁盘空间充足
- 检查是否有旧版本正在运行

### macOS："应用无法打开"

这是 Gatekeeper 保护。请参见上方的 [macOS 首次启动](#first-launch-on-macos) 部分。

### Linux：权限被拒绝

确保安装程序具有执行权限：

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux：缺少依赖

如果遇到依赖错误：

**Debian/Ubuntu：**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora：**

```bash
sudo dnf install --skip-broken aifetchly
```

## 下一步

成功安装 aiFetchly 后：

1. [配置代理设置](./proxy-setup)（推荐用于抓取）
2. [了解潜在客户获取](../lead-generation/search-engines)
3. [设置知识库](../ai-outreach/knowledge-library)

---

**需要帮助？** 查看我们的[系统设置](../settings/system-settings)或联系支持。
