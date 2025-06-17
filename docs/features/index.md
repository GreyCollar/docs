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
    url={"https://cdn.nucleoid.com/media/618a935b-9b4b-406c-95b5-7223396b8bc4.mp4"}
    width={"100%"}
    height={"100%"}
    controls
    loop
    playing={true}
  />
</p>

GreyCollar is a supervised AI platform designed to enhance human-AI collaboration by providing an environment for AI colleagues to continuously learn from human supervisors.

Explore the key features of GreyCollar below:

- [Colleague (AI)](#colleague-ai): AI assistants that handle tasks based on assigned responsibilities and knowledge.
- [Supervising (Human)](#supervising-human): Humans who guide AI with feedback, questions, or extra info.
- [Knowledge](#knowledge): The info AI uses—documents, FAQs, or other sources.
- [Responsibility and Task](#responsibility-and-task): Defines what tasks the AI performs and how.
- [Team](#team): A group of AI colleagues for managing knowledge and leadership.
- [Communication](#communication): How you interact with AI—via chat, email, Slack, WhatsApp, etc.
- [Integration](#integration): Connects to third-party tools via Model Context Protocol (MCP).

## [Colleague (AI)](/docs/features/colleague)

![Colleague Page](https://cdn.nucleoid.com/greycollar/media/5afbf454-97dc-45a9-bc4d-14fb69d6b1f9.png)

Colleagues are AI assistants that help you with your tasks based on responsibilities and knowledge. They are designed to:

- Complete tasks standalone for given responsibilities
- Continuously learn and persist to knowledge base
- Collaborate with other human supervisors or human colleagues

## [Supervising (Human)](/docs/features/supervising)

![Supervising](https://cdn.nucleoid.com/greycollar/media/c09ef87d-7453-4a49-9b31-c56a0aaaa03f.png)

Supervising by human is raised when the AI is not able to complete the task or needs human input. The supervisor can provide feedback, ask questions, or give additional information to help the AI complete the task.

> :warning: This is the core concept to eliminate hallucination that the AI evaluates knowledge existed before the execution of the task.

## [Knowledge](/docs/features/knowledge)

![Knowledge Base](https://cdn.nucleoid.com/greycollar/media/e10ddf80-499f-45da-9182-7284fcc21bf0.png)

Knowledge is the information that the AI uses when working on responsibilities. It can be in the form of documents, FAQs, or any other.

> Knowledge can be added manually or part of the supervising process during task execution.

## [Responsibility and Task](/docs/features/responsibility)

![Responsibility](https://cdn.nucleoid.com/greycollar/media/d12714f4-e584-4020-92cb-62a25664e14d.png)

Responsibility is a blueprint of the tasks that the AI will perform based on knowledge. It defines what the AI can do and how it can help you.

> Tasks are the actions that the AI performs for a given responsibility with knowledge. Once the task is initiated through communication, the AI will execute the task and provide feedback to the supervisor.

## [Team](/docs/features/team)

![Team](https://cdn.nucleoid.com/greycollar/media/8046f722-d9c0-487f-89b2-a4e3aafc1874.png)

Team is a logical grouping of AI colleagues. Mainly this grouping provides 2 major benefits:

- **Knowledge Management**: Knowledge can be shared between AI colleagues within the team, while each colleague can also maintain their own individual knowledge. In agentic AI, effective knowledge management is crucial to eliminate hallucinations, ensuring that each AI colleague has sufficient knowledge to complete tasks without being misled by irrelevant or unnecessary information. a
- **Team Lead**: The team lead is the person responsible for handing off the task to the AI colleagues.

## [Communication](/docs/features/communication)

![Communication](https://cdn.nucleoid.com/greycollar/media/1f23108d-5f9d-4b20-8064-3679ee43289b.png)

Communication is the primary way to interact with AI colleagues. It can occur through various channels, such as chat, email, or voice, depending on the context and user preferences. These communication channels are linked to specific responsibilities that AI colleagues are capable of handling, ensuring interactions are efficient and task-relevant. Multiple channels can be used simultaneously, allowing for flexibility in how users engage with AI colleagues.

> In short, communication opens up AI colleagues to the outside world, enabling them to perform tasks.

## [Integration](/docs/features/integration)

![Integration](https://cdn.nucleoid.com/greycollar/media/4a1ef3f7-172a-49ea-a782-ac170d335640.png)

All integrations are based on MCP that allows you to connect to any third-party service. The integration can be used for bidirectional communication:

- Incoming: Pulling data such as reading from Google Drive or checking Google Calendar 
- Outgoing: Sending data such as writing to Google Drive or posting to a Slack channel
