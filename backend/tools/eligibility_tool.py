import json


with open(
    "data/metadata/msme_schemes_metadata.json",
    encoding="utf-8"
) as f:

    data = json.load(f)


SCHEMES = (
    data["central_schemes"]
    +
    data["telangana_state_schemes"]
)


def check_eligibility(
        profile
):

    results = []

    for scheme in SCHEMES:

        score = 0

        eligibility = (
            scheme.get(
                "eligibility",
                {}
            )
        )

        if (
            profile.get(
                "gender"
            )
            ==
            "female"
        ):

            score += 1

        if (
            profile.get(
                "state"
            )
            ==
            "telangana"
        ):

            score += 1

        if score > 0:

            results.append(
                {
                    "scheme":
                    scheme[
                        "scheme_name"
                    ],

                    "score":
                    score
                }
            )

    return sorted(
        results,
        key=lambda x:
        x["score"],
        reverse=True
    )