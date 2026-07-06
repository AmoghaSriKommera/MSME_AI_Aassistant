from langgraph.graph import StateGraph, END

from backend.graph.state import GraphState

from backend.agents.router_agent import router_agent
from backend.agents.rag_agent import rag_agent
from backend.agents.compare_agent import compare_agent
from backend.agents.application_agent import application_agent
from backend.agents.explain_agent import explain_agent
from backend.agents.eligibility_agent import eligibility_agent
from backend.agents.research_agent import research_agent


workflow = StateGraph(GraphState)

workflow.add_node(
    "router",
    router_agent
)

workflow.add_node(
    "rag",
    rag_agent
)

workflow.add_node(
    "compare",
    compare_agent
)

workflow.add_node(
    "application",
    application_agent
)

workflow.add_node(
    "explain",
    explain_agent
)

workflow.add_node(
    "eligibility",
    eligibility_agent
)

workflow.add_node(
    "research",
    research_agent
)


workflow.set_entry_point(
    "router"
)


def route_decision(state):

    return state["route"]


workflow.add_conditional_edges(
    "router",
    route_decision,
    {
        "rag": "rag",
        "compare": "compare",
        "application": "application",
        "explain": "explain",
        "eligibility": "eligibility",
        "research": "research"
    }
)


workflow.add_edge(
    "rag",
    END
)

workflow.add_edge(
    "compare",
    END
)

workflow.add_edge(
    "application",
    END
)

workflow.add_edge(
    "explain",
    END
)

workflow.add_edge(
    "eligibility",
    END
)

workflow.add_edge(
    "research",
    END
)

graph = workflow.compile()