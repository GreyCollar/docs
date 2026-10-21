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
GET /teams/details
Description: Retrieves the current team's details (scoped to the authenticated session).

Response:
{
  "id": "UUID",
  "coach": "STRING",
  "coachAvatar": "STRING"
}
```

```
PATCH /teams/details
Description: Updates the current team's details.

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
