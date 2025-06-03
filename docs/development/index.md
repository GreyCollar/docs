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

### [Colleague (AI)](colleague)

Colleague is the AI assistant that helps you with your tasks based on responsibilities and knowledge.

### [Knowledge](knowledge)

Knowledge is the information that the AI uses to assist you. It can be in the form of documents, FAQs, or any other relevant data.

### [Responsibility](responsibility)

Responsibility is blueprint of the tasks that the AI can perform. It defines what the AI can do and how it can assist you.

### [Integration](integration)

Integrations are the connections between GreyCollar and other applications or services. They allow for seamless data exchange and functionality.

### [Task/Step](task)

Task is the action that the AI performs based on the knowledge and responsibility. It can be a simple task or a complex process.

### [Supervising (Human)](supervising)

Supervising is the process of monitoring and managing the AI's actions. It ensures that the AI is performing tasks correctly and efficiently.

### [Communication](communication)

Communication is the interaction between the AI and the user. It can be in the form of messages, notifications, or any other means of communication.

### [Team/TeamDetails](team)

Team is the group of colleagues that work together to achieve a common goal. It can be a project team, department, or any other group of individuals.

### [Session/Conversation](session)

Session is the interaction between the user and the AI. It can be a chat, email, or any other form of communication.
