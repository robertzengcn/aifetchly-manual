---
id: ai-email-writer
title: AIメールライター
sidebar_label: AIメールライター
description: 変数置換とナレッジライブラリ連携を備えた、パーソナライズされたAI生成メールテンプレートを作成します。
---

# AI Email Writer

AI Email Writerは、aiFetchlyのインテリジェントなメール作成システムです。パーソナライズされたアウトリーチメールの生成、動的変数を用いた再利用可能なテンプレートの作成、そしてナレッジライブラリを活用したコンテキストに応じたメッセージングが可能です。

## AIメール生成について

従来のメールテンプレートは静的で画一的なものでした。aiFetchlyのAI Email Writerは以下を実現します：

- **受信者ごとにユニークなコンテンツを生成**
- **RAG連携によりナレッジベースを取り込み**
- **品質を保ちながら大規模にパーソナライズ**
- **様々なコンテキストや受信者タイプに適応**

:::info AI + ナレッジライブラリ

最良の結果を得るために、メールを生成する前に[関連ドキュメントをアップロード](./knowledge-library)してナレッジライブラリに登録してください。AIはあなたの製品、サービス、価値提案に関する具体的な情報を参照します。

:::

## メールテンプレートの概要

テンプレートはメールキャンペーンの基盤です。以下の要素で構成されます：

1. **静的コンテンツ**：常に一定のベースメッセージ
2. **動的変数**：受信者固有のデータに置き換えられるプレースホルダー
3. **AI生成**：オプションのAI搭載コンテンツ作成
4. **リッチフォーマット**：各種テキストスタイルのサポート

## メールテンプレートの作成

### ステップ1：Outreach Campaignに移動

1. 左側のナビゲーションメニューで**Outreach Campaign**をクリック
2. サブメニューから**Templates**を選択
3. **Create New Template**をクリック

### ステップ2：テンプレート情報の入力

以下の詳細を入力します：

#### タイトル（必須）

- **目的**：テンプレート一覧で識別するための名前
- **例**：「Product Launch Outreach」「Partnership Proposal」
- **ガイドライン**：説明的で具体的な名前を使用

#### 説明（任意）

- **目的**：テンプレートの使用例に関するコンテキストの提供
- **例**：「見込み客を対象とした新製品ローンチの初期アウトリーチ」
- **ガイドライン**：使用タイミング、ターゲット層、主要メッセージを含める

### ステップ3：テンプレートコンテンツ

リッチテキストエディタでメールの内容を作成します。

#### 変数の使用

変数は、メール送信時に実際のデータに置き換えられるプレースホルダーです。

**使用可能な変数：**

| 変数 | 説明 | 出力例 |
|----------|-------------|----------------|
| `{$send_time}` | 現在のタイムスタンプ | "2024-01-15 10:30 AM" |
| `{$sender}` | 送信者名 | "John Smith" |
| `{$receiver_email}` | 受信者のメールアドレス | "contact@company.com" |
| `{$url}` | 送信元URL | "https://company.com" |
| `{$description}` | 説明テキスト | "Software company in New York" |

**変数を使用したテンプレート例：**

```
Subject: Partnership Opportunity from {$sender}

Hi,

I came across your website ({$url}) and was impressed by your work in {$description}.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
{$sender}

Sent: {$send_time}
```

**変数置換後：**

```
Subject: Partnership Opportunity from John Smith

Hi,

I came across your website (https://techstartup.com) and was impressed by your work in Software Development.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
John Smith

Sent: 2024-01-15 10:30 AM
```

### ステップ4：AI生成コンテンツ（任意）

AIによるコンテンツ生成を利用する場合：

1. **「Use AI Generation」をオンにする**
2. **プロンプトを入力**して生成したい内容を記述
3. **RAG Contextを有効化**してナレッジライブラリを使用
4. **Generateをクリック**してコンテンツを作成

**プロンプト例：**
- "Write a friendly introduction email for our marketing services"
- "Create a personalized outreach mentioning our SaaS platform features"
- "Generate a partnership proposal email"

:::tip AI + RAG連携

RAGコンテキストを有効にすると、AIは自動的にナレッジライブラリを参照し、製品、サービス、価値提案に関する正確な情報を含めます。

:::

### ステップ5：プレビューとテスト

1. **「Preview」をクリック**してサンプル変数での表示を確認
2. **様々な変数の組み合わせをテスト**
3. **必要に応じてコンテンツを編集**
4. **満足したらSave Template**

## テンプレートの管理

### テンプレート一覧

**Outreach Campaign** → **Templates**に移動してすべてのテンプレートを確認します。

**テンプレート情報：**
- タイトル
- 説明
- 作成日
- 最終更新日
- 使用回数

### テンプレートの操作

| 操作 | 説明 |
|--------|-------------|
| **Edit** | テンプレートの内容と変数を変更 |
| **Duplicate** | テンプレートのコピーを作成 |
| **Delete** | テンプレートを削除（確認が必要） |
| **Preview** | サンプル変数での表示を確認 |
| **Use in Campaign** | バッチメール送信に選択 |

### テンプレートのベストプラクティス

#### 1. 明確な件名

- ✅ "Partnership Opportunity: [Their Company] + [Your Company]"
- ✅ "Quick Question About [Their Industry]"
- ❌ "Hello" や "Hi"

#### 2. パーソナライゼーション

- 変数を使用してコンテンツをパーソナライズ
- 受信者に関する具体的な詳細に言及
- 受信者のウェブサイト、業界、または活動に触れる

#### 3. 価値優先のアプローチ

- 単なる売り込みではなく、まず価値を提示
- 機能だけでなくメリットを説明
- 相手にとって何のメリットがあるかを明確に

#### 4. 明確なコールトゥアクション

- 単一の明確な次のステップ
- 分かりやすい内容
- 低いハードル（例：「このメールに返信してください」）

#### 5. プロフェッショナルなトーン

- 文法とスペルを校正
- プロフェッショナルな言葉遣いを維持
- カジュアルすぎる、またはセールス色の強すぎる表現を避ける

## テンプレート例

### 例1：製品アウトリーチ

**Subject:** Improve Your [Industry] Workflow with [Product Name]

```
Hi,

I noticed on {$url} that you're in the [Industry] space.

I'm reaching out because our platform has helped companies like [Description]
reduce their workflow time by up to 40%.

Would you be interested in a quick demo to see how it could work for {$receiver_email}?

Best,
{$sender}
```

### 例2：パートナーシップ提案

**Subject:** Partnership Opportunity Between [Their Company] & [Your Company]

```

Hi,

I've been following [Description] (from {$url}) and think there's a
great synergy between our companies.

We've been working on [Industry] solutions and believe a partnership
could be mutually beneficial. Our companies serve similar markets with
complementary offerings.

Would you be open to a brief call to explore possibilities?

Best regards,
{$sender}
```

### 例3：コンテンツコラボレーション

**Subject:** Content Collaboration Opportunity

```
Hi,

I came across your content on {$url} and was impressed by your
expertise in [Industry].

I'm writing to explore a potential content collaboration. Our audience
is very interested in [Topic], and I think your insights would provide
tremendous value.

Would you be interested in discussing a guest post or joint webinar?

Best,
{$sender}
```

### 例4：サービス紹介

**Subject:** [Service Type] for [Their Company]

```
Hi,

I was researching companies in the [Industry] space and came across
{$url}.

I noticed you're [Description] and thought our [Service Type] might
be a good fit for your current stage. We've helped similar companies
achieve [Specific Result].

Would you be open to a brief conversation about your goals and
how we might help?

Best regards,
{$sender}
```

## 高度な機能

### 条件付きコンテンツ

受信者データに基づいてコンテンツを出し分けます：

```
{$if_industry}
If they're in [Industry], mention relevant case studies
{$endif}

{$if_company_size}
Adjust messaging based on company size
{$endif}
```

### 多言語サポート

複数の言語でテンプレートを作成します：

1. 各言語ごとに**テンプレートを複製**
2. 変数の構造を維持したまま**コンテンツを翻訳**
3. 受信者の地域に応じて**適切なテンプレートを使用**

### A/Bテスト

複数のテンプレートバリエーションを作成します：

1. テンプレートを2〜3回**複製**
2. 各バージョンで**1箇所のみ変更**（件名、冒頭の挨拶、CTA）
3. まず**小規模なバッチでテスト**
4. **結果を測定**し、最も効果的なバージョンを採用

### 動的コンテンツブロック

変数に基づいて異なるコンテンツセクションを使用します：

```
{$value_proposition_1}
Alternative: {$value_proposition_2}
Alternative: {$value_proposition_3}
```

## バッチメール送信との連携

テンプレートはバッチメール送信ワークフローで使用されます：

1. バッチメール処理のステップ2で**テンプレートを選択**
2. メールリストから**変数が自動的に設定**
3. **各受信者にパーソナライズされたメールが送信**
4. AIがナレッジライブラリのコンテンツでテンプレートを**強化**

詳しい手順については、[バッチメール送信](../lead-generation/batch-email-sending)を参照してください。

## トラブルシューティング

### 変数が置換されない

**考えられる原因：**
- 変数名のスペルミス
- メールリストにデータが不足
- 変数の構文エラー

**解決策：**
1. 変数の構文を確認：`{$variable_name}`
2. すべての変数に対応するデータが存在するか確認
3. 送信前にプレビューでテスト

### AI生成が動作しない

**考えられる原因：**
- AIサービスが設定されていない
- RAGコンテキストが有効だが、ナレッジライブラリにドキュメントがない
- プロンプトが曖昧すぎる

**解決策：**
1. システム設定でAI設定を確認
2. ナレッジライブラリに関連ドキュメントをアップロード
3. 具体的で詳細なプロンプトを入力
4. まずRAGを無効にして試す

### テンプレートが一般的すぎる

**考えられる原因：**
- 静的テキストの多用
- 変数が不足
- AI生成が無効

**解決策：**
1. パーソナライズのための変数を追加
2. 動的コンテンツのためにAI生成を有効化
3. 具体的な情報のためにRAGコンテキストを使用
4. 異なる使用例に合わせて複数のテンプレートを作成

## ベストプラクティスまとめ

### 推奨 ✅

- 変数で**コンテンツをパーソナライズ**
- キャンペーン前に**十分にテスト**
- **件名**を明確で魅力的に
- **価値を先に提示**
- **明確なCTAを使用**
- すべてのテンプレートを**校正**
- 異なるオーディエンス向けに**バリエーションを作成**
- RAGコンテキストで**AIを活用**

### 非推奨 ❌

- **セールス色を強くしすぎない**
- **曖昧な件名を使用しない**
- **テストせずに送信しない**
- **受信者のコンテキストを無視しない**
- **メールを長くしすぎない**
- **過度なフォーマットを使用しない**
- **コールトゥアクションを忘れない**
- **「no-reply」アドレスから送信しない**

## 次のステップ

テンプレートを作成した後：

- [メールサービスの設定（SMTP）](../lead-generation/batch-email-sending#メールサービスの設定)
- [バッチメール送信のセットアップ](../lead-generation/batch-email-sending)
- 戦略のために[AI Marketing Assistantを使用](./ai-marketing-assistant)

---

**テンプレートを作成する準備はできましたか？** シンプルなアウトリーチテンプレートから始め、システムに慣れるにつれてパーソナライゼーションやAI生成コンテンツを徐々に追加していきましょう。
