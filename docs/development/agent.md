---
sidebar_position: 1
title: Agent (AI)
---

Agent is the AI assistant that helps you with your tasks based on blueprints and knowledge. It is designed to be user-friendly and accessible to both technical and non-technical users. The platform provides a set of tools and features to help you build, deploy, and monitor your AI agents.

## Model

| Name        | Type     |
| ----------- | -------- |
| id          | UUID     |
| name        | string   |
| icon        | string   |
| description | string   |
| teamId      | UUID     |
| aiEngineId  | UUID     |

## API

```
POST /agents

{
  "name": "string",
  "icon": "string",
  "description": "string",
  "aiEngineId": "UUID"
}

Response:
{
  "id": "UUID",
  "name": "string",
  "icon": "string",
  "description": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}
```

```
GET /agents

Response:
[
  {
    "id": "UUID",
    "name": "string",
    "icon": "string",
    "description": "string",
    "teamId": "UUID",
    "AIEngine": { ... }
  }
]
```

```
PUT /agents/{id}

{
  "name": "string",
  "icon": "string",
  "description": "string",
  "aiEngineId": "UUID"
}

Response:
{
  "id": "UUID",
  "name": "string",
  "icon": "string",
  "description": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}
```

```
GET /agents/{agentId}

Response:
{
  "id": "UUID",
  "name": "string",
  "icon": "string",
  "description": "string",
  "teamId": "UUID",
  "AIEngine": { ... }
}
```

```
DELETE /agents/{id}

Response:
204 No Content
```

```
GET /agents/{agentId}/sessions

Response:
[
  {
    "id": "UUID",
    "type": "CHAT" | "EMAIL",
    "agentId": "UUID"
  }
]
```

```
GET /agents/{agentId}/supervisings?status={status}

Query Parameters:
  status: "ANSWERED" | "IN_PROGRESS" (optional)

Response:
[
  {
    "id": "UUID",
    "question": "string",
    "answer": "string",
    "status": "string",
    "agentId": "UUID",
    "createdAt": "datetime"
  }
]
```
