def route_query(query: str):

    query = query.lower()

    compare_keywords = [
        "compare",
        "difference",
        "better",
        "vs"
    ]

    eligibility_keywords = [
        "eligible",
        "qualify",
        "am i eligible",
        "can i apply"
    ]

    application_keywords = [
        "documents",
        "apply",
        "application",
        "process",
        "procedure"
    ]

    explain_keywords = [
        "what is",
        "explain",
        "meaning"
    ]

    if any(
        word in query
        for word in compare_keywords
    ):
        return "compare"

    if any(
        word in query
        for word in eligibility_keywords
    ):
        return "eligibility"

    if any(
        word in query
        for word in application_keywords
    ):
        return "application"

    if any(
        word in query
        for word in explain_keywords
    ):
        return "explain"

    return "rag"