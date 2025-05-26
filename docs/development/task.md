---
sidebar_position: 7
title: Task
---

Task is the action that the AI performs based on the knowledge and responsibility. It can be a simple task or a complex process.

## Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| description | string |
| result      | string |
| comment     | string |
| createdAt   | date   |
| status      | string |
| colleagueId | UUID   |

## API

```
POST /tasks

{
  "colleagueId": "UUID",
  "description": "string"
}

Response:
{
  "id": "UUID",
  "colleagueId": "UUID",
  "description": "string",
  "status": "string",
  "createdAt": "date",
}
```

```
GET /tasks?colleagueId={colleagueId}

Response:
{
  "id": "UUID",
  "colleagueId": "UUID",
  "description": "string",
  "status": "string",
  "result": "string",
  "comment": "string"
  "createdAt": "date",
}
```

```
GET /tasks/{id}

Response:
{
"id": "UUID",
"description": "string",
"result": "string",
"comment": "string"
"createdAt": "date",
"status": "string",
"colleagueId": "UUID",
"Colleague": {
"teamId": "UUID"
}
}

```

```
GET /tasks/{id}/steps

Response:
{
"id": "UUID",
"action: "string",
"parameters": {
"message": "string"
},
"result": "string",
"comment": "string"
"status": "string",
"taskId": "UUID"
"createdAt": "date",
}

```

```
GET /tasks/{id}/supervising

{
"text": "string",
"colleagueId": "UUID",
"addToKnowledgeBase": "boolean"
}

Response:
201 created

```
