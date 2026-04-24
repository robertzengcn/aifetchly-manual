---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Manage and extend aiFetchly's AI capabilities with customizable skills - import, uninstall, enable/disable, and use in AI Chat.
---

# AI Skills

AI Skills are modular extensions that enhance aiFetchly's AI chat capabilities. Skills add specialized knowledge, custom tools, and domain-specific functionality to the AI Marketing Assistant.

## What Are AI Skills?

AI Skills are packaged components that extend the AI's capabilities:

- **Built-in Skills**: Pre-installed skills with core functionality
- **User-Installed Skills**: Custom skills you import for specific use cases

Each skill has:
- A unique name and version
- A category (e.g., "web-search", "data-analysis", "automation")
- Enable/disable state
- A manifest defining permissions and capabilities

## Accessing AI Skills

1. Click **Settings** in the left navigation menu
2. Navigate to **Skills**
3. View the list of installed skills with their status

## Importing Skills

### Step 1: Obtain Skill Package

Skills are distributed as `.zip` files. You can get skills from:
- Official aiFetchly skill marketplace
- Community-contributed skills
- Custom-developed skills for your organization

### Step 2: Import the Skill

1. In the Skills page, click the **Import** button (top-right, with upload icon)
2. A file selection dialog opens
3. Navigate to your skill `.zip` file
4. Select the file and confirm

### Step 3: Verify Installation

After import:
- The skill appears in the skills table
- Status shows as **Enabled** by default
- Verify the skill's category and version match expectations

:::tip Import Tips

- Only `.zip` files are supported
- The skill must have a valid `manifest.json` inside
- If import fails, check the zip file integrity and manifest format

:::

## Managing Skills

### View Installed Skills

The skills table displays:

| Column | Description |
|--------|-------------|
| **Name** | Skill identifier/name |
| **Source** | `Built-in` or `User-installed` badge |
| **Category** | Skill's functional category |
| **Version** | Current version number |
| **Status** | `Enabled` or `Disabled` badge |
| **Actions** | Enable/disable toggle and uninstall button |

### Enable/Disable Skills

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

### Uninstall Skills

To remove a user-installed skill:

1. Locate the skill in the table
2. Click the **Delete** (trash can) icon in the Actions column
3. Confirm the uninstall action in the dialog

:::warning Uninstall Warning

Uninstalling a skill permanently removes it. You'll need to re-import if you want to use it again.

:::

## Using Skills in AI Chat

Skills become available in the **AI Marketing Assistant** once enabled.

### Accessing AI Chat

1. Navigate to **AI Marketing Assistant** (or **AI Chat**)
2. Start a new conversation or continue existing one

### How Skills Work in Chat

Enabled skills automatically integrate with AI responses:

1. **Automatic Tool Selection**: AI chooses relevant skills based on your query
2. **Manual Invocation**: Request specific skill functionality
3. **Combined Outputs**: Multiple skills can work together

### Example Skill Usage

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

### Skill Indicators in Chat

When a skill is used:
- The skill name may appear in the response
- A small icon or badge indicates skill activation
- Tool usage is shown in the conversation flow

## Skill Categories

Skills are organized by functional category:

| Category | Purpose | Example Skills |
|----------|---------|----------------|
| **Web Search** | Internet research, trend analysis | Search engine, social media monitoring |
| **Data Analysis** | Processing and interpreting data | CSV analysis, statistical modeling |
| **Automation** | Workflow automation tasks | Email automation, task scheduling |
| **Integration** | External service connections | CRM, API connectors |
| **Content** | Content generation and optimization | Blog writing, SEO optimization |
| **Pure** | General-purpose utilities | Text processing, formatting |

## Troubleshooting

### Skill Not Appearing in Chat

**Possible causes:**
- Skill is disabled
- Skill installation incomplete
- Skill requires specific permissions

**Solutions:**
1. Check skill status in Settings → Skills
2. Enable the skill if disabled
3. Re-import the skill if corrupted
4. Verify skill manifest has required permissions

### Import Failed

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

### Skill Causes Errors

**Possible causes:**
- Skill bug or incompatibility
- Missing dependencies
- API key not configured

**Solutions:**
1. Disable the skill temporarily
2. Check skill documentation for requirements
3. Verify all required configurations are complete
4. Contact skill developer for support

### Built-in Skill Cannot Uninstall

Built-in skills are core to aiFetchly functionality and cannot be removed. You can only disable them if they conflict with other skills.

## Best Practices

### 1. Skill Selection

**Install Only What You Need:**
- Each skill adds complexity
- Too many skills may cause conflicts
- Start with essential skills, add as needed

### 2. Skill Updates

**Keep Skills Current:**
- Check for skill updates regularly
- Update skills for bug fixes and improvements
- Test updated skills before production use

### 3. Skill Organization

**Name and Categorize Well:**
- Use descriptive skill names
- Organize by functional category
- Document custom skill purposes

### 4. Testing

**Test Before Production:**
- Enable skills in test mode first
- Verify skill behavior in AI chat
- Check for conflicts with existing skills

### 5. Security

**Only Install Trusted Skills:**
- Verify skill source
- Review skill permissions
- Monitor skill behavior
- Remove unused skills

## Skill Development (For Developers)

### Manifest Structure

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

### Packaging

1. Include `manifest.json` at root
2. Add skill implementation files
3. Include any required assets
4. Zip the contents (not the folder)
5. Name the file `skill-name.zip`

## Integration with Other Features

### AI Marketing Assistant

Skills enhance AI chat capabilities:
- More accurate responses
- Access to external data sources
- Automated task execution

### MCP Tools

Skills and MCP tools can work together:
- Skills provide domain-specific logic
- MCP tools provide external connectivity
- Combined for powerful automation

### Knowledge Library

Skills can leverage your knowledge base:
- Search knowledge during chat
- Apply learned patterns
- Generate context-aware responses

## Next Steps

- [Configure System Settings](../settings/system-settings)
- [Learn about AI Marketing Assistant](./ai-marketing-assistant)
- [Set up Knowledge Library](./knowledge-library)

---

**Ready to extend AI capabilities?** Import your first skill and discover new possibilities for automation and intelligence.
