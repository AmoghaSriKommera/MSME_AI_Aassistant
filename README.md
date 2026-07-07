# MSME AI Assistant

## Overview

MSME AI Assistant is a multi-agent AI platform built to help Indian
MSMEs discover schemes, check eligibility, compare benefits, and
simplify applications.

## Core Features

-   Multi-agent architecture
-   Hybrid RAG pipeline
-   Eligibility engine
-   Scheme comparison
-   Document intelligence
-   Persistent memory
-   WebSocket support

## Tech Stack

### Frontend

-   React
-   Vite
-   TypeScript
-   Zustand
-   ShadCN UI

### Backend

-   FastAPI
-   LangGraph
-   ChromaDB
-   Redis
-   PostgreSQL
-   Groq / Ollama

## Architecture

User → Frontend → FastAPI → Supervisor Agent → Specialized Agents →
LLM + Vector Database
