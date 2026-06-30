---
sidebar_position: 12
title: Session
---

Session represents a period of interaction or a specific context, typically involving an agent and a series of communications (conversations).

## Models

### Session Model

| Name    | Type   |
| ------- | ------ |
| id      | UUID   |
| type    | STRING |
| agentId | UUID   |

Type values: `CHAT` | `EMAIL`

### Conversation Model

| Name      | Type     |
| --------- | -------- |
| id        | UUID     |
| role      | STRING   |
| content   | TEXT     |
| sessionId | UUID     |
| createdAt | DATETIME |

Role values: `USER` | `ASSISTANT`

## API

```
POST /sessions
Description: Creates a new session.

{
  "type": "CHAT",
  "agentId": "UUID"
}

Response:
{
  "id": "UUID",
  "type": "CHAT",
  "agentId": "UUID"
}
```

```
POST /sessions/{sessionId}
Description: Adds a user message to an existing session. Triggers SESSION_USER_MESSAGED event.

{
  "content": "STRING"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "role": "USER",
  "content": "TEXT",
  "createdAt": "DATETIME"
}
```

```
GET /sessions/{id}
Description: Retrieves all conversations for a specific session, ordered by creation date.

Response:
[
  {
    "id": "UUID",
    "sessionId": "UUID",
    "role": "USER" | "ASSISTANT",
    "content": "TEXT",
    "createdAt": "DATETIME"
  }
]
```
