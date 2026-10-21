---
sidebar_position: 3
description: MCP Integration Guides
---

# MCP Integrations

All integrations in GreyCollar are based on the Model Context Protocol (MCP). MCPs allow agents to access external tools and services as part of task execution. Each MCP server exposes a set of tools that agents can call.

## Google Drive Integration

The Google Drive MCP server lets agents read from and write to Google Drive and Google Sheets.

### Available Tools

| Tool              | Description                          |
| ----------------- | ------------------------------------ |
| gdrive_search     | Search for files in Google Drive     |
| gdrive_read_file  | Read the contents of a Drive file    |
| gsheets_read      | Read data from a Google Sheet        |
| gsheets_update_cell | Update a cell in a Google Sheet    |

### Setup

#### **1. Go to Google Cloud Console**

- Visit [Google Cloud Console](https://console.cloud.google.com) and sign in.

#### **2. Create or Select a Project**

- Click the project dropdown → “New Project” (or select an existing one).

#### **3. Enable Required APIs**

- Go to **APIs & Services > Library**
- Enable: **Google Drive API** and **Google Sheets API**

#### **4. Set Up OAuth 2.0 Consent Screen**

- Go to **APIs & Services > OAuth consent screen**
- Choose “External” or “Internal” depending on your use case
- Fill in the app name, support email, and developer contact
- Add the required scopes for Drive and Sheets

#### **5. Create OAuth 2.0 Credentials**

- Go to **APIs & Services > Credentials**
- Click **Create Credentials > OAuth client ID**
- Choose **Web application**
- Add the authorized redirect URI: `https://yourapp.com/auth/callback`
- Copy the **Client ID** and **Client Secret**

#### **6. Connect via GreyCollar**

After setting up credentials, use the `/mcps` API to connect:

```
POST /mcps

{
  “authorizationCode”: “string”,
  “mcpId”: “<google-drive-mcp-uuid>”,
  “agentId”: “UUID”
}
```

---

## Building Custom MCP Servers

You can build custom MCP servers to connect agents to any internal or external system.

### Structure

Each MCP server is a TypeScript module that exports a set of tool functions. Each tool:
- Has a unique name and description
- Defines its input parameters
- Returns a result that the agent can use

### Example Tool

```ts
export const get_all_products = {
  name: “get_all_products”,
  description: “Retrieve all products from the catalog”,
  parameters: {},
  execute: async () => {
    // fetch and return products
  }
};
```

### Registering an MCP Server

Place your MCP server in `mcp/servers/<your-server>/` and register it with the platform. The tools become available to agents assigned to the connected MCP.
