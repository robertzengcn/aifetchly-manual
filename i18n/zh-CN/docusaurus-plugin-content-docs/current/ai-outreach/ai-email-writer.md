---
id: ai-email-writer
title: AI Email Writer
sidebar_label: AI Email Writer
description: Create personalized, AI-generated email templates with variable substitution and Knowledge Library integration.
---

# AI 邮件撰写器

AI 邮件撰写器是 aiFetchly 的智能邮件创建系统。它可以生成个性化的推广邮件、创建带有动态变量的可复用模板，并利用知识库实现具有上下文感知能力的邮件内容。

## 了解 AI 邮件生成

传统的邮件模板是静态且通用的。aiFetchly 的 AI 邮件撰写器：

- **为每位收件人生成独特的内容**
- **通过 RAG 集成整合您的知识库**
- **在保持质量的同时实现大规模个性化**
- **适应不同的场景和收件人类型**

:::info AI + 知识库

为了获得最佳效果，请在生成邮件之前将[相关文档上传](./knowledge-library)至您的知识库。AI 将引用您特定的产品、服务和价值主张。

:::

## 邮件模板概览

模板是邮件营销活动的基础。它们包含：

1. **静态内容**：保持一致的基础信息
2. **动态变量**：会被替换为收件人特定数据的占位符
3. **AI 生成**：可选的 AI 驱动内容创建
4. **富文本格式**：支持多种文本样式

## 创建邮件模板

### 第一步：进入邮件营销

1. 点击左侧导航菜单中的 **Email Marketing**
2. 从子菜单中选择 **Templates**
3. 点击 **Create New Template**

### 第二步：模板信息

输入以下详细信息：

#### 标题（必填）

- **用途**：在列表中标识模板
- **示例**："产品发布推广"、"合作提案"
- **建议**：使用具有描述性的具体名称

#### 描述（可选）

- **用途**：提供模板使用场景的上下文信息
- **示例**："面向合格潜在客户的新产品发布初始推广"
- **建议**：包含使用时机、目标受众和关键信息

### 第三步：模板内容

在富文本编辑器中编写您的邮件内容。

#### 使用变量

变量是在发送邮件时会被实际数据替换的占位符。

**可用变量：**

| 变量 | 描述 | 示例输出 |
|----------|-------------|----------------|
| `{$send_time}` | 当前时间戳 | "2024-01-15 10:30 AM" |
| `{$sender}` | 发件人姓名 | "John Smith" |
| `{$receiver_email}` | 收件人邮箱 | "contact@company.com" |
| `{$url}` | 来源网址 | "https://company.com" |
| `{$description}` | 描述文本 | "Software company in New York" |

**使用变量的模板示例：**

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

**变量替换后：**

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

### 第四步：AI 生成内容（可选）

使用 AI 驱动的内容生成：

1. **开启"Use AI Generation"开关**
2. **提供提示词**描述您想要的内容
3. **启用 RAG 上下文**以使用知识库
4. **点击 Generate** 生成内容

**提示词示例：**
- "撰写一封关于我们营销服务的友好介绍邮件"
- "创建一封提及我们 SaaS 平台功能的个性化推广邮件"
- "生成一封合作提案邮件"

:::tip AI + RAG 集成

当启用 RAG 上下文时，AI 将自动参考您的知识库，包含关于您的产品、服务和价值主张的准确信息。

:::

### 第五步：预览和测试

1. **点击"Preview"** 查看带有示例变量的模板
2. **测试不同的变量组合**
3. **根据需要编辑内容**
4. 满意后 **Save Template**

## 管理模板

### 模板列表

导航至 **Email Marketing** → **Templates** 查看所有模板。

**模板信息：**
- 标题
- 描述
- 创建日期
- 最后修改日期
- 使用次数

### 模板操作

| 操作 | 描述 |
|--------|-------------|
| **Edit** | 修改模板内容和变量 |
| **Duplicate** | 创建模板副本 |
| **Delete** | 删除模板（需确认） |
| **Preview** | 查看带有示例变量的模板 |
| **Use in Campaign** | 选择用于批量邮件发送 |

### 模板最佳实践

#### 1. 清晰的主题行

- ✅ "合作机会：[对方公司] + [您的公司]"
- ✅ "关于[对方行业]的一个问题"
- ❌ "你好" 或 "嗨"

#### 2. 个性化

- 使用变量来个性化内容
- 提及收件人的具体细节
- 引用他们的网站、行业或业务

#### 3. 价值优先

- 以价值为导向，而不仅仅是推销
- 解释利益，而不仅仅是功能
- 明确对方能获得什么

#### 4. 明确的行动号召

- 单一、清晰的下一步
- 易于理解
- 低门槛（例如，"回复此邮件"）

#### 5. 专业的语气

- 检查语法和拼写
- 保持专业用语
- 避免过于随意或过度推销的语言

## 模板示例

### 示例一：产品推广

**主题：** 用 [产品名称] 提升您的 [行业] 工作流程

```
Hi,

I noticed on {$url} that you're in the [Industry] space.

I'm reaching out because our platform has helped companies like [Description]
reduce their workflow time by up to 40%.

Would you be interested in a quick demo to see how it could work for {$receiver_email}?

Best,
{$sender}
```

### 示例二：合作提案

**主题：** [对方公司] 与 [您的公司] 的合作机会

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

### 示例三：内容合作

**主题：** 内容合作机会

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

### 示例四：服务介绍

**主题：** 为 [对方公司] 提供 [服务类型]

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

## 高级功能

### 条件内容

根据收件人数据创建不同版本：

```
{$if_industry}
If they're in [Industry], mention relevant case studies
{$endif}

{$if_company_size}
Adjust messaging based on company size
{$endif}
```

### 多语言支持

创建多语言模板：

1. **复制模板**用于每种语言
2. **翻译内容**，保持变量结构不变
3. **根据收件人所在地区使用相应模板**

### A/B 测试

创建多个模板变体：

1. **复制模板** 2-3 次
2. **每个版本仅修改一处**（主题行、开头、行动号召）
3. **先用小批量测试**
4. **衡量结果**并使用最佳版本

### 动态内容块

根据变量使用不同的内容片段：

```
{$value_proposition_1}
Alternative: {$value_proposition_2}
Alternative: {$value_proposition_3}
```

## 与批量邮件发送的集成

模板在批量邮件发送工作流中使用：

1. **选择模板**在批量邮件流程的第二步
2. **变量自动填充**来自您的邮件列表
3. **每位收件人收到个性化邮件**
4. **AI 可以增强**模板，融入知识库内容

详细说明请参阅[批量邮件发送](../lead-generation/batch-email-sending)。

## 故障排除

### 变量未被替换

**可能原因：**
- 变量名拼写错误
- 邮件列表中缺少数据
- 变量语法不正确

**解决方案：**
1. 检查变量语法：`{$variable_name}`
2. 确认所有变量的数据都存在
3. 发送前使用预览进行测试

### AI 生成不工作

**可能原因：**
- AI 服务未配置
- RAG 上下文已启用但知识库中没有文档
- 提示词过于模糊

**解决方案：**
1. 检查系统配置中的 AI 设置
2. 将相关文档上传至知识库
3. 提供具体、详细的提示词
4. 先尝试在禁用 RAG 的情况下使用

### 模板过于通用

**可能原因：**
- 过多使用静态文本
- 变量不足
- AI 生成已禁用

**解决方案：**
1. 添加更多变量以实现个性化
2. 启用 AI 生成以获取动态内容
3. 使用 RAG 上下文获取具体信息
4. 为不同使用场景创建多个模板

## 最佳实践总结

### 应该做 ✅

- **使用变量**实现内容个性化
- **在营销活动前充分测试**
- **保持主题行**清晰且有吸引力
- ** upfront 提供价值**
- **使用明确的行动号召**
- **校对所有模板**
- **为不同受众创建变体**
- **结合 RAG 上下文使用 AI**

### 不应该做 ❌

- **不要过度推销**
- **不要使用模糊的主题行**
- **不要未经测试就发送**
- **不要忽略收件人上下文**
- **不要让邮件过长**
- **不要使用过多格式**
- **不要忘记行动号召**
- **不要使用"no-reply"地址发送**

## 下一步

创建模板后：

- [配置邮件服务 (SMTP)](../lead-generation/batch-email-sending#configuring-email-services)
- [设置批量邮件发送](../lead-generation/batch-email-sending)
- [使用 AI 营销助手](./ai-marketing-assistant) 制定策略

---

**准备好创建模板了吗？** 从一个简单的推广模板开始，随着您对系统的熟悉，逐步添加更多个性化和 AI 生成内容。
