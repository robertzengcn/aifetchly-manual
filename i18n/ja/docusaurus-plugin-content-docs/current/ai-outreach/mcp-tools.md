---
id: mcp-tools
title: MCP Tools
sidebar_label: MCP Tools
description: Extend AI capabilities by connecting to external tools and services using the Model Context Protocol (MCP).
---

# MCP Tools

MCP (Model Context Protocol) allows aiFetchly to connect to external tools and services, extending the AI's capabilities beyond its built-in features. By adding MCP servers, the AI Marketing Assistant can perform web searches, access databases, call external APIs, and execute custom business logic.

## What is MCP?

The **Model Context Protocol** is an open standard that enables AI applications to interact with external tools and data sources in a secure, structured way. With MCP, aiFetchly can:

- **Search the web** for real-time information
- **Connect to databases** and query data
- **Call external APIs** for specialized processing
- **Execute custom tools** built for your workflow
- **Integrate with third-party services** (CRM, analytics, etc.)

Each MCP server exposes a set of **tools** — functions the AI can call during a conversation. For example, a web search server might expose a `search` tool, and a database server might expose a `query` tool.

## Accessing MCP Tools

MCP servers are managed from within the **AI Marketing Assistant** chat interface:

1. Open the AI Marketing Assistant (click the chat icon or press `Cmd/Ctrl + K`)
2. Click the **MCP Tools** button (server/network icon) in the chat toolbar
3. The MCP Tools management dialog opens

:::info Where to Find It

MCP Tools are accessed from the AI Chat interface, not from the main Settings page. Open any AI chat session to find the MCP Tools manager.

:::

## Adding MCP Servers

### Step 1: Open the Add Dialog

1. In the MCP Tools dialog, click **Add Server** (or the **+** button)
2. The Add MCP Server dialog opens

### Step 2: Choose Input Mode

You can add servers in two ways:

- **Form Mode**: Fill in individual fields (recommended for beginners)
- **JSON Mode**: Paste a JSON configuration block (faster for bulk setup, compatible with Claude Desktop format)

### Step 3: Configure the Server

#### Form Mode

| Field | Description | Required |
|-------|-------------|----------|
| **Server Name** | A descriptive name for this server | Yes |
| **Transport Type** | How to connect: `Stdio`, `SSE`, or `WebSocket` | Yes |
| **Host / Command** | Hostname (for SSE/WebSocket) or command to run (for Stdio) | Yes |
| **Port** | Port number (not needed for Stdio) | For SSE/WebSocket |
| **Authentication Type** | `None`, `API Key`, `Bearer Token`, or `Custom` | No |
| **Timeout** | Request timeout in milliseconds (default: 30000) | No |
| **Enabled** | Whether the server is active (default: enabled) | No |

#### JSON Mode

JSON mode accepts the standard `mcpServers` format used by Claude Desktop and other MCP clients:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uvx",
      "args": ["package-name"]
    }
  }
}
```

**Supported JSON properties:**

| Property | Description |
|----------|-------------|
| `command` | Command to execute (for Stdio transport) |
| `args` | Array of command arguments |
| `url` | Server URL (for SSE/WebSocket) |
| `host` | Hostname or IP address |
| `port` | Port number |
| `transport` | Transport type override |
| `enabled` | Enable/disable on add (default: true) |
| `authType` | Authentication type |
| `authConfig` | Authentication credentials |
| `timeout` | Request timeout in ms |

You can add multiple servers in a single JSON block by adding more entries under `mcpServers`.

:::tip Use Load Example

Click **Load Example** in JSON mode to see a sample configuration you can modify.

:::

### Step 4: Save

Click **Add** to save the server configuration. The server appears in the list with an **Enabled** status.

## Managing MCP Servers

### Server List

The MCP Tools dialog displays all configured servers:

| Element | Description |
|---------|-------------|
| **Server name** | Identifier you configured |
| **Status badge** | `Enabled` (green) or `Disabled` (grey) |
| **Connection info** | Transport type, host, and port |
| **Tool count** | Number of discovered tools |

### Enable/Disable a Server

1. Locate the server in the list
2. Click the **toggle switch** icon in the Actions column
3. The server status changes between Enabled and Disabled

**When disabled:** The AI cannot use any tools from this server, but the configuration is preserved.

### Edit a Server

1. Locate the server in the list
2. Click the **pencil** icon in the Actions column
3. Modify any configuration fields
4. Click **Update** to save changes

:::info JSON Mode Restriction

JSON mode is only available when adding new servers. To edit an existing server, use Form mode.

:::

### Delete a Server

1. Locate the server in the list
2. Click the **trash can** icon in the Actions column
3. Confirm the deletion in the dialog

:::warning Permanent Deletion

Deleting a server removes its configuration and all discovered tools. This action cannot be undone.

:::

## Discovering and Managing Tools

### Discover Tools

After adding a server, you need to discover the tools it provides:

1. Locate the server in the list
2. Click the **magnifying glass** (Discover Tools) icon
3. aiFetchly connects to the server and retrieves the list of available tools
4. Discovered tools appear under the server entry

:::tip Discover After Configuration Changes

Re-discover tools after changing a server's connection details. This ensures the tool list stays in sync with the server.

:::

### View Discovered Tools

Click on a server entry to expand it and see its tools:

- Each tool shows its name
- Tools have individual enable/disable toggles
- Tool names are prefixed with `mcp_` when used by the AI

### Enable/Disable Individual Tools

1. Expand the server to see its tools
2. Use the **toggle switch** next to each tool name
3. Disabled tools will not be available to the AI, even if the server is enabled

This is useful when a server provides many tools but you only want specific ones available to the AI.

### Test Connection

To verify a server is reachable:

1. Locate the server in the list
2. Click the **network check** (Test Connection) icon
3. aiFetchly attempts to connect and reports success or failure

## Transport Types

### Stdio

**Best for:** Local tools, command-line programs, npm packages

The Stdio transport launches a local process and communicates via standard input/output.

**Configuration:**
- **Host/Command**: The command to execute (e.g., `node server.js`, `uvx package-name`)
- **Port**: Not applicable

**Example commands:**
- `npx @modelcontextprotocol/server-memory` — In-memory knowledge graph
- `uvx blender-mcp` — Blender integration
- `node /path/to/custom-server.js` — Custom local server

### SSE (Server-Sent Events)

**Best for:** HTTP-based services, cloud-hosted tools

SSE transport connects to an HTTP endpoint that streams tool results.

**Configuration:**
- **Host**: Server hostname or IP (e.g., `api.example.com`)
- **Port**: Server port number (e.g., `8080`)

### WebSocket

**Best for:** Real-time services, bidirectional communication

WebSocket transport establishes a persistent connection for tool communication.

**Configuration:**
- **Host**: Server hostname or IP
- **Port**: Server port number

## Authentication

MCP servers support several authentication methods:

| Type | Use Case | Fields |
|------|----------|--------|
| **None** | Public/local servers | No credentials needed |
| **API Key** | Services requiring an API key | API Key (password field) |
| **Bearer Token** | OAuth/token-based services | Bearer Token (password field) |
| **Custom** | Non-standard authentication | JSON configuration |

## Using MCP Tools in AI Chat

Once MCP servers are configured and tools are discovered:

1. **Open AI Marketing Assistant**
2. The AI automatically detects all enabled tools from enabled servers
3. Tools appear as available functions the AI can call
4. The AI decides when to use a tool based on your query

### Example: Web Search

```
User: "Search the web for latest SaaS pricing trends"
AI: [Calls the search tool from your web search MCP server]
AI: "Here are the latest SaaS pricing trends I found..."
```

### Example: Database Query

```
User: "How many leads did we get last week from our website?"
AI: [Calls the query tool from your database MCP server]
AI: "Based on the database query, you received 247 leads last week..."
```

### Example: Custom API

```
User: "Check if our competitor has updated their pricing page"
AI: [Calls the monitoring tool from your custom MCP server]
AI: "Yes, they updated their pricing page yesterday. Here are the changes..."
```

### How the AI Uses Tools

The AI follows this process:

1. **Analyzes your request** to determine if a tool is needed
2. **Selects the appropriate tool** from available MCP tools
3. **Calls the tool** with the necessary parameters
4. **Incorporates the result** into its response

You can also explicitly ask the AI to use a specific tool:
- "Use the web search tool to find..."
- "Query the database for..."
- "Call the [tool name] to..."

## Troubleshooting

### Connection Failed

**Possible causes:**
- Server is not running
- Incorrect host/port
- Firewall blocking the connection
- Authentication credentials are wrong

**Solutions:**
1. Verify the server is running and accessible
2. Check host and port configuration
3. Use **Test Connection** to diagnose
4. Verify authentication credentials
5. Check firewall and network settings

### Tool Discovery Fails

**Possible causes:**
- Server is not responding
- Server does not implement the MCP protocol correctly
- Connection timeout

**Solutions:**
1. Test the connection first
2. Verify the server supports MCP protocol
3. Increase the timeout setting
4. Check server logs for errors

### AI Doesn't Use MCP Tools

**Possible causes:**
- Server is disabled
- All tools are disabled
- Tools not discovered yet
- AI doesn't recognize the query as needing a tool

**Solutions:**
1. Verify the server is enabled (green badge)
2. Verify individual tools are enabled
3. Discover tools if the tool count shows 0
4. Explicitly mention the tool in your request

### Server Shows 0 Tools

**Solutions:**
1. Click **Discover Tools** to fetch the tool list
2. Verify the server is running during discovery
3. Check that the server exposes tools via MCP protocol
4. Re-discover after server updates

## Best Practices

### 1. Start with Essential Servers

Only add servers you need:
- Too many servers increase complexity
- Each server connection uses resources
- Start with one or two, add more as needed

### 2. Discover Tools After Setup

Always discover tools after:
- Adding a new server
- Changing connection settings
- Updating the server software

### 3. Use Tool-Level Control

Disable individual tools you don't need:
- Reduces noise for the AI
- Prevents accidental use of powerful tools
- Keeps the tool list manageable

### 4. Test Before Using

- Use **Test Connection** after configuration
- **Discover Tools** to verify tool availability
- Try a simple query in AI Chat to confirm end-to-end

### 5. Keep Credentials Secure

- Treat API keys and tokens like passwords
- Don't share server configurations with untrusted parties
- Revoke credentials when removing servers

### 6. Monitor Tool Usage

- Review AI responses for unexpected tool usage
- Disable tools that produce unreliable results
- Adjust server timeouts if responses are slow

## Integration with Other Features

### AI Skills

MCP tools and AI Skills work together:
- Skills provide domain-specific knowledge and logic
- MCP tools provide external data and actions
- Both are available in the AI Marketing Assistant

### Knowledge Library

MCP tools complement the Knowledge Library:
- Knowledge Library provides your business context
- MCP tools provide real-time external data
- Combined for comprehensive AI responses

## Next Steps

- [Learn about AI Marketing Assistant](./ai-marketing-assistant)
- [Explore AI Skills](./ai-skills)
- [Set up Knowledge Library](./knowledge-library)

---

**Ready to extend your AI?** Add your first MCP server, discover its tools, and start using external capabilities in your AI conversations.
