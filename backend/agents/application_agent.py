from backend.tools.scheme_extractor import (
    extract_schemes
)

from backend.tools.document_checklist import (
    generate_checklist,
    calculate_completion
)

from backend.session.session_store import (
    SESSION
)

def application_agent(state):

    schemes = extract_schemes(
        state["query"]
    )

    if not schemes:

        state["response"] = (
            "Please specify "
            "a scheme name."
        )

        return state

    scheme = schemes[0]

    checklist = generate_checklist(
        scheme
    )

    uploaded_docs = []

    result = calculate_completion(
        checklist,
        uploaded_docs
    )

    response = f"""
Application Checklist
for {scheme}

Completed Documents:

{result['completed']}

Missing Documents:

{result['missing']}

Uploaded Documents:

{SESSION["uploaded_documents"]}

Verified Information:

{SESSION["verified_fields"]}

Completion:

{result['percentage']}%
"""

    state["response"] = response

    return state