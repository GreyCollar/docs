---
sidebar_position: 4
title: Task and Step
---

![Task](https://cdn.nucleoid.com/greycollar/media/d12714f4-e584-4020-92cb-62a25664e14d.png)

Tasks are the actions that AI agents perform based on their blueprints and knowledge. Once a task is initiated through a communication channel, the agent breaks it down into individual steps and executes them autonomously.

## Task Lifecycle

A task moves through the following statuses:

- **IN_PROGRESS** — The agent is actively working on the task.
- **COMPLETED** — The task finished successfully.
- **FAILED** — The task could not be completed.

## Steps

Each task is broken down into steps. A step represents a single action the agent takes — such as calling an MCP tool, querying the knowledge base, or asking for supervision.

### Step Statuses

| Status            | Description                                              |
| ----------------- | -------------------------------------------------------- |
| IN_PROGRESS       | The step is being executed.                              |
| COMPLETED         | The step finished successfully.                          |
| FAILED            | The step encountered an error.                           |
| SUPERVISED_NEEDED | The agent paused and is waiting for human supervision.   |
| WAITING_FOR_USER  | The agent is waiting for a user response.                |
| LOW_CONFIDENCE    | The agent completed the step but with low confidence.    |

## Step Scores

Every step generates a **Step Score** that captures quality metrics:

- **Hallucination Score** — How likely the agent's response was fabricated.
- **Knowledge Score** — How well the agent's knowledge base supported the step.
- **Supervise Score** — Human-assigned quality rating for supervised steps.
- **Result Score** — Overall result quality score.

These scores are used to measure agent performance over time and identify areas that need more knowledge or supervision.

## Task Supervising

When a step reaches `SUPERVISED_NEEDED`, the task pauses and waits for a supervisor. There are two ways to respond:

- **Chat Response** — The supervisor answers the question directly. The task resumes immediately. The answer can optionally be saved to the knowledge base.
- **Blueprint Modification** — The supervisor updates the blueprint the task is running against. The current task resumes from where it paused *and* all future tasks created with that blueprint will use the updated logic.

> See [Supervising](/docs/features/supervising) for a detailed explanation of both methods.
