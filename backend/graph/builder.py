from backend.graph.workflow import graph


def invoke_graph(query):

    state = {

        "query": query,

        "user_profile": {},

        "route": None,

        "eligible_schemes": [],

        "retrieved_docs": [],

        "comparison_result": {},

        "application_status": {},

        "research_results": [],

        "response": ""
    }

    result = graph.invoke(
        state
    )

    return result