from backend.graph.builder import invoke_graph


queries = [

    "compare PMEGP and Mudra",

    "am i eligible for PMEGP",

    "explain cgtmse",

    "how do i apply for stand up india",

    "best schemes for women entrepreneurs in telangana"
]


for query in queries:

    result = invoke_graph(
        query
    )

    print("\n")
    print("="*50)
    print(query)
    print("="*50)
    print(result["route"])