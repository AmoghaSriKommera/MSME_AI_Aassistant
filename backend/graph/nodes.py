from backend.agents.supervisor_agent import supervisor_agent
from backend.agents.rag_agent import rag_agent
from backend.agents.compare_agent import compare_agent
from backend.agents.explain_agent import explain_agent
from backend.agents.application_agent import application_agent
from backend.agents.eligibility_agent import eligibility_agent


NODE_MAP = {
    "rag": rag_agent,
    "compare": compare_agent,
    "explain": explain_agent,
    "application": application_agent,
    "eligibility": eligibility_agent
}


def execute_node(state):

    state = supervisor_agent(
        state
    )

    node = NODE_MAP[
        state["route"]
    ]

    return node(
        state
    )