from backend.llm.groq_client import groq_client


def router_agent(state):

    prompt = f"""
You are an intelligent routing agent for an MSME AI assistant.

Available routes:

eligibility
compare
application
explain
research
rag

Routing Rules:

1. eligibility
   - user asks whether they qualify
   - user asks eligibility related questions
   - examples:
        "Am I eligible for PMEGP?"
        "Can I apply for Mudra?"
        "Check my eligibility"

2. compare
   - user compares two or more schemes
   - examples:
        "Compare PMEGP and CGTMSE"
        "PMEGP vs Mudra"

3. application
   - application process
   - required documents
   - progress tracking
   - examples:
        "How do I apply for PMEGP?"
        "Required documents for Mudra"

4. explain
   - user wants information or explanation
   - examples:
        "Explain TS-iPASS"
        "What is PMEGP?"
        "Tell me about Stand Up India"
        "Explain Mudra Loan"

5. research
   - detailed analysis
   - trends
   - statistics
   - policy discussions

6. rag
   - questions requiring scheme document retrieval

Return ONLY one word.

Query:

{state["query"]}
"""

    route = groq_client.generate(
        prompt,
        fast=True
    )

    route = (
        route
        .strip()
        .lower()
        .replace("\n", "")
        .replace(".", "")
    )

    valid_routes = [
        "eligibility",
        "compare",
        "application",
        "explain",
        "research",
        "rag"
    ]

    if route not in valid_routes:

        print(
            "INVALID ROUTE:",
            route
        )

        route = "explain"

    print(
        "\nROUTER DECISION:",
        route
    )

    state["route"] = route

    return state