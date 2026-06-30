---
sidebar_position: 8
title: Blueprint
---

Blueprint defines the tasks that the AI agent can perform. It outlines what the AI can do, how it can assist you, and contains a flow of nodes representing the task execution logic.

## Blueprint Model

| Name        | Type    |
| ----------- | ------- |
| id          | UUID    |
| title       | STRING  |
| description | STRING  |
| agentId     | UUID    |
| blocking    | BOOLEAN |
| nodes       | JSONB   |

## Node Schema

Nodes are embedded in the blueprint as a JSONB array. Each node represents a step in the task execution flow.

| Name       | Type   |
| ---------- | ------ |
| id         | UUID   |
| type       | STRING |
| properties | OBJECT |

## API

```
GET /blueprints

Response:
[
  {
    "id": "UUID",
    "title": "STRING",
    "description": "STRING",
    "agentId": "UUID",
    "blocking": true,
    "nodes": [ ... ]
  }
]
```

```
GET /blueprints/{id}
Description: Retrieves a specific blueprint by its ID, including all associated nodes.

Response:
{
  "id": "UUID",
  "title": "STRING",
  "description": "STRING",
  "agentId": "UUID",
  "blocking": true,
  "nodes": [
    {
      "id": "UUID",
      "type": "STRING",
      "properties": {
        "label": "STRING",
        "icon": "STRING"
      }
    }
  ]
}
```

```
PUT /blueprints/{blueprintId}
Description: Creates or updates a blueprint (upsert). Publishes BLUEPRINT_CREATED event.

{
  "title": "STRING",
  "description": "STRING",
  "agentId": "UUID",
  "nodes": [ ... ],
  "messages": [
    {
      "content": "STRING",
      "role": "STRING",
      "createdAt": "DATETIME"
    }
  ],
  "blocking": true,
  "taskId": "UUID"
}

Response:
{
  "id": "UUID",
  "title": "STRING",
  "description": "STRING",
  "agentId": "UUID",
  "blocking": true,
  "nodes": [ ... ]
}
```

```
PATCH /blueprints/{blueprintId}
Description: Partially updates a blueprint (e.g., toggle blocking).

{
  "blocking": false
}

Response:
{
  "id": "UUID",
  "blocking": false
}
```

```
DELETE /blueprints/{blueprintId}

{
  "agentId": "UUID"
}

Response:
{
  "message": "Blueprint deleted"
}
```
