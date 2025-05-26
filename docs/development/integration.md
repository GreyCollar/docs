---
sidebar_position: 9
title: Integration (Endpoint)
---

Integration is the connection between GreyCollar and external applications or services. It allows for seamless data exchange and functionality.

## Model

| Name         | Type |
| ------------ | ---- |
| id           | UUID |
| mcpId        | UUID |
| refreshToken | UUID |
| colleagueId  | UUID |
| teamId       | UUID |

## API

```
POST /integrations

{
  "authorizationCode": "UUID",
  "mcpId": "UUID",
  "colleagueId": "UUID",
}

Response:
{
  "id": "UUID",
  "mcpId": "UUID",
  "colleagueId": "UUID",
  "authorizationCode": "UUID",
  "refreshToken": "UUID"
}
```

```
GET /integrations

Response:
{
  "id": "UUID",
  "provider": "string",
  "description": "string",
  "action": "string",
  "direction": "string",
  "oauth": {
    "scope": "string",
    "tokenUrl": "string",
    "authUrl": "string",
    "clientScript": "string"
  }
}
```

```
DELETE /integrations/{id}

Response:
204 No Content
```
