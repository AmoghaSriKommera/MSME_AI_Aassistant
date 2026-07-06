from backend.graph.builder import invoke_graph


response = invoke_graph(
    "compare PMEGP and MUDRA for women entrepreneurs in Telangana"
)

print(
    response["response"]
)