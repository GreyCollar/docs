---
sidebar_position: 14
title: Team Details
---

Team Details store specific information about a team, such as coach details.

## Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| coach       | STRING |
| coachAvatar | STRING |

## API

```
GET /team/details/{id}

Response:
{
  "id": "UUID",
  "coach": "STRING",
  "coachAvatar": "STRING"
}
```

```
PATCH /team/details/{id}

Request Body:
{
  "coach": "STRING",
  "coachAvatar": "STRING"
}

Response:
{
  "id": "UUID",
  "coach": "STRING",
  "coachAvatar": "STRING"
}
```
