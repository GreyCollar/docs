---
sidebar_position: 5
title: Supervising
---

Supervising is the process of monitoring and managing the AI's actions. It ensures that the AI is performing tasks correctly and efficiently.

## Model

| Name           | Type     |
| -------------- | -------- |
| id             | UUID     |
| sessionId      | UUID     |
| conversationId | UUID     |
| colleagueId    | UUID     |
| question       | string   |
| answer         | string   |
| status         | string   |
| createdAt      | datetime |

## API

```
POST /supervisings

{
  "sessionId": "UUID",
  "conversationId": "UUID",
  "colleagueId": "UUID",
  "colleagueId": "UUID",
  "question": "string"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "colleagueId": "UUID",
  "question": "string",
  "answer": "string",
  "status": "string",
  "createdAt": "string",
}
```

```
GET /supervisings

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "colleagueId": "UUID",
  "question": "string",
  "answer": "string",
  "status": "string",
  "createdAt": "string",
}
```

```
PATCH /supervisings/{id}

{
  "status": "string",
  "answer": "string"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "colleagueId": "UUID",
  "question": "string",
  "answer": "string",
  "status": "string",
  "createdAt": "string",
}
```
