---
sidebar_position: 10
title: Communication
---

Communication links external messaging channels to blueprints, enabling agents to receive and process messages from outside the platform.

## Model

| Name        | Type   |
| ----------- | ------ |
| id          | UUID   |
| channelType | STRING |
| channelCode | STRING |
| blueprintId | UUID   |

Channel type values: `WHATSAPP` | `SLACK` | `EMAIL`

## API

```
POST /communications

{
  "channelCode": "string",
  "channelType": "SLACK",
  "blueprintId": "UUID"
}

Response:
{
  "id": "UUID",
  "channelCode": "string",
  "channelType": "string",
  "blueprintId": "UUID"
}
```

```
GET /communications

Response:
[
  {
    "id": "UUID",
    "channelCode": "string",
    "channelType": "string",
    "blueprintId": "UUID"
  }
]
```

```
GET /communications/{id}

Response:
{
  "id": "UUID",
  "channelCode": "string",
  "channelType": "string",
  "blueprintId": "UUID"
}
```

```
DELETE /communications/{id}

Response:
204 No Content
```
