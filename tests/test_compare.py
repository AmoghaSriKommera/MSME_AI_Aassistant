from backend.graph.builder import (
    invoke_graph
)


result = invoke_graph(

    "compare PMEGP and Mudra"
)

print(
    result["response"]
)