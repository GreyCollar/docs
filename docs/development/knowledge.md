---
sidebar_position: 4
title: Knowledge
---

Knowledge represents the information or content stored in the system that agents use to perform tasks. It can be scoped to a specific agent or shared across a team.

## Model

| Name           | Type     |
| -------------- | -------- |
| id             | UUID     |
| type           | string   |
| question       | string   |
| answer         | string   |
| url            | string   |
| text           | string   |
| content        | BLOB     |
| taskId         | UUID     |
| blueprintId    | UUID     |
| organizationId | UUID     |
| status         | string   |
| createdAt      | datetime |

Type values: `URL` | `TEXT` | `QA` | `TASK`

Status values: `IN_PROGRESS` | `COMPLETED`

## API

```
POST /knowledge
Description: Creates a knowledge entry. Can be scoped to an agent (agentId) or a team (teamId).

{
  "type": "QA",
  "agentId": "UUID",
  "question": "string",
  "answer": "string",
  "blueprintId": "UUID",
  "taskId": "UUID"
}

Response:
{
  "id": "UUID",
  "type": "string",
  "url": "string",
  "text": "string",
  "question": "string",
  "answer": "string",
  "content": "string",
  "taskId": "UUID",
  "blueprintId": "UUID",
  "status": "string",
  "createdAt": "datetime"
}
```

```
GET /knowledge?agentId={agentId}&type={type}

Query Parameters:
  agentId: UUID (optional)
  type: "URL" | "TEXT" | "QA" | "TASK" (optional)

Response:
[
  {
    "id": "UUID",
    "type": "string",
    "url": "string",
    "text": "string",
    "question": "string",
    "answer": "string",
    "taskId": "UUID",
    "blueprintId": "UUID",
    "status": "string",
    "createdAt": "datetime"
  }
]
```

```
GET /knowledge/{id}

Response:
{
  "id": "UUID",
  "type": "string",
  "question": "string",
  "answer": "string",
  "agentId": "UUID",
  "teamId": "UUID",
  "status": "string"
}
```

```
DELETE /knowledge/{id}

Response:
204 No Content
```
