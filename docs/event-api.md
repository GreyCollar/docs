---
sidebar_position: 3
description: Event API
---

# Event API

## Supervising

```
publish("SUPERVISING", "RAISED", {
    sessionId,
    conversationId,
    question,
    colleagueId,
  });
```

```
publish("SUPERVISING", "ANSWERED", {
    teamId,
    supervisingId,
    sessionId,
    conversationId,
    colleagueId,
    question,
    answer,
    status,
  });
```

## Session

```
publish("SESSION", "INITIATED", {
    id: sessionId,
    type,
    colleagueId,
  });
```

```
publish("SESSION", "USER_MESSAGED", {
      colleagueId,
      sessionId,
      conversationId: conversation.id,
      content,
    });
```

```
publish("SESSION", "AI_MESSAGED", {
      colleagueId,
      sessionId,
      conversationId: conversation.id,
      content,
    });
```

## Task

```
publish("TASK", "CREATED", {
    taskId: task.id,
    colleagueId,
    description,
  });
```

```
publish("TASK", "COMPLETED", { taskId, result, comment });
```

```
publish("STEP", "ADDED", {
    stepId: step.id,
    taskId,
    action,
    parameters,
    comment,
  });
```

```
publish("STEP", "COMPLETED", {
      taskId,
      stepId,
      action,
      parameters,
      result,
    });
```

## Message (Team Chat)

```
publish("MESSAGE", "USER_MESSAGED", messageInstance.toJSON());
```


```
publish("MESSAGE", "ASSISTANT_MESSAGED", messageInstance.toJSON());
```

