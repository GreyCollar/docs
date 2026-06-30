---
sidebar_position: 2
title: Features
description: GreyCollar features and capabilities
collapsed: false
---

# Features

import ReactPlayer from "react-player";

<p align="center">
  <ReactPlayer
    url={"https://cdn.nucleoid.com/media/e3ae7a99-3824-4720-8c80-121af255ee01.mp4"}
    width={"100%"}
    height={"100%"}
    controls
    loop
    playing={true}
  />
</p>

GreyCollar is a supervised AI platform designed to enhance human-AI collaboration by providing an environment for AI agents to continuously learn from human supervisors.

Explore the key features of GreyCollar below:

- [Agent (AI)](#agent-ai): AI assistants that handle tasks based on assigned blueprints and knowledge.
- [Supervising (Human)](#supervising-human): Humans who guide AI with feedback, questions, or extra info.
- [Knowledge](#knowledge): The info AI uses—documents, FAQs, or other sources.
- [Blueprint](#blueprint): Defines what tasks the AI performs and how.
- [Task and Step](#task-and-step): The execution of a blueprint — what the AI actually does, step by step.
- [Team](#team): A group of AI agents for managing knowledge and leadership.
- [Communication](#communication): How you interact with AI—via chat, email, Slack, WhatsApp, etc.
- [Integration](#integration): Connects to third-party tools via Model Context Protocol (MCP).

## [Agent (AI)](/docs/features/agent)

![Agent Page](agent.png)

Agents are AI assistants that help you with your tasks based on blueprints and knowledge. They are designed to:

- Complete tasks standalone for given blueprints
- Continuously learn and persist to knowledge base
- Collaborate with other human supervisors or human colleagues

## [Supervising (Human)](/docs/features/supervising)

![Supervising](supervising.png)

Supervising by human is raised when the AI is not able to complete the task or needs human input. The supervisor can provide feedback, ask questions, or give additional information to help the AI complete the task.

> :warning: This is the core concept to eliminate hallucination that the AI evaluates knowledge existed before the execution of the task.

## [Knowledge](/docs/features/knowledge)

![Knowledge Base](knowledge.png)

Knowledge is the information that the AI uses when working on responsibilities. It can be in the form of documents, FAQs, or any other.

> Knowledge can be added manually or part of the supervising process during task execution.

## [Blueprint](/docs/features/blueprint)

![Blueprint](blueprint.png)

Blueprint defines the structured execution plan that the AI will follow based on its knowledge. It outlines what the AI can do and how it can help you. Each blueprint contains a flow of nodes that represent the task logic.

> Blueprints can be set to **blocking** mode, which requires human approval before the agent proceeds with execution.

## [Task and Step](/docs/features/task)

![Task](task.png)

Task is the execution of a blueprint. Once a task is initiated through a communication channel, the agent breaks it down into steps and executes them autonomously. Each step is scored for quality metrics such as hallucination score and knowledge score.

> When a step requires supervision (`SUPERVISED_NEEDED`), the task pauses and waits for human input before resuming.

## [Team](/docs/features/team)

![Team](team.png)

Team is a logical grouping of AI agents. This grouping provides 2 major benefits:

- **Knowledge Management**: Knowledge can be shared between AI agents within the team, while each agent can also maintain its own individual knowledge. Effective knowledge management is crucial to eliminate hallucinations.
- **Team Lead**: The team lead is the person responsible for handing off tasks to AI agents.

## [Communication](/docs/features/communication)

![Communication](communication.png)

Communication is the primary way to interact with AI agents. It can occur through various channels such as chat, email, Slack, or WhatsApp. Communication channels are linked to specific blueprints that agents are capable of handling. Multiple channels can be used simultaneously.

> In short, communication opens up AI agents to the outside world, enabling them to receive and perform tasks.

## [Integration](/docs/features/integration)

![Integration](integration.png)

All integrations are based on MCP (Model Context Protocol), which allows agents to connect to any third-party service. Integrations support bidirectional communication:

- **Incoming**: Pulling data such as reading from Google Drive or checking Google Sheets
- **Outgoing**: Sending data such as writing to Google Drive or posting to a Slack channel
