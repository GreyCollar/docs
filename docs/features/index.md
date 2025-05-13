---
sidebar_position: 2
title: Features
description: GreyCollar features and capabilities
collapsed: false
---

# Features

GreyCollar is a comprehensive platform that offers a wide range of features to support human-AI collaboration,
streamline workflows, and enhance productivity. Explore the key features of GreyCollar below:

import ReactPlayer from "react-player";

<p align="center">
  <ReactPlayer
    width={"100%"}
    height={"100%"}
    controls
    playing={true}
    loop
    url={
      "https://cdn.nucleoid.com/media/618a935b-9b4b-406c-95b5-7223396b8bc4.mp4"
    }
  />
</p>

## [Colleague (AI)](/docs/features/colleague)
![Colleague Page](/media/profile.png)

Colleagues are AI assistants that help you with your tasks based on responsibilities and knowledge. They are designed to:

- Complete tasks standalone for given responsibilities
- Continuously learn and persist to knowledge base
- Collaborate with other human supervisors or human colleagues

## [Knowledge](/docs/features/knowledge)

![Knowledge Base](/media/knowledge-base.png)

Knowledge is the information that the AI uses when working on responsibilities. It can be in the form of documents, FAQs, or any other.

> Knowledge can be added manually or part of the supervising process during task execution.

## [Responsibility and Task](/docs/features/responsibility)

![Responsibility](/media/responsibility.png)

Responsibility is a blueprint of the tasks that the AI will perform based on knowledge. It defines what the AI can do and how it can help you.

> Tasks are the actions that the AI performs for a given responsibility with knowledge. Once the task is initiated through communication, the AI will execute the task and provide feedback to the supervisor.

## [Supervising (Human)](/docs/features/supervising)
![Supervising](/media/supervising.png)

Supervising by human is raised when the AI is not able to complete the task or needs human input. The supervisor can provide feedback, ask questions, or give additional information to help the AI complete the task.

> :warning: This is the core concept to eliminate hallucination that the AI evaluates knowledge existed before the execution of the task.

## [Team](/docs/features/team)

![Team](/media/team.png)

Team is a logical grouping of AI colleagues. Mainly this grouping provides 2 major benefits:

- **Knowledge Management**: Knowledge can be shared between AI colleagues within the team, while each colleague can also maintain their own individual knowledge. In agentic AI, effective knowledge management is crucial to eliminate hallucinations, ensuring that each AI colleague has sufficient knowledge to complete tasks without being misled by irrelevant or unnecessary information. a
- **Team Lead**: The team lead is the person responsible for handing off the task to the AI colleagues.

## [Communication](/docs/features/communication)

![Communication](/media/communication.png)

Communication is the primary way to interact with AI colleagues. It can occur through various channels, such as chat, email, or voice, depending on the context and user preferences. These communication channels are linked to specific responsibilities that AI colleagues are capable of handling, ensuring interactions are efficient and task-relevant. Multiple channels can be used simultaneously, allowing for flexibility in how users engage with AI colleagues.

> In short, communication opens up AI colleagues to the outside world, enabling them to perform tasks.

## [Integration](/docs/features/integration)

![Integration](/media/integration.png)

All integrations are based on MCP that allows you to connect to any third-party service. The integration can be used for bidirectional communication:

- Incoming: Pulling data such as reading from Google Drive or checking Google Calendar 
- Outgoing: Sending data such as writing to Google Drive or posting to a Slack channel
