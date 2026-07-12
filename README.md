# MSME AI Assistant
An enterprise-grade, multi-agent AI platform that helps MSMEs discover government schemes, check eligibility, compare schemes, understand documentation, and receive application guidance using Retrieval-Augmented Generation (RAG), LangGraph orchestration, FastAPI, and a modern React frontend.

---

# Table of Contents

1. Project Overview
2. Key Features
3. System Architecture
4. Request Flow
5. Technology Stack
6. Backend Architecture
7. Frontend Architecture
8. Folder Structure
9. File-by-File Explanation
10. Multi-Agent Workflow
11. RAG Pipeline
12. API Endpoints
13. Installation
14. Environment Variables
15. Running the Project
16. Docker Deployment
17. Future Improvements
18. License

---

# Project Overview

MSME AI Assistant is designed to simplify the process of discovering, understanding, comparing, and applying for government schemes available to Micro, Small and Medium Enterprises.

The platform combines:

- Multi-Agent AI
- LangGraph workflow orchestration
- Retrieval-Augmented Generation (RAG)
- Hybrid Retrieval
- FastAPI backend
- React + TypeScript frontend
- Redis session memory
- PostgreSQL
- Vector Search

to create an intelligent assistant capable of understanding user needs and providing grounded, explainable responses.

---

# Key Features

- AI-powered Scheme Discovery
- Eligibility Analysis
- Scheme Comparison
- Research Assistant
- Explain Complex Policies
- Application Guidance
- Hybrid RAG Search
- Multi-Agent Workflow
- Persistent Chat Memory
- Real-time Chat API
- Document Upload
- OCR-ready Architecture
- Modular Backend
- Modern React UI

---

# High-Level Architecture

```text
                  User
                    │
        React + Vite + TypeScript
                    │
          REST API / WebSocket
                    │
              FastAPI Backend
                    │
             LangGraph Workflow
                    │
         Supervisor + Router Agent
                    │
 ┌──────────────┬──────────────┬───────────────┐
 │              │              │               │
RAG      Eligibility      Compare      Research
 │
Hybrid Retriever
 │
Vector Database
 │
Government Scheme Documents
```

---

# Request Flow

```text
User
 │
 ▼
Frontend
 │
 ▼
FastAPI
 │
 ▼
Router Agent
 │
 ▼
Supervisor
 │
 ▼
Selected Specialist Agent
 │
 ▼
Hybrid Retrieval
 │
 ▼
LLM
 │
 ▼
Response
```

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, TypeScript, Vite |
| Backend | FastAPI |
| AI Framework | LangGraph |
| LLM | Groq / Ollama |
| Retrieval | Hybrid RAG |
| Database | PostgreSQL |
| Cache | Redis |
| Vector Search | Embedding Store |
| Deployment | Docker |

---

# Backend Folder Structure

```text
backend/
├── agents/
├── api/
├── db/
├── graph/
├── llm/
├── memory/
├── models/
├── rag/
├── session/
├── tools/
├── uploads/
├── main.py
└── __init__.py
```

## Folder Responsibilities

### agents/
Contains all specialized AI agents.

- application_agent.py — Application guidance
- compare_agent.py — Scheme comparison
- eligibility_agent.py — Eligibility checking
- explain_agent.py — Policy explanation
- rag_agent.py — Knowledge retrieval
- research_agent.py — Research workflows
- router_agent.py — Intent routing
- supervisor_agent.py — Agent orchestration

### api/
REST APIs and websocket communication.

### db/
Database connectors for PostgreSQL and Redis.

### graph/
LangGraph workflow construction, routing, state management and execution graph.

### llm/
LLM provider clients.

### memory/
Conversation memory implementation.

### models/
Shared Pydantic models.

### rag/
Document ingestion, chunking, embedding, retrieval, reranking and vector store.

### session/
Session management.

### tools/
Utility modules including eligibility engine, extraction, document processing and scheme lookup.

### uploads/
Temporary uploaded documents.

---

# Frontend Folder Structure

```text
frontend/
├── components/
├── lib/
├── src/
├── public/
├── package.json
└── vite.config.ts
```

Frontend responsibilities include UI rendering, API integration, routing, reusable components, markdown rendering, animations and state management.

---

# Multi-Agent Architecture

- Supervisor Agent
- Router Agent
- RAG Agent
- Eligibility Agent
- Compare Agent
- Explain Agent
- Research Agent
- Application Agent

Each agent focuses on one responsibility, improving modularity, maintainability and response quality.

---

# RAG Pipeline

```text
Documents
   │
Chunking
   │
Embedding
   │
Vector Store
   │
Hybrid Retrieval
   │
Re-ranking
   │
Context Assembly
   │
LLM
   │
Final Answer
```

---

# API Endpoints

- POST /chat
- POST /eligibility
- POST /compare
- POST /upload
- GET /health

---

# Installation

```bash
git clone <repository>

cd MSME_AI_Aassistant

pip install -r requirements.txt

cd frontend

npm install
```

Run backend

```bash
python run.py
```

Run frontend

```bash
npm run dev
```

---

# Docker

```bash
docker compose up --build
```

---

# Future Improvements

- OCR
- Voice Assistant
- WhatsApp Integration
- Mobile Application
- Government API Integration
- Regional Languages
- Analytics Dashboard

---

# License

Educational and demonstration purposes unless otherwise specified.
