---
id: installation
title: インストール
sidebar_label: インストール
description: Windows、macOS、LinuxへのaiFetchlyのダウンロードとインストール方法。
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# aiFetchly のインストール

aiFetchly は Windows、macOS、Linux で利用可能です。お使いのオペレーティングシステムに対応する手順に従ってください。

## システム要件

aiFetchly をインストールする前に、システムが以下の要件を満たしていることを確認してください：

### すべてのプラットフォーム
- **RAM**：最小4GB（推奨8GB）
- **ストレージ**：アプリケーション用500MB + データ用の追加スペース
- **ネットワーク**：安定したインターネット接続

### プラットフォーム別

| プラットフォーム | 最小バージョン |
|----------|-----------------|
| Windows | Windows 10 以降 |
| macOS | macOS 10.15 (Catalina) 以降 |
| Linux | Ubuntu 20.04+、Debian 11+、Fedora 35+ |

## aiFetchly のダウンロード

1. aiFetchly の公式ウェブサイトにアクセス
2. **ダウンロード**セクションに移動
3. お使いのオペレーティングシステムに適したインストーラーを選択

## プラットフォーム別インストール

### Windows インストール

aiFetchly は Windows 向けに2つのインストーラーオプションを提供しています：

#### オプション1：Squirrel インストーラー（推奨）

Squirrel インストーラーは、自動更新サポートを備えたモダンなインストール方法です。

**手順：**

1. `aiFetchly-Setup-x.x.x.exe` をダウンロード（x.x.x はバージョン番号）
2. インストーラーをダブルクリックして実行
3. Windows SmartScreen が表示されたら、「詳細情報」をクリックして「実行」を選択
4. インストールウィザードに従います：
   - インストール先を選択（デフォルト：`%LOCALAPPDATA%\aiFetchly`）
   - デスクトップショートカットを作成するかどうかを選択
   - スタートメニューショートカットを作成するかどうかを選択
5. **インストール**をクリックしてインストールを開始
6. インストールの完了を待つ
7. **完了**をクリックしてインストーラーを閉じる

:::tip 管理者権限

通常のインストールには管理者権限は必要ありません。ただし、すべてのユーザーにインストールする場合は、管理者としてインストーラーを実行してください。

:::

#### オプション2：WiX インストーラー（MSI）

WiX インストーラーは従来の MSI インストール体験を提供します。

**手順：**

1. `aiFetchly-x.x.x.msi` をダウンロード
2. MSI ファイルをダブルクリック
3. Windows インストーラーウィザードに従います：
   - ライセンス契約に同意
   - インストールディレクトリを選択
   - ショートカット（デスクトップとスタートメニュー）を設定
   - すべてのユーザーまたは現在のユーザーのインストールフォルダーを選択
4. **インストール**をクリックして開始
5. ウィザードを完了し、プロンプトが表示されたら再起動

#### Windows での aiFetchly の起動

インストール後、以下の方法で aiFetchly を起動できます：

- **デスクトップショートカット**：デスクトップの aiFetchly アイコンをダブルクリック
- **スタートメニュー**：スタート → すべてのプログラム → aiFetchly → aiFetchly
- **インストールフォルダー**：インストールディレクトリに移動して `aiFetchly.exe` を実行

### macOS インストール

macOS 版 aiFetchly は DMG ディスクイメージとして配布されています。

**手順：**

1. `aiFetchly-x.x.x.dmg` をダウンロード
2. DMG ファイルをダブルクリックしてマウント
3. aiFetchly アプリケーションとアプリケーションフォルダーへのショートカットを含むウィンドウが表示されます
4. **aiFetchly** アイコンを**アプリケーション**フォルダーにドラッグ
5. コピー操作の完了を待つ
6. ゴミ箱にドラッグするか右クリックして「取り出し」を選択して DMG を取り出し

#### macOS での初回起動

**重要：** 初回起動時、macOS はセキュリティ設定により aiFetchly の実行を阻止する場合があります。

**Gatekeeper 保護を回避する方法：**

1. **システム設定** → **セキュリティとプライバシー** を開く
2. **一般**タブに移動
3. "aiFetchly は開けません" というメッセージを探す
4. **このまま開く** をクリックして aiFetchly の実行を確認

:::info 代替方法

アプリケーションフォルダーで aiFetchly を右クリック（または Control+クリック）して「開く」を選択します。これにより今回の起動に限り Gatekeeper を回避できます。

:::

#### macOS での aiFetchly の起動

インストール後：

- **アプリケーションフォルダー**：Finder を開く → アプリケーション → aiFetchly
- **Spotlight 検索**：`Cmd + Space` を押し、「aiFetchly」と入力して Enter
- **Launchpad**：Launchpad アイコンをクリックして aiFetchly を検索

### Linux インストール

aiFetchly は Debian/Ubuntu（DEB）および Red Hat/Fedora（RPM）ディストリビューション向けパッケージを提供しています。

#### Debian/Ubuntu（DEB パッケージ）

**手順：**

1. `aifetchly_x.x.x_amd64.deb` をダウンロード
2. ターミナルを開き、ダウンロードディレクトリに移動
3. 以下のコマンドでインストール：

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. 依存関係の問題がある場合、以下で修正：

```bash
sudo apt-get install -f
```

5. aiFetchly はデフォルトで `/opt/aifetchly` にインストールされます

#### Red Hat/Fedora（RPM パッケージ）

**手順：**

1. `aifetchly-x.x.x.x86_64.rpm` をダウンロード
2. ターミナルを開き、ダウンロードディレクトリに移動
3. 以下のコマンドでインストール：

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

または `yum` を使用：

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### 手動インストール（tar.gz アーカイブ）

パッケージマネージャーを使用しない場合：

1. `aiFetchly-x.x.x-linux.tar.gz` をダウンロード
2. アーカイブを展開：

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. 展開したディレクトリを希望の場所に移動：

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. デスクトップショートカットを手動で作成（オプション）

#### Linux での aiFetchly の起動

インストール後：

- **アプリケーションメニュー**：デスクトップ環境のアプリケーションメニューで aiFetchly を探す
- **ターミナル**：`/opt/aifetchly/aiFetchly` を実行
- **デスクトップショートカット**：インストール時に作成した場合は、デスクトップアイコンをダブルクリック

## インストールの確認

aiFetchly を起動すると、メインアプリケーションウィンドウに以下が表示されます：

- 左側のナビゲーションメニュー
- ダッシュボードまたはウェルカム画面
- すべての機能へのアクセス（検索、メールマーケティング、ナレッジライブラリなど）

## aiFetchly のアンインストール

システムから aiFetchly を削除する必要がある場合：

### Windows

**Squirrel インストーラー：**

1. **設定** → **アプリ** → **インストール済みアプリ** に移動
2. "aiFetchly" を検索
3. **アンインストール**をクリックし、プロンプトに従う

**WiX インストーラー（MSI）：**

1. **設定** → **アプリ** → **インストール済みアプリ** に移動
2. リストから aiFetchly を見つける
3. **アンインストール**をクリックして確認

または、インストールディレクトリのアンインストーラーを使用してください。

### macOS

1. aiFetchly が実行中の場合は終了
2. **Finder** を開き、**アプリケーション**に移動
3. **aiFetchly** をゴミ箱にドラッグ
4. ゴミ箱を空にして削除を完了

:::note アプリケーションデータ

macOS では、ユーザーデータと設定は以下に保存されます：
```
~/Library/Application Support/aiFetchly
```

すべてのユーザーデータを削除する場合は、このフォルダーを削除してください。

:::

### Linux

**DEB パッケージ（Debian/Ubuntu）：**

```bash
sudo apt remove aifetchly
```

**RPM パッケージ（Red Hat/Fedora）：**

```bash
sudo dnf remove aifetchly
```

**手動インストール：**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # ユーザーデータを削除する場合
```

## aiFetchly の更新

### Windows（Squirrel インストーラー）

aiFetchly は起動時に自動的に更新を確認します。更新が利用可能な場合：

1. 新しいバージョンの通知が表示されます
2. **更新をダウンロード**をクリックして開始
3. アプリケーションが自動的に更新をダウンロードしてインストール
4. aiFetchly が再起動して更新を完了

### macOS

更新は DMG リリースを通じて提供されます。更新手順：

1. ウェブサイトから最新の DMG をダウンロード
2. 新しい aiFetchly をアプリケーションにドラッグし、古いバージョンを置き換え
3. 起動し、置き換えのプロンプトで確認

### Linux

更新はパッケージの更新を通じて提供されます：

**Debian/Ubuntu：**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora：**

```bash
sudo dnf upgrade aifetchly
```

## インストールのトラブルシューティング

### Windows：「Windows が PC を保護しました」

これは Windows SmartScreen の警告です。**詳細情報** → **実行** をクリックして続行してください。

### Windows：インストールに失敗する

- 管理者としてインストーラーを実行
- ウイルス対策ソフトウェアを一時的に無効化
- 十分なディスク容量があることを確認
- 以前のバージョンが実行されていないことを確認

### macOS：「アプリを開けません」

これは Gatekeeper の保護です。上記の [macOS での初回起動](#macos-での初回起動) セクションを参照してください。

### Linux：パーミッションが拒否される

インストーラーに実行権限があることを確認：

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux：依存関係が不足

依存関係エラーが発生した場合：

**Debian/Ubuntu：**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora：**

```bash
sudo dnf install --skip-broken aifetchly
```

## 次のステップ

aiFetchly のインストールが完了したら：

1. [プロキシ設定を構成](./proxy-setup)（スクレイピングに推奨）
2. [リード獲得について学ぶ](../lead-generation/search-engines)
3. [ナレッジライブラリを設定](../ai-outreach/knowledge-library)

---

**ヘルプが必要ですか？** [システム設定](../settings/system-settings)を確認するか、サポートにお問い合わせください。
