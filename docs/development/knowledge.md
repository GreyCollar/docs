---
sidebar_position: 4
title: Knowledge
---

Knowledge represents the information or content stored in the system that can be referenced by AI agents and users.

## Model

| Name      | Type     |
| --------- | -------- |
| id        | UUID     |
| type      | string   |
| question  | string   |
| answer    | string   |
| url       | string   |
| text      | string   |
| content   | string   |
| taskId    | UUID     |
| status    | string   |
| createdAt | datetime |

## API

```
POST /knowledge

{
  "type": "string",
  "question": "string",
  "answer": "string"
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
   "taskId": "string"
}
```

```
GET /knowledge

Response:
{
  "id": "UUID",
  "type": "string",
  "url": "string",
  "text": "string",
  "question": "string",
  "answer": "string",
  "content": "string",
  "taskId": "string",
  "status": "string"
}
```

```
DELETE /knowledge/{id}

Response:
204 No Content
```
