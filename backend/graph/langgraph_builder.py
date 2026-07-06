from langgraph.graph import StateGraph

from backend.graph.state import GraphState

from backend.agents.router_agent import (
    router_agent
)

from backend.agents.rag_agent import (
    rag_agent
)

from backend.agents.compare_agent import (
    compare_agent
)

from backend.agents.application_agent import (
    application_agent
)

from backend.agents.explain_agent import (
    explain_agent
)

from backend.agents.eligibility_agent import (
    eligibility_agent
)


builder = StateGraph(
    GraphState
)


builder.add_node(
    "router",
    router_agent
)

builder.add_node(
    "rag",
    rag_agent
)

builder.add_node(
    "compare",
    compare_agent
)

builder.add_node(
    "application",
    application_agent
)

builder.add_node(
    "explain",
    explain_agent
)

builder.add_node(
    "eligibility",
    eligibility_agent
)