---
id: hooks
title: Hooks
sidebar_label: Hooks
description: aiFetchly の AI チャットやツール実行の前後で動作するライフサイクル Hook を管理します。
---

# Hooks

Hooks を使うと、ツール実行前、ツール成功後、ツール失敗後など、AI チャットの重要なライフサイクルイベントで設定済みの処理を実行できます。安全チェックの追加、コンプライアンス文脈の注入、ローカルワークフローと AI ツール活動の連携に利用できます。

## Hooks を開く

1. 左側ナビゲーションで **設定** をクリックします。
2. **システム設定** を開きます。
3. **Hooksを管理** をクリックします。

Hooks ページには、グローバル有効化スイッチ、Hook 一覧、編集パネル、最近の監査ログがあります。

## グローバル有効化

**Enable hooks globally** で Hook システム全体をオンまたはオフにします。

グローバル Hook が無効な場合、個別の Hook が有効でも Hook は実行されません。トラブルシューティング中にすべての Hook 動作を一時停止する最短の方法です。

## Hook のソース

Hook 一覧では次のソースを表示できます。

| ソース | 説明 |
|---|---|
| **組み込み** | aiFetchly に同梱されている Hook。有効化または無効化はできますが、定義は編集できません。 |
| **ユーザー** | Hooks ページで作成したコマンド Hook。編集、有効化、無効化、削除ができます。 |
| **セッション** | 現在のセッションに紐づく一時的な Hook。一覧に含めるには **Show session hooks** を有効にします。 |

一覧を絞り込むには **Event** と **Source** フィルターを使います。

## 組み込み Hook

aiFetchly には安全性とコンプライアンス用の組み込み Hook が含まれています。

| Hook | 既定 | 動作 |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | 有効 | ツール使用前に `shell_execute` を確認し、`rm -rf /` や `rm -rf *` のような危険な再帰削除コマンドをブロックします。 |
| `builtin-scraping-compliance-context` | 無効 | スクレイピングツール呼び出し後にコンプライアンス文脈を追加します。この Hook を有効にすると、スクレイピング関連の AI 結果に影響する場合があります。 |

組み込み Hook はコードで定義されています。Hooks ページで変更できるのは有効状態だけです。

## コマンド Hook を作成する

1. **Add command hook** をクリックします。
2. 生成された **Hook ID** を確認するか置き換えます。
3. **Event** を選択します。
4. **Matcher** を設定します。
5. 必要に応じて **If condition** を追加します。
6. 実行するローカル **Command** を入力します。
7. **Timeout (ms)** と **Failure mode** を設定します。
8. 必要に応じて **Status message** を追加します。
9. **Save** をクリックします。
10. 保存した Hook を選択し、利用する準備ができたら **Enabled** をオンにします。

新しいコマンド Hook は既定で無効の状態で保存されるため、実行前に内容を確認できます。

## コマンド Hook の項目

| 項目 | 説明 |
|---|---|
| **Hook ID** | Hook の一意な識別子。作成時のみ編集できます。 |
| **Event** | Hook を起動できるライフサイクルイベント。 |
| **Matcher** | ツール名など、イベント対象に一致させるパターン。選択したイベントのすべてに一致させるには `*` を使います。 |
| **If condition** | ツール関連イベントで、文字列の入力値に対して追加で確認する任意のパターン。たとえば `git *` は `git ` で始まるシェルコマンドに一致できます。 |
| **Command** | Hook が一致したときに実行するローカルコマンド。Hook 入力は JSON として stdin から渡されます。 |
| **Timeout (ms)** | aiFetchly がコマンドを停止するまでの最大実行時間。 |
| **Failure mode** | `warn` は Hook エラーを記録し、AI フローはブロックしません。`block` は Hook 実行エラーをブロックされた操作に変換します。 |
| **Status message** | Hook 実行中に表示される任意のメッセージ。 |
| **Enabled** | 保存済み Hook が実行可能かどうかを制御します。 |

コマンド Hook は stdout に JSON オブジェクトを書き出す必要があります。空のオブジェクトは「変更なし」を意味します。対応する出力フィールドには `continue`、`reason`、`systemMessage`、`additionalContext`、`updatedInput`、`updatedToolOutput`、`suppressOutput`、`permissionDecision` があります。

一致した操作をブロックする出力例:

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

文脈を追加する出力例:

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Hook イベント

| イベント | 実行タイミング |
|---|---|
| `SessionStart` | AI チャット、プラン、エージェントのセッションが開始したとき。 |
| `UserPromptSubmit` | ユーザーがプロンプトを送信したとき。 |
| `PreToolUse` | ツールを実行する前。 |
| `PostToolUse` | ツールが正常に完了した後。 |
| `PostToolUseFailure` | ツールが失敗した後。 |
| `PermissionRequest` | ツール権限リクエストを準備するとき。 |
| `PermissionDenied` | ツール権限リクエストが拒否されたとき。 |
| `Stop` | AI 実行が停止または完了したとき。 |

## Hook の編集と削除

一覧からユーザー Hook を選択すると、matcher、条件、コマンド、timeout、failure mode、status message を編集できます。変更を適用するには **Save** をクリックします。

ユーザー Hook を削除するには **Delete** をクリックして確認します。Hook の削除は元に戻せません。

:::info 組み込み Hook の制限

組み込み Hook は有効化または無効化できますが、イベント、matcher、動作は Hooks ページから編集できません。

:::

## 最近の監査ログ

**Recent audit log** には次のような Hook 活動が表示されます。

- 時刻
- Hook ID
- イベント
- ステータス
- 実行時間
- 理由

監査ログは **Event**、**Status**、**Hook** でフィルターでき、最新 100、500、1000 行のいずれを表示するか選択できます。Hook のテスト中は更新ボタンで自動更新を開始または一時停止できます。

一般的なステータス:

| ステータス | 意味 |
|---|---|
| `started` | Hook 実行が開始しました。 |
| `success` | Hook が正常に完了しました。 |
| `blocked` | Hook が操作をブロックしました。 |
| `failed` | Hook が失敗しました。 |
| `timeout` | Hook がタイムアウトを超えました。 |

## 安全上の注意

- コマンド Hook はローカルプロセスを実行します。理解しているコマンドだけを Hook として作成してください。
- Hook コマンドは範囲を狭くし、予測しやすくしてください。
- 新しい Hook のテスト中は `warn` を優先し、動作確認後にのみ `block` へ切り替えてください。
- Hook を有効にした後は監査ログを使い、想定した場合だけ実行されることを確認してください。
