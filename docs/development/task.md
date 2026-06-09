---
sidebar_position: 7
title: Task
---

Task is the action that the AI performs based on its knowledge and blueprint. It can be a simple task or a complex process involving multiple steps.

## Task Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| description | string |
| result      | string |
| comment     | string |
| createdAt   | date   |
| status      | string |
| agentId     | UUID   |
| blueprintId | UUID   |
| sessionId   | UUID   |

Status values: `IN_PROGRESS` | `COMPLETED` | `FAILED`

## Step Model

| Name           | Type   |
| -------------- | ------ |
| id             | UUID   |
| action         | string |
| parameters     | JSON   |
| result         | BLOB   |
| comment        | string |
| status         | string |
| taskId         | UUID   |
| knowledgeScore | FLOAT  |
| createdAt      | date   |

Status values: `IN_PROGRESS` | `SUPERVISED_NEEDED` | `COMPLETED` | `FAILED` | `WAITING_FOR_USER` | `LOW_CONFIDENCE`

## API

```
POST /tasks

{
  "agentId": "UUID",
  "description": "string",
  "sessionId": "UUID",
  "blueprintId": "UUID"
}

Response:
{
  "id": "UUID",
  "agentId": "UUID",
  "description": "string",
  "status": "IN_PROGRESS",
  "blueprintId": "UUID",
  "sessionId": "UUID",
  "createdAt": "date"
}
```

```
GET /tasks?agentId={agentId}

Response:
[
  {
    "id": "UUID",
    "agentId": "UUID",
    "description": "string",
    "status": "string",
    "result": "string",
    "comment": "string",
    "blueprintId": "UUID",
    "sessionId": "UUID",
    "createdAt": "date"
  }
]
```

```
GET /tasks/{taskId}

Response:
{
  "id": "UUID",
  "description": "string",
  "result": "string",
  "comment": "string",
  "createdAt": "date",
  "status": "string",
  "agentId": "UUID",
  "blueprintId": "UUID",
  "sessionId": "UUID",
  "Agent": {
    "teamId": "UUID"
  }
}
```

```
GET /tasks/{taskId}/steps

Response:
[
  {
    "id": "UUID",
    "action": "string",
    "parameters": { ... },
    "result": "string",
    "comment": "string",
    "status": "string",
    "taskId": "UUID",
    "knowledgeScore": 0.95,
    "createdAt": "date"
  }
]
```

```
PATCH /tasks/{taskId}/steps/{stepId}
Description: Updates a step's comment.

{
  "comment": "string"
}

Response:
200 OK
```

```
POST /tasks/{taskId}/supervising
Description: Adds a supervised step to a task. Optionally saves the response to the knowledge base.

{
  "text": "string",
  "agentId": "UUID",
  "addToKnowledgeBase": true
}

Response:
201 Created
```
