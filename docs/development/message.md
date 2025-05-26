---
sidebar_position: 6
title: Message
---

Message is the unit of communication between colleagues and AI, representing the content exchanged in chat sessions.

## Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| role        | string |
| userId      | UUID   |
| command     | string |
| knowledgeId | UUID   |
| status      | string |
| colleagueId | UUID   |
| teamId      | UUID   |
| replyTo     | UUID   |
| content     | string |
| createdAt   | date   |

## API

```
POST /messages

{
    "role": "string",
    "colleagueId": "UUID",
    "content": "string",
    "userId": "UUID",
    "command": "string",
    "knowledgeId": "UUID",
    "teamId": "UUID",
    "replyTo": "UUID",
}

Response:
{
  "id": "UUID",
  "role": "string",
  "colleagueId": "UUID",
  "content": "string",
  "userId": "UUID",
  "command": "string",
  "knowledgeId": "UUID",
  "teamId": "UUID",
  "replyTo": "UUID",
  "status": "string",
  "createdAt": "date"
}
```

```
GET /messages

Response:
{
  "id": "UUID",
  "role": "string",
  "colleagueId": "UUID",
  "content": "string",
  "userId": "UUID",
  "command": "string",
  "knowledgeId": "UUID",
  "teamId": "UUID",
  "replyTo": "UUID",
  "status": "string",
  "createdAt": "date"
}
```

```
PATCH /messages

{
  "status": "string"
}

Response:
{
  "id": "UUID",
  "role": "string",
  "colleagueId": "UUID",
  "content": "string",
  "userId": "UUID",
  "command": "string",
  "knowledgeId": "UUID",
  "teamId": "UUID",
  "replyTo": "UUID",
  "status": "string",
  "createdAt": "date"
}
```
