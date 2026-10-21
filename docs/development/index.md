---
sidebar_position: 3
title: Development
description: GreyCollar Development
---

## Supervised Agentic AI Platform

<img alt="Supervised Agentic AI Platform" src="https://cdn.nucleoid.com/greycollar/media/52d1063c-bc59-44ef-ac7c-d246d7755db4.png" width="500"/>

Supervised Agentic AI Platform is a human-in-the-loop system that uses supervised learning to guide and continuously train AI agents to perform day-to-day tasks in the workplace.

- **Human-in-the-loop**: Integrates human supervision into the AI loop for quality control, decision validation, and ongoing improvement.
- **Supervised Learning:** Trains AI agents using labeled examples and human-validated outputs to accurately complete assigned tasks.
- **Autonomous Workflow:** Supports intelligent task composition, allowing agents to break down goals into manageable actions and complete them end-to-end.

### MCP Layer

MCP standardizes the way applications deliver relevant context to LLMs, facilitating smarter and more adaptable agents. The platform is built on top of the MCP layer, which is designed to be modular and extensible, allowing for easy integration with other applications and services.

<img alt="MCP Layer" src="https://cdn.nucleoid.com/greycollar/media/2f5e212a-062c-421b-9c4c-ef14a309e251.png" width="800"/>

- **Modular and Extensible:** The MCP layer is designed to be modular and extensible, allowing for easy integration with other applications and services.
- **Standardized Context Delivery:** The MCP layer standardizes the way applications deliver relevant context to LLMs, facilitating smarter and more adaptable agents.
- **Real-time Communication:** The MCP layer enables real-time communication and interaction between different agents and services, allowing for seamless data exchange and functionality.

### Event Layer

GreyCollar adopts Event-Driven Architecture (EDA), which enables asynchronous communication by allowing systems to emit signals and others to act on them.

- **Asynchronous Communication:** Event-driven architecture enables asynchronous communication between different components of the system, allowing for more efficient and responsive interactions.
- **Flexibility:** The event-driven architecture allows for easy integration with other systems and services, making it easier to adapt to changing requirements and needs.
- **Real-time Processing:** The event-driven architecture allows for real-time processing of events, enabling faster response times and improved user experience.

### Reactive Functions Layer

Reactive functions are part of reactive programming and work alongside the event layer to provide a reactive programming model. This allows for the creation of functions that respond to events and changes in the system.

<img alt="Reactive Functions Layer" src="https://cdn.nucleoid.com/greycollar/media/60812487-52be-4c65-b011-4b713f9834bd.png" width="800"/>

### Communication Layer

Communication layer is the interface for agentic AI to interact with the outside world. Differences between the communication layer and the MCP layer are:

- **MCP Layer**: The MCP layer provides integrations to 3rd party applications and services in part of task execution.
- **Communication Layer**: The communication layer is the interface for agentic AI to interact with the outside world.

---

## Entities

![Entities](https://cdn.nucleoid.com/greycollar/media/93297a8d-6489-473b-a0d2-be909a10c1e1.png)

### [Agent (AI)](agent)

Agent is the AI assistant that helps you with your tasks based on blueprints and knowledge.

### [Knowledge](knowledge)

Knowledge is the information that the AI uses to assist you. It can be in the form of documents, FAQs, or any other relevant data.

### [Blueprint](blueprint)

Blueprint defines the tasks that the AI agent can perform. It contains the flow of nodes and task execution logic.

### [MCP (Integration)](integration)

MCP connections allow agents to access third-party tools and services via the Model Context Protocol.

### [Task/Step](task)

Task is the action that the AI performs based on its knowledge and blueprint. Steps are the individual execution units within a task.

### [Supervising (Human)](supervising)

Supervising is the human-in-the-loop process that ensures the AI performs tasks correctly and eliminates hallucinations.

### [Communication](communication)

Communication links external messaging channels (Slack, WhatsApp, Email) to blueprints, enabling agents to receive tasks from the outside world.

### [Team/TeamDetails](team-details)

Team is the logical group that agents belong to. It manages shared knowledge and team-level settings.

### [Session/Conversation](session)

Session is the interaction between a user and an agent. It can be a chat or email conversation.

### [Step Score](step-score)

Step Score tracks quality metrics for each step executed during a task, including hallucination scores and human feedback scores.
