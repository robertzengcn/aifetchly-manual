---
id: system-settings
title: System Settings
sidebar_label: System Settings
description: Configure aiFetchly's AI models, browser paths, and system preferences.
---

# System Settings

The System Settings section allows you to configure aiFetchly's core functionality, including AI model providers, browser paths for web automation, and system preferences. Proper configuration ensures optimal performance for all features.

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

### AI Model Providers

Configure one or more AI model providers to power aiFetchly's AI features. **At least one provider must be configured** for AI functionality to work.

#### DeepSeek Local

**Best for**: Offline usage, privacy, no API costs

| Setting | Description | Default |
|---------|-------------|---------|
| **URL** | Local API endpoint | `http://localhost:11434` |
| **Model** | Model name | `deepseek-r1:latest` |

**Setup Required:**
1. Install Ollama (https://ollama.ai)
2. Pull DeepSeek model: `ollama pull deepseek-r1`
3. Start Ollama service
4. Keep URL as default if running locally

:::tip Local AI Advantages

- No API costs
- Data stays on your machine
- Works offline
- Privacy-focused

:::

#### DeepSeek API

**Best for**: Reliable performance, regular updates

| Setting | Description | Default |
|---------|-------------|---------|
| **API URL** | DeepSeek API endpoint | `https://api.deepseek.com` |
| **API Model** | Model to use | `deepseek-chat` |
| **API Key** | Your API key | *(Required)* |

**Setup Required:**
1. Sign up at https://platform.deepseek.com
2. Generate API key
3. Enter API key in settings

#### GrokAI

**Best for**: X/Twitter integration, real-time data

| Setting | Description | Default |
|---------|-------------|---------|
| **API URL** | GrokAI API endpoint | *(Configure)* |
| **API Model** | Model to use | *(Configure)* |
| **API Key** | Your API key | *(Configure)* |

**Setup Required:**
1. Sign up for X Premium+ (for Grok access)
2. Obtain API credentials
3. Configure URL, model, and API key

#### OpenAI

**Best for**: GPT models, reliable service

| Setting | Description | Default |
|---------|-------------|---------|
| **API URL** | OpenAI API endpoint | `https://api.openai.com/v1` |
| **API Model** | Model to use | `gpt-4`, `gpt-3.5-turbo`, etc. |
| **API Key** | Your API key | *(Required)* |

**Setup Required:**
1. Sign up at https://platform.openai.com
2. Create API key
3. Enter key in settings

#### Volcengine (Doubao)

**Best for**: Chinese language support, cost-effective

| Setting | Description | Default |
|---------|-------------|---------|
| **API URL** | Volcengine API endpoint | `https://ark.cn-beijing.volces.com/api/v3/` |
| **API Model** | Model to use | `doubao-1.5-pro-32k-250115` |
| **API Key** | Your API key | *(Configure)* |

**Setup Required:**
1. Sign up at Volcengine platform
2. Enable Doubao API service
3. Enter API credentials

### 2Captcha Service

Automated captcha solving for web scraping.

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
- Scraping at scale
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
- Yandex scraping (requires browser)
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

**MCP** (Model Context Protocol) allows integration with external tools and services.

### What Are MCP Tools?

MCP tools extend aiFetchly's AI capabilities by connecting to external services:
- Web search tools
- Database connectors
- API integrations
- Custom business logic

### Managing MCP Tools

Navigate to **Settings** → **MCP Tools**

**Available Actions:**

| Action | Description |
|--------|-------------|
| **Add Server** | Add new MCP server connection |
| **Edit Server** | Modify server configuration |
| **Remove Server** | Delete server connection |
| **Test Connection** | Verify server connectivity |
| **Enable/Disable Tools** | Toggle individual tools |

### MCP Server Configuration

When adding/editing an MCP server:

| Setting | Description |
|---------|-------------|
| **Name** | Server identifier |
| **Transport Type** | `stdio`, `SSE`, or `WebSocket` |
| **Command** | Command to run (for stdio) |
| **URL** | Server URL (for SSE/WebSocket) |
| **Authentication** | API key, Bearer token, or Custom |
| **Credentials** | Username/password or token |

### Using MCP Tools

Once configured:

1. **Enabled in AI Chat**: Tools available in AI Marketing Assistant
2. **Automatic Discovery**: AI can use available tools
3. **Manual Invocation**: Request specific tool usage

**Example Usage:**
```
User: "Search the web for latest SaaS pricing trends"
AI: [Uses web search MCP tool]
AI: "Here are the latest SaaS pricing trends..."
```

## Configuration Best Practices

### 1. AI Provider Setup

**Primary Provider:**
- Configure at least one provider fully
- Test connectivity before using features
- Keep API keys secure

**Backup Providers:**
- Configure 2-3 providers for redundancy
- Use different providers for different use cases
- Monitor API usage and costs

### 2. Browser Configuration

**Chrome vs Firefox:**
- Chrome: Better compatibility, more features
- Firefox: Open-source, privacy-focused

**Recommendation:** Configure Chrome as primary, Firefox as backup.

### 3. Captcha Solving

**When to Enable:**
- Large-scale scraping operations (>1000 pages)
- Frequent captcha encounters
- Don't want manual intervention

**When to Disable:**
- Small-scale scraping
- To save costs (2captcha has fees)
- Rare captcha encounters

### 4. Language Settings

**Choose Based On:**
- Your native language
- Target audience language
- Content language (for Knowledge Library)

**Note:** Language preference affects UI only. AI can process multiple languages regardless of setting.

### 5. MCP Tools

**Add Sparingly:**
- Only add tools you'll use
- Each tool adds complexity
- Test tools individually

**Security:**
- Only use trusted MCP servers
- Keep credentials secure
- Review tool permissions

## Troubleshooting

### AI Features Not Working

**Possible causes:**
- No AI provider configured
- API key invalid or expired
- Local model not running

**Solutions:**
1. Verify at least one AI provider is configured
2. Test API key with provider's test endpoint
3. For local models, ensure service is running
4. Check network connectivity for API providers

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

### Custom API Endpoints

For advanced users with self-hosted models:

1. Select provider (e.g., OpenAI-compatible)
2. Set API URL to your endpoint
3. Configure model name
4. Add authentication if required

**Use Cases:**
- Self-hosted LLaMA models
- Private API deployments
- Custom model fine-tunes

### Multiple Embedding Models

Configure different embedding models for different purposes:

1. Navigate to **Embedding Configuration**
2. Add multiple models
3. Set default model
4. Use specific models per task

### Environment-Specific Settings

Different settings for different environments:

**Development:**
- Use local AI models
- Disable captcha solving
- Enable debug logging

**Production:**
- Use API providers for reliability
- Enable captcha solving
- Disable debug logging

## Security Considerations

### API Key Management

**Best Practices:**
- Treat API keys like passwords
- Don't share or commit to version control
- Rotate keys periodically
- Monitor usage for anomalies
- Revoke compromised keys immediately

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

AI Skills are modular extensions that enhance aiFetchly's AI chat capabilities. Skills add specialized knowledge, custom tools, and domain-specific functionality to the AI Marketing Assistant.

### What Are AI Skills?

AI Skills are packaged components that extend the AI's capabilities:

- **Built-in Skills**: Pre-installed skills with core functionality
- **User-Installed Skills**: Custom skills you import for specific use cases

Each skill has:
- A unique name and version
- A category (e.g., "web-search", "data-analysis", "automation")
- Enable/disable state
- A manifest defining permissions and capabilities

### Accessing AI Skills

1. Click **Settings** in the left navigation menu
2. Navigate to **Skills**
3. View the list of installed skills with their status

### Importing Skills

#### Step 1: Obtain Skill Package

Skills are distributed as `.zip` files. You can get skills from:
- Official aiFetchly skill marketplace
- Community-contributed skills
- Custom-developed skills for your organization

#### Step 2: Import the Skill

1. In the Skills page, click the **Import** button (top-right, with upload icon)
2. A file selection dialog opens
3. Navigate to your skill `.zip` file
4. Select the file and confirm

#### Step 3: Verify Installation

After import:
- The skill appears in the skills table
- Status shows as **Enabled** by default
- Verify the skill's category and version match expectations

:::tip Import Tips

- Only `.zip` files are supported
- The skill must have a valid `manifest.json` inside
- If import fails, check the zip file integrity and manifest format

:::

### Managing Skills

#### View Installed Skills

The skills table displays:

| Column | Description |
|--------|-------------|
| **Name** | Skill identifier/name |
| **Source** | `Built-in` or `User-installed` badge |
| **Category** | Skill's functional category |
| **Version** | Current version number |
| **Status** | `Enabled` or `Disabled` badge |
| **Actions** | Enable/disable toggle and uninstall button |

#### Enable/Disable Skills

To toggle a skill's state:

1. Locate the skill in the table
2. Use the **toggle buttons** in the Actions column:
   - **Check mark** (green): Enable the skill
   - **X mark** (grey): Disable the skill

**When to Disable:**
- Skill conflicts with another skill
- Temporary troubleshooting
- Skill not needed for current tasks
- Testing skill behavior

**Note:** Built-in skills cannot be uninstalled, only disabled.

#### Uninstall Skills

To remove a user-installed skill:

1. Locate the skill in the table
2. Click the **Delete** (trash can) icon in the Actions column
3. Confirm the uninstall action in the dialog

:::warning Uninstall Warning

Uninstalling a skill permanently removes it. You'll need to re-import if you want to use it again.

:::

### Using Skills in AI Chat

Skills become available in the **AI Marketing Assistant** once enabled.

#### Accessing AI Chat

1. Navigate to **AI Marketing Assistant** (or **AI Chat**)
2. Start a new conversation or continue existing one

#### How Skills Work in Chat

Enabled skills automatically integrate with AI responses:

1. **Automatic Tool Selection**: AI chooses relevant skills based on your query
2. **Manual Invocation**: Request specific skill functionality
3. **Combined Outputs**: Multiple skills can work together

#### Example Skill Usage

**Web Search Skill:**
```
User: "What are the latest trends in SaaS marketing?"
AI: [Uses web search skill to find current information]
AI: "Based on recent data, SaaS marketing trends include..."
```

**Data Analysis Skill:**
```
User: "Analyze this customer data and identify patterns"
AI: [Uses data analysis skill to process the data]
AI: "The analysis reveals these key patterns..."
```

**Automation Skill:**
```
User: "Set up an automated email campaign for new leads"
AI: [Uses automation skill to configure the campaign]
AI: "Your automated campaign is now configured with..."
```

#### Skill Indicators in Chat

When a skill is used:
- The skill name may appear in the response
- A small icon or badge indicates skill activation
- Tool usage is shown in the conversation flow

### Skill Categories

Skills are organized by functional category:

| Category | Purpose | Example Skills |
|----------|---------|----------------|
| **Web Search** | Internet research, trend analysis | Search engine, social media monitoring |
| **Data Analysis** | Processing and interpreting data | CSV analysis, statistical modeling |
| **Automation** | Workflow automation tasks | Email automation, task scheduling |
| **Integration** | External service connections | CRM, API connectors |
| **Content** | Content generation and optimization | Blog writing, SEO optimization |
| **Pure** | General-purpose utilities | Text processing, formatting |

### Troubleshooting Skills

#### Skill Not Appearing in Chat

**Possible causes:**
- Skill is disabled
- Skill installation incomplete
- Skill requires specific permissions

**Solutions:**
1. Check skill status in Settings → Skills
2. Enable the skill if disabled
3. Re-import the skill if corrupted
4. Verify skill manifest has required permissions

#### Import Failed

**Possible causes:**
- Invalid zip file format
- Missing or malformed `manifest.json`
- Skill already installed
- Corrupted download

**Solutions:**
1. Verify zip file integrity
2. Check manifest.json format and content
3. Uninstall existing version first, then re-import
4. Re-download the skill package

#### Skill Causes Errors

**Possible causes:**
- Skill bug or incompatibility
- Missing dependencies
- API key not configured

**Solutions:**
1. Disable the skill temporarily
2. Check skill documentation for requirements
3. Verify all required configurations are complete
4. Contact skill developer for support

#### Built-in Skill Cannot Uninstall

Built-in skills are core to aiFetchly functionality and cannot be removed. You can only disable them if they conflict with other skills.

### Best Practices for Skills

#### 1. Skill Selection

**Install Only What You Need:**
- Each skill adds complexity
- Too many skills may cause conflicts
- Start with essential skills, add as needed

#### 2. Skill Updates

**Keep Skills Current:**
- Check for skill updates regularly
- Update skills for bug fixes and improvements
- Test updated skills before production use

#### 3. Skill Organization

**Name and Categorize Well:**
- Use descriptive skill names
- Organize by functional category
- Document custom skill purposes

#### 4. Testing

**Test Before Production:**
- Enable skills in test mode first
- Verify skill behavior in AI chat
- Check for conflicts with existing skills

#### 5. Security

**Only Install Trusted Skills:**
- Verify skill source
- Review skill permissions
- Monitor skill behavior
- Remove unused skills

### Skill Development (For Developers)

#### Manifest Structure

A skill's `manifest.json` should include:

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "category": "automation",
  "permissions": ["web-search", "data-access"],
  "description": "Description of what this skill does"
}
```

#### Packaging

1. Include `manifest.json` at root
2. Add skill implementation files
3. Include any required assets
4. Zip the contents (not the folder)
5. Name the file `skill-name.zip`

### Integration with Other Features

#### AI Marketing Assistant

Skills enhance AI chat capabilities:
- More accurate responses
- Access to external data sources
- Automated task execution

#### MCP Tools

Skills and MCP tools can work together:
- Skills provide domain-specific logic
- MCP tools provide external connectivity
- Combined for powerful automation

#### Knowledge Library

Skills can leverage your knowledge base:
- Search knowledge during chat
- Apply learned patterns
- Generate context-aware responses

## Next Steps

After configuring system settings:

- [Return to Getting Started](../getting-started/introduction)
- [Set up your first search task](../lead-generation/search-engines)
- [Configure email services](../ai-outreach/batch-email-sending)
- [Learn about AI Marketing Assistant](../ai-outreach/ai-marketing-assistant)

---

**Configuration Complete!** Your aiFetchly is now set up and ready to help you generate leads and automate your marketing workflows.
