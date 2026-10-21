---
sidebar_position: 6
title: Message
---

Message is the unit of communication in team chat, representing the content exchanged between users and agents in the team workspace.

## Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| role        | string |
| agentId     | UUID   |
| userId      | string |
| command     | string |
| knowledgeId | UUID   |
| status      | string |
| teamId      | UUID   |
| replyTo     | UUID   |
| content     | string |
| createdAt   | date   |

Role values: `SYSTEM` | `USER` | `ASSISTANT`

Status values: `RECEIVED` | `READ`

## API

```
POST /messages

{
  "role": "USER",
  "agentId": "UUID",
  "content": "string",
  "userId": "string",
  "command": "string",
  "knowledgeId": "UUID",
  "replyTo": "UUID"
}

Response:
{
  "id": "UUID",
  "role": "string",
  "agentId": "UUID",
  "content": "string",
  "userId": "string",
  "command": "string",
  "knowledgeId": "UUID",
  "teamId": "UUID",
  "replyTo": "UUID",
  "status": "string",
  "createdAt": "date"
}
```

```
GET /messages?offset={date}

Query Parameters:
  offset: date (optional) — returns messages created after this date

Response:
[
  {
    "id": "UUID",
    "role": "string",
    "agentId": "UUID",
    "content": "string",
    "userId": "string",
    "command": "string",
    "knowledgeId": "UUID",
    "teamId": "UUID",
    "replyTo": "UUID",
    "status": "string",
    "createdAt": "date"
  }
]
```

```
PATCH /messages?offset={date}
Description: Marks USER messages created after the offset date as a given status.

{
  "status": "READ"
}

Response:
200 OK
```
