# Setup Guide

## Backend Setup

``` bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend Setup

``` bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file and configure: - GROQ_API_KEY - REDIS_URL -
POSTGRES_URL
