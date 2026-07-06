from backend.graph.builder import (
    invoke_graph
)

result = invoke_graph(
    """
How do I apply for PMEGP?
"""
)

print(
    result["response"]
)