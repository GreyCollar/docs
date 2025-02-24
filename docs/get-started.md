---
sidebar_position: 1
description: Get started with Nucleoid, a declarative, logic-based runtime designed for Neuro-Symbolic AI, focusing on adaptive reasoning and explainability through the Logic Graph.
---

# Get Started

Welcome to GreyCollar, a supervised AI Agent framework designed for seamless human-AI collaboration through autonomous
workflows, human-in-the-loop processes, asynchronous communication, and open-ended task execution. This guide will help
you set up and run the project using TypeScript and npm.

## Prerequisites

Before getting started, make sure the following are installed:

- Node.js (v14 or higher) – Download [Node.js](https://nodejs.org)
- npm – Comes bundled with Node.js
- TypeScript – Globally installed for development

Install TypeScript globally if not already installed:

```bash
npm install -g typescript
```

## Installation

1. Clone the Repository

```bash
git clone https://github.com/greycollar/greycollar.git
cd greycollar
```

2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

3. Set Up Environment Variables

Create a .env file in the root directory and define the necessary environment variables.

4. Start the Application

```bash
npm run dev
```

or you can start individual components:

```bash
npm run dev:api
npm run dev:dashboard
npm run dev:main
```

This will start three applications simultaneously: Dashboard, API Server and Proxy Server. Once started, the dashboard
should be accessible in your browser at http://localhost:3000
