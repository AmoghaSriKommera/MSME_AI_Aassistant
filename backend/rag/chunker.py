def build_embedding_text(scheme):

    text = f"""
    Scheme Name:
    {scheme.get("scheme_name","")}

    Description:
    {scheme.get("description","")}

    Objectives:
    {scheme.get("objectives","")}

    Benefits:
    {scheme.get("benefits","")}

    Eligibility:
    {scheme.get("eligibility","")}

    Features:
    {scheme.get("features","")}

    Documents Required:
    {scheme.get("documents_required","")}

    Procedure:
    {scheme.get("procedure","")}

    Other Benefits:
    {scheme.get("other_benefits","")}
    """

    return text.strip()