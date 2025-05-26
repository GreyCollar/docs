---
sidebar_position: 10
title: Communication
---

Communication is the connection between GreyCollar and external applications or services for messaging. It allows for seamless data exchange and functionality.

## Model

| Name             | Type   |
| ---------------- | ------ |
| id               | UUID   |
| channelType      | STRING |
| channelCode      | STRING |
| responsibilityId | UUID   |

## API

```
POST /communications

{
  "channelCode": "string",
  "channelType": "string",
  "responsibilityId": "UUID",
}

Response:
{
  "id": "UUID",
  "channelCode": "string",
  "channelType": "string",
  "responsibilityId": "UUID",
}
```

```
GET /communications

Response:
{

  "id": "UUID",
  "channelCode": "string",
  "channelType": "string",
  "responsibilityId": "UUID",
}
```

```
DELETE /communications/{id}

Response:
204 No Content
```
