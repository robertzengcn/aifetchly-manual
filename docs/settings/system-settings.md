---
id: system-settings
title: System Settings
sidebar_label: System Settings
description: Configure aiFetchly's browser paths, captcha solving, and system preferences.
---

# System Settings

The System Settings section allows you to configure aiFetchly's core functionality, including browser paths for web automation, captcha solving, embedding models, and system preferences. Proper configuration ensures optimal performance for all features.

## Accessing System Settings

1. Click **Settings** in the left navigation menu
2. A tree-based navigation panel appears on the left
3. Click on any category to expand its settings
4. Modify settings as needed
5. Changes are saved automatically

:::info Auto-Save

Most settings save automatically when modified. Look for save indicators or confirmation messages.

:::

## Settings Overview

### 2Captcha Service

Automated captcha solving for web information organization.

| Setting | Description |
|---------|-------------|
| **Token** | Your 2Captcha API token |
| **Enabled** | Toggle captcha solving on/off |

**Setup (Optional):**
1. Sign up at https://2captcha.com
2. Add funds to account
3. Get API token from dashboard
4. Enter token and enable service

:::info When to Use 2Captcha

Useful when:
- Information Organization at scale
- Encountering frequent captchas
- Don't want to solve captchas manually

:::

### Embedding Configuration

Configure the default embedding model for RAG (Retrieval-Augmented Generation).

| Setting | Description |
|---------|-------------|
| **Default Model** | Select from available embedding models |

**Options:**
- Various embedding models with different dimensions
- Choose based on:
  - Language support
  - Performance requirements
  - Resource constraints

### External System Paths

Configure browser paths for local browser integration.

#### Chrome Path

**Purpose**: Path to Chrome browser executable

**To Configure:**
1. Click **Browse** or file selection button
2. Navigate to Chrome installation
3. Select executable

**Default Paths (by OS):**
- **Windows**: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- **macOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Linux**: `/usr/bin/google-chrome` or `/usr/bin/chromium-browser`

#### Firefox Path

**Purpose**: Path to Firefox browser executable

**To Configure:**
1. Click **Browse** or file selection button
2. Navigate to Firefox installation
3. Select executable

**Default Paths (by OS):**
- **Windows**: `C:\Program Files\Mozilla Firefox\firefox.exe`
- **macOS**: `/Applications/Firefox.app/Contents/MacOS/firefox`
- **Linux**: `/usr/bin/firefox`

:::tip Browser Path Requirements

Browser paths are required for:
- Local browser integration features
- Yandex market insight exploration (requires browser)
- Certain anti-bot detection scenarios

:::

### User Preferences

Configure your aiFetchly experience.

#### Language

**Options:**
- **English**: Interface in English
- **中文**: Interface in Chinese (Simplified)

**To Change:**
1. Select preferred language from dropdown
2. Interface updates immediately
3. Restart recommended for full language change

#### AI Website Analysis Business Info

**Purpose**: Provide context for AI-powered website analysis

**Format**: JSON configuration

**Example:**
```json
{
  "industry": "Software",
  "company_size": "50-200 employees",
  "target_markets": ["B2B", "SaaS"],
  "keywords": ["marketing", "automation"]
}
```

**Usage:**
- AI uses this context when analyzing websites
- Improves relevance of analysis results
- Customizes scoring and categorization

## MCP Tools Management

**MCP** (Model Context Protocol) allows integration with external tools and services, extending the AI Marketing Assistant with capabilities like web search, database queries, and custom API calls.

For full documentation on configuring and using MCP servers, see [MCP Tools](../ai-outreach/mcp-tools).

## Configuration Best Practices

### 1. Browser Configuration

**Chrome vs Firefox:**
- Chrome: Better compatibility, more features
- Firefox: Open-source, privacy-focused

**Recommendation:** Configure Chrome as primary, Firefox as backup.

### 2. Captcha Solving

**When to Enable:**
- Large-scale information organization operations (>1000 pages)
- Frequent captcha encounters
- Don't want manual intervention

**When to Disable:**
- Small-scale information organization
- To save costs (2captcha has fees)
- Rare captcha encounters

### 3. Language Settings

**Choose Based On:**
- Your native language
- Target audience language
- Content language (for Knowledge Library)

**Note:** Language preference affects UI only. AI can process multiple languages regardless of setting.

### 4. MCP Tools

**Add Sparingly:**
- Only add tools you'll use
- Each tool adds complexity
- Test tools individually

**Security:**
- Only use trusted MCP servers
- Keep credentials secure
- Review tool permissions

## Troubleshooting

### Browser Integration Not Working

**Possible causes:**
- Incorrect browser path
- Browser not installed
- Permission issues

**Solutions:**
1. Verify browser is installed
2. Check file path is correct
3. Test by launching browser directly
4. Run aiFetchly with admin/sudo permissions

### Captcha Not Solving

**Possible causes:**
- 2Captcha token invalid
- Insufficient funds
- Service disabled

**Solutions:**
1. Verify 2Captcha token is correct
2. Check account balance
3. Ensure 2Captcha toggle is enabled
4. Test with manual captcha first

### Settings Not Saving

**Possible causes:**
- Database locked
- Insufficient permissions
- Application error

**Solutions:**
1. Restart aiFetchly
2. Run as administrator/sudo
3. Check application logs
4. Verify database isn't read-only

### MCP Tools Not Appearing

**Possible causes:**
- Server not configured correctly
- Connection test failed
- Tools disabled

**Solutions:**
1. Verify server configuration
2. Test connection
3. Check server is running
4. Enable individual tools

## Advanced Configuration

### Multiple Embedding Models

Configure different embedding models for different purposes:

1. Navigate to **Embedding Configuration**
2. Add multiple models
3. Set default model
4. Use specific models per task

### Environment-Specific Settings

Different settings for different environments:

**Development:**
- Disable captcha solving
- Enable debug logging

**Production:**
- Enable captcha solving
- Disable debug logging

## Security Considerations

### Browser Paths

**Security:**
- Only use trusted browser installations
- Verify browser executables are legitimate
- Keep browsers updated
- Be cautious with custom browser builds

### MCP Tools

**Security:**
- Only connect to trusted MCP servers
- Review tool permissions carefully
- Use authentication whenever available
- Monitor tool usage
- Revoke access when not needed

## AI Skills Management

AI Skills are modular extensions that enhance aiFetchly's AI chat capabilities. Skills can be imported, enabled/disabled, and used within the AI Marketing Assistant.

For full documentation on importing, managing, and using AI Skills, see [AI Skills](../ai-outreach/ai-skills).

## Next Steps

After configuring system settings:

- [Return to Getting Started](../getting-started/introduction)
- [Set up your first search task](../lead-generation/search-engines)
- [Configure email services](../lead-generation/batch-email-sending)
- [Learn about AI Marketing Assistant](../ai-outreach/ai-marketing-assistant)

---

**Configuration Complete!** Your aiFetchly is now set up and ready to help you generate leads and automate your marketing workflows.
