---
sidebar_position: 15
title: Step Score
---

Step Score tracks the quality metrics for each step executed during a task. It captures hallucination scores, supervision scores, and result scores to measure agent performance over time.

## Model

| Name               | Type     |
| ------------------ | -------- |
| id                 | UUID     |
| taskId             | UUID     |
| stepId             | UUID     |
| parameters         | JSON     |
| output             | TEXT     |
| hallucinationScore | FLOAT    |
| superviseScore     | FLOAT    |
| resultScore        | FLOAT    |
| knowledgeScore     | FLOAT    |
| status             | STRING   |
| createdAt          | DATETIME |

Status values: `COMPLETED` | `FAILED` | `SUPERVISED`

## API

```
GET /step-scores?taskId={taskId}
GET /step-scores?stepId={stepId}
Description: Lists step scores for a task or a specific step.

Response:
[
  {
    "id": "UUID",
    "taskId": "UUID",
    "stepId": "UUID",
    "parameters": { ... },
    "output": "string",
    "hallucinationScore": 0.05,
    "superviseScore": 0.9,
    "resultScore": 0.95,
    "knowledgeScore": 0.88,
    "status": "COMPLETED",
    "createdAt": "datetime"
  }
]
```

```
PATCH /step-scores/{scoreId}
Description: Updates the supervise score and/or result score for a step (human feedback).

{
  "superviseScore": 0.9,
  "resultScore": 0.85
}

Response:
200 OK
```

```
DELETE /step-scores/{scoreId}/supervise-score
Description: Removes the supervise score for a step, resetting human feedback.

Response:
200 OK
```
