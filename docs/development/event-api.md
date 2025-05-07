---
sidebar_position: 2
description: Event API
---

# Event API

## Supervising

**SUPERVISING.RAISED** is triggered when a colleague raises a question to a supervisor.

```ts
{
  sessionId: string;
  conversationId: string;
  question: string;
  colleagueId: string;
}
```

SUPERVISING.ANSWERED is triggered when a supervisor answers a question.

```ts
{
  teamId: string;
  supervisingId: string;
  sessionId: string;
  conversationId: string;
  colleagueId: string;
  question: string;
  answer: string;
  status: "ANSWERED";
}
```

## Session

**SESSION.INITIATED** is triggered when a session is initiated.

```ts
{
  sessionId: string;
  colleagueId: string;
  type: "CHAT" | "EMAIL";
}
```

**SESSION.USER_MESSAGED** is triggered when a user sends a message.

```ts
{
  colleagueId: string;
  sessionId: string;
  conversationId: string;
  content: string;
}
```


**SESSION.AI_MESSAGED** is triggered when the AI sends a message.

```ts
{
  colleagueId: string;
  sessionId: string;
  conversationId: string;
  content: string;
}
```

## Task

TASK.CREATED is triggered when a task is created.

```ts
{
  taskId: string;
  colleagueId: string;
  description: string;
}
```

TASK.COMPLETED is triggered when a task is completed.

```ts
{
  taskId: string;
  result: string;
  comment: string;
}
```

STEP.ADDED is triggered when a step is added to a task.

```ts
{
  taskId: string;
  stepId: string;
  action: string;
  parameters: string;
  comment: string;
}
```

STEP.COMPLETED is triggered when a step is completed.

```ts
{
  taskId: string;
  stepId: string;
  action: string;
  parameters: string;
  result: string;
}
```

## Message (Team Chat)

MESSAGE.CREATED is triggered when a message is created.

```ts
{
  messageId: string;
  colleagueId: string;
  content: string;
}
```

MESSAGE.ASSISTANT_MESSAGED is triggered when the assistant sends a message.

```ts
{
  messageId: string;
  colleagueId: string;
  content: string;
}
```
