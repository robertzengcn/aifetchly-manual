---
id: ai-email-writer
title: AI Email Writer
sidebar_label: AI Email Writer
description: Create personalized, AI-generated email templates with variable substitution and Knowledge Library integration.
---

# AI Email Writer

The AI Email Writer is aiFetchly's intelligent email creation system. Generate personalized outreach emails, create reusable templates with dynamic variables, and leverage your Knowledge Library for context-aware messaging.

## Understanding AI Email Generation

Traditional email templates are static and generic. aiFetchly's AI Email Writer:

- **Generates unique content** for each recipient
- **Incorporates your knowledge base** through RAG integration
- **Personalizes at scale** while maintaining quality
- **Adapts to different contexts** and recipient types

:::info AI + Knowledge Library

For best results, [upload relevant documents](./knowledge-library) to your Knowledge Library before generating emails. The AI will reference your specific products, services, and value propositions.

:::

## Email Templates Overview

Templates are the foundation of your email campaigns. They contain:

1. **Static Content**: Base message that stays consistent
2. **Dynamic Variables**: Placeholders that get replaced with recipient-specific data
3. **AI Generation**: Optional AI-powered content creation
4. **Rich Formatting**: Support for various text styles

## Creating Email Templates

### Step 1: Navigate to Email Marketing

1. Click **Email Marketing** in the left navigation menu
2. Select **Templates** from the submenu
3. Click **Create New Template**

### Step 2: Template Information

Enter the following details:

#### Title (Required)

- **Purpose**: Identify the template in your list
- **Example**: "Product Launch Outreach", "Partnership Proposal"
- **Guideline**: Use descriptive, specific names

#### Description (Optional)

- **Purpose**: Provide context about the template's use case
- **Example**: "Initial outreach for new product launch to qualified leads"
- **Guideline**: Include when to use, target audience, and key messaging

### Step 3: Template Content

Write your email content in the rich text editor.

#### Using Variables

Variables are placeholders that get replaced with actual data when sending emails.

**Available Variables:**

| Variable | Description | Example Output |
|----------|-------------|----------------|
| `{$send_time}` | Current timestamp | "2024-01-15 10:30 AM" |
| `{$sender}` | Sender name | "John Smith" |
| `{$receiver_email}` | Recipient's email | "contact@company.com" |
| `{$url}` | Source URL | "https://company.com" |
| `{$description}` | Description text | "Software company in New York" |

**Example Template with Variables:**

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

**After Variable Substitution:**

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

### Step 4: AI-Generated Content (Optional)

For AI-powered content generation:

1. **Toggle "Use AI Generation"**
2. **Provide a prompt** describing what you want
3. **Enable RAG Context** to use Knowledge Library
4. **Click Generate** to create content

**Example Prompts:**
- "Write a friendly introduction email for our marketing services"
- "Create a personalized outreach mentioning our SaaS platform features"
- "Generate a partnership proposal email"

:::tip AI + RAG Integration

When RAG context is enabled, the AI will automatically reference your Knowledge Library to include accurate information about your products, services, and value propositions.

:::

### Step 5: Preview and Test

1. **Click "Preview"** to see the template with sample variables
2. **Test different variable combinations**
3. **Edit content** as needed
4. **Save Template** when satisfied

## Managing Templates

### Template List

Navigate to **Email Marketing** → **Templates** to see all templates.

**Template Information:**
- Title
- Description
- Creation date
- Last modified date
- Usage count

### Template Actions

| Action | Description |
|--------|-------------|
| **Edit** | Modify template content and variables |
| **Duplicate** | Create a copy of the template |
| **Delete** | Remove template (confirm required) |
| **Preview** | See template with sample variables |
| **Use in Campaign** | Select for batch email sending |

### Best Practices for Templates

#### 1. Clear Subject Lines

- ✅ "Partnership Opportunity: [Their Company] + [Your Company]"
- ✅ "Quick Question About [Their Industry]"
- ❌ "Hello" or "Hi"

#### 2. Personalization

- Use variables to personalize content
- Mention specific details about the recipient
- Reference their website, industry, or work

#### 3. Value-First Approach

- Lead with value, not just a pitch
- Explain benefits, not just features
- Be clear about what's in it for them

#### 4. Clear Call-to-Action

- Single, clear next step
- Easy to understand
- Low friction (e.g., "Reply to this email")

#### 5. Professional Tone

- Proofread for grammar and spelling
- Maintain professional language
- Avoid overly casual or salesy language

## Template Examples

### Example 1: Product Outreach

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

### Example 2: Partnership Proposal

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

### Example 3: Content Collaboration

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

### Example 4: Service Introduction

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

## Advanced Features

### Conditional Content

Create variations based on recipient data:

```
{$if_industry}
If they're in [Industry], mention relevant case studies
{$endif}

{$if_company_size}
Adjust messaging based on company size
{$endif}
```

### Multi-Language Support

Create templates in multiple languages:

1. **Duplicate template** for each language
2. **Translate content** maintaining variable structure
3. **Use appropriate template** based on recipient location

### A/B Testing

Create multiple template variations:

1. **Duplicate template** 2-3 times
2. **Make one change** per version (subject line, opening, CTA)
3. **Test with small batches** first
4. **Measure results** and use winning version

### Dynamic Content Blocks

Use different content sections based on variables:

```
{$value_proposition_1}
Alternative: {$value_proposition_2}
Alternative: {$value_proposition_3}
```

## Integration with Batch Email Sending

Templates are used in the batch email sending workflow:

1. **Choose Template** in Step 2 of the batch email process
2. **Variables are automatically populated** from your email list
3. **Each recipient gets a personalized email**
4. **AI can enhance** the template with Knowledge Library content

For detailed instructions, see [Batch Email Sending](./batch-email-sending).

## Troubleshooting

### Variables Not Replaced

**Possible causes:**
- Variable names misspelled
- Missing data in email list
- Incorrect variable syntax

**Solutions:**
1. Check variable syntax: `{$variable_name}`
2. Verify data exists for all variables
3. Test with preview before sending

### AI Generation Not Working

**Possible causes:**
- AI service not configured
- RAG context enabled but no documents in Knowledge Library
- Prompt too vague

**Solutions:**
1. Check AI settings in system configuration
2. Upload relevant documents to Knowledge Library
3. Provide specific, detailed prompts
4. Try with RAG disabled first

### Template Too Generic

**Possible causes:**
- Overuse of static text
- Not enough variables
- AI generation disabled

**Solutions:**
1. Add more variables for personalization
2. Enable AI generation for dynamic content
3. Use RAG context for specific information
4. Create multiple templates for different use cases

## Best Practices Summary

### DO ✅

- **Personalize content** with variables
- **Test thoroughly** before campaigns
- **Keep subject lines** clear and compelling
- **Provide value** upfront
- **Use clear CTAs**
- **Proofread** all templates
- **Create variations** for different audiences
- **Leverage AI** with RAG context

### DON'T ❌

- **Don't be overly salesy**
- **Don't use vague subject lines**
- **Don't send without testing**
- **Don't ignore recipient context**
- **Don't make emails too long**
- **Don't use excessive formatting**
- **Don't forget call-to-action**
- **Don't send from "no-reply" addresses**

## Next Steps

After creating your templates:

- [Configure email services (SMTP)](./batch-email-sending#configuring-email-services)
- [Set up batch email sending](./batch-email-sending)
- [Use the AI Marketing Assistant](./ai-marketing-assistant) for strategy

---

**Ready to create templates?** Start with a simple outreach template and gradually add more personalization and AI-generated content as you become familiar with the system.
