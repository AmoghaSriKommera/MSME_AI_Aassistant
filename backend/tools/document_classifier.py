import re


def classify_document(text):

    text = text.lower()

    text = text.replace(
        "aadhar",
        "aadhaar"
    )

    text = text.replace(
        "adhar",
        "aadhaar"
    )

    if (
        "aadhaar" in text or
        "uidai" in text or
        "government of india" in text
    ):

        return "Aadhaar Card"

    if (
        "income tax department" in text or
        "permanent account number" in text or
        re.search(
            r"[A-Z]{5}[0-9]{4}[A-Z]",
            text.upper()
        )
    ):

        return "PAN Card"

    if (
        "goods and services tax" in text or
        "gstin" in text or
        "gst registration" in text
    ):

        return "GST Certificate"

    if (
        "bank statement" in text or
        "account statement" in text or
        "ifsc" in text
    ):

        return "Bank Statement"

    if (
        "udyam" in text or
        "certificate of incorporation" in text or
        "registration number" in text
    ):

        return "Business Registration"

    if (
        "project report" in text or
        "business proposal" in text or
        "financial projections" in text
    ):

        return "Project Report"

    return "Unknown Document"