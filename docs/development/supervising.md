---
sidebar_position: 5
title: Supervising
---

Supervising is the human-in-the-loop process that ensures the AI performs tasks correctly. When a task step reaches `SUPERVISED_NEEDED`, execution pauses until a supervisor responds. There are two ways to respond, each with different scope and effect.

## Model

| Name           | Type     |
| -------------- | -------- |
| id             | UUID     |
| sessionId      | UUID     |
| conversationId | UUID     |
| agentId        | UUID     |
| blueprintId    | UUID     |
| taskId         | UUID     |
| stepId         | UUID     |
| question       | string   |
| answer         | string   |
| status         | string   |
| createdAt      | datetime |

Status values: `IN_PROGRESS` | `ANSWERED`

## API

```
POST /supervisings
Description: Creates a new supervising record from a conversation message.

{
  "sessionId": "UUID",
  "conversationId": "UUID",
  "agentId": "UUID"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "agentId": "UUID",
  "question": "string",
  "answer": null,
  "status": "IN_PROGRESS",
  "createdAt": "datetime"
}
```

```
GET /supervisings?status={status}

Query Parameters:
  status: "ANSWERED" | "IN_PROGRESS" (optional)

Response:
[
  {
    "id": "UUID",
    "sessionId": "UUID",
    "conversationId": "UUID",
    "agentId": "UUID",
    "blueprintId": "UUID",
    "taskId": "UUID",
    "stepId": "UUID",
    "question": "string",
    "answer": "string",
    "status": "string",
    "createdAt": "datetime"
  }
]
```

```
GET /supervisings/{id}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "agentId": "UUID",
  "question": "string",
  "answer": "string",
  "status": "string",
  "createdAt": "datetime"
}
```

```
PATCH /supervisings/{supervisingId}

{
  "status": "ANSWERED",
  "answer": "string"
}

Response:
{
  "id": "UUID",
  "sessionId": "UUID",
  "conversationId": "UUID",
  "agentId": "UUID",
  "question": "string",
  "answer": "string",
  "status": "ANSWERED",
  "createdAt": "datetime"
}
```

```
POST /supervisings/{supervisingId}/evaluate
Description: Evaluates a proposed answer using the AI. If the answer is sufficient, it updates the supervising and resumes the task.

{
  "answer": "string",
  "blueprintId": "UUID"
}

Response (answer approved):
{
  "action": "answer_approved",
  "supervising": { ... },
  "evaluation": {
    "is_answer_known": true,
    ...
  }
}

Response (needs improvement):
{
  "action": "needs_improvement",
  "evaluation": {
    "is_answer_known": false,
    ...
  }
}
```

---

## Two Ways to Respond to a Supervising

### Method 1: Chat Response

The supervisor answers the question directly. This resolves the supervising for the **current task only** and the task resumes immediately.

**Flow:**
1. Supervisor calls `PATCH /supervisings/:id` or `POST /supervisings/:id/evaluate` with an answer
2. Platform publishes `SUPERVISING_ANSWERED` event
3. The paused task step resumes from where it left off

**Best for:** One-off answers — situations where the gap is specific to this task.

---

### Method 2: Blueprint Modification

The supervisor updates the blueprint that the task is running against. This approach has **two effects simultaneously**:

1. **Current task resumes** — the `TASK_SUPERVISING_RESPONDED` event is published, which finds the `SUPERVISED_NEEDED` step and continues execution with the updated blueprint logic
2. **Future tasks are also affected** — all new tasks created with this blueprint will use the updated logic

**Flow:**
1. Supervisor calls `PUT /blueprints/:blueprintId` with updated nodes and the `taskId` of the supervised task
2. Platform publishes `BLUEPRINT_CREATED` and `TASK_SUPERVISING_RESPONDED` events
3. The supervised step is resumed using the new blueprint
4. Subsequent tasks will execute with the corrected blueprint from the start

**Best for:** Structural gaps — when the supervising reveals that the blueprint itself is incomplete or wrong, and the fix should apply to every future execution.
