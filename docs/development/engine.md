---
sidebar_position: 11
title: AI Engine
---

AI Engine handles intelligent processing and decision-making within GreyCollar. It provides advanced analytics and automation capabilities.

## Model

| Name        | Type     |
| ----------- | -------- |
| id          | UUID     |
| vendor      | STRING   |
| avatar      | STRING   |
| description | STRING   |
| price       | FLOAT    |
| model       | STRING   |
| createdAt   | DATETIME |

## API

```
GET /engines

Response:
  {
    "id": "UUID",
    "vendor": "STRING",
    "avatar": "STRING",
    "description": "STRING",
    "price": "FLOAT",
    "model": "STRING"
    "createdAt": "DATETIME"
  }

```

```
GET /engines/{id}

Response:
  {
    "id": "UUID",
    "vendor": "STRING",
    "avatar": "STRING",
    "description": "STRING",
    "price": "FLOAT",
    "model": "STRING"
    "createdAt": "DATETIME"
  }

```
