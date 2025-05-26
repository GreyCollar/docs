---
sidebar_position: 1
title: Colleague (AI)
---

Colleague is the AI assistant that helps you with your tasks based on responsibilities and knowledge. It is designed to be user-friendly and accessible to both technical and non-technical users. The platform provides a set of tools and features to help you build, deploy, and monitor your AI agents.

## Model

| Name       | Type     |
| ---------- | -------- |
| id         | UUID     |
| name       | string   |
| avatar     | string   |
| character  | string   |
| title      | string   |
| role       | string   |
| teamId     | Team     |
| aiEngineId | AIEngine |

## API

```
POST /colleagues

{
  "name": "string",
  "avatar": "string",
  "character": "string",
  "title": "string",
  "role": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}

Response:
{
  "id": "UUID",
  "name": "string",
  "avatar": "string",
  "character": "string",
  "title": "string",
  "role": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}
```

```
GET /colleagues

Response:
{
  "id": "UUID",
  "name": "string",
  "avatar": "string",
  "character": "string",
  "title": "string",
  "role": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}
```

```
PUT /colleagues/{id}

{
  "name": "string",
  "avatar": "string",
  "character": "string",
  "title": "string",
  "role": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}

Response:
{
  "id": "UUID",
  "name": "string",
  "avatar": "string",
  "character": "string",
  "title": "string",
  "role": "string",
  "teamId": "UUID",
  "aiEngineId": "UUID"
}
```

```
GET /colleagues/{id}

Response:
204 No Content
```
