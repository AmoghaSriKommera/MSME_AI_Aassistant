import re


def extract_fields(
    text,
    document_type
):

    fields = {}

    cleaned_text = text.replace(
        "\n",
        " "
    )

    # =========================
    # Aadhaar Card
    # =========================

    if document_type == "Aadhaar Card":

        aadhaar_match = re.search(
            r"\d{4}\s?\d{4}\s?\d{4}",
            cleaned_text
        )

        if aadhaar_match:

            fields[
                "aadhaar_number"
            ] = (
                aadhaar_match
                .group()
            )

        gender_match = re.search(
            r"(Male|Female)",
            cleaned_text,
            re.IGNORECASE
        )

        if gender_match:

            fields[
                "gender"
            ] = (
                gender_match
                .group()
            )

        year_match = re.search(
            r"\b(19\d{2}|20\d{2})\b",
            cleaned_text
        )

        if year_match:

            fields[
                "birth_year"
            ] = (
                year_match
                .group()
            )

    # =========================
    # PAN Card
    # =========================

    elif document_type == "PAN Card":

        # PAN Number
        pan_match = re.search(
            r"[A-Z]{5}\s?[0-9]{4}\s?[A-Z]",
            cleaned_text
        )

        if pan_match:

            fields[
                "pan_number"
            ] = (
                pan_match
                .group()
                .replace(
                    " ",
                    ""
                )
            )

        # Name
        name_match = re.search(
            r"Name[:\s]+([A-Z ]+)",
            cleaned_text,
            re.IGNORECASE
        )

        if name_match:

            fields[
                "holder_name"
            ] = (
                name_match
                .group(1)
                .strip()
            )

        # Father's Name
        father_match = re.search(
            r"Father'?s Name[:\s]+([A-Z ]+)",
            cleaned_text,
            re.IGNORECASE
        )

        if father_match:

            fields[
                "father_name"
            ] = (
                father_match
                .group(1)
                .strip()
            )

        # Date of Birth
        dob_match = re.search(
            r"\d{2}/\d{2}/\d{4}",
            cleaned_text
        )

        if dob_match:

            fields[
                "date_of_birth"
            ] = (
                dob_match
                .group()
            )

    # =========================
    # GST Certificate
    # =========================

    elif document_type == "GST Certificate":

        gst_match = re.search(
            r"\d{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]",
            cleaned_text
        )

        if gst_match:

            fields[
                "gst_number"
            ] = (
                gst_match
                .group()
            )

    return fields