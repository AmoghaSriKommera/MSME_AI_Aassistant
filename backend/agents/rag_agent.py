from backend.rag.retriever import retrieve
from backend.llm.groq_client import groq_client

def rag_agent(state):

    result = retrieve(
        state["query"]
    )

    docs = result["documents"][0]

    context = "\n\n".join(
        docs
    )

    prompt = f"""
You are an MSME Government Scheme Expert.

Use only the provided context.

Context:

{context}

Question:

{state['query']}


Answer:
"""

    response = groq_client.generate(
        prompt
    )

    state["response"] = response
    print("Running retrieval...")
    result = retrieve(state["query"])

    print("Retrieved documents")
    docs = result["documents"][0]

    print("Generating response...")
    return state 