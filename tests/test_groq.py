from backend.llm.groq_client import groq_client

response = groq_client.generate(
    "Say hello in one sentence.",
    fast=True
)

print(response)