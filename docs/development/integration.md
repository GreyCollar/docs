---
sidebar_position: 9
title: MCP (Integration)
---

MCP (Model Context Protocol) is the connection between GreyCollar and external applications or services. It standardizes how agents access third-party tools and data sources. MCPs can be scoped to a specific agent or an entire team.

## Model

| Name         | Type   |
| ------------ | ------ |
| id           | UUID   |
| mcpId        | UUID   |
| refreshToken | STRING |
| agentId      | UUID   |
| teamId       | UUID   |

## API

```
POST /mcps
Description: Connects an MCP integration using an OAuth authorization code.

{
  "authorizationCode": "string",
  "mcpId": "UUID",
  "agentId": "UUID"
}

Response:
{
  "tokens": { ... }
}
```

```
GET /mcps?agentId={agentId}
GET /mcps?teamId={teamId}
Description: Lists connected MCPs for a specific agent or team.

Response:
[
  {
    "id": "UUID",
    "mcpId": "UUID",
    "agentId": "UUID",
    "teamId": "UUID"
  }
]
```

```
GET /mcps/actions
Description: Lists all available MCP actions registered in the system.

Response:
[
  {
    "name": "string",
    "description": "string"
  }
]
```

```
DELETE /mcps/{id}

Response:
204 No Content
```
