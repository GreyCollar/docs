---
sidebar_position: 13
title: Statistic
---

Statistics provide insights and metrics related to various aspects of the platform, often aggregated per team.

## Model

| Name            | Type    |
| --------------- | ------- |
| id              | UUID    |
| responseRate    | INTEGER |
| supervisingRate | INTEGER |
| knowledgeSize   | INTEGER |
| taskCount       | INTEGER |
| totalMessages   | INTEGER |
| teamId          | UUID    |

## API

```
GET /statistics

Response:
{
  "id": "UUID",
  "responseRate": "INTEGER",
  "supervisingRate": "INTEGER",
  "knowledgeSize": "INTEGER",
  "taskCount": "INTEGER",
  "totalMessages": "INTEGER",
  "teamId": "UUID"
}
```
