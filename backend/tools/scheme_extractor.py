import re
import json


with open(
    "data/metadata/msme_schemes_metadata.json",
    encoding="utf-8"
) as f:

    data = json.load(f)


ALL_SCHEMES = (
    data["central_schemes"]
    +
    data["telangana_state_schemes"]
)


ALIASES = {
    "mudra":
        "Pradhan Mantri Mudra Yojana (PMMY)",

    "pmegp":
        "Prime Minister's Employment Generation Programme (PMEGP)",

    "cgtmse":
        "Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGS-I)",

    "cgsi":
        "Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGS-I)",

    "tsipass":
        "TS-iPASS",

    "ts-ipass":
        "TS-iPASS",

    "wehub":
        "WE Hub",

    "we hub":
        "WE Hub",

    "tidea":
        "T-IDEA",

    "t-idea":
        "T-IDEA",

    "tspride":
        "TS-PRIDE",

    "ts-pride":
        "TS-PRIDE"
}


def normalize(text):

    return (
        text.lower()
        .replace("-", "")
        .replace("_", "")
        .replace(" ", "")
    )


def extract_schemes(query):

    found = []

    query_normalized = normalize(
        query
    )

    # Alias Matching
    for alias, scheme in ALIASES.items():

        if normalize(alias) in query_normalized:

            found.append(
                scheme
            )

    # Metadata Matching
    for scheme in ALL_SCHEMES:

        scheme_name = (
            scheme["scheme_name"]
        )

        scheme_normalized = normalize(
            scheme_name
        )

        if (
            scheme_normalized
            in
            query_normalized
        ):

            found.append(
                scheme_name
            )

        acronym_matches = re.findall(
            r"\((.*?)\)",
            scheme_name
        )

        for acronym in acronym_matches:

            if (
                normalize(acronym)
                in
                query_normalized
            ):

                found.append(
                    scheme_name
                )

    found = list(
        set(found)
    )

    print(
        "\nSCHEMES EXTRACTED:"
    )

    print(
        found
    )

    return found