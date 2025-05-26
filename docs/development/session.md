---
sidebar_position: 12
title: Session
---

Session represents a period of interaction or a specific context, typically involving a colleague and a series of communications (conversations).

## Models

### Session Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| type        | STRING |
| colleagueId | UUID   |

### Conversation Model

| Name      | Type     |
| --------- | -------- |
| id        | UUID     |
| role      | STRING   |
| content   | TEXT     |
| sessionId | UUID     |
| createdAt | DATETIME |

## API

```
POST /sessions
Description: Creates a new session.

Request:
{
  "type": "STRING",
  "colleagueId": "UUID"
}

Response:
{
  "id": "UUID",
  "type": "STRING",
  "colleagueId": "UUID",
}

```

```
POST /sessions/{sessionId}
Description: Adds a conversation (message) to an existing session.

Request Body:
{
  "content": "STRING"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "role": "STRING",
  "content": "TEXT",
  "createdAt": "DATETIME",
}

```

```
GET /sessions/{id}
Description: Retrieves all conversations for a specific session, ordered by creation date.

Response:

  {
    "id": "UUID",
    "sessionId": "UUID",
    "role": "STRING",
    "content": "TEXT",
    "createdAt": "DATETIME",
  }

```
