---
sidebar_position: 1
title: Agent (AI)
---

![Agent](https://cdn.nucleoid.com/greycollar/media/40538a45-0abc-452d-9772-b58efd3daf67.png)

Agent is an AI assistant that performs tasks based on its blueprints and knowledge.

- **Name**: The name of the agent.
- **Icon**: The icon representing the agent.
- **Description**: A description of the agent's purpose and behavior.

## AI Engine

![AI Engine](https://cdn.nucleoid.com/greycollar/media/f145d713-5b3c-46b0-9096-85e73f4de649.png)

Each agent can be run on a different AI engine, which can be configured in the settings. Even within the same team, different agents can use different AI engines.

> :warning: Even though agents share the same team knowledge base, the platform manages embeddings per AI engine so each agent can effectively utilize the knowledge base.

# Agent Wizard

import ReactPlayer from "react-player";

<p align="center">
  <ReactPlayer
    url={"https://cdn.nucleoid.com/greycollar/media/3c746f16-ba2a-48c8-a273-d3b63a9f43c0.mp4"}
    width={"100%"}
    height={"100%"}
    controls
    loop
    playing={true}
  />
</p>

The Agent Wizard is a guided process to create a new agent. It helps you set up the agent's name, icon, description, and AI engine.
