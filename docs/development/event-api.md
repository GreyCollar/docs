---
sidebar_position: 2
description: Event API
---

# Event API

GreyCollar uses an event-driven architecture. Events are published and subscribed to asynchronously across the platform.

## Subscribed Events

These events are consumed by the API to trigger agent actions.

### MESSAGE_USER_MESSAGED

Triggered when a user sends a message to the team chat.

```ts
{
  teamId: string;
  content: string;
}
```

### SESSION_USER_MESSAGED

Triggered when a user sends a message in a session.

```ts
{
  agentId: string;
  sessionId: string;
  content: string;
}
```

### SUPERVISING_ANSWERED

Triggered when a supervisor provides an answer. Resumes the agent's chat flow.

```ts
{
  sessionId: string;
  agentId: string;
  question: string;
}
```

### TASK_CREATED

Triggered when a new task is created. Starts the agent task execution flow.

```ts
{
  taskId: string;
}
```

### STEP_ADDED

Triggered when a step is added to a task. Executes the step action.

```ts
{
  stepId: string;
  action: string;
  parameters: object;
  comment: string;
  resultScore?: number;
}
```

### TASK_SUPERVISING_RESPONDED

Triggered when a supervisor responds to a task supervising request. Resumes the next pending supervised step.

```ts
{
  taskId: string;
  blueprintId?: string;
}
```

### STEP_COMPLETED

Triggered when a step completes. Continues the task execution.

```ts
{
  taskId: string;
}
```

### STEP_FAILED

Triggered when a step fails. Handles task failure logic.

```ts
{
  taskId: string;
  result: string;
}
```

---

## Published Events

These events are emitted by the platform for consumers to act on.

### BLUEPRINT_CREATED

Published when a blueprint is created or updated.

```ts
{
  Blueprint: object;
}
```

### SUPERVISING_LOADED

Published when a supervising record is retrieved via GET /supervisings.

```ts
{
  id: string;
  agentId: string;
  question: string;
  answer: string;
  status: "IN_PROGRESS" | "ANSWERED";
  createdAt: string;
}
```

### ERROR_OCCURRED

Published when an error occurs during session chat processing.

```ts
{
  sessionId: string;
  message: string;
}
```
