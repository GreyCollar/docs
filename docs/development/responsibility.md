---
sidebar_position: 8
title: Responsibility
---

Responsibility is the blueprint of the tasks that the AI can perform. It defines what the AI can do and how it can assist you.

## Responsibility Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| title       | STRING |
| description | STRING |
| colleagueId | UUID   |

## ResponsibilityNode Model

| Name             | Type   |
| ---------------- | ------ |
| id               | UUID   |
| type             | STRING |
| properties       | STRING |
| dependencyId     | UUID   |
| responsibilityId | UUID   |

## API

```
POST /responsibilities

{
  "name": "STRING",
  "description": "STRING",
  "colleagueId": "UUID",
}

Response:
{
  "id": "UUID",
  "title": "STRING",
  "description": "STRING",
  "colleagueId": "STRING"
}
```

```
GET /responsibilities

Response:
{
  "id": "UUID",
  "title": "STRING",
  "description": "STRING",
  "colleagueId": "STRING"
}
```

```
GET /responsibilities/{id}
Description: Retrieves a specific responsibility by its ID, including all associated responsibility nodes.

Response:
{
  "id": "UUID",
  "title": "STRING",
  "description": "STRING",
  "colleagueId": "STRING",
  "Nodes": [
    {
      "id": "UUID",
      "type": "STRING",
      "properties": {
          "label": "STRING",
          "icon": "STRING"
      },
      "dependencyId": "UUID",
      "responsibilityId": "UUID"
    }
  ]
}
```
