from backend.tools.scheme_document_mapper import (
    SCHEME_DOCUMENTS
)


def generate_checklist(scheme_name):

    return SCHEME_DOCUMENTS.get(
        scheme_name,
        []
    )


def calculate_completion(
        required_docs,
        uploaded_docs
):

    uploaded = set(uploaded_docs)

    completed = [
        doc
        for doc in required_docs
        if doc in uploaded
    ]

    missing = [
        doc
        for doc in required_docs
        if doc not in uploaded
    ]

    percentage = (
        len(completed)
        /
        len(required_docs)
        * 100
    ) if required_docs else 0

    return {
        "completed": completed,
        "missing": missing,
        "percentage": round(
            percentage,
            2
        )
    }